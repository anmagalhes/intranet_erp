import "../styles/main.scss";

import Providers from "@/context/Providers";

export const metadata = {
  title: "SueloPro",
  description: "tony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
