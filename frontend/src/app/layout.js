import { Poppins } from "next/font/google";
import "./globals.css";
import NextUiProvider from "@/providers/nextui-provider";
import AuthProvider from "@/providers/auth-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "GoChat",
  description: "Your new chatting companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUiProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
