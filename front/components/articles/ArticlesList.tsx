import { Container, Grid } from '@mui/material';
import React from 'react';
import Article from './Article';

// Define Props interface and export it
export interface Props {
  id: number;
  keywords: string[];
  introduction: string;
  blockOne: string;
  blockTwo: string;
  outro: string;
  category: string;
  title: string;
}

interface ArticleData {
  id: string;
  attributes: Props;
}

async function getArticles(): Promise<{ data: ArticleData[] }> {
  const res = await fetch('http://localhost:1337/api/articles', { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ArticlesList() {
  const articles = await getArticles();
  console.log(articles.data);
  return (
    <Container>
      <Grid container>
        {articles.data.map((articleData: ArticleData) => (
          <Grid item key={articleData.id} md={4} xs={6}>
            <Article {...articleData.attributes} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
