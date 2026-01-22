"use client";

import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Poppins } from 'next/font/google';
import { Sidebar } from "@/app/components/Sidebar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en" className={`h-full ${poppins.variable}`}>
      <body className="font-poppins">
        <main className="overflow-hidden flex w-full">
          <Sidebar/>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="flex-1 min-h-screen"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}