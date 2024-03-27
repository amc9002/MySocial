export const required = (value) => {
    if (value) return undefined;

    return 'Required field!';
}

export const  maxLength = (maxLength) => (text) => {
    if (text.length > maxLength) 
        return `Max length is ${maxLength} symbols`;

    return undefined;
}