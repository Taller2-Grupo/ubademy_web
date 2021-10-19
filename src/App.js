import { Footer } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Cursos from "./pages/Cursos/Cursos";
import Usuarios from "./pages/Usuarios/Usuarios";
import SignUp from "./pages/SignUp/Signup";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cursos" exact component={Cursos}></Route>
        <Route path="/usuarios" exact component={Usuarios}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
