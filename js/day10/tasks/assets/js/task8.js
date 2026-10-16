const user = { name: "Ravi" };
const city = user.address?.city ?? "City Not Available";
console.log(city);
