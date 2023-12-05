import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import { CartProductType } from "@/app/product/[productId]/ProductDetails"
import { getCurrentUser } from "@/actions/getCurrentUser"

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
    const paymentIntent = await loadPaymentWidget(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY as string, orderData.user.connect.id)
    // create the order
    orderData.paymentIntentId = paymentIntent.
    await paymentIntent?.requestPayment({
      orderId: orderData.user.connect.id,
      orderName: "토스 티셔츠 외 2건",
      customerName: "김토스",
      customerEmail: "customer123@gmail.com",
      successUrl: window.location.origin + "/sandbox/success" + window.location.search,
      failUrl: window.location.origin + "/sandbox/fail" + window.location.search
    });
  }
}
