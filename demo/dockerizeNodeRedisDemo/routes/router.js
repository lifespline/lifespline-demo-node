import { Router } from "express";
import { exerciseRepository } from "../om/exercise.js";
export const router = Router();

/**
 * @openapi
 * /demo:
 *  put:
 *    tags:
 *      - demo
 *    description: creates a new exercise
 *    summary: create exercise
 *    operationId: createExercise
 *    requestBody:
 *      description: exercise
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            title: exercise
 *            allOf:
 *              - $ref: "#/components/schemas/exercise"
 *    responses:
 *      '200':
 *        description: Exercise created successfully
 *        content:
 *          application/json:
 *            schema:
 *                title: exercise
 *                allOf:
 *                  - $ref: "#/components/schemas/exercise_id"
 *                  - $ref: "#/components/schemas/exercise"
 */
router.put('/', async (req, res) => {
    const exercise = req.body;
    const result = await exerciseRepository.createAndSave(exercise);
    res.send(result);
})

/**
 * @openapi
 * /demo:
 *  get:
 *    description: Returns an exercise
 *    summary: get exercise
 *    tags:
 *      - demo
 *    responses:
 *      '200':
 *        description: exercise
 */
router.get('/', async (req, res) => {
    res.send('test read');
})

// UPDATE
router.post('/', async (req, res) => {})

// DELETE
router.put('/', async (req, res) => {})
