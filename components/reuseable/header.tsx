import Button from "./button";
import Navbar from "./navbar";

type HeaderProps = {
  bgImg: string;
  title: string;
  subtitle: string;
  button: string;
  text: string;
};

const Header: React.FC<HeaderProps> = ({
  bgImg,
  title,
  subtitle,
  button,
  text,
}) => {
  return (
    <header
      className="relative w-full h-146.75 bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="text-center max-w-2xl px-4">
        <p className="text-sm mb-2">{text}</p>
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <h2 className="text-lg mb-6">{subtitle}</h2>

        <Button label="Read More" bgColor="#0336FF" />
      </div>
    </header>
  );
};

export default Header;
