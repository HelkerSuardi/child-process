# Child Process

An api for testing child process blocking the event loop

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [How to test?](#how-to-test)

## Requirements

Before running this project, make sure you have the following installed:

- [NodeJs](https://nodejs.org)

## Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/HelkerSuardi/child-process.git
   ```
   or

   ```
   git clone git@github.com:HelkerSuardi/child-process.git
   ```

2. Change into the project directory:

   ```
   cd child-process
   ```

3. Install all packages

   ```
   npm install
   ```
    or
   ```
   yarn
   ```
## Usage
Run the API:
```
npm run dev
```
or
```
yarn run dev
```
## How to test?
To test the API, we will call a route passing a large number as its parameter. This number will determine the total number of loops that a "for" loop will iterate through, thereby causing the Node.js event loop to become blocked.

To block the event loop, we will make a GET request to the route "/blocking-route/:totalLoops," where ":totalLoops" represents the number of loops the "for" loop will execute (I recommend passing 1100000 for a noticeable delay). After that, call the route again with a small number, such as 1. You will notice that Node.js won't provide an immediate response because it's still processing the first request.

To achieve non-blocking behavior, we will call the route "/no-blocking-route/:totalLoops" while also passing a large number to attempt to block the Node.js event loop. However, in this route, we will be instantiating a child process, which will not block the main event loop. To confirm this, simply call the route again with a small number, like 1, and you will see that Node.js responds instantly.
