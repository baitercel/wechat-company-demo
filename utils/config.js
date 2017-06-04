var API_BASE = 'https://frontend.xmg2.com/site/test/?json=1';
var API_BASE_NEW = 'http://demo1.xmg2.com/k/a';
var API_BASE_NEW_INFO = 'http://demo1.xmg2.com/k/b';
var API_BASE_NEW_CONTENT = 'http://demo1.xmg2.com/k/c';
var API_BASE_NEW_SUCCESS = 'http://demo1.xmg2.com/k/d';
var API_BASE_NEW_ACTIVITY = 'http://demo1.xmg2.com/k/e';
var API_BASE_NEW_F = 'http://demo1.xmg2.com/k/f';

const CONFIG = {
    API_URL: {
        GET_INDEX: API_BASE,
        GET_PAGE: API_BASE + '&page_id=',
        GET_ARTICLE: API_BASE + '&p=',
        GET_CATEGORY: API_BASE + '&cat=',
        GET_INDEX_NEW: API_BASE_NEW,
        GET_INDEX_NEW_INFO: API_BASE_NEW_INFO + '?mark=',
        API_BASE_NEW_CONTENT: API_BASE_NEW_CONTENT,
        API_BASE_NEW_SUCCESS: API_BASE_NEW_SUCCESS,
        API_BASE_NEW_ACTIVITY: API_BASE_NEW_ACTIVITY,
        API_BASE_NEW_F: API_BASE_NEW_F,
    }
}

module.exports = CONFIG;