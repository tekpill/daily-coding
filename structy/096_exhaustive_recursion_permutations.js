const permutations = (items) => {
  if (items.length === 0) return [[]];

  const first = items[0];
  const permswithout = permutations(items.slice(1));
  const allperms = [];
  for (let perm of permswithout) {
    for (let i = 0; i <= perm.length; i++) {
      allperms.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return allperms;
};

console.log(permutations(["a", "b", "c"]));
