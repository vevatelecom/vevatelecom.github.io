

;if(CloudflareApps.matchPage(CloudflareApps.installs['5YJnOQM1ISlP'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=1);})
([,(function(module,exports,__webpack_require__){"use strict";(function(){'use strict'
if(!window.addEventListener)return
var options=CloudflareApps.installs['5YJnOQM1ISlP'].options
var VISIBILITY_ATTRIBUTE='data-cf-welcome-bar-visibility'
var documentElementOriginallyPositionStatic=window.getComputedStyle(document.documentElement).position==='static'
var element=document.createElement('cloudflare-app')
element.setAttribute('app','welcome-bar')
var htmlStyle=document.createElement('style')
document.head.appendChild(htmlStyle)
var elementStyle=document.createElement('style')
document.head.appendChild(elementStyle)
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function setPageStyles(){setHTMLStyle()
setFixedElementStyles()}
function setHTMLStyle(){if(!document.body)return
var style=''
if(documentElementOriginallyPositionStatic&&isShown()){style='\n        html {\n          position: relative;\n          top: '+element.clientHeight+'px;\n        }\n      '}
htmlStyle.innerHTML=style}
function setFixedElementStyles(){function removeTopStyle(node){var currentStyle=node.getAttribute('style')
if(!currentStyle)return
node.setAttribute('style',currentStyle.replace(/top[^]+?/g,''))}
var elementHeight=element.clientHeight
var allNodes=document.querySelectorAll('*:not([app="welcome-bar"]):not([data-cfapps-welcome-bar-adjusted-fixed-element-original-top])')
Array.prototype.forEach.call(allNodes,function(node){var computedStyle=window.getComputedStyle(node)
var boundingClientRect=node.getBoundingClientRect()
var isSticky=computedStyle.position==='sticky'
var isFixed=computedStyle.position==='fixed'
var isBottomFixed=computedStyle.bottom==='0px'&&boundingClientRect.bottom===window.innerHeight&&boundingClientRect.top>=elementHeight
if("5YJnOQM1ISlP"==='preview'&&node.nodeName==='IFRAME'&&node.src.indexOf('https://embedded.cloudflareapps.com')!==-1){return}
if((isFixed||isSticky)&&!isBottomFixed){var top=boundingClientRect.top
var styleTop=parseInt(computedStyle.top,10)
if(isSticky||top===styleTop&&top<=elementHeight){node.setAttribute('data-cfapps-welcome-bar-adjusted-fixed-element-original-top',top)}}})
var adjustedNodes=document.querySelectorAll('[data-cfapps-welcome-bar-adjusted-fixed-element-original-top]')
Array.prototype.forEach.call(adjustedNodes,function(node){removeTopStyle(node)
var computedStyle=window.getComputedStyle(node)
var isFixedOrSticky=computedStyle.position==='fixed'||computedStyle.position==='sticky'
if(isFixedOrSticky&&isShown()&&elementHeight>0){var newTop=(parseInt(computedStyle.top,10)||0)+elementHeight
node.style.top=newTop+'px'}})}
function isShown(){return document.documentElement.getAttribute(VISIBILITY_ATTRIBUTE)==='visible'}
function hideWelcomeBar(){document.documentElement.setAttribute(VISIBILITY_ATTRIBUTE,'hidden')
element.removeAttribute('data-slide-animation')
try{window.localStorage.cfAlertBarOptions=JSON.stringify(options)}catch(e){}
setPageStyles()}
function cancelAnimation(){element.removeEventListener('transitionend',hideWelcomeBar)
element.removeAttribute('data-slide-animation')}
function updateAnimation(){if(!options.behavior.automaticallyHide){cancelAnimation()
return}
element.addEventListener('transitionend',hideWelcomeBar)
element.addEventListener('mouseover',cancelAnimation)
element.addEventListener('click',cancelAnimation)
window.requestAnimationFrame(function(){element.setAttribute('data-slide-animation','')
window.requestAnimationFrame(function(){element.setAttribute('data-slide-animation','complete')})})}
function updateElementStyle(){elementStyle.innerHTML='\n      cloudflare-app[app="welcome-bar"] {\n        background-color: '+options.theme.backgroundColor+';\n        color: '+options.theme.textColor+';\n      }\n\n      @media (max-width: 768px) {\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:hover,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:active {\n          color: '+options.theme.textColor+';\n        }\n      }\n\n      @media (min-width: 768px) {\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:hover,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:active {\n          background-color: '+options.theme.buttonBackgroundColor+' !important;\n          color: '+(options.theme.buttonTextColorStrategy==='auto'?options.theme.backgroundColor:options.theme.buttonTextColor)+' !important;\n        }\n      }\n    '
element.setAttribute('data-style',options.theme.style)}
function updateElement(){var hasSeenAlert=false
try{hasSeenAlert=window.localStorage.cfAlertBarOptions===JSON.stringify(options)}catch(e){}
if(hasSeenAlert&&"5YJnOQM1ISlP"!=='preview')return
updateElementStyle()
element.innerHTML=''
element.style.zIndex=getMaxZIndex()+1
var messageContainer=document.createElement('alert-message')
var messageContent=document.createElement('alert-message-content')
messageContent.textContent=(options.message||'').trim()||'We just launched an amazing new product!'
messageContainer.appendChild(messageContent)
if(options.cta.show){var ctaButton=document.createElement('a')
ctaButton.className='alert-cta-button'
ctaButton.textContent=options.cta.label.trim()||'More info'
if(options.cta.newWindow)ctaButton.target='_blank'
if(options.cta.url)ctaButton.href=options.cta.url
messageContent.appendChild(ctaButton)}
element.appendChild(messageContainer)
if(options.behavior.showCloseButton){var dismissButton=document.createElement('alert-dismiss')
dismissButton.setAttribute('role','button')
dismissButton.textContent='×'
dismissButton.addEventListener('click',hideWelcomeBar)
element.appendChild(dismissButton)}
document.documentElement.setAttribute(VISIBILITY_ATTRIBUTE,'visible')
updateAnimation()}
function bootstrap(){document.body.appendChild(element)
updateElement()
window.requestAnimationFrame(setPageStyles)
window.addEventListener('resize',setPageStyles)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['5YJnOQM1ISlP'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
updateElement()
setPageStyles()},setTheme:function setTheme(nextOptions){var themeStyleChanged=nextOptions.theme.style!==options.theme.style
options=nextOptions
updateElementStyle()
if(themeStyleChanged)setPageStyles()}}})()})]);};if(CloudflareApps.matchPage(CloudflareApps.installs['Vs19LbPRdE20'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener||!document.documentElement.classList)return
var times={'0sec':0,'12hours':42480000,'24hours':84960000,'1week':594720000,}
var app
var title
var message
var action
var visibilityTimeout
var store=window.localStorage||{}
var options=window.CloudflareApps.installs['Vs19LbPRdE20'].options
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function getMessageKey(string){var hash=5381
var i=string.length
while(i){hash=(hash*33)^string.charCodeAt(--i)}
return hash>>>0}
function closeApp(){app.setAttribute('data-visibility','hidden')
var contentID=getMessageKey(options.title+options.text)
store['cf-flashcard']=JSON.stringify({contentID:contentID,closedAt:Date.now()})
if("Vs19LbPRdE20"==='preview')updateVisibility()}
function updateVisibility(){clearTimeout(visibilityTimeout)
var visible=true
var stored=false
try{stored=JSON.parse(store['cf-flashcard'])}catch(e){}
if("Vs19LbPRdE20"==='preview'||!stored){visible=true}else{var timeframe=times[options.renew]
visible=timeframe===0||(Date.now()-stored.closedAt)>=timeframe}
if(visible){visibilityTimeout=setTimeout(function(){app.setAttribute('data-visibility','visible')},(options.delay||0)*1000)}}
function updateContent(){app.setAttribute('data-position',options.position)
title.textContent=options.title||'Announcement'
message.innerHTML=options.text.html
action.style.display=options.action.show?'':'none'
action.textContent=(options.action.label||'Take me there').trim()
action.href=options.action.url||''}
function initialize(){app=CloudflareApps.createElement({selector:'body',method:'append'},app)
app.setAttribute('app','flashcard')
app.style.zIndex=getMaxZIndex()+1
var header=document.createElement('flashcard-header')
app.appendChild(header)
title=document.createElement('flashcard-title')
header.appendChild(title)
var close=document.createElement('flashcard-close')
close.setAttribute('role','button')
close.textContent='✕'
header.appendChild(close)
var content=document.createElement('flashcard-content')
app.appendChild(content)
message=document.createElement('flashcard-message')
content.appendChild(message)
var footer=document.createElement('flashcard-footer')
action=document.createElement('a')
action.className='flashcard-action'
action.target='_blank'
footer.appendChild(action)
app.appendChild(footer)
close.addEventListener('click',closeApp)
action.addEventListener('click',closeApp)
updateContent()
updateVisibility()}
if(document.readyState==='loading'){window.addEventListener('DOMContentLoaded',initialize)}else{initialize()}
window.CloudflareApps.installs['Vs19LbPRdE20'].scope={updateOptions:function updateOptions(nextOptions){clearTimeout(visibilityTimeout)
options=nextOptions
updateContent()
app.setAttribute('data-visibility','visible')},updateDelay:function updateDelay(nextOptions){options=nextOptions
closeApp()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyoKICBTcGVjaWZpY2l0eSB0byBjb21iYXQgdGhpbmdzIGxpa2UgdGhpcyAoZnJvbSBDTk4uY29tIGFzIG9mIDYvNi8xNik6CgogIGJvZHkgPiA6bm90KC5uYXYpIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7CiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsKICB9CiovCmh0bWwgPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIHsKICBkaXNwbGF5OiBibG9jazsKICBkaXNwbGF5OiAtd2Via2l0LWJveDsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7CiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7CiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7CiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgbWluLWhlaWdodDogMy41ZW07CiAgbGluZS1oZWlnaHQ6IDE7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBwb3NpdGlvbjogZml4ZWQ7CiAgdG9wOiAwOwogIGxlZnQ6IDA7CiAgcmlnaHQ6IDA7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTsKfQoKaHRtbCA+IGJvZHkgPiBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl06OmJlZm9yZSB7CiAgY29udGVudDogIiI7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIGJvdHRvbTogMDsKICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNSk7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApOwp9CgpodG1sID4gYm9keSA+IGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXVtkYXRhLXNsaWRlLWFuaW1hdGlvbl06OmJlZm9yZSB7CiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgOHM7CiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDhzOwogIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCA4cywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgOHM7Cn0KCmh0bWwgPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdW2RhdGEtc2xpZGUtYW5pbWF0aW9uPSJjb21wbGV0ZSJdOjpiZWZvcmUgewogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7Cn0KCmh0bWxbZGF0YS1jZi13ZWxjb21lLWJhci12aXNpYmlsaXR5PSJ2aXNpYmxlIl0gPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIHsKICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UgewogIGRpc3BsYXk6IC13ZWJraXQtYm94OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLXdlYmtpdC1ib3gtZmxleDogMTsKICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvOwogICAgICAgICAgZmxleDogMSAxIGF1dG87CiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyOwogICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UtY29udGVudCB7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOwogICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBmb250LXNpemU6IDEuMWVtOwogIGxpbmUtaGVpZ2h0OiAxLjI7CiAgZm9udC13ZWlnaHQ6IDUwMDsKICBtYXgtd2lkdGg6IDcwMHB4Owp9CgpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogImNmYXBwcy13ZWxjb21lLWJhci1pY29ucyI7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUms5VVZFOEFBQU9nQUFvQUFBQUFCWHdBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkRSa1lnQUFBQTlBQUFBTUFBQUFEUktqY3BUMFpHVkUwQUFBRzBBQUFBR2dBQUFCeHpDYzJlVDFNdk1nQUFBZEFBQUFCSUFBQUFZSURLQlNsamJXRndBQUFDR0FBQUFEY0FBQUZDQUEwaTRXaGxZV1FBQUFKUUFBQUFMd0FBQURZRHR0WVdhR2hsWVFBQUFvQUFBQUFnQUFBQUpBYXRBZWhvYlhSNEFBQUNvQUFBQUFnQUFBQUlBL29BQUcxaGVIQUFBQUtvQUFBQUJnQUFBQVlBQWxBQWJtRnRaUUFBQXJBQUFBRFlBQUFCc0VuQkIxcHdiM04wQUFBRGlBQUFBQllBQUFBZy81MEFaM2ljWTJSZ1lXRmdaR1RrU1UxTVR5M1N6VXpPenl0bVlHUmlZR1J3L0NIRDlFT1crWWNFU3c4UFl3UVA4MGNlRmprdUJwWU9EZm51YmppRGg3Mjc1TWVrWHgyc01neGQvRElNREFJeURMMkNNZ3djTWd3bmhSaVlRY2J3TWtnd0tCZGxwbWVVSkdla2xoWGw1eUZaaEd3bkF3TmpPd01USTZPQ2VmZkhYendmR1Q5Ky9QQ1IrYVBZOTZPL2J2dyt5dmJ4WDVIb0w1NFAvM2pZK1g1TSt0RWkraWY4eDR5QWlCOWFmMUwvQVBHeFVGYStIeE5GdWtXN2ViZ0FPa1pHbzNpY1kyQmdZR1FBZ2dzRkRva2crcUxQc1hrd0dnQkVZZ2JsQUFCNG5HTmdadnpMT0lHQmxZR0QxWmgxSmdNRG94eUVacjdPa01Za3hBQUVyQXdRME1DQUNnTFNYRk1ZSEJTc0ZLelkwdjZsTWV4Zy9zSWdEaFJtaEN0UUFFSkdBRVE5QzI5NG5HTmdZR0JtZ0dBWkJrWUdFTEFCOGhqQmZCWUdCU0ROQW9SQXZvTFYvLzhROHY1eHFFb0dSallHR0hONEFpSThCd0NZNGdjTkFIaWNZMkJrWUdBQTRpM1A3MnJIODl0OFplRG1ZQUNCaXo3SDVpSG8veThaL3pGL0FYSTVHSmhBb2dCcWR3MUNBSGljWTJCa1lHRCs4djhsd3c3R3Z3d00vLzh6L21NQWlxQUFKZ0RBaHdlWEFmMEFBQUg5QUFBQUFGQUFBQUlBQUhpY2pZKzlEY0l3RUlWZklFSGlSNVNJMGdVU2xTTTdBZ29Hb0tTa1I4aUswc1NTd3d5TXdCaU13UUNNd1FEVVBKc3JLQ2l3ZFBaM2QrOStER0NDS3pMRWsyR011WEFQQll4d0gwdGNoSE5xN3NJRitTazh3RGliVXBubFEwWm1xU3B5RHlNc2hQdllZeU9jVTNNVExzZ1A0UUg1QlljamF0NEJHZzFPOEdqUkFlNVl1NkNiazIvcGZNVWxza3YrT2IwaDFTdFVLUGtQaFMzdGQ5ZFB6bEtsc2FKVkpJczEyL24ydlBPaGRxb3FqZHFxcituMHJORXJYUmxMNFQvYkhsSytZejVtNDd5NEZ3NHVkSTF2bFMzTlgzM2VFaEJETW5pY1kyQm1BSVAvc3hqU2dCUWpBeG9BQUM2cUFnUUFBQT09KSBmb3JtYXQoIndvZmYiKTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7CiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OwogIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsKICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OwogICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OwogIGJvcmRlcjogMCAhaW1wb3J0YW50OwogIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsKICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsKICAtd2Via2l0LWJveC1mbGV4OiAwICFpbXBvcnRhbnQ7CiAgICAgIC1tcy1mbGV4OiAwIDAgYXV0byAhaW1wb3J0YW50OwogICAgICAgICAgZmxleDogMCAwIGF1dG8gIWltcG9ydGFudDsKICBmb250LXNpemU6IC44NWVtICFpbXBvcnRhbnQ7CiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsKICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsKICBsZXR0ZXItc3BhY2luZzogLjA4ZW07CiAgbGluZS1oZWlnaHQ6IC45NSAhaW1wb3J0YW50OwogIG1heC13aWR0aDogMTZlbSAhaW1wb3J0YW50OwogIG9wYWNpdHk6IC44NTsKICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OwogIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OwogIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OwogIHRleHQtaW5kZW50OiAuMDhlbTsKICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50OwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsKICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7CiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uOjphZnRlciB7CiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDsKICBjb250ZW50OiAiXDIwM0EiOwogIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OwogIGZvbnQtZmFtaWx5OiAiY2ZhcHBzLXdlbGNvbWUtYmFyLWljb25zIjsKICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiBpbmhlcml0OwogIGxpbmUtaGVpZ2h0OiAuODMgIWltcG9ydGFudDsKICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7CiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OwogIHBhZGRpbmctbGVmdDogLjNlbSAhaW1wb3J0YW50OwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBsZWZ0OiAxMDAlOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl0gYWxlcnQtZGlzbWlzcyB7CiAgY3Vyc29yOiBwb2ludGVyOwogIGNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIC4yNSk7CiAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogIC13ZWJraXQtYm94LWZsZXg6IDA7CiAgICAgIC1tcy1mbGV4OiAwIDAgYXV0bzsKICAgICAgICAgIGZsZXg6IDAgMCBhdXRvOwogIGZvbnQtZmFtaWx5OiAiSGVsdmV0aWNhIE5ldWUiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwogIGZvbnQtc2l6ZTogMmVtOwogIGZvbnQtd2VpZ2h0OiAzMDA7CiAgaGVpZ2h0OiAxZW07CiAgbGluZS1oZWlnaHQ6IC43NWVtOwogIG1hcmdpbjogMCAuMmVtOwogIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgd2lkdGg6IC45ZW07Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXSBhbGVydC1kaXNtaXNzOmhvdmVyIHsKICBjb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAuNSk7Cn0KCmh0bWwgPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdW2RhdGEtc3R5bGU9InNsaW0iXSB7CiAgZm9udC1zaXplOiAuOTJlbTsKICBtaW4taGVpZ2h0OiAyLjJlbTsKfQoKaHRtbCA+IGJvZHkgPiBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl1bZGF0YS1zdHlsZT0icHJvbWluZW50Il0gLmFsZXJ0LWN0YS1idXR0b24gewogIGJvcmRlci1yYWRpdXM6IC4xNWVtOwp9CgpAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsKICBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl1bZGF0YS1zdHlsZT0icHJvbWluZW50Il0gLmFsZXJ0LWN0YS1idXR0b24gewogICAgcGFkZGluZzogLjY1ZW0gMS43NWVtIC42ZW0gLjllbSAhaW1wb3J0YW50OwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdW2RhdGEtc3R5bGU9InByb21pbmVudCJdIC5hbGVydC1jdGEtYnV0dG9uOjphZnRlciB7CiAgICBsZWZ0OiBhdXRvOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICBodG1sID4gYm9keSA+IGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXSB7CiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOwogICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICBmb250LXNpemU6IC45MmVtOwogICAgbWluLWhlaWdodDogMi4yZW07CiAgICBwYWRkaW5nOiAuNWVtIDAgLjVlbSAuNWVtOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICAgIG1hcmdpbi10b3A6IC41ZW07CiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OwogICAgLXdlYmtpdC1ib3gtZmxleDogMDsKICAgICAgICAtbXMtZmxleDogMCAwIGF1dG87CiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UtY29udGVudCB7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7CiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbCAhaW1wb3J0YW50OwogICAgICAgIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXAgIWltcG9ydGFudDsKICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwICFpbXBvcnRhbnQ7CiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDsKICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDsKICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsKICB9Cn0KCg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();
