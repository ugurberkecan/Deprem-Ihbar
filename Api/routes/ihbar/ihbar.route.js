const express = require('express');
const router = express.Router();
const Building = require('../../models/building');
const Traffic = require('../../models/traffic');

router.post('/bina', async (req, res, next) => {
    try {
        const { name, city, neighborhood, hosts } = req.body;
        let building = await Building.findOne({ name, city, neighborhood });
        if (!building) {
            building = new Building({
                name,
                city,
                neighborhood,
                hosts: []
            });
        }
        hosts.forEach(host => {
            building.hosts.push({
                name: host.name,
                contactNo: host.contactNo,
                status: host.status
            });
        });
        await building.save();
        res.send({ message: 'Building saved successfully', building });
    } catch (err) {
        next(err);
    }
});

router.get('/bina', async (req, res, next) => {
    try {
        const buildings = await Building.find({});
        res.send(buildings);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/bina/:city/:district', async (req, res) => {
    const city = req.params.city;
    const district = req.params.district;

    try {
        const buildings = await Building.find({
            'city.name': city,
            'city.districts': district
        });
        res.send(buildings);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/bina/search', async (req, res) => {
    const { name, hostName } = req.query;
    try {
        const query = {};
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        if (hostName) {
            query['hosts.name'] = { $regex: hostName, $options: 'i' };
        }
        const buildings = await Building.find(query);
        res.send(buildings);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/bina/:id', async (req, res, next) => {
    try {
        const building = await Building.findById(req.params.id);
        if (!building) {
            return res.status(404).send({ message: 'Building not found' });
        }
        res.send(building);
    } catch (err) {
        next(err);
    }
});





// router.delete('/', async (req, res, next) => {
//     try {
//         const buildings = await Building.deleteMany();
//         if (!buildings) {
//             return res.status(404).send({ message: 'Buildings not found' });
//         }
//         res.send({ message: 'Buildings deleted successfully' });
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
//         let building = await Building.findById(req.params.id);
//         if (!building) {
//             return res.status(404).send({ message: 'Building not found' });
//         }
//         building.city = city;
//         building.neighborhood = neighborhood;
//         building.name = name;
//         const hostIndex = building.hosts.findIndex(existingHost => existingHost.name === host.name);
//         if (hostIndex === -1) {
//             building.hosts.push(host);
//         } else {
//             building.hosts[hostIndex] = host;
//         }
//         await building.save();
//         res.send({ message: 'Building and host updated successfully' });
//     } catch (err) {
//         next(err);
//     }
// });

// router.delete('/bina/:id', async (req, res, next) => {
//     try {
//         const building = await Building.findById(req.params.id);
//         if (!building) {
//             return res.status(404).send({ message: 'Building not found' });
//         }
//         await building.remove();
//         res.send({ message: 'Building deleted successfully' });
//     } catch (err) {
//         next(err);
//     }
// });








/// YOL ROUTES


router.post('/yol', async (req, res) => {
    const { from, to, description, status } = req.body;

    const traffic = new Traffic({ from, to, description, status });
    try {
        await traffic.save();
        res.send(traffic);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/yol', async (req, res) => {
    try {
        const routes = await Traffic.find();
        res.send(routes);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/yol/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const route = await Traffic.findById(id);
        if (!route) {
            return res.status(404).send({ error: 'Route not found' });
        }
        res.send(route);
    } catch (err) {
        res.status(400).send(err);
    }
});

// router.put('/yol/:id', async (req, res) => {
//     const { id } = req.params;
//     const { from, to, description, status } = req.body;

//     try {
//         const route = await Traffic.findByIdAndUpdate(id, { from, to, description, status }, { new: true });
//         if (!route) {
//             return res.status(404).send({ error: 'Route not found' });
//         }
//         res.send(route);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });


router.post('/yardim', async (req, res) => {
    const supply = new Supply({
        name: req.body.name,
        no: req.body.no,
        description: req.body.description,
        city: req.body.city,
        address: req.body.address,
        status: req.body.status
    });

    try {
        await supply.save();
        res.send({ message: 'Supply added successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/yardim', async (req, res) => {
    try {
        const supplies = await Supply.find({});
        res.send(supplies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/yardim/:id', async (req, res) => {
    try {
        const supply = await Supply.findById(req.params.id);
        if (!supply) return res.status(404).send({ error: 'Supply not found' });
        res.send(supply);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/yardim/:city/:district', async (req, res) => {
    try {
        const city = req.params.city;
        const district = req.params.district;

        const supplies = await Supply.find({
            'city.name': city,
            'city.districts': district
        });
        if (!supplies) return res.status(404).send({ error: 'Supply not found' });
        res.send(supplies);
    } catch (error) {
        res.status(500).send(error);
    }
});







module.exports = router;