import { Router } from "express";
import { exerciseRepository } from "../om/exercise.js";
export const router = Router();

/**
 * @swagger
 * /exercises:
 *  put:
 *      description: Create a new exercise
 *      responses:
 *          '200':
 *              description: Exercise created successfully
 */
router.put('/', async (req, res) => {
    const exercise = await exerciseRepository.createAndSave(req.body)
    res.send(exercise);
})
// READ


// UPDATE

// DELETE