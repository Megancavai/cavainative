setTimeout(function(){ 

    // Converse ID 1136-2166-3123-17736 generated 2022-04-07T11:22:20.979Z
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1649321672899-1647275117569-1646738541274-1644832788811-1644831802148-1643976079792-bc635a0a8c85ea068ac47b4784dbf614.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            s.dataset.clickthroughUrl = 'https://ad.doubleclick.net/ddm/trackclk/N6602.3623628HPH_UK_6602/B27487146.331952848;dc_trk_aid=523650203;dc_trk_cid=127958261;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
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
    
document.querySelector('#  ').addEventListener('click', function() {
	const openBubble = new MouseEvent('click');
	document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);
});

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
