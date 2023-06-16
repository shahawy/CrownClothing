import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigationBar/Navigationbar";
import Home from "./routes/home/Home";
import SignIn from "./routes/signIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
