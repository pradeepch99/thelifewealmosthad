
import "./globals.css";

export const metadata = {
  title: "The Life We Almost Had",
  description: "A cinematic romantic memory experience"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
