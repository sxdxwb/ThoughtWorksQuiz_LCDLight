module.exports = function main(strNum) {
    var lights = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.',
        '|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|',
        '|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|]'];
    for(let i = 0; i < strNum.length; i++){
        console.log(lights);
    }

    return 'Hello World!';
};