import { User } from '../models/index.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        return res.status(400).json({error: 'no users in the database'})
    } 
}