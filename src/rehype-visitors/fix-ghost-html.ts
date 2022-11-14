import { visit } from 'unist-util-visit';
import { appendPostTrackingUtms } from '../utm_tracking';

export const visit_and_fix_ghost_html = (options: { title: string }) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node) {
    if (node.tagName.startsWith('h')) {
      node.properties.className = [`cms-heading-${node.tagName}`];
    } else if (node.tagName === 'a') {
      
      node.properties.href = appendPostTrackingUtms(node.properties.href, options.title)
      node.properties = {
        ...node.properties,
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    }
  }
};
