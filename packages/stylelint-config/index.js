"use strict";

module.exports = {
  customSyntax: "@stylelint/postcss-css-in-js",
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  plugins: ["stylelint-order"],
  rules: {
    "value-keyword-case": null,
    "function-name-case": null,
    "function-no-unknown": [
      true,
      { ignoreFunctions: ["/^theme./", "/.?\\${/", "`url"] },
    ],
    "order/properties-order": [
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-left",
      "padding-bottom",
      "display",
      "visibility",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "zoom",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "flex",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "flex-shrink",
      "flex-grow",
      "flex-basis",
      "order",
      "flex-pack",
      "opacity",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "font",
      "font-family",
      "font-size",
      "line-height",
      "font-weight",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "text-align",
      "text-align-last",
      "vertical-align",
      "white-space",
      "text-decoration",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "letter-spacing",
      "word-spacing",
      "text-outline",
      "text-transform",
      "text-wrap",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-shadow",
      "word-wrap",
      "word-break",
      "tab-size",
      "hyphens",
      "pointer-events",
      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "color",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "box-decoration-break",
      "transition",
      "transition-duration",
      "transition-delay",
      "transition-timing-function",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "backface-visibility",
      "will-change",
      "cursor",
      "user-select",
    ],
  },
};
