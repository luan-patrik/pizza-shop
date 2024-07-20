import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async (opts) => {
      const { input } = opts;

      return { name: input.name };
    }),
  createTodos: publicProcedure.query(async () => {
    return [
      {
        id: "1",
        title: "Todo 1",
        completed: false,
      },
    ];
  }),
});

export type AppRouter = typeof appRouter;
