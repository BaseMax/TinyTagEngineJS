# Tiny TagEngine JS

### Demo

If you are going to test and watch a demo, the demo available online on: https://basemax.github.io/TinyTagEngineJS/example.html

### Using

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
