import React from 'react';
import classNames from 'classnames';

const ToggleButton = ({ isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames('flex w-20 h-54 bg-gray-600 m-10 rounded-full transition-all duration-500', {
        'bg-gray-500': isSelected,
        'bg-black': !isSelected,
      })}
    >
      <span className={classNames('h-10 w-10 bg-white rounded-full transition-all duration-500', {
        'ml-10': isSelected,
      })}></span>
    </div>
  );
};

export default ToggleButton;
