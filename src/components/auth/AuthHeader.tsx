import Image from "next/image";
import { ThemeToggler } from "../common/ThemeToggler";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-13 z-20  col-span-2 ">
      {" "}
      {/* Logo */}
      <Link href={"/"}>
        <Image
          // src="/logo-2.png"
          src="/logo22.png"
          alt="Nexora"
          width={150}
          height={150}
          className="relative z-10 cursor-pointer"
          loading="lazy"
        />
      </Link>
      {/* theme toggler */}
      <ThemeToggler />
    </header>
  );
};

export default AuthHeader;
