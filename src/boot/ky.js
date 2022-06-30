import { boot } from 'quasar/wrappers'
import ky from 'ky'
const url = 'http://content.kissloveodsk.ru/wp-json/wp/v2/posts'
const fetch = {
  async get_posts () {
    return await ky.get(url).json()
  }
}

export default boot(({ app }) => {
  app.config.globalProperties.$fetch = fetch
})

export { url }
