import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import { CartProductType } from "@/app/product/[productId]/ProductDetails"
import { getCurrentUser } from "@/actions/getCurrentUser"
import { useQuery } from "@tanstack/react-query"

const calculateOrderAmount = (items: CartProductType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity
    return acc + itemTotal
  }, 0)
  return totalPrice
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if(!currentUser) {
    return NextResponse.json({error: "Unauthorized"}, {status: 401})
  }

  const body = await request.json()
  const {items, payment_intent_id} = body
  const total = calculateOrderAmount(items)
  const orderData = {
    user: {connect: {id: currentUser.id}},
    amount: total,
    currency: "krw",
    status: "pending",
    deliveryStatus: "pending",
    paymentIntentId: payment_intent_id,
    products: items
  }

  if (payment_intent_id) {
    // update the order
  } else {
    // create the intent
    const paymentIntent = await loadPaymentWidget(
      process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY as string, orderData.user.connect.id
    )
    // create the order
  }
}

function usePaymentWidget(clientKey: string, customerKey: string) {
  return useQuery({
    queryKey: ["payment-widget", clientKey, customerKey],
    queryFn: () => {
      // ------  결제위젯 초기화 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
      return loadPaymentWidget(clientKey, customerKey);
    },
  });
}