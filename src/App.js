import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
//import About from "./pages/About";
import RoutLayout from "./layouts/RoutLayouts";
import HelpLayout from "./layouts/HelpLayout";
import FAQ from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import PagenotFound from "./pages/PagenotFound";
import Orderconfirm from "./pages/Orderconfirm";
import Products from "./pages/Products";
import Buy from "./pages/help/Buy";
import View from "./pages/help/View";
import Users from "./pages/User";
import Userdetails from "./pages/help/Userdetails";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

import { Login } from "./pages/Login";
import { RequireAuth } from "./pages/RequireAuth";
const LazyAbout = React.lazy(() => import("./pages/About"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RoutLayout />}>
      <Route index element={<Home />} />
      <Route
        path="Profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="help" element={<HelpLayout />}>
        <Route path="FAQ" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />|
      </Route>
      <Route path="order-summary" element={<Orderconfirm />} />
      <Route path="products" element={<Products />}>
        <Route index element={<View />} />
        <Route path="view" element={<View />} />
        <Route path="Buy" element={<Buy />} />|
      </Route>
      <Route path="Users" element={<Users />}>
        <Route path=":userId" element={<Userdetails />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route>
        <Route
          path="about"
          element={
            <Suspense fallback="Loading">
              <LazyAbout />
            </Suspense>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PagenotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
