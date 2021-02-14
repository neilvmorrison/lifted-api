import dynamo, { Tables } from "../../dynamo";

module.exports.create = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { name } = data;

  const params = {
    name,
  };

  try {
    const cycle = await dynamo.create(Tables.CYCLES, params);
    const response = {
      statusCode: 200,
      body: JSON.stringify(cycle),
    };
    callback(null, response);
  } catch (error) {
    callback(new Error(error));
    return;
  }
};
