import { Link } from "react-router-dom";
import logo_img from "./../../assets/uno-uni.png";

const Logo = () => {
  return (
    <>
      <div className="my-4">
        <Link to="/" className="flex flex-row gap-2 items-center">
          <img
            src={logo_img}
            alt=""
            className="w-24 h-auto filter brightness-0 invert"
          />
          <p className="text-sm italic">Explore. Discover. Excel</p>
        </Link>
      </div>
    </>
  );
};

export default Logo;
