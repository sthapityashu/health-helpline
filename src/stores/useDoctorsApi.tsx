import { useQuery } from "@tanstack/react-query";
import { DOCTORS_API } from "@utils/data/api/api-route";
import { apiQuery } from "@utils/method/api-method";

const useDoctorssApi = (slug: string) => {
  const {
    data: getDoctors,
    refetch: getDoctorssFetch,
    isFetching: getDoctorssFetching,
    isRefetchError: getDoctorssFetchError,
  } = useQuery({
    queryKey: ["useDoctorsApi", slug],
    queryFn: () => apiQuery({ route: DOCTORS_API(slug).get }),
  });

  return {
    getDoctors,
    getDoctorssFetch,
    getDoctorssFetching,
    getDoctorssFetchError,
  };
};

export default useDoctorssApi;
