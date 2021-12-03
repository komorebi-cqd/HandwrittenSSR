import fs from 'fs';

function getScript() {
    const result = fs.readdirSync('./public/js').filter(file => {
        return file.endsWith('.js');
    }).map(file => {
        return `<script src="./js/${file}"></script>`;
    });
    return result.join("\n");
}

export default getScript;


