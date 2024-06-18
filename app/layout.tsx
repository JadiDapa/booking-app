import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/RentModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        {children}
      </body>
    </html>
  );
}
