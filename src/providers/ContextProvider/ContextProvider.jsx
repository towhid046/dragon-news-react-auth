import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const NewsContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("news.json");
      const data = await res.json();
      setNews(data);
    };
    loadData();
  }, []);

  const datas = { news };

  return (
    <>
      <NewsContext.Provider value={datas}>{children}</NewsContext.Provider>
    </>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
