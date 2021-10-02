import { NavBar, Footer } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Cursos from "./pages/Cursos/Cursos";
import Usuarios from "./pages/Usuarios/Usuarios";
import SignUp from "./pages/SignUp/Signup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cursos" component={Cursos}></Route>
        <Route path="/usuarios" component={Usuarios}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
