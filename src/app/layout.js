import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: "400",
    variable: "--font-poppins",
    subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard afood",
  description: "Created by Camilo Jiménez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
