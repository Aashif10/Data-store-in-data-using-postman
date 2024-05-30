let USER_SCHEMA = require("../Model/user");

exports.createuser = async (req, res) => {
  try {
    let payload = req.body;
    await USER_SCHEMA.create(payload);
    res.status(201).send({ message: "Ok", payload });
  } catch (err) {
    res.send(err);
  }
};
exports.fetchAll = async (req, res) => {
  let payload = await USER_SCHEMA.find();
  if (payload.length == 0) {
    res.send("Data not found");
  }
  res.status(200).send({ message: "Data Fetched successfully", payload });
};
exports.fetchOne = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      res.status(400).send({ message: "Data not found" });
    }
    let payload = await USER_SCHEMA.findOne({ _id: id });
    res.status(200).send({ message: "data found successfully", payload });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
exports.updataOne = async (req, res) => {
  try {
    let id = req.params.id;
    let payload=await USER_SCHEMA.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name.trim(),
          password: req.body.password.trim()
        }
      }
    );
    res.status(200).send({ message: "Data updated", payload});
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
// delete
  
exports.deleteData = async (req,res) => { 
    try {
        let id = req.params.id;
        let payload = await USER_SCHEMA.deleteOne({ _id: id })
        if (!id) {
            res.status(400).send({message:"id not match for user data"})
        }
        res.status(200).send({message:"data delete successfully",payload})
    
 } catch (error) {
    res.send(error)
 }
}