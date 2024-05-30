const { Router } = require("express");
const { createList, fetchLists, fetchOne, updateList, deleteList } = require("../Controller/listController");

const router = Router();
router.post("/create", createList);
router.get("/all", fetchLists)
router.get("/fetch/:id", fetchOne)
router.patch("/update/:id", updateList)
router.delete("/delete/:id",deleteList);
module.exports = router;