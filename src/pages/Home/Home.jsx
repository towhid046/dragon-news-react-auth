import Header from "./../Shared/Header/Header";
import LatestMarquee from "./../../components/Marquee/LatestMarquee";
import Navbar from "./../Shared/Navbar/Navbar";
import LeftSideNav from "./../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
const Home = () => {
  return (
    <>
      <Header />
      <LatestMarquee />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6">
        <LeftSideNav />
        <div className="col-span-2 border">
          <h2>Main news</h2>
        </div>
        <RightSideNav />
      </div>
    </>
  );
};

export default Home;
