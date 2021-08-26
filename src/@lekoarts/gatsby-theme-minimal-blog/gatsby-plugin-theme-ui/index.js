import { merge } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import { tailwind } from '@theme-ui/presets'

let theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.purple[7],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    orange50: 'rgba(227, 131, 86, 0.2)',
    orange400: '#e38356',
    gray100: tailwind.colors.gray[2],
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.purple[5],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
        orange50: '#2f2d2b',
        orange400: '#e38356',
        gray100: tailwind.colors.gray[8]
      },
    },
  },
  fonts: {
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  copyButton: {
    backgroundColor: transparentize(`primary`, 0.8),
    border: `none`,
    color: `gray.2`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `default`,
    '&[disabled]': {
      cursor: `not-allowed`,
    },
    ':not([disabled]):hover': {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    top: 0,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ':hover': {
        color: `heading`,
        textDecoration: `underline`,
      },
      ':focus': {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
  post: {
    ghostPost: {
      img: {
        m: `auto`,
        height: `auto`,
        maxWidth: `full`,
        // maxHeight: `100vh`,
        pb: 4,
      },
      p: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        '--baseline-multiplier': 0.179,
        '--x-height-multiplier': 0.35,
        wordBreak: `break-word`,
        py: 2,
      },
      iframe: {
        my: 5,
        height: `80vh !important`,
        minWidth: '100%',
      },
      ul: {
        li: {
          fontSize: [1, 1, 2],
          letterSpacing: `-0.003em`,
          lineHeight: `body`,
          '--baseline-multiplier': 0.179,
          '--x-height-multiplier': 0.35,
        },
      },
      ol: {
        li: {
          fontSize: [1, 1, 2],
          letterSpacing: `-0.003em`,
          lineHeight: `body`,
          '--baseline-multiplier': 0.179,
          '--x-height-multiplier': 0.35,
        },
      },
      h1: {
        variant: `text.heading`,
        fontSize: [5, 6, 6, 7],
        my: 4,
      },
      h2: {
        variant: `text.heading`,
        fontSize: [4, 5, 5, 6],
        my: 4,
      },
      h3: {
        variant: `text.heading`,
        fontSize: [3, 4, 4, 5],
        my: 4,
      },
      h4: {
        variant: `text.heading`,
        fontSize: [2, 3, 3, 4],
        my: 3,
      },
      h5: {
        variant: `text.heading`,
        fontSize: [1, 2, 2, 3],
        my: 3,
      },
      h6: {
        variant: `text.heading`,
        fontSize: 1,
        mb: 2,
      },
      blockquote: {
        borderLeftStyle: `solid`,
        borderLeftWidth: `6px`,
        borderColor: tailwind.colors.red[3],
        mx: 0,
        mt: 4,
        pl: 4,
        mb: 2,
        variant: `post.ghostPost.p`,
      },
      table: {
        width: `100%`,
        my: 4,
        borderCollapse: `separate`,
        borderSpacing: 0,
        [[`th`, `td`]]: {
          textAlign: `left`,
          py: `4px`,
          pr: `4px`,
          pl: 0,
          borderColor: `muted`,
          borderBottomStyle: `solid`,
        },
      },
      th: {
        verticalAlign: `bottom`,
        borderBottomWidth: `2px`,
        color: `heading`,
      },
      td: {
        verticalAlign: `top`,
        borderBottomWidth: `1px`,
      },
      hr: {
        mx: 0,
      },
    },
  },
})

export default theme
