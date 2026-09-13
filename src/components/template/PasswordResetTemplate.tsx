import { appName, slogan } from "@/const/constant";

interface PasswordResetTemplateProps {
  name?: string;
  url: string;
  expiresInHours?: number;
}



const PasswordResetTemplate = ({
  name,
  url,
  expiresInHours = 1,
}: PasswordResetTemplateProps) => {
  const recipientName = name?.trim() || "there";

  const instructions = [
    {
      label: "What happens next",
      value: "You will be taken to a secure page to create a new password.",
    },
    {
      label: "Link expires",
      value: `This link expires in about ${expiresInHours} hour${
        expiresInHours === 1 ? "" : "s"
      }.`,
    },
    {
      label: "Didn’t request this?",
      value:
        "You can safely ignore this email and your account will remain unchanged.",
    },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "24px 12px",
        backgroundColor: "#eef2ff",
        backgroundImage:
          "radial-gradient(circle at top, rgba(71, 50, 248, 0.16), transparent 38%), radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.12), transparent 34%)",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "600px",
          overflow: "hidden",
          borderRadius: "28px",
          border: "1px solid #dbe3ff",
          backgroundColor: "#ffffff",
          boxShadow: "0 30px 70px -20px rgba(15, 23, 42, 0.35)",
        }}
      >
        <div
          style={{
            padding: "24px 20px 20px",
            background:
              "linear-gradient(135deg, #020617 0%, #1d4ed8 48%, #0f766e 100%)",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#c7d2fe",
            }}
          >
            {appName}
          </p>
          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "24px",
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Reset your password, {recipientName}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "520px",
              fontSize: "14px",
              lineHeight: 1.3,
              color: "#dbeafe",
            }}
          >
            We received a request to reset your {appName} password. Use the
            secure link below to choose a new one and get back into your
            account.
          </p>
        </div>

        <div style={{ padding: "30px 24px 25px" }}>
          <div
            style={{
              marginBottom: "28px",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#f8fafc",
              padding: "16px 24px",
            }}
          >
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#64748b",
              }}
            >
              Secure reset link
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.3,
                color: "#334155",
              }}
            >
              Click the button below to continue. If the button does not work,
              copy and paste the full link into your browser.
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <a
              href={url}
              style={{
                display: "inline-block",
                borderRadius: "12px",
                backgroundColor: "#3723d9",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 12px 24px rgba(55, 35, 217, 0.28)",
              }}
            >
              Reset password
            </a>
          </div>

          {/* <div
          className="info-cards"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {[
              {
                label: "What happens next",
                value:
                  "You will be taken to a secure page to create a new password.",
              },
              {
                label: "Link expires",
                value: `This link expires in about ${expiresInHours} hour${expiresInHours === 1 ? "" : "s"}.`,
              },
              {
                label: "Didn’t request this?",
                value:
                  "You can safely ignore this email and your account will remain unchanged.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  padding: "12px",
                  minWidth: "30%",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "11px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "#64748b",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    lineHeight: 1.3,
                    color: "#334155",
                    textAlign: "justify",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div> */}

          <table
            role="presentation"
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            border={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "18px",
            }}
          >
            <tbody>
              {instructions.map((item) => (
                <tr key={item.label}>
                  <td
                    style={{
                      paddingBottom: "10px",
                    }}
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0,
                        border: "1px solid #e2e8f0",
                        borderRadius: "14px",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "14px 16px",
                            }}
                          >
                            <p
                              style={{
                                margin: "0 0 6px",
                                fontSize: "11px",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                color: "#64748b",
                              }}
                            >
                              {item.label}
                            </p>

                            <p
                              style={{
                                margin: 0,
                                fontSize: "13px",
                                lineHeight: "20px",
                                color: "#334155",
                              }}
                            >
                              {item.value}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <table
            role="presentation"
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            border={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: 0,
                    textAlign: "center",
                  }}
                >
                  {instructions.map((item) => (
                    <div
                      key={item.label}
                      className="info-card"
                      style={{
                        display: "inline-block",
                        width: "31%",
                        maxWidth: "31%",
                        verticalAlign: "top",
                        margin: "0 1%",
                        textAlign: "left",
                      }}
                    >
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        border={0}
                        style={{
                          width: "100%",
                          borderCollapse: "separate",
                          borderSpacing: 0,
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "14px",
                                border: "1px solid #e2e8f0",
                                borderRadius: "14px",
                                backgroundColor: "#ffffff",
                              }}
                            >
                              <p
                                style={{
                                  margin: "0 0 6px",
                                  fontSize: "11px",
                                  fontWeight: 700,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.12em",
                                  color: "#64748b",
                                }}
                              >
                                {item.label}
                              </p>

                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#334155",
                                }}
                              >
                                {item.value}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table> */}

          <div
            style={{
              borderRadius: "18px",
              border: "1px solid #c7d2fe",
              backgroundColor: "#eef2ff",
              padding: "18px 20px",
              marginBottom: "26px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#4338ca",
              }}
            >
              Fallback link
            </p>
            <a
              href={url}
              style={{
                display: "block",
                wordBreak: "break-all",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#1d4ed8",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
          </div>

          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Stay secure
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#64748b",
              }}
            >
              If you did not request this password reset, no further action is
              needed. For any help, reply to this email or contact the {appName}{" "}
              support team.
            </p>
          </div>
        </div>

        <footer
          style={{
            padding: "0 40px 34px",
            textAlign: "center",
            fontSize: "12px",
            lineHeight: 1.7,
            color: "#94a3b8",
          }}
        >
          <p style={{ margin: "0 0 1px" }}>
            {appName} · {slogan}
          </p>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {appName}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PasswordResetTemplate;
