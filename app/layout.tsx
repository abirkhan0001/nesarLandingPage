

import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${interTight.className} bg-[#F6F5F3]`}>
        {/* Outer wrapper for full background */}
        <div className="w-full min-h-screen bg-[#F6F5F3] flex justify-center">
          {/* Centered container with borders */}
          <div className="w-full max-w-[1360px] min-h-screen border-l border-r border-[#E2E1DD]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
