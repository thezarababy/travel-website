import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";

const Contact = () => {
  return (
    <div>
      <Header bgImg="/contact.png" text="" button="" title="Contact" />
      <main className="w-360 mx-auto py-20">
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
          <Button label="Submit" />
        </form>
        <section className=" flex mt-30">
          <img src="/one.png" alt="" className="w-52 h-65" />
          <img src="/two.png" alt="" className="w-52 h-65" />
          <img src="/three.png" alt="" className="w-52 h-65" />
          <img src="/four.png" alt="" className="w-52 h-65" />
          <img src="/five.png" alt="" className="w-52 h-65" />
          <img src="/six.png" alt="" className="w-52 h-65" />
          <img src="/seven.png" alt="" className="w-52 h-65" />
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
            <div className="">
              <Button label="Subscribe" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
