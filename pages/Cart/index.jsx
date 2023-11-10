import React, { memo } from "react";
import classNames from "classnames";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ButtonRed from "../../components/Button/ButtonRed";
import Button from "../../components/Button/ButtonWhite";

import styles from "../../styles/cart.module.css";

function Cart() {
  const router = useRouter();
  const listCart = [
    {
      id: "1",
      img: "/img/screen.png",
      name: "LCD Monitor",
      price: "650",
      quantity: "3",
    },
    {
      id: "2",
      img: "/img/toys.png",
      name: "H1 Gamepad",
      price: "550",
      quantity: "2",
    },
  ];

  const HandleToShop = () => {
    router.push("/");
  };

  const HandleToCheckout = () => {
    router.push("/Checkout");
  };

  return (
    <div className="container mt-[80px] mb-[140px]">
      <div className="flex flex-col gap-[80px]">
        <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5">
          <Link href="./" className="opacity-50">
            Home
          </Link>
          <p className="opacity-50">/</p>
          <Link href="./Cart" className="active:text-text-2">
            Cart
          </Link>
        </div>
        <div>
          <div className=" flex flex-col gap-[40px]">
            <div
              className={classNames(
                "bg-white text-text-2 py-[24px] px-[40px] flex gap-[284px] font-poppins text-base font-normal leading-6",
                styles.shadow,
              )}
            >
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {listCart &&
              listCart.map((item) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [counter, setCounter] = React.useState(1);

                const HandleIncrease = () => {
                  setCounter(counter + 1);
                };

                let HandleDecrease = () => {
                  setCounter(counter - 1);
                };

                if (counter <= 1) {
                  HandleDecrease = () => setCounter(1);
                }
                return (
                  <div
                    key={item.id}
                    className={classNames(
                      "bg-white text-text-2 py-[24px] px-[40px] flex font-poppins text-base font-normal leading-6",
                      styles.shadow,
                    )}
                  >
                    <span className="flex gap-[20px] min-w-[347px]">
                      <Image
                        src={item.img}
                        alt="aa"
                        width={54}
                        height={54}
                        priority
                        className="content"
                      />
                      {item.name}
                    </span>
                    <div className="flex gap-[282px]">
                      <span>${item.price}</span>
                      <span className="max-w-[72px] flex max-h-[44px] relative">
                        <input
                          style={{ width: "80%" }}
                          type="text"
                          value={counter}
                          min="1"
                          className={classNames(
                            "py-1 px-2",
                            styles.border,
                            "pr-8",
                          )}
                        />
                        <div className="absolute top-1 right-6 cursor-pointer">
                          <ChevronUp size={16} onClick={HandleIncrease} />
                          <ChevronDown size={16} onClick={HandleDecrease} />
                        </div>
                      </span>
                      <span>${item.price * counter}</span>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mt-[24px] flex justify-between">
            <Button title="Return To Shop" link={HandleToShop} />
            <Button title="Update Cart" link={HandleToShop} />
          </div>
        </div>
        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Coupon Code"
              required
              className={classNames(
                "py-[16px] pl-[24px] min-w-[300px] font-poppins text-base font-normal opacity-50",
                styles.border,
              )}
            />
          </div>
          <div>
            <ButtonRed
              classCustom="ml-[16px] px-[48px] py-[16px]"
              title="Apply Coupon"
            />
          </div>
          <div className="ml-[173px] min-w-[470px] border-[1.5px] border-solid border-black rounded px-[24px] py-[32px]">
            <p className="font-poppins text-xl font-medium not-italic leading-7">
              Cart Total
            </p>
            <div className="mt-[24px] flex flex-col gap-[16px]">
              <div className="flex justify-between border-b border-solid border-inherit pb-[16px]">
                <p>Subtotal:</p>
                <p>Subtotal:</p>
              </div>
              <div className="flex justify-between border-b border-solid border-inherit pb-[16px]">
                <p>Shipping:</p>
                <p>Subtotal:</p>
              </div>
              <div className="flex justify-between ">
                <p>Total:</p>
                <p>Subtotal:</p>
              </div>
              <div className="flex justify-center">
                <ButtonRed
                  title="Procees to checkout"
                  classCustom="px-[48px] py-[16px]"
                  link={HandleToCheckout}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Cart);
