import { Quicksand, Dancing_Script, Italiana, Petit_Formal_Script } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700",],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
});

export const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700",],
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
