const express = require("express");
const router = express.Router();
const { Logger } = require("../middleware/loggerMiddleware");

router.get("/", async (req, res) => {
    res.send("Hello World!");
});

router.post("/", async (req, res) => {
    try {
        Logger.info(`${JSON.stringify(req.body)}`);
        res.status(200).send("Ingested Successfully \n");
    } catch (err) {
        Logger.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;