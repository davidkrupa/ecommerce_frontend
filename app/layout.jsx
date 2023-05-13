import { Footer, Navbar } from "@components";
import "@styles/globals.css";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;