import DestinationCard from "@/components/reuseable/destination-card";
import Header from "@/components/reuseable/header";
import ScrollButton from "@/components/reuseable/scroll-button";
import Button from "@/components/reuseable/button";
import PostCard from "@/components/reuseable/post-card";
import RecentPostCard from "@/components/reuseable/RecentPost-card";

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

      <main className="flex  gap-10 w-360 mx-auto py-20">
        <section>
          <div
            className=" flex flex-col items-center  w-[438.23px] h-150 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in
              vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat
              eget et lorem est arcu. Gravida hendrerit sit blandit semper
              lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget
              suspendisse leo scelerisque sed d.
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
          <div className="w-112.5 space-y-6 mb-8">
            <div
              className="px-10 py-6  mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18) ]"
            >
              <h1 className="font-bold text-2xl">Popular Post</h1>
            </div>
            <div className="">
              <PostCard
                image="/bus2.png"
                date="September 17, 2018"
                category=" - Tips & Tricks"
                title="Finding Love & home in Tbilisi, Georgia"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div
              className="px-10 py-6  mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18) w-111.25 ]"
            >
              <h1 className="font-bold text-2xl">Recent Posts</h1>
            </div>
            <div
              className="w-112.25  shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300 hover:-translate-y-0.5
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] "
            >
              <RecentPostCard
                image="/recent-post1.png"
                title="Finding Love & home in Tbilisi, Georgia"
                date="September 17, 2018"
                price=""
              />

              <RecentPostCard
                image="/recent-post2.png"
                title="Finding Love & home in Tbilisi, Georgia"
                date="September 17, 2018"
                price=""
              />
              <RecentPostCard
                image="/recent-post2.png"
                title="Finding Love & home in Tbilisi, Georgia"
                date="September 17, 2018"
                price=""
              />
            </div>
          </div>
          <div
            className=" shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300 hover:-translate-y-0.5
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] w-112.25 h-70 text-center my-6 "
          >
            <h1 className="font-bold pb-4 text-lg pt-6">Gear I Use</h1>
            <h3 className="text-2xl font-bold  pb-4">What’s in My Bag??</h3>
            <p className="pb-4 w-60 mx-auto text-[#0B0A0A]">
              Unfortunately, there is no “one-size-fits-all” when it comes to
              travel packing lists.
            </p>
            <Button label="View Details" bgColor="#0336FF" textColor="white" />
          </div>

          <div className="space-y-4 mb-8">
            <div
              className="px-10 py-6  mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18) w-111.25 ]"
            >
              <h1 className="font-bold text-2xl">Product That I Have</h1>
            </div>
            <div
              className="w-112.25  shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300 hover:-translate-y-0.5
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] "
            >
              <RecentPostCard
                image="/macbook
            .png"
                title="Apple MacBook Air  MJV2ELL/A 13-inch Laptop "
                price="$514"
                date=""
              />

              <RecentPostCard
                image="/phone
            .png"
                title="Iphone Xs case, Iphone X case, SUPCASE"
                price="$267"
                date=""
              />
              <RecentPostCard
                image="/product3.png"
                title="Master Sport band for Apple wrist watch"
                price="$378"
                date=""
              />
            </div>
          </div>
          <div>
            <div
              className="px-10 py-6  mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18) w-111.25 mb-8 ]"
            >
              <h1 className="font-bold text-2xl text-center">Get In Touch</h1>
            </div>

            <section className="flex items-center gap-10 text-white ml-3 mb-6">
              <main className="">
                <div className="flex items-center gap-2 bg-[#4056AC] rounded-md p-4 mb-4">
                  <img src="/facebook.png" alt="" className="w-4 h-4" />
                  <span>65.5K </span>

                  <span>Likes</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FE2C3C] rounded-md p-4">
                  <img
                    src="/youtube.png"
                    alt=""
                    className="w-7 h-5 text-white"
                  />
                  <p>1.5 M</p>
                  <p>Subscribers</p>
                </div>
              </main>
              <main>
                <div className="flex items-center gap-2 bg-[#60B7FE] rounded-md p-4 mb-4">
                  <img src="/twitter.png" alt="" className="w-7 h-5 " />
                  <p>105 k</p>
                  <p>Followers</p>
                </div>
                <div className="flex items-center gap-2 bg-[#E14D93] rounded-md p-4">
                  <img
                    src="/instagram.ng"
                    alt=""
                    className="w-7 h-5 text-white"
                  />
                  <p>85 k</p>
                  <p>Followers</p>
                </div>
              </main>
            </section>
          </div>
        </section>
        <section
          className="w-300 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
transition-all duration-300 hover:-translate-y-1
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18) w-111.25 mb-8 ]"
        >
          <div className="">
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
          <div className=" flex gap-4">
            <div className=" w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
          </div>
          <div className="">
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
          <div
            className="relative w-full h-100 md:h-125 bg-cover bg-center mb-10"
            style={{ backgroundImage: "url('/purchase.png')" }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-white text-4xl  mb-25 w-175">
                Want{" "}
                <span className="text-[#FFA500] underline">me to purchase</span>{" "}
                something for you that isn't available in your country?
              </h1>

              <Button
                label="Place Order "
                bgColor="#0336FF"
                textColor="white"
              />
            </div>
          </div>
          <div className=" flex gap-4">
            <div className=" w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
          </div>
          <div className=" flex gap-4">
            <div className=" w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
          </div>
          <div className="">
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
          <div className=" flex gap-4">
            <div className=" w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/bus.png"
                title="Bali, Indonesia"
                date="2024-05-15"
                exerpt=""
                category="Tips & Tricks"
                location="Bali, Indonesia"
                commentsCount={12}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
