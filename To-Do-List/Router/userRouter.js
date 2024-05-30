let { Router } = require("express");

const { createuser, fetchAll, fetchOne, updataOne, deleteData } = require("../Controller/userController")
let router = Router();

router.post("/create", createuser) 
router.get("/all", fetchAll)
router.get("/fetchOne/:id", fetchOne);
router.patch("/updateOne/:id", updataOne)
router.delete("/deleteOne/:id", deleteData);
module.exports = router;