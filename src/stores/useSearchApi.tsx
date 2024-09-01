import { useQuery } from "@tanstack/react-query";
import { SEARCH_API } from "@utils/data/api/api-route";
import { apiQuery } from "@utils/method/api-method";

const useSearchApi = (departmentId: number, clinicId: number) => {
  const {
    data: getSearchData,
    refetch: getSearchDataFetch,
    isFetching: getSearchDataFetching,
    isRefetchError: getSearchDataFetchError,
  } = useQuery({
    queryKey: ["useSearchApi", departmentId, clinicId],
    queryFn: () => apiQuery({ route: SEARCH_API(departmentId, clinicId).get }),
    enabled: !!departmentId && !!clinicId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  return {
    getSearchData,
    getSearchDataFetch,
    getSearchDataFetching,
    getSearchDataFetchError,
  };
};

export default useSearchApi;
