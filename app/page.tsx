import Image from "next/image";
import DestinationCard from "@/components/reuseable/destination-card";
import Header from "@/components/reuseable/header";
import ScrollButton from "@/components/reuseable/scroll-button";
import Button from "@/components/reuseable/button";
import PostCard from "@/components/reuseable/post-card";
import RecentPostCard from "@/components/reuseable/RecentPost-card";

const Home = () => {
  return (
    <div id="home" className=" ">
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
      />

      <Button
        label="Read More"
        className=" absolute left-1/2
          -translate-x-1/2 bottom-40 rounded-md px-8 py-5 text-white bg-[#0336FF]"
        target=""
      />

      <ScrollButton
        target="next-section"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-20
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <p className="text-white font-medium text-2xl">
          Scroll Down to Continue
        </p>
        <Image src="/scroll.png" alt="Scroll" width={24} height={24} />
      </ScrollButton>

      <main className="mx-10 px-4 py-12 text-center flex flex-col md:flex-row gap-10">
        <section className="w-full md:w-[30%]">
          <div
            className=" flex flex-col items-center gap-5 h-150 shadow-md "
            id="next-section"
          >
            <h1 className="font-bold text-2xl my-3 ">About us</h1>
            <Image
              src="/profile-pics.png"
              alt="Profile"
              width={300}
              height={200}
              className="object-cover "
            />
            <p className="w-90.75  px-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in
              vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat
              eget et lorem est arcu. Gravida hendrerit sit blandit semper
              lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget
              suspendisse leo scelerisque sed d.
            </p>
            <Button
              label="Read More"
              className=" 
           rounded-md px-8 py-5 text-white bg-[#0336FF]"
              target=""
            />
          </div>
          <div className="  px-12 my-10 shadow-md">
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
            <div className="flex justify-between items-center mb-5 pb-5">
              <h3>Other</h3>
              <p>(11)</p>
            </div>
          </div>
          <div className="  mb-8">
            <div className="px-10 py-6  mb-10 shadow-md">
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

          <div className="mb-8">
            <div className="px-10 py-6  mb-10 shadow-md">
              <h1 className="font-bold text-2xl">Recent Posts</h1>
            </div>
            <div className="  shadow-md ">
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
          <div className=" shadow-md  h-70 text-center my-6 ">
            <h1 className="font-bold pb-4 text-lg pt-6">Gear I Use</h1>
            <h3 className="text-2xl font-bold  pb-4">What’s in My Bag??</h3>
            <p className="pb-4 w-60 mx-auto text-[#0B0A0A]">
              Unfortunately, there is no “one-size-fits-all” when it comes to
              travel packing lists.
            </p>
            <Button
              label="View Details"
              className="  rounded-md px-8 py-5 text-white bg-[#0336FF]"
              target=""
            />
          </div>

          <div className="space-y-4 mb-8">
            <div
              className="px-10 py-6  mb-10 shadow-md
transition-all duration-300 hover:-translate-y-1
hover:shadow-md"
            >
              <h1 className="font-bold text-2xl">Product That I Have</h1>
            </div>
            <div className=" shadow-md">
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
              className="px-10 py-6  mb-10 shadow-md
  ]"
            >
              <h1 className="font-bold text-2xl text-center">Get In Touch</h1>
            </div>

            <section className="flex items-center gap-10 text-white text-sm">
              <main className="">
                <div className="flex items-center gap-2 bg-[#4056AC] rounded-md p-4 mb-4">
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={16}
                    height={16}
                  />
                  <span>65.5K </span>
                  <span>Likes</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FE2C3C] rounded-md p-4">
                  <Image
                    src="/youtube.png"
                    alt="youtube"
                    width={16}
                    height={16}
                  />
                  <span>1.5 M</span>
                  <span>Subscribers</span>
                </div>
              </main>
              <main>
                <div className="flex items-center gap-2 bg-[#60B7FE] rounded-md p-4 mb-4">
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width={16}
                    height={16}
                  />
                  <span>105 k</span>
                  <span>Followers</span>
                </div>
                <div className="flex items-center gap-2 bg-[#E14D93] rounded-md p-4">
                  <Image
                    src="/instagram.ng"
                    alt="instagram"
                    width={16}
                    height={16}
                  />
                  <span>85 k</span>
                  <span>Followers</span>
                </div>
              </main>
            </section>
          </div>
        </section>
        <section className="w-full md:w-[68%] ">
          <div className="mb-6  ">
            <DestinationCard
              image="/bus.png"
              title="A traveler’s guide to Penang, Malaysia - Where to
Eat, Drink, Sleep and Explore "
              date="July 15,2021"
              exerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
              category="Tips & Tricks"
              location="Penang, Malaysia"
              commentsCount={12}
              slug="penang-malaysia"
            />
          </div>
          <div className=" flex md:flex gap-2 mb-6">
            <div className=" w-120 ">
              <DestinationCard
                image="/bus3.png"
                title="Have you read The Beach by Alex?"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia "
                commentsCount={18}
                slug="beach-alex"
              />
            </div>
            <div className="w-120  ">
              <DestinationCard
                image="/city.png"
                title="The writer actually live in Philippines"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={19}
                slug="writer-philippines"
              />
            </div>
          </div>
          <div className="mb-6">
            <DestinationCard
              image="/wild.png"
              title="Finding Love & home in Tbilisi, Georgia"
              date="September 17, 2021"
              exerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
              category="Tips & Tricks"
              location="Penang, Malaysia "
              commentsCount={20}
              slug="tbilisi-georgia"
            />
          </div>
          <div
            className="relative w-full bg-cover bg-center py-20 mb-6"
            style={{ backgroundImage: "url('/purchase.png')" }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-white text-2xl sm:text-4xl mb-6">
                Want{" "}
                <span className="text-[#FFA500] underline">me to purchase</span>{" "}
                something for you that isn't available in your country?
              </h1>

              <Button
                label="Place Order"
                className="rounded-md px-8 py-5 text-white bg-[#0336FF]"
                target=""
              />
            </div>
          </div>
          <div className=" flex gap-4 mb-6">
            <div className=" w-125">
              <DestinationCard
                image="/globe.png"
                title="Get away from the maddening Crowds"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={40}
                slug="maddening-crowds"
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/art.png"
                title="Matsumoto Castle is considered one of"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={32}
                slug="matsumoto-castle"
              />
            </div>
          </div>
          <div className=" flex gap-4 mb-6">
            <div className=" w-125">
              <DestinationCard
                image="/city2.png"
                title="Many buildings especially in Japan"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={42}
                slug="buildings-japan"
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/kangaroo.png"
                title="There are roughly 1200 semiwild deer "
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={32}
                slug="semiwild-deer"
              />
            </div>
          </div>
          <div className="mb-6">
            <DestinationCard
              image="/wild.png"
              title="Finding Love & home in Tbilisi, Georgia"
              date="September 17, 2021"
              exerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
              category="Tips & Tricks"
              location="Penang, Malaysia"
              commentsCount={52}
              slug="love-home-tbilisi"
            />
          </div>
          <div className=" flex gap-4">
            <div className=" w-125">
              <DestinationCard
                image="/bus3.png"
                title="Have you read The Beach by Alex?"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={42}
                slug="beach-alex-2"
              />
            </div>
            <div className="w-125">
              <DestinationCard
                image="/city.png"
                title="The writer actually live in Philippines"
                date="September 17, 2021"
                exerpt=""
                category="Tips & Tricks"
                location="Georgia"
                commentsCount={61}
                slug="writer-philippines-2"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
