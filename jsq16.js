class ShoppingCart {
    constructor() {
        if (ShoppingCart.instance) {
            return ShoppingCart.instance;
        }

        this.items = [];
        ShoppingCart.instance = this;
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return [...this.items];
    }
}

const cart1 = new ShoppingCart();
const cart2 = new ShoppingCart();

cart1.addItem('Book');
cart2.addItem('Laptop');

console.log(cart1.getItems());