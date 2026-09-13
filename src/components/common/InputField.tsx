"use client";

import { useState } from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

const InputField = <T extends FieldValues>({
  label,
  placeholder,
  type = "text",
  name,
  LeftIcon,
  RightIcon,
  error,
  register,
  onRightIconClick,
  optional,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: Path<T>;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  error?: string | undefined;
  register: UseFormRegister<T>;
  onRightIconClick?: () => void;
  optional?: boolean;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor={name}
        className="block capitalize text-sm font-medium text-text-secondary mb-1"
      >
        {label}
        {optional && (
          <span className="font-normal text-text-muted">(optional)</span>
        )}
      </label>
      <div className="relative group">
        {LeftIcon && (
          <LeftIcon
            className={`absolute top-1/2 transform -translate-y-1/2 left-4.5 h-4 w-4 pointer-events-none ${error && !optional ? "text-danger group-focus-within:text-primary group-hover:text-primary" : "text-text-muted  group-focus-within:text-primary"}`}
          />
        )}
        <input
          id={name}
          type={type ? type : "text"}
          placeholder={placeholder}
          autoComplete={`${type === "password" ? "current-password" : type === "email" ? "email" : "off"}`}
          className={`w-full h-10 px-3.5 pl-10 py-2.5 rounded-xl border bg-elevated-card text-text-primary text-sm box-border placeholder:text-placeholder hover:border-primary-hover  ${error ? "border-danger" : "border-border-strong  "} focus:outline-none focus:border-border-brand focus:border-2 focus:ring-4 focus:ring-primary/10 transition-colors`}
          {...register(name)}
        />
        {RightIcon && (
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            className={`absolute top-1/2 transform -translate-y-1/2 right-4.5 cursor-pointer ${error && !optional ? "text-danger group-focus-within:text-primary group-hover:text-primary" : "text-text-muted group-focus-within:text-primary"}`}
            onClick={onRightIconClick}
          >
            <span
              className={`absolute w-25 text-xs bg-text-muted/80 p-1 rounded-md text-white -top-6 -right-8 ${isPasswordVisible ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
            >
              {type === "password" ? "Show Password" : "Hide Password"}
            </span>
            <RightIcon
              className="h-5 w-5"
              onMouseEnter={() => setIsPasswordVisible(true)}
              onMouseLeave={() => setIsPasswordVisible(false)}
            />
          </button>
        )}
      </div>
      {error && <p className=" ml-2 text-[13px] text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
