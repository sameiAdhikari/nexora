const Divider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={`w-full flex items-center ${children ? "gap-3" : "gap-0"} `}
    >
      <div className="flex-1 h-px bg-divider" />
      <span
        className={`text-xs ${children ? "text-text-muted" : "text-transparent"}`}
      >
        {" "}
        {children}
      </span>
      <div className="flex-1 h-px bg-divider" />
    </div>
  );
};

export default Divider;
