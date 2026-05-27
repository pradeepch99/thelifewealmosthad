import "./globals.css";

import MusicProvider from "./components/music/MusicProvider";

export const metadata = {
  title: "The Life We Almost Had",
};

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">

      <body>

        <MusicProvider>
          {children}
        </MusicProvider>

      </body>

    </html>
  );
}