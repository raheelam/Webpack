
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

static makeTitleCase=(str:string) =>{
    return str
      .toLowerCase()
      .split(' ')
      .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
