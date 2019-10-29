'use strict';

/** Class representing a generic model */
class Model {
  /**
   * Create a model.
   * @param {mongoose.model} schema - This is a mongoose model built
   * from a mongoose.Schema object
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Return the model schema in JSON format
   * @return {object} The schema for this model.
   */
  jsonSchema() {
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  /**
   * Get a record from this model
   * @param {mongoose.Types.ObjectId} _id - The id for the record
   * we're attempting to get
   * @return {Promise<object>} The found record.
   * @return null if @param was incorrect
   */
  get(_id) {
    if (mongoose.Types.ObjectId.isValid(_id))
      return this.schema.findOne({ _id });
    else return null;
  }

  /**
   * Get a multiple records based on a query
   * @param {object} query - Some key-value pairs that should limit
   * what records we're attempting to get
   * @return {Promise<object[]>} A collection of records
   */
  getFromField(query) {
    if (query) return this.schema.find(query);
    else return this.schema.find({});
  }

  /**
   * Creates a record in our model's collection within MongoDB
   * @param  {object} record - the record to create
   * @return {Promise<object>} The record we saved to the DB
   */
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Updates a specific record with new content. The {new: true}
   * addition specifies that if we can't find any matching record,
   * make a new one from the record param object.
   * @param  {mongoose.Types.ObjectId} _id - The id of the record
   * we want to change
   * @param  {object} record - the new data we want our record to
   * be updated to
   * @return {Promise<object>} The updated record and its contents
   */
  update(_id, record) {
    return this.schema.updateOne({ _id }, record, { new: true });
  }

  /**
   * @param  {mongoose.Types.ObjectId} _id - The id of the record we
   * want to delete
   * @return {Promise<object>} The deleted record
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;
