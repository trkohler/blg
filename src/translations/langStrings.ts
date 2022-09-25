export const langStrings = {
    // main page
    hero_first_part: {
        en: `Hi 👋🏻 I'm Troy Köhler 🇺🇦, and this is my blog.`,
        ru: `Привет 👋🏻 меня зовут Трой Келер 🇺🇦, и это мой блог.`,
        uk: `Доброго дня 👋🏻 мене звати Трой Келер 🇺🇦, і це мій блог.`,
    },
    hero_second_part: {
        en: `I'm writing on Finances, Books, living abroad and my own life experiences.`,
        ru: `Я пишу о деньгах, книгах, жизни за границей и моем личном опыте.`,
        uk: `Я пишу про гроші, книги, життя за кордоном та мій персональний досвід.`,
    },
    home_link_header: {
        en: `Home`,
        ru: `На главную`,
        uk: `На головну`,
    },
    newsletter_title: {
        en: `Newsletter`,
        ru: `Подписка на емейл рассылку`,
        uk: `Підписка на емейл розсилку`,
    },
    newsletter_subtitle: {
        en: `Get a behind the scenes look at what I'm currently learning, exploring, and creating.`,
        ru: ``,
        uk: ``,
    },
    newsletter_description: {
        en: `Subscribe to my newsletter to receive a monthly digest containing:`,
        ru: ``,
        uk: ``,
    },
    newsletter_li_one: {
        en: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
        ru: ``,
        uk: ``,
    },
    newsletter_li_two: {
        en: `Assumenda, quia temporibus eveniet a libero incidunt suscipit`,
        ru: ``,
        uk: ``,
    },
    newsletter_li_three: {
        en: `Quidem, ipsam illum quis sed voluptatum quae eum fugit earum`,
        ru: ``,
        uk: ``,
    },
    newsletter_placeholder: {
        en: `Email address`,
        ru: `Почтовый адрес`,
        uk: `Поштова адреса`,
    },
    newsletter_button: {
        en: `Submit`,
        ru: `Подписаться`,
        uk: `Підписатися`,
    },
    all_articles_subheader: {
        en: `All articles`,
        ru: `Все посты`,
        uk: `Всі дописи`,
    },
    // post tail
    last_time_updated: {
        en: `Last updated on`,
        ru: `Последнее обновление:`,
        uk: `Останнє оновлення:`,
    },
    newsletter_small_box_heading: {
        en: `Subscribe on my newsletter`,
        ru: `Подписаться на мою рассылку`,
        uk: `Підписатися на мою розсилку`,
    },
    newsletter_small_box_text: {
        en: `Get email from me about my ideas, frontend development resources and tips as well as exclusive previews of upcoming articles.`,
        ru: ``,
        uk: ``,
    },
    related_posts_subheading: {
        en: `Check also related posts`,
        ru: `Похожие посты`,
        uk: `Схожі дописи`,
    },
    // tag tail
    tag_generated_description: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquet nisi nisl eget`,
        ru: ``,
        uk: ``,
    },
    more_tags_text: {
        en: `More tags in that language:`,
        ru: `Еще теги на этом языке:`,
        uk: `Ще теги на цій мові:`,
    },
    // tags tail
    all_available_tags_heading: {
        en: `All available tags in English`,
        ru: `Все доступные теги на русском`,
        uk: `Всі доступні теги українською`,
    },
    all_posts_link: {
        en: `All posts`,
        ru: `Все посты`,
        uk: `Всі дописи`,
    },
    all_tags_link: {
        en: `Tags`,
        ru: `Теги`,
        uk: `Теги`,
    },
}

export const getLangPathes = (defaultLanguage: LanguageUnion) => {
    return new Map([
      [`ru`, `/ru/`],
      [`uk`, `/uk/`],
      [`en`, `/en/`],
      [defaultLanguage, `/`],
    ]);
  };
  
  export const getLangs = (defaultLanguage: LanguageUnion) => {
    return new Map([
      [`/ru/`, `ru`],
      [`/uk/`, `uk`],
      [`/`, defaultLanguage],
    ]);
  };

  
  export const langMap = new Map([
    [`ru`, `ru`],
    [`uk`, `uk`],
  ]);

export type LanguageUnion = `uk` | `ru` | `en`;

export const langToEnding = {
    uk: `ukrainian`,
    ru: `russian`,
    en: `english`,
  }