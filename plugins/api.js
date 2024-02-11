export const api = async (url, body) => {
  try {
    const result = await $fetch(url, {
      method: 'POST',
      body: body ? JSON.stringify(body) : null,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (result.code === 200) return [result.data ?? true, null]
    return [null, result.message]
  } catch (error) {
    return [null, {
      statusCode: 500,
      message: error.toString()
    }]
  }
}

export default defineNuxtPlugin({
  parallel: true,

  setup () {
    return {
      provide: { api }
    }
  }
})
