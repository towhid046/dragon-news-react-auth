import SectionTitle from "./../SectionTitle/SectionTitle";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const MainNews = () => {
  const news = useLoaderData();
  const [showNews, setShowNews] = useState([...news].splice(0, 4));

  const handelSeeMore = () => {
    setShowNews(news);
  };

  return (
    <main className="mb-12">
      <SectionTitle title="Dragon News Home" />
      <div className="flex flex-col gap-8">
        {showNews.map((info) => (
          <NewsCard key={info._id} info={info} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handelSeeMore}
          className={`btn btn-info ${
            showNews.length === news.length && "hidden"
          }`}
        >
          See More
        </button>
      </div>
    </main>
  );
};

export default MainNews;
