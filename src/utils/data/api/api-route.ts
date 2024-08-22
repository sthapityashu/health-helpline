export const HEALTHCENTER_API = () => ({
  get: `/healthcenters`,
});

export const DOCTORS_API = (slug: string) => ({
  get: `/healthcenters/doctor/${slug}`,
});

export const SEARCH_API = (departmentId: number, clinicId: number) => ({
  get: `/healthcenters/search-doctor/${departmentId}/${clinicId}`,
});

// export const TEST_API = () => ({
//   get: `/get_hospitals.php?state=NC`,
// });
