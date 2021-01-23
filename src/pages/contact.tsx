import axios from "axios"
import React from "react"
import { useForm } from "react-hook-form"

import { Breadcrumb } from "../components/breadcrumb"
import { Button } from "../components/button"
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

const defaultValues = {
  name: "",
  company: "",
  email: "",
  message: "",
}

type IProps = {
  location: Location
}

const Contact: React.FC<IProps> = ({ location }) => {
  const pageTitle = "お問い合わせ"

  const {
    register,
    errors,
    reset,
    handleSubmit,
    formState,
  } = useForm<FormInputs>({
    mode: "onTouched",
    criteriaMode: "all",
    defaultValues,
  })

  const { isDirty, isSubmitting, isValid } = formState

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: "https://formspree.io/f/xjvpleqq",
      data,
    })
      .then(() => {
        reset()
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <Layout location={location}>
      <Seo pageTitle={pageTitle} location={location} />
      <Breadcrumb currentPageTitle={pageTitle} />
      <div className="py-8">
        <div className="px-4 py-8 overflow-hidden bg-white shadow-custom sm:px-6 lg:px-8 lg:py-16">
          <div className="relative max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="mt-8 lg:mt-12">
              <form
                action="/thanks/"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                onSubmit={() => {
                  return handleSubmit(onSubmit)()
                }}
              >
                <input
                  type="hidden"
                  name="_next"
                  value={`https://${process.env.GATSBY_BASE_URL}/thanks/`}
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <div className="sm:col-span-2">
                  <InputWithLabel
                    label="名前"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="山田太郎"
                    maxlength={512}
                    required={true}
                    register={register({
                      required: "名前を入力してください.",
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
                    register={register({
                      maxLength: {
                        value: 512,
                        message: "512文字以内で入力してださい.",
                      },
                    })}
                    error={errors.company}
                  />
                  <ErrorMessageList name="company" errors={errors} />
                </div>
                <div className="sm:col-span-2">
                  <InputWithLabel
                    label="メールアドレス"
                    type="email"
                    name="_replyto"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxlength={512}
                    required={true}
                    register={register({
                      required: "メールアドレスを入力してください.",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "メールアドレスの形式が誤っています.",
                      },
                      maxLength: {
                        value: 512,
                        message: "512文字以内で入力してださい.",
                      },
                    })}
                    error={errors.email}
                  />
                  <ErrorMessageList name="email" errors={errors} />
                </div>
                <div className="sm:col-span-2">
                  <TextareaWithLabel
                    label="メッセージ"
                    name="message"
                    maxlength={10000}
                    required={true}
                    register={register({
                      required: "メッセージを入力してください",
                      maxLength: {
                        value: 10000,
                        message: "10000文字以内で入力してださい.",
                      },
                    })}
                    error={errors.message}
                  />
                  <ErrorMessageList name="message" errors={errors} />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    text="送信"
                    size="lg"
                    disabled={!(isDirty && isValid) || isSubmitting}
                    isLoading={isSubmitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Contact
