import { appName, slogan } from "@/const/constant";

interface VerificationEmailTemplateProps {
  name: string;
  url: string;
}

const VerificationEmailTemplate = ({
  name,
  url,
}: VerificationEmailTemplateProps) => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f1f5f9", padding: "24px 12px", fontFamily: "sans-serif" }}>
      <div style={{ margin: "0 auto", maxWidth: "640px", overflow: "hidden", borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", boxShadow: "0 25px 50px -12px rgba(148,163,184,0.4)" }}>
        
        {/* Header */}
        <div style={{ background: "linear-gradient(to bottom right, #020617, #1d4ed8, #0e7490)", padding: "32px 36px" }}>
          <p style={{ marginBottom: "12px", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.22em", color: "#bae6fd" }}>
            {appName}
          </p>
          <h1 style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 8px" }}>
            Verify your email, {name} 👋
          </h1>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#e0f2fe", margin: 0 }}>
            Thanks for signing up for {appName} — {slogan}.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "32px 36px" }}>
          <p style={{ fontSize: "15px", lineHeight: "1.75", color: "#334155", margin: "0 0 32px" }}>
            Click the button below to verify your email address. If the button does not work, copy and paste the link into your browser.
          </p>

          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <a
              href={url}
              style={{ display: "inline-block", backgroundColor: "#3723d9", color: "#ffffff", fontWeight: 600, borderRadius: "10px", padding: "12px 24px", textDecoration: "none", fontSize: "15px" }}
            >
              Verify Email Address
            </a>
          </div>

          <div style={{ borderRadius: "16px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", padding: "16px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "#64748b", margin: "0 0 8px" }}>
              Verification link
            </p>
            <a
              href={url}
              style={{ display: "block", wordBreak: "break-all", fontSize: "13px", lineHeight: "1.6", color: "#2563eb", textDecoration: "underline" }}
            >
              {url}
            </a>
          </div>

          <p style={{ marginTop: "24px", fontSize: "13px", color: "#9ca3af", lineHeight: "1.6" }}>
            This link expires in 24 hours. If you didn&apos;t create a {appName} account, you can safely ignore this email.
          </p>

          <hr style={{ marginTop: "32px", border: "none", borderTop: "1px solid #e5e7eb" }} />
          <footer style={{ textAlign: "center", padding: "24px 0 8px", fontSize: "13px", color: "#9ca3af" }}>
            &copy; {new Date().getFullYear()} {appName}. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default VerificationEmailTemplate;
