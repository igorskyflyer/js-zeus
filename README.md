# Zeus

⚡ Zeus allows you to create HTML elements and set their attributes in a different manner - all at once! 🦅

<br>

## Usage

Download the source code of the library from [zeus.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/src/zeus.js) or the minified version from [zeus.min.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/dist/zeus.min.js) and import it to your project, e.g.

```html
<script src="script/zeus.js"></script>

<!-- or -->

<script src="script/zeus.min.js"></script>
```

Then, just call `zeus()` when you need to easily create your cool HTML elements, that's it! 🦸‍♂️

```js
const span = zeus('span', {
  id: 'my-new-span',
  className: 'test',
  innerHTML: 'Hello world',
})

// returns <span id="my-new-span" class="test">Hello world</span>
```
