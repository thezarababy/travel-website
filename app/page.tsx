import Header from "@/components/reuseable/header";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
