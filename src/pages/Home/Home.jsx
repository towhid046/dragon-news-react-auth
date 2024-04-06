import Header from "./../Shared/Header/Header";
import LatestMarquee from "./../../components/Marquee/LatestMarquee";
import Navbar from "./../Shared/Navbar/Navbar";
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';
const Home = () => {
  return (
    <>
      <Header />
      <LatestMarquee />
      <Navbar />
      <div className="grid grid-cols-4 gap-6">
        <div>
            <LeftSideNav/>
        </div>
        <div className="col-span-2 border"><h2>Main news</h2></div>
        <div className="border"><h2>Nav right</h2></div>
      </div>
    </>
  );
};

export default Home;
