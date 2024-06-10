import React from "react";

const Orders = () => {
  return (
    <div className="flex custom-container">
      <section className="bg-[white] border sidebar w-[260px] h-[1126px]">saalam</section>
      <section className="bg-[#F6F6F6] w-[1180px] pr-16 pl-12  border-2">
        <div className=" bg-white rounded-[1px]">
        <div className="pl-[48px] pt-[24px] pr-[40px] bg-[white] ">
          <h4 className="text-lg font-medium leading-[21.78px]">Orders</h4>
          <input placeholder="Search orders" />
        </div>
        <table>
          <tr className="border-t border-b">
            <th>||</th>
            <th>Order</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className={`w-8 h-[46px] `}
                src={require("../../Images/Product image.png")}
                alt=""
              />
            </td>
            <td>Order</td>
            <td>Date</td>
            <td>Total</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </table>
        </div>
      </section>
    </div>
  );
};

export default Orders;
