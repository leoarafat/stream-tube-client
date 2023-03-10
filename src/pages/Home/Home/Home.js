import React from "react";
import Coming from "../../Coming/Coming";
import Footer from "../../Footer/Footer";
import Movies from "../../Movies/Movies";
import Songs from "../../Songs/Songs";

const Home = () => {
  return (
    <div>
      <Coming />
      <Movies/>
      <Songs/>
      <Footer/>
    </div>
  );
};

export default Home;
