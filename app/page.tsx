import Header from "@/components/reuseable/header";
import ScrollButton from "@/components/reuseable/scroll-button";

const Home = () => {
  return (
    <div id="home">
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
    </div>
  );
};

export default Home;
