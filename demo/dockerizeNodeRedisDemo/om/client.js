import {Client} from 'redis-om'

const url = process.env.REDIS_URL || 'redis://localhost:6379';
const client = await new Client().open(url);

export default client;