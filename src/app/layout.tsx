import { Header } from "@/components/Header/Header";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Provider } from "../trpc/Provider";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <Provider>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
