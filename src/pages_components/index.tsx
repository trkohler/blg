import { VStack } from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';
import { Layout } from '../components/Layout';
import { Listing } from '../components/Listing';
import NewsletterBox from '../components/NewsletterBox';
import { getLanguage } from '../translations/pathLangUtils';

type MainPageProps = {
  data: {
    posts: {
      nodes: {
        updated_at: string;
        uuid: string;
        slug: string;
        title: string;
        excerpt: string;
        timeToRead: number;
        tags: {
          name: string;
          slug: string;
          accent_color: string;
          visibility: string;
        }[]
      }[]
    }
    navigationPages: {
      nodes: {
        slug: string;
        title: string;
      }[]
    }
  }
  location: {
    pathname: string;
  }
}

export const Blog = ({data: { posts: { nodes }, navigationPages }, location: { pathname }}: MainPageProps) => {
  const language = getLanguage(pathname);

  return (
    <Layout language={language} navigationPages={navigationPages} location={pathname}>
      <VStack spacing={20}>
        <Hero language={language} />
        <NewsletterBox language={language} />
        <Listing items={nodes} language={language} />
      </VStack>
    </Layout>
  );
};
