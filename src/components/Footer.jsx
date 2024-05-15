/*
- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
*/
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-secondary text-light">
                <p className="col-md-4 ps-3 mb-0">Westley Cervantes</p>
                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
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
                <ul className="nav col-md-4 justify-content-end pe-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-light">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio" className="nav-link px-2 text-light">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link px-2 text-light">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Resume" className="nav-link px-2 text-light">Resume</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}