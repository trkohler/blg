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
- add fallback view in language translation in post view (example of error: http://localhost:8000/ru/posts/siemieino-pieriezhivaiem-koronovirus/ go to ukrainian language)
- <del>layout is not aligned on tag view. (see: http://localhost:8000/ru/tags/onlain-obrazovaniie/)</del>
- <del>fix links on the main page to posts</del>
- <del>fix links on tag page to related tags</del>
- <del>fix logo rendering</del>

RELEASE 1 VERSION 


- <del>styling for code blocks</del>
- <del>add beatiful coding font in my snippets (i like Hack...)</del>
- add copy to clipboard feature [questionable... with the current architecture]
- <del>add google analytics and set up events</del>
- <del>check if newsletter subscription actually works </del>


- fix lists rendering && small code parts rendering (example: http://localhost:8000/ru/posts/nachni-proghrammirovat-na-rust-bystro-tsikly-usloviia-kolliektsii-mietody-i-pattern-matching/)
  - check how `iter(list)` is being rendered. it's ugly.
  - (possibly) automate translation creation because i'm lazy