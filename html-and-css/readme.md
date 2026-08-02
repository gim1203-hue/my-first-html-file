# HTML basic: introduction

## outline

- what is a markup?
- how do markdown and HTML represent marup?
- your first HTML page explanation of dostype, meta etc.

## Guidelines

- focuz on content, not on style!
- knowing everything is not necessary!
- VS Code: Emmet, "html;5"
    - mkdir xyz  ->  cd xyz  -> code .
    - Clean work environment
- Alternative online environment: https://codesandbox.io/

## Documentation

= https://www.w3schools.com/
- https://devdocs.io
- https://htmlcheatsheet.com/

## live server

live server configuration

## Tags

- Tags <tagname>....</tagname>

- headings: <h1> ...</h1> (only one)
- paragraps: <p> ....</p> (block level elements)

- Whitespaces in VS code and browser

- VS Code: "lorem50", Alt+Z (text format),
- VS Code: p*3, (p>lorem5)*3

- Browser: development tools

- italic: <em> ....</em> - and not <i> ...</i>
- Bold: <strong> ... </strong> - and not <b> ... </br>



## List

- <u1> ....</u1>, <o1> .....</o1>
- <1i> .....</1i>
- VS CODE u1>1i*6

## Images
- VS COde: img
- <img src="" alt-""> - we dont need to close images
- relative paths: "src" , "images/profile.jpg", "./images/profile.jpg" , "../images/profiles.jpg"
- url path (link)
-accessibility: alt
- size: width="250" height="300" . dont distort the aspect ratio!

## Ids and links

- Tag Id: e.g. id="skill-table"
- in the browser: e.g. http://127.0.0.1:5500/index.html#skill-table

- Internal links
    -same file: e.g. <a href="#social-links">social media</a>
    - Another file: e.g. <a href="./projects.html"?my projects</a>
    - Another file with an anchor: e.g. <a href="./index.html#social-links" social media</a>
    - Image in another project directory: e.g. <a href="./images/profile.jpg">me</a>

- External links: "<a href="http://www.google.com">find me....</a>

- In new tab: target="_blank"