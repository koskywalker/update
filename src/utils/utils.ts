/**
 * 指定したミリ秒処理を待つ.
 * @param ms 待つ時間をミリ秒で指定.
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise((_) => {
    return setTimeout(_, ms)
  })
}

/**
 * スクロールを有効にする.
 */
export const enableScroll = (): void => {
  const body = document.body
  if (body.classList.contains("overflow-hidden")) {
    body.classList.remove("overflow-hidden")
  }
}

/**
 * スクロールを無効にする.
 */
export const disableScroll = (): void => {
  const body = document.body
  if (!body.classList.contains("overflow-hidden")) {
    body.classList.add("overflow-hidden")
  }
}
