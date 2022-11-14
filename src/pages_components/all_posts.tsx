import React from 'react';
import { Layout } from '../components/Layout';
import { Listing } from '../components/Listing';
import { OgType, Seo } from '../components/Seo';
import { langStrings } from '../translations/langStrings';
import { getLanguage } from '../translations/pathLangUtils';

const AllPosts = ({
  data: {
    posts: { nodes },
    navigationPages,
  },
  location: { pathname, href },
}) => {
  const language = getLanguage(pathname);

  return (
    <>
      <Seo
        title={langStrings.listing_title[language]}
        description={langStrings.listing_description[language]}
        pageLanguage={language}
        contentType={OgType.Website}
        canonicalUrl={href}
      />
      <Layout
        navigationPages={navigationPages}
        language={language}
        location={pathname}
      >
        <Listing items={nodes} language={language} />
      </Layout>
    </>
  );
};

export default AllPosts;
