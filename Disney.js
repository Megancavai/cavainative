setTimeout(function(){ 

<script>
    */
    // Converse ID 478-1867-2491-25750 generated 2023-03-29T11:29:01.996Z
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1679412431977-1631526222903-1631523947203-c7752a0046d6ed80a3e426c91776eec4.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            s.dataset.clickthroughUrl = 'https://ad.doubleclick.net/ddm/trackclk/N6344.3379554ADGAGE_ES/B26417636.313337055;dc_trk_aid=505819055;dc_trk_cid=157573476;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
            s.dataset.bubbleAppearance = 'default'

            target.document.body.appendChild(s);
        }
        try {
          async_load(window.top)
        } catch (error) {
          async_load(window)
        }
    })();
    
</script>

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
