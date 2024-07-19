import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT By BK",
  description: "HAHAHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#212121'}}className={inter.className}>{children}</body>
    </html>
  );
}
