export const formatPrice = (amount: number) => {
  return new Intl
  .NumberFormat("ko-KR", {style: "currency", currency: "krw"})
  .format(amount)
}