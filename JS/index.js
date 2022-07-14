import readlineSync from 'readline-sync';
import chalk from 'chalk';

const propriedades = [];

console.log(chalk.yellow('Digite as propriedades de CSS que mais usa. Quando terminar digite SAIR'));
readlineSync.promptLoop(function (input) {
    propriedades.push(input)
    return input === "sair"
});
const index = propriedades.indexOf('sair')
if (index > -1) {
    propriedades.splice(index, 1);
}
propriedades.sort();
console.log(chalk.yellow('Suas propriedades são:'));
console.log(chalk.green(propriedades.join("\n")));