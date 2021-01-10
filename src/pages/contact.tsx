import React from "react"

import { Breadcrumb } from "../components/breadcrumb"
import { InputWithLabel } from "../components/input-with-label"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { Textarea } from "../components/textarea"

const Contact: React.FC = () => {
  const pageTitle = "お問い合わせ"

  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <Breadcrumb currentPageTitle={pageTitle} />
      <div className="px-4 py-16 my-8 overflow-hidden bg-white shadow-custom sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {pageTitle}
            </h2>
          </div>
          <div className="mt-12">
            <form
              name="contact"
              action="#"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="名前"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="山田太郎"
                  maxlength={512}
                  error={true}
                  errorMessageList={["名前を入力してください"]}
                />
              </div>
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="会社名 / 組織名"
                  type="company"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="株式会社XXXX"
                  maxlength={512}
                  error={false}
                  errorMessageList={["会社名を入力してください"]}
                />
              </div>
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="メールアドレス"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxlength={512}
                  error={false}
                  errorMessageList={["メールアドレスを入力してください"]}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  メッセージ
                </label>
                <div className="mt-1">
                  <Textarea id="message" name="message" error={false} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent bg-cyan-600 shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Contact
