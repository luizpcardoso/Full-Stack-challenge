import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
  );
};
