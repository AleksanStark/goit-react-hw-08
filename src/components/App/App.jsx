import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import { Oval } from "react-loader-spinner";
import RestrictedRoute from "../RestrictedRoute";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import PrivateRoute from "../PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Oval />
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<Oval />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo={"/login"}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
export default App;
