import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Anushka Kulshreshtha",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "GOATCOUNTER_CODE_PLACEHOLDER",
    },
    locale: "en-US",
    baseUrl: "coolshreshtha.github.io/digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        //green theme
        // lightMode: {
        //   light: "#F4FFC3", //bground
        //   lightgray: "#809D3C",
        //   gray: "#b8b8b8", //modified 
        //   darkgray: "#4E1F00", //body
        //   dark: "#5D8736", //header
        //   secondary: "#5D8736", //link
        //   tertiary: "#809D3C", //hover
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#fff23688",
        // },
         lightMode: {
          light: "#FEF9E1", //bground
          lightgray: "#E5D0AC", //border
          gray: "#A31D1D", //modified 
          darkgray: "#A31D1D", //body
          dark: "#6D2323", //header
          secondary: "#6D2323", //link
          tertiary: "#A31D1D", //hover
          highlight: "rgba(218, 141, 41, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2D2424", //background
          lightgray: "#393639", //border
          gray: "#E0C097",  //written, modified date, graph link, heavier border
          darkgray: "#FFEEA9", //bodytext
          dark: "#FFBF78",  //header text, icons
          secondary: "#E0C097", //Anushka header, link color, current graph node
          tertiary: "#D89216", //hover states and visited node
          highlight: "rgba(216, 156, 44, 0.15)", //internal link
          textHighlight: "#5C3D2E", //markdown highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
