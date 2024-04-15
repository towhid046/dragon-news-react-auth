import { CiCalendar } from "react-icons/ci";

const LeftNavCard = () => {
    return (
        <div className=" bg-base-100">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="px-4 pt-4 pb-1 space-y-3">
          <h2 className="text-md font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between items-center">
            <strong>Sports</strong>
            <div className="flex items-center gap-3">
              <CiCalendar />
              <span>Jan 4, 2024</span>
            </div>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    );
};

export default LeftNavCard;