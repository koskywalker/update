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
 * スクロールの可否を切り替える.
 */
export const toggleEnableScroll = (): void => {
  const body = document.body
  body.classList.toggle("overflow-hidden")
}
