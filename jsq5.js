const products = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 100, category: 'Electronics' },
    { id: 3, name: 'Book', price: 15, category: 'Books' },
    { id: 4, name: 'Shirt', price: 25, category: 'Clothing' },
    { id: 5, name: 'Coffee Mug', price: 10, category: 'Kitchen' }
];

const result = products
    .filter(p => p.price > 20)
    .map(p => ({ name: p.name, value: p.price * 0.9 }))
    .reduce((acc, item) => {
        acc.names.push(item.name);
        acc.total += item.value;
        return acc;
    }, { names: [], total: 0 });

console.log(result);