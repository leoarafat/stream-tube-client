import MovieAnimation from "../../../component/MovieAnimation/MovieAnimation";
import SearchItem from "../../../component/SearchItem/SearchItem";
import Brand from "../../Brands/Brands";
import Coming from "../../Coming/Coming";
import Footer from "../../Footer/Footer";
import Movies from "../../Movies/Movies";
import Songs from "../../Songs/Songs";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#141e30] to-[#243b55]">
      <Coming />
      {/* <SearchItem/> */}
      <Movies />
      <Songs />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
