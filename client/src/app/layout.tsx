import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allview MGMT",
  description: "Dashboard oversight",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <DashboardWrapper>{children} </DashboardWrapper>
        </body>
    </html>
  );
}
