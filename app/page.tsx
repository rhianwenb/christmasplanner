import Image from "next/image";
import "./globals.css";


export default function Home() {
  return (
    <>
    <div id="background"> 
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center align-middle min-h-screen pb-20 gap-16 sm:p-10" id="home">
      <main className="flex flex-col-2 p-10 gap-6 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/tree.svg"
          alt="christmas tree"
          width={500}
          height={500}
          priority />

        <p className="text-red-800 block text-3xl font-bold max-w-4 pt-16"><em>It's the most wonderful time of the year!</em></p>
      </main>

      <footer>
          
      </footer>
    </div>
    </div>
    </>
  );
}
