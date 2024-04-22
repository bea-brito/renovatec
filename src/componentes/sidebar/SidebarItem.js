import React from 'react';

const SidebarItem = ({ icon, itemName }) => {
  return (
    <div className="flex items-center px-4 py-2 text-white  cursor-pointer">
      {icon}
      {itemName}
    </div>
  );
};

export default SidebarItem;
