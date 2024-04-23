import React, { useState } from 'react';
import { CustomButton } from '../Button';
import BackImage from '../../asset/icons/back.svg';
import './Account.css'

export const AccountOptions = ({ showMenu }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowOptions(!showOptions);
  };

  return (
    <div className={`account ${showOptions ? 'open' : ''}`}>
      <CustomButton className='account-btn' onClick={toggleOptions} type = "secondary">
        Choose a category
        <img
          src={BackImage}
          onClick={toggleOptions}
          className={showOptions ? 'rotate' : ''}
          alt="Back"
        />
      </CustomButton>
      <br />
      <br />
      {showOptions && (
        <ul className='options-list'>
          <li>
            <a className='btn secondary' href='/farmer'>Farmers</a>
          </li>
          <br />
          <br />
          <li>
            <a className='btn second' href='/consumer'>Consumers</a>
          </li>
          <br />
          <br />
          <li>
            <a className='btn agent' href='/agent'>Agents</a>
          </li>
        </ul>
      )}
    </div>
  );
};
