import React from 'react';
import { Layout } from '../components/Layout';
import { Listing } from '../components/Listing';
import { getLanguage } from '../translations/pathLangUtils';

const AllPosts = ({
  data: {
    posts: { nodes },
    navigationPages,
  },
  location: { pathname },
}) => {
  const language = getLanguage(pathname);

  return (
    <Layout
      navigationPages={navigationPages}
      language={language}
      location={pathname}
    >
      <Listing items={nodes} language={language} />
    </Layout>
  );
};

export default AllPosts;
