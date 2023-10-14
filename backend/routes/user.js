import express from 'express'
import {updateUser, deleteUser, getAllUser, getSingleUser} from '../controllers/userControl.js'

const router = express.Router();

router.get('/:id', getSingleUser)
router.get('/', getAllUser)
router.get('/:id', updateUser)
router.get('/:id', deleteUser)

export default router