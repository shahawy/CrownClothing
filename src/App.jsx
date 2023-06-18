import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigationBar/Navigationbar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />    {/* index: means that this component is displayed with the the parent Route by default */}
        <Route path="authentication" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
