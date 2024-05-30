const LIST_SCHEMA = require("../Model/list");

// create list
exports.createList = async (req, res) => {
  let payload = {
    title: req.body.title.trim(),
    description: req.body.description.trim()
  };

  if (!payload.title || !payload.description) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }
  try {
    await LIST_SCHEMA.create(payload);
    res.status(200).json({
      message: "list created Successfully",
      data: payload
    });
  } catch (err) {
    console.log(err);
  }
};
// Fetching lists
exports.fetchLists = async (req, res) => {
  try {
    let payload = await LIST_SCHEMA.find();
    if (!payload) {
      return res.status(400).send({ message: "data not found" });
    }

    res.status(200).send({ message: "data fetched successfully", payload });
  } catch (err) {
    res.send("error occurred");
  }
};

exports.fetchOne = async (req, res) => {
  try {
    // console.log(req.params);
    let id = req.params.id;
    if (!id) {
      return res.status(400).send({ message: "Data not found" });
    }
    let payload = await LIST_SCHEMA.findOne({ _id: id });
    // let payload = await LIST_SCHEMA.findById({ id });

    res.status(200).send({ message: "Data fetched successfully ", payload });
  } catch (err) {
    res.send(err);
  }
};

//  updata list
exports.updateList = async (req, res) => {
  try {
    let id = req.params.id;
    await LIST_SCHEMA.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title.trim(),
          description: req.body.description.trim()
        }
      }
    );

    res.status(201).send({ message: "data updated" });
  } catch (err) {
    res.send(err);
  }
};

exports.deleteList = async (req, res) => {
    try {
        let id = req.params.id;
        await LIST_SCHEMA.deleteOne({ _id: id });
        res.status(200).send({ message: "Data delete successfully" });
    }
    catch (err) {
        res.send(err)
    }
}

