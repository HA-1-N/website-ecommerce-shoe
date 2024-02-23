import { DEFAULT_PAGE_SIZE } from '@/lib/constants/page.constant';
import { Pagination } from 'antd';
import React from 'react';

interface PaginationProviderProps {
  page: number;
  total: number;
  onChangePage: (newPage: number) => void;
}

const PaginationProvider = (props: PaginationProviderProps) => {
  const { page, total, onChangePage } = props;
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          {(page - 1) * DEFAULT_PAGE_SIZE + 1} - {Math.min((page - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE, total)}{' '}
          trong số {total}
        </div>
        <div>
          <Pagination
            defaultPageSize={DEFAULT_PAGE_SIZE}
            total={total}
            showSizeChanger={false}
            showQuickJumper={false}
            current={page}
            onChange={onChangePage}
          />
        </div>
      </div>
    </>
  );
};

export default PaginationProvider;
