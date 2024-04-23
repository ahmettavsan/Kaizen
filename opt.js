const promotionId = "ALG2024";
const promotionIdSekiz = [1, 4, 7, 2, 0, 2, 4];

const characterCluster = "ACDEFGHKLMNPRTXYZ234579";
const sekizmod = [
  1, 3, 4, 5, 6, 7, 0, 3, 4, 5, 6, 0, 2, 4, 0, 1, 2, 2, 3, 4, 5, 7, 1,
];

const characterClusterASCII = [
  65, 67, 68, 69, 70, 71, 72, 75, 76, 77, 78, 80, 82, 84, 88, 89, 90, 50, 51,
  52, 53, 55, 57,
];

const generateCODE = () => {
  let code = "";
  let index = 0;
  while (code.length !== 8) {
    const randomNumber = Math.floor(Math.random() * 23);
    const el = sekizmod[randomNumber];

    if (promotionIdSekiz[index] === el || index === 7) {
      code += characterCluster[randomNumber];
      index++;
    }
  }
  return code;
};

const checkPromotionCode = (code) => {
  const asciiNumberModSekiz = code.split("").map((char) => {
    return char.charCodeAt() % 8;
  });
  for (let index = 0; index < 7; index++) {
    const element = promotionIdSekiz[index];
    const elCode = asciiNumberModSekiz[index];
    if (element != elCode) {
      return false;
    }
    if (index == 6) {
      return true;
    }
  }
};
