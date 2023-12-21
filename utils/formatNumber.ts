export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("ko-KR").format(digit)
}