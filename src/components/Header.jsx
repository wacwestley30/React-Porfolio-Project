import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 d-flex justify-content-center text-start">
            <Navbar
              links={[
                <Link key={1} className="nav-link" to="/">About Me</Link>,
                <Link key={2} className="nav-link" to="/Portfolio">Portfolio</Link>,
                <Link key={3} className="nav-link" to="/Contact">Contact</Link>,
                <Link key={4} className="nav-link" to="/Resume">Resume</Link>
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}