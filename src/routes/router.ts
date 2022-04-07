import Router from 'express';
import controller from "../controllers/controller";

const router = Router();

router.get('/me', controller.getSomething);

export = router;