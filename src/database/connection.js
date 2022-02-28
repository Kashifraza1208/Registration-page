const mongoose = require("mongoose");

mongoose.connect("mongodb://superAdmin:Kashifraza1@localhost:27017/studentsRegistration?authSource=admin&w=1", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})