import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Christmas Planner",
  description: "It's the most wonderful time of the year!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#1C1917",
          colorText: "#1C1917",
        }
      }}>

    <html lang="en">
      <body className={`${lora.className}  bg-stone-100 justify-center`} >
      
        <Nav/>
          
          <h1 className="px-3 pb-5 text-center font-extrabold text-emerald-800 text-5xl">Christmas Planner</h1>

        {children}


        <div className="p-2 fixed bottom-0"> Code by Rhianwen </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
