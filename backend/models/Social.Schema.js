const { model, Schema } = require("mongoose");

const SocialSchema = Schema({
  facebook: { type: String },
  insta: { type: String },
  linkedIn: { type: String },
});

const SchemaModel = model("social", SocialSchema);

module.exports = SchemaModel;
