export const pairServices = (services) => {
  const pairs = [];
  for (let i = 0; i < services.length; i += 2) {
    pairs.push([services[i], services[i + 1] || ""]);
  }
  return pairs;
};

export function splitString(input) {
  const firstSpaceIndex = input.indexOf(" ");

  if (firstSpaceIndex === -1) {
    return [input, ""];
  }

  const firstWord = input.substring(0, firstSpaceIndex);
  const restOfString = input.substring(firstSpaceIndex + 1);

  return [firstWord, restOfString];
}
