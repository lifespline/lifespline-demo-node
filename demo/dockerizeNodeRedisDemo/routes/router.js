import { Router } from "express";
import { exerciseRepository } from "../om/exercise.js";
export const router = Router();

router.put('/', async (req, res) => {})

/**
 * @openapi
 * /demo/:
 *  get:
 *    description: Returns an exercise
 *    summary: get exercise
 *    tags:
 *      - demo
 */
router.get('/', async (req, res) => {
    res.send('test read');
})

// UPDATE
router.post('/', async (req, res) => {})

// DELETE
router.put('/', async (req, res) => {})
