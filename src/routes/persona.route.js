import Router from 'koa-router2';
import parse from 'co-body';
import Person from '../models/persona.model';

const router = new Router();

router.get('/persona', async (ctx, next) => {
    console.log('get');
    const personas = await Person.find();
    ctx.body = personas;
});

router.post('/persona', async (ctx, next) => {
    console.log('post');
    const data = await parse.json(ctx);
    const persona = new Person(data);
    persona.save();
    ctx.response.status = 201;
});

router.put('/persona/:id', async (ctx, next) => {
    console.log('put');
    const data = await parse.json(ctx);
    const persona = await Person.findByIdAndUpdate(ctx.params.id, {$set: data});
    ctx.response.status = 202;
});

export default router;