showdown.subParser('makehtml.highlightWord', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('makehtml.highlightWord.before', text, options).getText();

  function parseInside (txt, left, right) {
    return left + txt + right;
  }

  text = text.replace(/==([^=\n]+)==/g, function (wm, txt) {
    return parseInside (txt, '<mark>', '</mark>');
  });

  text = globals.converter._dispatch('makehtml.highlightWord.after', text, options, globals).getText();
  return text;
});
