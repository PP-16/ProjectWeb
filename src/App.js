import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./route/Route";
import { MainAdmin } from "./admin/Mainadmin";
import { PrivateRouter } from "./route/PrivateRouter";

function App() {
  let login = 0;
  return (
    <BrowserRouter>
      {login === 1 ? (
        <Main>
          <Routes>
            {PublicRoute.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Main>
      ) : (
        <MainAdmin>
          <Routes>
            {PrivateRouter.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </MainAdmin>
      )}
    </BrowserRouter>
  );
}

export default App;
