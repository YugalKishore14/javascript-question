function processData(input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }

        if (input.length === 0) {
            throw new Error('Input cannot be empty');
        }

        return input.toUpperCase();
    } catch (error) {
        if (error instanceof TypeError) {
            return `Type error: ${error.message}`;
        }
        return `Error: ${error.message}`;
    }
}

console.log(processData(''));