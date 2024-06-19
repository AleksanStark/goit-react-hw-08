import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/Login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
