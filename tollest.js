/* function maxInArry(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 873];
const tollest = maxInArry(heights);
console.log('Tollest person is : ', tollest); */

// lowest number
function maxInArry(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 873];
const tollest = maxInArry(heights);
console.log('lowest person is : ', tollest);