

enum OrderStatus {
    Pending = 50,
    Shipped,
    Delivered = "Delivered1",
    Cancelled = "Cancelled"
}

console.log(OrderStatus)

let status1: OrderStatus = OrderStatus.Shipped
console.log(status1)

console.log(OrderStatus[50]); // "Shipped"
console.log(OrderStatus.Delivered)

// /Литеральные типы

type PaymentMethod = "CreditCard" | "PayPal" | "BankTransfer";

function processPayment(method: PaymentMethod): string {
    return `Payment processed using ${method}`;
}

console.log(processPayment("CreditCard")); // "Payment processed using CreditCard"
// console.log(processPayment("Cash")); // Ошибка: Значение "Cash" недопустимо



enum OrderStatus1 {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

function getOrderStatusMessage(status: OrderStatus1): string {
    switch (status) {
        case OrderStatus1.Pending:
            return "Your order is being processed.";
        case OrderStatus1.Shipped:
            return "Your order has been shipped.";
        case OrderStatus1.Delivered:
            return "Your order has been delivered.";
        case OrderStatus1.Cancelled:
            return "Your order has been cancelled.";
    }
}

console.log(getOrderStatusMessage(OrderStatus1.Shipped)); // "Your order has been shipped."