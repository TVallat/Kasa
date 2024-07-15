import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dropdown.scss';
import dropdownArrow from '../Images/dropdown-arrow.png';

const Dropdown = ({ buttonLabel, dropdownText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {buttonLabel}
        <img
          className={`${isOpen ? 'dropdown-arrow-reverse' : 'dropdown-arrow'}`}
          src={dropdownArrow}
          alt="Dropdown arrow"
        />
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="dropdown-menu">
          <div className="dropdown-item">
            {dropdownText}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;