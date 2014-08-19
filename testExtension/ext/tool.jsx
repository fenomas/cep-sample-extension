
if (typeof($)=='undefined') {
	$ = {};
}


/*
 * Photoshopから呼ばれる関数
*/

$.run_PHXS = function() {
	// 新規ドキュメントを作成
	var doc = app.documents.add(
		UnitValue(500, "px"), UnitValue(400, "px"), 72,
		"ハローワールド！", NewDocumentMode.RGB, DocumentFill.WHITE
	);
	// テキストを追加する
	doc.artLayers.add();
	doc.activeLayer.kind = LayerKind.TEXT;
	doc.activeLayer.textItem.size = 32;
	doc.activeLayer.textItem.contents = "Hello World!";
}


/*
 * ExtendScriptツールのVMからカスタムイベント発送の仕組み
*/
var xLib;
try {
	xLib = new ExternalObject("lib:\PlugPlugExternalObject");
} catch(e) { alert("Missing ExternalObject: "+e); }

// ツールVMからカスタムイベントを発送
$.sendEvent = function(type) {
	if (xLib) {
		var eventObj = new CSXSEvent();
		eventObj.type = type;
		eventObj.data = app.toString();
		eventObj.dispatch();
	}
}





/*
 * Photoshop以外のExtendScriptツールから呼ばれる関数
*/


$.run_ILST = function() {
	alert("ハローワールド！ \n by Illustrator")
}

$.run_AEFT = function() {
	alert("ハローワールド！ \n by After Effects")
}

$.run_PPRO = function() {
	alert("ハローワールド！ \n by Premiere Pro")
}

$.run_PRLD = function() {
	alert("ハローワールド！ \n by Prelude")
}

$.run_IDSN = function() {
	alert("ハローワールド！ \n by InDesign")
}

$.run_AICY = function() {
	alert("ハローワールド！ \n by InCopy")
}

