import Link from 'next/link';
import React from 'react';

interface CommonHeaderContentProps {
  children?: React.ReactNode;
  ref?: string;
  title?: string;
  currentPage?: string;
  data?: any;
}

const CommonHeaderContent = (props: CommonHeaderContentProps) => {
  const { title, currentPage, data } = props;

  return (
    <>
      <div className="bg-black h-48 w-full flex items-center justify-center">
        <div className="">
          <h1 className="text-white text-center text-3xl font-bold">{title}</h1>
          <div className="text-white text-center">
            {data?.map((item: any, index: number) => (
              <>
                <Link href={item?.href} key={index}>
                  <span className="transition duration-300 ease-out hover:ease-in hover:text-orange-400">
                    {item?.name}
                  </span>
                </Link>
                <span className="mx-4">/</span>
              </>
            ))}
            <span>{currentPage}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonHeaderContent;
