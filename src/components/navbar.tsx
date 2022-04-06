import { MdOutlinePets } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

type NavbarProps = {
  classes: String;
};

const Navbar = (props: NavbarProps) => {

  return (
    <nav className={`navbar ${props.classes}`}>
      <nav className="container navbar__content">
        <div className='navbar__content__main'>
          <MdOutlinePets className='navbar__content--icon' />
          <h1>Vet-help</h1>
        </div>
        <div className="navbar__content__actions">
          <Link to='/auth/login'>Login</Link>
          <Link to='/auth/register'>Register</Link>
        </div>

        <div className="navbar__content__mobile-menu">
          <HiMenuAlt3/>
        </div>

      </nav>
    </nav>
  );
}

export default Navbar;