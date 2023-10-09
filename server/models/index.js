import Property from "./property.js";
import User from './user.js'

User.hasMany(Property)
Property.belongsTo(User)

Property.sync({alter: true})
User.sync({alter: true})

export {
    Property,
    User
}