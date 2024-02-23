'use client';

import { Col, Row } from 'antd';
import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ListSearchPage from './ListSearchPage';

const SearchPage = () => {
  return (
    <>
      <div className="p-8">
        <Row>
          <Col span={6}>
            <FilterSidebar />
          </Col>
          <Col span={18}>
            <ListSearchPage />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchPage;
