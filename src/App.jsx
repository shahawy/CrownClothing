import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigationBar/Navigationbar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
