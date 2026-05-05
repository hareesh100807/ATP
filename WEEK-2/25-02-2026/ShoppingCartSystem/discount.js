const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

function validateCoupon(code, totalAmount, category) {
  const coupon = coupons[code];
  if (!coupon) {
    console.log("Invalid coupon code");
    return null;
  }
  if (totalAmount < coupon.minAmount) {
    console.log(`Minimum amount for this coupon is ${coupon.minAmount}`);
    return null;
  }
  if (coupon.category && coupon.category !== category) {
    console.log(`This coupon is only valid for ${coupon.category} category`);
    return null;
  }
  return coupon;
}

function calculateDiscount(coupon, totalAmount) {
  if (coupon.type === "percentage") {
    return (totalAmount * coupon.value) / 100;
  } else if (coupon.type === "flat") {
    return coupon.value;
  }
  return 0;
}

function applyDiscount(code, totalAmount, category) {
  const coupon = validateCoupon(code, totalAmount, category);
  if (coupon) {
    const discount = calculateDiscount(coupon, totalAmount);
    const finalAmount = totalAmount - discount;
    console.log(
      `Coupon applied! You saved ${discount}. Final amount: ${finalAmount}`,
    );
    return finalAmount;
  }
  return totalAmount;
}

export { applyDiscount, validateCoupon, calculateDiscount };
