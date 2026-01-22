// const Footer = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto  h-[572px] border-t-grey-300 ">
//       <hr className="border-t border-t-[#EEEEEE]" />

//       <div className="">
//         <div className="flex justify-between items-center">
//           <img src="/logo.png" alt=" Logo" className="w-[133px] h-[55.67px]" />
//           <p>Body</p>
//           <p>Travel</p>
//           <p>Account</p>
//         </div>
//         <div className="text-[#EEEEEE] bg-[#000000AC] flex justify-between py-10 px-5 leading-[27px] ">
//           <div className="w-[337px] h-[189px] flex flex-col gap-6">
//             <p>
//               We are location independent bloggers, digital influencers, small
//               group tour organizers and world travelers with a serious passion
//               for the sun, the sea and adventure.
//             </p>

//             <p>
//               Eight years and 60-something countries later and we are still on
//               the road.
//             </p>
//           </div>

//           <div className="w-[191px] h-[228px]">
//             <p>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
//             <p>T: +234 706 507 8544</p>
//             <p>E: info@redexplorers.com</p>
//             <p>W: www. redexplorers.com</p>
//           </div>
//           <div className="w-[153px] h-[224px]">
//             <p>My List</p>
//             <p>My Request</p>
//             <p>My Credit</p>
//             <p>My Info</p>
//             <p>Contact</p>
//           </div>
//           <div className="w-[153px] h-[224px]">
//             <p>Travel</p>
//             <p>Why Travel</p>
//             <p>Become a Traveler</p>
//             <p>How It Works</p>
//             <p>Traveling FAQs</p>
//           </div>
//         </div>
//         <hr className="border-t border-t-[#EEEEEE]" />

//         <div className=" bg-[#000000AC] flex justify-between items-center py-5 px-5 text-[#FFFFFF]">
//           <div className="w-[189px] h-[41px]">
//             <img src="/side-hustle.png" alt="side-hustle logo"></img>
//           </div>
//           <div className="flex items-center gap-8">
//             <img
//               src="/facebook.png"
//               alt="side-hustle logo"
//               className="w-[13px] h-[20px]"
//             ></img>
//             <img
//               src="/twitter.png"
//               alt="side-hustle logo"
//               className="w-[21px] h-[17px]"
//             ></img>
//             <img
//               src="/google.png"
//               alt="side-hustle logo"
//               className="w-[26.67px] h-[16.97px]"
//             ></img>
//             <img
//               src="/linkedin.png"
//               alt="side-hustle logo"
//               className="w-[18px] h-[19px]"
//             ></img>
//           </div>
//           <div>
//             <p>
//               © 2021 RedExplorers. All rights reserved | Terms | Privacy | Site
//               Map
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto ">
      {/* Top Divider */}
      <hr className="border-t border-[#EEEEEE]" />

      {/* ===== NAV SECTION ===== */}
      <div className="max-w-[1260px] mx-auto px-5">
        <div className="flex justify-between items-center py-6 text-white">
          <img src="/logo.png" alt="Logo" className="w-[133px] h-[55.67px]" />
          <p>Body</p>
          <p>Travel</p>
          <p>Account</p>
        </div>
      </div>

      {/* ===== MAIN FOOTER CONTENT ===== */}
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
          <img
            src="/side-hustle.png"
            alt="side-hustle logo"
            className="w-[189px]"
          />

          <div className="flex items-center gap-8">
            <img
              src="/facebook.png"
              alt="facebook"
              className="w-[13px] h-[20px]"
            />
            <img
              src="/twitter.png"
              alt="twitter"
              className="w-[21px] h-[17px]"
            />
            <img
              src="/google.png"
              alt="google"
              className="w-[26.67px] h-[16.97px]"
            />
            <img
              src="/linkedin.png"
              alt="linkedin"
              className="w-[18px] h-[19px]"
            />
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
