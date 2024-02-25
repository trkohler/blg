import { Container } from "@chakra-ui/react";
import * as React from "react";
import { LanguageUnion } from "../translations/langStrings";
import Footer from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  language: LanguageUnion;
  navigationPages?: {
    edges: {
      node: {
        slug: string;
        title: string;
      };
    }[];
  };
  location?: string;
};

export const Layout = ({
  children,
  language,
  navigationPages,
  location,
}: LayoutProps) => {
  return (
    <React.Fragment>
      <Container
        maxW="container.xl"
        p={0}
      >
        <Header
          language={language}
          navigationPages={navigationPages}
          location={location}
        />
        <div>{children}</div>
        <Footer
          language={language}
          navigationPages={navigationPages}
        />
      </Container>
    </React.Fragment>
  );
};
