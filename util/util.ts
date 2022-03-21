// If input is null or undefined, return an empty array so that it stays "falsy", otherwise make a regular array
export const asArray = (input: any): Array<any> => input == null ? [] : (Array.isArray(input) ? input : [input]);
