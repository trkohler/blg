- <del>fix links to tags in the post view (example: http://localhost:8000/ru/posts/siemieino-pieriezhivaiem-koronovirus/)
  - default language construction links are not correct (see: http://localhost:8000/posts/skilki-koshtuie-poyisti-v-misiats-v-bierlini-na-dvokh/)
</del>
- <del>fix links to recommended posts in the post view, in the bottom
  - same mistake as above
</del>
- <del>fix styles for tag recommendations (example: http://localhost:8000/ru/tags/onlain-obrazovaniie/)</del>
- <del>links to posts are broken in tag view (example: http://localhost:8000/ru/tags/onlain-obrazovaniie/)</del>
- <del>pages doesn't exist (example: http://localhost:8000/pro-mienia/)</del>
- <del>headings are not rendered correctly (example: http://localhost:8000/posts/niebanalnii-spisok-knigh-aziatskikh-avtoriv-shchob-zrobiti-karantin-2021-roku-priiemnishim/)</del>
- <del>fix styling of post... 
  - example: http://localhost:8000/ru/posts/razvorachivaiem-prilozhieniie-na-fastapi-s-pomoshchiu-amazon-lambda-biesplatno/
  - example 2: http://localhost:8000/ru/posts/vstuplieniie-v-google-cloud-functions-google-pub-sub-na-primierie-moiegho-lichnogho-proiekta/</del>
- <del>add fallback view in language translation in post view (example of error: http://localhost:8000/ru/posts/siemieino-pieriezhivaiem-koronovirus/ go to ukrainian language)</del>
  - i made redirects for now, but in future i guess -> i need to make routing smarter
- <del>layout is not aligned on tag view. (see: http://localhost:8000/ru/tags/onlain-obrazovaniie/)</del>
- <del>fix links on the main page to posts</del>
- <del>fix links on tag page to related tags</del>
- <del>fix logo rendering</del>

RELEASE 1 VERSION 


- <del>styling for code blocks</del>
- <del>add beatiful coding font in my snippets (i like Hack...)</del>
- <del>add copy to clipboard feature</del>
- <del>add google analytics and set up events</del>
- <del>check if newsletter subscription actually works </del>


- <del>fix lists rendering && small code parts rendering && links rendering (example: http://localhost:8000/ru/posts/nachni-proghrammirovat-na-rust-bystro-tsikly-usloviia-kolliektsii-mietody-i-pattern-matching/)</del>
  - <del>check how `iter(list)` is being rendered. it's ugly.</del>
  - <del>links are not visible.</del> 
  - <del>h2 is not visible.</del>
- <del>all external links should have utm markers that traffic belongs to me.</del>
- (possibly) automate translation creation because i'm lazy 
- social links don't work. Also I don't need nonsense stuff like instagram and twitter
- this is fucking lit (https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
  - used: https://github.com/vercel/satori#documentation
  - used: https://github.com/yisibl/resvg-js
- <del>seo basics (but not all)</del>
- make page where it's possible to write me a message
- events to track...
  - track event - 'copied code'
  - track event - 'clicked subscription button'
  - 'social link clicked'
- <del>english version release <З (should be my next top priority)</del>
- <del>fix 404 mistakes across the site for better seo</del>
- (maybe) use cloudinary (https://spacejelly.dev/posts/how-to-optimize-images-on-netlify-with-the-cloudinary-build-plugin/) to optimize all media
- BLOCKED: (maybe) pack code blocks as gists (https://ghost.org/integrations/github/)
- (bug) code snippets are not visible in dark mode (https://trkohler.com/posts/i-migrated-my-family-finance-bot-from-python-to-rust-because-i-am-tired-of-exceptions/)
- fix broken seo links, add redirects to new links
- migrate to Gatsby 5 (big project since at least one main dependency require manual upgrade)
  - useful link: https://queen.raae.codes/emails/2022-11-23-gatsby-v5-support/
- (maybe) show gitdiff in posts so it would be easier to follow along 
  - https://www.cssscript.com/github-like-html-diff-tool-diff2html-js/
  - https://diff2html.xyz/index.html
- make table of contents in the right side (like here: https://ghost.org/resources/how-to-format-a-blog-post/)
  - don't show it on mobile
- fix callout blocks (like there: https://trkohler.com/uk/posts/shcho-ia-diznavsia-pro/)
  - i can pick styles from there (https://cms.trkohler.com/spivbesida-dlya-programista-in-ukraine/)
- fix ordered lists, make them the same as unordered
- ensure those posts are not indexed (https://cms.trkohler.com/spivbesida-dlya-programista-in-ukraine/)
- fix ordering there (https://trkohler.com/uk/)
- embedded js doesn't work
  - because html tranformation should be done in compile time, not in runtime!
  - check this: https://www.gatsbyjs.com/docs/reference/config-files/actions/
- debug all screens resolutions (project_management/screens-usage.csv)
  - check how post renders there
  - check font size
- make share buttons
  - save to notion (?)
  - save to...check what's used for content saving
  - share to linkedin / twitter / facebook
- automatically make og images?
- fix rendering for citations (https://trkohler.com/uk/posts/niebanalnii-spisok-knigh-aziatskikh-avtoriv-shchob-zrobiti-karantin-2021-roku-priiemnishim/)
- comments under posts 
  - https://commento.io/pricing ($10 per month)
  - can host myself but still will be 10$ / month, I'm sure (https://github.com/adtac/commento)
  - how it looks like (https://demo.commento.io/)
  - also can be: https://cusdis.com/doc#/
  - can use this: https://www.linode.com/
  - to be honest: looks like it would be the same 10$ per month
  - 100$ per year for commento seems reasonable
  - seems that there are a lot of solutions for that already: https://www.google.com/search?q=commento+and+gatsby&oq=commento+and+gatsby&aqs=chrome..69i57.4161j0j1&sourceid=chrome&ie=UTF-8
  - 
  

## achievements:
- have health score more than 90 in ahrefs
- release english version and make it base
- made the longest post so far (22 minute to read)... Need more meaty stuff.
  

### Not related thoughts:
  - make something where I would be able to track my referrals


## NON TECHNICAL BACKLOG
- add more gifs in the blog posts
- <del>finish about consensus protocols...</del>
- rewrite in Ukrainian | English:
  - https://trkohler.com/fast-api-introduction-to-framework/
  - https://trkohler.com/ru/posts/vstuplieniie-v-google-cloud-functions-google-pub-sub-na-primierie-moiegho-lichnogho-proiekta/
  - https://trkohler.com/ru/posts/razvorachivaiem-prilozhieniie-na-fastapi-s-pomoshchiu-amazon-lambda-biesplatno/
  - https://trkohler.com/ru/posts/nachni-proghrammirovat-na-rust-bystro-tsikly-usloviia-kolliektsii-mietody-i-pattern-matching/
- raft paper link here is broken (https://trkohler.com/uk/posts/alghoritmi-dosiaghniennia-zghodi-dlia-mashin-iaki-nie-znaiut-shcho-takie-zghoda/)