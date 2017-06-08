import Router from 'koa-router2';
import parse from 'co-body';
import Person from '../models/persona.model';

const router = new Router();

router.get('/persona', async (ctx, next) => {
    const personas = await Person.find();
    ctx.body = personas;
});

router.post('/persona', async (ctx, next) => {
    const data = await parse.json(ctx);
    const persona = new Person(data);
    persona.save();
});

router.put('/persona/:id', async (ctx, next) => {
     const data = await parse.json(ctx);
     const persona = await Person.findByIdAndUpdate(ctx.params.id, {$set: data});
});

export default router;