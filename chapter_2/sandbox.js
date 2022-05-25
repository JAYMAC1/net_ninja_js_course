/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/**
 * Do not change this function body
 * Do your changes within the function
 */

function twoSum(nums, target) {
	const numbers = [...nums]
	const sum = numbers.forEach((n) => {
		n = n + n
	})
	console.log(numbers, target, sum)
	// your code goes here
}

twoSum([2, 4], 8)
