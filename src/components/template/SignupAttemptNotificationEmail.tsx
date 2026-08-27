import { appName } from "@/const/constant";

interface SignupAttemptNotificationEmailProps {
  name: string;
  attemptedEmail: string;
  attemptedTime: string;
  loginUrl: string;
  attemptedLocation: string;
  userAgent: string;
}

const SignupAttemptNotificationEmail = ({
  name,
  attemptedEmail,
  attemptedTime,
  loginUrl,
  attemptedLocation,
  userAgent,
}: SignupAttemptNotificationEmailProps) => {
  // const arrayOfTime = attemptedTime.split("T");
  const [date, time] = attemptedTime.split(",");

  const formatedDate = `${date} at ${time}`;
  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#f1f5f9",
        padding: "24px 12px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "640px",
          overflow: "hidden",
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          boxShadow: "0 25px 50px -12px rgba(148,163,184,0.4)",
        }}
      >
        {/* Header */}
        <header
          style={{
            background:
              "linear-gradient(to bottom right, #020617, #b91c1c, #7c2d12)",
            padding: "24px 36px",
          }}
        >
          <p
            style={{
              marginBottom: "4px",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#fecaca",
            }}
          >
            {appName} — Security Alert
          </p>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: "0 0 0px",
            }}
          >
            Signup attempt detected, {name} ⚠️
          </h1>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#fecaca",
              margin: 0,
            }}
          >
            Someone tried to create a new {appName} account using your email
            address.
          </p>
        </header>

        {/* Body */}
        <section style={{ padding: "20px 36px" }}>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#334155",
              margin: "0 0 24px",
            }}
          >
            We noticed a signup attempt using your email address. If this was
            you, you can safely ignore this message. If you did not initiate
            this, your email is already registered — no new account was created.
          </p>

          {/* Details Card */}
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid #fecaca",
              backgroundColor: "#fff7f7",
              padding: "20px",
              marginBottom: "28px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#b91c1c",
                margin: "0 0 14px",
              }}
            >
              Attempt Details
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  { label: "Email", value: attemptedEmail },
                  { label: "Time", value: formatedDate },
                  { label: "UserAgent", value: userAgent },
                  {
                    label: `${attemptedLocation ? "Location" : ""}`,
                    value: attemptedLocation ? attemptedLocation : "",
                  },
                ].map(({ label, value }) => (
                  <tr key={label}>
                    <td
                      style={{
                        fontSize: "13px",
                        color: "#64748b",
                        fontWeight: 600,
                        paddingBottom: "2px",
                        width: "80px",
                      }}
                    >
                      {label}
                    </td>
                    <td className="mr-3">{label !== "" ? ":" : ""}</td>
                    <td
                      style={{
                        fontSize: "13px",
                        color: "#1e293b",
                        paddingBottom: "2px",
                        paddingLeft: "5px",
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#334155",
              margin: "0 0 24px",
            }}
          >
            If you believe your account may be at risk, we recommend signing in
            and updating your password immediately.
          </p>

          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <a
              href={loginUrl}
              style={{
                display: "inline-block",
                backgroundColor: "#b91c1c",
                color: "#ffffff",
                fontWeight: 600,
                borderRadius: "10px",
                padding: "12px 24px",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Sign In to Your Account
            </a>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#9ca3af",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            If you did not attempt to sign up, no action is required. Your
            existing account remains secure. If you have concerns, please
            contact our support team.
          </p>

          <hr
            style={{
              marginTop: "32px",
              border: "none",
              borderTop: "1px solid #e5e7eb",
            }}
          />
          <footer
            style={{
              textAlign: "center",
              padding: "24px 0 8px",
              fontSize: "13px",
              color: "#9ca3af",
            }}
          >
            &copy; {new Date().getFullYear()} {appName}. All rights reserved.
          </footer>
        </section>
      </div>
    </div>
  );
};

export default SignupAttemptNotificationEmail;
