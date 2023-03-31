
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1679412431977-1631526222903-1631523947203-c7752a0046d6ed80a3e426c91776eec4.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            
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
    
var clickFunction = function() {

        /*cavai code for clicking*/
        const openBubble = new MouseEvent('click');
        document.querySelector('#creativeHeader [class*="expandable-icon"]').click()

        event.preventDefault();
        event.stopPropagation();
        return false;
    }

function winLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

winLoad(function() {
    console.log('page is fully loaded');
        try {
          setTimeout(function(){
          var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
          var clickElement = document.createElement("div");
          clickElement.style.position = "absolute";
          clickElement.style.left = "0px";
          clickElement.style.top = "0px";
          clickElement.style.width = "100%";
          clickElement.style.height = "100%";
          if(target != null){
              target.appendChild(clickElement);
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          } else{
              target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          }},1000);

          } catch (e) {
            console.log(`cavai error log: ${e}`)
          }
        });
