import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { LanguageUnion } from "../translations/langStrings";
import LanguageSelector from "./LanguageSelector";
import { Logo } from "./Logo";
import MenuItem from "./MenuItem";
import MenuLinks from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import { ThemeModeToggler } from "./ThemeModeToggle";

type HeaderProps = {
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

export const Header = ({
  language,
  navigationPages,
  location,
  ...props
}: HeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <NavBarContainer {...props}>
        <Logo w="100px" />
        <MenuToggle
          toggle={toggle}
          isOpen={isOpen}
        />
        <MenuLinks
          isOpen={isOpen}
          language={language}
          navigationPages={navigationPages}
        />

        <LanguageSelector location={location} />
        <ThemeModeToggler />
      </NavBarContainer>
    </header>
  );
};
