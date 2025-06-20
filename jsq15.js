function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? `<span>${values[i]}</span>` : '';
        return result + str + value;
    }, '');
}

const language = 'JavaScript';
const years = 10;

const result = highlight`I have been coding in ${language} for ${years} years`;
console.log(result);