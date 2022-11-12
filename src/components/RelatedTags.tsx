import { HStack, Icon, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Tag from '../pages_components/tag';
import { langStrings, LanguageUnion } from '../translations/langStrings';

export type RelatedTag = {
  name: string;
  slug: string;
};

export const RelatedTags = ({
  currentTag,
  language,
  relatedTags,
}: {
  currentTag: Tag;
  language: LanguageUnion;
  relatedTags: RelatedTag[];
}) => {
  const relatedTagsWithoutCurrent = relatedTags.filter(
    (relatedTag: RelatedTag) => relatedTag.slug !== currentTag.slug
  );
  const lastRelatedTag =
    relatedTagsWithoutCurrent[relatedTagsWithoutCurrent.length - 1];
  const linkToTheLastRelatedTag = `/${lastRelatedTag.slug}/`;
  const relatedTagsWithoutLast = relatedTagsWithoutCurrent.slice(0, -1);
  return (
    <HStack fontSize={'md'} w={'70%'} color={'gray.400'}>
      <Text>{langStrings.more_tags_text[language]}</Text>
      {relatedTagsWithoutLast.map((tag) => {
        const path = `/${tag.slug}/`;
        return (
          <>
            <Link to={path}>{tag.name}</Link>
            <Icon as={GoPrimitiveDot} />
          </>
        );
      })}
      <Link to={linkToTheLastRelatedTag}>{lastRelatedTag.name}</Link>
    </HStack>
  );
};
