import { visit_and_fix_ghost_html } from "../rehype-visitors/fix-ghost-html";
import { visit_highlight_code } from "../rehype-visitors/highlight-code";
import { getLanguage } from "../translations/pathLangUtils";
import rehypePrism from 'rehype-prism-plus'
import rehypeParse from "rehype-parse";
import { unified } from "unified";
import stringify from "rehype-stringify";
import { Box, Heading, HStack, VStack, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { GhostHtmlPost } from "../components/GhostHtmlPost";
import { Seo, OgType } from "../components/Seo";
import { langStrings } from "../translations/langStrings";
import { Layout } from "../components/Layout";

export const Page = (data) => {
  const { og_description, html, title, updated_at, published_at } =
    data.data.page;
  const { pathname, href } = data.location;
  const language = getLanguage(pathname);

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(visit_highlight_code)
    .use(visit_and_fix_ghost_html, { title, language })
    // there is something with types I can't figure out
    // @ts-expect-error
    .use(rehypePrism)
    // @ts-expect-error
    .use(stringify)
    .processSync(html)
    .toString();

  return (
    <>
      <Seo
        title={title}
        description={og_description}
        pageLanguage={language}
        contentType={OgType.Article}
        canonicalUrl={href}
      />
      <Layout
        language={language}
        location={pathname}
        navigationPages={data.data.navigationPages}
      >
        <Stack
          mt={[6, 32]}
          mx={4}
          spacing={10}
          direction={["column", "row"]}
          mb={[6, 32]}
        >
          <VStack
            spacing={12}
            align={"stretch"}
            maxW={"4xl"}
            // borderWidth={'1px'}
            // borderColor={'gray.200'}
          >
            <Box textAlign="center">
              <Heading size={["lg", "2xl"]}>{title}</Heading>
            </Box>

            <HStack
              spacing={"8"}
              justifyContent={"center"}
              fontSize={["xs", "xs", "md"]}
            >
              <Text>{published_at}</Text>
            </HStack>

            <Box
              color={"gray.400"}
              textAlign="center"
            >
              <Text>
                {langStrings.last_time_updated[language]} {updated_at}
              </Text>
            </Box>
            <GhostHtmlPost content={content} />
          </VStack>
        </Stack>
      </Layout>
    </>
  );
};
