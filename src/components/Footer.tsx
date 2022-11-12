import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from './Link';
import { Logo } from './Logo';
import SocialButton from './SocialButton';
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { langStrings, LanguageUnion } from '../translations/langStrings';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { constructPath } from '../translations/constructCommonPath';

type FooterProps = {
  language: LanguageUnion;
  navigationPages: {
    nodes: {
      slug: string;
      title: string;
    }[];
  };
};

const Footer = ({ language, navigationPages, ...props }: FooterProps) => {
  let lastPage;
  let remainingPages;
  if (navigationPages.nodes) {
    lastPage = navigationPages.nodes[navigationPages.nodes.length - 1];
    remainingPages = navigationPages.nodes.slice(0, -1);
  }

  const sitemetada = useSiteMetadata();
  const { postsPath, tagsPath, baseLanguage } = sitemetada;
  return (
    <div>
      <Box>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
        >
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link to={constructPath('', language)}>
              {langStrings.home_link_header[language]}
            </Link>
            <Link to={constructPath(postsPath, language)}>
              {langStrings.all_posts_link[language]}
            </Link>
            <Link to={constructPath(tagsPath, language)}>
              {langStrings.all_tags_link[language]}
            </Link>
            {/* {remainingPages &&
              remainingPages.map((page) => (
                <Link to={`/${page.slug}/`}>{page.title}</Link>
              ))}
            {lastPage && (
              <Link to={`/${lastPage.slug}/`}>{lastPage.title}</Link>
            )} */}
          </Stack>
        </Container>
        <Box borderTopWidth={1} borderStyle={'solid'}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} to={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} to={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} to={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Linkedin'} to={'#'}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
