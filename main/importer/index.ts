export import _ = require("lodash");
export import bluebird = require("bluebird");

export import jsonwebtoken = require("jsonwebtoken");
export const jsonwebtokenLib = jsonwebtoken;
export const jwt: any = bluebird.promisifyAll(jsonwebtoken);
