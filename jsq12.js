const user = {
    name: 'Alice',
    age: 30
};

const handler = {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        }
        return `Property '${prop}' doesn't exist`;
    },
    set(target, prop, value) {
        if (prop === 'age' && typeof value !== 'number') {
            console.log(`Error: ${value} is not a valid age`);
            return false;
        }
        target[prop] = value;
        return true;
    }
};

const userProxy = new Proxy(user, handler);
userProxy.age = '31';
userProxy.job = 'Developer';

console.log(userProxy.job);