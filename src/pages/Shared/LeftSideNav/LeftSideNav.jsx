import { useEffect, useState } from "react";
import SectionTitle from './../SectionTitle/SectionTitle';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();
      setCategories(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <SectionTitle title='All Category'/>
      <ul className="flex flex-col items-start justify-start">
        {categories.map((category) => (
          <button
            className="pl-8 btn bg-white border-none shadow-none w-full flex justify-start font-normal hover:font-semibold rounded"
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideNav;
