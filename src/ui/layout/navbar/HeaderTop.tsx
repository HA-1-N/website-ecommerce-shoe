import React from 'react';
import styles from './HeaderTop.module.css';
import clsx from 'clsx';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const HeaderTop = () => {
  return (
    <>
      <div className={clsx(styles.boxContainer, 'bg-stone-100 w-full h-8 block')}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-8">
            <div className="flex justify-between items-center">
              <FaPhoneVolume />
              <span className="text-gray-500 ml-2">0123-456-789</span>
            </div>

            <div className="flex justify-between items-center">
              <FaLocationDot />
              <span className="text-gray-500 ml-2">Thanh Xuân - Hà Nội</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
