import express from "express";
import AccessToken from '../controller/accessToken'
import Login from '../controller/login'
import Register from '../controller/register'
const router = express.Router();

router.post('/login', Login)
router.post('/register', Register)
router.get('/accesstoken', AccessToken)

export default router;

