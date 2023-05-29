import { Footer, Navbar } from "@components";
import "@styles/globals.css";
import { StateContext } from "../context/StateContext";

export const metadata = {
  title: "UNISHOES",
  description:
    "Our ecommerce store offers best quality modern shoes for everyday use.",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <StateContext>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </StateContext>
    </body>
  </html>
);

export default RootLayout;
