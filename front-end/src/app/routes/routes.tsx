import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomeScreen,
  AdminScreen,
  CartsScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  NotFoundScreen,
} from "../screens";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/admin" component={AdminScreen} />
      <Route path="/carts" component={CartsScreen} />
      <Route path="/products/:id" component={ProductsScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route path="/signup" component={SignUpScreen} />
      <Route component={NotFoundScreen} />
    </Switch>
  );
}

export { AppRouter };
