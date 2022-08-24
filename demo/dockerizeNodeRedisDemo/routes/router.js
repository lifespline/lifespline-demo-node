import { Router } from "express";
import { exerciseRepository } from "../om/exercise.js";
export const router = Router();

/**
 * @openapi
 * /demo:
 * put:
 *   description: Create a new exercise
 *   summary: Create a new exercise
 *   tags:
 *     - demo
 */
router.put('/', async (req, res) => {
    const exercise = await exerciseRepository.createAndSave(req.body)
    res.send(exercise);
})

/**
 * @openapi
 * /demo:
 * get:
 *   description: Read an exercise
 *   summary: Read an exercise
 *   tags:
 *     - demo
 */
router.get('/', async (req, res) => {
    res.send('test read');
})

// UPDATE
router.post('/', async (req, res) => {})

// DELETE
router.put('/', async (req, res) => {})
