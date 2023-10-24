import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "klik",
  description: "The best collection of pictures on the internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
