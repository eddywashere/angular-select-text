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
<code select-text>
  Clicking this code block selects the entire text within the code block
</code>

<div select-text>
  Clicking this div selects only the text in
  <span select-text-target>this span element</span>
</div>
```

### Running Tests

```
npm install grunt-cli bower
./node_modules/bower/bin/bower install
npm install
npm test
```

On Debian, first install some dependencies by running
`apt-get install node npm node-legacy`.
