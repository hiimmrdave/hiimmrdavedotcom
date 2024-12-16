export function data() {
  return {
    layout: "layouts/base.webc",
    eleventyNavigation: {
      key: "blog",
      order: 2,
    },
  };
}

export function render(data) {
  const postsCount = data.collections.post.length;
  const listStyle = `counter-reset: start-from ${postsCount + 1}`;
  const preamble = `<hgroup>
  <h1>hi, i'm Mr. Log!</h1>
  <i class="whisper">(Mr. Dave's web log)</i>
</hgroup>
<ol reversed class="postlist" style="${listStyle}">`;
  const posts = data.collections.post
    .map(function (post) {
      return `<li class="postlist-item"><a href="${
        post.url
      }" class="postlist-link">${post.data.title}</a>
      <p><time class="postlist-date" datetime="${post.data.date.toISOString()}"
      >${post.date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })}</time></p>
      <p class="postlist-desc">${post.data.description}</p></li>`;
    })
    .toReversed();
  const ending = "</ol>";
  return [preamble, ...posts, ending].join("\n");
}
