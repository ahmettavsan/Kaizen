// const characterClusterASCII = characterCluster
//   .split("")
//   .map((c) => c.charCodeAt());

const privateKEY = "ALG2024";

const characterCluster = "ACDEFGHKLMNPRTXYZ234579";

const characterClusterASCII = [
  65, 67, 68, 69, 70, 71, 72, 75, 76, 77, 78, 80, 82, 84, 88, 89, 90, 50, 51,
  52, 53, 55, 57,
];

const generateCODE = () => {
  let maxValue = 0;
  let minValue = Infinity;

  let code = "";
  const randomPatter = Math.floor(Math.random() * 2);

  while (code.length !== 8) {
    const randomNumber = Math.floor(Math.random() * 23);
    const elementAscii = characterClusterASCII[randomNumber];
    const element = characterCluster[randomNumber];

    if (randomPatter == 0) {
      if (
        Math.max(maxValue, elementAscii) === elementAscii &&
        code.length < 4
      ) {
        maxValue = elementAscii;
        code += element;
      }
      if (Math.min(maxValue, elementAscii) === elementAscii) {
        code += element;
      }
    }
    if (randomPatter == 1) {
      console.log(minValue, elementAscii, 22222);
      console.log(Math.min(minValue, elementAscii));
      if (
        Math.min(minValue, elementAscii) === elementAscii &&
        code.length < 4
      ) {
        minValue = elementAscii;
        code += element;
      }
      if (Math.max(maxValue, elementAscii) === elementAscii) {
        console.log(maxValue, elementAscii);
        maxValue = elementAscii;
        code += element;
      }
    }
  }

  return code;
};

// let i = 0;
// let k = [];
// let p = 0;
// while (i < 1000000) {
//   const res = generateCODE();
//   //   console.log(k);
//   if (!k.includes(res)) {
//     k.push(res);
//   } else {
//     p++;
//     console.log("*********", p, i);
//   }
//   i++;
// }

// const generateBinaryFromCode = (code) => {
//   return code.split("").map((c) => c.charCodeAt().toString(2));
// };

console.log(generateCODE());
// console.log(generateBinaryFromCode(generateCODE()));

// const binaryCode = generateBinaryFromCode(generateCODE());
