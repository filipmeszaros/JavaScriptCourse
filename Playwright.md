# Playwright UI automation
- Playwright enables reliable modern end-to-end testing with auto-wait functionality
- Works on all major web browsers
- Works on any OS
- Works on many programming languages: Java, Javascript, Typescript, Python, C#
- Has native mobile emulation
- Build in features: screenshot taking, flaky-test retry, test video recording, logging mechanism, API testing libraries, step-by-step debugger, etc.
- Browser context feature: you can export the state of a browser and import it to any other browser
- Traces feature: allows you to trace your test. See screenshot of before/after each action, etc.
- Ability to generate code by recording what you do from the UI

### Installation
1. Download and install [NodeJS](https://nodejs.org/en/download)
2. Create a new NodeJS Playwright project with all dependencies with `npm init playwright`


### Folder/file structure
* `node_modules` - folder with all installed dependencies for NodeJS
* `tests` - folder with tests
    * each test has an extension *.spec.js*.
    * *example.spec.js* is an example test directly created by Plawright 
* `tests-examples` - folder with test examples 
    * *demo-todo-app.spec.js* is an example test containing all methods directly created by Playwright
* `playwright-config.js` - file with Playwright configuration (test directories, browsers, etc.)


### Asynchronous vs. Synchronous
The benefit of JavaScript is that it offers the best of both worlds: Single-thread and multi-thread, blocking and non-blocking. 
With this flexibility, programmers can write code in a single programming language instead of two—one for synchronous operations and another for asynchronous operations.
More details can be found [here](https://www.mendix.com/blog/asynchronous-vs-synchronous-programming/).

#### Synchronous
Synchronous tasks happen in order — you must finish the first job before moving on to the next.
Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.
Each task requires an answer before moving on to the next iteration.

#### Asynchronous
Asynchronous is a non-blocking architecture, which means it doesn’t block further execution while one or more operations are in progress.
With async programming, multiple related operations can run concurrently without waiting for other tasks to complete. 

### Which one is JavaScript
JavaScript is by defailt asynchronous non-blocking programming language, which means that multiple commands can be run at the same time.
That's why we need to use keyword *await* in many cases, to wait until asynchronous operation will be over, so that we can carry on with the next one.
Every time you use *await* in a function, you need to mark it as *async*.
E.g.
```js
test('First test', async ( {page} ) => {
   await page.goto('https://playwright.dev/'); // use await to wait for the end of operation
   await page.getByRole('link', { name: 'Get started' }).click();
   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```


## Test execution
Plawright tests within a file (methods) are executed sequentially, while test files are executed in parallel.
You can use these commands to execute tests:
* `npx playwright test` - runs the tests specified in *playwright.config.js* configuration
* `npx playwright test directory/fileName.spec.js` - runs the tests of a specified file
* `npx playwright test --project=chromium` - runs the tests only on Desktop Chrome
* `npx playwright test --headed` - runs the tests in HEADed mode (non-headless)
* `npx playwright test --debug` - runs the tests in debug mode
* `npx playwright show-report` - shows report of previously executed tests