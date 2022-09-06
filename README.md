# Zeus

⚡ Zeus allows you to create HTML elements and set their attributes in a different manner - all at once! 🦅

<br>

## Usage

First, get `⚡ zeus 🦅` by doing any of the following:

- download the source code from [zeus.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/src/zeus.js),
- download the minified source code from [zeus.min.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/dist/zeus.min.js),
- download the release package from [zeus](https://github.com/igorskyflyer/js-zeus/releases/tag/v1.0.0) which contains both the original and minified source code &ndash; use only one of two `.js` files.

<br>

Next, import it to your project, e.g.

```html
<script src="script/zeus.js"></script>

<!-- or -->

<script src="script/zeus.min.js"></script>
```

Then, just call `zeus()` when you need to easily create your cool HTML elements, that's it! 🦸‍♂️

```js
// the redundant use of both the className and id is for illustration purposes only

// so, instead of using
// ❌
const span = document.createElement('span')
span.id = 'my-new-span'
span.className = 'test'
span.innerHTML = 'Hello world'

// or even worse, with setAttribute() 😱
// ❌
const span = document.createElement('span')
span.setAttribute('id', 'my-new-span')
span.setAttribute('class', 'test')
span.innerHTML = 'Hello world'

// use this instead
// ✅
const span = zeus('span', {
  id: 'my-new-span',
  className: 'test',
  innerHTML: 'Hello world',
})

// returns <span id="my-new-span" class="test">Hello world</span>
```
