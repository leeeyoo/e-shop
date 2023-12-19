"use client"

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import { useRouter } from "next/navigation";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";

interface OrderDetailsProps {
  order: Order
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  order
}) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>Order ID: {order.id}</div>
      <div>Total Amount: <span className="font-bold">{formatPrice(order.amount)}</span></div>
      <div className="flex gap-2 items-center">
        <div>Payment status:</div>
        <div>
          {order.status === "pending"
            ? <Status text="pending" icon={MdAccessTimeFilled} bg="bg-neutral-200" color="text-neutral-700" />
            : order.status === "complete"
              ? <Status text="completed" icon={MdDone} bg="bg-green-200" color="text-green-700" />
              : <></>
          }
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Delivery status:</div>
        <div>
          {order.deliveryStatus === "pending"
            ? <Status text="pending" icon={MdAccessTimeFilled} bg="bg-neutral-200" color="text-neutral-700" />
            : order.deliveryStatus === "dispatched"
              ? <Status text="completed" icon={MdDeliveryDining} bg="bg-purple-200" color="text-purple-700" />
              : order.deliveryStatus === "delivered"
                ? <Status text="delivered" icon={MdDone} bg="bg-green-200" color="text-green-700" />
                : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;