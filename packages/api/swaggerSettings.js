const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')
let swaggerDocument = {
    // You can also set globs for your apis
    // e.g. './routes/*.js'
    definition: {
        openapi: '3.0.1',
        info: {
            description: 'Test API with autogenerated swagger doc',
            title: 'Dessert API',
            version: '1.0.0',
        },
        license: {
            name: 'MIT',
            url: 'https://choosealicense.com/licenses/mit/',
        },
        contact: {
            name: 'Swagger',
            url: 'https://swagger.io',
            email: 'Info@SmartBear.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
        },
    ],
    apis: ['./routes/routes.js'],
}

const myswg = swaggerJsdoc(swaggerDocument)

module.exports = myswg
