function isCompatible(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;}var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/mediawiki/load.php","apiScript":"/mediawiki/api.php"}});mw.loader.register([["site","1396488874",[],"site"],["noscript","1396488874",[],"noscript"],["startup","1414109919",[],"startup"],["filepage","1396488874"],["user.groups","1396488874",[],"user"],["user","1396488874",[],"user"],["user.cssprefs","1396488874",["mediawiki.user"],"private"],["user.options","1396488874",[],"private"],["user.tokens","1396488874",[],"private"],["mediawiki.language.data","1414109919",["mediawiki.language.init"]],["skins.chick","1396488874"],["skins.cologneblue","1396488874"],["skins.modern","1396488874"],["skins.monobook","1396488874"],["skins.nostalgia","1396488874"],["skins.simple","1396488874"],["skins.standard","1396488874"],["skins.vector","1396488874"],[
"skins.vector.js","1396488874"],["jquery","1396488874"],["jquery.appear","1396488874"],["jquery.arrowSteps","1396488874"],["jquery.async","1396488874"],["jquery.autoEllipsis","1396488874",["jquery.highlightText"]],["jquery.badge","1396488874",["mediawiki.language"]],["jquery.byteLength","1396488874"],["jquery.byteLimit","1396488874",["jquery.byteLength"]],["jquery.checkboxShiftClick","1396488874"],["jquery.client","1396488874"],["jquery.color","1396488874",["jquery.colorUtil"]],["jquery.colorUtil","1396488874"],["jquery.cookie","1396488874"],["jquery.delayedBind","1396488874"],["jquery.expandableField","1396488874",["jquery.delayedBind"]],["jquery.farbtastic","1396488874",["jquery.colorUtil"]],["jquery.footHovzer","1396488874"],["jquery.form","1396488874"],["jquery.getAttrs","1396488874"],["jquery.hidpi","1396488874"],["jquery.highlightText","1396488874",["jquery.mwExtension"]],["jquery.hoverIntent","1396488874"],["jquery.json","1396488874"],["jquery.localize","1396488874"],[
"jquery.makeCollapsible","1397060254"],["jquery.mockjax","1396488874"],["jquery.mw-jump","1396488874"],["jquery.mwExtension","1396488874"],["jquery.placeholder","1396488874"],["jquery.qunit","1396488874"],["jquery.qunit.completenessTest","1396488874",["jquery.qunit"]],["jquery.spinner","1396488874"],["jquery.jStorage","1396488874",["jquery.json"]],["jquery.suggestions","1396488874",["jquery.autoEllipsis"]],["jquery.tabIndex","1396488874"],["jquery.tablesorter","1397065401",["jquery.mwExtension"]],["jquery.textSelection","1396488874",["jquery.client"]],["jquery.validate","1396488874"],["jquery.xmldom","1396488874"],["jquery.tipsy","1396488874"],["jquery.ui.core","1396488874",["jquery"],"jquery.ui"],["jquery.ui.widget","1396488874",[],"jquery.ui"],["jquery.ui.mouse","1396488874",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1396488874",[],"jquery.ui"],["jquery.ui.draggable","1396488874",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable"
,"1396488874",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui"],["jquery.ui.resizable","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.accordion","1396488874",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui"],["jquery.ui.button","1396488874",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1396488874",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.progressbar","1396488874",[
"jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1396488874",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.tabs","1396488874",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1396488874",["jquery"],"jquery.ui"],["jquery.effects.blind","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.bounce","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fade","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale",
"1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1396488874",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1396488874",["jquery.effects.core"],"jquery.ui"],["mediawiki","1396488874"],["mediawiki.api","1396488874",["mediawiki.util"]],["mediawiki.api.category","1396488874",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.edit","1396488874",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.parse","1396488874",["mediawiki.api"]],["mediawiki.api.watch","1396488874",["mediawiki.api","user.tokens"]],["mediawiki.debug","1396488874",["jquery.footHovzer"]],["mediawiki.debug.init","1396488874",["mediawiki.debug"]],["mediawiki.feedback","1396488874",["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"]],["mediawiki.hidpi","1396488874",["jquery.hidpi"]],["mediawiki.htmlform","1396488874"],["mediawiki.notification","1396488874",[
"mediawiki.page.startup"]],["mediawiki.notify","1396488874"],["mediawiki.searchSuggest","1397060254",["jquery.autoEllipsis","jquery.client","jquery.placeholder","jquery.suggestions"]],["mediawiki.Title","1396488874",["mediawiki.util"]],["mediawiki.Uri","1396488874"],["mediawiki.user","1396488874",["jquery.cookie","mediawiki.api","user.options","user.tokens"]],["mediawiki.util","1397060827",["jquery.client","jquery.cookie","jquery.mwExtension","mediawiki.notify"]],["mediawiki.action.edit","1396488874",["jquery.textSelection","jquery.byteLimit"]],["mediawiki.action.edit.preview","1396488874",["jquery.form","jquery.spinner"]],["mediawiki.action.history","1396488874",[],"mediawiki.action.history"],["mediawiki.action.history.diff","1396488874",[],"mediawiki.action.history"],["mediawiki.action.view.dblClickEdit","1396488874",["mediawiki.util","mediawiki.page.startup"]],["mediawiki.action.view.metadata","1397176491"],["mediawiki.action.view.postEdit","1396488874",["jquery.cookie"]],[
"mediawiki.action.view.rightClickEdit","1396488874"],["mediawiki.action.watch.ajax","1396488874",["mediawiki.page.watch.ajax"]],["mediawiki.language","1396488874",["mediawiki.language.data","mediawiki.cldr"]],["mediawiki.cldr","1396488874",["mediawiki.libs.pluralruleparser"]],["mediawiki.libs.pluralruleparser","1396488874"],["mediawiki.language.init","1396488874"],["mediawiki.jqueryMsg","1396488874",["mediawiki.util","mediawiki.language"]],["mediawiki.libs.jpegmeta","1396488874"],["mediawiki.page.ready","1396488874",["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.placeholder","jquery.mw-jump","mediawiki.util"]],["mediawiki.page.startup","1396488874",["jquery.client","mediawiki.util"]],["mediawiki.page.patrol.ajax","1397134735",["mediawiki.page.startup","mediawiki.api","mediawiki.util","mediawiki.Title","mediawiki.notify","jquery.spinner","user.tokens"]],["mediawiki.page.watch.ajax","1397061786",["mediawiki.page.startup","mediawiki.api.watch","mediawiki.util",
"mediawiki.notify","jquery.mwExtension"]],["mediawiki.special","1396488874"],["mediawiki.special.block","1396488874",["mediawiki.util"]],["mediawiki.special.changeemail","1397331984",["mediawiki.util"]],["mediawiki.special.changeslist","1396488874",["jquery.makeCollapsible"]],["mediawiki.special.movePage","1396488874",["jquery.byteLimit"]],["mediawiki.special.preferences","1396488874"],["mediawiki.special.recentchanges","1396488874",["mediawiki.special"]],["mediawiki.special.search","1397063500"],["mediawiki.special.undelete","1396488874"],["mediawiki.special.upload","1397076592",["mediawiki.libs.jpegmeta","mediawiki.util"]],["mediawiki.special.userlogin.signup","1396488874"],["mediawiki.special.javaScriptTest","1396488874",["jquery.qunit"]],["mediawiki.tests.qunit.testrunner","1396488874",["jquery.getAttrs","jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready"]],["mediawiki.legacy.ajax","1396488874",["mediawiki.util","mediawiki.legacy.wikibits"
]],["mediawiki.legacy.commonPrint","1396488874"],["mediawiki.legacy.config","1396488874",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.IEFixes","1396488874",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1396488874",["mediawiki.legacy.wikibits","jquery.byteLimit"]],["mediawiki.legacy.shared","1396488874"],["mediawiki.legacy.oldshared","1396488874"],["mediawiki.legacy.upload","1396488874",["mediawiki.legacy.wikibits","mediawiki.util"]],["mediawiki.legacy.wikibits","1396488874",["mediawiki.util"]],["mediawiki.legacy.wikiprintable","1396488874"],["ext.cite","1396488874",["jquery.tooltip"]],["jquery.tooltip","1396488874"],["ext.rtlcite","1396488874"],["ext.categoryTree","1397065392"],["ext.categoryTree.css","1396488874"],["ext.abuseFilter","1396488874"],["ext.abuseFilter.edit","1396488874",["mediawiki.util","jquery.textSelection","jquery.spinner"]],["ext.abuseFilter.tools","1396488874",["mediawiki.util","jquery.spinner"]],["ext.abuseFilter.examine","1396488874",[
"mediawiki.util"]],["ext.math.mathjax","1396488874",[],"ext.math.mathjax"],["ext.math.mathjax.enabler","1396488874"]]);mw.config.set({"wgLoadScript":"/mediawiki/load.php","debug":false,"skin":"lesswrong","stylepath":"/mediawiki/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"/mediawiki","wgScriptExtension":".php","wgScript":"/mediawiki/index.php","wgVariantArticlePath":false,"wgActionPaths":{},"wgServer":"http://wiki.lesswrong.com","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.21.3","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgMainPageTitle":"LessWrong Wiki","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Lesswrongwiki","5":"Lesswrongwiki talk","6":"File","7":"File talk","8":"MediaWiki","9":
"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"lesswrongwiki":4,"lesswrongwiki_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"Lesswrongwiki","wgFileExtensions":["doc","docx","gif","jpeg","jpg","odg","odp","ods","odt","pdf","png","pps","ppsx","ppt","pptx","rtf","tiff","txt","xls","xlsx","svg"],"wgDBname":"lwiki","wgFileCanRotate":true,"wgAvailableSkins":{"chick":"Chick","simple":"Simple","vector":"Vector","standard":"Standard","myskin":"MySkin","monobook":"MonoBook","cologneblue":"CologneBlue","modern":"Modern","nostalgia":"Nostalgia","lesswrong":"LessWrong"},"wgExtensionAssetsPath":"/mediawiki/extensions","wgCookiePrefix":"lwiki",
"wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[]});};if(isCompatible()){document.write("\x3cscript src=\"/mediawiki/load.php?debug=false\x26amp;lang=en\x26amp;modules=jquery%2Cmediawiki\x26amp;only=scripts\x26amp;skin=lesswrong\x26amp;version=20131114T184635Z\"\x3e\x3c/script\x3e");}delete isCompatible;
/* cache key: lwiki:resourceloader:filter:minify-js:7:a2d8b96b1f36031505126ea7bc7934fc */