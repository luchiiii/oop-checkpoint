//Create the product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

//Create the shopping cart item class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

//create the shopping cart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // Check if the product is already in the cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      // If product already exists, increase its quantity
      existingItem.quantity += quantity;
    } else {
      // Otherwise, add a new item
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      console.log("Shopping Cart:");
      this.items.forEach((item) => {
        console.log(
          `${item.product.name} - Quantity: ${
            item.quantity
          }, Total Price: ${item.getTotalPrice()}`
        );
      });
    }
  }
}
