import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import "./index.css";
import App2 from "./Home/App";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Search from "./Search";
import Mbody from "./Home/MusicBody/Mbody";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="App2" element={<App2 />} />
      <Route path="Search" element={<Search />} />
      <Route path="/Mbody" element={<Mbody />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <DataLayer initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />
  </DataLayer>
  </React.StrictMode>
);
  // <FirstHalf />
// <Mbody />
// <Useref/>
// <Audio />

reportWebVitals();
