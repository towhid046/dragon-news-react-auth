import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./../Shared/Header/Header";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import { NewsContext } from "../../providers/ContextProvider/ContextProvider";
import SectionTitle from "./../Shared/SectionTitle/SectionTitle";

const NewsDetails = () => {
  const [loading, setLoading] = useState(true);
  const { news } = useContext(NewsContext);
  const { newsId } = useParams();
  const [targetedNews, setTargetedNews] = useState({});

  useEffect(() => {
    const tarNews = news.find((info) => info._id === newsId);
    setTargetedNews(tarNews);
    setLoading(false);
  }, [news]);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="text-center mt-12">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="md:grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <SectionTitle title="Dragon News " />
            <div className=" space-y-5 rounded border p-6">
              <img className="w-full" src={targetedNews?.image_url} alt="" />
              <h2 className="text-2xl font-bold">{targetedNews?.title}</h2>
              <p>{targetedNews?.details}</p>
              <button className="btn btn-error rounded-none text-white">
                All news in this category
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <RightSideNav />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
