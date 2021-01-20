const contentful = require("contentful-management")
require("dotenv").config()

// eslint-disable-next-line no-console
process.on("unhandledRejection", console.dir)

// 検索文字列を指定
// const regex = /cardReferenceExternal/g
const regex = "upd.world/wp-content/uploads"

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

  entries.items.map(async (entry) => {
    const entryBody = entry.fields.body.ja

    if (entryBody.search(regex) !== -1) {
      // eslint-disable-next-line no-console
      console.log(`id: ${entry.sys.id}`)
      await sleep(200)
    } else {
      // eslint-disable-next-line no-console
      console.log(`skipped: ${entry.sys.id}`)
    }
  })
})()
