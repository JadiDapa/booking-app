import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {}

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden cursor-pointer md:block"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;