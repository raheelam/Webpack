
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

export const isObject=(value: any): value is object =>{
  return typeof value === 'object' && value !== null;
}

export const  base64ToBlob=(base64String: string, mimeType: string): Blob=> {
  const byteCharacters = atob(base64String);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const chunk = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(chunk.length);

    for (let i = 0; i < chunk.length; i++) {
      byteNumbers[i] = chunk.charCodeAt(i);
    }

    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: mimeType });
}

export const  isToday=(date: Date): boolean=> {
  const today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}

export const roundToDecimalPlaces=(value: number, decimalPlaces: number): number =>{
  const multiplier = 10 ** decimalPlaces;
  return Math.round(value * multiplier) / multiplier;
}

export const take=<T>(array: T[], n: number): T[]=> {
  return array.slice(0, n);
}

export const  deepEqual=(obj1: any, obj2: any): boolean=> {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

export const removeDuplicatesFromArray=<T>(array: T[]): T[] =>{
  return Array.from(new Set(array));
}

export const isValidJSON=(str: string): boolean =>{
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

export const generateDateRange=(startDate: Date, endDate: Date): Date[]=> {
  const dates: Date[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export const imageToBlob=async(imageUrl: string): Promise<Blob> =>{
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error(error);
    throw new Error('Error converting image to Blob');
  }
}

export const   imageToBase64= async (imageUrl: string): Promise<string>=> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin = 'anonymous'; // Enable CORS for the image
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        reject(new Error('Failed to create canvas context'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      // Get the Base64-encoded data URL
      const base64String = canvas.toDataURL('image/png');
      resolve(base64String);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = imageUrl;
  });
}

export const  camelToKebabCase=(str: string): string=> {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export const reactStyleToCss=(styleObject): string =>{
  return Object.entries(styleObject)
    .map(([property, value]) => `${camelToKebabCase(property)}: ${value};`)
    .join('\n');
}

export const makeGetRequest=(url, headers = {})=> {
  // Using the fetch API to make a GET request
  return fetch(url, {
    method: 'GET',
    headers: new Headers(headers),
  })
    .then(response => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON in the response
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; // Re-throw the error for further handling if needed
    });
}

export const uniqueArrayValues=(array)=> {
  return Array.from(new Set(array));
}

export const isInViewport=(element)=> {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export const parseUrlParameters=(url)=> {
  const params = new URLSearchParams(new URL(url).search);
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
}

export const sortNumbers=(numbers, ascending = true)=> {
  // Use the Array.sort() method with a compare function
  numbers.sort((a, b) => (ascending ? a - b : b - a));
  return numbers;
}

export const sortObjectsByNumericProperty=(objects, property, ascending = true) =>{
  return objects.sort((a, b) => (ascending ? a[property] - b[property] : b[property] - a[property]));
}

export const  groupBy=(array, key) =>{
  return array.reduce((acc, obj) => {
    const property = obj[key];
    acc[property] = acc[property] || [];
    acc[property].push(obj);
    return acc;
  }, {});
}

export const findMaxMin=(array) =>{
  return {
    max: Math.max(...array),
    min: Math.min(...array),
  };
}

export const fetchWrapper = (url, options)=>{
  //add custom logic
  return fetch(url, options)
}
