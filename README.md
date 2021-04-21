# JWT-Demo

This is test JWT application to generate and verify auth tokens.

## API

JWT-Demo applicaiton is offering below API(s).

### /api

https://jwt-demo1.herokuapp.com/api

General API to show the details about other APIs and how to use them

### /api/login

https://jwt-demo1.herokuapp.com/api/login

To generate JWT Token Hit a post request to the api end point /api/login.

![image](/img/generate-jwt-token.png)

### /api/verifyJwtToken

https://jwt-demo1.herokuapp.com/api/verifyJwtToken

To verify JWT Token Hit a post request to the api end point /api/verifyJwtToken by passing Authorization as Bearer Token and pass the genereted auth token with this.

![image](/img/verify-jwt-token.png)

### Token Expire In

This token is set to expires in 30 seconds only

## Developers

If you want to run the latest code from git, here's how to get started:

1. Clone the code:

    git clone https://github.com/ddevashish/JWT-DEMO.git

2. Install the dependencies

    npm install

3. Run

    npm start

    or

    npm dev

