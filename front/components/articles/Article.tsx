import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';

interface ArticleData {
  id: string;
  attributes: Props;
}

interface Props {
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

export default function Article(props: ArticleData) {
  const thumbnailUrl = 'http://localhost:1337' + props.attributes.photos.data[0]?.attributes.formats.thumbnail.url;
  return (
    <Card sx={{ maxWidth: 345, mb: '50px' }}>
      <CardMedia sx={{ height: 140 }} image={thumbnailUrl} title={props.attributes.photos.data[0]?.attributes.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.attributes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.attributes.introduction}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.attributes.slug}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/article/${props.attributes.category}/${props.id}/${props.attributes.slug}`} passHref>
          <Button size="small">Read</Button>
        </Link>
        <Button size="small">Learn Moire</Button>
      </CardActions>
    </Card>
  );
}
