import "./App.css";
import "./categories.styles.scss";
import HomeComp from "./routes/home/HomeComp";
import { Outlet, Route, Routes } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <h style={{ fontFamily: "Permanent Marker", marginLeft: "40%" }}>
        Navigation Bar
      </h>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return (
    <div>
      <h style={{ fontFamily: "Permanent Marker", marginLeft: "40%" }}> shop</h>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        {/*    mesting iside will match in nesting too  */}

        {/*   <Route path="home" element={<HomeComp />} />  */}
        <Route index element={<HomeComp />} />
        {/*  when u do like that , i.e passing index , it will exact also return this component along with root url   */}
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
