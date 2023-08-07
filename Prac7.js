import express from 'express';
import Joi from 'joi';
const app = express();
app.use(express.json());

// const userSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email().required(),
//     age: Joi.number().integer().min(18).max(120).required(),
// });

// app.post('/signup', (req, res) => {
//     const data=req.body;
//     const { error, value } = userSchema.validate(data);

//     if (error) {
//         return res.status(400).json({
//             error: 'Validation Error',
//             message: error.details[0].message,
//         });
//     }
//     else {
//         res.json(value);
//     }
// });


app.listen(3010, () => {
    console.log(`Your service is running on 3010`);
});
