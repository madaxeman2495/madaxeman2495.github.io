// Begin Actions
function F_doLoaded() {
	document.main = new F_cMain();
	document.objectModel = new Object();
	F_OM('Layout','LayoutLYR', 'doc', '', new Array(
	'Page Loaded','Layout','Go To URL',F_Parm('URL','http://madaxeman2495.github.io/avh_current.pdf','Target Frame','This','Other Target',''),0));
	F_pageLoaded('Layout');
}
 
$(document).ready( function() {
F_onLoaded();
});
// End Actions

