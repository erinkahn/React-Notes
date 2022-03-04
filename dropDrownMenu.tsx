// button dropdown menu
// with focus + tab functionality enabled

const NavigationBar: React.FC = () => {
  const dropdownContainer = useRef(null);

  const navItems = [
    { label: 'home', route: '/home' },
    { label: 'about', route: '/about' },
    { label: 'contact', route: '/contact' }
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => setIsVisible(!isVisible);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) =>
    e.key === 'Escape' ? setIsVisible(false) : e.key === 'Enter' && setIsVisible(true);
    
    return (
      <>
        <div className="dropdown-container"
         ref={dropdownContainer}
         //onMouseLeave={() => setIsVisible(false)}
        >
          <button
            type="button"
            onClick={handleClick}
            onKeyDown={handleKeyPress}
            className="dropdown-button"
            tabIndex={0}
          >
            Navigate to
          </button>

          <nav className={`${isVisible ? 'd-block dropdown-menu' : 'd-none'} `}>
            <ul className="nav-list">
              {navItems.map((nav: { label: string; route: string }) => (
                <li>
                  <NavLink to className="nav-item"
                   tabIndex={isVisible && 0}
                   to={nav.route}
                   activeClassName="active-breadcrumb-nav"
                   className="text-center text-decoration-none f-heavy fs-14"
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
      </div>
    </>
  )
};
