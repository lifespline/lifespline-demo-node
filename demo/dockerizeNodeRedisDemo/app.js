import 'dotenv/config'
// define and test the API
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import express, { application } from 'express'
import redis from 'redis'
import YAML from 'yamljs'
import { router } from './routes/router.js'
import { logger } from './utils/logger.js'

const PORT = 8080;

const app = express();
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Dockerize Node Redis Demo",
            version: "1.0.0",
            description: "Demo dockerizing a `nodejs` app with a `redis` database.",
            contact: {
                name: "Diogo"
            },
            servers: ["localhost:8080"]
        },
        components: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ["app.js", "./routes/*.js", "api.yaml"]
}
const swaggerSpec = swaggerJsDoc(swaggerOptions)

/**
 * @openapi
 * /meta/api/docs:
 *  get:
 *    description: Returns the swagger documentation
 *    summary: swagger doc
 *    tags:
 *      - meta
 */
app.use('/meta/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// bind router to route 'demo'
app.use('/demo', router)


app.listen(PORT, () => {
    console.log(`App running at 0.0.0.0:${PORT}`);
    console.log(`Docs available at 0.0.0.0:${PORT}/meta/api/docs`);
});