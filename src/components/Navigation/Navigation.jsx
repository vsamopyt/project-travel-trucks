import { NavLink, Link } from 'react-router-dom';
import { clsx } from 'clsx';
import GeneralIcon from "../GeneralIcon/GeneralIcon"
import css from './Navigation.module.css';

const Navigation= () => {
  const classLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.linkActive);
  };
  return (
    <div >
      <nav className={css.navigation}>
        <Link className={css.navigationLinkLogo} aria-label='Logo' to="/">
          <GeneralIcon 
          name ={"Logo"}
          className={css.navigationIcon}
          />
        </Link>
        <div className={css.navigationLinks}>
          <NavLink to="/" className={classLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={classLink}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
