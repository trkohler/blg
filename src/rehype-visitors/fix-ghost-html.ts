import { visit } from 'unist-util-visit';

export const visit_and_fix_ghost_html = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node) {
    if (node.tagName.startsWith('h')) {
      node.properties.className = [`cms-heading-${node.tagName}`];
    } else if (node.tagName === 'a') {
      node.properties = {
        ...node.properties,
        target: "_blank",
        rel: "noopener noreferrer"
      }
    }
  }
};
