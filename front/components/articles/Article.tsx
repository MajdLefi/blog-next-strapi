import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ArticleData {
  id: string;
  attributes: Props;
}

interface Props {
  id: number;
  keywords: string[];
  introduction: string;
  blockOne: string;
  blockTwo: string;
  outro: string;
  category: string;
  title: string;
}

export default function Article(props: Props) {
  return (
    <Card sx={{ maxWidth: 345, mb: '50px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography color="text.secondary">{props.introduction}</Typography>
        {/* Add other content based on your requirements */}
      </CardContent>
    </Card>
  );
}
