import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "./../Shared/Header/Header";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import SectionTitle from "./../Shared/SectionTitle/SectionTitle";
import Navbar from "./../Shared/Navbar/Navbar";
import LeftNavCard from "./../../components/LeftNavCard/LeftNavCard";

const NewsDetails = () => {
  const [loading, setLoading] = useState(true);
  const news = useLoaderData();
  const { newsId } = useParams();
  const [targetedNews, setTargetedNews] = useState({});

  useEffect(() => {
    const tarNews = news.find((info) => info._id === newsId);
    setTargetedNews(tarNews);
    setLoading(false);
  }, [news]);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <Navbar />
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
            <section className="py-8">
              <h2 className="text-xl mb-3 font-semibold">Editors Insight</h2>
            <div className="flex lg:flex-row flex-col gap-5 justify-between">
              <LeftNavCard />
              <LeftNavCard />
              <LeftNavCard />
            </div>
            </section>
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
