# ENSE 470 Project
[![Build Status](https://travis-ci.org//tpetrychyn/ENSE470-Project.svg?branch=master)](https://travis-ci.org/tpetrychyn/ENSE470-Project)

> A software approval management system.

## Table of Contents

- [Test Accounts](#test-accounts)
- [Installation](#installation)
- [Run](#run)
- [Contributing](#contributing)

## Test Accounts

User: user@test.com : test
Approvers: {firstName}{lastName_firstLetter}@hell.com : test
Analyst: analyst@test.com

## Installation

Install [NodeJs](https://nodejs.org/en/download/) or Yarn

Then install npm packages
```
$ npm install
```

## Run

```
$ npm start
```
Then visit `http://localhost:3000` in your browser

## Contributing

New data models go in the `models` folder using Sequelize syntax

Assets go in the `public` folder

Endpoints are defined in the `routes` folder

Views are layed out in the `views` folder
