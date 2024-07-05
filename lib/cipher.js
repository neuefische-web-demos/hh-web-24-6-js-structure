const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

function caesarCipher13(string) {
  return string
    .split("")
    .map((character) => {
      // 💡 indexOf returns -1 if the character is not found
      const index = input.indexOf(character);
      if (index > -1) {
        return output[index];
      }

      return character;
    })
    .join("");
}

export { caesarCipher13 };
