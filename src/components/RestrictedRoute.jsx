import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component }) => {
  const isLogeedin = useSelector(selectIsLoggedIn);
  return isLogeedin ? <Navigate to="/contacts" /> : component;
};

export default RestrictedRoute;
