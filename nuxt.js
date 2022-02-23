import { join } from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'v2/src/components'),
      })
      dirs.push({
        path: join(__dirname, 'v1/src/components'),
      })
    }
  }
})