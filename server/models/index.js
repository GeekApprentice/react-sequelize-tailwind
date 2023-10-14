import Property from "./property.js";
import User from './user.js'

User.hasMany(Property)
Property.belongsTo(User)

export {
    Property,
    User
}