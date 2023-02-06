const express = require('express');
const router = express.Router();
const Building = require('../../models/building');

router.post('/', async (req, res, next) => {
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

router.get('/', async (req, res, next) => {
    try {
        const buildings = await Building.find({});
        res.send(buildings);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res, next) => {
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

router.delete('/', async (req, res, next) => {
    try {
        const buildings = await Building.deleteMany();
        if (!buildings) {
            return res.status(404).send({ message: 'Buildings not found' });
        }
        res.send({ message: 'Buildings deleted successfully' });
    } catch (err) {
        next(err);
    }
});

// router.put('/:id', async (req, res, next) => {
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

router.delete('/:id', async (req, res, next) => {
    try {
        const building = await Building.findById(req.params.id);
        if (!building) {
            return res.status(404).send({ message: 'Building not found' });
        }
        await building.remove();
        res.send({ message: 'Building deleted successfully' });
    } catch (err) {
        next(err);
    }
});

// router.delete('/:id/hosts/:hostId', async (req, res, next) => {
//     try {
//         const building = await Building.findById(req.params.id);
//         if (!building) {
//             return res.status(404).send({ message: 'Building not found' });
//         }
//         const hostIndex = building.hosts.findIndex(existingHost => existingHost._id.toString() === req.params.hostId);
//         if (hostIndex === -1) {
//             return res.status(404).send({ message: 'Host not found' });
//         }
//         building.hosts.splice(hostIndex, 1);
//         await building.save();
//         res.send({ message: 'Host deleted successfully' });
//     } catch (err) {
//         next(err);
//     }
// });



module.exports = router;