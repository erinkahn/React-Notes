//dropdown button with menu

const NavigationBar: React.FC = () => {
  const dropdownContainer = useRef(null);

  const navItems = [
    { label: 'home', route: '/home' },
    { label: 'about', route: '/about' },
    { label: 'contact', route: '/contact' }
  ];

  const [inputValue, setInputValue] = useState<string>('Navigate to');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => setIsVisible(!isVisible);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) =>
    e.key === 'Escape' ? setIsVisible(false) : e.key === 'Enter' && setIsVisible(true);
    
    return (
      <>
        <div className="dropdown-container"
         ref={dropdownContainer}
         onMouseLeave={() => setIsVisible(false)}
        >
          <button
            type="button"
            value={inputValue}
            onChange={e => handleInputChange}
            onClick={handleClick}
            onKeyDown={handleKeyPress}
            className="dropdown-button"
            tabIndex={0}
          >
            {inputValue}
          </button>

          <nav className={`${isVisible ? 'd-block dropdown-menu' : 'd-none'} `}>
            <ul className="nav-list">
              {navItems.map((nav: { label: string; route: string }) => (
                <li>
                  <NavLink to className="nav-item"
                   tabIndex={isVisible && 0}
                   onClick={onOptionClicked(nav)}
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
