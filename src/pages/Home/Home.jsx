import Header from "./../Shared/Header/Header";
import LatestMarquee from "./../../components/Marquee/LatestMarquee";
import Navbar from "./../Shared/Navbar/Navbar";
import LeftSideNav from "./../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import MainNews from './../Shared/MainNews/MainNews';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <LatestMarquee />
      <Navbar />
      <div className="lg:grid grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2">
          <MainNews/>
        </div>
        <div>
          <RightSideNav />
         <NewsLatter/>
        </div>
      </div>
    </div>
  );
};

export default Home;
