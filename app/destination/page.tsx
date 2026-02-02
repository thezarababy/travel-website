import Image from "next/image";
import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const page = () => {
  return (
    <div>
      <Header bgImg="/destination.png" text="" button="" title="Destination" />
      <main className=" py-20">
        <div className="flex justify-between items-center w-360 mx-auto my-20">
          <div>
            <p className="text-6xl w-150">
              <span className="font-semibold text-[#FFA500] underline">
                Where do{" "}
              </span>{" "}
              you want to go?{" "}
            </p>
          </div>
          <div className="w-100">
            <p className=" leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis.{" "}
            </p>
          </div>
        </div>
        <section className=" flex mt-30">
          <Image src="/one.png" alt="" width={208} height={260} />
          <Image src="/two.png" alt="" width={208} height={260} />
          <Image src="/three.png" alt="" width={208} height={260} />
          <Image src="/four.png" alt="" width={208} height={260} />
          <Image src="/five.png" alt="" width={208} height={260} />
          <Image src="/six.png" alt="" width={208} height={260} />
          <Image src="/seven.png" alt="" width={208} height={260} />
        </section>
        <section className="flex justify-between my-30">
          <div>
            <p className="font-bold text-4xl w-130">
              Join <span className="text-blue-700">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form>
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

export default page;
