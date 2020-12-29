import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const Contact: React.FC = () => {
  const pageTitle = "お問い合わせ"

  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <h1>{pageTitle}</h1>
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <p>
            <label htmlFor="name">お名前</label>
          </p>
          <p>
            <input type="text" name="name" id="name" />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="email">メールアドレス</label>
          </p>
          <p>
            <input type="email" name="email" id="email" />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="message">メッセージ</label>
          </p>
          <p>
            <textarea name="message" id="message"></textarea>
          </p>
        </div>
        <p>
          <button>送信</button>
        </p>
      </form>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Contact