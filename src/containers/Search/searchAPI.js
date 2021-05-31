import axios from 'axios';

let lastURL = ''

function buildquery(params) {
  const type = params.type['value'];
  const season = params.season['value'];
  const year = params.year['value'];
  const genre = params.genre['value'];
  const format = params.format['value'];
  const search = params.search['value'];
  var url = '';
  if (search != '') {
    url = 'https://api.jikan.moe/v3/search/' + type + '?q=' + (!search ? '' : search) + (!genre ? '' : '&genre=' + genre) + (!year ? '' : '&year=' + year);
  } else {
    url = 'https://api.jikan.moe/v3/genre/' + type + '/' + genre;
  }
  return (url);
}

function buildURL(params) {
  let newUrl = buildquery(params)
  if (lastURL != newUrl) {
    lastURL = newUrl;
    return (newUrl)
  }
}



export default buildURL;