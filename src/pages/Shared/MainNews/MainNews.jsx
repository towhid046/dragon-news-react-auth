import { useEffect, useState } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import NewsCard from "../../../components/NewsCard/NewsCard";
const MainNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("news.json");
      const data = await res.json();
      setNews(data);
    };
    loadData();
  }, []);
  
  return (
    <main>
      <SectionTitle title="Dragon News Home" />
      <div className="flex flex-col gap-8">
        {news.map((info) => (
          <NewsCard key={info._id} info={info} />
        ))}
      </div>
    </main>
  );
};

export default MainNews;
