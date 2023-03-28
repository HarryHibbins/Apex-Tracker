const Client = require('../src/client')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
//require('jest-fetch-mock').enableMocks()

describe('client', () =>{
    xit("calls fetch and loads the data", () => {
        const client = new Client();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
        name: "Some value",
        id: 123
      }));
    })
})

