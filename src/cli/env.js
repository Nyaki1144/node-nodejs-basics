export const parseEnv = () => {
  const data = Object.entries(process.env);
  const regexp = /^RSS_/gm;
  let str = "";
  data.forEach((el) => {
    if (el[0].match(regexp)) {
      str += `${el[0]}=${el[1]}; `;
    }
  });

  console.log(str.slice(0, str.length - 2));
};

parseEnv();
//env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
