import { useEffect, useState } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";

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
      <SectionTitle title="All Category" />
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
      <div>
        <div className=" bg-base-100 border">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
