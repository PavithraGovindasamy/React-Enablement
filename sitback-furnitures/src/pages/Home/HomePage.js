import Header from "../../components/Header/Header.js";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer.js";
import Product from "../../components/Product/Product.js";
/**
 * Page which has the redirects to the shopping cart
 * @returns HomePage Component
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <Product />
      <Footer></Footer>
    </>
  );
}
