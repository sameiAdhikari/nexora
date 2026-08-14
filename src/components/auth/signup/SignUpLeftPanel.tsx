import { features, stats } from "@/const/signup.constant";

const SignUpLeftPanel = () => {
  return (
    <aside className="relative flex flex-col max-h-screen justify-between  py-10 pl-50 ">
      {/* Hero copy */}
      <div className="relative w-full z-10 space-y-6 mt-20">
        <div>
          <h2 className="text-4xl font-bold text-heading leading-tight">
            The next generation
            <br />
            of investing.
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-120">
            Real-time data, lightning execution, and a portfolio built for the
            future.
          </p>
        </div>

        {/* Features */}
        <ul className=" space-y-2.5">
          {features.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 text-sm text-text-secondary"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 shadow-sm">
                <Icon className="h-4 w-4 text-primary" />
              </span>
              {text}
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="flex gap-8 pt-2">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-xl font-bold text-heading">{value}</p>
              <p className="text-xs text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="relative z-10 text-xs text-text-muted">
        <span className="text-[14px]">©</span> {new Date().getFullYear()}{" "}
        Nexora. All rights reserved.
      </p>
    </aside>
  );
};

export default SignUpLeftPanel;
