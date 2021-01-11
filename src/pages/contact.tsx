import React from "react"
import { useForm } from "react-hook-form"

import { Breadcrumb } from "../components/breadcrumb"
import { ErrorMessageList } from "../components/error-message-list"
import { InputWithLabel } from "../components/input-with-label"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { TextareaWithLabel } from "../components/textarea-with-label"

type FormInputs = {
  name: string
  company: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const pageTitle = "お問い合わせ"

  const { register, handleSubmit, errors, reset } = useForm<FormInputs>({
    mode: "onTouched",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  })

  // const encode = (data: any) => {
  //   return Object.keys(data)
  //     .map((key) => {
  //       return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     })
  //     .join("&")
  // }

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log(data)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((response: any) => {
        reset()
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

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
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={() => {
                return handleSubmit(onSubmit)()
              }}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="名前"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="山田太郎"
                  maxlength={512}
                  register={register({
                    required: "名前を入力してください.",
                    minLength: {
                      value: 3,
                      message: "3文字以上で入力してください.",
                    },
                    maxLength: {
                      value: 512,
                      message: "512文字以内で入力してださい.",
                    },
                  })}
                  error={errors.name}
                />
                <ErrorMessageList name="name" errors={errors} />
              </div>
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="会社名 / 組織名"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="株式会社XXXX"
                  maxlength={512}
                  register={register()}
                  error={errors.company}
                />
                <ErrorMessageList name="company" errors={errors} />
              </div>
              <div className="sm:col-span-2">
                <InputWithLabel
                  label="メールアドレス"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxlength={512}
                  register={register({
                    required: "メールアドレスを入力してください.",
                  })}
                  error={errors.email}
                />
                <ErrorMessageList name="email" errors={errors} />
              </div>
              <div className="sm:col-span-2">
                <TextareaWithLabel
                  label="メッセージ"
                  name="message"
                  maxlength={8192}
                  register={register({
                    required: "メッセージを入力してください",
                  })}
                  error={errors.message}
                />
                <ErrorMessageList name="message" errors={errors} />
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
