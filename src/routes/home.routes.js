import express from 'express';
import home_controller from '../controllers/home.controller.js'

const router = express.Router();

router.get('/', home_controller.getHome );

export default router;