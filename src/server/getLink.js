import fs from 'fs'

function getLink() {
    const result = fs.readdirSync('./public/css').filter(file => {
        return file.endsWith('.css');
    }).map(file => {
        return `<link rel="stylesheet" href="/css/${file}" />`;
    });
    return result.join("\n");
}

export default getLink;