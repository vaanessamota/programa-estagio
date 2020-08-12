import { Router } from 'express';

const routes = Router();

routes.use('/lines');
routes.use('/vehicles');
routes.use('/stops');

export default routes;
