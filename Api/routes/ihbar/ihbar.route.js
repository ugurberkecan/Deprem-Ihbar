const express = require('express');
const router = express.Router();
const Help = require('../../models/help');
const { check, validationResult } = require('express-validator');


router.post('/yardim', [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('city').not().isEmpty().withMessage('City is required'),
    check('type').not().isEmpty().withMessage('Type is required'),
    check('neighborhood').not().isEmpty().withMessage('Neighborhood is required'),
    check('description').not().isEmpty().withMessage('Description is required'),
    check('phoneNumber').not().isEmpty().withMessage('Phone number is required'),
], async (req, res, next) => {

    if(req.method === 'OPTIONS') { return res.status(200).json(({ body: "OK" })) };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, city, type, neighborhood, description, phoneNumber } = req.body;
        let help = await Help.findOne({ name, city, neighborhood, phoneNumber, description });
        if (!help) {
            help = new Help({
                name,
                type,
                city,
                neighborhood,
                phoneNumber,
                description
            });
        }
        await help.save();
        res.send({ message: 'help saved successfully', help });
    } catch (err) {
        next(err);
    }
});

router.get('/yardim', async (req, res, next) => {
    try {
        const helps = await Help.find({});
        res.send(helps);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/yardim/:city/:district', async (req, res) => {
    const city = req.params.city;
    const district = req.params.district;

    try {
        const helps = await Help.find({
            'city.name': city,
            'city.districts': district
        });
        res.send(helps);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/yardim/search', async (req, res) => {
    const { name } = req.query;
    try {
        const query = {
            $or: [
                { name: { $regex: name, $options: 'i' } },
                { 'city.name': { $regex: name, $options: 'i' } },
                { 'city.districts': { $regex: name, $options: 'i' } },
                { neighborhood: { $regex: name, $options: 'i' } },
                { description: { $regex: name, $options: 'i' } },
                { phoneNumber: { $regex: name, $options: 'i' } },
            ]
        };
        const helps = await Help.find(query);
        res.send(helps);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/yardim/:id', async (req, res, next) => {
    try {
        const help = await help.findById(req.params.id);
        if (!help) {
            return res.status(404).send({ message: 'help not found' });
        }
        res.send(help);
    } catch (err) {
        next(err);
    }
});





// router.delete('/', async (req, res, next) => {
//     try {
//         const helps = await help.deleteMany();
//         if (!helps) {
//             return res.status(404).send({ message: 'helps not found' });
//         }
//         res.send({ message: 'helps deleted successfully' });
//     } catch (err) {
//         next(err);
//     }
// });

// router.put('/bina/:id', async (req, res, next) => {
//     try {
//         const { city, neighborhood, name, host } = req.body;
//         if (!city || !neighborhood || !name || !host) {
//             return res.status(400).send({ error: 'Missing required properties' });
//         }
//         let help = await help.findById(req.params.id);
//         if (!help) {
//             return res.status(404).send({ message: 'help not found' });
//         }
//         help.city = city;
//         help.neighborhood = neighborhood;
//         help.name = name;
//         const hostIndex = help.hosts.findIndex(existingHost => existingHost.name === host.name);
//         if (hostIndex === -1) {
//             help.hosts.push(host);
//         } else {
//             help.hosts[hostIndex] = host;
//         }
//         await help.save();
//         res.send({ message: 'help and host updated successfully' });
//     } catch (err) {
//         next(err);
//     }
// });

// router.delete('/bina/:id', async (req, res, next) => {
//     try {
//         const help = await help.findById(req.params.id);
//         if (!help) {
//             return res.status(404).send({ message: 'help not found' });
//         }
//         await help.remove();
//         res.send({ message: 'help deleted successfully' });
//     } catch (err) {
//         next(err);
//     }
// });








/// YOL ROUTES


// router.post('/yol', async (req, res) => {
//     const { from, to, description, status } = req.body;

//     const traffic = new Traffic({ from, to, description, status });
//     try {
//         await traffic.save();
//         res.send(traffic);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// router.get('/yol', async (req, res) => {
//     try {
//         const routes = await Traffic.find();
//         res.send(routes);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// router.get('/yol/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const route = await Traffic.findById(id);
//         if (!route) {
//             return res.status(404).send({ error: 'Route not found' });
//         }
//         res.send(route);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// // router.put('/yol/:id', async (req, res) => {
// //     const { id } = req.params;
// //     const { from, to, description, status } = req.body;

// //     try {
// //         const route = await Traffic.findByIdAndUpdate(id, { from, to, description, status }, { new: true });
// //         if (!route) {
// //             return res.status(404).send({ error: 'Route not found' });
// //         }
// //         res.send(route);
// //     } catch (err) {
// //         res.status(400).send(err);
// //     }
// // });


// router.post('/yardim', async (req, res) => {
//     const supply = new Supply({
//         name: req.body.name,
//         no: req.body.no,
//         description: req.body.description,
//         city: req.body.city,
//         address: req.body.address,
//         status: req.body.status
//     });

//     try {
//         await supply.save();
//         res.send({ message: 'Supply added successfully' });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });


// router.get('/yardim', async (req, res) => {
//     try {
//         const supplies = await Supply.find({});
//         res.send(supplies);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.get('/yardim/:id', async (req, res) => {
//     try {
//         const supply = await Supply.findById(req.params.id);
//         if (!supply) return res.status(404).send({ error: 'Supply not found' });
//         res.send(supply);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.get('/yardim/:city/:district', async (req, res) => {
//     try {
//         const city = req.params.city;
//         const district = req.params.district;

//         const supplies = await Supply.find({
//             'city.name': city,
//             'city.districts': district
//         });
//         if (!supplies) return res.status(404).send({ error: 'Supply not found' });
//         res.send(supplies);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });







module.exports = router;