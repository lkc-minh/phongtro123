const express = require("express");
const authRoute = require("./auth.route");

const router = express.Router();

const defaultRoute = [{ path: "/auth", router: authRoute }];

defaultRoute.forEach((route) => {
  router.use(route.path, route.router);
});

module.exports = router;
