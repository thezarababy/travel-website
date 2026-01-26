import DestinationCard from "@/components/reuseable/destination-card";
import Header from "@/components/reuseable/header";
import ScrollButton from "@/components/reuseable/scroll-button";
import Button from "@/components/reuseable/button";
import PostCard from "@/components/reuseable/post-card";

const Home = () => {
  return (
    <div id="home" className="">
      <Header
        bgImg="/homeBG.png"
        text={
          <>
            THE COUNTER:{" "}
            <span className="text-[#FFA500] font-semibold">70</span> Countries •{" "}
            <span className="text-[#FFA500] font-semibold">1036</span> Cities
          </>
        }
        title="Leave your mark all over the world"
        button="Read More"
      />
      <ScrollButton
        target="next-section"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-60
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <p className="text-white font-medium text-2xl">
          Scroll Down to Continue
        </p>
        <img src="/scroll.png" alt="Scroll" className="w-6 h-6" />
      </ScrollButton>
      <div
        className="px-8   mt-6 ml-5 flex flex-col items-center  w-[438.23px] h-[598px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
        id="next-section"
      >
        <h1 className="font-bold text-2xl my-3 ">About us</h1>
        <img
          src="/profile-pics.png "
          alt=""
          className="w-[363.8px] h-[293.8px]"
        />
        <p className="w-90.75  my-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel
          massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et
          lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet
          suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque
          sed d.
        </p>
        <Button label="Read More" bgColor="#0336FF" textColor="white" />
      </div>
      <div
        className="w-[450.23px] h-120 px-12 my-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
      >
        <h1 className="text-2xl font-bold text-center pt-6 pb-12">
          Categories
        </h1>
        <div className="flex justify-between items-center mb-5">
          <h3>Europe</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Mountain</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Travelling Video</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Beauty of Seas</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Cuisine</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Guide for traveler</h3>
          <p>(11)</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3>Other</h3>
          <p>(11)</p>
        </div>
      </div>
      <div className="px-10 py-6 shadow-md">
        <h1 className="font-bold text-2xl">Popular Post</h1>
      </div>
      <div className="w-112.25 h-126.75">
        <PostCard
          image="/bus2.png"
          date="September 17, 2018"
          category=" - Tips & Tricks"
          title="Finding Love & home in Tbilisi, Georgia"
        />
      </div>
      <div>
        <DestinationCard
          image="/bus.png"
          title="Bali, Indonesia"
          date="2024-05-15"
          exerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
          category="Tips & Tricks"
          location="Bali, Indonesia"
          commentsCount={12}
        />
      </div>
    </div>
  );
};

export default Home;
