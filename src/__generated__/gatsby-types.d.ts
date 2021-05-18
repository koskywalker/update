/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly context: Maybe<SitePageContext>;
};

type SitePageContext = {
  readonly lastPageNumber: Maybe<Scalars['Int']>;
  readonly pageNumber: Maybe<Scalars['Int']>;
  readonly humanPageNumber: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly numberOfPages: Maybe<Scalars['Int']>;
  readonly previousPagePath: Maybe<Scalars['String']>;
  readonly nextPagePath: Maybe<Scalars['String']>;
  readonly tagName: Maybe<Scalars['String']>;
  readonly tagSlug: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly _xparams: Maybe<SitePageContext_xparams>;
};

type SitePageContext_xparams = {
  readonly slug: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};


type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
  readonly upload: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly author: Maybe<ContentfulPerson>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly body: Maybe<contentfulBlogPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulBlogPostSys>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulBlogPostBodyTextNode */
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNode>>>;
  /** Returns the first child node of type contentfulBlogPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  /** Returns all children nodes filtered by type contentfulBlogPostDescriptionTextNode */
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulBlogPostDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulBlogPost_publishDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
};

type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

type ContentfulBlogPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPersonSys>;
  readonly name: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPerson_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPerson_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPersonSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly contentType: Maybe<ContentfulPersonSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulPersonSysContentType = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSys>;
};

type ContentfulPersonSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulTagSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulTag_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulTag_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulTagSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulTagSysContentType>;
};

type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

type ContentfulTagSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly id: Maybe<Scalars['String']>;
  readonly includeInDevelopment: Maybe<Scalars['Boolean']>;
  readonly routeChangeEventName: Maybe<Scalars['String']>;
  readonly publisherId: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly target: Maybe<Scalars['String']>;
  readonly rel: Maybe<Scalars['String']>;
  readonly exclude: Maybe<Scalars['String']>;
  readonly tight: Maybe<Scalars['Boolean']>;
  readonly ordered: Maybe<Scalars['Boolean']>;
  readonly fromHeading: Maybe<Scalars['Int']>;
  readonly toHeading: Maybe<Scalars['Int']>;
  readonly className: Maybe<Scalars['String']>;
  readonly offsetY: Maybe<Scalars['Int']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly feeds: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly target: Maybe<Scalars['String']>;
  readonly rel: Maybe<Scalars['String']>;
  readonly exclude: Maybe<Scalars['String']>;
  readonly tight: Maybe<Scalars['Boolean']>;
  readonly ordered: Maybe<Scalars['Boolean']>;
  readonly fromHeading: Maybe<Scalars['Int']>;
  readonly toHeading: Maybe<Scalars['Int']>;
  readonly className: Maybe<Scalars['String']>;
  readonly offsetY: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsFeeds = {
  readonly query: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly feed_url: Maybe<Scalars['String']>;
  readonly site_url: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulBlogPost: Maybe<ContentfulBlogPost>;
  readonly allContentfulBlogPost: ContentfulBlogPostConnection;
  readonly contentfulPerson: Maybe<ContentfulPerson>;
  readonly allContentfulPerson: ContentfulPersonConnection;
  readonly contentfulTag: Maybe<ContentfulTag>;
  readonly allContentfulTag: ContentfulTagConnection;
  readonly contentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  readonly allContentfulBlogPostBodyTextNode: contentfulBlogPostBodyTextNodeConnection;
  readonly contentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly allContentfulBlogPostDescriptionTextNode: contentfulBlogPostDescriptionTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  publishDate: Maybe<DateQueryOperatorInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  author: Maybe<ContentfulPersonFilterInput>;
  tags: Maybe<ContentfulTagFilterListInput>;
  description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulBlogPostSysFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulBlogPostArgs = {
  filter: Maybe<ContentfulBlogPostFilterInput>;
  sort: Maybe<ContentfulBlogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPersonArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPersonSysFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPersonArgs = {
  filter: Maybe<ContentfulPersonFilterInput>;
  sort: Maybe<ContentfulPersonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulTagArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulTagSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulTagArgs = {
  filter: Maybe<ContentfulTagFilterInput>;
  sort: Maybe<ContentfulTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostBodyTextNodeArgs = {
  filter: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostDescriptionTextNodeArgs = {
  filter: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly includeInDevelopment: Maybe<BooleanQueryOperatorInput>;
  readonly routeChangeEventName: Maybe<StringQueryOperatorInput>;
  readonly publisherId: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly rel: Maybe<StringQueryOperatorInput>;
  readonly exclude: Maybe<StringQueryOperatorInput>;
  readonly tight: Maybe<BooleanQueryOperatorInput>;
  readonly ordered: Maybe<BooleanQueryOperatorInput>;
  readonly fromHeading: Maybe<IntQueryOperatorInput>;
  readonly toHeading: Maybe<IntQueryOperatorInput>;
  readonly className: Maybe<StringQueryOperatorInput>;
  readonly offsetY: Maybe<IntQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly feeds: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly rel: Maybe<StringQueryOperatorInput>;
  readonly exclude: Maybe<StringQueryOperatorInput>;
  readonly tight: Maybe<BooleanQueryOperatorInput>;
  readonly ordered: Maybe<BooleanQueryOperatorInput>;
  readonly fromHeading: Maybe<IntQueryOperatorInput>;
  readonly toHeading: Maybe<IntQueryOperatorInput>;
  readonly className: Maybe<StringQueryOperatorInput>;
  readonly offsetY: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly feed_url: Maybe<StringQueryOperatorInput>;
  readonly site_url: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageContextFilterInput = {
  readonly lastPageNumber: Maybe<IntQueryOperatorInput>;
  readonly pageNumber: Maybe<IntQueryOperatorInput>;
  readonly humanPageNumber: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly numberOfPages: Maybe<IntQueryOperatorInput>;
  readonly previousPagePath: Maybe<StringQueryOperatorInput>;
  readonly nextPagePath: Maybe<StringQueryOperatorInput>;
  readonly tagName: Maybe<StringQueryOperatorInput>;
  readonly tagSlug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_xparamsFilterInput>;
};

type SitePageContext_xparamsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
  | 'pluginCreator.pluginOptions.plugins.browserAPIs'
  | 'pluginCreator.pluginOptions.plugins.ssrAPIs'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.spaceId'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.environment'
  | 'pluginCreator.pluginOptions.downloadLocal'
  | 'pluginCreator.pluginOptions.forceFullSync'
  | 'pluginCreator.pluginOptions.pageLimit'
  | 'pluginCreator.pluginOptions.assetDownloadWorkers'
  | 'pluginCreator.pluginOptions.useNameForId'
  | 'pluginCreator.pluginOptions.id'
  | 'pluginCreator.pluginOptions.includeInDevelopment'
  | 'pluginCreator.pluginOptions.routeChangeEventName'
  | 'pluginCreator.pluginOptions.publisherId'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.target'
  | 'pluginCreator.pluginOptions.rel'
  | 'pluginCreator.pluginOptions.exclude'
  | 'pluginCreator.pluginOptions.tight'
  | 'pluginCreator.pluginOptions.ordered'
  | 'pluginCreator.pluginOptions.fromHeading'
  | 'pluginCreator.pluginOptions.toHeading'
  | 'pluginCreator.pluginOptions.className'
  | 'pluginCreator.pluginOptions.offsetY'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.feeds'
  | 'pluginCreator.pluginOptions.feeds.query'
  | 'pluginCreator.pluginOptions.feeds.output'
  | 'pluginCreator.pluginOptions.feeds.title'
  | 'pluginCreator.pluginOptions.feeds.feed_url'
  | 'pluginCreator.pluginOptions.feeds.site_url'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'context.lastPageNumber'
  | 'context.pageNumber'
  | 'context.humanPageNumber'
  | 'context.skip'
  | 'context.limit'
  | 'context.numberOfPages'
  | 'context.previousPagePath'
  | 'context.nextPagePath'
  | 'context.tagName'
  | 'context.tagSlug'
  | 'context.id'
  | 'context.slug'
  | 'context._xparams.slug';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
  readonly upload: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'file.upload'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPersonFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPersonSysFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPersonSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPersonSysContentTypeFilterInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulPersonSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

type ContentfulPersonSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulBlogPostFilterInput>;
};

type ContentfulBlogPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly author: Maybe<ContentfulPersonFilterInput>;
  readonly tags: Maybe<ContentfulTagFilterListInput>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulBlogPostSysFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulTagFilterListInput = {
  readonly elemMatch: Maybe<ContentfulTagFilterInput>;
};

type ContentfulTagFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulTagSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulTagSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulTagSysContentTypeFilterInput>;
};

type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

type ContentfulTagSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulBlogPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulBlogPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
};

type ContentfulBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
};


type ContentfulBlogPostConnection_distinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_maxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_minArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_sumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

type ContentfulBlogPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'heroImage.contentful_id'
  | 'heroImage.id'
  | 'heroImage.spaceId'
  | 'heroImage.createdAt'
  | 'heroImage.updatedAt'
  | 'heroImage.file.url'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.contentType'
  | 'heroImage.file.upload'
  | 'heroImage.title'
  | 'heroImage.description'
  | 'heroImage.node_locale'
  | 'heroImage.sys.type'
  | 'heroImage.sys.revision'
  | 'heroImage.fixed.base64'
  | 'heroImage.fixed.tracedSVG'
  | 'heroImage.fixed.aspectRatio'
  | 'heroImage.fixed.width'
  | 'heroImage.fixed.height'
  | 'heroImage.fixed.src'
  | 'heroImage.fixed.srcSet'
  | 'heroImage.fixed.srcWebp'
  | 'heroImage.fixed.srcSetWebp'
  | 'heroImage.fluid.base64'
  | 'heroImage.fluid.tracedSVG'
  | 'heroImage.fluid.aspectRatio'
  | 'heroImage.fluid.src'
  | 'heroImage.fluid.srcSet'
  | 'heroImage.fluid.srcWebp'
  | 'heroImage.fluid.srcSetWebp'
  | 'heroImage.fluid.sizes'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.resize.base64'
  | 'heroImage.resize.tracedSVG'
  | 'heroImage.resize.src'
  | 'heroImage.resize.width'
  | 'heroImage.resize.height'
  | 'heroImage.resize.aspectRatio'
  | 'heroImage.parent.id'
  | 'heroImage.parent.parent.id'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.children'
  | 'heroImage.children.id'
  | 'heroImage.children.parent.id'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.children.children'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'author.contentful_id'
  | 'author.id'
  | 'author.node_locale'
  | 'author.spaceId'
  | 'author.createdAt'
  | 'author.updatedAt'
  | 'author.sys.type'
  | 'author.sys.revision'
  | 'author.name'
  | 'author.title'
  | 'author.blog_post'
  | 'author.blog_post.contentful_id'
  | 'author.blog_post.id'
  | 'author.blog_post.node_locale'
  | 'author.blog_post.title'
  | 'author.blog_post.slug'
  | 'author.blog_post.publishDate'
  | 'author.blog_post.heroImage.contentful_id'
  | 'author.blog_post.heroImage.id'
  | 'author.blog_post.heroImage.spaceId'
  | 'author.blog_post.heroImage.createdAt'
  | 'author.blog_post.heroImage.updatedAt'
  | 'author.blog_post.heroImage.title'
  | 'author.blog_post.heroImage.description'
  | 'author.blog_post.heroImage.node_locale'
  | 'author.blog_post.heroImage.gatsbyImageData'
  | 'author.blog_post.heroImage.children'
  | 'author.blog_post.author.contentful_id'
  | 'author.blog_post.author.id'
  | 'author.blog_post.author.node_locale'
  | 'author.blog_post.author.spaceId'
  | 'author.blog_post.author.createdAt'
  | 'author.blog_post.author.updatedAt'
  | 'author.blog_post.author.name'
  | 'author.blog_post.author.title'
  | 'author.blog_post.author.blog_post'
  | 'author.blog_post.author.children'
  | 'author.blog_post.tags'
  | 'author.blog_post.tags.contentful_id'
  | 'author.blog_post.tags.id'
  | 'author.blog_post.tags.node_locale'
  | 'author.blog_post.tags.name'
  | 'author.blog_post.tags.slug'
  | 'author.blog_post.tags.blog_post'
  | 'author.blog_post.tags.spaceId'
  | 'author.blog_post.tags.createdAt'
  | 'author.blog_post.tags.updatedAt'
  | 'author.blog_post.tags.children'
  | 'author.blog_post.description.id'
  | 'author.blog_post.description.children'
  | 'author.blog_post.description.description'
  | 'author.blog_post.description.childrenMarkdownRemark'
  | 'author.blog_post.body.id'
  | 'author.blog_post.body.children'
  | 'author.blog_post.body.body'
  | 'author.blog_post.body.childrenMarkdownRemark'
  | 'author.blog_post.spaceId'
  | 'author.blog_post.createdAt'
  | 'author.blog_post.updatedAt'
  | 'author.blog_post.sys.type'
  | 'author.blog_post.sys.revision'
  | 'author.blog_post.gatsbyPath'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.blog_post.parent.id'
  | 'author.blog_post.parent.children'
  | 'author.blog_post.children'
  | 'author.blog_post.children.id'
  | 'author.blog_post.children.children'
  | 'author.blog_post.internal.content'
  | 'author.blog_post.internal.contentDigest'
  | 'author.blog_post.internal.description'
  | 'author.blog_post.internal.fieldOwners'
  | 'author.blog_post.internal.ignoreType'
  | 'author.blog_post.internal.mediaType'
  | 'author.blog_post.internal.owner'
  | 'author.blog_post.internal.type'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'tags'
  | 'tags.contentful_id'
  | 'tags.id'
  | 'tags.node_locale'
  | 'tags.name'
  | 'tags.slug'
  | 'tags.blog_post'
  | 'tags.blog_post.contentful_id'
  | 'tags.blog_post.id'
  | 'tags.blog_post.node_locale'
  | 'tags.blog_post.title'
  | 'tags.blog_post.slug'
  | 'tags.blog_post.publishDate'
  | 'tags.blog_post.heroImage.contentful_id'
  | 'tags.blog_post.heroImage.id'
  | 'tags.blog_post.heroImage.spaceId'
  | 'tags.blog_post.heroImage.createdAt'
  | 'tags.blog_post.heroImage.updatedAt'
  | 'tags.blog_post.heroImage.title'
  | 'tags.blog_post.heroImage.description'
  | 'tags.blog_post.heroImage.node_locale'
  | 'tags.blog_post.heroImage.gatsbyImageData'
  | 'tags.blog_post.heroImage.children'
  | 'tags.blog_post.author.contentful_id'
  | 'tags.blog_post.author.id'
  | 'tags.blog_post.author.node_locale'
  | 'tags.blog_post.author.spaceId'
  | 'tags.blog_post.author.createdAt'
  | 'tags.blog_post.author.updatedAt'
  | 'tags.blog_post.author.name'
  | 'tags.blog_post.author.title'
  | 'tags.blog_post.author.blog_post'
  | 'tags.blog_post.author.children'
  | 'tags.blog_post.tags'
  | 'tags.blog_post.tags.contentful_id'
  | 'tags.blog_post.tags.id'
  | 'tags.blog_post.tags.node_locale'
  | 'tags.blog_post.tags.name'
  | 'tags.blog_post.tags.slug'
  | 'tags.blog_post.tags.blog_post'
  | 'tags.blog_post.tags.spaceId'
  | 'tags.blog_post.tags.createdAt'
  | 'tags.blog_post.tags.updatedAt'
  | 'tags.blog_post.tags.children'
  | 'tags.blog_post.description.id'
  | 'tags.blog_post.description.children'
  | 'tags.blog_post.description.description'
  | 'tags.blog_post.description.childrenMarkdownRemark'
  | 'tags.blog_post.body.id'
  | 'tags.blog_post.body.children'
  | 'tags.blog_post.body.body'
  | 'tags.blog_post.body.childrenMarkdownRemark'
  | 'tags.blog_post.spaceId'
  | 'tags.blog_post.createdAt'
  | 'tags.blog_post.updatedAt'
  | 'tags.blog_post.sys.type'
  | 'tags.blog_post.sys.revision'
  | 'tags.blog_post.gatsbyPath'
  | 'tags.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'tags.blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'tags.blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'tags.blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'tags.blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'tags.blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'tags.blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'tags.blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'tags.blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'tags.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'tags.blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'tags.blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'tags.blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'tags.blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'tags.blog_post.parent.id'
  | 'tags.blog_post.parent.children'
  | 'tags.blog_post.children'
  | 'tags.blog_post.children.id'
  | 'tags.blog_post.children.children'
  | 'tags.blog_post.internal.content'
  | 'tags.blog_post.internal.contentDigest'
  | 'tags.blog_post.internal.description'
  | 'tags.blog_post.internal.fieldOwners'
  | 'tags.blog_post.internal.ignoreType'
  | 'tags.blog_post.internal.mediaType'
  | 'tags.blog_post.internal.owner'
  | 'tags.blog_post.internal.type'
  | 'tags.spaceId'
  | 'tags.createdAt'
  | 'tags.updatedAt'
  | 'tags.sys.type'
  | 'tags.sys.revision'
  | 'tags.parent.id'
  | 'tags.parent.parent.id'
  | 'tags.parent.parent.children'
  | 'tags.parent.children'
  | 'tags.parent.children.id'
  | 'tags.parent.children.children'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.children'
  | 'tags.children.id'
  | 'tags.children.parent.id'
  | 'tags.children.parent.children'
  | 'tags.children.children'
  | 'tags.children.children.id'
  | 'tags.children.children.children'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'description.id'
  | 'description.parent.id'
  | 'description.parent.parent.id'
  | 'description.parent.parent.children'
  | 'description.parent.children'
  | 'description.parent.children.id'
  | 'description.parent.children.children'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.children'
  | 'description.children.id'
  | 'description.children.parent.id'
  | 'description.children.parent.children'
  | 'description.children.children'
  | 'description.children.children.id'
  | 'description.children.children.children'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.description'
  | 'description.sys.type'
  | 'description.childrenMarkdownRemark'
  | 'description.childrenMarkdownRemark.id'
  | 'description.childrenMarkdownRemark.frontmatter.title'
  | 'description.childrenMarkdownRemark.excerpt'
  | 'description.childrenMarkdownRemark.rawMarkdownBody'
  | 'description.childrenMarkdownRemark.html'
  | 'description.childrenMarkdownRemark.htmlAst'
  | 'description.childrenMarkdownRemark.excerptAst'
  | 'description.childrenMarkdownRemark.headings'
  | 'description.childrenMarkdownRemark.headings.id'
  | 'description.childrenMarkdownRemark.headings.value'
  | 'description.childrenMarkdownRemark.headings.depth'
  | 'description.childrenMarkdownRemark.timeToRead'
  | 'description.childrenMarkdownRemark.tableOfContents'
  | 'description.childrenMarkdownRemark.wordCount.paragraphs'
  | 'description.childrenMarkdownRemark.wordCount.sentences'
  | 'description.childrenMarkdownRemark.wordCount.words'
  | 'description.childrenMarkdownRemark.parent.id'
  | 'description.childrenMarkdownRemark.parent.children'
  | 'description.childrenMarkdownRemark.children'
  | 'description.childrenMarkdownRemark.children.id'
  | 'description.childrenMarkdownRemark.children.children'
  | 'description.childrenMarkdownRemark.internal.content'
  | 'description.childrenMarkdownRemark.internal.contentDigest'
  | 'description.childrenMarkdownRemark.internal.description'
  | 'description.childrenMarkdownRemark.internal.fieldOwners'
  | 'description.childrenMarkdownRemark.internal.ignoreType'
  | 'description.childrenMarkdownRemark.internal.mediaType'
  | 'description.childrenMarkdownRemark.internal.owner'
  | 'description.childrenMarkdownRemark.internal.type'
  | 'description.childMarkdownRemark.id'
  | 'description.childMarkdownRemark.frontmatter.title'
  | 'description.childMarkdownRemark.excerpt'
  | 'description.childMarkdownRemark.rawMarkdownBody'
  | 'description.childMarkdownRemark.html'
  | 'description.childMarkdownRemark.htmlAst'
  | 'description.childMarkdownRemark.excerptAst'
  | 'description.childMarkdownRemark.headings'
  | 'description.childMarkdownRemark.headings.id'
  | 'description.childMarkdownRemark.headings.value'
  | 'description.childMarkdownRemark.headings.depth'
  | 'description.childMarkdownRemark.timeToRead'
  | 'description.childMarkdownRemark.tableOfContents'
  | 'description.childMarkdownRemark.wordCount.paragraphs'
  | 'description.childMarkdownRemark.wordCount.sentences'
  | 'description.childMarkdownRemark.wordCount.words'
  | 'description.childMarkdownRemark.parent.id'
  | 'description.childMarkdownRemark.parent.children'
  | 'description.childMarkdownRemark.children'
  | 'description.childMarkdownRemark.children.id'
  | 'description.childMarkdownRemark.children.children'
  | 'description.childMarkdownRemark.internal.content'
  | 'description.childMarkdownRemark.internal.contentDigest'
  | 'description.childMarkdownRemark.internal.description'
  | 'description.childMarkdownRemark.internal.fieldOwners'
  | 'description.childMarkdownRemark.internal.ignoreType'
  | 'description.childMarkdownRemark.internal.mediaType'
  | 'description.childMarkdownRemark.internal.owner'
  | 'description.childMarkdownRemark.internal.type'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'gatsbyPath'
  | 'childrenContentfulBlogPostBodyTextNode'
  | 'childrenContentfulBlogPostBodyTextNode.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.body'
  | 'childrenContentfulBlogPostBodyTextNode.sys.type'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulBlogPostBodyTextNode.id'
  | 'childContentfulBlogPostBodyTextNode.parent.id'
  | 'childContentfulBlogPostBodyTextNode.parent.parent.id'
  | 'childContentfulBlogPostBodyTextNode.parent.parent.children'
  | 'childContentfulBlogPostBodyTextNode.parent.children'
  | 'childContentfulBlogPostBodyTextNode.parent.children.id'
  | 'childContentfulBlogPostBodyTextNode.parent.children.children'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.content'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.description'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.type'
  | 'childContentfulBlogPostBodyTextNode.children'
  | 'childContentfulBlogPostBodyTextNode.children.id'
  | 'childContentfulBlogPostBodyTextNode.children.parent.id'
  | 'childContentfulBlogPostBodyTextNode.children.parent.children'
  | 'childContentfulBlogPostBodyTextNode.children.children'
  | 'childContentfulBlogPostBodyTextNode.children.children.id'
  | 'childContentfulBlogPostBodyTextNode.children.children.children'
  | 'childContentfulBlogPostBodyTextNode.children.internal.content'
  | 'childContentfulBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.children.internal.description'
  | 'childContentfulBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.children.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.children.internal.type'
  | 'childContentfulBlogPostBodyTextNode.internal.content'
  | 'childContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.internal.description'
  | 'childContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.internal.type'
  | 'childContentfulBlogPostBodyTextNode.body'
  | 'childContentfulBlogPostBodyTextNode.sys.type'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode'
  | 'childrenContentfulBlogPostDescriptionTextNode.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.sys.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.description'
  | 'childContentfulBlogPostDescriptionTextNode.sys.type'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulBlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBlogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPersonGroupConnection>;
};


type ContentfulPersonConnection_distinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_maxArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_minArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_sumArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

type ContentfulPersonEdge = {
  readonly next: Maybe<ContentfulPerson>;
  readonly node: ContentfulPerson;
  readonly previous: Maybe<ContentfulPerson>;
};

type ContentfulPersonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'sys.revision'
  | 'name'
  | 'title'
  | 'blog_post'
  | 'blog_post.contentful_id'
  | 'blog_post.id'
  | 'blog_post.node_locale'
  | 'blog_post.title'
  | 'blog_post.slug'
  | 'blog_post.publishDate'
  | 'blog_post.heroImage.contentful_id'
  | 'blog_post.heroImage.id'
  | 'blog_post.heroImage.spaceId'
  | 'blog_post.heroImage.createdAt'
  | 'blog_post.heroImage.updatedAt'
  | 'blog_post.heroImage.file.url'
  | 'blog_post.heroImage.file.fileName'
  | 'blog_post.heroImage.file.contentType'
  | 'blog_post.heroImage.file.upload'
  | 'blog_post.heroImage.title'
  | 'blog_post.heroImage.description'
  | 'blog_post.heroImage.node_locale'
  | 'blog_post.heroImage.sys.type'
  | 'blog_post.heroImage.sys.revision'
  | 'blog_post.heroImage.fixed.base64'
  | 'blog_post.heroImage.fixed.tracedSVG'
  | 'blog_post.heroImage.fixed.aspectRatio'
  | 'blog_post.heroImage.fixed.width'
  | 'blog_post.heroImage.fixed.height'
  | 'blog_post.heroImage.fixed.src'
  | 'blog_post.heroImage.fixed.srcSet'
  | 'blog_post.heroImage.fixed.srcWebp'
  | 'blog_post.heroImage.fixed.srcSetWebp'
  | 'blog_post.heroImage.fluid.base64'
  | 'blog_post.heroImage.fluid.tracedSVG'
  | 'blog_post.heroImage.fluid.aspectRatio'
  | 'blog_post.heroImage.fluid.src'
  | 'blog_post.heroImage.fluid.srcSet'
  | 'blog_post.heroImage.fluid.srcWebp'
  | 'blog_post.heroImage.fluid.srcSetWebp'
  | 'blog_post.heroImage.fluid.sizes'
  | 'blog_post.heroImage.gatsbyImageData'
  | 'blog_post.heroImage.resize.base64'
  | 'blog_post.heroImage.resize.tracedSVG'
  | 'blog_post.heroImage.resize.src'
  | 'blog_post.heroImage.resize.width'
  | 'blog_post.heroImage.resize.height'
  | 'blog_post.heroImage.resize.aspectRatio'
  | 'blog_post.heroImage.parent.id'
  | 'blog_post.heroImage.parent.children'
  | 'blog_post.heroImage.children'
  | 'blog_post.heroImage.children.id'
  | 'blog_post.heroImage.children.children'
  | 'blog_post.heroImage.internal.content'
  | 'blog_post.heroImage.internal.contentDigest'
  | 'blog_post.heroImage.internal.description'
  | 'blog_post.heroImage.internal.fieldOwners'
  | 'blog_post.heroImage.internal.ignoreType'
  | 'blog_post.heroImage.internal.mediaType'
  | 'blog_post.heroImage.internal.owner'
  | 'blog_post.heroImage.internal.type'
  | 'blog_post.author.contentful_id'
  | 'blog_post.author.id'
  | 'blog_post.author.node_locale'
  | 'blog_post.author.spaceId'
  | 'blog_post.author.createdAt'
  | 'blog_post.author.updatedAt'
  | 'blog_post.author.sys.type'
  | 'blog_post.author.sys.revision'
  | 'blog_post.author.name'
  | 'blog_post.author.title'
  | 'blog_post.author.blog_post'
  | 'blog_post.author.blog_post.contentful_id'
  | 'blog_post.author.blog_post.id'
  | 'blog_post.author.blog_post.node_locale'
  | 'blog_post.author.blog_post.title'
  | 'blog_post.author.blog_post.slug'
  | 'blog_post.author.blog_post.publishDate'
  | 'blog_post.author.blog_post.tags'
  | 'blog_post.author.blog_post.spaceId'
  | 'blog_post.author.blog_post.createdAt'
  | 'blog_post.author.blog_post.updatedAt'
  | 'blog_post.author.blog_post.gatsbyPath'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.author.blog_post.children'
  | 'blog_post.author.parent.id'
  | 'blog_post.author.parent.children'
  | 'blog_post.author.children'
  | 'blog_post.author.children.id'
  | 'blog_post.author.children.children'
  | 'blog_post.author.internal.content'
  | 'blog_post.author.internal.contentDigest'
  | 'blog_post.author.internal.description'
  | 'blog_post.author.internal.fieldOwners'
  | 'blog_post.author.internal.ignoreType'
  | 'blog_post.author.internal.mediaType'
  | 'blog_post.author.internal.owner'
  | 'blog_post.author.internal.type'
  | 'blog_post.tags'
  | 'blog_post.tags.contentful_id'
  | 'blog_post.tags.id'
  | 'blog_post.tags.node_locale'
  | 'blog_post.tags.name'
  | 'blog_post.tags.slug'
  | 'blog_post.tags.blog_post'
  | 'blog_post.tags.blog_post.contentful_id'
  | 'blog_post.tags.blog_post.id'
  | 'blog_post.tags.blog_post.node_locale'
  | 'blog_post.tags.blog_post.title'
  | 'blog_post.tags.blog_post.slug'
  | 'blog_post.tags.blog_post.publishDate'
  | 'blog_post.tags.blog_post.tags'
  | 'blog_post.tags.blog_post.spaceId'
  | 'blog_post.tags.blog_post.createdAt'
  | 'blog_post.tags.blog_post.updatedAt'
  | 'blog_post.tags.blog_post.gatsbyPath'
  | 'blog_post.tags.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.tags.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.tags.blog_post.children'
  | 'blog_post.tags.spaceId'
  | 'blog_post.tags.createdAt'
  | 'blog_post.tags.updatedAt'
  | 'blog_post.tags.sys.type'
  | 'blog_post.tags.sys.revision'
  | 'blog_post.tags.parent.id'
  | 'blog_post.tags.parent.children'
  | 'blog_post.tags.children'
  | 'blog_post.tags.children.id'
  | 'blog_post.tags.children.children'
  | 'blog_post.tags.internal.content'
  | 'blog_post.tags.internal.contentDigest'
  | 'blog_post.tags.internal.description'
  | 'blog_post.tags.internal.fieldOwners'
  | 'blog_post.tags.internal.ignoreType'
  | 'blog_post.tags.internal.mediaType'
  | 'blog_post.tags.internal.owner'
  | 'blog_post.tags.internal.type'
  | 'blog_post.description.id'
  | 'blog_post.description.parent.id'
  | 'blog_post.description.parent.children'
  | 'blog_post.description.children'
  | 'blog_post.description.children.id'
  | 'blog_post.description.children.children'
  | 'blog_post.description.internal.content'
  | 'blog_post.description.internal.contentDigest'
  | 'blog_post.description.internal.description'
  | 'blog_post.description.internal.fieldOwners'
  | 'blog_post.description.internal.ignoreType'
  | 'blog_post.description.internal.mediaType'
  | 'blog_post.description.internal.owner'
  | 'blog_post.description.internal.type'
  | 'blog_post.description.description'
  | 'blog_post.description.sys.type'
  | 'blog_post.description.childrenMarkdownRemark'
  | 'blog_post.description.childrenMarkdownRemark.id'
  | 'blog_post.description.childrenMarkdownRemark.excerpt'
  | 'blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childrenMarkdownRemark.html'
  | 'blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'blog_post.description.childrenMarkdownRemark.headings'
  | 'blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.description.childrenMarkdownRemark.children'
  | 'blog_post.description.childMarkdownRemark.id'
  | 'blog_post.description.childMarkdownRemark.excerpt'
  | 'blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childMarkdownRemark.html'
  | 'blog_post.description.childMarkdownRemark.htmlAst'
  | 'blog_post.description.childMarkdownRemark.excerptAst'
  | 'blog_post.description.childMarkdownRemark.headings'
  | 'blog_post.description.childMarkdownRemark.timeToRead'
  | 'blog_post.description.childMarkdownRemark.tableOfContents'
  | 'blog_post.description.childMarkdownRemark.children'
  | 'blog_post.body.id'
  | 'blog_post.body.parent.id'
  | 'blog_post.body.parent.children'
  | 'blog_post.body.children'
  | 'blog_post.body.children.id'
  | 'blog_post.body.children.children'
  | 'blog_post.body.internal.content'
  | 'blog_post.body.internal.contentDigest'
  | 'blog_post.body.internal.description'
  | 'blog_post.body.internal.fieldOwners'
  | 'blog_post.body.internal.ignoreType'
  | 'blog_post.body.internal.mediaType'
  | 'blog_post.body.internal.owner'
  | 'blog_post.body.internal.type'
  | 'blog_post.body.body'
  | 'blog_post.body.sys.type'
  | 'blog_post.body.childrenMarkdownRemark'
  | 'blog_post.body.childrenMarkdownRemark.id'
  | 'blog_post.body.childrenMarkdownRemark.excerpt'
  | 'blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childrenMarkdownRemark.html'
  | 'blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'blog_post.body.childrenMarkdownRemark.headings'
  | 'blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.body.childrenMarkdownRemark.children'
  | 'blog_post.body.childMarkdownRemark.id'
  | 'blog_post.body.childMarkdownRemark.excerpt'
  | 'blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childMarkdownRemark.html'
  | 'blog_post.body.childMarkdownRemark.htmlAst'
  | 'blog_post.body.childMarkdownRemark.excerptAst'
  | 'blog_post.body.childMarkdownRemark.headings'
  | 'blog_post.body.childMarkdownRemark.timeToRead'
  | 'blog_post.body.childMarkdownRemark.tableOfContents'
  | 'blog_post.body.childMarkdownRemark.children'
  | 'blog_post.spaceId'
  | 'blog_post.createdAt'
  | 'blog_post.updatedAt'
  | 'blog_post.sys.type'
  | 'blog_post.sys.revision'
  | 'blog_post.gatsbyPath'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.parent.id'
  | 'blog_post.parent.parent.id'
  | 'blog_post.parent.parent.children'
  | 'blog_post.parent.children'
  | 'blog_post.parent.children.id'
  | 'blog_post.parent.children.children'
  | 'blog_post.parent.internal.content'
  | 'blog_post.parent.internal.contentDigest'
  | 'blog_post.parent.internal.description'
  | 'blog_post.parent.internal.fieldOwners'
  | 'blog_post.parent.internal.ignoreType'
  | 'blog_post.parent.internal.mediaType'
  | 'blog_post.parent.internal.owner'
  | 'blog_post.parent.internal.type'
  | 'blog_post.children'
  | 'blog_post.children.id'
  | 'blog_post.children.parent.id'
  | 'blog_post.children.parent.children'
  | 'blog_post.children.children'
  | 'blog_post.children.children.id'
  | 'blog_post.children.children.children'
  | 'blog_post.children.internal.content'
  | 'blog_post.children.internal.contentDigest'
  | 'blog_post.children.internal.description'
  | 'blog_post.children.internal.fieldOwners'
  | 'blog_post.children.internal.ignoreType'
  | 'blog_post.children.internal.mediaType'
  | 'blog_post.children.internal.owner'
  | 'blog_post.children.internal.type'
  | 'blog_post.internal.content'
  | 'blog_post.internal.contentDigest'
  | 'blog_post.internal.description'
  | 'blog_post.internal.fieldOwners'
  | 'blog_post.internal.ignoreType'
  | 'blog_post.internal.mediaType'
  | 'blog_post.internal.owner'
  | 'blog_post.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPersonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulPersonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPersonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
};


type ContentfulTagConnection_distinctArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_maxArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_minArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_sumArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

type ContentfulTagEdge = {
  readonly next: Maybe<ContentfulTag>;
  readonly node: ContentfulTag;
  readonly previous: Maybe<ContentfulTag>;
};

type ContentfulTagFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'slug'
  | 'blog_post'
  | 'blog_post.contentful_id'
  | 'blog_post.id'
  | 'blog_post.node_locale'
  | 'blog_post.title'
  | 'blog_post.slug'
  | 'blog_post.publishDate'
  | 'blog_post.heroImage.contentful_id'
  | 'blog_post.heroImage.id'
  | 'blog_post.heroImage.spaceId'
  | 'blog_post.heroImage.createdAt'
  | 'blog_post.heroImage.updatedAt'
  | 'blog_post.heroImage.file.url'
  | 'blog_post.heroImage.file.fileName'
  | 'blog_post.heroImage.file.contentType'
  | 'blog_post.heroImage.file.upload'
  | 'blog_post.heroImage.title'
  | 'blog_post.heroImage.description'
  | 'blog_post.heroImage.node_locale'
  | 'blog_post.heroImage.sys.type'
  | 'blog_post.heroImage.sys.revision'
  | 'blog_post.heroImage.fixed.base64'
  | 'blog_post.heroImage.fixed.tracedSVG'
  | 'blog_post.heroImage.fixed.aspectRatio'
  | 'blog_post.heroImage.fixed.width'
  | 'blog_post.heroImage.fixed.height'
  | 'blog_post.heroImage.fixed.src'
  | 'blog_post.heroImage.fixed.srcSet'
  | 'blog_post.heroImage.fixed.srcWebp'
  | 'blog_post.heroImage.fixed.srcSetWebp'
  | 'blog_post.heroImage.fluid.base64'
  | 'blog_post.heroImage.fluid.tracedSVG'
  | 'blog_post.heroImage.fluid.aspectRatio'
  | 'blog_post.heroImage.fluid.src'
  | 'blog_post.heroImage.fluid.srcSet'
  | 'blog_post.heroImage.fluid.srcWebp'
  | 'blog_post.heroImage.fluid.srcSetWebp'
  | 'blog_post.heroImage.fluid.sizes'
  | 'blog_post.heroImage.gatsbyImageData'
  | 'blog_post.heroImage.resize.base64'
  | 'blog_post.heroImage.resize.tracedSVG'
  | 'blog_post.heroImage.resize.src'
  | 'blog_post.heroImage.resize.width'
  | 'blog_post.heroImage.resize.height'
  | 'blog_post.heroImage.resize.aspectRatio'
  | 'blog_post.heroImage.parent.id'
  | 'blog_post.heroImage.parent.children'
  | 'blog_post.heroImage.children'
  | 'blog_post.heroImage.children.id'
  | 'blog_post.heroImage.children.children'
  | 'blog_post.heroImage.internal.content'
  | 'blog_post.heroImage.internal.contentDigest'
  | 'blog_post.heroImage.internal.description'
  | 'blog_post.heroImage.internal.fieldOwners'
  | 'blog_post.heroImage.internal.ignoreType'
  | 'blog_post.heroImage.internal.mediaType'
  | 'blog_post.heroImage.internal.owner'
  | 'blog_post.heroImage.internal.type'
  | 'blog_post.author.contentful_id'
  | 'blog_post.author.id'
  | 'blog_post.author.node_locale'
  | 'blog_post.author.spaceId'
  | 'blog_post.author.createdAt'
  | 'blog_post.author.updatedAt'
  | 'blog_post.author.sys.type'
  | 'blog_post.author.sys.revision'
  | 'blog_post.author.name'
  | 'blog_post.author.title'
  | 'blog_post.author.blog_post'
  | 'blog_post.author.blog_post.contentful_id'
  | 'blog_post.author.blog_post.id'
  | 'blog_post.author.blog_post.node_locale'
  | 'blog_post.author.blog_post.title'
  | 'blog_post.author.blog_post.slug'
  | 'blog_post.author.blog_post.publishDate'
  | 'blog_post.author.blog_post.tags'
  | 'blog_post.author.blog_post.spaceId'
  | 'blog_post.author.blog_post.createdAt'
  | 'blog_post.author.blog_post.updatedAt'
  | 'blog_post.author.blog_post.gatsbyPath'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.author.blog_post.children'
  | 'blog_post.author.parent.id'
  | 'blog_post.author.parent.children'
  | 'blog_post.author.children'
  | 'blog_post.author.children.id'
  | 'blog_post.author.children.children'
  | 'blog_post.author.internal.content'
  | 'blog_post.author.internal.contentDigest'
  | 'blog_post.author.internal.description'
  | 'blog_post.author.internal.fieldOwners'
  | 'blog_post.author.internal.ignoreType'
  | 'blog_post.author.internal.mediaType'
  | 'blog_post.author.internal.owner'
  | 'blog_post.author.internal.type'
  | 'blog_post.tags'
  | 'blog_post.tags.contentful_id'
  | 'blog_post.tags.id'
  | 'blog_post.tags.node_locale'
  | 'blog_post.tags.name'
  | 'blog_post.tags.slug'
  | 'blog_post.tags.blog_post'
  | 'blog_post.tags.blog_post.contentful_id'
  | 'blog_post.tags.blog_post.id'
  | 'blog_post.tags.blog_post.node_locale'
  | 'blog_post.tags.blog_post.title'
  | 'blog_post.tags.blog_post.slug'
  | 'blog_post.tags.blog_post.publishDate'
  | 'blog_post.tags.blog_post.tags'
  | 'blog_post.tags.blog_post.spaceId'
  | 'blog_post.tags.blog_post.createdAt'
  | 'blog_post.tags.blog_post.updatedAt'
  | 'blog_post.tags.blog_post.gatsbyPath'
  | 'blog_post.tags.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.tags.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.tags.blog_post.children'
  | 'blog_post.tags.spaceId'
  | 'blog_post.tags.createdAt'
  | 'blog_post.tags.updatedAt'
  | 'blog_post.tags.sys.type'
  | 'blog_post.tags.sys.revision'
  | 'blog_post.tags.parent.id'
  | 'blog_post.tags.parent.children'
  | 'blog_post.tags.children'
  | 'blog_post.tags.children.id'
  | 'blog_post.tags.children.children'
  | 'blog_post.tags.internal.content'
  | 'blog_post.tags.internal.contentDigest'
  | 'blog_post.tags.internal.description'
  | 'blog_post.tags.internal.fieldOwners'
  | 'blog_post.tags.internal.ignoreType'
  | 'blog_post.tags.internal.mediaType'
  | 'blog_post.tags.internal.owner'
  | 'blog_post.tags.internal.type'
  | 'blog_post.description.id'
  | 'blog_post.description.parent.id'
  | 'blog_post.description.parent.children'
  | 'blog_post.description.children'
  | 'blog_post.description.children.id'
  | 'blog_post.description.children.children'
  | 'blog_post.description.internal.content'
  | 'blog_post.description.internal.contentDigest'
  | 'blog_post.description.internal.description'
  | 'blog_post.description.internal.fieldOwners'
  | 'blog_post.description.internal.ignoreType'
  | 'blog_post.description.internal.mediaType'
  | 'blog_post.description.internal.owner'
  | 'blog_post.description.internal.type'
  | 'blog_post.description.description'
  | 'blog_post.description.sys.type'
  | 'blog_post.description.childrenMarkdownRemark'
  | 'blog_post.description.childrenMarkdownRemark.id'
  | 'blog_post.description.childrenMarkdownRemark.excerpt'
  | 'blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childrenMarkdownRemark.html'
  | 'blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'blog_post.description.childrenMarkdownRemark.headings'
  | 'blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.description.childrenMarkdownRemark.children'
  | 'blog_post.description.childMarkdownRemark.id'
  | 'blog_post.description.childMarkdownRemark.excerpt'
  | 'blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childMarkdownRemark.html'
  | 'blog_post.description.childMarkdownRemark.htmlAst'
  | 'blog_post.description.childMarkdownRemark.excerptAst'
  | 'blog_post.description.childMarkdownRemark.headings'
  | 'blog_post.description.childMarkdownRemark.timeToRead'
  | 'blog_post.description.childMarkdownRemark.tableOfContents'
  | 'blog_post.description.childMarkdownRemark.children'
  | 'blog_post.body.id'
  | 'blog_post.body.parent.id'
  | 'blog_post.body.parent.children'
  | 'blog_post.body.children'
  | 'blog_post.body.children.id'
  | 'blog_post.body.children.children'
  | 'blog_post.body.internal.content'
  | 'blog_post.body.internal.contentDigest'
  | 'blog_post.body.internal.description'
  | 'blog_post.body.internal.fieldOwners'
  | 'blog_post.body.internal.ignoreType'
  | 'blog_post.body.internal.mediaType'
  | 'blog_post.body.internal.owner'
  | 'blog_post.body.internal.type'
  | 'blog_post.body.body'
  | 'blog_post.body.sys.type'
  | 'blog_post.body.childrenMarkdownRemark'
  | 'blog_post.body.childrenMarkdownRemark.id'
  | 'blog_post.body.childrenMarkdownRemark.excerpt'
  | 'blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childrenMarkdownRemark.html'
  | 'blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'blog_post.body.childrenMarkdownRemark.headings'
  | 'blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.body.childrenMarkdownRemark.children'
  | 'blog_post.body.childMarkdownRemark.id'
  | 'blog_post.body.childMarkdownRemark.excerpt'
  | 'blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childMarkdownRemark.html'
  | 'blog_post.body.childMarkdownRemark.htmlAst'
  | 'blog_post.body.childMarkdownRemark.excerptAst'
  | 'blog_post.body.childMarkdownRemark.headings'
  | 'blog_post.body.childMarkdownRemark.timeToRead'
  | 'blog_post.body.childMarkdownRemark.tableOfContents'
  | 'blog_post.body.childMarkdownRemark.children'
  | 'blog_post.spaceId'
  | 'blog_post.createdAt'
  | 'blog_post.updatedAt'
  | 'blog_post.sys.type'
  | 'blog_post.sys.revision'
  | 'blog_post.gatsbyPath'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.parent.id'
  | 'blog_post.parent.parent.id'
  | 'blog_post.parent.parent.children'
  | 'blog_post.parent.children'
  | 'blog_post.parent.children.id'
  | 'blog_post.parent.children.children'
  | 'blog_post.parent.internal.content'
  | 'blog_post.parent.internal.contentDigest'
  | 'blog_post.parent.internal.description'
  | 'blog_post.parent.internal.fieldOwners'
  | 'blog_post.parent.internal.ignoreType'
  | 'blog_post.parent.internal.mediaType'
  | 'blog_post.parent.internal.owner'
  | 'blog_post.parent.internal.type'
  | 'blog_post.children'
  | 'blog_post.children.id'
  | 'blog_post.children.parent.id'
  | 'blog_post.children.parent.children'
  | 'blog_post.children.children'
  | 'blog_post.children.children.id'
  | 'blog_post.children.children.children'
  | 'blog_post.children.internal.content'
  | 'blog_post.children.internal.contentDigest'
  | 'blog_post.children.internal.description'
  | 'blog_post.children.internal.fieldOwners'
  | 'blog_post.children.internal.ignoreType'
  | 'blog_post.children.internal.mediaType'
  | 'blog_post.children.internal.owner'
  | 'blog_post.children.internal.type'
  | 'blog_post.internal.content'
  | 'blog_post.internal.contentDigest'
  | 'blog_post.internal.description'
  | 'blog_post.internal.fieldOwners'
  | 'blog_post.internal.ignoreType'
  | 'blog_post.internal.mediaType'
  | 'blog_post.internal.owner'
  | 'blog_post.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBlogPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostBodyTextNodeGroupConnection>;
};


type contentfulBlogPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_maxArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_minArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_sumArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};

type contentfulBlogPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostBodyTextNode>;
  readonly node: contentfulBlogPostBodyTextNode;
  readonly previous: Maybe<contentfulBlogPostBodyTextNode>;
};

type contentfulBlogPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulBlogPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBlogPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostDescriptionTextNodeGroupConnection>;
};


type contentfulBlogPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_maxArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_minArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_sumArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulBlogPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly node: contentfulBlogPostDescriptionTextNode;
  readonly previous: Maybe<contentfulBlogPostDescriptionTextNode>;
};

type contentfulBlogPostDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'description'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulBlogPostDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBlogPostDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginOptions.maxWidth'
  | 'pluginOptions.plugins.pluginOptions.withWebp'
  | 'pluginOptions.plugins.pluginOptions.loading'
  | 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.plugins.pluginOptions.showCaptions'
  | 'pluginOptions.plugins.pluginOptions.markdownCaptions'
  | 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.plugins.pluginOptions.backgroundColor'
  | 'pluginOptions.plugins.pluginOptions.quality'
  | 'pluginOptions.plugins.pluginOptions.tracedSVG'
  | 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.plugins.pluginOptions.disableBgImage'
  | 'pluginOptions.plugins.pluginOptions.target'
  | 'pluginOptions.plugins.pluginOptions.rel'
  | 'pluginOptions.plugins.pluginOptions.exclude'
  | 'pluginOptions.plugins.pluginOptions.tight'
  | 'pluginOptions.plugins.pluginOptions.ordered'
  | 'pluginOptions.plugins.pluginOptions.fromHeading'
  | 'pluginOptions.plugins.pluginOptions.toHeading'
  | 'pluginOptions.plugins.pluginOptions.className'
  | 'pluginOptions.plugins.pluginOptions.offsetY'
  | 'pluginOptions.plugins.nodeAPIs'
  | 'pluginOptions.plugins.browserAPIs'
  | 'pluginOptions.plugins.ssrAPIs'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.spaceId'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.host'
  | 'pluginOptions.environment'
  | 'pluginOptions.downloadLocal'
  | 'pluginOptions.forceFullSync'
  | 'pluginOptions.pageLimit'
  | 'pluginOptions.assetDownloadWorkers'
  | 'pluginOptions.useNameForId'
  | 'pluginOptions.id'
  | 'pluginOptions.includeInDevelopment'
  | 'pluginOptions.routeChangeEventName'
  | 'pluginOptions.publisherId'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.loading'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.target'
  | 'pluginOptions.rel'
  | 'pluginOptions.exclude'
  | 'pluginOptions.tight'
  | 'pluginOptions.ordered'
  | 'pluginOptions.fromHeading'
  | 'pluginOptions.toHeading'
  | 'pluginOptions.className'
  | 'pluginOptions.offsetY'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.name'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.path'
  | 'pluginOptions.feeds'
  | 'pluginOptions.feeds.query'
  | 'pluginOptions.feeds.output'
  | 'pluginOptions.feeds.title'
  | 'pluginOptions.feeds.feed_url'
  | 'pluginOptions.feeds.site_url'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type IndexArchiveQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type IndexArchiveQuery = { readonly allContentfulBlogPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'updatedAt'>
        & { readonly heroImage: Maybe<Pick<ContentfulAsset, 'gatsbyImageData' | 'description'>>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name' | 'slug'>>>> }
      ) }> } };

type TagsArchiveQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  tagSlug: Maybe<Scalars['String']>;
}>;


type TagsArchiveQuery = { readonly allContentfulBlogPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'updatedAt'>
        & { readonly description: Maybe<Pick<contentfulBlogPostDescriptionTextNode, 'description'>>, readonly heroImage: Maybe<Pick<ContentfulAsset, 'description' | 'gatsbyImageData'>>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name' | 'slug'>>>> }
      ) }> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'apiRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type PortfolioQueryVariables = Exact<{ [key: string]: never; }>;


type PortfolioQuery = { readonly imageUpdate: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly imageCopilin: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type PostBySlugQuery = { readonly contentfulBlogPost: Maybe<(
    Pick<ContentfulBlogPost, 'slug' | 'title' | 'updatedAt' | 'publishDate'>
    & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'name'>>>>, readonly heroImage: Maybe<(
      Pick<ContentfulAsset, 'description' | 'gatsbyImageData'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, readonly description: Maybe<Pick<contentfulBlogPostDescriptionTextNode, 'description'>>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'timeToRead' | 'tableOfContents' | 'html'>> }> }
  )> };

type BioQueryVariables = Exact<{ [key: string]: never; }>;


type BioQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type SidebarProfileQueryVariables = Exact<{ [key: string]: never; }>;


type SidebarProfileQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}