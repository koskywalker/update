<h1 align="center">
  <a href="https://upd.world">
    <img alt="UPDATE" src="https://upd.world/images/logo-light.svg" width="320" />
  </a>
</h1>

Gatsby x TypeScript x Contentful x Vercel を使用した Jamstack 構成のブログ.

- アプリケーション : Gatsby x TypeScript x Tailwind CSS
- コンテンツ管理 : Contentful
- ホスティング : Vercel

ブログ URL : [https://upd.world/](https://upd.world/)

## 🌏 環境構築手順

### 1. Node.js をインストール

[ダウンロード | Node.js](https://nodejs.org/ja/download/)

### 2. リポジトリを clone

当リポジトリを clone する.

### 3. npm package をインストール

``` shell
cd update/
npm install
```

### 4. 開発サーバーを起動

``` shell
npm run develop
```

## 🚀 デプロイ手順

### 開発環境へのデプロイ

ローカルで Git の main ブランチから開発用のブランチを切り, リモートに push することで自動的に開発環境にデプロイされる.

その後も, ローカルで commit -> push してリモートに反映させることで, 都度開発環境にデプロイされる.

### 本番環境へのデプロイ

GitHub 上で, 開発用のブランチ -> main ブランチへのプルリクエストを作成し, main ブランチにマージすることで本番環境へのデプロイが走る.

## 🎄 ファイル構成

``` shell
.
├── .vscode
├── src
├── static
├── .editorconfig
├── .env.sample
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .stylelintrc.js
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

1. **`/.vscode`**: VS Code の設定.
2. **`/src`**: アプリケーションのメインのソースコードがこのディレクトリに格納されている.
3. **`/static`**: 当ディレクトリはサーバールートに直接マッピングされ, プロジェクトルート URL からアクセスできる.
4. **`.editorconfig`**: EditorConfig の設定ファイル.
5. **`.env.sample`**: 環境変数ファイル (`.env` ファイル) のサンプルファイル. 開発時は当ファイルを複製し `.env` というファイル名に変更して使用する.
6. **`.eslintignore`**: ESLint に無視してほしいファイルを指定.
7. **`.eslintrc.js`**: ESLint の設定ファイル.
8. **`.gitignore`**: Git 管理したくないファイルを指定する.
9. **`.prettierignore`**: Prettier に無視してほしいファイルを指定.
10. **`.prettierrc.js`**: Prettier の設定ファイル.
11. **`.stylelintrc.js`**: stylelint の設定ファイル.
12. **`gatsby-browser.js`**: [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) 参照.
13. **`gatsby-config.js`**: [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) 参照.
14. **`gatsby-node.js`**: [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) 参照.
15. **`package-lock.json`**: npm package の依存関係を管理するファイル.
16. **`package.json`**: npm package の管理ファイル.
17. **`postcss.config.js`**: PostCSS の設定ファイル.
18. **`README.md`**: 当リポジトリの README ファイル.
19. **`tailwind.config.js`**: Tailwind CSS の設定ファイル.
20. **`tsconfig.json`**: TypeScript の設定ファイル.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
