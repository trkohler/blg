import { visit } from 'unist-util-visit';

export const visit_mark_headings = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node) {
    if (node.tagName.startsWith('h')) {
      node.properties.className = [`cms-heading-${node.tagName}`];
    }
  }
};
