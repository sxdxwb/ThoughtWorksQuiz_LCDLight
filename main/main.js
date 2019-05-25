module.exports = function main(strNum) {
    var lights = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.',
        '|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|',
        '|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];
    var result = '';
    for(let i = 0; (i+10) <= lights.length; i += 10){
        for(let j = 0; j < strNum.length; j++){
            result += lights[parseInt(strNum.charAt(j)) + i];
            if(j < strNum.length-1){
                result += ' ';
            }
        }
        result += '\n';
    }
    return result;
};