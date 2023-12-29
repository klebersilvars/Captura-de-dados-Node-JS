import inquirer from "inquirer"; // fazer a lógica para leitura dos dados
import chalk from "chalk"; //fazer a lógica da visualização no console.log

inquirer.prompt([
    {
        name: 'p1',
        message: 'Digite seu nome'
    },
    {
        name: 'p2',
        message: 'Qual sua idade?'
    }
])

.then((res)=> {
    let nome = res.p1
    let idade = Number(res.p2)

    if(idade == 1) {
        console.log(chalk.bgYellow.black(`Meu nome é ${nome} e tenho ${idade} ano de idade` ) )
    }else if (idade > 1) {
        console.log(chalk.bgYellow.black(`Meu nome é ${nome} e tenho ${idade} anos de idade` ) )
    }
})
.catch((error)=> {
    console.log(error)
})
