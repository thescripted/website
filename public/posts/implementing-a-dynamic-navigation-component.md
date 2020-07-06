---
title: Implementing a Dynamic Navigation Component
subtitle: Utilizing VanillaJS positioning properties of HTML ELements.
date: 6/29/2020
id: 104
---

Coming soon... This will be the glorious blog.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie id purus in tempus. Praesent nunc massa, feugiat quis placerat non, tristique vel magna. Praesent at nisi ut est vestibulum consequat. Vestibulum ultricies ultrices congue. Aliquam lobortis tellus vel nunc tincidunt, id dapibus velit dignissim. Mauris **congue** commodo lectus eu pellentesque. **Aenean** accumsan maximus bibendum. Sed ut dolor augue. Nam bibendum a ligula vitae congue. Mauris in finibus lacus. Aenean eget tortor ut nulla tincidunt mattis ac a ante.

Nam consectetur mi vel tellus ullamcorper, non tempus lorem fringilla. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. _Nam efficitur erat quis volutpat dapibus._ Suspendisse potenti. Aenean nisl leo, finibus et bibendum quis, facilisis id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi dictum, nibh ut bibendum tempor, diam lacus semper arcu, sed egestas augue augue vitae lectus. Etiam mauris massa, finibus cursus accumsan quis, hendrerit vel libero. Ut accumsan euismod posuere. Suspendisse a finibus nulla, eu placerat urna. In ac pretium nulla, ac eleifend orci. Suspendisse dictum pulvinar egestas.

```javascript
useEffect(() => {
  Object.entries(elementLocation).map(item => {
    const DOMTop = item[1].top + offset
    const DOMBot = item[1].bottom + offset
    const DOMItem = item[0]
    if (DOMTop <= viewP.top && DOMBot >= viewP.top) {
      triggerState[DOMItem] = true
    } else if (DOMTop <= viewP.bottom && DOMBot >= viewP.bottom) {
      triggerState[DOMItem] = true
    } else if (DOMTop >= viewP.top && DOMBot <= viewP.bottom) {
      triggerState[DOMItem] = true
    }
  })
  setActive(triggerState)
}, [viewP])
```

Phasellus a fringilla est. Quisque eleifend tincidunt orci, eu imperdiet sapien pretium sed. Aenean lobortis mauris id nunc hendrerit, vel semper magna efficitur. Curabitur consequat porttitor sem in congue. Nullam quis turpis quis arcu dignissim maximus eget quis nisi. Donec a quam eget nisi sollicitudin tincidunt eu sed nulla. Curabitur ut ornare leo.

```javascript
Home: document.getElementById("Home").getBoundingClientRect()
```

Curabitur a mi elit. Aenean tincidunt vestibulum faucibus. Aenean eu elementum enim. In in condimentum tellus, ac luctus felis. Vestibulum id gravida mauris. Cras sed metus sed sapien tincidunt euismod. Aliquam ac odio dictum, dignissim orci et, fringilla quam. Curabitur in suscipit diam. Proin ultricies magna eu consectetur feugiat. Cras ex arcu, porttitor fermentum porta vel, sodales sed ex. Phasellus vel venenatis magna, nec suscipit felis. Nulla quis urna eu risus ornare condimentum id id orci. Sed a sollicitudin nulla. In sit amet augue nulla. In quis dignissim mauris. Ut ut neque nec dui accumsan condimentum.

Sed non sapien eu metus tincidunt tristique. Nullam condimentum ex mi, sit amet porta ex tempus sit amet.
