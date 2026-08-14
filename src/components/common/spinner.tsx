import { LoaderCircle } from "lucide-react";
export const SpinnerCircle = ({ size }: { size?: number }) => {
  return (
    <LoaderCircle className="animate-spin text-primary-500" size={size || 30} />
  );
};

export const SpinnerLoader = ({ size }: { size?: number }) => {
  return (
    <LoaderCircle className="animate-spin text-primary-500" size={size || 30} />
  );
};
