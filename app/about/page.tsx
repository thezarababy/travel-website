import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const About = () => {
  return (
    <div>
      <Header bgImg="/about.png" text="" title="About Us" />
      <main className=" w-[90%] mx-auto py-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div>
            <p className="text-3xl lg:text-4xl font-bold max-w-lg">
              Hey, We are the{" "}
              <span className="font-semibold">Red Explorers</span> Brief History{" "}
              <span className="text-[#FFA500]">About Us.</span>{" "}
            </p>
          </div>
          <div className="w-full lg:w-[600px]">
            <p className="leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </p>
          </div>
        </div>
        <section className="w-full h-auto my-10 px-4">
          <img src="/mountain.png" alt="" className="w-full h-auto object-cover" />
        </section>
        <section>
          <p className="leading-10 mb-20 px-4">
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
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          <div>
            <h1 className="font-bold text-2xl mb-5">Our Story</h1>
            <p className="mb-5 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus.{" "}
            </p>
            <p className="mb-5 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">Who Are Red Explorers</h1>
            <p className="mb-5 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus. .{" "}
            </p>
            <p className="mb-5 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">About Our Cameraman</h1>
            <p className="mb-5 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus. .{" "}
            </p>
            <p className="mb-5 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">What you’ll Learn Here</h1>
            <p className="mb-5 leading-10">
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
            <ul className="list-disc pl-5">
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
              <li> Lorem ipsum dolor sit amet, consectetur. </li>
            </ul>
          </div>
        </article>
        <section className="bg-gray-200 flex flex-wrap justify-center gap-8 my-20 px-4 py-10">
          <img src="/marshall.png" alt="" className="w-32 md:w-52 h-auto object-contain" />
          <img src="/tesla.png" alt="" className="w-32 md:w-52 h-auto object-contain" />
          <img src="/kitkat.png" alt="" className="w-32 md:w-52 h-auto object-contain" />
          <img src="/boss.png" alt="" className="w-32 md:w-52 h-auto object-contain" />
        </section>
        <div className="flex flex-col lg:flex-row justify-between mb-20 px-4 gap-10">
          <div>
            <p className="text-3xl md:text-4xl w-full lg:w-[400px] pt-10">
              What{" "}
              <span className="text-[#FFA500] underline">Customer says</span>
              <span className="underline"> About Us?</span>{" "}
            </p>
          </div>
          <div className="w-full lg:w-[600px]">
            <p className="leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </p>
          </div>
        </div>
        <section className="flex flex-col md:flex-row justify-between gap-6 px-4">
          <div className="w-full md:w-1/3 shadow-2xl rounded-md px-8 py-10 flex flex-col justify-between">
            <p className="leading-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <div>
              <p className="font-bold">Joy Kim</p>
              <p>explorer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 shadow-2xl rounded-md px-8 py-10 flex flex-col justify-between">
            <p className="leading-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <div>
              <p className="font-bold">Joy Kim</p>
              <p>explorer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 shadow-2xl rounded-md px-8 py-10 flex flex-col justify-between">
            <p className="leading-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <div>
              <p className="font-bold">Joy Kim</p>
              <p>explorer</p>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-4 mt-30">
          <img src="/one.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/two.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/three.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/four.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/five.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/six.png" alt="" className="w-48 h-60 object-cover" />
          <img src="/seven.png" alt="" className="w-48 h-60 object-cover" />
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center my-30 gap-10 px-4">
          <div>
            <p className="font-bold text-3xl md:text-4xl w-full lg:w-[500px] text-center lg:text-left">
              Join <span className="text-blue-700">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-80 h-20 border-2 p-4"
            />

            <Button
              label="Subscribe"
              className="rounded-md px-8 py-5 text-white bg-[#0336FF] w-full md:w-auto"
              target=""
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default About;
