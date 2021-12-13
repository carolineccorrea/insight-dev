import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import axios from '../../utils/axios';
import NavBar from './NavBar';
import PostCard from '../../../components/PostCard';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));


function Feed() {
  const classes = useStyles();
  const posts = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Carol',
        username: 'carol',
        avatar: '/images/avatars/avatar_1.jpeg',
      },
      title: 'Conceitos Básicos de SOLID',
      date: 'April 7, 2021',
      description: 'Fala pessoal! Qual o framework favorito de vcs?',
      hashtags: '#solid, #cleancode',
      image: '/images/posts/clean.png',
    },
    {
      id: 2,
      author: {
        id: 1,
        name: 'Carol',
        username: 'carol',
        avatar: '/images/avatars/avatar_1.jpeg',
      },
      title: 'Comparativo function generators e async promises - Performance',
      date: 'April 1, 2021',
      description:
        'Quer saber a diferença dos dois?',
      hashtags: '#framework, #javascript',
      image: '/images/posts/javascript.jpg',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Hidden smDown>
          <NavBar />
        </Hidden>
        <div className={classes.root}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;