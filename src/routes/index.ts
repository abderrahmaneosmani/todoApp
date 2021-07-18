import {Router} from 'express';
import user from './user';


const Routes = Router();

Routes.use('/user', user);

export default Routes;
