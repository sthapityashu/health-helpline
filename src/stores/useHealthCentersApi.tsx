import { useQuery } from "@tanstack/react-query";
import { HEALTHCENTER_API } from "@utils/data/api/api-route";
import { apiQuery } from "@utils/method/api-method";

const useHealthCentersApi = () => {
  const {
    data: getHealthCenters,
    refetch: getHealthCentersFetch,
    isFetching: getHealthCentersFetching,
    isRefetchError: getHealthCentersFetchError,
  } = useQuery({
    queryKey: ["useHealthCentersApi"],
    queryFn: () => apiQuery({ route: HEALTHCENTER_API().get }),
    // queryFn: () => apiQuery({ route: TEST_API().get }),
  });
  return {
    getHealthCenters,
    getHealthCentersFetch,
    getHealthCentersFetching,
    getHealthCentersFetchError,
  };
};

export default useHealthCentersApi;
