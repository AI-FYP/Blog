import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Container, Typography, Box } from '@mui/material';

import PageLayout from '../layouts/PageLayout';


interface PostProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
  return (
    <PageLayout>
      <Typography variant="h4" gutterBottom>
        Blog Post
      </Typography>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { getMarkdownFiles } = await import('../lib/markdown');
  const files = getMarkdownFiles('md');
  const paths = files.map((file) => {
    const slug = file.replace(/^md\//, '').replace(/\.md$/, '').split('/');
    return { params: { slug } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fs = (await import('fs')).default;
  const path = (await import('path')).default;
  const slug = params?.slug ? (params.slug as string[]).join('/') : 'index';
  const filePath = path.join(process.cwd(), 'md', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);

  return { props: { content } };
};


export default Post;
