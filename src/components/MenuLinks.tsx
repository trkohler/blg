import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { useSiteMetadata } from "../hooks/use-site-medatadata";
import { constructPath } from "../translations/constructCommonPath";
import { langStrings, LanguageUnion } from "../translations/langStrings";
import MenuItem from "./MenuItem";

type MenuLinksProps = {
  isOpen: boolean;
  language: LanguageUnion;
  navigationPages?: {
    edges: {
      node: {
        slug: string;
        title: string;
      };
    }[];
  };
};

function MenuLinks({ isOpen, language, navigationPages }: MenuLinksProps) {
  let lastPage;
  let remainingPages;
  const length = navigationPages?.edges?.length || 0;
  if (navigationPages && length > 0) {
    lastPage = navigationPages?.edges.slice(-1)[0].node;
    remainingPages = navigationPages?.edges
      .slice(0, -1)
      .map((edge) => edge.node);
  }

  const sitemetada = useSiteMetadata();
  const { postsPath, tagsPath } = sitemetada;

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem
          to={constructPath("", language)}
          isLast={false}
        >
          {langStrings.home_link_header[language]}
        </MenuItem>
        <MenuItem
          to={constructPath(postsPath, language)}
          isLast={false}
        >
          {langStrings.all_posts_link[language]}
        </MenuItem>
        <MenuItem
          to={constructPath(tagsPath, language)}
          isLast={false}
        >
          {langStrings.all_tags_link[language]}
        </MenuItem>
        {remainingPages &&
          remainingPages.map((page) => (
            <MenuItem
              to={`/${page.slug}/`}
              isLast={false}
            >
              {page.title}
            </MenuItem>
          ))}
        {lastPage && (
          <MenuItem
            to={`/${lastPage.slug}`}
            isLast={true}
          >
            {lastPage.title}
          </MenuItem>
        )}
      </Stack>
    </Box>
  );
}

export default MenuLinks;
