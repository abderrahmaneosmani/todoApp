import {Router} from 'express';
import user from './user';
import task from './task';
import list from './list';
const Routes = Router();

Routes.use('/user', user);
Routes.use('/task', task);
Routes.use('/list', list);

export default Routes;
