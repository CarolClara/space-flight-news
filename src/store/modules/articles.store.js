import { ArticlesApi } from '@/services/index'

export default {
  namespaced: true,

  state: {
    articles: [],
    loading: false,
    status: '',
    error: null
  },

  mutations: {
    LIST_ARTICLES_SUCCESS (state, { articles }) {
      state.articles = articles
      state.loading = false
      state.status = 'success'
      state.error = null
    },
    LIST_ARTICLES_PENDING (state) {
      state.loading = true
    },
    LIST_ARTICLES_FAILED (state, { error }) {
      state.articles = []
      state.loading = false
      state.status = 'danger'
      state.error = error
    },

    EMPTY_LIST_ARTICLES (state) {
      state.articles = []
      state.status = ''
      state.error = null
    }
  },

  actions: {
    listArticles ({ commit }, { text, sort, id }) {
      commit('LIST_ARTICLES_PENDING')
      return ArticlesApi.list(text, sort, id)
        .then(({ articles, error }) => {
          if (!error)
            commit('LIST_ARTICLES_SUCCESS', { articles })
          else
            commit('LIST_ARTICLES_FAILED', { error })
        })
      .catch(
        error => commit('LIST_ARTICLES_FAILED', { error })
      )
    }
  }

}
