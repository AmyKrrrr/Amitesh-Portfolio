export const blogPosts = [
  {
    id: 1,
    title: "Witnessing a Real Placement Interview",
    post: "01-witnessed-interview",
    date: "2026-05-16",
    description: "abcd"
  }
];

// // Automatically sort from newest to oldest based on the date string
export const posts = blogPosts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});