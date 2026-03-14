import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — CutEngine",
  description: "Health, fitness, and liability disclaimers for the CutEngine application.",
};

export default function Disclaimer() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p><strong>Updated at 2026-03-14</strong></p>

      <h2>Health &amp; Fitness Disclaimer</h2>
      <p>CutEngine is a fitness tracking and nutrition planning tool designed to assist with fat loss phases. <strong>CutEngine is not a medical device, is not FDA-approved, and does not provide medical advice, diagnosis, or treatment.</strong></p>
      <p>The calorie targets, macro recommendations, body fat estimates, recovery scores, and training recommendations provided by CutEngine are calculated using general formulas and algorithms. They are estimates and may not be accurate for all individuals.</p>

      <p><strong>Before using CutEngine:</strong></p>
      <ul>
        <li>Consult with a qualified healthcare provider before starting any diet, exercise, or weight loss program.</li>
        <li>If you have a medical condition, take medications, or have concerns about your health, seek professional medical advice.</li>
        <li>Do not use CutEngine as a substitute for professional medical advice or treatment.</li>
      </ul>

      <h2>Body Composition Estimates</h2>
      <p>Body fat percentages calculated using the Navy Method (tape measurements) and skin calipers are estimates with inherent margins of error (typically 1.5–3% compared to DEXA scanning). These estimates should not be used for medical purposes.</p>
      <p>DEXA scan data imported from BodySpec is provided by BodySpec and is subject to their accuracy standards. CutEngine is not responsible for the accuracy of third-party scan results.</p>

      <h2>Enhancement Tier Information</h2>
      <p>CutEngine includes options for users who take performance-enhancing substances (TRT, GLP-1 agonists, peptides, etc.). This feature adjusts deficit recommendations based on general fitness community guidelines. <strong>This is not medical advice regarding pharmaceutical use.</strong> Always consult your prescribing physician regarding any substances you take.</p>

      <h2>Caliper Calibration</h2>
      <p>When DEXA scan data is used to calibrate daily caliper measurements, the resulting calibration offset is an approximation. Calibration accuracy depends on measurement consistency and may drift over time.</p>

      <h2>Machine Learning Recommendations</h2>
      <p>CutEngine uses machine learning algorithms to adjust calorie targets. These adjustments are based on patterns in your data and are not guaranteed to produce specific results. Individual responses to dietary changes vary significantly.</p>

      <h2>No Guarantee of Results</h2>
      <p>CutEngine does not guarantee any specific weight loss, body composition, or fitness results. Results depend on many factors including genetics, adherence, sleep, stress, and other variables outside the app&apos;s control.</p>

      <h2>Third-Party Products</h2>
      <p>CutEngine provides links to third-party products (AccuMeasure calipers, MyoTape body tape measure) for convenience. We are not affiliated with these manufacturers and do not guarantee their products. Product links are not affiliate links.</p>

      <h2>App Store Disclaimer</h2>
      <p>CutEngine is not developed by, endorsed by, or affiliated with Apple Inc. Apple is not responsible for the content or functionality of CutEngine.</p>

      <h2>Limitation of Liability</h2>
      <p>Use CutEngine at your own risk. Feeling Mindful Labs LLC is not liable for any injury, health issue, or adverse outcome that may result from following recommendations provided by the app.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Disclaimer, please contact us:</p>
      <ul>
        <li>Via Email: info@feelingmindful.com</li>
        <li>Via Mail: Feeling Mindful Labs LLC, 610 Terrell Hill Dr, Austin, TX 78704</li>
      </ul>
    </>
  );
}
