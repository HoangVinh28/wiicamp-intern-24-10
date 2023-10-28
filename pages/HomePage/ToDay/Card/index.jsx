// no import swpier
import React, { memo } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";

function CardSales() {
  const listCard = [
    {
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "88",
    },
    {
      name: "AK-900 Wired Keyboard",
      discount: "35",
      price: "1160",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "75",
    },
    {
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "99",
    },
    {
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "99",
    },
    // {
    //   name: "IPSS-Series Comfort Chair",
    //   discount: "25",
    //   price: "400",
    //   img: "/img/toys.png",
    //   star: <Star className="fill-current" />,
    //   review: "99",
    // },
  ];

  return (
    <div className="flex gap-8 mt-10">
      {listCard.map((item, index) => {
        return (
          <Card className=" max-w-[26rem] gap-4" key={item}>
            <CardHeader className="bg-second-2 w-80 h-64 shadow-none">
              <Image
                src={item.img}
                alt={index}
                className="m-12"
                width={160}
                height={160}
              />
              <div className="!absolute top-3 right-3">
                <div className="rounded-full bg-white p-1.5">
                  <Heart />
                </div>
                <div className="rounded-full bg-white p-1.5 mt-2">
                  <Eye />
                </div>
              </div>
              <div className="!absolute top-3 left-3">
                <div className="bg-second-3 p-0.5 rounded ">
                  <p className="font-poppins text-xs font-normal py-1 px-3 text-text-1">
                    -{item.discount}%
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="gap-2">
                <p className="text-base font-bold font-poppins text-text-2 ">
                  {item.name}
                </p>
                <div className="flex gap-2 text-base font-poppins font-medium ">
                  <span className="text-second-3">
                    ${item.price - (item.price * item.discount * 1) / 100}
                  </span>
                  <span className="line-through font-medium opacity-50">
                    ${item.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <p className="text-second-4 flex">
                    {item.star}
                    {item.star}
                    {item.star}
                    {item.star}
                    {item.star}
                  </p>
                  <p className="font-medium opacity-50 font-poppins text-base">
                    {item.review}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
export default memo(CardSales);
