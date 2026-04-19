import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CutEngine & CardioEngine",
  description: "How CutEngine and CardioEngine collect, use, and protect your personal and health data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Updated at 2026-04-19</strong></p>

      <p>
        Feeling Mindful Labs LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by our mobile applications, CutEngine and CardioEngine (collectively, our &ldquo;Apps&rdquo;).
      </p>
      <p>
        This Privacy Policy applies to our Apps and our website (collectively, our &ldquo;Service&rdquo;). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
      </p>

      <h2>Definitions and Key Terms</h2>
      <ul>
        <li><strong>Company:</strong> when this policy mentions &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; it refers to Feeling Mindful Labs LLC, (610 Terrell Hill Dr, Austin, TX 78704) that is responsible for your information under this Privacy Policy.</li>
        <li><strong>Apps:</strong> CutEngine (body composition and nutrition tracking) and CardioEngine (heart rate zone coaching), both published by Feeling Mindful Labs LLC.</li>
        <li><strong>Country:</strong> where the Apps or the owners/founders are based, in this case is the United States.</li>
        <li><strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to use our Apps and their services.</li>
        <li><strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
        <li><strong>Service:</strong> refers to the services provided by our Apps as described in the relative terms and on this platform.</li>
        <li><strong>You:</strong> a person or entity that uses one or more of our Apps.</li>
      </ul>

      <h2>What Information Do We Collect?</h2>
      <p>We collect information from you when you use our Apps, register an account, or make a purchase. The data collected depends on which App you use.</p>

      <h3>Health &amp; Fitness Data (via Apple HealthKit)</h3>
      <p>Both Apps may read the following from HealthKit with your permission:</p>
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

      <h3>CutEngine-Specific Data</h3>

      <h4>Body Composition Data (entered by you)</h4>
      <ul>
        <li>Waist and neck circumference measurements</li>
        <li>Skin caliper measurements</li>
        <li>Body fat percentage (manual entry or calculated)</li>
      </ul>

      <h4>Biofeedback Data (entered by you)</h4>
      <ul>
        <li>Daily energy level ratings</li>
        <li>Daily hunger level ratings</li>
      </ul>

      <h4>Meal Data (entered by you)</h4>
      <ul>
        <li>Meal template names and food items</li>
        <li>Daily checklist completion status</li>
      </ul>

      <h3>CardioEngine-Specific Data</h3>

      <h4>Heart Rate &amp; Zone Data</h4>
      <ul>
        <li>Real-time heart rate readings (via Apple Watch or BLE chest strap)</li>
        <li>Heart rate zone configuration and thresholds</li>
        <li>Zone model preferences (Aerobic Health Zones, custom zones)</li>
        <li>Zone time distribution per workout session</li>
      </ul>

      <h4>Workout Session Data</h4>
      <ul>
        <li>Session duration, elapsed time, and zone time</li>
        <li>Calories burned per session</li>
        <li>Equipment type (treadmill, bike, etc.)</li>
        <li>Weekly minute targets and completion status</li>
        <li>Session history and streak tracking</li>
      </ul>

      <h4>BLE Device Data</h4>
      <ul>
        <li>Paired Bluetooth heart rate monitor names and identifiers</li>
        <li>HR source priority preferences (chest strap, Apple Watch)</li>
      </ul>

      <h4>Training Preferences (entered by you)</h4>
      <ul>
        <li>Training mode (guided, free)</li>
        <li>Weekly volume targets</li>
        <li>Fasted cardio detection preferences</li>
        <li>Coaching haptics and escalation settings</li>
      </ul>

      <h3>Account Data (both Apps)</h3>
      <ul>
        <li>In-app purchase and subscription status (managed by Apple)</li>
      </ul>

      <h3>Third-Party Integrations (optional, CutEngine only)</h3>
      <ul>
        <li>BodySpec DEXA scan data (body composition, RMR estimates, appointments) via OAuth authentication. BodySpec authentication tokens are stored securely in your device&apos;s Keychain.</li>
      </ul>

      <h3>Device Data (both Apps)</h3>
      <ul>
        <li>Notification preferences (stored locally in UserDefaults)</li>
      </ul>

      <h2>How Your Health Data is Handled</h2>
      <p><strong>Important:</strong> Both CutEngine and CardioEngine follow Apple&apos;s HealthKit guidelines strictly:</p>
      <ul>
        <li><strong>All health data stays on your device.</strong> We do not transmit, upload, or store your HealthKit data on any external server.</li>
        <li><strong>Health data is never sold</strong> to third parties, advertisers, or data brokers.</li>
        <li><strong>Health data is never used for advertising</strong> or marketing purposes.</li>
        <li><strong>Health data is not stored in iCloud</strong> or any cloud service.</li>
        <li><strong>HealthKit data is read-only.</strong> We access your health data to calculate calorie targets (CutEngine) and heart rate zone coaching (CardioEngine). We do not write data back to HealthKit.</li>
        <li><strong>BLE heart rate data (CardioEngine):</strong> Heart rate readings from paired Bluetooth monitors are processed in real time on your device for zone coaching. They are not transmitted to any server.</li>
        <li><strong>BodySpec integration (CutEngine):</strong> If you connect your BodySpec account, DEXA scan results are fetched from BodySpec&apos;s API and stored locally on your device. No HealthKit data is sent to BodySpec.</li>
      </ul>

      <h2>How Do We Use The Information We Collect?</h2>
      <p>Any of the information we collect from you may be used in one of the following ways:</p>

      <h3>CutEngine</h3>
      <ul>
        <li>To calculate personalized daily calorie and macro targets based on your activity, body composition, and goals</li>
        <li>To track your weight loss progress and body fat changes over time</li>
        <li>To provide recovery assessments based on sleep and HRV data</li>
        <li>To determine training consistency and rest day recommendations</li>
        <li>To generate daily meal checklists from your templates</li>
        <li>To calibrate measurement accuracy (when DEXA data is available)</li>
      </ul>

      <h3>CardioEngine</h3>
      <ul>
        <li>To provide real-time heart rate zone coaching during workouts</li>
        <li>To calculate personalized zone thresholds based on your aerobic profile</li>
        <li>To track weekly cardio volume against your minute targets</li>
        <li>To record workout session history with zone distribution breakdowns</li>
        <li>To monitor health benefit trends (resting HR, HRV, efficiency)</li>
        <li>To recommend daily session duration and target zone based on weekly progress</li>
      </ul>

      <h3>Both Apps</h3>
      <ul>
        <li>To process in-app subscription purchases (handled by Apple)</li>
        <li>To send local notifications (reminders, session prompts) if you opt in</li>
      </ul>

      <h2>Do We Share Information With Third Parties?</h2>
      <p><strong>We do not sell your personal information.</strong> We do not share your data with advertisers, data brokers, or marketing partners.</p>
      <p>We may share information only in these limited circumstances:</p>
      <ul>
        <li><strong>Apple:</strong> Subscription purchase processing is handled entirely by Apple through StoreKit. We do not have access to your payment details.</li>
        <li><strong>BodySpec (CutEngine only):</strong> If you choose to connect your BodySpec account, we authenticate via OAuth to retrieve your DEXA scan data. No data flows from CutEngine to BodySpec.</li>
        <li><strong>Legal requirements:</strong> We may disclose information if required by law, subpoena, or court order.</li>
      </ul>

      <h2>Data Storage and Security</h2>
      <ul>
        <li>All personal data is stored locally on your device using Apple&apos;s SwiftData framework.</li>
        <li>Authentication tokens for BodySpec (if connected via CutEngine) are stored in the iOS Keychain.</li>
        <li>BLE device pairing data (CardioEngine) is stored locally on your device.</li>
        <li>Notification preferences are stored in UserDefaults.</li>
        <li>We do not operate servers that store your personal data.</li>
        <li>We implement Apple&apos;s standard security practices including file protection and Keychain encryption.</li>
      </ul>

      <h2>In-App Purchases</h2>
      <p>Both CutEngine and CardioEngine offer auto-renewable subscriptions. All purchases are processed by Apple. We do not collect or store payment information. Subscription management and cancellation are handled through your Apple ID account settings.</p>

      <h2>Push Notifications</h2>
      <p>Our Apps use local notifications only (not push notifications from a server). You can enable or disable notification categories individually in each app&apos;s Settings. We do not collect notification tokens or send data to external notification services.</p>

      <h2>Kids&apos; Privacy</h2>
      <p>Our Apps are not intended for anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and become aware that your child has used our Apps, please contact us.</p>

      <h2>Your Data Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> all data stored by our Apps (available on-device)</li>
        <li><strong>Delete</strong> all your data by using the &ldquo;Delete All Data&rdquo; option in Settings or by deleting the app</li>
        <li><strong>Control</strong> HealthKit data access through iOS Settings &gt; Privacy &amp; Security &gt; Health</li>
        <li><strong>Control</strong> Bluetooth access through iOS Settings &gt; Privacy &amp; Security &gt; Bluetooth (CardioEngine)</li>
        <li><strong>Disconnect</strong> third-party integrations (BodySpec) at any time through CutEngine Settings</li>
        <li><strong>Unpair</strong> BLE heart rate monitors at any time through CardioEngine Settings</li>
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
      <p>We may update this Privacy Policy from time to time. We will notify you of changes through the applicable App. Continued use of any App after changes constitutes acceptance of the updated policy.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>Via Email: info@feelingmindful.com</li>
        <li>Via Mail: Feeling Mindful Labs LLC, 610 Terrell Hill Dr, Austin, TX 78704</li>
      </ul>
    </>
  );
}
