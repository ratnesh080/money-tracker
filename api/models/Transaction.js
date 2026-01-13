const mongoose = require("mongoose");
const { Schema, model } = mongoose;
//mongoose.connect(`mongodb://127.0.0.1:27017/RinkuSingh`);
const TransactionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  datetime: { type: Date },
});

const TransactionModel = model("transaction", TransactionSchema);

module.exports = TransactionModel;
