import { IDatabaseDriver, Connection, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";

// WORKAROUND TODO: Remove when the connect-mongo types are updated
declare global {
  namespace Express {
    interface SessionData {
      cookie: any;
    }
  }
}

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};
