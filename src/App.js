import "./App.css";
import "./categories.styles.scss";
import HomeComp from "./routes/home/HomeComp";
import { Outlet, Route, Routes } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div style={{ fontFamily: "Permanent Marker" }}>
      <h> Navigation Bar</h>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return (
    <div style={{ fontFamily: "Permanent Marker" }}>
      <h> shop</h>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="home" element={<HomeComp />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
