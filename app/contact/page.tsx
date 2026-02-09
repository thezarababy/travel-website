import Image from "next/image";
import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const Contact = () => {
  return (
    <div>
      <Header bgImg="/contact.png" text="" title="Contact" />
      <main className="py-10 max-w-7xl mx-auto px-6">
        <form
          action="submit"
          className="w-full max-w-2xl text-center mx-auto"
        >
          <h1 className="my-10 text-2xl md:text-3xl font-bold px-4">
            PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
          </h1>
          <div className="mb-10 flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="underline border-2 p-5 w-full rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="underline border-2 p-5 w-full rounded-lg"
            />
          </div>
          <div className="mb-10 flex flex-col md:flex-row gap-6">
            <input
              type="email"
              placeholder="Email"
              className="underline border-2 p-5 w-full rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="underline border-2 p-5 w-full rounded-lg"
            />
          </div>

          <textarea
            placeholder="message"
            className="underline border-2 p-5 h-60 w-full mb-10 rounded-lg"
          />
          <Button
            label="Submit"
            className="rounded-md px-8 py-5 text-white bg-[#0336FF] w-full md:w-auto"
            target=""
          />
        </form>
        <section className="flex flex-wrap justify-center gap-4 mt-30">
          <Image src="/one.png" alt="" width={208} height={260} />
          <Image src="/two.png" alt="" width={208} height={260} />
          <Image src="/three.png" alt="" width={208} height={260} />
          <Image src="/four.png" alt="" width={208} height={260} />
          <Image src="/five.png" alt="" width={208} height={260} />
          <Image src="/six.png" alt="" width={208} height={260} />
          <Image src="/seven.png" alt="" width={208} height={260} />
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center my-30 gap-10">
          <div>
            <p className="font-bold text-3xl md:text-4xl w-full lg:w-[500px] text-center lg:text-left">
              Join <span className="text-blue-700 ">98,641</span> Monthly
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

export default Contact;
