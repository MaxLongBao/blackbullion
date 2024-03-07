import { compareBy } from './sort';
import { capitalizeFirstLetter } from './capitalize';

describe('compareBy function', () => {
 it('should sort strings in ascending order', () => {
    const data = [{ name: 'Alice' }, { name: 'Bob' }];
    const sortedData = data.sort(compareBy('name'));
    expect(sortedData[0].name).toBe('Alice');
    expect(sortedData[1].name).toBe('Bob');
 });

 it('should sort strings in descending order', () => {
    const data = [{ name: 'Alice' }, { name: 'Bob' }];
    const sortedData = data.sort(compareBy('-name'));
    expect(sortedData[0].name).toBe('Bob');
    expect(sortedData[1].name).toBe('Alice');
 });

 it('should sort numbers in ascending order', () => {
    const data = [{ value: 1 }, { value: 2 }];
    const sortedData = data.sort(compareBy('value'));
    expect(sortedData[0].value).toBe(1);
    expect(sortedData[1].value).toBe(2);
 });

 it('should sort numbers in descending order', () => {
    const data = [{ value: 1 }, { value: 2 }];
    const sortedData = data.sort(compareBy('-value'));
    expect(sortedData[0].value).toBe(2);
    expect(sortedData[1].value).toBe(1);
 });

 it('should sort strings with numbers in them in ascending order', () => {
    const data = [{ duration: '3 days' }, { duration: '1 day' }];
    const sortedData = data.sort(compareBy('duration'));
    expect(sortedData[0].duration).toBe('1 day');
    expect(sortedData[1].duration).toBe('3 days');
 });

 it('should sort strings with numbers in them in descending order', () => {
    const data = [{ duration: '3 days' }, { duration: '1 day' }];
    const sortedData = data.sort(compareBy('-duration'));
    expect(sortedData[0].duration).toBe('3 days');
    expect(sortedData[1].duration).toBe('1 day');
 });
});

describe('capitalizeFirstLetter function', () => {
 it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
 });

 it('should return an empty string if the input is an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
 });

 it('should return the same string if the input is a single character', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
 });
});
