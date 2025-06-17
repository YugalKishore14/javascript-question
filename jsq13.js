function process(data) {
    try {
        if (!data) {
            throw new TypeError('No data provided');
        }

        if (Array.isArray(data)) {
            return data.map(item => item * 2);
        }

        if (typeof data === 'object') {
            return Object.keys(data);
        }

        return data.toString();
    } catch (error) {
        if (error instanceof TypeError) {
            return 'Type error occurred';
        }
        return 'Unknown error';
    }
}

console.log(process(null));