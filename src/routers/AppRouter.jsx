import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { Footer } from "../components";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../globalStyles";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import LoginRouter from "./LoginRouter";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const [logSuccess, setLogSuccess] = useState(false);
  const state = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (
      (state.hasOwnProperty("token") && state.token !== null) ||
      token !== null
    ) {
      setLogSuccess(true);
    } else {
      setLogSuccess(false);
    }
  }, [state]);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <PublicRouter
          path="/auth"
          log={logSuccess}
          component={AuthRouter}
          setLogSuccess={setLogSuccess}
        />
        <PrivateRouter path="/" log={logSuccess} component={LoginRouter} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
