import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  useColorModeValue,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { langStrings, LanguageUnion } from "../translations/langStrings";

const PUBLIC = "1CygchWDx8HhwS_WPfOUmA";
const formsMap: Record<LanguageUnion, string> = {
  en: "1805281",
  uk: "6265154",
  ru: "6265174",
};

enum SubscriptionStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

const NewsletterBoxCondenced = ({ language }: { language: LanguageUnion }) => {
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const formId = formsMap[language];
  const FORM_URL = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

  const bgGray = useColorModeValue("gray.100", "gray.700");
  const headingGray = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("white", "gray.600");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.target as HTMLFormElement)
      .getAll("email_address")
      .pop();
    const body = JSON.stringify({ email, api_key: PUBLIC });

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "accept": "application/json",
        },
      });

      if (response.ok) {
        setStatus(SubscriptionStatus.SUCCESS);
      } else {
        setStatus(SubscriptionStatus.ERROR);
      }
    } catch (err) {
      setStatus(SubscriptionStatus.ERROR);
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      bgColor={bgGray}
      borderRadius={"36"}
      shadow="sm"
    >
      <VStack
        p={[8, 24]}
        spacing={[2, 8]}
        textAlign="center"
      >
        <Heading
          as={"h3"}
          size={["md", "xl"]}
          color={headingGray}
        >
          {langStrings.newsletter_small_box_heading[language]}
        </Heading>
        <Text>{langStrings.newsletter_small_box_text[language]}</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <HStack>
              <Input
                id="email_address"
                name="email_address"
                type="email"
                placeholder={langStrings.newsletter_placeholder[language]}
                bgColor={inputBg}
                isRequired
              />

              <Button
                py={4}
                type="submit"
                bgColor={"gray.700"}
                color={"gray.200"}
                _hover={{
                  bgColor: "gray.600",
                }}
              >
                <Text p={6}>{langStrings.newsletter_button[language]}</Text>
              </Button>
            </HStack>
            {status === SubscriptionStatus.SUCCESS && (
              <FormHelperText color={"green.400"}>
                {langStrings.subscription_success[language]}
              </FormHelperText>
            )}
            {status === SubscriptionStatus.ERROR && (
              <FormErrorMessage>
                {langStrings.subscription_error[language]}
              </FormErrorMessage>
            )}
          </FormControl>
        </form>
      </VStack>
    </Flex>
  );
};

export default NewsletterBoxCondenced;
