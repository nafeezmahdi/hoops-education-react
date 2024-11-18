import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<HomePage />} path="/home" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
