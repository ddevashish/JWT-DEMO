# JWT-Demo

This is test JWT application to generate and verify auth tokens.

## API

### /api/login

To generate JWT Token Hit a post request to the api end point /api/login.

![image](/img/generate-jwt-token.png)

### /api/verifyJwtToken/

To verify JWT Token Hit a post request to the api end point /api/verifyJwtToken by passing Authorization as Bearer Token and pass the genereted auth token with this.

![image](/img/verify-jwt-token.png)

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

