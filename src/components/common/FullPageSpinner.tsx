"use client";
import { createPortal } from "react-dom";
import { SpinnerLoader } from "./spinner";

const FullPageSpinner = () => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.0.05)] backdrop-blur-[2px]">
      <SpinnerLoader />
    </div>,
    document.body,
  );
};

export default FullPageSpinner;
