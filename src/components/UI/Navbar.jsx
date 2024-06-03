import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <ul className="navbar-nav">
      {links.map((link) => {
        const { to, children } = link.props;
        const isActive = to === location.pathname;
        const className = isActive ? 'nav-link text-dark active px-0' : 'nav-link text-light px-0';
        return (
          <li key={to} className="nav-item pe-md-3">
            <Link className={className} to={to}>{children}</Link>
          </li>
        );
      })}
    </ul>
  );
}