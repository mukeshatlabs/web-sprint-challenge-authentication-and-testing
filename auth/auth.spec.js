const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const Users = require("../users/users-model.js");
const Auth = require("./auth-router.js");
const db = require("../database/dbConfig.js");


