import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" mx-auto ">
      <hr className="border-t border-[#EEEEEE]" />

      <div className="max-w-[1260px] mx-auto px-5">
        <div className="flex justify-between items-center py-6 text-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={133}
            height={56}
            className="w-[133px] h-[55.67px]"
          />
          <p>Body</p>
          <p>Travel</p>
          <p>Account</p>
        </div>
      </div>

      <div className="border-t border-[#EEEEEE] bg-[#000000AC] ">
        <div className="max-w-[1260px] mx-auto px-5 py-10 text-[#EEEEEE] leading-[27px] flex justify-between">
          <div className="w-[337px] flex flex-col gap-6">
            <p>
              We are location independent bloggers, digital influencers, small
              group tour organizers and world travelers with a serious passion
              for the sun, the sea and adventure.
            </p>
            <p>
              Eight years and 60-something countries later and we are still on
              the road.
            </p>
          </div>

          <div className="w-[191px] space-y-2">
            <p>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <p>T: +234 706 507 8544</p>
            <p>E: info@redexplorers.com</p>
            <p>W: www.redexplorers.com</p>
          </div>

          <div className="w-[153px] space-y-2">
            <p>My List</p>
            <p>My Request</p>
            <p>My Credit</p>
            <p>My Info</p>
            <p>Contact</p>
          </div>

          <div className="w-[153px] space-y-2">
            <p>Travel</p>
            <p>Why Travel</p>
            <p>Become a Traveler</p>
            <p>How It Works</p>
            <p>Traveling FAQs</p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <hr className="border-t border-[#EEEEEE] " />
      <div className="  bg-[#000000AC]">
        <div className="max-w-[1260px] mx-auto px-5 py-5 text-white flex justify-between items-center">
          <Image
            src="/side-hustle.png"
            alt="side-hustle logo"
            width={189}
            height={60}
            className="w-[189px]"
          />

          <div className="flex items-center gap-8">
            <Image src="/facebook.png" alt="facebook" width={13} height={20} />
            <Image src="/twitter.png" alt="twitter" width={21} height={17} />
            <Image src="/google.png" alt="google" width={27} height={17} />
            <Image src="/linkedin.png" alt="linkedin" width={18} height={19} />
          </div>

          <p className="text-sm">
            © 2021 RedExplorers. All rights reserved | Terms | Privacy | Site
            Map
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
