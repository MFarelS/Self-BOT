const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get TikTok media.
 * @param {String} url 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log('Get TikTok media...')
    fetchJson('https://api.vhtear.com/tiktokdl?link=' + url + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

 /**
  * Get Facebook media from URL.
  * @param {String} url
  */
const facebook = (url) => new Promise((resolve, reject) => {
    console.log(`Getting Facebook video from ${url}`)
    fetchJson('https://api.i-tech.id/dl/fb?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

 const instagram = async (url) => new Promise(async (resolve, reject) => {
    const api = `http://melodicxt.herokuapp.com/api/twitter-downloader?url=${url}&apiKey=${melodickey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
        }else{
            resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})

/**
 * Get media from YouTube.
 * @param {String} url
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube media from ${url}`)
    fetchJson('https://api.i-tech.id/dl/yt?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get music from Joox.
 * @param {String} judul 
 */
const joox = (judul) => new Promise((resolve, reject) => {
    console.log(`Getting Joox music for ${judul}...`)
    fetchJson('https://api.vhtear.com/music?query=' + judul + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    facebook,
    instagram,
    ytdl,
    tik,
    joox
}
