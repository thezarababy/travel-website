import Navbar from "@/components/reuseable/navbar";
import Footer from "@/components/reuseable/footer";
import Destination from "@/components/block/destination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations - Travel Website",
  description: "Explore our exciting travel destinations around the world.",
};

export default function DestinationPage() {
  return (
    <>
      <Navbar />
      <Destination />
      <Footer />
    </>
  );
}
