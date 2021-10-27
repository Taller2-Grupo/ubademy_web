import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login" exact component={LoginPage}></Route>
    </Switch>
  );
};

export default AuthRouter;
