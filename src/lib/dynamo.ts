import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME!;
const PK = process.env.DYNAMODB_TABLE_PARTITION_KEY!;
const SK = process.env.DYNAMODB_TABLE_SORT_KEY!;

/**
 * Single-table design:
 *
 * Partition key: PROJECT#<project>
 * Sort key:      TYPE#<type>#<id>
 *
 * Waitlist entry:  PK=PROJECT#cutengine  SK=WAITLIST#<email>
 * Inbound email:   PK=PROJECT#cutengine  SK=EMAIL#<timestamp>#<email_id>
 */

export async function addWaitlistEntry(project: string, email: string) {
  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        [PK]: `PROJECT#${project}`,
        [SK]: `WAITLIST#${email}`,
        email,
        project,
        type: "waitlist",
        created_at: new Date().toISOString(),
      },
      ConditionExpression: `attribute_not_exists(${SK})`,
    }),
  );
}

export async function storeInboundEmail(
  project: string,
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    received_at: string;
    body?: string;
  },
) {
  const timestamp = new Date(data.received_at).toISOString();

  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        [PK]: `PROJECT#${project}`,
        [SK]: `EMAIL#${timestamp}#${data.email_id}`,
        type: "inbound_email",
        project,
        ...data,
        created_at: timestamp,
      },
    }),
  );
}

export async function getWaitlistEntries(project: string) {
  const result = await docClient.send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: `#pk = :pk AND begins_with(#sk, :prefix)`,
      ExpressionAttributeNames: {
        "#pk": PK,
        "#sk": SK,
      },
      ExpressionAttributeValues: {
        ":pk": `PROJECT#${project}`,
        ":prefix": "WAITLIST#",
      },
    }),
  );

  return result.Items ?? [];
}

export async function getInboundEmails(project: string) {
  const result = await docClient.send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: `#pk = :pk AND begins_with(#sk, :prefix)`,
      ExpressionAttributeNames: {
        "#pk": PK,
        "#sk": SK,
      },
      ExpressionAttributeValues: {
        ":pk": `PROJECT#${project}`,
        ":prefix": "EMAIL#",
      },
      ScanIndexForward: false,
    }),
  );

  return result.Items ?? [];
}
