import React from 'react';
import { Layout } from '../components/Layout';
import { Listing } from '../components/Listing';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { getLanguage } from '../translations/defineLangRuntime';
import { getLangPathes } from '../translations/langStrings';

const AllPosts = ({data: { posts: { nodes }, navigationPages }, location: { pathname }}) => {
  const site = useSiteMetadata();
  const language = getLanguage(pathname);
  const langPathes = getLangPathes(site.siteLanguage);

  return (
    <Layout navigationPages={navigationPages} language={language}>
      <Listing items={nodes} language={language} />
    </Layout>
  );
};

export default AllPosts;
