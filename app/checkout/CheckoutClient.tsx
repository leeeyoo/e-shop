"use client"

import toast from "react-hot-toast"
import { useCart } from "@/hooks/useCart"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [clientSecret, setClientSecret] = useState("")

  const router = useRouter()

  useEffect(() => {
    // Create a paymentintent as soon as the page loads
    if (cartProducts) {
      setLoading(true)
      setError(false)

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          items: cartProducts
          payment_intent_id: paymentIntent
        })
      }).then((res) => {
        setLoading(false)
        if (res.status === 401) {
          return router.push("/login")
        }
        return res.json()
      }).then((data) => {
        setClientSecret(data.paymentIntent.client_secret)
        handleSetPaymentIntent(data.paymentIntent.id)
      }).catch(() => {
        setError(true)
        console.log("Error", error)
        toast.error("Something went wrong")
      })
    }
  }, [cartProducts, paymentIntent])
  return (
    <>Checkout</>
  );
}

export default CheckoutClient;