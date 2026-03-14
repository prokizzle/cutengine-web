import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CutEngine",
  description: "How CutEngine collects, uses, and protects your personal and health data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Updated at 2026-03-14</strong></p>

      <p>
        Feeling Mindful Labs LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by CutEngine.
      </p>
      <p>
        This Privacy Policy applies to our mobile application, CutEngine, and our website (collectively, our &ldquo;Service&rdquo;). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
      </p>

      <h2>Definitions and Key Terms</h2>
      <ul>
        <li><strong>Company:</strong> when this policy mentions &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; it refers to Feeling Mindful Labs LLC, (610 Terrell Hill Dr, Austin, TX 78704) that is responsible for your information under this Privacy Policy.</li>
        <li><strong>Country:</strong> where CutEngine or the owners/founders of CutEngine are based, in this case is the United States.</li>
        <li><strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to use CutEngine and its services.</li>
        <li><strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
        <li><strong>Service:</strong> refers to the service provided by CutEngine as described in the relative terms and on this platform.</li>
        <li><strong>You:</strong> a person or entity that is registered with CutEngine to use the Services.</li>
      </ul>

      <h2>What Information Do We Collect?</h2>
      <p>We collect information from you when you use our app, register an account, or make a purchase.</p>

      <h3>Health &amp; Fitness Data (via Apple HealthKit)</h3>
      <ul>
        <li>Body weight and weight history</li>
        <li>Height</li>
        <li>Date of birth and biological sex</li>
        <li>Workout data (type, duration, calories)</li>
        <li>Step count and active energy</li>
        <li>Sleep analysis data</li>
        <li>Heart rate variability (HRV)</li>
        <li>Resting heart rate</li>
        <li>Blood pressure (if available)</li>
        <li>Body temperature and blood oxygen (if available)</li>
      </ul>

      <h3>Body Composition Data (entered by you)</h3>
      <ul>
        <li>Waist and neck circumference measurements</li>
        <li>Skin caliper measurements</li>
        <li>Body fat percentage (manual entry or calculated)</li>
      </ul>

      <h3>Biofeedback Data (entered by you)</h3>
      <ul>
        <li>Daily energy level ratings</li>
        <li>Daily hunger level ratings</li>
      </ul>

      <h3>Meal Data (entered by you)</h3>
      <ul>
        <li>Meal template names and food items</li>
        <li>Daily checklist completion status</li>
      </ul>

      <h3>Account Data</h3>
      <ul>
        <li>In-app purchase and subscription status (managed by Apple)</li>
      </ul>

      <h3>Third-Party Integrations (optional)</h3>
      <ul>
        <li>BodySpec DEXA scan data (body composition, RMR estimates, appointments) via OAuth authentication. BodySpec authentication tokens are stored securely in your device&apos;s Keychain.</li>
      </ul>

      <h3>Device Data</h3>
      <ul>
        <li>Notification preferences (stored locally in UserDefaults)</li>
      </ul>

      <h2>How Your Health Data is Handled</h2>
      <p><strong>Important:</strong> CutEngine follows Apple&apos;s HealthKit guidelines strictly:</p>
      <ul>
        <li><strong>All health data stays on your device.</strong> We do not transmit, upload, or store your HealthKit data on any external server.</li>
        <li><strong>Health data is never sold</strong> to third parties, advertisers, or data brokers.</li>
        <li><strong>Health data is never used for advertising</strong> or marketing purposes.</li>
        <li><strong>Health data is not stored in iCloud</strong> or any cloud service.</li>
        <li><strong>HealthKit data is read-only.</strong> We access your health data to calculate calorie targets and track progress. We do not write data back to HealthKit.</li>
        <li><strong>BodySpec integration:</strong> If you connect your BodySpec account, DEXA scan results are fetched from BodySpec&apos;s API and stored locally on your device. No HealthKit data is sent to BodySpec.</li>
      </ul>

      <h2>How Do We Use The Information We Collect?</h2>
      <p>Any of the information we collect from you may be used in one of the following ways:</p>
      <ul>
        <li>To calculate personalized daily calorie and macro targets based on your activity, body composition, and goals</li>
        <li>To track your weight loss progress and body fat changes over time</li>
        <li>To provide recovery assessments based on sleep and HRV data</li>
        <li>To determine training consistency and rest day recommendations</li>
        <li>To generate daily meal checklists from your templates</li>
        <li>To calibrate measurement accuracy (when DEXA data is available)</li>
        <li>To process in-app subscription purchases (handled by Apple)</li>
        <li>To send local notifications (daily plan, weigh-in reminders, rest day alerts) if you opt in</li>
      </ul>

      <h2>Do We Share Information With Third Parties?</h2>
      <p><strong>We do not sell your personal information.</strong> We do not share your data with advertisers, data brokers, or marketing partners.</p>
      <p>We may share information only in these limited circumstances:</p>
      <ul>
        <li><strong>Apple:</strong> Subscription purchase processing is handled entirely by Apple through StoreKit. We do not have access to your payment details.</li>
        <li><strong>BodySpec:</strong> If you choose to connect your BodySpec account, we authenticate via OAuth to retrieve your DEXA scan data. No data flows from CutEngine to BodySpec.</li>
        <li><strong>Legal requirements:</strong> We may disclose information if required by law, subpoena, or court order.</li>
      </ul>

      <h2>Data Storage and Security</h2>
      <ul>
        <li>All personal data is stored locally on your device using Apple&apos;s SwiftData framework.</li>
        <li>Authentication tokens for BodySpec (if connected) are stored in the iOS Keychain.</li>
        <li>Notification preferences are stored in UserDefaults.</li>
        <li>We do not operate servers that store your personal data.</li>
        <li>We implement Apple&apos;s standard security practices including file protection and Keychain encryption.</li>
      </ul>

      <h2>In-App Purchases</h2>
      <p>CutEngine offers auto-renewable subscriptions. All purchases are processed by Apple. We do not collect or store payment information. Subscription management and cancellation are handled through your Apple ID account settings.</p>

      <h2>Push Notifications</h2>
      <p>CutEngine uses local notifications only (not push notifications from a server). You can enable or disable notification categories individually in the app&apos;s Settings. We do not collect notification tokens or send data to external notification services.</p>

      <h2>Kids&apos; Privacy</h2>
      <p>CutEngine is not intended for anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and become aware that your child has used our app, please contact us.</p>

      <h2>Your Data Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> all data stored by CutEngine (available on-device)</li>
        <li><strong>Delete</strong> all your data by using the &ldquo;Delete All Data&rdquo; option in Settings or by deleting the app</li>
        <li><strong>Control</strong> HealthKit data access through iOS Settings &gt; Privacy &amp; Security &gt; Health</li>
        <li><strong>Disconnect</strong> third-party integrations (BodySpec) at any time through Settings</li>
        <li><strong>Manage</strong> notification preferences at any time through Settings</li>
      </ul>

      <h2>California Residents (CCPA)</h2>
      <p>If you are a California resident, you have the right to:</p>
      <ul>
        <li>Know what personal information we collect and how we use it</li>
        <li>Request deletion of your personal information</li>
        <li>Not be discriminated against for exercising your privacy rights</li>
        <li>We do not sell the personal information of our users</li>
      </ul>

      <h2>Changes To Our Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of changes through the app. Continued use of the app after changes constitutes acceptance of the updated policy.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>Via Email: info@feelingmindful.com</li>
        <li>Via Mail: Feeling Mindful Labs LLC, 610 Terrell Hill Dr, Austin, TX 78704</li>
      </ul>
    </>
  );
}
