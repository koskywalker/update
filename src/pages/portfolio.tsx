import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { Breadcrumb } from "../components/breadcrumb"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IProps = {
  data: GatsbyTypes.PortfolioQuery
}

const Portfolio: React.FC<IProps> = ({ data }) => {
  const portfolioImageUpdate = data.imageUpdate?.childImageSharp?.fluid
  const portfolioImageCopilin = data.imageCopilin?.childImageSharp?.fluid

  const pageTitle = "ポートフォリオ"
  const items = [
    {
      title: "UPDATE",
      url: "https://upd.world/",
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
      url:
        "https://chrome.google.com/webstore/detail/%E3%82%B3%E3%83%94%E3%83%AA%E3%83%B3/jmjkimbpmdcnlohbclgfdmckjnjlfhnd?hl=ja",
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
    <Layout>
      <Seo pageTitle={pageTitle} />
      <Breadcrumb currentPageTitle={pageTitle} />
      <div className="py-8">
        <div className="px-4 py-8 overflow-hidden bg-white shadow-custom sm:px-6 lg:px-8 lg:py-16">
          <div className="relative">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-16">
              {items.map((item: any, index: number) => {
                return (
                  <div key={index} className="grid grid-cols-1">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="mt-4">{item.subTitle}</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-4">
                      <Image
                        fluid={item.image}
                        alt={item.title}
                        imgStyle={{
                          border: "1px solid #ccc",
                          objectFit: "contain",
                        }}
                        className="mt-8"
                      />
                      <div className="mt-8">
                        <ul className="ml-4 list-disc grid grid-cols-1 gap-y-2">
                          <li>製作期間: {item.meta.period}</li>
                          <li>主な使用技術: {item.meta.technologies}</li>
                        </ul>
                        <div className="mt-8 grid grid-cols-1 gap-y-2 xl:mt-8">
                          {item.description.map(
                            (sentence: string, subIndex: number) => {
                              return (
                                <p key={`${index}-${subIndex}`}>{sentence}</p>
                              )
                            }
                          )}
                        </div>
                        <div className="mt-8">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-white bg-cyan-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                          >
                            {item.title} を見に行く
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Portfolio

export const pageQuery = graphql`
  query Portfolio {
    imageUpdate: file(absolutePath: { regex: "/portfolio-update.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageCopilin: file(absolutePath: { regex: "/portfolio-copilin.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
