const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { port } = require("./config");

// Middleware
const { Logger } = require("./middleware/loggerMiddleware");

// Routes
const appRoutes = require("./routes/appRoutes");
// Use Body Parser
app.use(bodyParser.json());

app.use("/", appRoutes);

app.listen(port, () => {
    Logger.info(`Server is running at http://localhost:${port}`);
});



// bash script -> node -> logfile -> filebeat -> elastic cloud
// logFile --> Beats (watcher) --> ElasticSearch --> Kibana.