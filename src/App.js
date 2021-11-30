import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProduct/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authentication} />
      <Route path="/category" component={Category} />
      <Route path="/categoryProducts" component={CategoryProducts} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default App;
