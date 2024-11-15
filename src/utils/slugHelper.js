import slugify from 'slugify';

export const generateSlug = (courseName, city) => {
  // Create slugs for both course name and city
  const courseSlug = slugify(courseName, { lower: true, strict: true });
  const citySlug = slugify(city, { lower: true, strict: true });

  // Return the complete slug
  return `${courseSlug}-in-${citySlug}`;
};