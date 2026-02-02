import Button from "./button";
import Navbar from "./navbar";

type HeaderProps = {
  bgImg: string;
  title: string;

  button: string;
  text: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  bgImg,
  title,

  button,
  text,
}) => {
  return (
    <header
      className="relative w-full h-146.75 bg-cover bg-center flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="text-center px-4 ">
        <p className="text-2xl mb-3">{text}</p>
        <h1 className="text-5xl w-[60%] font-bold mb-3 leading-15 mx-auto">
          {title}
        </h1>

        <button className="rounded-md px-8 py-5 text-white bg-[#0336FF]">
          Read More
        </button>
      </div>
    </header>
  );
};

export default Header;
