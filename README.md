# Portfolio

https://webdev4422.github.io

Greetings! This is my portfolio. Let me accquintece you with my work ;)

## Philosophy

Trying to [KISS](https://en.wikipedia.org/wiki/KISS_principle), while using latest and greatest core web technologies e.g. Web Components, SVG Sprites, ESNext, etc.

## My framework: KISS-x

Use simplest html elements as components and combine them in static pages with simple script.

How is works ?

Make html tamplate with any tags that ends with '-x': <my_tag-x />. Traverse components dir and replace this tags with content of files that named coresponding to this tags. Do this for each page. End result: static pages.

DX is satisfying, because tend to modular approch with simple components, trying to reapeat modern frameworks e.g. React.

## KISS-X aims:

- Build static website without using any secondary libraries in production only core web technologies.
- DX of modern frameworks like next (at least some), components approach
- No config delpoyment, just throw `docs` folder to any static server

## Rules:

### CSS

- Use css classes selectors to make css modules scope, and css tag selectors for global scope.
- Use css classes inside `<style></style>` block inside each component, all related css classes will be replaced with `ks-<hash>`.

