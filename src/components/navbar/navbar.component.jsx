import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = (
  {
    activeItem,
    handleItemClick
  }
) => {

  const onItemClick = (name) => {
    handleItemClick(name);
  }

  return ( 
    <Menu stackable>
      <Link to='/'>
        <Menu.Item>
          <span role="img" aria-label="rocket">🎮</span>
        </Menu.Item>
      </Link>
      <Menu.Item
        as={ Link }
        to='login'
        name='login'
        active={activeItem === 'login'}
        onClick={() => onItemClick('login')}
        >
        Login
      </Menu.Item>
    </Menu>
   );
}
 
export default Navbar;