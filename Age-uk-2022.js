    // Converse ID 1363-2572-3381-20547 generated 2022-08-05T10:47:32.938Z
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1659695454947-1659362885104-1658305666368-1657724053390-1657723473892-1657700843814-f022cc7ed9d4c4ae081176d591895e1b.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            s.dataset.clickthroughUrl = 'https://ad.doubleclick.net/ddm/trackclk/N1707.4545574CAVAIDV360ISDIN/B28288407.342322151;dc_trk_aid=534173369;dc_trk_cid=175431329;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
            s.dataset.bubbleAppearance = 'custom'

            target.document.body.appendChild(s);
        }
        try {
          async_load(window.top)
        } catch (error) {
          async_load(window)
        }
    })();


var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
var clickElement = document.createElement("div");
clickElement.style.position = "absolute";
clickElement.style.left = "0px";
clickElement.style.top = "0px";
clickElement.style.width = "100%";
clickElement.style.height = "100%";
if(target != null){
    target.appendChild(clickElement);    
}else{
    target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
}

var clickFunction = function() {
    
    /*cavai code for clicking*/
    const openBubble = new MouseEvent('click');
    document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

    event.preventDefault();
    event.stopPropagation();
    return false;
}


setTimeout(function(){
    target.addEventListener('click', clickFunction, true);
target.addEventListener('touchstart', clickFunction, true);
},2000);

}, 1000);
