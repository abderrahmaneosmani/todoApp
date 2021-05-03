import {Router} from 'express';
import user from './user';
import task from './task';

const Routes = Router();

Routes.use('/user', user);
Routes.use('/task', task);

export default Routes;
