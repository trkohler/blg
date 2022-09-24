import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { constructPath } from '../translations/constructCommonPath';
import { langStrings, LanguageUnion } from '../translations/langStrings';
import MenuItem from './MenuItem';

type MenuLinksProps = {
  isOpen: boolean;
  language: LanguageUnion;
  navigationPages: {
    nodes: {
      slug: string;
      title: string;
    }[];
  };
};

function MenuLinks({ isOpen, language, navigationPages }: MenuLinksProps) {
  const lastPage = navigationPages.nodes[navigationPages.nodes.length - 1];
  const remainingPages = navigationPages.nodes.slice(0, -1);
  const sitemetada = useSiteMetadata();
  const {allPostsPathTemplate, allTagsPathTemplate} = sitemetada;
  
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/" isLast={false}>
          {langStrings.home_link_header[language]}
        </MenuItem>
        <MenuItem to={constructPath(allPostsPathTemplate, language)} isLast={false}>
          {langStrings.all_posts_link[language]}
        </MenuItem>
        <MenuItem to={constructPath(allTagsPathTemplate, language)} isLast={false}>
          {langStrings.all_tags_link[language]}
        </MenuItem>
        {remainingPages.map((page) => (
          <MenuItem to={`/${page.slug}/`} isLast={false}>
            {page.title}
          </MenuItem>
        ))}
        {lastPage && (
          <MenuItem to={`/${lastPage.slug}`} isLast={true}>
            {lastPage.title}
          </MenuItem>
        )}
      </Stack>
    </Box>
  );
}

export default MenuLinks;
