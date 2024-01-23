import { Row } from 'antd';
import Link from 'next/link';
import React from 'react';

const HeaderLogin = () => {
  return (
    <>
      <div className="bg-black h-48 w-full flex items-center justify-center">
        <div className="">
          <h1 className="text-white text-center text-3xl font-bold">Account</h1>
          <div className="text-white text-center">
            <Link href={'#'}>
              <span className="transition duration-300 ease-out hover:ease-in hover:text-orange-400">Home</span>
            </Link>
            <span className="mx-4">/</span>
            <span>Account</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogin;
