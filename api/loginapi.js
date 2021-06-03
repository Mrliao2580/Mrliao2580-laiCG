const request = require('./index.js')

module.exports.getuser = function(code){
  return request({
    url:'http://127.0.0.1:3000/getopenid',
    method:'POST',
    data:{
      code
    }
  })
}
module.exports.getlogin = function(code){
      return request({
        url:'http://denglu.zhengguibin.xyz/getlogin',
        method:'POST',
        data:{
          code
        }
      })
}

module.exports.gettuangou= function(){
  return request({
    url:"http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
    header:{
      Cookie: 'TY_SESSION_ID=19fe45df-a687-464d-b9fe-88098a06dbd5; referer_site_cps=wap_touch_; guide_download_show=1; has_download=1; Hm_lvt_884477732c15fb2f2416fb892282394b=1621907820; __utma=154994554.332353985.1621907821.1621907821.1621907821.1; __utmz=154994554.1621907821.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); PHPSESSID=66fc9c31349036b6fe747f0c1baa1ec7; sid=66fc9c31349036b6fe747f0c1baa1ec7; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22179a13d691c25d-0e835a22fcfe2-5437971-304704-179a13d691e44c%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%7D; from_source=browser; referer_site=wap_browser_wap_touch_; jmdl14=2; jml14=2; device_platform=iphone; jump_info=%7B%22com.jumei.iphone%22%3A%7B%22jumeimallUrl%22%3A%22jumeimall%253A%252F%252Fpage%252Fadcommon%253Fposition%253Dcoutuan%2526title%253D%25E8%2581%259A%25E7%25BE%258E%25E6%258B%25BC%25E5%259B%25A2%22%7D%7D'
    }
  })
}
module.exports.getshopcar = function(){
  return request({
    url:"http://lcg.zhengxl.show/api/getClassify",
    mothods:"post"
  })
}