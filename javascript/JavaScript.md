## Javascript
Javascript is dynamically typed (no need to specify variable types), interpreted language (interpreter reads and executes the program, no compiler is needed).

#### Node.js
NodeJS is an open-source, cross-platform Javascript runtime environment that executes JavaScript code outside a web browser.
Download link: https://nodejs.org/en/download  
Check version installed: `node --version`  
**npm - node package manager** - used to install, delete, and update Javascript packages on your machine  
**npx - node package executer** - used to execute javascript packages directly, without installing them.

Each JavaScript file should have suffix `.js`  
You can execute JavaScript files with command: `node path/filename.js`


## Asynchronous vs. Synchronous processes
The benefit of JavaScript is that it offers the best of both worlds: Single-thread and multi-thread, blocking and non-blocking. 
With this flexibility, programmers can write code in a single programming language instead of two: one for synchronous operations and another for asynchronous operations.
More details can be found [here](https://www.mendix.com/blog/asynchronous-vs-synchronous-programming/).

### Synchronous process
Synchronous tasks happen in order: you must finish the first job before moving on to the next.
Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.
Each task requires an answer before moving on to the next iteration.

### Asynchronous process
Asynchronous is a non-blocking architecture, which means it doesn't block further execution while one or more operations are in progress.
With async programming, multiple related operations can run concurrently without waiting for other tasks to complete. 

### Which one is JavaScript?
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