import Header from "./Header.1";
import Footer from "components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
