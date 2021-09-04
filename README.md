# Tiny TagEngine JS

Sometimes you need to get input from the user that contains the symbols you want to tag.

By this tiny library you are able to convert input text into your own tags and renders these.

It can be used in React/Vuejs as well, although the example I implemented has been implemented in Pure JS.

### Demo

If you are going to test and watch a demo, the demo available online on: https://basemax.github.io/TinyTagEngineJS/example.html

### Using

If you are going to use `.js` script on GitHub, you can use `https://github.com/BaseMax/TinyTagEngineJS/blob/main/tag-engine.js` url.

Load this:

```
<script src="https://github.com/BaseMax/TinyTagEngineJS/blob/main/tag-engine.js" type="text/javascript"></script>
```

And next:

```
const input = `<center>[feature:1]</center><br>[feature:2]<hr>[mine:1234]<hr>[your:hi]<hr>[slider:12123]<hr>[myown:234234]<hr>...<p>Hello!</p>`;
const res = tag_engine(input, {
    "feature": (id) => `<feature id=${id}></feature>`,
    "slider": (id) => `<slider id=${id}></slider>`,
    "myown": (id) => `<myown id=${id}></myown>`,
    "your": (id) => `<your id=${id}></your>`,
    "mine": (id) => `<mine id=${id}></mine>`,
});
console.log(res);
```

© Copyright Max Base, 2021
