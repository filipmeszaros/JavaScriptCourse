/**
 * While loop
 * Loops until a condition is met
 */
console.log('WHILE loop:');
let i = 1;

while (i <= 5) {
    console.log('i == ' + i);
    i++;
}


/**
 * Do-While loop
 * Loops until a condition is met. Loops at least once, because it checks for the condition after a loop
 */
console.log('DO-WHILE loop:');
let j = 1;

do {
    console.log('j == ' + j);
    j++;
} while (j < 0);


/**
 * For loop
 * Loops until a condition is met, and you can declare and reassign variable directly within for loop
 */
console.log('FOR loop:');

for (let k = 1; k <= 3; k++) {
    console.log('k == ' + k);
}

/**
 * Break and continue
 * Break is used to quit the loop
 * Continue is used to skip to the next iteration of a loop
 */
console.log('Break and Continue');
let l = 0;

while (l <= 50) {
    l++;
    if (l % 2 === 1) {
        // Let's skip odd numbers, like 1, 3, 5, ...
        continue;
    }

    // Let's end the loop when the iteration number is 14
    if (l === 14) {
        console.log('Iteration 14 detected - breaking loop');
        break;
    }

    console.log('Successfully finished iteration: ' + l);
}