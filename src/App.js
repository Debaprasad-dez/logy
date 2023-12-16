import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import IndexPage from "./pages/Index.js";
import logo from "../src/assets/img/iconlogo.svg";
import AboutusPage from "./pages/Aboutus.js";
import ProductsPage from "./pages/Products.js";
import ArticlesPage from "./pages/Articles.js";
import Casestudies from "./pages/Casestudies.jsx";
import GetintouchPage from "./pages/Getintouch.js";
import EyePage from "./pages/Eye.js";
import OralPage from "./pages/Oral.js";
import Cs1 from "./caseStudies/cs1.jsx";
import ScrollToTop from "./assets/components/scrollToTop";
import Footer from "./assets/components/Footer.jsx";

function App() {
  const meta = {
    title: "Logy.AI - about",
    meta: [],
    link: [],
    style: [],
    script: [],
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" href={logo} />
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/aboutus" element={<AboutusPage />} /> */}
        <Route exact path="/" element={<IndexPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/contact" element={<GetintouchPage />} />

        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/cases" element={<Casestudies />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/oral" element={<OralPage />} />

        <Route path="/eye" element={<EyePage />} />
        <Route path="/cs_kenya" element={<Cs1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
