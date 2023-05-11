import "@styles/globals.css";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <main className='app'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;