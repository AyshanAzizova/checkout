import React from "react";

const Checkout = () => {
  return (
    <section>
      <div className="bg-[#F6F6F6]">
        <div className="container mx-auto py-10">
          <h3 className="leading-7 font-bold text-2xl">Checkout</h3>
          <div className="flex leading-[24.5px]">
            <p className="font-medium text-[14px] text-[#5C5F6A]">Ecommerce</p>
            <img  src={require("../../Images/Chevron Right.png")} alt="" />
            <p className="font-[500] text-[##0E1422]">Checkout</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12 flex pt-14 justify-between">
        <div className="w-[50%] flex flex-col gap-10">
          <h5 className="font-semibold mb-5">Shipping Address</h5>
          <form className="flex flex-wrap justify-between gap-y-4">
            <div className="w-[100%] ">
              <label className="block font-medium text-sm leading-[24.5px] text-[#474B57]">
                Street Address
              </label>
              <input className="w-[100%] border rounded-[4px] rounded-xl p-1" />
            </div>
            <div className="w-[49%]">
              <label className="block font-medium text-sm leading-[24.5px] text-[#474B57]">
                City
              </label>
              <input className="w-[100%] border rounded-[4px] rounded-xl p-1" />
            </div>
            <div className="w-[49%]">
              <label className="block font-medium text-sm leading-[24.5px] text-[#474B57]">
                State
              </label>
              <input className="w-[100%] border rounded-[4px] rounded-xl p-1" />
            </div>
            <div className="w-[49%]">
              <label className="block font-medium text-sm leading-[24.5px] text-[#474B57]">
                Zip Code
              </label>
              <input className="w-[100%] border rounded-[4px] rounded-xl p-1" />
            </div>
            <div className="w-[49%]">
              <label className="block font-medium text-sm leading-[24.5px] text-[#474B57]">
                Country
              </label>
              <input className="w-[100%] border rounded-[4px] rounded-xl p-1" />
            </div>
          </form>
        </div>
        <div className="ml-14 w-[1px] h-[400px] bg-[#E6E7E8]"></div>
        <div className="w-[30%] flex flex-col gap-10">
          <h5 className="font-semibold mb-5">Your Order</h5>
          <div className="flex justify-between">
            <div className="flex gap-[10px]">
              <div className="w-[40px] h-[40px] bg-[#F6F6F6] rounded-[100px] flex justify-center items-center">
                <img
                  className="w-[25px] h-[35px]"
                  src={require("../../Images/Product image3.png")}
                  alt="product"
                />
              </div>
              <div className="w-[40px] h-[40px] bg-[#F6F6F6] rounded-[100px] flex justify-center items-center">
                <img
                  className="w-[25px] h-[35px]"
                  src={require("../../Images/Product image2.png")}
                  alt="product"
                />
              </div>
              <div className="w-[40px] h-[40px] bg-[#F6F6F6] rounded-[100px] flex justify-center items-center">
                <img
                  className="w-[25px] h-[35px]"
                  src={require("../../Images/Product image.png")}
                  alt="product"
                />
              </div>
            </div>
            <button className="border rounded-[6px] text-[14px] font-medium text-[#5C5F6A] px-[24px] py-[12px]">
              Edit Cart
            </button>
          </div>
          <div className="flex flex-col gap-3" >
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p  className="text-[#0E1422] font-[500]">$ 75.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p  className="text-[#0E1422] font-[500]">Free</p>
            </div>
            <div className="mb-5 flex justify-between">
              <p>Tax:</p>
              <p className="text-[#0E1422] font-[500]">$ 3.00</p>
            </div>
            <hr/>
            <div className="mb-5 flex justify-between">
              <p className="text-[#0E1422] font-[500]">Total:</p>
              <p className="text-[#0E1422] font-[500]">$ 3.00</p>
            </div>
            <button className="bg-[#0E1422] text-white rounded-[6px] p-3">Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
