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
        return res.status(200).json({
            err: 0,
            msg: "Register successfully!",
        });
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller: " + error,
        });
    }
};

module.exports = { register };
