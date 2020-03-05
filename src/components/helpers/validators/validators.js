export const required = (value) => {
    return (value ? undefined : 'Поле пустое')
}
export const maxLength = (max) => (value) => {
    return (value ? (value.length > max ? `Должно быть ${max} символов или меньше` : undefined) : undefined);
}

export const typeCorrect = (value) => {
    return (value ? (!(value === 'true' || value === 'false') ? `Должно быть 'true' или 'false'` : undefined) : undefined );
}

export const typeCorrectURL = (value) => {
    return (value ? ((value.includes('http://') || value.includes('https://')) ? `Не верный формат домена (без http(s)://)` : undefined) : undefined);
}