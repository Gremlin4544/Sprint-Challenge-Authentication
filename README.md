# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add your _Team Lead_ as collaborator on Github.
- [X] Clone your forked version of the Repository.
- [X] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [X] Implement the project on this Branch, committing changes regularly.
- [X] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.



- [X] What is the purpose of using _sessions_?

Sessions provide a way to keep a user authenticated so that if they navigate to different pages of a website they do not have to re-enter their credentials on every new request that the client makes to the server. 

HTTP protocol is stateless, with no memory across requests so if you are not using sessions, changing pages causes the server to lose any data it had about the client, such as whether the client is logged in or not.

- [X] What does bcrypt do to help us store passwords in a secure manner.

bcrypt uses cryptographic hashing to salt (create random data different for each user), the passwords helps protect against rainbow table attacks & to help us store passwords in a more secure manner other than plain text.

Without a salt, that user may use a password that could have the same hash in different databases, which would make it easier for an attacker to use a rainbow table to figure out the password.

- [X] What does bcrypt do to slow down attackers?

It salts the passwords causing it to take longer to to attack and this also makes using rainbow tables pointless. 

A hacker would have to try a brute-force attack on each password individually (in which an attacker first tries common passwords and dictionaries and then moves on to trying every possible combination of letters, numbers and symbols until the correct value is discovered). 

Also, bcrypt is designed to run repeated iterations of the key derivation function to slow things down, such as 2 to the 12th power iterations when the cost is set to 12, which helps to make the database more resistant to brute-force search attacks. An attacker can’t make as many attempts to crack a password as he/she would if bcrypt were faster.

- [X] What are the three parts of the JSON Web Token?

1. Header: It is an encoded JSON object. The object typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC, SHA256 or RSA.
2. Payload: It contains the claims, which come in 3 types: registered, public, and private, and contain data. Also it's encoded.
3. (Verify) Signature: Made with the encoded header, the encoded payload, a secret, and the algorithm specified in the header. It verifies that the data wasn’t modified along the way.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
