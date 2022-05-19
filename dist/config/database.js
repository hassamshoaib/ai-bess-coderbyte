const Mongoose = require('@nestjs/mongoose');
let MongooseModule = Mongoose.MongooseModule;
const database = MongooseModule.forRoot('mongodb://localhost/practice');
module.exports = database;
//# sourceMappingURL=database.js.map