import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import pluginInclusiveLang from "@11ty/eleventy-plugin-inclusive-language";
import pluginMermaid from "@kevingimbel/eleventy-plugin-mermaid";

import markdownItFootnote from "markdown-it-footnote";
import markdownItDeflist from "markdown-it-deflist";
import markdownItCollapsible from "./markdown-it-collapsible.js";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAbbr from "markdown-it-abbr";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Drafts, see also _data/eleventyDataSchema.js
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig
    .addPassthroughCopy({
      "./_public/": "/",
    })
    .addPassthroughCopy("content/feed/pretty-atom-feed.xsl");

  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPlugin(pluginWebc, {
    components: ["./_components/**/*.webc", "npm:@11ty/is-land/*.webc"],
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "atom", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en-US",
      title: "hi, i'm Mr. Dave!",
      subtitle: "i'm Mr. Dave, and this is my website.",
      base: "https://hiimmrdave.com/",
      author: {
        name: "Mr. Dave",
        email: "hi@immrdave.com",
      },
    },
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginInclusiveLang);
  eleventyConfig.addPlugin(pluginMermaid);

  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  // Customize Markdown library settings:
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib
      .use(markdownItAbbr)
      .use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({
          placement: "after",
          class: "header-anchor",
          symbol: "#",
          ariaHidden: false,
        }),
        level: [1, 2, 3, 4],
        slugify: eleventyConfig.getFilter("slugify"),
      })
      .use(markdownItAttrs)
      .use(markdownItCollapsible)
      .use(markdownItDeflist)
      .use(markdownItFootnote);
  });

  eleventyConfig.setServerOptions({
    domDiff: false,
  });
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  });
}

export const config = {
  dir: {
    input: "_content", // default: "."
    includes: "../_includes", // default: "_includes"
    data: "../_data", // default: "_data"
  },
};
