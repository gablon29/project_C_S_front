import { Outlet } from "react-router-dom";
import Lista from "../../lista/Lista";
import CreateUsers from "../../createUsers/CreateUsers";

const Home = () => {
  return (
    <>
      <Lista />
      <CreateUsers />
    </>
  );
};
export default Home;
