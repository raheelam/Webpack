
export class StringHelper{
  
static isEmpty=(str:string)=>{
    return (str && str.trim().length>0);
}

static capitalizeFirstLetter=(str: string) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

static startsWith=(inputStr: string, prefix: string): boolean=> {
    return inputStr.startsWith(prefix);
}

static endsWith=(inputStr: string, suffix: string): boolean=> {
    return inputStr.endsWith(suffix);
}

static countSubstringOccurrences=(mainStr: string, substring: string): number=> {
    return mainStr.split(substring).length - 1;
}

static removeWhitespace=(inputStr: string): string=> {
    return inputStr.replace(/\s/g, '');
}

static lengthWithoutSpaces=(inputStr: string): number=> {
    return inputStr.replace(/\s/g, '').length;
}

static limitTextWithDelimiter=(inputText: string, limit: number, delimiter: string): string=> {
    if (inputText.length <= limit) {
        // If the text is already within the limit, no changes needed
        return inputText;
    } else {
        // Trim the text to the specified limit and add the delimiter
        const trimmedText = inputText.substring(0, limit);
        return trimmedText + delimiter;
    }
}

static replaceSubstring=(inputStr: string, oldSubstring: string, newSubstring: string): string =>{
    return inputStr.split(oldSubstring).join(newSubstring);
}

static reverseString=(inputStr: string): string=> {
    return inputStr.split('').reverse().join('');
}

static toCamelCase=(inputStr: string): string =>{
    const words = inputStr.split('_');
    return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

static makeTitleCase=(str:string) =>{
    return str
      .toLowerCase()
      .split(' ')
      .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

export const log=(message: string): void=> {
  console.log(message);
}

export const deepClone=<T>(obj: T): T =>{
  return JSON.parse(JSON.stringify(obj));
}

export const hasOwnProperty=(obj: object, prop: string): boolean=> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export const getRandomNumber=(min: number, max: number): number =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const addDaysToDate=(date: Date, days: number): Date =>{
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}