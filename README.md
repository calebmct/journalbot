# :memo: JournalBot
## Write some fake news.
&nbsp;  
### What is JournalBot?
JournalBot is a barebones [Node](https://nodejs.org) app which creates some ML text in response to user input.  I slapped this sandbox together to play around with [DeepAI's API](https://deepai.org/apis).  There are currently two functions:
1. JournalBot -- The original.  Takes a headline and generates a news story.
1. SummaryBot -- Takes long-form text as input and picks out the key ingredients (headline-ification, if you will)
&nbsp;  
### Dependencies
- [Node.js & npm](https://nodejs.org)
- [DeepAI API Key](https://deepai.org/)
&nbsp;  
### Setup
- Install Node.js
- Create an account on DeepAI's website and make note of your API Key
- Clone this repo
- Create a copy of `config.sample.json` and name it `config.json`
- Add your API Key into `config.json`, replacing the `get-your-own` text with your API key
- Run `npm install`
&nbsp;  
### Running the App
- `cd` into the repo directory
- Run `npm run start`
- The app will spin up a webserver which you can access in a browser at `localhost:3000`

`localhost:3000` will load JournalBot
`localhost:3000/summarize` will load SummaryBot
&nbsp;  
### Contributing
Since this is a personal sandbox, I'm not really looking for contributors.  Feel free to fork this repository for your own purposes, though!
&nbsp;  
###### Disclaimer: The headline is a joke. Fake news is bad, please don't use this code for malicious purposes, as unrealistic as that may be.
