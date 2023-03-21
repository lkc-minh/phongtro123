const { authService } = require("../services");

const register = async (req, res) => {
    const { name, phone, password } = req.body;
    try {
        if (!name || !phone || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs!",
            });
        }
        const response = await authService.register(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller: " + error,
        });
    }
};
const login = async (req, res) => {
    const { phone, password } = req.body;
    try {
        if (!phone || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs!",
            });
        }
        const response = await authService.login(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller: " + error,
        });
    }
};
module.exports = { register, login };
