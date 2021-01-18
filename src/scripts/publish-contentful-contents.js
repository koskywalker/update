const contentful = require("contentful-management")
require("dotenv").config()

// eslint-disable-next-line no-console
process.on("unhandledRejection", console.dir)

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
    if (entry.isUpdated()) {
      await entry.publish()
      // eslint-disable-next-line no-console
      console.log(`published: ${entry.sys.id}`)
      await sleep(200)
    } else {
      // eslint-disable-next-line no-console
      console.log(`skipped: ${entry.sys.id}`)
    }
  })
})()
