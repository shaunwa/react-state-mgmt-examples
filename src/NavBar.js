import { Link } from 'react-router-dom';

export const NavBar = () => (
    <nav className="nav-bar">
        <div className="nav-title">See examples that use...</div>
        <Link to="/use-state" className="nav-item">
            useState
        </Link>
        <Link to="/context" className="nav-item">
            Context 
        </Link>
        <Link to="/recoil" className="nav-item">
            Recoil
        </Link>
        <Link to="/redux" className="nav-item">
            Redux
        </Link>
        <Link to="/mobx" className="nav-item">
            MobX
        </Link>
    </nav>
)