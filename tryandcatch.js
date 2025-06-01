function mystery() {
    try {
        throw new Error('Oops');
        return 'A';
    } catch (err) {
        return 'B';
    } finally {
        return 'C';
    }
}

function wrapper() {
    try {
        return mystery();
    } finally {
        console.log('D');
    }
}

console.log(wrapper());