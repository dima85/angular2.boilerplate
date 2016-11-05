# Angular2 boilerplate project

## For frontend development following stack has been used:
- [ES6 + typescript](https://www.typescriptlang.org/) as language and ES6 transpiler
- [Angular2](https://angular.io/) as rendering engine and MVC framework
- [SASS](http://sass-lang.com/) as css preprocessor
- [Webpack](https://github.com/webpack/webpack) as module loader
- [webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html) as development server
- [TSLint](https://github.com/palantir/tslint) - as static code analyzer. Custom rule definitions has been imported:
  - [Codelyzer](https://github.com/mgechev/codelyzer) - angular2 tslint rules
  - [vrsource ts rules](https://github.com/vrsource/vrsource-tslint-rules) - various rules for tslint
  - [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) - ES6 rules implemented for Typescript(currently not used in project)
  - [Microsoft rules for TSLint](https://github.com/Microsoft/tslint-microsoft-contrib) - rules defined by MS
  - [Sublime tslinter](https://github.com/lavrton/SublimeLinter-contrib-tslint) - if you are using sublime, you can use linter for visual feedback

### To get started
- clone project
- install npm packages ```npm install```
- install typescript typing ```npm run install-types```

### To run development server
- run ```npm run dev```
- open ```http://localhost:8080``` url in browser

### To build bandles
- run ```npm run build```
- find bundled files under dist folder

### To run tests
- run ```npm test```

### To run tests in watch mode. Everytime you save file, it triggers re-run of all tests
- run ```npm run tdd```

### To generate changelog from git commits(please follow [angular commit message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md))
- run ```npm run changelog```
