export const required = (value) => {
    if (value) return undefined;

    return 'Required field!';
}

export const  maxLength = (maxLength) => (text) => {
    if (text.length > maxLength) 
        return `Max length is ${maxLength} symbols`;

    return undefined;
}

export const ComposeValidators = (validators) => (value) => {
    let error = undefined;
    for(let i = 0; i < validators.length; i++) {
        error = validators[i](value);
        if(error) break;
    }
    return error;
}