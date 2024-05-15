import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {links.map((link) => {
            const { to, children } = link.props;
            const isActive = to === location.pathname;
            const className = isActive ? 'nav-link text-dark active' : 'nav-link text-light';
            return (
              <li key={to} className="nav-item">
                <Link className={className} to={to}>{children}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}