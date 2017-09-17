# gulp
simple template for quick site creation via gulp


## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#how-to-install)
3. [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## How to Install

First of all you need to download repo to your local machine:
```sh
$ git clone https://github.com/pustovitDmytro/react <my-project-name>
$ cd <my-project-name>
```
This will create your own project based on [`react-boilerplate`](https://github.com/pustovitDmytro/react).

After, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/), but `npm install` will also suffice.
  ```sh
  $ yarn install
  ```
## Running the Project

To assemble project launch next command:
```sh
$ yarn build
```
After that project will be placed in the `build`directory.

If you want use watch mode, it is possible with command:
```sh
yarn start:watch
```
Also you can clean `build` directory by using next command:

I recomend using `watch` mode with `lr-http-server` by running this command:
```
lr-http-server [-p <port>] [-d <dir>] [-l livereloadport] [-w < watchPaths || false >] [-b]
```
but also you can use any other variant of starting http-server, for example using python:
```
python -m http.server 8000
```
or node static http-server:
```
http-server -p 8000 
```

## Project Structure
```
.
├── build                    # All build-related code
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── style                # All styles, here .scss files
│   │   ├── general.scss     # styles for all components, css-reset should be here
│   │   ├── main.scss        # entry file for styles assembling
│   │   └── variables.scss   # scss variables (colors, margins, ...)
│   └── template             # html templates
│       ├── footer.html      
│       └── header.html
├── gulpfile.js              # gulp config
└── package.json
```

## Related Projects

There are some more boilerplates that I'm working on:
1. [react](https://github.com/pustovitDmytro/react) - boilerplate for making gracefull react apps
2. [web-extension](https://github.com/pustovitDmytro/web-extension) - boilerplate to making web-extensions (firefox and chrome simultaneously)
3. [parser](https://github.com/pustovitDmytro/parser) - tiny universal Python-based asynchronous sites scrapper

## Examples Of Use
There are some examples of implementation:
* [eleken-catalog](https://github.com/pustovitDmytro/eleken-catalog) - simple one page-landing, test assignment for entering eleken company
* [metrovka](https://github.com/pustovitDmytro/metrovka) - second homework on dataroot training

## License

MIT
