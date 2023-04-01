import "./App.css";
import "./categories.styles.scss";
import HomeComp from "./routes/home/HomeComp";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./routes/navigation/NavigationBar";
import Authentication from "./routes/authentication/Authentication";
import ShopComponent from "./routes/shop/ShopComponent";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        {/*    mesting iside will match in nesting too  */}

        {/*   <Route path="home" element={<HomeComp />} />  */}
        <Route index element={<HomeComp />} />
        {/*  when u do like that , i.e passing index , it will exact also return this component along with root url   */}
        <Route path="Shop" element={<ShopComponent />} />
        <Route path="Authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
