import "./globals.css";

export const metadata = {
  title: "DYPCOE Attainment Mapping",
  description: "CO PO Attainment Mapping for Computer Department of DYPCOE Akurdi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap" 
          rel="stylesheet"
        />
      </head>
      
      <body className="font-faculty antialiased">
        {children}
      </body>
    </html>
  );
}
