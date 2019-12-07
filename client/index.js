const sums = (nums, k) => {
  var first = 0;
  var last = nums.length - 1;
  while (first < last) {
    var s = nums[first] + nums[last];
    if (s == k) {
      return true;
    } else {
      if (s < sum) first++;
      else last--;
    }
  }
};

const k = 17;
const nums = [10, 15, 3, 7];

const exit = sums(nums, k);

console.log(exit);

alert(exit);
