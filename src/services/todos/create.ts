"use strict";

import dynamo, { Tables } from "../../dynamo";

module.exports.create = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  if (typeof data.text !== "string") {
    console.error("Validation Failed");
    callback(new Error("Couldn't create the todo item."));
    return;
  }
  const params = {
    text: data.text,
    checked: false,
  };

  try {
    const workout = await dynamo.create(Tables.WORKOUTS, params);
    const response = {
      statusCode: 200,
      body: JSON.stringify(workout),
    };
    callback(null, response);
  } catch (error) {
    callback(new Error(error));
    return;
  }
};
