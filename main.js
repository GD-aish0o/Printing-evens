function calculateTotalBill(pricePerItem, quantity) {
    // Calculate total amount
    var totalBill = pricePerItem * quantity;
    // Return the total amount
    return totalBill;
}
// Calling the function named CalculateTotalBill
var priceOfItem = 10; // Price per item
var quantityPurchased = 5; // Quantity purchased
// Call the function and store the result in a variable
var totalBillAmount = calculateTotalBill(priceOfItem, quantityPurchased);
// Output the result
console.log("The total bill amount is:", totalBillAmount); // Output: The total bill amount is: 50
