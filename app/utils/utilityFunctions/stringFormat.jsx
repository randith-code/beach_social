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

export function splitStringIntoParts(str, numWords = 1) {
  str = str.trim();

  const words = str.split(" ");

  if (words.length <= numWords) {
    return ["", str];
  }

  const lastWords = words.slice(-numWords).join(" ").trim();

  const firstPart = words.slice(0, -numWords).join(" ").trim();

  return [firstPart, lastWords];
}
