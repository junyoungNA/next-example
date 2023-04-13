import { GetStaticPaths } from 'next';
import React from 'react';
import { getAllJSDocTags } from 'typescript';

const Post = () => {
  return <div></div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
};
