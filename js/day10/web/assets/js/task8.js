// Task 8: Optional Chaining (?.) & Payment Calculation
console.log("=== Topic 8: Optional Chaining & Payment Calculation ===");

const order = {
  id: "ORD-501",
  customer: {
    name: "Sakthi",
    tier: "VIP"
  },
  item: {
    name: "Pro Headphones",
    pricing: {
      unitPrice: 100,
      discountPct: 10
    }
  }
};

// Optional Chaining access
const unitPrice = order?.item?.pricing?.unitPrice ?? 0;
const discountPct = order?.item?.pricing?.discountPct ?? 0;

function calculateTotal(price, qty, discountRate = 0) {
  const subtotal = price * qty;
  const discount = subtotal * (discountRate / 100);
  return subtotal - discount;
}

console.log("Total (Price $100, Qty 3, 10% Off):", `$${calculateTotal(unitPrice, 3, discountPct)}`);
console.log("Safe Optional Chaining Address:", order?.customer?.address?.street ?? "No address registered");
