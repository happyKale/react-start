import React from "react";
import { Route } from "react-router-dom";
import {
  HomeScreen,
  AdminScreen,
  CartsScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";

function AppRouter() {
  return (
    <>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/admin" component={AdminScreen} />
      <Route path="/carts" component={CartsScreen} />
      <Route path="/products/:id" component={ProductsScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route path="/signup" component={SignUpScreen} />
    </>
  );
}

export { AppRouter };
