import { Route, Routes } from "react-router-dom";
import Home from "./Component/view/home/Home";
import Detail from "./Component/view/detail/Detail";
import Login from "./Component/view/Log/Login";
import Overview from "./Component/overview/Overview";
import NavBar from "./Component/navBar/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="dashBoard" element={<Overview />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
