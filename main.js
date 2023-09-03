import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let userName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const lbgtqTitle = chalkAnimation.rainbow(
    'is namo gay? \n'
    );
    await sleep();
    lbgtqTitle.stop();
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();
  if (isCorrect) {
    spinner.success({ text: `Nice work ${userName}. Thats a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 you loser ${userName}` });
    process.exit(1);
  }
}

async function askUser() {
  const answers = await inquirer.prompt({
    name: 'user_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'User';
    },
  });

  userName = answers.user_name;
}

function winner() {
  chalkAnimation.rainbow('your too too good');
  process.exit(0);
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'is namo gay?\n',
    choices: [
      'yes',
      'no',
      'he trans',
      'hell yeah'
    ],
  });

  return handleAnswer(answers.question_1 === 'he trans');
}

console.clear();
await welcome();
await askUser();
await question1();
winner();
