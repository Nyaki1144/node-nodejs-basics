
export const parseArgs = () => {
    process.argv.forEach((el, i, arr) => {
        el.match(/^--/gm) ? console.log(`${el} is ${arr[i+1]}`): null;
    }); 
};