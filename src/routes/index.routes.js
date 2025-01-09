import express from 'express';
import index_controller from '../controllers/index.controller.js'

const router = express.Router();

router.get( '/', index_controller.getIndex );

export default router;