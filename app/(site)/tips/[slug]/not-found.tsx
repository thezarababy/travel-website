import Navbar from "@/components/reuseable/navbar";
import Footer from "@/components/reuseable/footer";

const notFound = () => {
  return (
    <div>
      <Navbar />
      <h1>404</h1>
      <p>Page not found</p>
      <Footer />
    </div>
  );
};

export default notFound;
