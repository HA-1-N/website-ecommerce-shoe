import { Input, Modal } from 'antd';
import React from 'react';
import styles from './ModalSearch.module.css';
import clsx from 'clsx';

interface ModalSearchProps {
  handleClose: () => void;
}

const ModalSearch = (props: ModalSearchProps) => {
  const { handleClose } = props;

  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <div className={clsx(styles.modalContainer)} onClick={handleClose}>
        <div className="flex justify-center items-center h-full">
          <div onClick={(e) => e.stopPropagation()}>
            <Search size="large" placeholder="Search..." allowClear onSearch={onSearch} style={{ width: 400 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSearch;
