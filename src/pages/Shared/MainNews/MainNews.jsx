import { useContext } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { NewsContext } from "../../../providers/ContextProvider/ContextProvider";

const MainNews = () => {
  const { news } = useContext(NewsContext);
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
