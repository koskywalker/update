import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.PortfolioQuery
}

type IProps = IContainerProps & {
  location: Location
}

const Portfolio: React.FC<IProps> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || "UPDATE"
  const portfolioImageUpdate = data.imageUpdate?.childImageSharp?.fixed
  const portfolioImageCopilin = data.imageCopilin?.childImageSharp?.fixed

  const pageTitle = `ポートフォリオ - ${siteTitle}`

  const items = [
    {
      title: "UPDATE",
      subTitle:
        "Nuxt.js x Contentful x Netlify で作成した Jamstack 構成のブログ",
      image: portfolioImageUpdate,
      meta: {
        period: "2020/01 - 2020/09",
        technologies: "Nuxt.js, Contentful, Netlify, GitHub",
      },
      description: [
        "Nuxt.js の SSG を使用して構築した Jamstack 構成のブログです. コンテンツ管理に Contentful を, ホスティングに Netlify を, ソースコード管理に GitHub を使用しています.",
        "もともと WordPress で運用していたブログをモダンな技術を用いて作りかえました.",
        "Nuxt.js に加え上記技術を使用することで, 高い DX を保ちやすく, UX を高めやすい環境を構築しました.",
      ],
    },
    {
      title: "コピリン",
      subTitle: "Vue.js x Filebase で作成した SPA (Chrome 拡張機能)",
      image: portfolioImageCopilin,
      meta: {
        period: "2018/11 - 2019/04",
        technologies: "Vue.js, Cloud Firestore, GitHub",
      },
      description: [
        "頻繁に使用するリンクを管理し, ほしいリンクをわずか3アクションでコピーしたり開いたりできる Chrome 拡張機能です.",
        "Vue.js をベース技術として使用し, データの保管には Cloud Firestore, ソースコード管理に GitHub を使用しています.",
        "エンジニアになると同時に「何かしらのプロダクトを作りたい！せっかく作るなら SPA (Single Page Application) を作りたい！」という思いから学習も兼ねて作成したツールです.",
      ],
    },
  ]

  return (
    <Layout location={location}>
      <Seo title={pageTitle} />
      <h1>{pageTitle}</h1>
      {items.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
            <Image fixed={item.image} alt={item.title} />
            <ul>
              <li>製作期間: {item.meta.period}</li>
              <li>主な使用技術: {item.meta.technologies}</li>
            </ul>
            <div>
              {item.description.map((sentence: string, subIndex: number) => {
                return <p key={`${index}-${subIndex}`}>{sentence}</p>
              })}
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Portfolio

export const pageQuery = graphql`
  query Portfolio {
    site {
      siteMetadata {
        title
      }
    }
    imageUpdate: file(absolutePath: { regex: "/portfolio-update.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 282, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageCopilin: file(absolutePath: { regex: "/portfolio-copilin.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 312, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
