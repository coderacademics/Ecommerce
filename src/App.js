import HomePage from "./HomePage/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenHomePage from "./ShopItems/Men/MenHomePage";
import WomenHomePage from "./ShopItems/Women/WomenHomePage";
import ChildHomePage from "./ShopItems/Children/ChildHomePage";
import ItemCard from "./ShopItems/Men/ItemCard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/men" exact Component={MenHomePage} />
          <Route path="/women" exact Component={WomenHomePage} />
          <Route path="/children" exact Component={ChildHomePage} />
          <Route path="/card" exact Component={ItemCard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
