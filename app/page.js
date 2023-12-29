import PreviewImg from "./components/home/PreviewImg";
import {Dancing_Script, Italiana, Petit_Formal_Script} from "next/font/google";
export const quicksand = Dancing_Script({
  weight: ["400","500","600", "700",],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
});
export const italiana = Italiana({
  weight: ['400'],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
});
export const petit = Petit_Formal_Script({
  weight: ['400'],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
});


export default function Home() {
  return (
    <div className="flex flex-col items-center lg:items-end gap-8">
      <PreviewImg />
      <h1 className={`${italiana.className} home_phrase p-2 mb-40 lg:text-right text-xl sm:text-3xl md:text-4xl lg:text-4xl`}>
        We are the path to your dream.
      </h1>
    </div>
  );
}
