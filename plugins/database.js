const fastifyPlugin = require("fastify-plugin");

const dbConnector = async (fastify, options, done) => {
  try {
    await fastify.register(require("@fastify/mongodb"), {
      url: "mongodb://0.0.0.0:27017/item_database",
    });
  } catch (err) {
    console.log(err);
  }
  done();
};

module.exports = fastifyPlugin(dbConnector);
