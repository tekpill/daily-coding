const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2.0);
  const leftSide = mergeSort(nums.slice(0, mid));
  const rightSide = mergeSort(nums.slice(mid));

  return merge(leftSide, rightSide);
};

const merge = (nums1, nums2) => {
  nums1.reverse();
  nums2.reverse();
  const final = [];

  while (nums1.length > 0 && nums2.length) {
    if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
      final.push(nums1.pop());
    } else {
      final.push(nums2.pop());
    }
  }

  final.push(...nums1.reverse());
  final.push(...nums2.reverse());

  return final;
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers));
