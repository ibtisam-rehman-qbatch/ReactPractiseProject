const httpStatus = require("http-status");
// Informational responses
console.log(httpStatus.CONTINUE); // 100
console.log(httpStatus.SWITCHING_PROTOCOLS); // 101
console.log(httpStatus.PROCESSING); // 102

// Successful responses
console.log(httpStatus.OK); // 200
console.log(httpStatus.CREATED); // 201
console.log(httpStatus.ACCEPTED); // 202
console.log(httpStatus.NO_CONTENT); // 204

// Redirection messages
console.log(httpStatus.MOVED_PERMANENTLY); // 301
console.log(httpStatus.FOUND); // 302
console.log(httpStatus.SEE_OTHER); // 303
console.log(httpStatus.NOT_MODIFIED); // 304

// Client error responses
console.log(httpStatus.BAD_REQUEST); // 400
console.log(httpStatus.UNAUTHORIZED); // 401
console.log(httpStatus.FORBIDDEN); // 403
console.log(httpStatus.NOT_FOUND); // 404
console.log(httpStatus.METHOD_NOT_ALLOWED); // 405
console.log(httpStatus.CONFLICT); // 409
console.log(httpStatus.UNPROCESSABLE_ENTITY); // 422

// Server error responses
console.log(httpStatus.INTERNAL_SERVER_ERROR); // 500
console.log(httpStatus.NOT_IMPLEMENTED); // 501
console.log(httpStatus.BAD_GATEWAY); // 502
console.log(httpStatus.SERVICE_UNAVAILABLE); // 503
console.log(httpStatus.GATEWAY_TIMEOUT); // 504
