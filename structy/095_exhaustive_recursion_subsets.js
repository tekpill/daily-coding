const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const firstElement = elements[0];
  const subsetsWithoutFirst = subsets(elements.slice(1));
  const subsetsWithFirst = [];
  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([firstElement, ...sub]);
  }

  return [...subsetsWithoutFirst, ...subsetsWithFirst];
};

console.log(subsets(["a", "b", "c"]));
