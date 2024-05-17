import React from 'react';

const SidebarItem = ({ icon, itemName, isOpen }) => {
  return (
    <div className="flex items-center px-7 py-4 text-white cursor-pointer">
      {icon}
      <span className={isOpen ? 'ml-4' : 'hidden'}>{itemName}</span>
    </div>
  );
};

export default SidebarItem;
