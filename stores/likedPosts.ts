export const useLikeStore = defineStore(
  'likedPosts',
  () => {
    const baseUrl = useRuntimeConfig().public.pushBaseUrl
    const likedPosts = ref<string[]>([])
    const likes = ref<Record<string, number>>({})

    async function fetchLikes() {
      const upstreamLikes = await $fetch(`${baseUrl}/likes`, { method: 'GET' })
        .then((body: any) => body.likes)

      likes.value = upstreamLikes
    }

    async function like(recordId: string) {
      likedPosts.value.push(recordId)
      likes.value[recordId] ??=  0
      likes.value[recordId]++
      await $fetch(`${baseUrl}/${recordId}/likes`, { method: 'POST' })
      await fetchLikes()
    }

    async function dislike(recordId: string) {
      likedPosts.value = likedPosts.value.filter(id => id !== recordId)
      likes.value[recordId] ??= 0
      likes.value[recordId] = Math.max(0, likes.value[recordId] - 1)
      await $fetch(`${baseUrl}/${recordId}/likes`, { method: 'DELETE' })
      await fetchLikes()
    }

    function isLiked(recordId: string) {
      return likedPosts.value.includes(recordId)
    }

    function getLikes(recordId: string) {
      return likes.value[recordId] ?? 0
    }

    return { likedPosts, likes, like, dislike, isLiked, getLikes, fetchLikes }
  },
  {
    persist: true,
  },
)
