export const required = (value) => {
    return (value ? undefined : 'Field is empty')
}
export const maxLength = (max) => (value) => {
    return (value ? (value.length > max ? `Must be ${max} symbols or less` : undefined) : undefined);
}

export const typeCorrect = (value) => {
    return (value ? (!(value === 'true' || value === 'false') ? `Must be 'true' or 'false'` : undefined) : undefined );
}

export const typeCorrectURL = (value) => {
    return (value ? ((value.includes('http://') || value.includes('https://')) ? `Wrong format of domain (без http(s)://)` : undefined) : undefined);
}