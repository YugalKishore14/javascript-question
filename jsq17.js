const templateFn = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
        const value =
            values[i] !== undefined
                ? typeof values[i] === "number"
                    ? values[i] * 2
                    : values[i]
                : "";
        return result + str + value;
    }, "");
};

const num = 5;
const str = "world";

const result = templateFn`Hello ${str}, ${num} times ${"!"}`;
console.log(result);
