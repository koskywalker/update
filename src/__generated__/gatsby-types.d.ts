/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
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
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ContentfulResolutions>;
  readonly fluid: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ContentfulSizes>;
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


type ContentfulAsset_resolutionsArgs = {
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


type ContentfulAsset_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
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

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
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

enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file.url',
  file___details___size = 'file.details.size',
  file___details___image___width = 'file.details.image.width',
  file___details___image___height = 'file.details.image.height',
  file___fileName = 'file.fileName',
  file___contentType = 'file.contentType',
  file___upload = 'file.upload',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  resize___base64 = 'resize.base64',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___src = 'resize.src',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
  readonly upload: Maybe<StringQueryOperatorInput>;
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
  readonly resolutions: Maybe<ContentfulResolutionsFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly sizes: Maybe<ContentfulSizesFilterInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
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
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
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

type contentfulBlogPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSys>;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBlogPostBodyTextNodeGroupConnection>;
};


type contentfulBlogPostBodyTextNodeConnection_distinctArgs = {
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

enum contentfulBlogPostBodyTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  body = 'body',
  sys___type = 'sys.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulBlogPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

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

type contentfulBlogPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
};


type ContentfulBlogPostConnection_distinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

type contentfulBlogPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSys>;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBlogPostDescriptionTextNodeGroupConnection>;
};


type contentfulBlogPostDescriptionTextNodeConnection_distinctArgs = {
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

enum contentfulBlogPostDescriptionTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  description = 'description',
  sys___type = 'sys.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulBlogPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

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

type contentfulBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

enum ContentfulBlogPostFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  publishDate = 'publishDate',
  heroImage___contentful_id = 'heroImage.contentful_id',
  heroImage___id = 'heroImage.id',
  heroImage___spaceId = 'heroImage.spaceId',
  heroImage___createdAt = 'heroImage.createdAt',
  heroImage___updatedAt = 'heroImage.updatedAt',
  heroImage___file___url = 'heroImage.file.url',
  heroImage___file___details___size = 'heroImage.file.details.size',
  heroImage___file___fileName = 'heroImage.file.fileName',
  heroImage___file___contentType = 'heroImage.file.contentType',
  heroImage___file___upload = 'heroImage.file.upload',
  heroImage___title = 'heroImage.title',
  heroImage___description = 'heroImage.description',
  heroImage___node_locale = 'heroImage.node_locale',
  heroImage___sys___type = 'heroImage.sys.type',
  heroImage___sys___revision = 'heroImage.sys.revision',
  heroImage___fixed___base64 = 'heroImage.fixed.base64',
  heroImage___fixed___tracedSVG = 'heroImage.fixed.tracedSVG',
  heroImage___fixed___aspectRatio = 'heroImage.fixed.aspectRatio',
  heroImage___fixed___width = 'heroImage.fixed.width',
  heroImage___fixed___height = 'heroImage.fixed.height',
  heroImage___fixed___src = 'heroImage.fixed.src',
  heroImage___fixed___srcSet = 'heroImage.fixed.srcSet',
  heroImage___fixed___srcWebp = 'heroImage.fixed.srcWebp',
  heroImage___fixed___srcSetWebp = 'heroImage.fixed.srcSetWebp',
  heroImage___resolutions___base64 = 'heroImage.resolutions.base64',
  heroImage___resolutions___tracedSVG = 'heroImage.resolutions.tracedSVG',
  heroImage___resolutions___aspectRatio = 'heroImage.resolutions.aspectRatio',
  heroImage___resolutions___width = 'heroImage.resolutions.width',
  heroImage___resolutions___height = 'heroImage.resolutions.height',
  heroImage___resolutions___src = 'heroImage.resolutions.src',
  heroImage___resolutions___srcSet = 'heroImage.resolutions.srcSet',
  heroImage___resolutions___srcWebp = 'heroImage.resolutions.srcWebp',
  heroImage___resolutions___srcSetWebp = 'heroImage.resolutions.srcSetWebp',
  heroImage___fluid___base64 = 'heroImage.fluid.base64',
  heroImage___fluid___tracedSVG = 'heroImage.fluid.tracedSVG',
  heroImage___fluid___aspectRatio = 'heroImage.fluid.aspectRatio',
  heroImage___fluid___src = 'heroImage.fluid.src',
  heroImage___fluid___srcSet = 'heroImage.fluid.srcSet',
  heroImage___fluid___srcWebp = 'heroImage.fluid.srcWebp',
  heroImage___fluid___srcSetWebp = 'heroImage.fluid.srcSetWebp',
  heroImage___fluid___sizes = 'heroImage.fluid.sizes',
  heroImage___sizes___base64 = 'heroImage.sizes.base64',
  heroImage___sizes___tracedSVG = 'heroImage.sizes.tracedSVG',
  heroImage___sizes___aspectRatio = 'heroImage.sizes.aspectRatio',
  heroImage___sizes___src = 'heroImage.sizes.src',
  heroImage___sizes___srcSet = 'heroImage.sizes.srcSet',
  heroImage___sizes___srcWebp = 'heroImage.sizes.srcWebp',
  heroImage___sizes___srcSetWebp = 'heroImage.sizes.srcSetWebp',
  heroImage___sizes___sizes = 'heroImage.sizes.sizes',
  heroImage___resize___base64 = 'heroImage.resize.base64',
  heroImage___resize___tracedSVG = 'heroImage.resize.tracedSVG',
  heroImage___resize___src = 'heroImage.resize.src',
  heroImage___resize___width = 'heroImage.resize.width',
  heroImage___resize___height = 'heroImage.resize.height',
  heroImage___resize___aspectRatio = 'heroImage.resize.aspectRatio',
  heroImage___parent___id = 'heroImage.parent.id',
  heroImage___parent___parent___id = 'heroImage.parent.parent.id',
  heroImage___parent___parent___children = 'heroImage.parent.parent.children',
  heroImage___parent___children = 'heroImage.parent.children',
  heroImage___parent___children___id = 'heroImage.parent.children.id',
  heroImage___parent___children___children = 'heroImage.parent.children.children',
  heroImage___parent___internal___content = 'heroImage.parent.internal.content',
  heroImage___parent___internal___contentDigest = 'heroImage.parent.internal.contentDigest',
  heroImage___parent___internal___description = 'heroImage.parent.internal.description',
  heroImage___parent___internal___fieldOwners = 'heroImage.parent.internal.fieldOwners',
  heroImage___parent___internal___ignoreType = 'heroImage.parent.internal.ignoreType',
  heroImage___parent___internal___mediaType = 'heroImage.parent.internal.mediaType',
  heroImage___parent___internal___owner = 'heroImage.parent.internal.owner',
  heroImage___parent___internal___type = 'heroImage.parent.internal.type',
  heroImage___children = 'heroImage.children',
  heroImage___children___id = 'heroImage.children.id',
  heroImage___children___parent___id = 'heroImage.children.parent.id',
  heroImage___children___parent___children = 'heroImage.children.parent.children',
  heroImage___children___children = 'heroImage.children.children',
  heroImage___children___children___id = 'heroImage.children.children.id',
  heroImage___children___children___children = 'heroImage.children.children.children',
  heroImage___children___internal___content = 'heroImage.children.internal.content',
  heroImage___children___internal___contentDigest = 'heroImage.children.internal.contentDigest',
  heroImage___children___internal___description = 'heroImage.children.internal.description',
  heroImage___children___internal___fieldOwners = 'heroImage.children.internal.fieldOwners',
  heroImage___children___internal___ignoreType = 'heroImage.children.internal.ignoreType',
  heroImage___children___internal___mediaType = 'heroImage.children.internal.mediaType',
  heroImage___children___internal___owner = 'heroImage.children.internal.owner',
  heroImage___children___internal___type = 'heroImage.children.internal.type',
  heroImage___internal___content = 'heroImage.internal.content',
  heroImage___internal___contentDigest = 'heroImage.internal.contentDigest',
  heroImage___internal___description = 'heroImage.internal.description',
  heroImage___internal___fieldOwners = 'heroImage.internal.fieldOwners',
  heroImage___internal___ignoreType = 'heroImage.internal.ignoreType',
  heroImage___internal___mediaType = 'heroImage.internal.mediaType',
  heroImage___internal___owner = 'heroImage.internal.owner',
  heroImage___internal___type = 'heroImage.internal.type',
  author___contentful_id = 'author.contentful_id',
  author___id = 'author.id',
  author___node_locale = 'author.node_locale',
  author___spaceId = 'author.spaceId',
  author___createdAt = 'author.createdAt',
  author___updatedAt = 'author.updatedAt',
  author___sys___type = 'author.sys.type',
  author___sys___revision = 'author.sys.revision',
  author___name = 'author.name',
  author___title = 'author.title',
  author___blog_post = 'author.blog_post',
  author___blog_post___contentful_id = 'author.blog_post.contentful_id',
  author___blog_post___id = 'author.blog_post.id',
  author___blog_post___node_locale = 'author.blog_post.node_locale',
  author___blog_post___title = 'author.blog_post.title',
  author___blog_post___slug = 'author.blog_post.slug',
  author___blog_post___publishDate = 'author.blog_post.publishDate',
  author___blog_post___heroImage___contentful_id = 'author.blog_post.heroImage.contentful_id',
  author___blog_post___heroImage___id = 'author.blog_post.heroImage.id',
  author___blog_post___heroImage___spaceId = 'author.blog_post.heroImage.spaceId',
  author___blog_post___heroImage___createdAt = 'author.blog_post.heroImage.createdAt',
  author___blog_post___heroImage___updatedAt = 'author.blog_post.heroImage.updatedAt',
  author___blog_post___heroImage___title = 'author.blog_post.heroImage.title',
  author___blog_post___heroImage___description = 'author.blog_post.heroImage.description',
  author___blog_post___heroImage___node_locale = 'author.blog_post.heroImage.node_locale',
  author___blog_post___heroImage___children = 'author.blog_post.heroImage.children',
  author___blog_post___author___contentful_id = 'author.blog_post.author.contentful_id',
  author___blog_post___author___id = 'author.blog_post.author.id',
  author___blog_post___author___node_locale = 'author.blog_post.author.node_locale',
  author___blog_post___author___spaceId = 'author.blog_post.author.spaceId',
  author___blog_post___author___createdAt = 'author.blog_post.author.createdAt',
  author___blog_post___author___updatedAt = 'author.blog_post.author.updatedAt',
  author___blog_post___author___name = 'author.blog_post.author.name',
  author___blog_post___author___title = 'author.blog_post.author.title',
  author___blog_post___author___blog_post = 'author.blog_post.author.blog_post',
  author___blog_post___author___children = 'author.blog_post.author.children',
  author___blog_post___tags = 'author.blog_post.tags',
  author___blog_post___tags___contentful_id = 'author.blog_post.tags.contentful_id',
  author___blog_post___tags___id = 'author.blog_post.tags.id',
  author___blog_post___tags___node_locale = 'author.blog_post.tags.node_locale',
  author___blog_post___tags___name = 'author.blog_post.tags.name',
  author___blog_post___tags___slug = 'author.blog_post.tags.slug',
  author___blog_post___tags___blog_post = 'author.blog_post.tags.blog_post',
  author___blog_post___tags___spaceId = 'author.blog_post.tags.spaceId',
  author___blog_post___tags___createdAt = 'author.blog_post.tags.createdAt',
  author___blog_post___tags___updatedAt = 'author.blog_post.tags.updatedAt',
  author___blog_post___tags___children = 'author.blog_post.tags.children',
  author___blog_post___description___id = 'author.blog_post.description.id',
  author___blog_post___description___children = 'author.blog_post.description.children',
  author___blog_post___description___description = 'author.blog_post.description.description',
  author___blog_post___body___id = 'author.blog_post.body.id',
  author___blog_post___body___children = 'author.blog_post.body.children',
  author___blog_post___body___body = 'author.blog_post.body.body',
  author___blog_post___spaceId = 'author.blog_post.spaceId',
  author___blog_post___createdAt = 'author.blog_post.createdAt',
  author___blog_post___updatedAt = 'author.blog_post.updatedAt',
  author___blog_post___sys___type = 'author.blog_post.sys.type',
  author___blog_post___sys___revision = 'author.blog_post.sys.revision',
  author___blog_post___gatsbyPath = 'author.blog_post.gatsbyPath',
  author___blog_post___parent___id = 'author.blog_post.parent.id',
  author___blog_post___parent___children = 'author.blog_post.parent.children',
  author___blog_post___children = 'author.blog_post.children',
  author___blog_post___children___id = 'author.blog_post.children.id',
  author___blog_post___children___children = 'author.blog_post.children.children',
  author___blog_post___internal___content = 'author.blog_post.internal.content',
  author___blog_post___internal___contentDigest = 'author.blog_post.internal.contentDigest',
  author___blog_post___internal___description = 'author.blog_post.internal.description',
  author___blog_post___internal___fieldOwners = 'author.blog_post.internal.fieldOwners',
  author___blog_post___internal___ignoreType = 'author.blog_post.internal.ignoreType',
  author___blog_post___internal___mediaType = 'author.blog_post.internal.mediaType',
  author___blog_post___internal___owner = 'author.blog_post.internal.owner',
  author___blog_post___internal___type = 'author.blog_post.internal.type',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___id = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.id',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___children = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.children',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___description = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.description',
  author___blog_post___childContentfulBlogPostBodyTextNode___id = 'author.blog_post.childContentfulBlogPostBodyTextNode.id',
  author___blog_post___childContentfulBlogPostBodyTextNode___children = 'author.blog_post.childContentfulBlogPostBodyTextNode.children',
  author___blog_post___childContentfulBlogPostBodyTextNode___body = 'author.blog_post.childContentfulBlogPostBodyTextNode.body',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  tags = 'tags',
  tags___contentful_id = 'tags.contentful_id',
  tags___id = 'tags.id',
  tags___node_locale = 'tags.node_locale',
  tags___name = 'tags.name',
  tags___slug = 'tags.slug',
  tags___blog_post = 'tags.blog_post',
  tags___blog_post___contentful_id = 'tags.blog_post.contentful_id',
  tags___blog_post___id = 'tags.blog_post.id',
  tags___blog_post___node_locale = 'tags.blog_post.node_locale',
  tags___blog_post___title = 'tags.blog_post.title',
  tags___blog_post___slug = 'tags.blog_post.slug',
  tags___blog_post___publishDate = 'tags.blog_post.publishDate',
  tags___blog_post___heroImage___contentful_id = 'tags.blog_post.heroImage.contentful_id',
  tags___blog_post___heroImage___id = 'tags.blog_post.heroImage.id',
  tags___blog_post___heroImage___spaceId = 'tags.blog_post.heroImage.spaceId',
  tags___blog_post___heroImage___createdAt = 'tags.blog_post.heroImage.createdAt',
  tags___blog_post___heroImage___updatedAt = 'tags.blog_post.heroImage.updatedAt',
  tags___blog_post___heroImage___title = 'tags.blog_post.heroImage.title',
  tags___blog_post___heroImage___description = 'tags.blog_post.heroImage.description',
  tags___blog_post___heroImage___node_locale = 'tags.blog_post.heroImage.node_locale',
  tags___blog_post___heroImage___children = 'tags.blog_post.heroImage.children',
  tags___blog_post___author___contentful_id = 'tags.blog_post.author.contentful_id',
  tags___blog_post___author___id = 'tags.blog_post.author.id',
  tags___blog_post___author___node_locale = 'tags.blog_post.author.node_locale',
  tags___blog_post___author___spaceId = 'tags.blog_post.author.spaceId',
  tags___blog_post___author___createdAt = 'tags.blog_post.author.createdAt',
  tags___blog_post___author___updatedAt = 'tags.blog_post.author.updatedAt',
  tags___blog_post___author___name = 'tags.blog_post.author.name',
  tags___blog_post___author___title = 'tags.blog_post.author.title',
  tags___blog_post___author___blog_post = 'tags.blog_post.author.blog_post',
  tags___blog_post___author___children = 'tags.blog_post.author.children',
  tags___blog_post___tags = 'tags.blog_post.tags',
  tags___blog_post___tags___contentful_id = 'tags.blog_post.tags.contentful_id',
  tags___blog_post___tags___id = 'tags.blog_post.tags.id',
  tags___blog_post___tags___node_locale = 'tags.blog_post.tags.node_locale',
  tags___blog_post___tags___name = 'tags.blog_post.tags.name',
  tags___blog_post___tags___slug = 'tags.blog_post.tags.slug',
  tags___blog_post___tags___blog_post = 'tags.blog_post.tags.blog_post',
  tags___blog_post___tags___spaceId = 'tags.blog_post.tags.spaceId',
  tags___blog_post___tags___createdAt = 'tags.blog_post.tags.createdAt',
  tags___blog_post___tags___updatedAt = 'tags.blog_post.tags.updatedAt',
  tags___blog_post___tags___children = 'tags.blog_post.tags.children',
  tags___blog_post___description___id = 'tags.blog_post.description.id',
  tags___blog_post___description___children = 'tags.blog_post.description.children',
  tags___blog_post___description___description = 'tags.blog_post.description.description',
  tags___blog_post___body___id = 'tags.blog_post.body.id',
  tags___blog_post___body___children = 'tags.blog_post.body.children',
  tags___blog_post___body___body = 'tags.blog_post.body.body',
  tags___blog_post___spaceId = 'tags.blog_post.spaceId',
  tags___blog_post___createdAt = 'tags.blog_post.createdAt',
  tags___blog_post___updatedAt = 'tags.blog_post.updatedAt',
  tags___blog_post___sys___type = 'tags.blog_post.sys.type',
  tags___blog_post___sys___revision = 'tags.blog_post.sys.revision',
  tags___blog_post___gatsbyPath = 'tags.blog_post.gatsbyPath',
  tags___blog_post___parent___id = 'tags.blog_post.parent.id',
  tags___blog_post___parent___children = 'tags.blog_post.parent.children',
  tags___blog_post___children = 'tags.blog_post.children',
  tags___blog_post___children___id = 'tags.blog_post.children.id',
  tags___blog_post___children___children = 'tags.blog_post.children.children',
  tags___blog_post___internal___content = 'tags.blog_post.internal.content',
  tags___blog_post___internal___contentDigest = 'tags.blog_post.internal.contentDigest',
  tags___blog_post___internal___description = 'tags.blog_post.internal.description',
  tags___blog_post___internal___fieldOwners = 'tags.blog_post.internal.fieldOwners',
  tags___blog_post___internal___ignoreType = 'tags.blog_post.internal.ignoreType',
  tags___blog_post___internal___mediaType = 'tags.blog_post.internal.mediaType',
  tags___blog_post___internal___owner = 'tags.blog_post.internal.owner',
  tags___blog_post___internal___type = 'tags.blog_post.internal.type',
  tags___blog_post___childContentfulBlogPostDescriptionTextNode___id = 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.id',
  tags___blog_post___childContentfulBlogPostDescriptionTextNode___children = 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.children',
  tags___blog_post___childContentfulBlogPostDescriptionTextNode___description = 'tags.blog_post.childContentfulBlogPostDescriptionTextNode.description',
  tags___blog_post___childContentfulBlogPostBodyTextNode___id = 'tags.blog_post.childContentfulBlogPostBodyTextNode.id',
  tags___blog_post___childContentfulBlogPostBodyTextNode___children = 'tags.blog_post.childContentfulBlogPostBodyTextNode.children',
  tags___blog_post___childContentfulBlogPostBodyTextNode___body = 'tags.blog_post.childContentfulBlogPostBodyTextNode.body',
  tags___spaceId = 'tags.spaceId',
  tags___createdAt = 'tags.createdAt',
  tags___updatedAt = 'tags.updatedAt',
  tags___sys___type = 'tags.sys.type',
  tags___sys___revision = 'tags.sys.revision',
  tags___parent___id = 'tags.parent.id',
  tags___parent___parent___id = 'tags.parent.parent.id',
  tags___parent___parent___children = 'tags.parent.parent.children',
  tags___parent___children = 'tags.parent.children',
  tags___parent___children___id = 'tags.parent.children.id',
  tags___parent___children___children = 'tags.parent.children.children',
  tags___parent___internal___content = 'tags.parent.internal.content',
  tags___parent___internal___contentDigest = 'tags.parent.internal.contentDigest',
  tags___parent___internal___description = 'tags.parent.internal.description',
  tags___parent___internal___fieldOwners = 'tags.parent.internal.fieldOwners',
  tags___parent___internal___ignoreType = 'tags.parent.internal.ignoreType',
  tags___parent___internal___mediaType = 'tags.parent.internal.mediaType',
  tags___parent___internal___owner = 'tags.parent.internal.owner',
  tags___parent___internal___type = 'tags.parent.internal.type',
  tags___children = 'tags.children',
  tags___children___id = 'tags.children.id',
  tags___children___parent___id = 'tags.children.parent.id',
  tags___children___parent___children = 'tags.children.parent.children',
  tags___children___children = 'tags.children.children',
  tags___children___children___id = 'tags.children.children.id',
  tags___children___children___children = 'tags.children.children.children',
  tags___children___internal___content = 'tags.children.internal.content',
  tags___children___internal___contentDigest = 'tags.children.internal.contentDigest',
  tags___children___internal___description = 'tags.children.internal.description',
  tags___children___internal___fieldOwners = 'tags.children.internal.fieldOwners',
  tags___children___internal___ignoreType = 'tags.children.internal.ignoreType',
  tags___children___internal___mediaType = 'tags.children.internal.mediaType',
  tags___children___internal___owner = 'tags.children.internal.owner',
  tags___children___internal___type = 'tags.children.internal.type',
  tags___internal___content = 'tags.internal.content',
  tags___internal___contentDigest = 'tags.internal.contentDigest',
  tags___internal___description = 'tags.internal.description',
  tags___internal___fieldOwners = 'tags.internal.fieldOwners',
  tags___internal___ignoreType = 'tags.internal.ignoreType',
  tags___internal___mediaType = 'tags.internal.mediaType',
  tags___internal___owner = 'tags.internal.owner',
  tags___internal___type = 'tags.internal.type',
  description___id = 'description.id',
  description___parent___id = 'description.parent.id',
  description___parent___parent___id = 'description.parent.parent.id',
  description___parent___parent___children = 'description.parent.parent.children',
  description___parent___children = 'description.parent.children',
  description___parent___children___id = 'description.parent.children.id',
  description___parent___children___children = 'description.parent.children.children',
  description___parent___internal___content = 'description.parent.internal.content',
  description___parent___internal___contentDigest = 'description.parent.internal.contentDigest',
  description___parent___internal___description = 'description.parent.internal.description',
  description___parent___internal___fieldOwners = 'description.parent.internal.fieldOwners',
  description___parent___internal___ignoreType = 'description.parent.internal.ignoreType',
  description___parent___internal___mediaType = 'description.parent.internal.mediaType',
  description___parent___internal___owner = 'description.parent.internal.owner',
  description___parent___internal___type = 'description.parent.internal.type',
  description___children = 'description.children',
  description___children___id = 'description.children.id',
  description___children___parent___id = 'description.children.parent.id',
  description___children___parent___children = 'description.children.parent.children',
  description___children___children = 'description.children.children',
  description___children___children___id = 'description.children.children.id',
  description___children___children___children = 'description.children.children.children',
  description___children___internal___content = 'description.children.internal.content',
  description___children___internal___contentDigest = 'description.children.internal.contentDigest',
  description___children___internal___description = 'description.children.internal.description',
  description___children___internal___fieldOwners = 'description.children.internal.fieldOwners',
  description___children___internal___ignoreType = 'description.children.internal.ignoreType',
  description___children___internal___mediaType = 'description.children.internal.mediaType',
  description___children___internal___owner = 'description.children.internal.owner',
  description___children___internal___type = 'description.children.internal.type',
  description___internal___content = 'description.internal.content',
  description___internal___contentDigest = 'description.internal.contentDigest',
  description___internal___description = 'description.internal.description',
  description___internal___fieldOwners = 'description.internal.fieldOwners',
  description___internal___ignoreType = 'description.internal.ignoreType',
  description___internal___mediaType = 'description.internal.mediaType',
  description___internal___owner = 'description.internal.owner',
  description___internal___type = 'description.internal.type',
  description___description = 'description.description',
  description___sys___type = 'description.sys.type',
  description___childMarkdownRemark___id = 'description.childMarkdownRemark.id',
  description___childMarkdownRemark___frontmatter___title = 'description.childMarkdownRemark.frontmatter.title',
  description___childMarkdownRemark___excerpt = 'description.childMarkdownRemark.excerpt',
  description___childMarkdownRemark___rawMarkdownBody = 'description.childMarkdownRemark.rawMarkdownBody',
  description___childMarkdownRemark___html = 'description.childMarkdownRemark.html',
  description___childMarkdownRemark___htmlAst = 'description.childMarkdownRemark.htmlAst',
  description___childMarkdownRemark___excerptAst = 'description.childMarkdownRemark.excerptAst',
  description___childMarkdownRemark___headings = 'description.childMarkdownRemark.headings',
  description___childMarkdownRemark___headings___id = 'description.childMarkdownRemark.headings.id',
  description___childMarkdownRemark___headings___value = 'description.childMarkdownRemark.headings.value',
  description___childMarkdownRemark___headings___depth = 'description.childMarkdownRemark.headings.depth',
  description___childMarkdownRemark___timeToRead = 'description.childMarkdownRemark.timeToRead',
  description___childMarkdownRemark___tableOfContents = 'description.childMarkdownRemark.tableOfContents',
  description___childMarkdownRemark___wordCount___paragraphs = 'description.childMarkdownRemark.wordCount.paragraphs',
  description___childMarkdownRemark___wordCount___sentences = 'description.childMarkdownRemark.wordCount.sentences',
  description___childMarkdownRemark___wordCount___words = 'description.childMarkdownRemark.wordCount.words',
  description___childMarkdownRemark___parent___id = 'description.childMarkdownRemark.parent.id',
  description___childMarkdownRemark___parent___children = 'description.childMarkdownRemark.parent.children',
  description___childMarkdownRemark___children = 'description.childMarkdownRemark.children',
  description___childMarkdownRemark___children___id = 'description.childMarkdownRemark.children.id',
  description___childMarkdownRemark___children___children = 'description.childMarkdownRemark.children.children',
  description___childMarkdownRemark___internal___content = 'description.childMarkdownRemark.internal.content',
  description___childMarkdownRemark___internal___contentDigest = 'description.childMarkdownRemark.internal.contentDigest',
  description___childMarkdownRemark___internal___description = 'description.childMarkdownRemark.internal.description',
  description___childMarkdownRemark___internal___fieldOwners = 'description.childMarkdownRemark.internal.fieldOwners',
  description___childMarkdownRemark___internal___ignoreType = 'description.childMarkdownRemark.internal.ignoreType',
  description___childMarkdownRemark___internal___mediaType = 'description.childMarkdownRemark.internal.mediaType',
  description___childMarkdownRemark___internal___owner = 'description.childMarkdownRemark.internal.owner',
  description___childMarkdownRemark___internal___type = 'description.childMarkdownRemark.internal.type',
  body___id = 'body.id',
  body___parent___id = 'body.parent.id',
  body___parent___parent___id = 'body.parent.parent.id',
  body___parent___parent___children = 'body.parent.parent.children',
  body___parent___children = 'body.parent.children',
  body___parent___children___id = 'body.parent.children.id',
  body___parent___children___children = 'body.parent.children.children',
  body___parent___internal___content = 'body.parent.internal.content',
  body___parent___internal___contentDigest = 'body.parent.internal.contentDigest',
  body___parent___internal___description = 'body.parent.internal.description',
  body___parent___internal___fieldOwners = 'body.parent.internal.fieldOwners',
  body___parent___internal___ignoreType = 'body.parent.internal.ignoreType',
  body___parent___internal___mediaType = 'body.parent.internal.mediaType',
  body___parent___internal___owner = 'body.parent.internal.owner',
  body___parent___internal___type = 'body.parent.internal.type',
  body___children = 'body.children',
  body___children___id = 'body.children.id',
  body___children___parent___id = 'body.children.parent.id',
  body___children___parent___children = 'body.children.parent.children',
  body___children___children = 'body.children.children',
  body___children___children___id = 'body.children.children.id',
  body___children___children___children = 'body.children.children.children',
  body___children___internal___content = 'body.children.internal.content',
  body___children___internal___contentDigest = 'body.children.internal.contentDigest',
  body___children___internal___description = 'body.children.internal.description',
  body___children___internal___fieldOwners = 'body.children.internal.fieldOwners',
  body___children___internal___ignoreType = 'body.children.internal.ignoreType',
  body___children___internal___mediaType = 'body.children.internal.mediaType',
  body___children___internal___owner = 'body.children.internal.owner',
  body___children___internal___type = 'body.children.internal.type',
  body___internal___content = 'body.internal.content',
  body___internal___contentDigest = 'body.internal.contentDigest',
  body___internal___description = 'body.internal.description',
  body___internal___fieldOwners = 'body.internal.fieldOwners',
  body___internal___ignoreType = 'body.internal.ignoreType',
  body___internal___mediaType = 'body.internal.mediaType',
  body___internal___owner = 'body.internal.owner',
  body___internal___type = 'body.internal.type',
  body___body = 'body.body',
  body___sys___type = 'body.sys.type',
  body___childMarkdownRemark___id = 'body.childMarkdownRemark.id',
  body___childMarkdownRemark___frontmatter___title = 'body.childMarkdownRemark.frontmatter.title',
  body___childMarkdownRemark___excerpt = 'body.childMarkdownRemark.excerpt',
  body___childMarkdownRemark___rawMarkdownBody = 'body.childMarkdownRemark.rawMarkdownBody',
  body___childMarkdownRemark___html = 'body.childMarkdownRemark.html',
  body___childMarkdownRemark___htmlAst = 'body.childMarkdownRemark.htmlAst',
  body___childMarkdownRemark___excerptAst = 'body.childMarkdownRemark.excerptAst',
  body___childMarkdownRemark___headings = 'body.childMarkdownRemark.headings',
  body___childMarkdownRemark___headings___id = 'body.childMarkdownRemark.headings.id',
  body___childMarkdownRemark___headings___value = 'body.childMarkdownRemark.headings.value',
  body___childMarkdownRemark___headings___depth = 'body.childMarkdownRemark.headings.depth',
  body___childMarkdownRemark___timeToRead = 'body.childMarkdownRemark.timeToRead',
  body___childMarkdownRemark___tableOfContents = 'body.childMarkdownRemark.tableOfContents',
  body___childMarkdownRemark___wordCount___paragraphs = 'body.childMarkdownRemark.wordCount.paragraphs',
  body___childMarkdownRemark___wordCount___sentences = 'body.childMarkdownRemark.wordCount.sentences',
  body___childMarkdownRemark___wordCount___words = 'body.childMarkdownRemark.wordCount.words',
  body___childMarkdownRemark___parent___id = 'body.childMarkdownRemark.parent.id',
  body___childMarkdownRemark___parent___children = 'body.childMarkdownRemark.parent.children',
  body___childMarkdownRemark___children = 'body.childMarkdownRemark.children',
  body___childMarkdownRemark___children___id = 'body.childMarkdownRemark.children.id',
  body___childMarkdownRemark___children___children = 'body.childMarkdownRemark.children.children',
  body___childMarkdownRemark___internal___content = 'body.childMarkdownRemark.internal.content',
  body___childMarkdownRemark___internal___contentDigest = 'body.childMarkdownRemark.internal.contentDigest',
  body___childMarkdownRemark___internal___description = 'body.childMarkdownRemark.internal.description',
  body___childMarkdownRemark___internal___fieldOwners = 'body.childMarkdownRemark.internal.fieldOwners',
  body___childMarkdownRemark___internal___ignoreType = 'body.childMarkdownRemark.internal.ignoreType',
  body___childMarkdownRemark___internal___mediaType = 'body.childMarkdownRemark.internal.mediaType',
  body___childMarkdownRemark___internal___owner = 'body.childMarkdownRemark.internal.owner',
  body___childMarkdownRemark___internal___type = 'body.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  gatsbyPath = 'gatsbyPath',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childContentfulBlogPostDescriptionTextNode___id = 'childContentfulBlogPostDescriptionTextNode.id',
  childContentfulBlogPostDescriptionTextNode___parent___id = 'childContentfulBlogPostDescriptionTextNode.parent.id',
  childContentfulBlogPostDescriptionTextNode___parent___parent___id = 'childContentfulBlogPostDescriptionTextNode.parent.parent.id',
  childContentfulBlogPostDescriptionTextNode___parent___parent___children = 'childContentfulBlogPostDescriptionTextNode.parent.parent.children',
  childContentfulBlogPostDescriptionTextNode___parent___children = 'childContentfulBlogPostDescriptionTextNode.parent.children',
  childContentfulBlogPostDescriptionTextNode___parent___children___id = 'childContentfulBlogPostDescriptionTextNode.parent.children.id',
  childContentfulBlogPostDescriptionTextNode___parent___children___children = 'childContentfulBlogPostDescriptionTextNode.parent.children.children',
  childContentfulBlogPostDescriptionTextNode___parent___internal___content = 'childContentfulBlogPostDescriptionTextNode.parent.internal.content',
  childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___parent___internal___description = 'childContentfulBlogPostDescriptionTextNode.parent.internal.description',
  childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.parent.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___parent___internal___owner = 'childContentfulBlogPostDescriptionTextNode.parent.internal.owner',
  childContentfulBlogPostDescriptionTextNode___parent___internal___type = 'childContentfulBlogPostDescriptionTextNode.parent.internal.type',
  childContentfulBlogPostDescriptionTextNode___children = 'childContentfulBlogPostDescriptionTextNode.children',
  childContentfulBlogPostDescriptionTextNode___children___id = 'childContentfulBlogPostDescriptionTextNode.children.id',
  childContentfulBlogPostDescriptionTextNode___children___parent___id = 'childContentfulBlogPostDescriptionTextNode.children.parent.id',
  childContentfulBlogPostDescriptionTextNode___children___parent___children = 'childContentfulBlogPostDescriptionTextNode.children.parent.children',
  childContentfulBlogPostDescriptionTextNode___children___children = 'childContentfulBlogPostDescriptionTextNode.children.children',
  childContentfulBlogPostDescriptionTextNode___children___children___id = 'childContentfulBlogPostDescriptionTextNode.children.children.id',
  childContentfulBlogPostDescriptionTextNode___children___children___children = 'childContentfulBlogPostDescriptionTextNode.children.children.children',
  childContentfulBlogPostDescriptionTextNode___children___internal___content = 'childContentfulBlogPostDescriptionTextNode.children.internal.content',
  childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.children.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___children___internal___description = 'childContentfulBlogPostDescriptionTextNode.children.internal.description',
  childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.children.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___children___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.children.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___children___internal___owner = 'childContentfulBlogPostDescriptionTextNode.children.internal.owner',
  childContentfulBlogPostDescriptionTextNode___children___internal___type = 'childContentfulBlogPostDescriptionTextNode.children.internal.type',
  childContentfulBlogPostDescriptionTextNode___internal___content = 'childContentfulBlogPostDescriptionTextNode.internal.content',
  childContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___internal___description = 'childContentfulBlogPostDescriptionTextNode.internal.description',
  childContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___internal___owner = 'childContentfulBlogPostDescriptionTextNode.internal.owner',
  childContentfulBlogPostDescriptionTextNode___internal___type = 'childContentfulBlogPostDescriptionTextNode.internal.type',
  childContentfulBlogPostDescriptionTextNode___description = 'childContentfulBlogPostDescriptionTextNode.description',
  childContentfulBlogPostDescriptionTextNode___sys___type = 'childContentfulBlogPostDescriptionTextNode.sys.type',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type',
  childContentfulBlogPostBodyTextNode___id = 'childContentfulBlogPostBodyTextNode.id',
  childContentfulBlogPostBodyTextNode___parent___id = 'childContentfulBlogPostBodyTextNode.parent.id',
  childContentfulBlogPostBodyTextNode___parent___parent___id = 'childContentfulBlogPostBodyTextNode.parent.parent.id',
  childContentfulBlogPostBodyTextNode___parent___parent___children = 'childContentfulBlogPostBodyTextNode.parent.parent.children',
  childContentfulBlogPostBodyTextNode___parent___children = 'childContentfulBlogPostBodyTextNode.parent.children',
  childContentfulBlogPostBodyTextNode___parent___children___id = 'childContentfulBlogPostBodyTextNode.parent.children.id',
  childContentfulBlogPostBodyTextNode___parent___children___children = 'childContentfulBlogPostBodyTextNode.parent.children.children',
  childContentfulBlogPostBodyTextNode___parent___internal___content = 'childContentfulBlogPostBodyTextNode.parent.internal.content',
  childContentfulBlogPostBodyTextNode___parent___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.parent.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___parent___internal___description = 'childContentfulBlogPostBodyTextNode.parent.internal.description',
  childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.parent.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___parent___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.parent.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___parent___internal___mediaType = 'childContentfulBlogPostBodyTextNode.parent.internal.mediaType',
  childContentfulBlogPostBodyTextNode___parent___internal___owner = 'childContentfulBlogPostBodyTextNode.parent.internal.owner',
  childContentfulBlogPostBodyTextNode___parent___internal___type = 'childContentfulBlogPostBodyTextNode.parent.internal.type',
  childContentfulBlogPostBodyTextNode___children = 'childContentfulBlogPostBodyTextNode.children',
  childContentfulBlogPostBodyTextNode___children___id = 'childContentfulBlogPostBodyTextNode.children.id',
  childContentfulBlogPostBodyTextNode___children___parent___id = 'childContentfulBlogPostBodyTextNode.children.parent.id',
  childContentfulBlogPostBodyTextNode___children___parent___children = 'childContentfulBlogPostBodyTextNode.children.parent.children',
  childContentfulBlogPostBodyTextNode___children___children = 'childContentfulBlogPostBodyTextNode.children.children',
  childContentfulBlogPostBodyTextNode___children___children___id = 'childContentfulBlogPostBodyTextNode.children.children.id',
  childContentfulBlogPostBodyTextNode___children___children___children = 'childContentfulBlogPostBodyTextNode.children.children.children',
  childContentfulBlogPostBodyTextNode___children___internal___content = 'childContentfulBlogPostBodyTextNode.children.internal.content',
  childContentfulBlogPostBodyTextNode___children___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.children.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___children___internal___description = 'childContentfulBlogPostBodyTextNode.children.internal.description',
  childContentfulBlogPostBodyTextNode___children___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.children.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___children___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.children.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___children___internal___mediaType = 'childContentfulBlogPostBodyTextNode.children.internal.mediaType',
  childContentfulBlogPostBodyTextNode___children___internal___owner = 'childContentfulBlogPostBodyTextNode.children.internal.owner',
  childContentfulBlogPostBodyTextNode___children___internal___type = 'childContentfulBlogPostBodyTextNode.children.internal.type',
  childContentfulBlogPostBodyTextNode___internal___content = 'childContentfulBlogPostBodyTextNode.internal.content',
  childContentfulBlogPostBodyTextNode___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___internal___description = 'childContentfulBlogPostBodyTextNode.internal.description',
  childContentfulBlogPostBodyTextNode___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___internal___mediaType = 'childContentfulBlogPostBodyTextNode.internal.mediaType',
  childContentfulBlogPostBodyTextNode___internal___owner = 'childContentfulBlogPostBodyTextNode.internal.owner',
  childContentfulBlogPostBodyTextNode___internal___type = 'childContentfulBlogPostBodyTextNode.internal.type',
  childContentfulBlogPostBodyTextNode___body = 'childContentfulBlogPostBodyTextNode.body',
  childContentfulBlogPostBodyTextNode___sys___type = 'childContentfulBlogPostBodyTextNode.sys.type',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type'
}

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
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
};

type ContentfulBlogPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulBlogPostFilterInput>;
};

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

type ContentfulBlogPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
};

type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulBlogPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
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

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
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

enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys.type'
}

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

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
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

enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale'
}

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum ContentfulImageCropFocus {
  TOP = 'top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM = 'bottom',
  BOTTOM_RIGHT = 'bottom_left',
  BOTTOM_LEFT = 'bottom_right',
  RIGHT = 'right',
  LEFT = 'left',
  FACE = 'face',
  FACES = 'faces',
  CENTER = 'center'
}

enum ContentfulImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

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

type ContentfulPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPersonGroupConnection>;
};


type ContentfulPersonConnection_distinctArgs = {
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

enum ContentfulPersonFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  sys___revision = 'sys.revision',
  name = 'name',
  title = 'title',
  blog_post = 'blog_post',
  blog_post___contentful_id = 'blog_post.contentful_id',
  blog_post___id = 'blog_post.id',
  blog_post___node_locale = 'blog_post.node_locale',
  blog_post___title = 'blog_post.title',
  blog_post___slug = 'blog_post.slug',
  blog_post___publishDate = 'blog_post.publishDate',
  blog_post___heroImage___contentful_id = 'blog_post.heroImage.contentful_id',
  blog_post___heroImage___id = 'blog_post.heroImage.id',
  blog_post___heroImage___spaceId = 'blog_post.heroImage.spaceId',
  blog_post___heroImage___createdAt = 'blog_post.heroImage.createdAt',
  blog_post___heroImage___updatedAt = 'blog_post.heroImage.updatedAt',
  blog_post___heroImage___file___url = 'blog_post.heroImage.file.url',
  blog_post___heroImage___file___fileName = 'blog_post.heroImage.file.fileName',
  blog_post___heroImage___file___contentType = 'blog_post.heroImage.file.contentType',
  blog_post___heroImage___file___upload = 'blog_post.heroImage.file.upload',
  blog_post___heroImage___title = 'blog_post.heroImage.title',
  blog_post___heroImage___description = 'blog_post.heroImage.description',
  blog_post___heroImage___node_locale = 'blog_post.heroImage.node_locale',
  blog_post___heroImage___sys___type = 'blog_post.heroImage.sys.type',
  blog_post___heroImage___sys___revision = 'blog_post.heroImage.sys.revision',
  blog_post___heroImage___fixed___base64 = 'blog_post.heroImage.fixed.base64',
  blog_post___heroImage___fixed___tracedSVG = 'blog_post.heroImage.fixed.tracedSVG',
  blog_post___heroImage___fixed___aspectRatio = 'blog_post.heroImage.fixed.aspectRatio',
  blog_post___heroImage___fixed___width = 'blog_post.heroImage.fixed.width',
  blog_post___heroImage___fixed___height = 'blog_post.heroImage.fixed.height',
  blog_post___heroImage___fixed___src = 'blog_post.heroImage.fixed.src',
  blog_post___heroImage___fixed___srcSet = 'blog_post.heroImage.fixed.srcSet',
  blog_post___heroImage___fixed___srcWebp = 'blog_post.heroImage.fixed.srcWebp',
  blog_post___heroImage___fixed___srcSetWebp = 'blog_post.heroImage.fixed.srcSetWebp',
  blog_post___heroImage___resolutions___base64 = 'blog_post.heroImage.resolutions.base64',
  blog_post___heroImage___resolutions___tracedSVG = 'blog_post.heroImage.resolutions.tracedSVG',
  blog_post___heroImage___resolutions___aspectRatio = 'blog_post.heroImage.resolutions.aspectRatio',
  blog_post___heroImage___resolutions___width = 'blog_post.heroImage.resolutions.width',
  blog_post___heroImage___resolutions___height = 'blog_post.heroImage.resolutions.height',
  blog_post___heroImage___resolutions___src = 'blog_post.heroImage.resolutions.src',
  blog_post___heroImage___resolutions___srcSet = 'blog_post.heroImage.resolutions.srcSet',
  blog_post___heroImage___resolutions___srcWebp = 'blog_post.heroImage.resolutions.srcWebp',
  blog_post___heroImage___resolutions___srcSetWebp = 'blog_post.heroImage.resolutions.srcSetWebp',
  blog_post___heroImage___fluid___base64 = 'blog_post.heroImage.fluid.base64',
  blog_post___heroImage___fluid___tracedSVG = 'blog_post.heroImage.fluid.tracedSVG',
  blog_post___heroImage___fluid___aspectRatio = 'blog_post.heroImage.fluid.aspectRatio',
  blog_post___heroImage___fluid___src = 'blog_post.heroImage.fluid.src',
  blog_post___heroImage___fluid___srcSet = 'blog_post.heroImage.fluid.srcSet',
  blog_post___heroImage___fluid___srcWebp = 'blog_post.heroImage.fluid.srcWebp',
  blog_post___heroImage___fluid___srcSetWebp = 'blog_post.heroImage.fluid.srcSetWebp',
  blog_post___heroImage___fluid___sizes = 'blog_post.heroImage.fluid.sizes',
  blog_post___heroImage___sizes___base64 = 'blog_post.heroImage.sizes.base64',
  blog_post___heroImage___sizes___tracedSVG = 'blog_post.heroImage.sizes.tracedSVG',
  blog_post___heroImage___sizes___aspectRatio = 'blog_post.heroImage.sizes.aspectRatio',
  blog_post___heroImage___sizes___src = 'blog_post.heroImage.sizes.src',
  blog_post___heroImage___sizes___srcSet = 'blog_post.heroImage.sizes.srcSet',
  blog_post___heroImage___sizes___srcWebp = 'blog_post.heroImage.sizes.srcWebp',
  blog_post___heroImage___sizes___srcSetWebp = 'blog_post.heroImage.sizes.srcSetWebp',
  blog_post___heroImage___sizes___sizes = 'blog_post.heroImage.sizes.sizes',
  blog_post___heroImage___resize___base64 = 'blog_post.heroImage.resize.base64',
  blog_post___heroImage___resize___tracedSVG = 'blog_post.heroImage.resize.tracedSVG',
  blog_post___heroImage___resize___src = 'blog_post.heroImage.resize.src',
  blog_post___heroImage___resize___width = 'blog_post.heroImage.resize.width',
  blog_post___heroImage___resize___height = 'blog_post.heroImage.resize.height',
  blog_post___heroImage___resize___aspectRatio = 'blog_post.heroImage.resize.aspectRatio',
  blog_post___heroImage___parent___id = 'blog_post.heroImage.parent.id',
  blog_post___heroImage___parent___children = 'blog_post.heroImage.parent.children',
  blog_post___heroImage___children = 'blog_post.heroImage.children',
  blog_post___heroImage___children___id = 'blog_post.heroImage.children.id',
  blog_post___heroImage___children___children = 'blog_post.heroImage.children.children',
  blog_post___heroImage___internal___content = 'blog_post.heroImage.internal.content',
  blog_post___heroImage___internal___contentDigest = 'blog_post.heroImage.internal.contentDigest',
  blog_post___heroImage___internal___description = 'blog_post.heroImage.internal.description',
  blog_post___heroImage___internal___fieldOwners = 'blog_post.heroImage.internal.fieldOwners',
  blog_post___heroImage___internal___ignoreType = 'blog_post.heroImage.internal.ignoreType',
  blog_post___heroImage___internal___mediaType = 'blog_post.heroImage.internal.mediaType',
  blog_post___heroImage___internal___owner = 'blog_post.heroImage.internal.owner',
  blog_post___heroImage___internal___type = 'blog_post.heroImage.internal.type',
  blog_post___author___contentful_id = 'blog_post.author.contentful_id',
  blog_post___author___id = 'blog_post.author.id',
  blog_post___author___node_locale = 'blog_post.author.node_locale',
  blog_post___author___spaceId = 'blog_post.author.spaceId',
  blog_post___author___createdAt = 'blog_post.author.createdAt',
  blog_post___author___updatedAt = 'blog_post.author.updatedAt',
  blog_post___author___sys___type = 'blog_post.author.sys.type',
  blog_post___author___sys___revision = 'blog_post.author.sys.revision',
  blog_post___author___name = 'blog_post.author.name',
  blog_post___author___title = 'blog_post.author.title',
  blog_post___author___blog_post = 'blog_post.author.blog_post',
  blog_post___author___blog_post___contentful_id = 'blog_post.author.blog_post.contentful_id',
  blog_post___author___blog_post___id = 'blog_post.author.blog_post.id',
  blog_post___author___blog_post___node_locale = 'blog_post.author.blog_post.node_locale',
  blog_post___author___blog_post___title = 'blog_post.author.blog_post.title',
  blog_post___author___blog_post___slug = 'blog_post.author.blog_post.slug',
  blog_post___author___blog_post___publishDate = 'blog_post.author.blog_post.publishDate',
  blog_post___author___blog_post___tags = 'blog_post.author.blog_post.tags',
  blog_post___author___blog_post___spaceId = 'blog_post.author.blog_post.spaceId',
  blog_post___author___blog_post___createdAt = 'blog_post.author.blog_post.createdAt',
  blog_post___author___blog_post___updatedAt = 'blog_post.author.blog_post.updatedAt',
  blog_post___author___blog_post___gatsbyPath = 'blog_post.author.blog_post.gatsbyPath',
  blog_post___author___blog_post___children = 'blog_post.author.blog_post.children',
  blog_post___author___parent___id = 'blog_post.author.parent.id',
  blog_post___author___parent___children = 'blog_post.author.parent.children',
  blog_post___author___children = 'blog_post.author.children',
  blog_post___author___children___id = 'blog_post.author.children.id',
  blog_post___author___children___children = 'blog_post.author.children.children',
  blog_post___author___internal___content = 'blog_post.author.internal.content',
  blog_post___author___internal___contentDigest = 'blog_post.author.internal.contentDigest',
  blog_post___author___internal___description = 'blog_post.author.internal.description',
  blog_post___author___internal___fieldOwners = 'blog_post.author.internal.fieldOwners',
  blog_post___author___internal___ignoreType = 'blog_post.author.internal.ignoreType',
  blog_post___author___internal___mediaType = 'blog_post.author.internal.mediaType',
  blog_post___author___internal___owner = 'blog_post.author.internal.owner',
  blog_post___author___internal___type = 'blog_post.author.internal.type',
  blog_post___tags = 'blog_post.tags',
  blog_post___tags___contentful_id = 'blog_post.tags.contentful_id',
  blog_post___tags___id = 'blog_post.tags.id',
  blog_post___tags___node_locale = 'blog_post.tags.node_locale',
  blog_post___tags___name = 'blog_post.tags.name',
  blog_post___tags___slug = 'blog_post.tags.slug',
  blog_post___tags___blog_post = 'blog_post.tags.blog_post',
  blog_post___tags___blog_post___contentful_id = 'blog_post.tags.blog_post.contentful_id',
  blog_post___tags___blog_post___id = 'blog_post.tags.blog_post.id',
  blog_post___tags___blog_post___node_locale = 'blog_post.tags.blog_post.node_locale',
  blog_post___tags___blog_post___title = 'blog_post.tags.blog_post.title',
  blog_post___tags___blog_post___slug = 'blog_post.tags.blog_post.slug',
  blog_post___tags___blog_post___publishDate = 'blog_post.tags.blog_post.publishDate',
  blog_post___tags___blog_post___tags = 'blog_post.tags.blog_post.tags',
  blog_post___tags___blog_post___spaceId = 'blog_post.tags.blog_post.spaceId',
  blog_post___tags___blog_post___createdAt = 'blog_post.tags.blog_post.createdAt',
  blog_post___tags___blog_post___updatedAt = 'blog_post.tags.blog_post.updatedAt',
  blog_post___tags___blog_post___gatsbyPath = 'blog_post.tags.blog_post.gatsbyPath',
  blog_post___tags___blog_post___children = 'blog_post.tags.blog_post.children',
  blog_post___tags___spaceId = 'blog_post.tags.spaceId',
  blog_post___tags___createdAt = 'blog_post.tags.createdAt',
  blog_post___tags___updatedAt = 'blog_post.tags.updatedAt',
  blog_post___tags___sys___type = 'blog_post.tags.sys.type',
  blog_post___tags___sys___revision = 'blog_post.tags.sys.revision',
  blog_post___tags___parent___id = 'blog_post.tags.parent.id',
  blog_post___tags___parent___children = 'blog_post.tags.parent.children',
  blog_post___tags___children = 'blog_post.tags.children',
  blog_post___tags___children___id = 'blog_post.tags.children.id',
  blog_post___tags___children___children = 'blog_post.tags.children.children',
  blog_post___tags___internal___content = 'blog_post.tags.internal.content',
  blog_post___tags___internal___contentDigest = 'blog_post.tags.internal.contentDigest',
  blog_post___tags___internal___description = 'blog_post.tags.internal.description',
  blog_post___tags___internal___fieldOwners = 'blog_post.tags.internal.fieldOwners',
  blog_post___tags___internal___ignoreType = 'blog_post.tags.internal.ignoreType',
  blog_post___tags___internal___mediaType = 'blog_post.tags.internal.mediaType',
  blog_post___tags___internal___owner = 'blog_post.tags.internal.owner',
  blog_post___tags___internal___type = 'blog_post.tags.internal.type',
  blog_post___description___id = 'blog_post.description.id',
  blog_post___description___parent___id = 'blog_post.description.parent.id',
  blog_post___description___parent___children = 'blog_post.description.parent.children',
  blog_post___description___children = 'blog_post.description.children',
  blog_post___description___children___id = 'blog_post.description.children.id',
  blog_post___description___children___children = 'blog_post.description.children.children',
  blog_post___description___internal___content = 'blog_post.description.internal.content',
  blog_post___description___internal___contentDigest = 'blog_post.description.internal.contentDigest',
  blog_post___description___internal___description = 'blog_post.description.internal.description',
  blog_post___description___internal___fieldOwners = 'blog_post.description.internal.fieldOwners',
  blog_post___description___internal___ignoreType = 'blog_post.description.internal.ignoreType',
  blog_post___description___internal___mediaType = 'blog_post.description.internal.mediaType',
  blog_post___description___internal___owner = 'blog_post.description.internal.owner',
  blog_post___description___internal___type = 'blog_post.description.internal.type',
  blog_post___description___description = 'blog_post.description.description',
  blog_post___description___sys___type = 'blog_post.description.sys.type',
  blog_post___description___childMarkdownRemark___id = 'blog_post.description.childMarkdownRemark.id',
  blog_post___description___childMarkdownRemark___excerpt = 'blog_post.description.childMarkdownRemark.excerpt',
  blog_post___description___childMarkdownRemark___rawMarkdownBody = 'blog_post.description.childMarkdownRemark.rawMarkdownBody',
  blog_post___description___childMarkdownRemark___html = 'blog_post.description.childMarkdownRemark.html',
  blog_post___description___childMarkdownRemark___htmlAst = 'blog_post.description.childMarkdownRemark.htmlAst',
  blog_post___description___childMarkdownRemark___excerptAst = 'blog_post.description.childMarkdownRemark.excerptAst',
  blog_post___description___childMarkdownRemark___headings = 'blog_post.description.childMarkdownRemark.headings',
  blog_post___description___childMarkdownRemark___timeToRead = 'blog_post.description.childMarkdownRemark.timeToRead',
  blog_post___description___childMarkdownRemark___tableOfContents = 'blog_post.description.childMarkdownRemark.tableOfContents',
  blog_post___description___childMarkdownRemark___children = 'blog_post.description.childMarkdownRemark.children',
  blog_post___body___id = 'blog_post.body.id',
  blog_post___body___parent___id = 'blog_post.body.parent.id',
  blog_post___body___parent___children = 'blog_post.body.parent.children',
  blog_post___body___children = 'blog_post.body.children',
  blog_post___body___children___id = 'blog_post.body.children.id',
  blog_post___body___children___children = 'blog_post.body.children.children',
  blog_post___body___internal___content = 'blog_post.body.internal.content',
  blog_post___body___internal___contentDigest = 'blog_post.body.internal.contentDigest',
  blog_post___body___internal___description = 'blog_post.body.internal.description',
  blog_post___body___internal___fieldOwners = 'blog_post.body.internal.fieldOwners',
  blog_post___body___internal___ignoreType = 'blog_post.body.internal.ignoreType',
  blog_post___body___internal___mediaType = 'blog_post.body.internal.mediaType',
  blog_post___body___internal___owner = 'blog_post.body.internal.owner',
  blog_post___body___internal___type = 'blog_post.body.internal.type',
  blog_post___body___body = 'blog_post.body.body',
  blog_post___body___sys___type = 'blog_post.body.sys.type',
  blog_post___body___childMarkdownRemark___id = 'blog_post.body.childMarkdownRemark.id',
  blog_post___body___childMarkdownRemark___excerpt = 'blog_post.body.childMarkdownRemark.excerpt',
  blog_post___body___childMarkdownRemark___rawMarkdownBody = 'blog_post.body.childMarkdownRemark.rawMarkdownBody',
  blog_post___body___childMarkdownRemark___html = 'blog_post.body.childMarkdownRemark.html',
  blog_post___body___childMarkdownRemark___htmlAst = 'blog_post.body.childMarkdownRemark.htmlAst',
  blog_post___body___childMarkdownRemark___excerptAst = 'blog_post.body.childMarkdownRemark.excerptAst',
  blog_post___body___childMarkdownRemark___headings = 'blog_post.body.childMarkdownRemark.headings',
  blog_post___body___childMarkdownRemark___timeToRead = 'blog_post.body.childMarkdownRemark.timeToRead',
  blog_post___body___childMarkdownRemark___tableOfContents = 'blog_post.body.childMarkdownRemark.tableOfContents',
  blog_post___body___childMarkdownRemark___children = 'blog_post.body.childMarkdownRemark.children',
  blog_post___spaceId = 'blog_post.spaceId',
  blog_post___createdAt = 'blog_post.createdAt',
  blog_post___updatedAt = 'blog_post.updatedAt',
  blog_post___sys___type = 'blog_post.sys.type',
  blog_post___sys___revision = 'blog_post.sys.revision',
  blog_post___gatsbyPath = 'blog_post.gatsbyPath',
  blog_post___parent___id = 'blog_post.parent.id',
  blog_post___parent___parent___id = 'blog_post.parent.parent.id',
  blog_post___parent___parent___children = 'blog_post.parent.parent.children',
  blog_post___parent___children = 'blog_post.parent.children',
  blog_post___parent___children___id = 'blog_post.parent.children.id',
  blog_post___parent___children___children = 'blog_post.parent.children.children',
  blog_post___parent___internal___content = 'blog_post.parent.internal.content',
  blog_post___parent___internal___contentDigest = 'blog_post.parent.internal.contentDigest',
  blog_post___parent___internal___description = 'blog_post.parent.internal.description',
  blog_post___parent___internal___fieldOwners = 'blog_post.parent.internal.fieldOwners',
  blog_post___parent___internal___ignoreType = 'blog_post.parent.internal.ignoreType',
  blog_post___parent___internal___mediaType = 'blog_post.parent.internal.mediaType',
  blog_post___parent___internal___owner = 'blog_post.parent.internal.owner',
  blog_post___parent___internal___type = 'blog_post.parent.internal.type',
  blog_post___children = 'blog_post.children',
  blog_post___children___id = 'blog_post.children.id',
  blog_post___children___parent___id = 'blog_post.children.parent.id',
  blog_post___children___parent___children = 'blog_post.children.parent.children',
  blog_post___children___children = 'blog_post.children.children',
  blog_post___children___children___id = 'blog_post.children.children.id',
  blog_post___children___children___children = 'blog_post.children.children.children',
  blog_post___children___internal___content = 'blog_post.children.internal.content',
  blog_post___children___internal___contentDigest = 'blog_post.children.internal.contentDigest',
  blog_post___children___internal___description = 'blog_post.children.internal.description',
  blog_post___children___internal___fieldOwners = 'blog_post.children.internal.fieldOwners',
  blog_post___children___internal___ignoreType = 'blog_post.children.internal.ignoreType',
  blog_post___children___internal___mediaType = 'blog_post.children.internal.mediaType',
  blog_post___children___internal___owner = 'blog_post.children.internal.owner',
  blog_post___children___internal___type = 'blog_post.children.internal.type',
  blog_post___internal___content = 'blog_post.internal.content',
  blog_post___internal___contentDigest = 'blog_post.internal.contentDigest',
  blog_post___internal___description = 'blog_post.internal.description',
  blog_post___internal___fieldOwners = 'blog_post.internal.fieldOwners',
  blog_post___internal___ignoreType = 'blog_post.internal.ignoreType',
  blog_post___internal___mediaType = 'blog_post.internal.mediaType',
  blog_post___internal___owner = 'blog_post.internal.owner',
  blog_post___internal___type = 'blog_post.internal.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___content = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___sys___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  blog_post___childContentfulBlogPostBodyTextNode___id = 'blog_post.childContentfulBlogPostBodyTextNode.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___id = 'blog_post.childContentfulBlogPostBodyTextNode.parent.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___children = 'blog_post.childContentfulBlogPostBodyTextNode.parent.children',
  blog_post___childContentfulBlogPostBodyTextNode___children = 'blog_post.childContentfulBlogPostBodyTextNode.children',
  blog_post___childContentfulBlogPostBodyTextNode___children___id = 'blog_post.childContentfulBlogPostBodyTextNode.children.id',
  blog_post___childContentfulBlogPostBodyTextNode___children___children = 'blog_post.childContentfulBlogPostBodyTextNode.children.children',
  blog_post___childContentfulBlogPostBodyTextNode___internal___content = 'blog_post.childContentfulBlogPostBodyTextNode.internal.content',
  blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostBodyTextNode___internal___description = 'blog_post.childContentfulBlogPostBodyTextNode.internal.description',
  blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___owner = 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner',
  blog_post___childContentfulBlogPostBodyTextNode___internal___type = 'blog_post.childContentfulBlogPostBodyTextNode.internal.type',
  blog_post___childContentfulBlogPostBodyTextNode___body = 'blog_post.childContentfulBlogPostBodyTextNode.body',
  blog_post___childContentfulBlogPostBodyTextNode___sys___type = 'blog_post.childContentfulBlogPostBodyTextNode.sys.type',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type ContentfulPersonSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly contentType: Maybe<ContentfulPersonSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulPersonSysContentType = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSys>;
};

type ContentfulPersonSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

type ContentfulPersonSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPersonSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPersonSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPersonSysContentTypeFilterInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulResolutions = {
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

type ContentfulResolutionsFilterInput = {
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

type ContentfulSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
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

type ContentfulTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
};


type ContentfulTagConnection_distinctArgs = {
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

enum ContentfulTagFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  slug = 'slug',
  blog_post = 'blog_post',
  blog_post___contentful_id = 'blog_post.contentful_id',
  blog_post___id = 'blog_post.id',
  blog_post___node_locale = 'blog_post.node_locale',
  blog_post___title = 'blog_post.title',
  blog_post___slug = 'blog_post.slug',
  blog_post___publishDate = 'blog_post.publishDate',
  blog_post___heroImage___contentful_id = 'blog_post.heroImage.contentful_id',
  blog_post___heroImage___id = 'blog_post.heroImage.id',
  blog_post___heroImage___spaceId = 'blog_post.heroImage.spaceId',
  blog_post___heroImage___createdAt = 'blog_post.heroImage.createdAt',
  blog_post___heroImage___updatedAt = 'blog_post.heroImage.updatedAt',
  blog_post___heroImage___file___url = 'blog_post.heroImage.file.url',
  blog_post___heroImage___file___fileName = 'blog_post.heroImage.file.fileName',
  blog_post___heroImage___file___contentType = 'blog_post.heroImage.file.contentType',
  blog_post___heroImage___file___upload = 'blog_post.heroImage.file.upload',
  blog_post___heroImage___title = 'blog_post.heroImage.title',
  blog_post___heroImage___description = 'blog_post.heroImage.description',
  blog_post___heroImage___node_locale = 'blog_post.heroImage.node_locale',
  blog_post___heroImage___sys___type = 'blog_post.heroImage.sys.type',
  blog_post___heroImage___sys___revision = 'blog_post.heroImage.sys.revision',
  blog_post___heroImage___fixed___base64 = 'blog_post.heroImage.fixed.base64',
  blog_post___heroImage___fixed___tracedSVG = 'blog_post.heroImage.fixed.tracedSVG',
  blog_post___heroImage___fixed___aspectRatio = 'blog_post.heroImage.fixed.aspectRatio',
  blog_post___heroImage___fixed___width = 'blog_post.heroImage.fixed.width',
  blog_post___heroImage___fixed___height = 'blog_post.heroImage.fixed.height',
  blog_post___heroImage___fixed___src = 'blog_post.heroImage.fixed.src',
  blog_post___heroImage___fixed___srcSet = 'blog_post.heroImage.fixed.srcSet',
  blog_post___heroImage___fixed___srcWebp = 'blog_post.heroImage.fixed.srcWebp',
  blog_post___heroImage___fixed___srcSetWebp = 'blog_post.heroImage.fixed.srcSetWebp',
  blog_post___heroImage___resolutions___base64 = 'blog_post.heroImage.resolutions.base64',
  blog_post___heroImage___resolutions___tracedSVG = 'blog_post.heroImage.resolutions.tracedSVG',
  blog_post___heroImage___resolutions___aspectRatio = 'blog_post.heroImage.resolutions.aspectRatio',
  blog_post___heroImage___resolutions___width = 'blog_post.heroImage.resolutions.width',
  blog_post___heroImage___resolutions___height = 'blog_post.heroImage.resolutions.height',
  blog_post___heroImage___resolutions___src = 'blog_post.heroImage.resolutions.src',
  blog_post___heroImage___resolutions___srcSet = 'blog_post.heroImage.resolutions.srcSet',
  blog_post___heroImage___resolutions___srcWebp = 'blog_post.heroImage.resolutions.srcWebp',
  blog_post___heroImage___resolutions___srcSetWebp = 'blog_post.heroImage.resolutions.srcSetWebp',
  blog_post___heroImage___fluid___base64 = 'blog_post.heroImage.fluid.base64',
  blog_post___heroImage___fluid___tracedSVG = 'blog_post.heroImage.fluid.tracedSVG',
  blog_post___heroImage___fluid___aspectRatio = 'blog_post.heroImage.fluid.aspectRatio',
  blog_post___heroImage___fluid___src = 'blog_post.heroImage.fluid.src',
  blog_post___heroImage___fluid___srcSet = 'blog_post.heroImage.fluid.srcSet',
  blog_post___heroImage___fluid___srcWebp = 'blog_post.heroImage.fluid.srcWebp',
  blog_post___heroImage___fluid___srcSetWebp = 'blog_post.heroImage.fluid.srcSetWebp',
  blog_post___heroImage___fluid___sizes = 'blog_post.heroImage.fluid.sizes',
  blog_post___heroImage___sizes___base64 = 'blog_post.heroImage.sizes.base64',
  blog_post___heroImage___sizes___tracedSVG = 'blog_post.heroImage.sizes.tracedSVG',
  blog_post___heroImage___sizes___aspectRatio = 'blog_post.heroImage.sizes.aspectRatio',
  blog_post___heroImage___sizes___src = 'blog_post.heroImage.sizes.src',
  blog_post___heroImage___sizes___srcSet = 'blog_post.heroImage.sizes.srcSet',
  blog_post___heroImage___sizes___srcWebp = 'blog_post.heroImage.sizes.srcWebp',
  blog_post___heroImage___sizes___srcSetWebp = 'blog_post.heroImage.sizes.srcSetWebp',
  blog_post___heroImage___sizes___sizes = 'blog_post.heroImage.sizes.sizes',
  blog_post___heroImage___resize___base64 = 'blog_post.heroImage.resize.base64',
  blog_post___heroImage___resize___tracedSVG = 'blog_post.heroImage.resize.tracedSVG',
  blog_post___heroImage___resize___src = 'blog_post.heroImage.resize.src',
  blog_post___heroImage___resize___width = 'blog_post.heroImage.resize.width',
  blog_post___heroImage___resize___height = 'blog_post.heroImage.resize.height',
  blog_post___heroImage___resize___aspectRatio = 'blog_post.heroImage.resize.aspectRatio',
  blog_post___heroImage___parent___id = 'blog_post.heroImage.parent.id',
  blog_post___heroImage___parent___children = 'blog_post.heroImage.parent.children',
  blog_post___heroImage___children = 'blog_post.heroImage.children',
  blog_post___heroImage___children___id = 'blog_post.heroImage.children.id',
  blog_post___heroImage___children___children = 'blog_post.heroImage.children.children',
  blog_post___heroImage___internal___content = 'blog_post.heroImage.internal.content',
  blog_post___heroImage___internal___contentDigest = 'blog_post.heroImage.internal.contentDigest',
  blog_post___heroImage___internal___description = 'blog_post.heroImage.internal.description',
  blog_post___heroImage___internal___fieldOwners = 'blog_post.heroImage.internal.fieldOwners',
  blog_post___heroImage___internal___ignoreType = 'blog_post.heroImage.internal.ignoreType',
  blog_post___heroImage___internal___mediaType = 'blog_post.heroImage.internal.mediaType',
  blog_post___heroImage___internal___owner = 'blog_post.heroImage.internal.owner',
  blog_post___heroImage___internal___type = 'blog_post.heroImage.internal.type',
  blog_post___author___contentful_id = 'blog_post.author.contentful_id',
  blog_post___author___id = 'blog_post.author.id',
  blog_post___author___node_locale = 'blog_post.author.node_locale',
  blog_post___author___spaceId = 'blog_post.author.spaceId',
  blog_post___author___createdAt = 'blog_post.author.createdAt',
  blog_post___author___updatedAt = 'blog_post.author.updatedAt',
  blog_post___author___sys___type = 'blog_post.author.sys.type',
  blog_post___author___sys___revision = 'blog_post.author.sys.revision',
  blog_post___author___name = 'blog_post.author.name',
  blog_post___author___title = 'blog_post.author.title',
  blog_post___author___blog_post = 'blog_post.author.blog_post',
  blog_post___author___blog_post___contentful_id = 'blog_post.author.blog_post.contentful_id',
  blog_post___author___blog_post___id = 'blog_post.author.blog_post.id',
  blog_post___author___blog_post___node_locale = 'blog_post.author.blog_post.node_locale',
  blog_post___author___blog_post___title = 'blog_post.author.blog_post.title',
  blog_post___author___blog_post___slug = 'blog_post.author.blog_post.slug',
  blog_post___author___blog_post___publishDate = 'blog_post.author.blog_post.publishDate',
  blog_post___author___blog_post___tags = 'blog_post.author.blog_post.tags',
  blog_post___author___blog_post___spaceId = 'blog_post.author.blog_post.spaceId',
  blog_post___author___blog_post___createdAt = 'blog_post.author.blog_post.createdAt',
  blog_post___author___blog_post___updatedAt = 'blog_post.author.blog_post.updatedAt',
  blog_post___author___blog_post___gatsbyPath = 'blog_post.author.blog_post.gatsbyPath',
  blog_post___author___blog_post___children = 'blog_post.author.blog_post.children',
  blog_post___author___parent___id = 'blog_post.author.parent.id',
  blog_post___author___parent___children = 'blog_post.author.parent.children',
  blog_post___author___children = 'blog_post.author.children',
  blog_post___author___children___id = 'blog_post.author.children.id',
  blog_post___author___children___children = 'blog_post.author.children.children',
  blog_post___author___internal___content = 'blog_post.author.internal.content',
  blog_post___author___internal___contentDigest = 'blog_post.author.internal.contentDigest',
  blog_post___author___internal___description = 'blog_post.author.internal.description',
  blog_post___author___internal___fieldOwners = 'blog_post.author.internal.fieldOwners',
  blog_post___author___internal___ignoreType = 'blog_post.author.internal.ignoreType',
  blog_post___author___internal___mediaType = 'blog_post.author.internal.mediaType',
  blog_post___author___internal___owner = 'blog_post.author.internal.owner',
  blog_post___author___internal___type = 'blog_post.author.internal.type',
  blog_post___tags = 'blog_post.tags',
  blog_post___tags___contentful_id = 'blog_post.tags.contentful_id',
  blog_post___tags___id = 'blog_post.tags.id',
  blog_post___tags___node_locale = 'blog_post.tags.node_locale',
  blog_post___tags___name = 'blog_post.tags.name',
  blog_post___tags___slug = 'blog_post.tags.slug',
  blog_post___tags___blog_post = 'blog_post.tags.blog_post',
  blog_post___tags___blog_post___contentful_id = 'blog_post.tags.blog_post.contentful_id',
  blog_post___tags___blog_post___id = 'blog_post.tags.blog_post.id',
  blog_post___tags___blog_post___node_locale = 'blog_post.tags.blog_post.node_locale',
  blog_post___tags___blog_post___title = 'blog_post.tags.blog_post.title',
  blog_post___tags___blog_post___slug = 'blog_post.tags.blog_post.slug',
  blog_post___tags___blog_post___publishDate = 'blog_post.tags.blog_post.publishDate',
  blog_post___tags___blog_post___tags = 'blog_post.tags.blog_post.tags',
  blog_post___tags___blog_post___spaceId = 'blog_post.tags.blog_post.spaceId',
  blog_post___tags___blog_post___createdAt = 'blog_post.tags.blog_post.createdAt',
  blog_post___tags___blog_post___updatedAt = 'blog_post.tags.blog_post.updatedAt',
  blog_post___tags___blog_post___gatsbyPath = 'blog_post.tags.blog_post.gatsbyPath',
  blog_post___tags___blog_post___children = 'blog_post.tags.blog_post.children',
  blog_post___tags___spaceId = 'blog_post.tags.spaceId',
  blog_post___tags___createdAt = 'blog_post.tags.createdAt',
  blog_post___tags___updatedAt = 'blog_post.tags.updatedAt',
  blog_post___tags___sys___type = 'blog_post.tags.sys.type',
  blog_post___tags___sys___revision = 'blog_post.tags.sys.revision',
  blog_post___tags___parent___id = 'blog_post.tags.parent.id',
  blog_post___tags___parent___children = 'blog_post.tags.parent.children',
  blog_post___tags___children = 'blog_post.tags.children',
  blog_post___tags___children___id = 'blog_post.tags.children.id',
  blog_post___tags___children___children = 'blog_post.tags.children.children',
  blog_post___tags___internal___content = 'blog_post.tags.internal.content',
  blog_post___tags___internal___contentDigest = 'blog_post.tags.internal.contentDigest',
  blog_post___tags___internal___description = 'blog_post.tags.internal.description',
  blog_post___tags___internal___fieldOwners = 'blog_post.tags.internal.fieldOwners',
  blog_post___tags___internal___ignoreType = 'blog_post.tags.internal.ignoreType',
  blog_post___tags___internal___mediaType = 'blog_post.tags.internal.mediaType',
  blog_post___tags___internal___owner = 'blog_post.tags.internal.owner',
  blog_post___tags___internal___type = 'blog_post.tags.internal.type',
  blog_post___description___id = 'blog_post.description.id',
  blog_post___description___parent___id = 'blog_post.description.parent.id',
  blog_post___description___parent___children = 'blog_post.description.parent.children',
  blog_post___description___children = 'blog_post.description.children',
  blog_post___description___children___id = 'blog_post.description.children.id',
  blog_post___description___children___children = 'blog_post.description.children.children',
  blog_post___description___internal___content = 'blog_post.description.internal.content',
  blog_post___description___internal___contentDigest = 'blog_post.description.internal.contentDigest',
  blog_post___description___internal___description = 'blog_post.description.internal.description',
  blog_post___description___internal___fieldOwners = 'blog_post.description.internal.fieldOwners',
  blog_post___description___internal___ignoreType = 'blog_post.description.internal.ignoreType',
  blog_post___description___internal___mediaType = 'blog_post.description.internal.mediaType',
  blog_post___description___internal___owner = 'blog_post.description.internal.owner',
  blog_post___description___internal___type = 'blog_post.description.internal.type',
  blog_post___description___description = 'blog_post.description.description',
  blog_post___description___sys___type = 'blog_post.description.sys.type',
  blog_post___description___childMarkdownRemark___id = 'blog_post.description.childMarkdownRemark.id',
  blog_post___description___childMarkdownRemark___excerpt = 'blog_post.description.childMarkdownRemark.excerpt',
  blog_post___description___childMarkdownRemark___rawMarkdownBody = 'blog_post.description.childMarkdownRemark.rawMarkdownBody',
  blog_post___description___childMarkdownRemark___html = 'blog_post.description.childMarkdownRemark.html',
  blog_post___description___childMarkdownRemark___htmlAst = 'blog_post.description.childMarkdownRemark.htmlAst',
  blog_post___description___childMarkdownRemark___excerptAst = 'blog_post.description.childMarkdownRemark.excerptAst',
  blog_post___description___childMarkdownRemark___headings = 'blog_post.description.childMarkdownRemark.headings',
  blog_post___description___childMarkdownRemark___timeToRead = 'blog_post.description.childMarkdownRemark.timeToRead',
  blog_post___description___childMarkdownRemark___tableOfContents = 'blog_post.description.childMarkdownRemark.tableOfContents',
  blog_post___description___childMarkdownRemark___children = 'blog_post.description.childMarkdownRemark.children',
  blog_post___body___id = 'blog_post.body.id',
  blog_post___body___parent___id = 'blog_post.body.parent.id',
  blog_post___body___parent___children = 'blog_post.body.parent.children',
  blog_post___body___children = 'blog_post.body.children',
  blog_post___body___children___id = 'blog_post.body.children.id',
  blog_post___body___children___children = 'blog_post.body.children.children',
  blog_post___body___internal___content = 'blog_post.body.internal.content',
  blog_post___body___internal___contentDigest = 'blog_post.body.internal.contentDigest',
  blog_post___body___internal___description = 'blog_post.body.internal.description',
  blog_post___body___internal___fieldOwners = 'blog_post.body.internal.fieldOwners',
  blog_post___body___internal___ignoreType = 'blog_post.body.internal.ignoreType',
  blog_post___body___internal___mediaType = 'blog_post.body.internal.mediaType',
  blog_post___body___internal___owner = 'blog_post.body.internal.owner',
  blog_post___body___internal___type = 'blog_post.body.internal.type',
  blog_post___body___body = 'blog_post.body.body',
  blog_post___body___sys___type = 'blog_post.body.sys.type',
  blog_post___body___childMarkdownRemark___id = 'blog_post.body.childMarkdownRemark.id',
  blog_post___body___childMarkdownRemark___excerpt = 'blog_post.body.childMarkdownRemark.excerpt',
  blog_post___body___childMarkdownRemark___rawMarkdownBody = 'blog_post.body.childMarkdownRemark.rawMarkdownBody',
  blog_post___body___childMarkdownRemark___html = 'blog_post.body.childMarkdownRemark.html',
  blog_post___body___childMarkdownRemark___htmlAst = 'blog_post.body.childMarkdownRemark.htmlAst',
  blog_post___body___childMarkdownRemark___excerptAst = 'blog_post.body.childMarkdownRemark.excerptAst',
  blog_post___body___childMarkdownRemark___headings = 'blog_post.body.childMarkdownRemark.headings',
  blog_post___body___childMarkdownRemark___timeToRead = 'blog_post.body.childMarkdownRemark.timeToRead',
  blog_post___body___childMarkdownRemark___tableOfContents = 'blog_post.body.childMarkdownRemark.tableOfContents',
  blog_post___body___childMarkdownRemark___children = 'blog_post.body.childMarkdownRemark.children',
  blog_post___spaceId = 'blog_post.spaceId',
  blog_post___createdAt = 'blog_post.createdAt',
  blog_post___updatedAt = 'blog_post.updatedAt',
  blog_post___sys___type = 'blog_post.sys.type',
  blog_post___sys___revision = 'blog_post.sys.revision',
  blog_post___gatsbyPath = 'blog_post.gatsbyPath',
  blog_post___parent___id = 'blog_post.parent.id',
  blog_post___parent___parent___id = 'blog_post.parent.parent.id',
  blog_post___parent___parent___children = 'blog_post.parent.parent.children',
  blog_post___parent___children = 'blog_post.parent.children',
  blog_post___parent___children___id = 'blog_post.parent.children.id',
  blog_post___parent___children___children = 'blog_post.parent.children.children',
  blog_post___parent___internal___content = 'blog_post.parent.internal.content',
  blog_post___parent___internal___contentDigest = 'blog_post.parent.internal.contentDigest',
  blog_post___parent___internal___description = 'blog_post.parent.internal.description',
  blog_post___parent___internal___fieldOwners = 'blog_post.parent.internal.fieldOwners',
  blog_post___parent___internal___ignoreType = 'blog_post.parent.internal.ignoreType',
  blog_post___parent___internal___mediaType = 'blog_post.parent.internal.mediaType',
  blog_post___parent___internal___owner = 'blog_post.parent.internal.owner',
  blog_post___parent___internal___type = 'blog_post.parent.internal.type',
  blog_post___children = 'blog_post.children',
  blog_post___children___id = 'blog_post.children.id',
  blog_post___children___parent___id = 'blog_post.children.parent.id',
  blog_post___children___parent___children = 'blog_post.children.parent.children',
  blog_post___children___children = 'blog_post.children.children',
  blog_post___children___children___id = 'blog_post.children.children.id',
  blog_post___children___children___children = 'blog_post.children.children.children',
  blog_post___children___internal___content = 'blog_post.children.internal.content',
  blog_post___children___internal___contentDigest = 'blog_post.children.internal.contentDigest',
  blog_post___children___internal___description = 'blog_post.children.internal.description',
  blog_post___children___internal___fieldOwners = 'blog_post.children.internal.fieldOwners',
  blog_post___children___internal___ignoreType = 'blog_post.children.internal.ignoreType',
  blog_post___children___internal___mediaType = 'blog_post.children.internal.mediaType',
  blog_post___children___internal___owner = 'blog_post.children.internal.owner',
  blog_post___children___internal___type = 'blog_post.children.internal.type',
  blog_post___internal___content = 'blog_post.internal.content',
  blog_post___internal___contentDigest = 'blog_post.internal.contentDigest',
  blog_post___internal___description = 'blog_post.internal.description',
  blog_post___internal___fieldOwners = 'blog_post.internal.fieldOwners',
  blog_post___internal___ignoreType = 'blog_post.internal.ignoreType',
  blog_post___internal___mediaType = 'blog_post.internal.mediaType',
  blog_post___internal___owner = 'blog_post.internal.owner',
  blog_post___internal___type = 'blog_post.internal.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___content = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___sys___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  blog_post___childContentfulBlogPostBodyTextNode___id = 'blog_post.childContentfulBlogPostBodyTextNode.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___id = 'blog_post.childContentfulBlogPostBodyTextNode.parent.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___children = 'blog_post.childContentfulBlogPostBodyTextNode.parent.children',
  blog_post___childContentfulBlogPostBodyTextNode___children = 'blog_post.childContentfulBlogPostBodyTextNode.children',
  blog_post___childContentfulBlogPostBodyTextNode___children___id = 'blog_post.childContentfulBlogPostBodyTextNode.children.id',
  blog_post___childContentfulBlogPostBodyTextNode___children___children = 'blog_post.childContentfulBlogPostBodyTextNode.children.children',
  blog_post___childContentfulBlogPostBodyTextNode___internal___content = 'blog_post.childContentfulBlogPostBodyTextNode.internal.content',
  blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostBodyTextNode___internal___description = 'blog_post.childContentfulBlogPostBodyTextNode.internal.description',
  blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___owner = 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner',
  blog_post___childContentfulBlogPostBodyTextNode___internal___type = 'blog_post.childContentfulBlogPostBodyTextNode.internal.type',
  blog_post___childContentfulBlogPostBodyTextNode___body = 'blog_post.childContentfulBlogPostBodyTextNode.body',
  blog_post___childContentfulBlogPostBodyTextNode___sys___type = 'blog_post.childContentfulBlogPostBodyTextNode.sys.type',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type ContentfulTagFilterListInput = {
  readonly elemMatch: Maybe<ContentfulTagFilterInput>;
};

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

type ContentfulTagSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulTagSysContentType>;
};

type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

type ContentfulTagSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulTagSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulTagSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulTagSysContentTypeFilterInput>;
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

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
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

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
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

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
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

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

enum ImageLayout {
  FIXED = 'fixed',
  FLUID = 'fluid',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

enum ImageResizingBehavior {
  NO_CHANGE = '',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'pad',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'crop',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'fill',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'thumb',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'scale'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
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


type ImageSharp_resolutionsArgs = {
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


type ImageSharp_sizesArgs = {
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
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
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

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
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

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
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

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
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

type ImageSharpResolutionsFilterInput = {
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

type ImageSharpSizes = {
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

type ImageSharpSizesFilterInput = {
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

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

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

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
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

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings.id',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
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

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

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

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
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


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
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
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
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


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
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
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
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
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
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
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
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

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
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

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
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

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
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

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
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

type SitePageContext_xparamsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
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

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___lastPageNumber = 'context.lastPageNumber',
  context___pageNumber = 'context.pageNumber',
  context___humanPageNumber = 'context.humanPageNumber',
  context___skip = 'context.skip',
  context___limit = 'context.limit',
  context___numberOfPages = 'context.numberOfPages',
  context___previousPagePath = 'context.previousPagePath',
  context___nextPagePath = 'context.nextPagePath',
  context___tagName = 'context.tagName',
  context___tagSlug = 'context.tagSlug',
  context___id = 'context.id',
  context___slug = 'context.slug',
  context____xparams___slug = 'context._xparams.slug',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
  pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator.pluginOptions.plugins.nodeAPIs',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
  pluginCreator___pluginOptions___plugins___ssrAPIs = 'pluginCreator.pluginOptions.plugins.ssrAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator.pluginOptions.spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator.pluginOptions.accessToken',
  pluginCreator___pluginOptions___host = 'pluginCreator.pluginOptions.host',
  pluginCreator___pluginOptions___environment = 'pluginCreator.pluginOptions.environment',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator.pluginOptions.downloadLocal',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator.pluginOptions.forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator.pluginOptions.pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator.pluginOptions.assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator.pluginOptions.useNameForId',
  pluginCreator___pluginOptions___id = 'pluginCreator.pluginOptions.id',
  pluginCreator___pluginOptions___includeInDevelopment = 'pluginCreator.pluginOptions.includeInDevelopment',
  pluginCreator___pluginOptions___routeChangeEventName = 'pluginCreator.pluginOptions.routeChangeEventName',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator.pluginOptions.linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator.pluginOptions.showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator.pluginOptions.markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator.pluginOptions.sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator.pluginOptions.backgroundColor',
  pluginCreator___pluginOptions___quality = 'pluginCreator.pluginOptions.quality',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator.pluginOptions.withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator.pluginOptions.tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator.pluginOptions.loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator.pluginOptions.disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator.pluginOptions.disableBgImage',
  pluginCreator___pluginOptions___target = 'pluginCreator.pluginOptions.target',
  pluginCreator___pluginOptions___rel = 'pluginCreator.pluginOptions.rel',
  pluginCreator___pluginOptions___exclude = 'pluginCreator.pluginOptions.exclude',
  pluginCreator___pluginOptions___tight = 'pluginCreator.pluginOptions.tight',
  pluginCreator___pluginOptions___ordered = 'pluginCreator.pluginOptions.ordered',
  pluginCreator___pluginOptions___fromHeading = 'pluginCreator.pluginOptions.fromHeading',
  pluginCreator___pluginOptions___toHeading = 'pluginCreator.pluginOptions.toHeading',
  pluginCreator___pluginOptions___className = 'pluginCreator.pluginOptions.className',
  pluginCreator___pluginOptions___offsetY = 'pluginCreator.pluginOptions.offsetY',
  pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator.pluginOptions.crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___query = 'pluginCreator.pluginOptions.query',
  pluginCreator___pluginOptions___feeds = 'pluginCreator.pluginOptions.feeds',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator.pluginOptions.feeds.query',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator.pluginOptions.feeds.output',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator.pluginOptions.feeds.title',
  pluginCreator___pluginOptions___feeds___feed_url = 'pluginCreator.pluginOptions.feeds.feed_url',
  pluginCreator___pluginOptions___feeds___site_url = 'pluginCreator.pluginOptions.feeds.site_url',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
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

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions.plugins',
  pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
  pluginOptions___plugins___id = 'pluginOptions.plugins.id',
  pluginOptions___plugins___name = 'pluginOptions.plugins.name',
  pluginOptions___plugins___version = 'pluginOptions.plugins.version',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions.plugins.pluginOptions.showCaptions',
  pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions.plugins.pluginOptions.markdownCaptions',
  pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity',
  pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions.plugins.pluginOptions.backgroundColor',
  pluginOptions___plugins___pluginOptions___quality = 'pluginOptions.plugins.pluginOptions.quality',
  pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions.plugins.pluginOptions.withWebp',
  pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions.plugins.pluginOptions.tracedSVG',
  pluginOptions___plugins___pluginOptions___loading = 'pluginOptions.plugins.pluginOptions.loading',
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha',
  pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions.plugins.pluginOptions.disableBgImage',
  pluginOptions___plugins___pluginOptions___target = 'pluginOptions.plugins.pluginOptions.target',
  pluginOptions___plugins___pluginOptions___rel = 'pluginOptions.plugins.pluginOptions.rel',
  pluginOptions___plugins___pluginOptions___exclude = 'pluginOptions.plugins.pluginOptions.exclude',
  pluginOptions___plugins___pluginOptions___tight = 'pluginOptions.plugins.pluginOptions.tight',
  pluginOptions___plugins___pluginOptions___ordered = 'pluginOptions.plugins.pluginOptions.ordered',
  pluginOptions___plugins___pluginOptions___fromHeading = 'pluginOptions.plugins.pluginOptions.fromHeading',
  pluginOptions___plugins___pluginOptions___toHeading = 'pluginOptions.plugins.pluginOptions.toHeading',
  pluginOptions___plugins___pluginOptions___className = 'pluginOptions.plugins.pluginOptions.className',
  pluginOptions___plugins___pluginOptions___offsetY = 'pluginOptions.plugins.pluginOptions.offsetY',
  pluginOptions___plugins___nodeAPIs = 'pluginOptions.plugins.nodeAPIs',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___ssrAPIs = 'pluginOptions.plugins.ssrAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___spaceId = 'pluginOptions.spaceId',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___host = 'pluginOptions.host',
  pluginOptions___environment = 'pluginOptions.environment',
  pluginOptions___downloadLocal = 'pluginOptions.downloadLocal',
  pluginOptions___forceFullSync = 'pluginOptions.forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions.pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions.assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions.useNameForId',
  pluginOptions___id = 'pluginOptions.id',
  pluginOptions___includeInDevelopment = 'pluginOptions.includeInDevelopment',
  pluginOptions___routeChangeEventName = 'pluginOptions.routeChangeEventName',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___maxWidth = 'pluginOptions.maxWidth',
  pluginOptions___linkImagesToOriginal = 'pluginOptions.linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions.showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions.markdownCaptions',
  pluginOptions___sizeByPixelDensity = 'pluginOptions.sizeByPixelDensity',
  pluginOptions___backgroundColor = 'pluginOptions.backgroundColor',
  pluginOptions___quality = 'pluginOptions.quality',
  pluginOptions___withWebp = 'pluginOptions.withWebp',
  pluginOptions___tracedSVG = 'pluginOptions.tracedSVG',
  pluginOptions___loading = 'pluginOptions.loading',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions.disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions.disableBgImage',
  pluginOptions___target = 'pluginOptions.target',
  pluginOptions___rel = 'pluginOptions.rel',
  pluginOptions___exclude = 'pluginOptions.exclude',
  pluginOptions___tight = 'pluginOptions.tight',
  pluginOptions___ordered = 'pluginOptions.ordered',
  pluginOptions___fromHeading = 'pluginOptions.fromHeading',
  pluginOptions___toHeading = 'pluginOptions.toHeading',
  pluginOptions___className = 'pluginOptions.className',
  pluginOptions___offsetY = 'pluginOptions.offsetY',
  pluginOptions___output = 'pluginOptions.output',
  pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions.crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___query = 'pluginOptions.query',
  pluginOptions___feeds = 'pluginOptions.feeds',
  pluginOptions___feeds___query = 'pluginOptions.feeds.query',
  pluginOptions___feeds___output = 'pluginOptions.feeds.output',
  pluginOptions___feeds___title = 'pluginOptions.feeds.title',
  pluginOptions___feeds___feed_url = 'pluginOptions.feeds.feed_url',
  pluginOptions___feeds___site_url = 'pluginOptions.feeds.site_url',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

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

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
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

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
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
  readonly outputPath: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
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
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly query: Maybe<Scalars['String']>;
  readonly feeds: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFeeds = {
  readonly query: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly feed_url: Maybe<Scalars['String']>;
  readonly site_url: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly feed_url: Maybe<StringQueryOperatorInput>;
  readonly site_url: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
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
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
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
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly feeds: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
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

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
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

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
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

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type IndexArchiveQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type IndexArchiveQuery = { readonly allContentfulBlogPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'updatedAt'>
        & { readonly heroImage: Maybe<(
          Pick<ContentfulAsset, 'description'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name' | 'slug'>>>> }
      ) }> } };

type TagsArchiveQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  tagSlug: Maybe<Scalars['String']>;
}>;


type TagsArchiveQuery = { readonly allContentfulBlogPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'updatedAt'>
        & { readonly description: Maybe<Pick<contentfulBlogPostDescriptionTextNode, 'description'>>, readonly heroImage: Maybe<(
          Pick<ContentfulAsset, 'description'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name' | 'slug'>>>> }
      ) }> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type PortfolioQueryVariables = Exact<{ [key: string]: never; }>;


type PortfolioQuery = { readonly imageUpdate: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }>, readonly imageCopilin: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type PostBySlugQuery = { readonly contentfulBlogPost: Maybe<(
    Pick<ContentfulBlogPost, 'slug' | 'title' | 'updatedAt' | 'publishDate'>
    & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'name'>>>>, readonly heroImage: Maybe<(
      Pick<ContentfulAsset, 'description'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, readonly description: Maybe<Pick<contentfulBlogPostDescriptionTextNode, 'description'>>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'timeToRead' | 'tableOfContents' | 'html'>> }> }
  )> };

type BioQueryVariables = Exact<{ [key: string]: never; }>;


type BioQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> };

type SidebarProfileQueryVariables = Exact<{ [key: string]: never; }>;


type SidebarProfileQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

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

type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_tracedSVGFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_noBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_withWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulResolutions_withWebp_noBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_tracedSVGFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_noBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_withWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulSizes_withWebp_noBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}