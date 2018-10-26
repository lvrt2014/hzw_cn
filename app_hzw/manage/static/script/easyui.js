$.extend($.fn.window.defaults,{
	width:600,
	height:400,
	collapsible:false,
	minimizable:false,
	maximizable:false,
	modal:true,
});
$.extend($.fn.datagrid.defaults,{
    pagination:true,
    pagePosition:'both',
    fitColumns:true,
    showHeader:true,
    checkOnSelect:false,
    selectOnCheck:false,
    singleSelect:true,
    fit:true,
	onDblClickCell: function(index,field,value){
		var range					= document.createRange();
		var r						= range.selectNode(event.toElement);
		const selection				= window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);

	}
});
function WinClose(){
	var win = arguments[0] ? arguments[0] : "#win";
	console.log(arguments);
	$(win).window("close");
}
function WinFormClose() {
	$('#winForm').window("close");
}
function WinOpen(win,title,url,width,height,onloadCallBack){
	if(!$("body").children("div").is('#'+win))$("body").append("<div id=\""+win+"\" />");
	var win_cfg		= JSON.parse($.cookie(win)||"{}")||{};
	var win_width	= width||win_cfg.width;
	var win_height	= height||win_cfg.height;
	return $("#"+win).window({
		title:title,
		width:win_width||600,
		height:win_height||400,
		href:url,
		onLoad:function(){
			if(typeof onloadCallBack == "function") 
				onloadCallBack();
		},
		onClose:function(){
			$("#"+win).window('destroy');
		},
		onResize:function(width, height){
			console.log(width+"-"+height);
			win_cfg.width=width;
			win_cfg.height=height;
			$.cookie(win,JSON.stringify(win_cfg));
		}
	});
}

function upload_pic(imageUrl,fn){
	var editor = KindEditor.editor({
		allowFileManager : true,
		fileManagerJson : "/manage/editor/filemanager.json",
		uploadJson: "/manage/editor/upload.json",
		urlType:'domain',
	});
	//var img=document.createElement("img");
	editor.loadPlugin('image', function() {
		editor.plugin.imageDialog({
			imageUrl : imageUrl,
			clickFn : function(url, title, width, height, border, align) {
				var img={
					src:url,
					alt:title,
					width:width,
					height:height,
					border:border,
					align:align,
				}
//				img.src=url;
//				img.alt=title;
//				img.width=width;
//				img.height=height;
//				img.border=border;
//				img.align=align;
				editor.hideDialog();
				console.log(img);
				fn(img);
			}
		});
	});
}