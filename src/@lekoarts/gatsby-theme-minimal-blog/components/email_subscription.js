/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw, { styled } from 'twin.macro'

const SubscriptionContainer = styled.section([
  // tailwind only style
  tw`rounded-2xl my-10`,
])

const SubscriptionSubcontainer = styled.div([
  tw`max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8`
])

const Heading = styled.h2([
  tw`text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`
])

const SubscriptionForm = ({ tags }) => {

  const [status, setStatus] = useState(null);
  const YOUR_FORM_ID = '1805281';
  const YOUR_SUBFORM_ID = '1791';
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

  const data = useStaticQuery(graphql`
    query {
        allTag {
        nodes {
            name
            id
        }
        }
    }
    `);

  const allTags = data.allTag.nodes;
  const tagMap = allTags.reduce((result, tag) => {
    result[tag.name] = tag.id;
    return result;
  }, {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch(
        YOUR_FORM_URL,
        {
          method: 'post',
          body: data,
          headers: {
            accept: 'application/json',
          },
        }
      );

      const json = await response.json();

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }

      setStatus('ERROR');
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <SubscriptionContainer sx={{backgroundColor: 'gray100'}}>
    <SubscriptionSubcontainer>
      <div css={[tw`flex sm:items-center mb-5`]}>
        <svg sx={{fill: 'text'}} css={[tw`mr-3 flex-shrink-0`]} height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 17.612v4.638a.751.751 0 001.354.444l2.713-3.692zM23.685.139a.75.75 0 00-.782-.054l-22.5 11.75a.752.752 0 00.104 1.375l6.255 2.138 13.321-11.39L9.775 16.377l10.483 3.583a.753.753 0 00.984-.599l2.75-18.5a.751.751 0 00-.307-.722z"/></svg>
        <Heading sx={{color: 'text'}}>Подпишись на рассылку!</Heading>
      </div>
      <p>
        Письма про продуктовую разработку, путешествия, спорт. Статьи и советы
        о мире IT, управлении и разработке!
      </p>
      <p>Спам отсутствует, отписка в один клик!</p>
      <form
        action={YOUR_FORM_URL}
        method="post"
        onSubmit={handleSubmit}
        css={[tw`mt-8 sm:flex`]}
      >
        <input
          type="email"
          aria-label="Your email"
          name="email_address"
          placeholder="Введите email..."
          css={[tw`appearance-none w-full px-5 py-3 mr-8 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-lg focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-2xl`]}
          required
        />
        {tags.map((tagName) => (
              <input
              key={tagMap[tagName]}
              id={`tag-${YOUR_SUBFORM_ID}-${tagMap[tagName]}`}
              type="checkbox"
              style={{ display: 'none' }}
              checked
              name="tags[]"
              value={tagMap[tagName]}
              />
        ))}
        <div css={[tw`mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0`]}>
        <button
          type="submit"
          css={[tw`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full focus:outline-none focus:shadow-lg transition duration-150 ease-in-out`]}
          sx={{
            backgroundColor: "toggleIcon",
            color: 'gray100',
            "&:hover": {
              opacity: "0.7",
            },
          }}
        >
          Подписаться 
        </button>
        </div>
      </form>
      {status === 'SUCCESS' && <div css={[tw`pt-5`]} sx={{color: 'text'}}><p>Успех! Следующий шаг — подтвердить свою подписку </p></div>}
      {status === 'ERROR' && <div css={[tw`pt-5`]} sx={{color: 'text'}}><p>Что-то пошло не так. Может, попробуешь еще раз?</p></div>}
      </SubscriptionSubcontainer>
      </SubscriptionContainer>
  );
};

export {SubscriptionForm};