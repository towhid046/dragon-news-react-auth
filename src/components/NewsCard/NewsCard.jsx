import PropTypes from "prop-types";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ info }) => {
  const {
    _id,
    others_info: { is_todays_pick, is_trending },
    category_id,
    rating: { number, badge },
    total_view,
    title,
    author: { name, published_date, img },
    thumbnail_url,
    image_url,
    details,
  } = info;

  return (
    <div className="border rounded">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-10 rounded-full" src={img || "Unknow"} alt="" />
          <div>
            <h3 className="font-bold">{name || "Unknow"}</h3>
            <p>{published_date?.split(" ")[0] || "Unknown"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl">
          <span className="cursor-pointer">
            <CiBookmark />
          </span>
          <span className="cursor-pointer">
            <CiShare2 />
          </span>
        </div>
      </div>
      <div className="p-5 space-y-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img src={image_url} alt="News Cover Img" />
        <p>{details?.split(" ").splice(0, 50).join(" ")}</p>
        <hr />
        <div className="flex justify-between ">
            <p>4.8</p>
            <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default NewsCard;
