import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export const visit_highlight_code = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parentNode) {
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'markdown';
      node.properties.className = [`language-${lang}`];
      node.properties.className.push(`codeblock-gatsby`)
    }
  }
};
