import { DynamoDB } from "aws-sdk";
import * as uuid from "uuid";

import {
  WorkoutParams,
  CycleParams,
  ToDoParams,
  ExerciseParams,
  MovementParams,
  SetParams,
} from "../models";

const TABLES = {
  WORKOUTS: process.env.WORKOUTS_TABLE,
  TODOS: process.env.TODOS_TABLE,
  CYCLES: process.env.CYCLES_TABLE,
  EXERCISES: process.env.EXERCISES_TABLE,
  MOVEMENTS: process.env.MOVEMENTS_TABLE,
  SETS: process.env.SETS_TABLE,
};

export enum Tables {
  WORKOUTS = "WORKOUTS",
  CYCLES = "CYCLES",
  TODOS = "TODOS",
  EXERCISES = "EXERCISES",
  MOVEMENTS = "MOVEMENTS",
  SETS = "SETS",
}

type CreateParams =
  | WorkoutParams
  | CycleParams
  | ToDoParams
  | ExerciseParams
  | MovementParams
  | SetParams;

const dynamoDb = new DynamoDB.DocumentClient();

const create = async (table: Tables, params: CreateParams): Promise<any> => {
  const timestamp = new Date().getTime();
  const dynamoParams = {
    TableName: TABLES[table],
    Item: {
      id: uuid.v1(),
      createdAt: timestamp,
      updatedAt: timestamp,
      ...params,
    },
  };
  try {
    await dynamoDb.put(dynamoParams).promise();
    return dynamoParams.Item;
  } catch (err) {
    throw err;
  }
};

const update = () => {};

const get = () => {};

const getList = () => {};

const dynamo = {
  create,
};

export default dynamo;
