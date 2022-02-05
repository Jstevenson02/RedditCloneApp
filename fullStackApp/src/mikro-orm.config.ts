import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  logging: true,
  entities: [Post, User],
  dbName: "postgres",
  user: "postgres",
  password: "CrossOnFinger02!",
  type: "postgresql",
  debug: true,
} as Parameters<typeof MikroORM.init>[0];
