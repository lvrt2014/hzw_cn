
// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) {
	//author: meizz 
	var o = { 
		"M+" : this.getMonth()+1,                 //月份 
		"d+" : this.getDate(),                    //日 
		"h+" : this.getHours(),                   //小时 
		"m+" : this.getMinutes(),                 //分 
		"s+" : this.getSeconds(),                 //秒 
		"q+" : Math.floor((this.getMonth()+3)/3), //季度 
		"S"  : this.getMilliseconds()             //毫秒 
	};
	if(/(y+)/.test(fmt)) 
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	for(var k in o) 
		if(new RegExp("("+ k +")").test(fmt)) 
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
	return fmt;
}
function timer2time(nS) {
	//return nS.format("yyyy-MM-dd HH:mm:ss");
	return new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm:ss");
}
function timer2date(nS) {
	//return nS.format("yyyy-MM-dd HH:mm:ss");
	var d=new Date(parseInt(nS) * 1000);
	return d.Format("yyyy-MM-dd");
}
function WeekDay(nS){
	var d=new Date(parseInt(nS) * 1000);
	var week_day=new Array(7);
	week_day[0]="星期日";
	week_day[1]="星期一";
	week_day[2]="星期二";
	week_day[3]="星期三";
	week_day[4]="星期四";
	week_day[5]="星期五";
	week_day[6]="星期六";
	return week_day[d.getDay()];
}