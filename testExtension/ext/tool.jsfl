
if (typeof($)=='undefined') {
	$ = {};
}

$.run_FLPR = function() {
	// 新規ドキュメント
	fl.createDocument();
	
	// テキスト追加
	fl.getDocumentDOM().addNewText(
		{left:100, top:100, right:300, bottom:200}
	);
	fl.getDocumentDOM().setElementProperty('autoExpand', false);
	fl.getDocumentDOM().setTextString("ハローワールド！");

}
