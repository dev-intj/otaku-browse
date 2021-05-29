let lastURL = ''
 
function buildquery(searchPAR) {
  const type = searchPAR.type;
  const season = searchPAR.season;
  const year = searchPAR.year;
  const genre = searchPAR.genre;
  const format = searchPAR.format;
  const search = searchPAR.search;
  var url = '';
  if (search != '') {
    url = 'https://api.jikan.moe/v3/search/' + type + '?q=' + (!search ? '' : search) + (!genre ? '' : '&genre=' + genre) + (!year ? '' : '&year=' + year);
  } else {
    url = 'https://api.jikan.moe/v3/genre/' + type + '/' + genre;
  }
  return (url);
}
 
function get (params) {
  let newUrl = buildquery(params)
  if (lastURL != newUrl) {
    lastURL = newUrl;
    return axios.get(newUrl)
  }
}
 
export default get