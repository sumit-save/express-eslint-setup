# Eslint Configuration For NodeJs Application 

## What is Eslint ?
### Eslint is the NPM Package Or Javascript Library to Findout and Fix Syntax errors in the Code.

## First Create New NPM Project
1. Open Terminal and Type `npm init -y` or `npm init`.
2. Create Project Structure and Write Code.


## How we can use Eslint ?
1. Using Integrated Eslint Visual Code Extension.
- Install Eslint Visual Code Extension and Enable.
- Eslint we automatically shows the Syntax errors.
- To Fix the Syntax errors, type `ctrl + shift + p`, search for  `ESLint:Fix all auto-fixiable problem` and hit `enter`
2. Using NodeJs Script. 
- Type `npm init @eslint/config` to configure Eslint in Application.
- How would you like to use ESLint?
> To check syntax, find problems and enforce code style
- What type of modules does your project use?
> CommonJS (require/exports)
- Which framework does your project use?
> CommonJS (require/exports)
- Which framework does your project use?
> None of these
- Does your project use TypeScript?
> No
- Where does your code run?
> Node
- How would you like to define a style for your project?
> Use a popular style guide
- Which style guide do you want to follow?
> standard
- What format do you want your config file to be in? 
> JSON
- Would you like to install them now?
> Yes
- Which package manager do you want to use? ...
>npm

- Then Eslint Create `.eslintrc.json` file and add the following rules.
```
"rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]    
}
```

- Then we can fix errors by writing script inside package.json `"lint:fix": "eslint --fix ./*.js"`

- To fix errors open terminal and type command `npm run lint:fix`


 For Reference Article https://dev.to/drsimplegraffiti/eslint-configuration-for-node-project-275l