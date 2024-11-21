import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "DYPCOE Attainment Mapping",
  description: "CO PO Attainment Mapping for Computer Department of DYPCOE Akurdi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-faculty antialiased">
        {children}
      </body>
    </html>
  );
}
