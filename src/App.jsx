import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Section from "./Section";
import Collage from "./Collage";
import Pole from "./Pole";
import BestSellers from "./BestSellers";
import PostCard from "./PostCard";
import Explore from "./Explore";
import Footer from "./Footer";

import Equipment from "./Equipments/Equipment";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Section />
              <Collage />
              <Pole />
              <BestSellers />
              <PostCard />
              <Explore />
            </>
          }
        />

        {/* EQUIPMENT PAGE */}
        <Route path="/equipment" element={<Equipment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
