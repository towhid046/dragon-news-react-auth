import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins container mx-auto px-4">
      <Outlet />
    </div>
  );
};

export default Root;
