var builder = require('botbuilder');
var inMemoryStorage = new builder.MemoryBotStorage();

// Create console connector for communicating with the Bot Framework Service
var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector, [
    function (session) {
        session.send("Welcome to Determinator. The most predictable way to determine your future...");
        session.beginDialog('rootMenu');
    },
    function (session, results) {
        session.endConversation("Until next time...peace out!");
    }
]).set('storage', inMemoryStorage);

bot.dialog('rootMenu', [
    function (session) {
        builder.Prompts.choice(session, "Choose a prediction method:", 'Flip a Coin|Enchanted Octaball|Quit');
    },
    function (session, results) {
        switch (results.response.index) {
            case 0:
                session.beginDialog('flipCoinDialog');
                break;
            case 1:
                session.beginDialog('enchantedOctaballDialog');
                break;
            default:
                session.endDialog();
                break;
        }
    },
    function (session) {
        session.replaceDialog('rootMenu');
    }
]).reloadAction('showMenu', null, {
    matches: /^(menu|back)/i
});

// Flip a coin
bot.dialog('flipCoinDialog', [
    function (session, args) {
        builder.Prompts.choice(session, "Choose heads or tails...", "heads|tails", {
            listStyle: builder.ListStyle.none
        })
    },
    function (session, results) {
        var flip = Math.random() > 0.5 ? 'heads' : 'tails';
        if (flip == results.response.entity) {
            session.endDialog("It's %s. YOU WIN!", flip);
        } else {
            session.endDialog("Sorry... It was %s. you lost :(", flip);
        }
    }
]);

// Enchanted Octaball
bot.dialog('enchantedOctaballDialog', [
    function (session, args) {
        builder.Prompts.text(session, "What's your question?");
    },
    function (session, results) {
        session.endDialog(enchantedAnswers);
    }
]);

var enchantedAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];
