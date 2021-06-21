import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw, { styled } from 'twin.macro'

const SubscriptionContainer = styled.div([
  // tailwind only style
  tw`bg-white rounded-2xl shadow-lg my-10`,
])

const SubscriptionSubcontainer = styled.div([
  tw`max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8`
])

const Heading = styled.h2([
  tw`text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10`
])

const SubscriptionForm = ({ tags, topic }) => {

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
    <SubscriptionContainer>
    <SubscriptionSubcontainer>
    <Heading>
      Любишь {topic}? (ノ・∀・)ノ Я тоже! 
      {/* <br css={[tw`hidden sm:inline`]} /> */}
      <span css={[tw`text-indigo-600 px-2`]}>Давай оставаться на связи.</span> 
    </Heading>
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
          placeholder="Email ╰(°ㅂ°)╯"
          css={[tw`appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-lg focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs`]}
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
        <div css={[tw`mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0`]}>
        <button
          type="submit"
          css={[tw`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-lg transition duration-150 ease-in-out`]}
        >
          Подписаться 
        </button>
        </div>
      </form>
      {status === 'SUCCESS' && <div css={[tw`pt-5 text-gray-600`]}><p>Успех! Следующий шаг — подтвердить свою подписку </p></div>}
      {status === 'ERROR' && <div css={[tw`pt-5 text-gray-600`]}><p>Что-то пошло не так. Может, попробуешь еще раз?</p></div>}
      </SubscriptionSubcontainer>
      </SubscriptionContainer>
  );
};

export {SubscriptionForm};