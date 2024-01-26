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
- Parallel test execution


## Installation
1. Download and install [NodeJS](https://nodejs.org/en/download)
2. Download and install MS Visual Studio Code
3. Install extension `Playwright Test for VSCode`
4. Create a new NodeJS Playwright project with all dependencies with `npm init playwright`


### Folder/file structure
* `node_modules` - folder with all installed dependencies for NodeJS
* `tests` - folder with tests
    * each test has an extension *.spec.js*.
    * *playwrightDefaultExample.spec.js* is an example test containing all methods directly created by Playwright
* `playwright-config.js` - file with Playwright configuration (test directories, browsers, etc.)
* `test-results` - shows test results, screenshots, videos, traces, etc. of executed tests


### Troubleshooting
* Install multiple browsers when you want to test with multiple browsers, e.g. `npx playwright install firefox webkit`
* When it fails to launch a browser, it might be because your antivirus has blocked it as a thread


## Test execution
Playwright tests within a file (methods) are executed sequentially, while test files are executed in parallel.  
By default, all tests in all browsers (both specified in file *playwright.config.js*) are being executed, unless specified otherwise.  
You can use these commands to execute tests:
* `npx playwright test` - runs the tests specified in *playwright.config.js* configuration
* `npx playwright test directory/fileName.spec.js` - runs the tests of a specified file
* `npx playwright test --grep @Smoke` - runs test which contains "@Smoke" string in test method name (useful for test grouping)
* `npx playwright test --project=chromium` - runs the tests only on Desktop Chrome (only project with name chromium)
* `npm run smokeTests` - runs "smokeTests" script specified within file *package.json*
* `npx playwright test --headed` - runs the tests in HEADed mode (non-headless)
* `npx playwright test --debug` - runs the tests in debug mode
* `npx playwright show-report` - shows report of previously executed tests
* `npx playwright test --ui` - opens UI test runner page (for running and debugging tests) with all available tests
* `npx playwright test --config=debugging.config.js` - runs tests with our specified config file, instead of default one

### Parallel vs Serial test execution
By default, test classes are running in parallel with multiple workers, while test methods within one test file are running sequentially.  
Number of test workers can be edited in Playwright configuration via `workers` parameter, or with command line parameter `--workers <NUM>`.    
If you want test methods within one test file to run in parallel, you can add this annotation before those tests, and they will run in parallel:  
`test.describe.configure({mode: 'parallel'});`  
Similarly, if you need to change configuration for a test, you can do that with annotation:  
`test.describe.configure({ retries: 2, timeout: 20_000 });`.  
Alternatively, you can use Playwright configuration `fullyParallel: true` to set up parallelism within test files.  
There is a possibility to mark inter-dependent test methods as serial, which will SKIP all tests that are following after test that failed. For this, you can use annotation:   
`test.describe.configure({mode: 'serial'});`  


## Debugger
You can open Playwright debugger in 2 ways:  
* run test with added `--debug` parameter
* using `await page.pause()` method, that will pause a test on given line and open a debugger

With Playwright debugger, you can:
* Step over        - proceed to next line of code and execute it
* Pick locator     - use this tool to find a locator of given element of currently opened webpage
* Explore elements - show CSS selector or Xpath for selected web element, or validate your own selectors

## Codegen feature 
Playwright can record your actions on a given website and generate a code that can be used for automation.
To generate a code on given page based on your actions, you can execute Playwright with command
`npx playwright codegen https://webpage.com`

## Trace feature
You can save a trace of given test (via configuration options) that will save a ZIP file with all details of given test which you can find in test-results folder or on test report.
You can then open this ZIP file locally or upload it to `https://trace.playwright.dev/` to analyze your test.
Trace provides details and screenshots of each step of given test.  
Trace contains:  
`Before` - State and screenshot of the state before our action  
`Action` - Action that was provided for each step  
`After` - State and screenshot of the state after our action  
Along with network tab, and other useful things for each line of code.

## Reporting
Playwright offers multiple reportings which shows test details, possibly even with screenshots and videos or traces.  
Reporting can be set up in Playwright configuration or via `--reporting=<reporter>` parameter, and can be one of:  
* `list`   - prints one test in one line (default for non-CI)
* `line`   - uses single line to report last test and prints only failures (does not spam so much)
* `html`   - renders HTML page that can contain even screenshots, videos, traces
* `dot`    - shortest one. Uses dot for each test (default for CI)
* `allure` - 3rd party reporter for which you need to install Allure first
* `blob`   - contains all details about tests and can be used to produce any other reports 
* `json`   - produces JSON object with test results
* `junit`  - produces a JUnit-style XML report
* `github` - reporter to get automatic failure annotations when running in GitHub actions
* Other third party reporters, see: https://playwright.dev/docs/test-reporters


