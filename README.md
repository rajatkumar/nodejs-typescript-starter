# Project Overview

This project is a template to get started with Node.js and TypeScript projects in the quickest form possible. It is designed to help developers set up a basic Node.js application with TypeScript, allowing them to focus on writing code without worrying about the initial setup.


## Project Structure

The project structure is as follows:
```
.
├── src
│ └── index.ts
├── package.json
├── tsconfig.json
└── .env
```

## Features

- **TypeScript Support**: Write your application using TypeScript, a statically typed superset of JavaScript.
- **ts-node Integration**: Run TypeScript files directly without needing to compile them first.
- **Environment Variable Management**: Easily manage environment variables using a `.env` file.
- **Live Reload**: Make a change to `src/index.ts` or `.env` and the server will automatically restart and show your changes in the console

## Scripts

The following scripts are available in the `package.json` file:
- **build**: Compiles the TypeScript files to JavaScript.
- **dev**: Runs the application in development mode with `ts-node` and watches for changes.
- **test**: Placeholder for running tests.

## TypeScript Configuration

The `tsconfig.json` file is configured to support modern JavaScript features and strict type checking:

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Set Up Environment Variables**: Create a `.env` file in the root directory and define your environment variables.
3. **Run the Application**: Use `npm run dev` to start the application in development mode.

## License

This project is licensed under the ISC License.

Copyright (c) 2024 year, Rajat Kumar

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC
