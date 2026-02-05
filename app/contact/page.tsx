import Image from "next/image";
import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const Contact = () => {
  return (
    <div>
      <Header bgImg="/contact.png" text="" title="Contact" />
      <main className=" py-10 max-w-7xl mx-auto px-6">
        <form
          action=" submit
      "
          className="w-214 text-center mx-auto"
        >
          <h1 className=" my-10">
            PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
          </h1>
          <div className="mb-10">
            <input
              type="first name"
              placeholder="First Name"
              className="underline border-2 p-5 mr-10 w-100 rounded-lg"
            />
            <input
              type="last name"
              placeholder="Last Name"
              className="underline border-2 p-5 w-100 rounded-lg"
            />
          </div>
          <div className="mb-10">
            <input
              type="email"
              placeholder="Email"
              className="underline border-2 p-5 mr-10 w-100 rounded-lg"
            />
            <input
              type="subject"
              placeholder="Subject"
              className="underline border-2 p-5 w-100 rounded-lg"
            />
          </div>

          <textarea
            placeholder="message"
            className="underline border-2 p-5 h-100 w-214 mb-10 rounded-lg"
          />
          <Button
            label="Submit"
            className="rounded-md px-8 py-5 text-white bg-[#0336FF]"
            target=""
          />
        </form>
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
              Join <span className="text-blue-700 ">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-83 h-20 border-2 p-4 mr-5"
            />

            <Button
              label="Subscribe"
              className="rounded-md px-8 py-5 text-white bg-[#0336FF]"
              target=""
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
