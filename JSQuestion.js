function addTwoNumUpTarget(nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const rest = target - num;
    if (rest in numIndices) {
      return [numIndices[rest], i];
    }
    numIndices[num] = i;
  }
  return "No two numbers add up to the target.";
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = addTwoNumUpTarget(nums, target);
console.log(result);
