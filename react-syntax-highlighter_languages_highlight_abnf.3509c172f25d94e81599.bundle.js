(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1706:function(module,exports){module.exports=function(hljs){var regexes_ruleDeclaration="^[a-zA-Z][a-zA-Z0-9-]*",regexes_unexpectedChars="[!@#$^&',?+~`|:]",commentMode=hljs.COMMENT(";","$"),ruleDeclarationMode={begin:regexes_ruleDeclaration+"\\s*=",returnBegin:!0,end:/=/,relevance:0,contains:[{className:"attribute",begin:regexes_ruleDeclaration}]};return{illegal:regexes_unexpectedChars,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"].join(" "),contains:[ruleDeclarationMode,commentMode,{className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},{className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},{className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},{className:"symbol",begin:/%[si]/},hljs.QUOTE_STRING_MODE,hljs.NUMBER_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_abnf.3509c172f25d94e81599.bundle.js.map