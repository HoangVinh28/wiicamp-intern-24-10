import React, { memo } from "react";
import classNames from "classnames";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ButtonRed from "@/components/App/AppButtonContain";
import Button from "@/components/App/AppButtonOutline";

import useCartStore from "@/Store/CartStore";
import styles from "@/styles/cart.module.css";

import CurrencyFormatter from "../../components/FomatNumber";
import UseCart from "../ProductDetails/index";

function Cart() {
  const router = useRouter();

  const { getCartItems, updateCartItemQuantity, removeFromCart } =
    useCartStore();
  const cartItems = getCartItems();

  const HandleDeleteCart = (productId) => {
    removeFromCart(productId);
    // eslint-disable-next-line no-console
    console.log("productId", productId);
  };

  const HandleToShop = () => {
    router.push("/");
  };

  const HandleToCheckout = () => {
    router.push({
      pathname: "/Checkout",
    });
  };

  const HandleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCartItemQuantity(updatedCart[index].id, updatedCart[index].quantity);
  };

  const HandleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCartItemQuantity(
        updatedCart[index].id,
        updatedCart[index].quantity,
      );
    }
  };

  let total = 0;

  cartItems.forEach((item) => {
    const CartId = UseCart(item.productId);
    if (CartId) {
      total += CartId.price * item.quantity;
    }
  });

  return (
    <div className="container mt-[80px] mb-[140px] lg:px-0 px-[16px]">
      <Head>
        <title>Cart - Exclusive</title>
        <meta name="description" content="Add to Cart " />
      </Head>
      <div className="flex flex-col sm:gap-[80px] gap-[24px]">
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
                "bg-white text-text-2 py-[24px] lg:px-[40px] px-[5px] flex justify-between font-poppins sm:text-base text-xs font-normal leading-6 max-w-full",
                styles.shadow,
              )}
            >
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cartItems.length > 0 &&
              cartItems.map((item, index) => {
                const CartId = UseCart(item.productId);
                return (
                  <div key={item.productId}>
                    {CartId ? (
                      <div
                        className={classNames(
                          "bg-white text-text-2 py-[24px] lg:px-[40px] flex justify-between  font-poppins lg:text-base text-xs font-normal leading-6 w-full",
                          styles.shadow,
                        )}
                      >
                        <span className="min-w-[54px] min-h-[54px] flex">
                          <Image
                            src={CartId?.image}
                            alt={index}
                            width={54}
                            height={54}
                            priority
                            className="object-contain"
                          />
                        </span>

                        <CurrencyFormatter amount={CartId?.price} />

                        <span className="lg:max-w-[72px] max-w-[50px] max-h-[35px] flex lg:max-h-[44px] relative ">
                          <input
                            style={{ width: "80%" }}
                            type="text"
                            value={item.quantity}
                            min="1"
                            className={classNames(
                              "lg:py-1 py-0 px-1 flex ",
                              styles.border,
                              "lg:pr-8 pr-0",
                            )}
                          />
                          <div className="absolute top-1 right-6 cursor-pointer items-center">
                            <ChevronUp
                              className="lg:w-[16px] lg:h-[16px] h-[14px] w-[14px]"
                              onClick={() => HandleIncrease(index)}
                            />
                            <ChevronDown
                              className="lg:w-[16px] lg:h-[16px] h-[14px] w-[14px]"
                              onClick={() => HandleDecrease(index)}
                            />
                          </div>
                        </span>
                        <div className="flex items-center gap-[10px]">
                          <CurrencyFormatter
                            amount={CartId.price * item.quantity}
                          />
                          <button
                            type="button"
                            onClick={() => HandleDeleteCart(CartId)}
                          >
                            <X className="text-second-3 lg:w-[24px] w-[16px]" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <span>Loading...</span>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="mt-[24px] sm:flex sm:justify-between block">
            <Button title="Return To Shop" link={HandleToShop} />
            <Button
              title="Update Cart"
              link={HandleToShop}
              classCustom="sm:mt-0 mt-[24px]"
            />
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="sm:flex block">
            <input
              type="text"
              placeholder="Coupon Code"
              required
              className={classNames(
                "py-[16px] pl-[24px] max-h-[57px] lg:min-w-[300px] max-w-[300px] font-poppins text-base font-normal opacity-50",
                styles.border,
              )}
            />
            <div>
              <ButtonRed
                classCustom="sm:ml-[16px] ml-0 md:px-[48px] px-[20px] py-[16px] md:mt-0 mt-[24px]"
                title="Apply Coupon"
              />
            </div>
          </div>

          <div className="xl:ml-[173px] ml-0 md:mt-0 mt-[20px] lg:min-w-[470px] max-w-[470px] border-[1.5px] border-solid border-black rounded px-[24px] py-[32px]">
            <p className="font-poppins text-xl font-medium not-italic leading-7">
              Cart Total
            </p>
            <div className="mt-[24px] flex flex-col gap-[16px]">
              <div className="flex justify-between border-b border-solid border-inherit pb-[16px]">
                <p>Subtotal:</p>
                <CurrencyFormatter amount={total} />
              </div>
              <div className="flex justify-between border-b border-solid border-inherit pb-[16px]">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between ">
                <p>Total:</p>
                <CurrencyFormatter amount={total} />
              </div>
              <div className="flex justify-center">
                <ButtonRed
                  title="Procees to checkout"
                  classCustom="md:px-[48px] px-[10px] py-[16px]"
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
