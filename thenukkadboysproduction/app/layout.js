// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "My Site",
  description: "Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}