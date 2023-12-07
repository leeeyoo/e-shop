"use client"

import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/utils/formatPrice"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"

interface CheckoutFormProps {
  clientSecret: string
  handleSetPaymentSuccess: (calue: boolean) => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  clientSecret,
  handleSetPaymentSuccess
}) => {
  const {cartTotalAmount, handleClearCart, handleSetPaymentIntent} = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const formattedPrice = formatPrice(cartTotalAmount)

  useEffect(() => {
    if (!stripe) return
  }, [stripe])
  return ( 
    <></>
   );
}
 
export default CheckoutForm;