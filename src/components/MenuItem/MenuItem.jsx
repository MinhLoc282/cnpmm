import React, { useState } from 'react';

import PropTypes from 'prop-types';

function MenuItem({ children, id, designClass }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <li
      id={id}
      className={`menu-item menu-item-type-post_type menu-item-object-page ${id} ${designClass} ${
        isDropdownOpen ? 'current-dropdown' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </li>
  );
}

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  designClass: PropTypes.string.isRequired,
};

export default MenuItem;
