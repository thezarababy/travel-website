import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const About = () => {
  return (
    <div>
      <Header bgImg="/about.png" text="" title="About Us" />
      <main className=" w-[90%] mx-auto py-20">
        <div className="flex gap-8  items-center   ">
          <div>
            <p className="text-4xl">
              Hey, We are the{" "}
              <span className="font-semibold">Red Explorers</span> Brief History{" "}
              <span className="text-[#FFA500]">About Us.</span>{" "}
            </p>
          </div>
          <div className="w-160 h-80">
            <p className=" leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </p>
          </div>
        </div>
        <section className="w-full h-full my-10 px-4">
          <img src="/mountain.png" alt="" />
        </section>
        <section>
          <p className="leading-10  mb-40 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id.
            In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
            Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
            pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac
            tempus pellentesque nibh duis ultrices. Senectus sagittis id
            ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci
            volutpat egestas fermentum. Sit turpis diam risus leo bibendum
            neque, quis in vitae. Praesent enim augue tellus vitae placerat
            purus pretium at massa. Aliquet a malesuada eget posuere.
            Pellentesque euismod nulla praesent rhoncus.
          </p>
        </section>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div>
            <h1 className="font-bold text-2xl mb-5">Our Story</h1>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus.{" "}
            </p>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className=" leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">Who Are Red Explorers</h1>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus. .{" "}
            </p>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className=" leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">About Our Cameraman</h1>
            <p className="mb-5 leading 8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus. .{" "}
            </p>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className=" leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">What you’ll Learn Here</h1>
            <p className="mb-5 leading 10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at
              malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus
              hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae
              rhoncus.
            </p>
            <h2 className="font-semibold ">On Our Website You’ll find:</h2>
            <ul>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
            </ul>
          </div>
        </article>
        <section className="bg-gray-200 flex justify-between my-20 px-25 py-10 ">
          <img src="/marshall.png" alt="" className="w-52 h-36" />
          <img src="/tesla.png" alt="" className="w-52 h-36" />
          <img src="/kitkat.png" alt="" className="w-52 h-36" />
          <img src="/boss.png" alt="" className="w-52 h-36" />
        </section>
        <div className="flex justify-between mb-20 px-4   ">
          <div>
            <p className="text-4xl w-90 pt-10">
              What{" "}
              <span className="text-[#FFA500] underline">Customer says</span>
              <span className="underline"> About Us?</span>{" "}
            </p>
          </div>
          <div className="w-160 h-80">
            <p className=" leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </p>
          </div>
        </div>
        <section className="flex  md: flex-row justify-between ">
          <div className="w-90 h-100 shadow-2xl rounded-md px-8 py-10">
            <p className="leading-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <p className="font-bold">Joy Kim</p>
            <p>explorer</p>
          </div>
          <div className="w-90 h-100 shadow-2xl rounded-md px-8 py-10">
            <p className="leading-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <p className="font-bold">Joy Kim</p>
            <p>explorer</p>
          </div>
          <div className="w-90 h-100 shadow-2xl rounded-md px-8 py-10">
            <p className="leading-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <p className="font-bold">Joy Kim</p>
            <p>explorer</p>
          </div>
        </section>
        <section className=" flex mt-30 ">
          <img src="/one.png" alt="" className="w-48 h-60" />
          <img src="/two.png" alt="" className="w-48 h-60" />
          <img src="/three.png" alt="" className="w-48 h-60" />
          <img src="/four.png" alt="" className="w-48 h-60" />
          <img src="/five.png" alt="" className="w-48 h-60" />
          <img src="/six.png" alt="" className="w-48 h-60" />
          <img src="/seven.png" alt="" className="w-48 h-60" />
        </section>
        <section className="flex justify-between my-30">
          <div>
            <p className="font-bold text-4xl w-130">
              Join <span className="text-blue-700">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form className="px-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-83 h-20 border-2 p-4 mr-5"
            />

            <Button label="Subscribe" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default About;
