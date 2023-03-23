import "./App.css";
import "./categories.styles.scss";
import CategoryList from "./components/directory/CategoryList";

const App = () => {
  return (
    <div>
      <h2 className="appTitle"> Jai shree Krishna </h2>
      <CategoryList />
    </div>
  );
};

export default App;
