const contentful = require("contentful-management")
require("dotenv").config()

// eslint-disable-next-line no-console
process.on("unhandledRejection", console.dir)

// 置換前後の文字列を指定
const before = /\[\[toc\]\]/g
const after = "```toc\n```"

const sleep = (msec) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, msec)
  })
}

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN,
})

;(async () => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT_ID
  )
  const entries = await environment.getEntries({
    content_type: process.env.CONTENTFUL_CONTENT_TYPE,
    limit: 1000,
  })

  const length = entries.items.length
  for (let i = 0; i < length; i++) {
    const entry = entries.items[i]

    const content = entry.fields.body.ja
    const updatedContent = content.replace(before, after)

    if (content !== updatedContent) {
      entry.fields.body = { ja: updatedContent }

      const updatedEntry = await entry.update()
      // eslint-disable-next-line no-console
      console.log(`updated: ${updatedEntry.sys.id}`)
      await sleep(200)
    } else {
      // eslint-disable-next-line no-console
      console.log(`skipped: ${entry.sys.id}`)
    }
  }
})()
