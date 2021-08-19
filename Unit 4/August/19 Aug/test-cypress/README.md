This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Clone the App

```
git clone <url>

npm install
```

goto package.json

add to the `scripts` object
```json
"cypress" : "cypress open"
```

After that you can run

```
npm run cypress
```

with this you will be able to see cypress dashboard open.

If you are setting it up for the first time, it will have an examples folder inside cypress folder with many examples
that you can see what all you can run.

You will see a cypress.json (which is empty) and cypresss 

you can remove the examples folder after that.

```
- cypress
    - fixtures
    - integration # test files
    - support
```