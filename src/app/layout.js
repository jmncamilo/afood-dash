import { Poppins, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-bricolage",
    subsets: ["latin"],
});

export const metadata = {
    title: "Huerto afood",
    description: "Created by Camilo Jiménez",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} ${bricolageGrotesque.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
