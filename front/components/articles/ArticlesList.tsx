import { Container, Grid } from '@mui/material';
import React from 'react';
import Article from './Article';

interface ArticleData {
  id: string;
  attributes: Props;
}

interface Props {
  id: string;
  keywords: string;
  introduction: string;
  blockOne: string;
  blockTwo: string;
  outro: string;
  category: string;
  title: string;
  slug: string;
  photos: {
    data: [
      {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: null | any;
          createdAt: string;
          updatedAt: string;
        };
      }
    ];
  };
}

interface ArticleData {
  id: string;
  attributes: Props;
}

async function getArticles(): Promise<{ data: ArticleData[] }> {
  const res = await fetch('http://localhost:1337/api/articles?populate=*', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ArticlesList() {
  const articles = await getArticles();  
  return (
    <Container sx={{mt:'50px'}}>
      <Grid container>
        {articles.data.map((articleData: ArticleData) => (
          <Grid item key={articleData.id} md={4} xs={6}>
            <Article {...articleData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
