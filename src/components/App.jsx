
// import { Login } from "pages/Login";
// import { Register } from "pages/Register";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/authOperations";
import { selectIsRefreshing } from "redux/auth/authSelectors";
// import { Phonebook } from "./Phonebook/Phonebook";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Phonebook = lazy(() => import("../pages/Phonebook/Phonebook"));
const Login = lazy(() => import("pages/Login"));
const Register = lazy(()=>import("pages/Register"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
      useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? <p>Refreshing user...</p> : (


    <Routes>
      <Route path="/" element={<SharedLayout />} end>
        <Route index element={<Home />}></Route>
        <Route path='/phonebook' element={<PrivateRoute component={Phonebook} redirectTo={'/login'} />}></Route>
        <Route path="register" element={<RestrictedRoute component={Register} redirectTo={'/'} />}></Route>
        <Route path="login" element={<RestrictedRoute component={Login} redirectTo={'/'} />}></Route>
      </Route>
    </Routes>
  );
};

