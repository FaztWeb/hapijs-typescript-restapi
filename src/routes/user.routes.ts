import { Server } from "@hapi/hapi";

import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/users.controller";

export const routes = (server: Server) => {
  server.route({
    method: "POST",
    path: "/users",
    handler: createUser
  });

  server.route({
    method: "GET",
    path: "/users",
    handler: getUsers
  });

  server.route({
    method: "GET",
    path: "/users/{id}",
    handler: getUser
  });

  server.route({
    method: "PUT",
    path: "/users/{id}",
    handler: updateUser
  });

  server.route({
    method: "DELETE",
    path: "/users/{id}",
    handler: deleteUser
  });
};
