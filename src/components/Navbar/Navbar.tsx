import { Search } from '../';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2 className="logo-text">RAWG</h2>
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div className="burger-menu">
        <span className="burger ">...</span>
      </div>
    </div>
  );
};

export default Navbar;
