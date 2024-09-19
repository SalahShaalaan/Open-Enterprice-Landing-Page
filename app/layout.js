import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";
import { Titillium_Web } from "next/font/google";
export const metadata = {
  title: {
    default: "Open Enterprice",
    template: "%s | Open Enterprice"
  },

  description: "Developed by Salah Shaalaan",
};
// Choosed A Random Font
const font = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"]
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased container mx-auto max-w-7xl shadow-xl rounded-xl mt-6 flex flex-col px-4`}>
        <Navbar />
        <main className="flex-grow flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
