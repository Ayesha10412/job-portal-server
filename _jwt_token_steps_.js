/**
 * 1. after successful login: generate a jwt token
 * npm i jsonwebtoken, cookie-parser
 * jwt.sign(payload, secret, {expiresIn: '1d})
 *
 * 2. send token (generated in the server side) to the client side
 * localstorage --> easier
 *
 * httpOnly cookies ----> better
 *
 *
 * 3. for sensitive/secure/private/protected apis : send token to the server site
 * 
 * on the server side:
 * app.use(
   cors({
     origin: ["http://localhost:5174"],
     credentials: true
   })
 );

 *
 * 4. validate the token in the server site:
 * if valid: provide data
 * if not valid: logout
 *
 */
