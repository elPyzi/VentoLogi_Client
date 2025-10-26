import { QueryClient } from "@tanstack/query-core";
import { QUERY_REFETCH_INTERVAL_IN_BACKGROUBD, QUERY_RETRY } from "@/_core/constants";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: QUERY_RETRY,
      refetchIntervalInBackground: QUERY_REFETCH_INTERVAL_IN_BACKGROUBD,
    },
  },
});
