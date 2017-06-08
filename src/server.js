import Koa from 'koa';
import Router from 'koa-router2';
import parse from 'co-body';
import mongoose from 'mongoose';
import router from './routes/persona.route.js';

const app = new Koa();

mongoose.connect("mongodb://localhost/bead");

app.use(router.routes());
app.listen(3000);
