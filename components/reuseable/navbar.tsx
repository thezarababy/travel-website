import Link from "next/link";

const navbar = () => {
  return (
    <div className=" absolute top-0 left-30 w-full  flex items-center justify-between max-w-[1440px] mx-auto py-8">
      <div className="w-33.25 h-[55.67px]">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="flex gap-10 text-[#FFA500] ">
        <Link
          href="/"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md"
        >
          About us
        </Link>
        <Link
          href="/destination"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md"
        >
          Destination
        </Link>
        <Link
          href="/tips"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md"
        >
          Tips
        </Link>
        <Link
          href="/contact"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default navbar;
