import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";
import CoverPage1 from "./pages/CoverPage1";
import CoverPage from "./pages/CoverPage";
import Balances from "./pages/Balances";
import Overview from "./pages/Overview";
import ForgotPassword from "./pages/ForgotPassword";
import Expenses from "./pages/Expenses";
import AccountDetails from "./pages/AccountDetails";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Overview1 from "./pages/Overview1";
import Transactions from "./pages/Transactions";
import Bills from "./pages/Bills";

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
      case "/cover-page-01":
        title = "";
        metaDescription = "";
        break;
      case "/cover-page-03":
        title = "";
        metaDescription = "";
        break;
      case "/105-balances":
        title = "";
        metaDescription = "";
        break;
      case "/104-overview":
        title = "";
        metaDescription = "";
        break;
      case "/103-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/109-expenses":
        title = "";
        metaDescription = "";
        break;
      case "/106-account-details":
        title = "";
        metaDescription = "";
        break;
      case "/111-settings":
        title = "";
        metaDescription = "";
        break;
      case "/101-login":
        title = "";
        metaDescription = "";
        break;
      case "/1041-overview":
        title = "";
        metaDescription = "";
        break;
      case "/107-transactions":
        title = "";
        metaDescription = "";
        break;
      case "/108-bills":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/cover-page-01" element={<CoverPage1 />} />
      <Route path="/cover-page-03" element={<CoverPage />} />
      <Route path="/105-balances" element={<Balances />} />
      <Route path="/104-overview" element={<Overview />} />
      <Route path="/103-forgot-password" element={<ForgotPassword />} />
      <Route path="/109-expenses" element={<Expenses />} />
      <Route path="/106-account-details" element={<AccountDetails />} />
      <Route path="/111-settings" element={<Settings />} />
      <Route path="/101-login" element={<Login />} />
      <Route path="/1041-overview" element={<Overview1 />} />
      <Route path="/107-transactions" element={<Transactions />} />
      <Route path="/108-bills" element={<Bills />} />
    </Routes>
  );
}
export default App;
