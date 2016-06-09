
//MrBear.ai
//Company search dog


//Intent with a 50% confidence for Wit.ai



var controller = Botkit.slackbot({ debug: false })

controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  witbot.process(message.text, bot, message)
})

// Salutations

witbot.hears('hello', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Hello to you as well!')
})

witbot.hears('how are you', 0.5, function (bot, message, outcome) {
	bot.reply(message, 'Good, thank you')
})

witbot.hears('hi', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'hi yourself')
})

witbot.hears('goodbye', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Goodbye, have a great day')
})

witbot.hears('see ya', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Goodbye')
})

witbot.hears('thank you goodbye', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'No Thank you!  Have a great day!')
})

witbot.hears('bye', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Goodbye')
})

witbot.hears('See you later', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Goodbye')
})

witbot.hears('It was nice talking to you', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Thank you')
})

witbot.hears('Take it easy', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Take care')
})

witbot.hears('Peace out', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'I am out of here')
})

witbot.hears('I gotta roll', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Go get them')
})

witbot.hears('I gotta head out', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Go get them tiger')
})

witbot.hears('I gotta bounce', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Peace out dude!')
})

witbot.hears('hey', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'hello')
})

witbot.hears('Good Morning', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Good Morning, how can I help you?')
})

witbot.hears('Good Afternoon' ,0.5, function(bot, message, outcome) {
	bot.reply(message, 'Good Afternoon, how can I help you?')
})

witbot.hears('Good Evening', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Good Evening, how can I help you?')
})

witbot.hears('How is it going?', 0.5, function(bot, message, outcome){
	bot.reply(message, 'Good, how are you doing?')
})

witbot.hears('How are you doing?', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Good, how are doing?')
})

witbot.hears('Whats up?', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'The sky')
})

witbot.hears('Whats new?', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'My brand new shoes')
})

witbot.hears('How are things?', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Things are good')
})

witbot.hears('Its nice to meet you', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Its nice to meet you as well, what can I do for you today?')
})

witbot.hears('Pleased to meet you', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Its nice to meet you as well, what can I do for you today?')
})

witbot.hears('Yo', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'That is my jam')
})

witbot.hears('Howdy' 0.5, function(bot, message, outcome) {
	bot.reply(message, 'How do you do?')
})

witbot.hears('Sup', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Whatzzup???')
})

witbot.hears('Hiya!', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Hey you, how is it going?')
})



//Greeting responses

witbot.hears('good', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'I am glad you are well')
})

witbot.hears('bad', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'I am sorry to hear that')
})

witbot.hears('okay', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'I hope your day gets better')
})

witbot.hears('horrible', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Oh dear, I hope that I can help with some of your problems')
})

withbot.hears('amazing', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Sounds great I am kind of jealous')
})

witbot.hears('fantastic', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'keep up the good work!')
})

witbot.hears('super', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'up, up, and away we go')
})

witbot.hears('I am fine', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Good to hear')
})

witbot.hears('Very well', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Excellent!')
})

witbot.hears("Well", 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Great to hear')
})

witbot.hears('I am not so well', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Sorry to hear that can I help with something?')
})

witbot.hears('Not very good', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Sorry to hear that can I help with something?')
})

witbot.hears('Fair', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What can I do for you today?')
})

witbot.hears('Fine', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What can I do for you today?')
})

witbot.hears('Wonderful', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Glad to hear')
})

witbot.hears('Pretty good', 0.5, function(bot, message, outcome) {
	bot.reply(message,'Glad you are good')
})

witbot.hears('Pretty bad', 0.5, function (bot, message, outcome) {
	bot.reply(message, 'What can I do for you today?')
})

witbot.hears('Angry', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'I am sorry to hear lets see if I can help')
})

// account inquires

witbot.hears('Account' 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What can I help you with?')
})

witbot.hears('Create Account', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'If you want to create an account, tell me to create what type of account')
})

witbot.hears('Create User Account', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Creating a new User Account')
})

witbot.hears('Create Admin Account' 0.5, function(bot, message, outcome) {
	bot.reply(message, ' Only Anish can create Admin Accounts')
})

witbot.hears('Access Account', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'To Access an Account please type CPF and Account number and tell me fetch at the end')
})

witbot.hears('CPF', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'fetching CPF #')
})

witbot.hears('fetch CPF', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'fetching CPF #')
})

witbot.hears('get CPF', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'fetching CPF #')
})


// Messaging External and Internal

witbot.hears('Send a message', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Would you like to send a internal or external message?')
})

witbot.hears('I need to send a message' 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What type of message would you like to send out?')
})

witbot.hears('I need to send out emails', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Is this an internal email or external?')
})

witbot.hears('I need to send text messages', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'Who will recieve this text message?')
})

witbot.hears('I need to send an internal message', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What would you like your message to say?')
})

witbot.hears('I need to send an external message', 0.5, function(bot, message, outcome) {
	bot.reply(message, 'What would you like your message to say?')
})

witbot.hears('')








// fetching command


fetch('/some/url').then(function(response) {
	
}).catch(function(err) {
	// Error :(
});

// Chaining for more "advanced" handling
fetch('/some/url').then(function(response) {
	return //...
}).then(function(returnedValue) {
	// ...
}).catch(function(err) {
	// Error :(
});

// Request

var request = new Request('/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
});

// Now use it!
fetch(request).then(function() { /* handle response */ });

// fetch request

fetch('/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
}).then(function() { /* handle response */ });

// fetching JSON file

fetch('https://centraldatabase.json').then(function(response) { 
	// Convert to JSON
	return response.json();
}).then(function(j) {
	// Yay, `j` is a JavaScript object
	console.log(j); 
});

// Posting JSON to the server

fetch('/submit-json', {
	method: 'post',
	body: JSON.stringify({
		email: document.getElementById('email').value
		answer: document.getElementById('answer').value
		cpf: document.getElementById('cpf').value
		account: document.getElementById('account').value
	})
});





























