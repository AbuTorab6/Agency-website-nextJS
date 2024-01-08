import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator",
    keywords:
      "broadband speed test, connection speed, download speed, express js, internet speed, internet speed meter, ISP speed, net speed test, network speed, ping test, react js, upload speed, Wifi Speed Test ",
    openGraph: {
      images:
        "https://agency.teamrabbil.com/files/istockphoto-1017296544-170667a.jpg",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#269669" height={3} speed={200} />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
