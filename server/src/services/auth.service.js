const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("../models");

const hashPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(12));

const register = async ({ phone, name, password }) => {
    try {
        const response = await db.User.findOrCreate({
            where: { phone },
            default: {
                phone,
                name,
                password: hashPassword(password),
                id: v4(),
            },
        });

        const token =
            response[1] &&
            jwt.sign(
                { id: response[0].id, phone: response[0].phone },
                process.env.SECRET_KEY,
                { expiresIn: "2d" }
            );
        return {
            err: token ? 0 : 2,
            msg: token
                ? "Register successfully!"
                : "Phone number has been already existed",
            token: token || null,
        };
    } catch (error) {}
};

module.exports = { register };
