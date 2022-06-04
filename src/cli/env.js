export const parseEnv = () => {
    Object.entries(process.env).forEach(el => {
        if(el[0].match(/^RSS_/gm)){
            console.log(`${el[0]}=${el[1]}`)
        }
    })
};