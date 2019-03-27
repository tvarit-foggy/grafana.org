import $ from  '../bower/jquery/dist/jquery.js';

export function bootDocs() {

  var hs = document.getElementById("doc-article-text").querySelectorAll("H1, H2, H3"), h;

  for (var i = 0; i < hs.length; i++) {
    h = hs[i];
    if (h.id != null && h.id.length > 0) {
      h.insertAdjacentHTML('beforeend', '<a href="#' + h.id + '" class="docs-anchor-link">&para;</a>')
    }
  }
}
