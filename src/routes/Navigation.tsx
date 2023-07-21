import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

function Navigation() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <div>
              <h1>REACT COURSE</h1>
            </div>
            <ul>
              <li>
                <NavLink
                  to="/shopping"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Shopping
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="shopping" element={<ShoppingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default Navigation;
