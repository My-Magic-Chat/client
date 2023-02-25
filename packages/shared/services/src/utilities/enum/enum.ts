export const getByDescription = (enumerator: any, description: string | number) => {
    if (typeof enumerator !== 'object') { throw new Error('Function expect enumerator'); }

    const index = Object.values(enumerator).indexOf(description);
    return Object.keys(enumerator)[index];
};
