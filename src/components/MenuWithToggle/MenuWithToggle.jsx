import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

export default function MenuWithToggle({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
        isActive ? 'active' : ''
      } has-child`}
    >
      <a href="/">{title}</a>
      <button type="button" className="toggle" onClick={toggleActive} aria-label="Toggle">
        <i className="icon-angle-down" />
      </button>
      <ul className="sub-menu">{children}</ul>
    </li>
  );
}

export function MenuWithToggleItem({ id, href, text }) {
  return (
    <li id={id} className="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
      <a href={href}>{text}</a>
    </li>
  );
}

MenuWithToggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

MenuWithToggleItem.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
