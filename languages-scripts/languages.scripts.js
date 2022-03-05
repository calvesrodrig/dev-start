const axios = require('axios')
const environment = {
  production: false,
  adzunaAppId: 'df1fe68b',
  aduznaApiKey: 'f9cc2a242f77c653c0f043d818db9827'
}

let countJobs = 0
let page = 1

function callApi() {
  axios
    .get(
      `https://api.adzuna.com/v1/api/jobs/br/search/${page}?app_id=${environment.adzunaAppId}&app_key=${environment.aduznaApiKey}&what=ruby&results_per_page=50`
    )
    .then(res => {
      const jobsLength = res.data.results.length
      countJobs = countJobs + jobsLength

      if (jobsLength !== 0) {
        page = page + 1
        callApi()
        return
      }

      console.log(countJobs)

    })
    .catch(error => {
      console.error('error')
    })
}

callApi()
