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
	const result = nums[0] + nums[1] === target
	// const sum = numbers.forEach((n) => {
	// 	n = n + n
	// })
	console.log(numbers, target, result)
	// your code goes here
}

twoSum([3, 5], 8)
