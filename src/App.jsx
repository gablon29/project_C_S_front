import { Route, Routes } from "react-router-dom"
import Home from "./Component/view/home/Home"
import Detail from "./Component/view/detail/Detail"
import Login from "./Component/view/Log/Login"

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}>
      <Route path="login" element={<Login/>}/>
      <Route path="detail" element={<Detail/>}/>
    </Route>
  </Routes>
  </>
  )
}

export default App
