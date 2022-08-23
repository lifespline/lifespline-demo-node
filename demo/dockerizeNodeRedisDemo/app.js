import 'dotenv/config'
// define and test the API
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import express, { application } from 'express'
import redis from 'redis'
import YAML from 'yamljs'
import { router } from './routes/router.js'

const PORT = 8080;

const app = express();
app.use(express.json());

app.use('/demo', router)

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Dockerize Node Redis Demo",
            description: "Demo dockerizing a `nodejs` app with a `redis` database.",
            contact: {
                name: "Diogo"
            },
            servers: ["localhost:8080"]
        }
    },
    apis: ["app.js", "./routes/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
// const swaggerDocument = YAML.load('api.yaml');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});