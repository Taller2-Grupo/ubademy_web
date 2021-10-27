import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUp/Signup";

const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/sign-up" exact component={SignUp}></Route>
      <Route path="/auth/login" exact component={LoginPage}></Route>
    </Switch>
  );
};

export default AuthRouter;
