const twoSum = (numbers, target) => {
  if (numbers.length < 2) return [];
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = number[i];
    const numToFind = target - currentNum;
    if (seen[numToFind] !== undefined) return [seen[numToFind], i];
  }
  return [];
};
