import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnB",
  description: "Book your hotels, guestrooms, dorms, and much much more here",
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
