import { Container, Grid } from '@mui/material'
import React from 'react'
import Article from './Article'

export default function ArticlesList() {
    return (
        <Container>
            <Grid container>
                <Grid item md={4} xs={6}>
                    <Article />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Article />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Article />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Article />
                </Grid>
            </Grid>
        </Container>
    )
}
