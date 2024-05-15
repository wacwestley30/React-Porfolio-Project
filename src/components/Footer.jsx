/*
- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
*/
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="py-3 my-4 border-top bg-secondary text-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <p className="ps-3 mb-0">Westley Cervantes</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <ul className="nav list-unstyled">
                            <li>
                                <a className="text-body-secondary" href="#">
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-body-secondary" href="#">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center pe-3">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Portfolio" className="nav-link text-light">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link text-light">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Resume" className="nav-link text-light">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}