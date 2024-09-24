function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

function displayArray(array) {
    const container = document.getElementById('array-container');
    container.innerHTML = '';
    array.forEach(value => {
        const number = document.createElement('div');
        number.style.margin = '0 5px';
        number.textContent = value;
        container.appendChild(number);
    });
}

function bubbleSort(array) {
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
        if (i < array.length) {
            if (j < array.length - i - 1) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    displayArray(array);
                }
                j++;
            } else {
                j = 0;
                i++;
            }
        } else {
            clearInterval(interval);
        }
    }, 100);
}

const array = generateRandomArray(20);
displayArray(array);
bubbleSort(array);
