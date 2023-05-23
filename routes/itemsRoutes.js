const {
  getItems,
  postItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemsController");

const itemsRoutes = async (fastify, options, done) => {
  const collection = fastify.mongo.db.collection("items");

  const getItemsOptions = {
    schema: {
      response: {
        200: {
          type: "array",
          properties: {
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
              },
            },
          },
        },
      },
    },
    handler: getItems.bind(null, collection),
  };

  const getItemOptions = {
    schema: {
      params: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
        },
      },
    },
    handler: getItem.bind(null, collection),
  };

  const postItemsOptions = {
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
    },
    handler: postItem.bind(null, collection),
  };

  const updateItemOptions = {
    schema: {
      params: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
        },
      },
    },
    handler: updateItem.bind(null, collection),
  };

  const deleteItemsOptions = {
    schema: {
      params: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
    },
    handler: deleteItem.bind(null, collection),
  };

  fastify.get("/items", getItemsOptions);
  fastify.post("/items", postItemsOptions);
  fastify.get("/items/:item", getItemOptions);
  fastify.put("/items/:item", updateItemOptions);
  fastify.delete("/items/:item", deleteItemsOptions);
  done();
  //   fastify.get("/items/:id", getItem);
  //   fastify.put("/items/:id", updateItem);
  //   fastify.delete("/items/:id", deleteItem);
};

module.exports = itemsRoutes;
