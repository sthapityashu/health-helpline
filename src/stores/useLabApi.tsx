import { useQuery } from "@tanstack/react-query";
import { LAB_API } from "@utils/data/api/api-route";
import { apiQuery } from "@utils/method/api-method";

const useLabApi = () => {
  const {
    data: getLabTest,
    refetch: getLabTestFetch,
    isFetching: getLabTestFetching,
    isRefetchError: getLabTestError,
  } = useQuery({
    queryKey: ["useLabApi"],
    queryFn: () => apiQuery({ route: LAB_API().get }),
  });

  return {
    getLabTest,
    getLabTestFetch,
    getLabTestFetching,
    getLabTestError,
  };
};

export default useLabApi;
