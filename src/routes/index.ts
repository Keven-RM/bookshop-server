import express from 'express'
import controller from '../controller';
const router = express.Router();

router.get('/list',         controller.listAllBooks);
router.post('/find',        controller.findBook);
router.delete('/remove',    controller.removeBook);
router.put('/update',       controller.updateBook);
router.post('/create',      controller.createBook);

export default router;