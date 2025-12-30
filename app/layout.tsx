import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Piyush Burnwal | Portfolio",
  description:
    "My personal portfolio highlighting frontend projects built while learning React and Next.js.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#09090b] antialiased`}>
        {children}
      </body>
    </html>
  );
}
