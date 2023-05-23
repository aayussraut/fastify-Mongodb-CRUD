const fastify = require("fastify")();

const app = fastify;

app.register(require("./plugins/database"));
app.register(require("./routes/itemsRoutes"));
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
