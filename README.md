# To run tests against the code challenges

1. Fork this repository.

2. `yarn install`

3. Insert your code into the [code-challenges.js](code-challenges.js) file, commit this change, and push it to your forked repository.

4. Go to the Github Actions page for your Repository and select the Node.js CI Tests Workflow.

5. Enter the specific tests you'd like to run (ex. 'Hype Machine'), or leave the value as '.' to run all tests.

6. Wait for the Actions page to refresh and click your newly submitted workflow.

7. Click on the build Job

8. Expand the 'Run npm test' step and see which tests passed (yay) & which tests failed (boo)

[![Watch Running the Tests](media/actions_test.gif)](media/actions_test.mp4)
