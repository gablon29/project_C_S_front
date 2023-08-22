import { Outlet } from "react-router-dom";
import Lista from "../../lista/Lista";

const Home = () => {
  return (
    <>
      <Lista />
      <Outlet />
    </>
  );
};
export default Home;
