/* eslint react/prop-types: 0 */
import * as React from "react"
import { Text } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"


const components = {
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
  Title: ({ children, text, ...props }) => (
    <Title text={text} {...props}>
      {children}
    </Title>
  ),
  wrapper: ({ children }) => <>{children}</>,
}

export default components
