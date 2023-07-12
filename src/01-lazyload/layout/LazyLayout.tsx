import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../pages";

function LazyLayout() {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink
            to={"lazy1"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"lazy2"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"lazy3"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>
      {/*Rutas Hijas iran aquí*/}
      <Routes>
        <Route path="lazy1" element={<LazyPages1 />} />
        <Route path="lazy2" element={<LazyPages2 />} />
        <Route path="lazy3" element={<LazyPages3 />} />

        {/* <Route path="/*" element={<div>Not found</div>} /> */}
        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
}

export default LazyLayout;
