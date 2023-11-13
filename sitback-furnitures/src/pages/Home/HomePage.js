import Header from "../../components/Header/Header.js";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer.js";
import Product from "../../components/Product/Product.js";

export default function HomePage() {
  return (
    <>
      <Header />
      <Product />
      <Footer></Footer>
      {/* <div className="fixed-container"></div> */}
      {/* <p>Footer</p> */}
    </>
  );
}
