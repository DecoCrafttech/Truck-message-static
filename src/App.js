import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/global-components/navbar";
import Footer from './components/global-components/footer'; 
import Home_V1 from "./components/home-v1";
import Contact from './components/contact';
import Blog from './components/blog';
import AboutV1 from "./components/section-components/about-v4";
import Error from "./components/section-components/error";

function App() {

  return (
    <> 

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_V1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutV1 />} />

          <Route path="*" element={<Error/>}/>

          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
