import { DynamoDB } from "aws-sdk";
import * as uuid from "uuid";

const TABLES = {
  WORKOUTS: process.env.WORKOUTS_TABLE,
  TODOS: process.env.TODOS_TABLE,
  CYCLE: process.env.CYCLES_TABLE,
};

export enum Tables {
  WORKOUTS = "WORKOUTS",
  CYCLES = "CYCLES",
  TODOS = "TODOS",
}

interface ToDoParams {
  text: string;
  checked: boolean;
}

interface WorkoutParams {}

interface CycleParams {
  name: string;
}

type CreateParams = WorkoutParams | CycleParams | ToDoParams;

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
