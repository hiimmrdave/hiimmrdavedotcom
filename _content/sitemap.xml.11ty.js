export function data() {
	return {
		permalink: "/sitemap.xml",
		layout: false,
		eleventyExcludeFromCollections: true,
		collection: () => collections.all,
	};
}

export function render(data) {
	const preamble = `<?xml version="1.0" encoding="utf-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>`;
	const pages = data.collections.all.map(
		(page) =>
			`<url>
  <loc>${data.metadata.url + page.url}</loc>
  <lastmod>${page.date.toISOString()}</lastmod>
  </url>`
	);
	const closing = `</urlset>`;
	return [preamble, ...pages, closing].join("\n");
}
