import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../src/assets/modules/Index";
import NoMatch from "../src/assets/modules/NotFound";
import About from "../src/assets/modules/pages/About/About";
import Contact from "../src/assets/modules/pages/Contact/Contact";
import "../src/dist/style.css";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/about/", element: <About /> },
  { path: "/contact/", element: <Contact /> },
  { path: "*", element: <NoMatch /> },
];
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
      </Router>
    </>
  );
}
