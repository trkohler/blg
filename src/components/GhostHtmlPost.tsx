import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { Component } from 'react';

async function copyCode(block) {
  let code = block.querySelector('code');
  let text = code.innerText;

  await navigator.clipboard.writeText(text);
}

export class GhostHtmlPost extends Component<{ content: string }, {}> {
  componentDidMount(): void {
    let blocks = document.querySelectorAll('pre');

    blocks.forEach((block) => {
      let button = document.createElement('button');
      button.innerText = 'Copy Code';
      button.className = 'ghost-copy-code-button';
      block.appendChild(button);

      button.addEventListener('click', async () => {
        await copyCode(block);
      });
    });
  }
  render() {
    // const linkBaseBlue = useColorModeValue('blue.800', 'blue.400');

    return (
      <Flex
        px={[0, 16]}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
        fontSize={['xs', 'xl']}
        flexDirection={'column'}
        justifyContent={'center'}
        gap={4}
        sx={{
          '.cms-heading-h3': {
            fontSize: '2xl',
            py: 4,
          },
          h2: {
            fontSize: '3xl',
            py: 4,
          },
          '.codeblock-gatsby': {
            fontSize: 'sm',
          },
          a: {
            textDecoration: 'underline',
            color: 'blue.500',
          },
          'a:hover': {
            color: 'blue.300',
          },
          figcaption: {
            color: 'gray.400',
            fontSize: 'xs',
            paddingBottom: 10,
          },
          '.kg-code-card': {
            textAlign: 'center',
          },
          'p > code': {
            fontWeight: 'bold',
            backgroundColor: 'yellow.100',
            p: 1,
          },
          ul: {
            mx: 6,
          },
          li: {
            py: 1,
          },
        }}
      ></Flex>
    );
  }
}
