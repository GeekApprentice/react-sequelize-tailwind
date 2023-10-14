import { Property } from "../models/index.js";

export const getProperties = async (req, res) => {
    try {
        const properties = await Property.findAll({})
        return res.json(properties)
    } catch (error) {
        return res.status(401).json({error: 'properties not found'})
    }
}