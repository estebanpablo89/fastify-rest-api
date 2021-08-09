const { getItems, getItem } = require('../controllers/items');

// Item schema

const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

// options for get single item
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

function itemRoutes(fastify, options, done) {
  // get all items
  fastify.get('/items', getItemsOpts);

  // get single item
  fastify.get('/items/:id', getItemOpts);
  done();
}

module.exports = itemRoutes;
