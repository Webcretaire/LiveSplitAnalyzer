export const asArray = (input: any): Array<any> => input == null ? [] : (Array.isArray(input) ? input : [input]);
