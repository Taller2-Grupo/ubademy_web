import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { useEffect, useState } from "react";
import { firebase } from "../firebase/config";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { Footer } from "../components";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../globalStyles";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import LoginRouter from "./LoginRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <PublicRouter path="/auth" log={log} component={AuthRouter} />
        <PrivateRouter path="/" log={log} component={LoginRouter} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
