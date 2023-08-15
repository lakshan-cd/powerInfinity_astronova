const Planet = require("../models/planetModel");


const createPlanets = async (req, res) => {
    const { name, description, lengthOfYear } = req.body;
    try {
        const planet = await Planet.create({
            name, description, lengthOfYear
        });
        const planetData = await planet.save();
        return res.send({ planetData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
};

const updatePlanets = async (req, res) => {
    const { id, name, description, lengthOfYear } = req.body;
    try {
        const planet = await Planet.findByIdAndUpdate(id, { name, description, lengthOfYear }, { new: true });

        if (!planet) {
            return res.status(404).json({ error: "Planet not found" });
        }

        return res.json({ planet });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.find()

        if (!planets) {
            return res.status(404).json({ error: "Planets not found" });
        }

        return res.json({ planets });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getOnePlanet = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findOne({ _id: id })

        if (!planet) {
            return res.status(404).json({ error: "Planets not found" });
        }

        return res.json({ planet });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteOnePlanet = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findOneAndDelete({ _id: id })

        if (!planet) {
            return res.status(404).json({ error: "Planets not found" });
        }

        return res.json({ planet });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};




module.exports = {
    createPlanets, updatePlanets, getAllPlanets, getOnePlanet, deleteOnePlanet
};
