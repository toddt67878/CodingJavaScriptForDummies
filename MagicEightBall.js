let userName = 'Todd Traylor';
userName === 'Todd Traylor' ? console.log('Hello Todd Traylor!') : console.log('Hello Unnamed Friend!');
let userQuestion = 'Will I succeed?';
console.log(`The ${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;
switch (eightBall) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'Reply hazy try again';
        break;
    case 2:
        eightBall = 'Cannot predict now';
        break;
    case 3:
        eightBall = 'Do not count on it';
        break;
    case 4:
        eightBall = 'My sources say no';
        break;
    case 5:
        eightBall = 'It is decidedly so';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;

}
console.log(`The eight ball answered: ${eightBall}`);