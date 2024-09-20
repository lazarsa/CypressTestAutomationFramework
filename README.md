To setup project locally, do the following:
*Clone repo to your computer
*Run **npm install** in your terminal

To run the tests, you can do it on one of the following ways:
1. In terminal, run **cy:open** This will run the test in headed mode and you can monitor each step in the browser that you chose.
2. For headless mode in different browsers, run **cy:run:chrome(firefox/edge/electron)** This will output results in the console.
3. For headed mode in different browsers, run **cy:run:chrome(firefox/edge/electron):headed** You can also monitor steps here, but the cypress will close automatically upon finishing tests.

To review test reports, you can view them in terminal upon finishing the tests, or you can go to results folder, where each test result file will be stored.
