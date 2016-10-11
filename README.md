rebel-loading
=============

A simple web component to display a loading spinner.

Usage
=====

You can simply include the either the ES5 version from `dist/` or the ES2015 version from `src/` into your project and make use of the custom element `rebel-loading`.

```javascript
    <button id="btn">Toggle</button>
    <div class="frame">
        <rebel-loading id="loader"></rebel-loading>
    </div>
    <script>
        document.querySelector("#btn").addEventListener("click", function(){
            document.querySelector("#loader").toggle();
        });
    </script>
```

For convenience you can also install it via npm: `npm install rebel-repeater` 

Polyfills
=========

This web component uses V1 of the [Custom Elements](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) specification, to get this working in most browsers you are going to need to use a polyfill. It is recommended that you include the following [SkateJS Web Components](https://github.com/skatejs/web-components) polyfill:

`<script src="https://unpkg.com/skatejs-web-components/dist/index-with-deps.min.js"></script>`

API
===

At this point in time the component is very primitive and more a proof of concept than anything useful. 

Attributes
----------

There are currently no attributes available for this component.

Methods
-------

###show

This method simply shows the loading element.

###hide

This method simply hides the loading element.

###toggle

This method simply shows the loading element if it is already hidden or hides it if it is already visible.

###isHidden

This method simply returns true if the loading element is hidden.

Contributing
============

To contribute to this project all you will need is jspm installed and a love of web components. Please submit any suggestions or changes via a pull request.