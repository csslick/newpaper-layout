// main.js
$(function(){

});

// 굿사이트 정보 데이터
var goodSiteInfo = [
  {
    imgSrc: 'images/site1.png',
    url: 'https://swabtheworld.com/en/',
    title: 'SWAB THE WORLD'
  },
  {
    imgSrc: 'images/site2.png',
    url: 'https://newestamericans.com/',
    title: '노스웨스트'
  },
  {
    imgSrc: 'images/site3.gif',
    url: 'http://waaarhol.com/',
    title: '앤디워홀'
  },
];

var num = 0; // 데이터 인덱스번호

// 사이트 정보 변경 함수
function changeSiteInfo(num) {
  /* 이미지 변경 */
  $('#sidebar > figure img').attr('src', goodSiteInfo[num].imgSrc);
  /* 홈페이지 주소 변경 */
  $('#sidebar > figure .url').text(goodSiteInfo[num].url);
  /* 제목 변경 */
  $('#sidebar > figure .home_title').text(goodSiteInfo[num].title);
}

// 다음 사이트 정보
function nextSiteInfo() {
  changeSiteInfo(num);
  console.log(111)
}



