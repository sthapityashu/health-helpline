import axios from "axios";

export const HEALTHCENTER_API = () => ({
  get: `/healthcenters`,
});

export const DOCTORS_API = (slug: string) => ({
  get: `/healthcenters/doctor/${slug}`,
});

export const SEARCH_API = (departmentId: number, clinicId: number) => ({
  get: `/healthcenters/search-doctor/${departmentId}/${clinicId}`,
});

export const LAB_API = () => ({
  get: `/healthcenters/labtest`,
});

export const TEST_API = () => ({
  get: `/get_hospitals.php?state=NC`,
});

// export const HealthCenters_API = async () => {
//   const url = "https://api.healthhelpline.com.np/healthcenters";
//   const options = {
//     method: "GET",
//   };

//   // const res = await axios.get(url);
//   const res = await fetch(url, options);

//   console.log("Response", res);

//   if (!res.ok) {
//     throw new Error("Failed to fetch movies");
//   }
//   const json = await res.json();
//   return json;
// };
