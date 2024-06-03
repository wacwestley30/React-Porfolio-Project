/*
- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
*/
import Navbar from './UI/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="py-3 my-4 border-top bg-secondary text-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
                        <Link to="/" className="text-decoration-none text-light">
                            <p className="mb-0">Westley Cervantes</p>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <ul className="nav list-unstyled">
                            <li>
                                <a className="text-body-secondary" href="https://github.com/wacwestley30">
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-body-secondary" href="https://www.linkedin.com/in/westleycervantes/">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <nav className="navbar navbar-expand-lg bg-secondary">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12 d-flex justify-content-center text-center text-lg-start">
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
                    </div>
                </div>
            </div>
        </footer>
    );
}