
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

export const parseDate=(dateString: string): Date =>{
  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date string');
  }
  return parsedDate;
}

export const isDefinedAndNotNull=(value: any): boolean=> {
  return value !== undefined && value !== null;
}

export const  isEmptyObject=(obj: object): boolean=> {
  return Object.keys(obj).length === 0;
}

export function debounce(func: Function, delay: number): (...args: any[]) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function throttle(func: Function, limit: number): (...args: any[]) => void {
  let inThrottle: boolean = false;
  return (...args: any[]): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const isArray=(value: any): value is any[]=> {
  return Array.isArray(value);
}

export const isValidEmail=(email: string): boolean =>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const removeDuplicates=<T>(array: T[]): T[] =>{
  return [...new Set(array)];
}

export const objectToQueryString=(params: Record<string, string | number>): string =>{
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export const  isValidUrl=(url: string): boolean=> {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export const isWithinRange=(value: number, min: number, max: number): boolean =>{
  return value >= min && value <= max;
}

export const isAlphanumeric=(str: string): boolean =>{
  return /^[a-zA-Z0-9]+$/.test(str);
}

export const generateUniqueId=(): string =>{
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


export const millisecondsToTime=(duration: number): string=> {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor(duration / (1000 * 60 * 60));

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export const arrayToObject=<T>(array: [string, T][]): Record<string, T> =>{
  return Object.fromEntries(array);
}