const {
  getItems,
  getItem,
  addItem,
  deleteItem,
} = require('../controllers/items');

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

// options for add item
const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

// options for delete item
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteItem,
};

function itemRoutes(fastify, options, done) {
  // get all items
  fastify.get('/items', getItemsOpts);

  // get single item
  fastify.get('/items/:id', getItemOpts);

  // add item
  fastify.post('/items', postItemOpts);

  // delete item
  fastify.delete('/items/:id', deleteItemOpts);

  done();
}

module.exports = itemRoutes;
