import readlineSync from 'readline-sync';
import chalk from 'chalk';

const propriedades = [];

console.log(chalk.yellow('Digite uma propriedade de CSS e pressione ENTER para adicionar outra. Quando terminar digite SAIR'));
readlineSync.promptLoop(function (input) {
    console.log(chalk.blue('-- Você adicionou a propriedade "' + input + '"a sua lista!'));
    propriedades.push(input)
    return input.toLocaleLowerCase() == "sair"
});
const index = propriedades.indexOf('sair');
if (index > -1) {
    propriedades.splice(index, 1);
}
propriedades.sort();
console.log(chalk.yellow('Suas propriedades CSS são:'));
console.log(chalk.green(propriedades.join("\n")));