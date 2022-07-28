import React from "react";
import "./App.css";
import { Header } from "./Components/shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./utils/Constants";
import Page404 from "./pages/Page404/Page404";
import { WomanPage } from "./pages/WomanPage/WomanPage";
import { ManPage } from "./pages/ManPage/ManPage";
import { KidsPage } from "./pages/KidsPage/KidsPage";
import { CategoryName } from "./Components/category";
import { ItemPLP } from "./Components/itemPLP";
import { ProductInfoPage } from "./pages/productInfoPage";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <div className="pageContainer">
            <Routes>
              <Route path={APP_ROUTES.woman} element={<CategoryName />} />
              <Route
                path={`${APP_ROUTES.woman}/:id`}
                element={<ProductInfoPage />}
              />
              <Route path={APP_ROUTES.MAN} element={<ManPage />} />
              <Route path={APP_ROUTES.KIDS} element={<KidsPage />} />
              <Route path={APP_ROUTES.WRONGPATH} element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
