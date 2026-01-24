import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/app/components/Providers";
import { Sidebar } from "@/app/components/Sidebar";
import { PageTransition } from "@/app/components/PageTransition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-poppins bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Providers>
          <main className="overflow-hidden flex w-full">
            <Sidebar />
            <PageTransition>{children}</PageTransition>
          </main>
        </Providers>
      </body>
    </html>
  );
}
