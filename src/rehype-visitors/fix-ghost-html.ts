import { visit } from 'unist-util-visit';
import { LanguageUnion } from '../translations/langStrings';
import { appendPostTrackingUtms } from '../utm_tracking';

export const visit_and_fix_ghost_html = (options: { title: string, language: LanguageUnion }) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node) {
    if (node.tagName.startsWith('h')) {
      node.properties.className = [`cms-heading-${node.tagName}`];
    } else if (node.tagName === 'a') {
      
      node.properties.href = appendPostTrackingUtms(options.title, options.language, node.properties.href)
      node.properties = {
        ...node.properties,
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    }
  }
};
