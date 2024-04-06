import Marquee from "react-fast-marquee";
const LatestMarquee = () => {
  return (
    <div className="p-3 bg-gray-200 flex items-center">
      <button className="btn btn-error rounded-none text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        <strong className="cursor-pointer">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </strong>
      </Marquee>
    </div>
  );
};

export default LatestMarquee;
