import { features, stats } from "@/const/signup.constant";
import { ShieldCheck } from "lucide-react";

const SignUpLeftPanel = () => {
  return (
    <aside className="relative flex flex-col max-h-screen justify-between  py-10 pl-50 ">
      {/* Hero copy */}
      <div className="relative w-full z-10 space-y-4 mt-20">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-section px-3 py-1 text-xs font-medium text-primary tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          Invest with clarity
        </div>
        <div>
          <h2 className="text-4xl font-bold text-heading leading-tight">
            The next generation of
            <br />
            investing.
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-140">
            {/* Real-time data, lightning execution, and a portfolio built for the
            future.  */}
            Build your portfolio with powerful market insights, real-time data,
            and an investing experience designed to keep you informed and in
            control.
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
