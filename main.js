const URL = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
document.addEventListener('DOMContentLoaded', renderData())

  function renderData(){
    fetch(URL)
    .then(response => response.json())
    // .then(data => console.log(data))
        .then(json => getData(json))
    }
// let ul = document.getElementById('comments')
function getData(data) {

  // let name = document.getElementById('name')
  // let img = document.getElementsByClassName('image')
  // let name = document.getElementsByClassName('name')
  // let branding = document.getElementsByClassName('branding')
  // img[0].src = data.list[0].thumbnail[0].url
  // name[0].textContent = data.list[0].name
  // branding[0].textContent = data.list[0].branding
  // let img1 = document.getElementsByClassName('image1')
  // let name1 = document.getElementsByClassName('name1')
  // let branding1 = document.getElementsByClassName('branding1')
  // img1[0].src = data.list[1].thumbnail[0].url
  // name1[0].textContent = data.list[1].name
  // branding1[0].textContent = data.list[1].branding
  for (let i = 0; i < data.list.length; i++) {
    let img = document.getElementsByClassName('image')
    let name = document.getElementsByClassName('name')
    let branding = document.getElementsByClassName('branding')
    let category = document.getElementsByClassName('category')
    // let url = document.getElementsByClassName('url')
    img[i].src = data.list[i].thumbnail[0].url
    name[i].textContent = data.list[i].name
    branding[i].textContent = data.list[i].branding
    category[i].textContent = data.list[i].categories
    // url[i].src = data.list[i].url
  }

  // name.textContent = data.list[0].thumbnail[0].width
}
