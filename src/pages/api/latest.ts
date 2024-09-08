import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';

const POSTS_PER_PAGE = 2;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postsDirectory = path.join(process.cwd(), 'md/post');
  const fileNames = fs.readdirSync(postsDirectory);
  
  // Read and parse all markdown files
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const slug = fileName.replace(/\.md$/, '');

    return {
      ...data,
      slug: fileName.replace(/\.md$/, ''),
      url: `/${slug}`,
    };
  });

  // Sort posts by date (descending)
  let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Req Params
  const { page = 1, searchQuery = '' } = req.query;

  // Filter
  if (searchQuery) {
    const queryLower = searchQuery.toString().toLowerCase();
    sortedPosts = sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(queryLower) ||
        (post.description && post.description.toLowerCase().includes(queryLower)) ||
        (post.tag && post.tag.toLowerCase().includes(queryLower))
    );
  }

  // Pagination
  const paginatedPosts = sortedPosts.slice((+page - 1) * POSTS_PER_PAGE, +page * POSTS_PER_PAGE);

  res.status(200).json({
    posts: paginatedPosts,
    totalPosts: sortedPosts.length,
    totalPages: Math.ceil(sortedPosts.length / POSTS_PER_PAGE),
  });
}
