import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const NewsContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  return (
    <>
      <NewsContext.Provider value={'1'}>{children}</NewsContext.Provider>
    </>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
