export function data() {
	return {
		pagination: {
			data: "collections",
			size: 1,
			alias: "tag",
			filter: ["all", "posts"],
			// addAllPagesToCollections: true,
		},

		eleventyExcludeFromCollections: true,

		eleventyComputed: {
			title: function (data) {
				return `Tagged “${data.tag}”`;
			},
			permalink: function (data) {
				return `/tags/${this.slugify(data.tag)}/`;
			},
		},
	};
}

export function render(data) {
	const preamble = `<h1>Tagged “${data.tag}”</h1><ul>`;
	const posts = data.collections[data.tag].map(function (post) {
		return `<li><a href="${post.url}">${post.data.title}</a></li>`;
	});
	const ending = `</ul><p>See <a href="/tags/">all tags</a>.</p>`;
	return [preamble, ...posts, ending].join("\n");
}
