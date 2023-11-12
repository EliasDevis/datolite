
<div align="center" >
<h1>Datolite</h1>
Unofficial client to <a href="https://topaz24.pl">Topaz24</a> mobile API.

</div>

---

It uses [apk.topaz24.pl/api](https://apk.topaz24.pl/api) to get the data.

## Installation
```bash
npm install datolite
```

## Example 
```ts
import { getAdvice } from "topaz-api";

console.log(await getAdvice(1));
// ===>
// {
//   id: 1,
//   title: "Title",
//   teaser: "<p>Teaser</p>",
//   image: {
//     extension: "jpg",
//     name: "99999999-9999-4e99-9999-999999999999",
//   },
//   stickOnCarousel: false,
//   showOnlyInCarousel: false,
//   adviceType: {
//     id: 1,
//     name: "Przepis"
//   },
//   content: "<p>Content</p>",
//   orderInCarousel: null,
//   ingredients: [
//     {
//       id: 10,
//       name: "Name",
//       product: {//..}
//     }
//   ],
//   createDate: Date
// }
```
