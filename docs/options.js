var options = {
  swaggerDefinition: {
    info: {
      title: "JobChat API",
      description: "Endpoints provided by JobChat's API.",
      version: "1.0"
    },
    schemes: ["http", "https"],
    basePath: "/api",
    produces: ["application/json"]
  },
  apis: ["./routes/foo.js"]
};

module.exports = options;
