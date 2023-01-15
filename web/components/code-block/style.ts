/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable quotes */
export interface codeBlockStyleProps {
  [key: string]: any;
}

export const lightTheme: codeBlockStyleProps = {
  'code[class*="language-"]': {
    color: "inherit",
    // eslint-disable-next-line quotes
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "inherit",
    background: "none",
    // eslint-disable-next-line quotes
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0 0",
    overflowX: "hidden",
    borderRadius: "0px 0px 1px 1px",
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"] ::selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"] ::selection': {
    textShadow: "none",
    background: "none",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "none",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  "hljs-comment": {
    color: "#475569",
  },
  "hljs-string": {
    color: "#8b2db5",
  },
  "hljs-keyword": {
    color: "#4C36D3",
  },
  "hljs-function": {
    color: "#111827",
  },
  "class-name": {
    color: "#DD4A68",
  },
  "hljs-attribute": {
    color: "#4C36D3",
  },
  "hljs-selector-class": {
    color: "#1e293b",
  },
  "hljs-variable": {
    color: "#e90",
  },
  "hljs-title": {
    color: "#fff",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

export const darkTheme: codeBlockStyleProps = {
  'code[class*="language-"]': {
    color: "inherit",
    background: "none",
    // eslint-disable-next-line quotes
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "white",
    background: "none",
    // eslint-disable-next-line quotes
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0 0",
    overflowX: "hidden",
    borderRadius: "0px 0px 1px 1px",
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "none",
  },
  'pre[class*="language-"] ::selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "none",
  },
  'code[class*="language-"] ::selection': {
    textShadow: "none",
    background: "none",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "none",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  "hljs-comment": {
    color: "#94a3b8",
  },
  "hljs-string": {
    color: "#db8ffc",
  },
  "attr-value": {
    color: "#776CBD",
  },
  "hljs-keyword": {
    color: "#776CBD",
  },
  "hljs-function": {
    color: "#cbd5e1",
  },
  "class-name": {
    color: "#DD4A68",
  },
  "hljs-attribute": {
    color: "#776CBD",
  },
  "hljs-selector-class": {
    color: "#f3f4f6",
  },
  "hljs-variable": {
    color: "#e90",
  },
  "hljs-title": {
    color: "#fff",
  },
};
