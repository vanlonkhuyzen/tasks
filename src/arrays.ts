/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 2) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((n: number): number => n * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((n: string): number => {
        const numInt = parseInt(n);
        if (isNaN(numInt)) {
            return 0;
        } else {
            return numInt;
        }
    });
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const integers = amounts.map((n: string): number => {
        if (n.includes("$")) {
            n = n.slice(1);
        }
        const numInt = parseInt(n);
        if (isNaN(numInt)) {
            return 0;
        } else {
            return numInt;
        }
    });
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const questions = messages.filter((m: string): boolean => !m.endsWith("?"));
    const shout = questions.map((m: string): string =>
        m.endsWith("!") ? m.toUpperCase() : m,
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((w: string) => w.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colored = colors.every(
        (c: string): boolean => c === "red" || c === "blue" || c === "green",
    );
    return colored;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((total: number, add: number) => total + add, 0);
    const equation = addends.map((n: number): string => n.toString()).join("+");

    return sum.toString() + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negIndex = values.findIndex((v: number): boolean => v < 0);
    if (negIndex === -1) {
        const sum = values.reduce(
            (total: number, add: number) => total + add,
            0,
        );
        return [...values, sum];
    } else {
        const smallSum = values
            .slice(0, negIndex)
            .reduce((v: number, add: number) => v + add, 0);
        return [
            ...values.slice(0, negIndex + 1),
            smallSum,
            ...values.slice(negIndex + 1),
        ];
    }
}
