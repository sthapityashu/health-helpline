export const HEALTHCENTER_API = () => ({
  get: `/healthcenters`,
});

export const DOCTORS_API = (slug: string) => ({
  get: `/healthcenters/doctor/${slug}`,
});
