const PasswordStrengthBar = ({ password }: { password: string }) => {
  const getPasswordStrength = (password: string) => {
    // Implement password strength logic here

    const rules = [
      password.length >= 10,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*]/.test(password),
    ];
    const strength = rules.filter(Boolean).length;
    const color = [
      "",
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];
    const message = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"];

    return {
      strength,
      color: color[strength],
      message: message[strength],
    };
  };
  const { strength, color, message } = getPasswordStrength(password);
  return (
    password && (
      <div className="flex items-center gap-3 ">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-0.75 flex-1 rounded-full ${strength >= level ? color : "bg-slate-200"}`}
          ></div>
        ))}
        <span className={`text-xs font-semibold ml-1 text-slate-500`}>
          {message}
        </span>
      </div>
    )
  );
};

export default PasswordStrengthBar;
