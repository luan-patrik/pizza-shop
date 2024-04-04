import type { AppRouter } from "@/server/index";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/trpc`,

          async headers() {
            return {};
          },
        }),
      ],
    };
  },

  ssr: false,
});
