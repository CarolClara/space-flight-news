import axios from "axios";

const articleApi = 'https://api.spaceflightnewsapi.net/v3/articles'

export default {
   list:  (text, sort, id) => {
     let params = { 'title_contains': text,  'id_lt': id, _sort: sort ? 'publishedAt' : null }

     return axios
       .get(
         articleApi,
         { params }
       )
       .then(response => {
         return Promise.resolve({ articles: response.data })
       })
       .catch(error => Promise.reject(error))
   }
}

// if (filterText) {
//   const words = filterText.split(" ")
//   let regStr = ""
//   for (let i = 0; i < words.length; i++)
//     regStr += (i + 1 < words.length) ? words[i] + '|' : words[i]
//   const regExp = new RegExp(regStr, 'g')
//   return Promise.resolve(
//     {articles: data.filter(article => article.title.match(regExp))}
//   )
// }
