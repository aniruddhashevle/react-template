This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to install

    ```
    npx create-react-app your-app-name --template cra-template-typescript-context
    ```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Add the following in package.json

```
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "npm run format",
      "npm run lint:fix"
    ]
  },
```
