import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { Breadcrumb } from "../components/breadcrumb"
import { ButtonLink } from "../components/button-link"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IProps = {
  data: GatsbyTypes.PortfolioQuery
  location: Location
}

const Portfolio: React.FC<IProps> = ({ data, location }) => {
  const portfolioImageUpdate =
    data.imageUpdate?.childImageSharp?.gatsbyImageData
  const portfolioImageCopilin =
    data.imageCopilin?.childImageSharp?.gatsbyImageData

  const pageTitle = "ポートフォリオ"
  const items = [
    {
      title: "UPDATE",
      url: "https://upd.world/",
      subTitle:
        "Gatsby x TypeScript x Contentful x Vercel 構成の Jamstack 構成のブログ",
      image: portfolioImageUpdate,
      meta: {
        period: "2020/01 - 随時更新中",
        technologies: "Gatsby, TypeScript, Contentful, Vercel, GitHub",
      },
      description: [
        "上記技術スタックで構築した Jamstack 構成のブログです. アプリケーションは Gatsby, TypeScript, コンテンツ管理に Contentful, ホスティングに Vercel, ソースコード管理に GitHub を使用しています.",
        "もともと WordPress で運用していたブログでしたが, パフォーマンスと UX を改善しようと思いから 2020年1月より Nuxt.js ベースの SPA として構築開始し2020年9月にリリース. その後さらなるパフォーマンス向上を求めて Gatsby ベースの SPA として構築し直し2021年1月にリリースしました.",
        "高いパフォーマンス, DX (Development Experience), UX を発揮しやすく, 柔軟性の高いプロダクトとして構築できました.",
      ],
    },
    {
      title: "コピリン",
      url: "https://chrome.google.com/webstore/detail/%E3%82%B3%E3%83%94%E3%83%AA%E3%83%B3/jmjkimbpmdcnlohbclgfdmckjnjlfhnd?hl=ja",
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
      <Seo pageTitle={pageTitle} location={location} />
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
                      <div>
                        <GatsbyImage
                          image={item.image}
                          alt={item.title}
                          imgStyle={{
                            border: "1px solid #ccc",
                            objectFit: "contain",
                          }}
                          className="mt-8"
                        />
                      </div>
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
                          <ButtonLink
                            path={item.url}
                            size="md"
                            isExternalLink={true}
                            className="inline-flex items-center px-4 py-2 text-white bg-cyan-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                          >
                            {item.title} を見に行く
                          </ButtonLink>
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
        gatsbyImageData
      }
    }
    imageCopilin: file(absolutePath: { regex: "/portfolio-copilin.png/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
