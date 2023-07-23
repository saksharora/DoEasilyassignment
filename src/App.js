import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import KarigarSummaryPage from "./pages/KarigarSummaryPage";
import AddPartyPopupWithoutDropdo from "./pages/AddPartyPopupWithoutDropdo";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/add-party-popup-without-dropdown":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<KarigarSummaryPage />} />
      <Route
        path="/add-party-popup-without-dropdown"
        element={<AddPartyPopupWithoutDropdo />}
      />
    </Routes>
  );
}
export default App;
