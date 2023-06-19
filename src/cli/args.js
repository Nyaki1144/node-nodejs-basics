export const parseArgs = () => {
  const data = process.argv;
  const regexp = /^--prop/gm;
  let str = "";

  [...data].splice(2, data.length - 1).forEach((el, i, arr) => {
    if (el.match(regexp)) {
      str += `${el.slice(2, el.length)} is ${arr[i + 1]}, `;
    }
  });
  console.log(str.slice(0, str.length - 2));
};

parseArgs();
