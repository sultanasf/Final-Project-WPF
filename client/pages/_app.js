import { useEffect } from "react";
import Header from "../components/auth/Header";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/login.style.css";
import "@/styles/myStyle.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // import bootstrap JS
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={poppins.className}>
      <Header title={"E-Library"} />
      <Component {...pageProps} />
    </div>
  );
}
