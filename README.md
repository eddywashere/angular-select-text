### angular-select-text

[![Build Status](https://travis-ci.org/eddywashere/angular-select-text.svg?branch=master)](https://travis-ci.org/eddywashere/angular-select-text)

Angular.js directive for selecting text content on click. 

### Why? 

- It's not possible to do a javascript only copy to clipboard. 
- Some people prefer __not to add flash__ to their site to enable copy to clipboard.
- The next best thing is to make it easier to select a block of content with 1 simple click

### [DEMO](http://jsbin.com/nobix/1/edit)

### Example Usage

```html
<code select-text>Clicking this code block selects the entire text within the code block</code>
```

### Running Tests

```
npm install -g grunt-cli bower
bower install
npm test
```