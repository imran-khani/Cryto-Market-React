export function formatPrice({ price,currency }: { price: number,currency: string}) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);
}
