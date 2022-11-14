import { Actions, Reporter } from 'gatsby';
import { resolve } from 'path';
import { LanguageUnion } from './src/translations/langStrings';

type BasePath = {
  path: string;
  type: string;
};

type PostNode = {
  slug: string;
  tags: TagNode[];
};

type TagNode = {
  slug: string;
  visibility: string;
  description: string;
};

type PageNode = {
  slug: string;
  tags: TagNode[];
};

const getLangSlug = (baseLang: string, slug: string) => {
  return slug ? slug : baseLang;
};

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: {
  actions: Actions;
  graphql: Function;
  reporter: Reporter;
}): Promise<void> => {
  const { createPage } = actions;

  const templatesMap = new Map([
    [`post`, `src/queries/post.tsx`],
    [`tag`, `src/queries/tag.tsx`],
    [`page`, `src/queries/page.tsx`],
    [`main_page`, `src/queries/main_page.tsx`],
    [`posts`, `src/queries/posts.tsx`],
    [`tags`, `src/queries/tags.tsx`],
  ]);

  const result = await graphql(`
    query RenderSiteQuery {
      site {
        siteMetadata {
          baseLanguage
          description
          siteUrl
          title
          otherLanguages
        }
      }
      tags: allGhostTag {
        nodes {
          slug
          visibility
          description
        }
      }
      posts: allGhostPost {
        nodes {
          slug
          tags {
            visibility
            slug
            description
          }
        }
      }
      pages: allGhostPage {
        nodes {
          slug
          tags {
            visibility
            slug
            description
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  let {
    site: {
      siteMetadata: { baseLanguage, otherLanguages },
    },
    tags,
    posts,
    pages,
  } = result.data;

  const correctTags = tags.nodes.filter(
    (tag: TagNode) => tag.visibility === 'public'
  );
  const languagesMap = new Map();

  const basePathes = [
    { path: ``, type: `main_page` },
    { path: `posts`, type: `posts` },
    { path: `tags`, type: `tags` },
  ];

  basePathes.forEach((basePath: BasePath): void => {
    const template = templatesMap.get(basePath.type);
    otherLanguages.forEach((lang: LanguageUnion): void => {
      const constructedPath = basePath.path
        ? `/${lang}/${basePath.path}/`
        : `/${lang}/`;
      const preparedGlob = `*${lang}*`;

      const context = {
        langSlug: lang,
        preparedGlob,
      };
      createPage({
        path: constructedPath,
        component: resolve(template as string),
        context,
      });
    });

    createPage({
      path: basePath.path ? `/${basePath.path}/` : `/`,
      component: resolve(template as string),
      context: {
        langSlug: baseLanguage,
        preparedGlob: `*${baseLanguage}*`,
      },
    });
  });

  posts.nodes.forEach((post: PostNode) => {
    const { slug, tags } = post;
    const internalTag = tags.find((tag) => tag.visibility === 'internal');
    if (internalTag) {
      const langSlug = getLangSlug(baseLanguage, internalTag.slug);
      languagesMap.set(slug, [langSlug, 'post', 'posts']);
    }
  });

  // pages.nodes.forEach((page: PageNode) => {
  //   const { slug, tags } = page;
  //   const internalTag = tags.find((tag) => tag.visibility === 'internal');
  //   if (internalTag) {
  //     const langSlug = getLangSlug(baseLanguage, internalTag.slug);
  //     languagesMap.set(slug, [langSlug, 'page']);
  //   }
  // });

  correctTags.forEach((tag: TagNode) => {
    const { slug, description } = tag;
    const langSlug = description.split('#')[1];
    languagesMap.set(slug, [langSlug, 'tag', 'tags']);
  });

  languagesMap.forEach(([langSlug, type, pathPrefix], slug) => {
    const template = templatesMap.get(type);

    if (!template) {
      reporter.panicOnBuild(`Template not found for ${type}`);
    }

    const path =
      langSlug == baseLanguage
        ? `/${pathPrefix}/${slug}/`
        : `/${langSlug}/${pathPrefix}/${slug}/`;

    const preparedGlob = `*${langSlug}*`;

    const context = {
      langSlug,
      slug,
      preparedGlob,
    };
    createPage({
      path,
      component: resolve(template as string),
      context,
    });
  });
};
