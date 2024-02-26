import { Inter, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
