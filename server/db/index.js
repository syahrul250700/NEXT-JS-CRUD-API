import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient({
  errorFormat: "pretty",
  log: ["error", "info", "query", "warn"],
});

// This is a global method that will be called when the API server starts.
