import style from "@/styles/components/Layout.module.scss";
import Navbar from "./navbar";
import Consent from "./consent";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <Consent />
        <div className={style.container}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
