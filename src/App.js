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


          
          {/* <Route path="/my_profile" element={<Profile />} />
          <Route path="/signInPage" element={<SignInPage />} />
         
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetails />} />

          <Route path="/load-availability" element={<Loadavailablity />} />
          <Route path="/portfolio-v2" element={<PortfolioV2 />} />

          <Route path="/truck_availability" element={<truck_availability />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/404" element={<Error />} />
          <Route path="/location" element={<Location />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-grid" element={<ShopGrid />} />
          <Route path="/shop-left-sidebar" element={<ShopLeftSidebar />} />
          <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} />

          <Route path="/product-details" element={<ProdductDetails />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog-details" element={<BlogDetails />} />
       
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/toll-calculator" element={<TollCalculator />} />

          <Route path="/wishlist" element={<Wishlist />}>
            <Route path="load" />
            <Route path="truck" />
            <Route path="driver" />
            <Route path="buy_sell" />
          </Route>

          <Route path="/expense-calculator" element={<ExpenseCalculator />} />
          <Route path="/expense-details/:id" element={<ExpenseDetails />} />
          <Route path="/fuelprice" element={<FuelPrice />} />

          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/history" element={<History />} />
          <Route path="/chat" element={<ChatView />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
