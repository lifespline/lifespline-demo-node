import client from "./client.js";
import { Entity, Schema } from "redis-om";

class Exercise extends Entity {}

const exerciseSchema = new Schema(Exercise, {
    "title": { "type": "string"},
    "utility": { "type": "number"},
    "content": { "type": "string"},
    "url": { "type": "string"},
    "resources": { "type": "string[]" },
    "createDate": { "type": "date" },
})

export const exerciseRepository = client.fetchRepository(exerciseSchema)
