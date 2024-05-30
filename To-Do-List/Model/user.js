let { Schema, model } = require("mongoose");
let bcrypt=require("bcrypt")
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    type: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true
  }
);
// install and import bcrypt module
userSchema.pre("save", async function () {
    let salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
})

module.exports = model("user", userSchema);
