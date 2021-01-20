const contentful = require("contentful-management")
require("dotenv").config()

// eslint-disable-next-line no-console
process.on("unhandledRejection", console.dir)

// 置換前後の文字列を指定
const before = /(@kosuke_upd)/g
const after =
  '(<a href="https//twitter.com/kosuke_upd/" target="_blank" rel="noopener noreferrer">@kosuke_upd</a>)'

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
    const updatedEntryBody = entryBody.replace(before, after)

    if (entryBody !== updatedEntryBody) {
      entry.fields.body = { ja: updatedEntryBody }
      const updatedEntry = await entry.update()
      // eslint-disable-next-line no-console
      console.log(`updated: ${updatedEntry.sys.id}`)
      await sleep(200)
    } else {
      // eslint-disable-next-line no-console
      console.log(`skipped: ${entry.sys.id}`)
    }
  })
})()
