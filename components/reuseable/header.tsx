import Navbar from "./navbar";

type HeaderProps = {
  bgImg: string;
  title: string;
  text: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ bgImg, title, text }) => {
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
        <p className=" text-sm md:text-2xl mb-3">{text}</p>
        <h1 className=" text-3xl md:text-5xl  w-[80%] font-bold mb-3  leading-10 md:leading-15 mx-auto">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
