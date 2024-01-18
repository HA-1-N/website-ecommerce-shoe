import React from 'react';

const MenuNavbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 hover:text-black ml-4 cursor-pointer">Trang chủ</span>
        <span className="text-gray-500 hover:text-black ml-4 cursor-pointer">Giới thiệu</span>
        <span className="text-gray-500 hover:text-black ml-4 cursor-pointer">Sản phẩm</span>
        <span className="text-gray-500 hover:text-black ml-4 cursor-pointer">Tin tức</span>
        <span className="text-gray-500 hover:text-black ml-4 cursor-pointer">Liên hệ</span>
      </div>
    </>
  );
};

export default MenuNavbar;
