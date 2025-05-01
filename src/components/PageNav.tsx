import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/homepage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
    </nav>
  );
}
