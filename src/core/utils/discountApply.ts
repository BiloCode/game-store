function discountApply(amount: number, percentage: number) {
  const amountDiscount = amount * Math.min(percentage, 1);
  return (amount - amountDiscount).toFixed(2);
}

export default discountApply;
