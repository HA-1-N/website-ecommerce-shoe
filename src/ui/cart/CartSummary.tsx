import React from 'react';

const CartSummary = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h2>Tổng đơn hàng</h2>
            <span>1 sản phẩm</span>
          </div>
          <div>
            Tổng cộng: <span>123456</span> VNĐ
          </div>

          <div>
            <h2>
              Tổng đơn đặt hàng: <span>123456</span> VNĐ
            </h2>
          </div>
        </div>

        <div>
          <button>Thanh toán ngay</button>
        </div>

        <div>
          <button>Tiếp tục mua sắm</button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
