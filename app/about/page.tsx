import Header from "@/components/reuseable/header";

const About = () => {
  return (
    <div>
      <Header bgImg="/about.png" text="" title="About Us" button="" />
      <main className="w-360 mx-auto py-20">
        <div className="flex justify between items-center">
          <div>
            <p>
              Hey, We are the Red Explorers Brief History{" "}
              <span className="text-[#FFA500]">About Us.</span>{" "}
            </p>
          </div>
          <div className="w-160 h-60">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
