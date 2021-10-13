const swiperOffer=new Swiper(".swiper-offer",{slidesPerView:4,spaceBetween:35,scrollbar:{el:".swiper-offer .swiper-scrollbar",draggable:!0},breakpoints:{1100:{slidesPerView:4},768:{slidesPerView:2},320:{slidesPerView:1,centeredSlides:!0}}}),swiperNews=new Swiper(".news__cards",{slidesPerView:3,spaceBetween:35,scrollbar:{el:".news__cards .swiper-scrollbar",draggable:!0},breakpoints:{1100:{slidesPerView:2},768:{slidesPerView:2},320:{slidesPerView:1,centeredSlides:!0}}});document.addEventListener("DOMContentLoaded",(function(){document.getElementById("form")}));const btnPass=document.querySelectorAll(".password__btn"),inputPass=document.querySelectorAll(".form__password");if(inputPass.length>0)for(let e=0;e<btnPass.length;e++){const t=btnPass[e],n=inputPass[e];t.addEventListener("click",(function(e){t.classList.toggle("active"),"disc"===n.style.webkitTextSecurity?n.style.webkitTextSecurity="none":n.style.webkitTextSecurity="disc"}))}function InputMask(e){if(this.el=this.getElement(e.selector),!this.el)return console.log("Что-то не так с селектором");this.layout=e.layout||"+_ (___) ___-__-__",this.maskreg=this.getRegexp(),this.setListeners()}window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll('input[type="tel"]');Array.prototype.forEach.call(e,(function(e){new InputMask({selector:e,layout:e.dataset.mask})}))})),InputMask.prototype.getRegexp=function(){var e=this.layout.replace(/_/g,"\\d");return e=(e=(e=(e=e.replace(/\(/g,"\\(")).replace(/\)/g,"\\)")).replace(/\+/g,"\\+")).replace(/\s/g,"\\s")},InputMask.prototype.mask=function(e){var t=e.target,n=this.layout,o=0,s=n.replace(/\D/g,""),i=t.value.replace(/\D/g,"");(s.length>=i.length&&(i=s),t.value=n.replace(/./g,(function(e){return/[_\d]/.test(e)&&o<i.length?i.charAt(o++):o>=i.length?"":e})),"blur"==e.type)?new RegExp(this.maskreg).test(t.value)||(t.value=""):this.setCursorPosition(t.value.length,t)},InputMask.prototype.setCursorPosition=function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}},InputMask.prototype.setListeners=function(){this.el.addEventListener("input",this.mask.bind(this),!1),this.el.addEventListener("focus",this.mask.bind(this),!1),this.el.addEventListener("blur",this.mask.bind(this),!1)},InputMask.prototype.getElement=function(e){if(void 0===e)return!1;if(this.isElement(e))return e;if("string"==typeof e){var t=document.querySelector(e);if(this.isElement(t))return t}return!1},InputMask.prototype.isElement=function(e){return e instanceof Element||e instanceof HTMLDocument};const tabsBtn=document.querySelectorAll(".tabs__nav-btn"),tabsItems=document.querySelectorAll(".tabs__item");tabsItems.length>0&&(tabsBtn.forEach((function(e){e.addEventListener("click",(function(){let t=e,n=t.getAttribute("data-tab"),o=document.querySelector(n);t.classList.contains("active")||(tabsBtn.forEach((function(e){e.classList.remove("active")})),tabsItems.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),o.classList.add("active"))}))})),document.querySelector(".tabs__nav-btn-top").click());const iconTabs=document.querySelector(".tabs__icon"),tabsBody=document.querySelector(".tabs__nav-bottom"),profileInner=document.querySelector(".profile__inner"),tabItems=document.querySelectorAll(".tabs__nav-btn");if(iconTabs){iconTabs.addEventListener("click",(function(e){iconTabs.classList.toggle("active"),tabsBody.classList.toggle("active"),profileInner.classList.toggle("active");for(let e=0;e<tabItems.length;e++){const t=tabItems[e];t.addEventListener("click",(function(){t.classList.add("active")}))}}));for(let e=0;e<tabItems.length;e++){const t=tabItems[e];t.addEventListener("click",(function(){t.classList.contains("active")&&(iconTabs.classList.remove("active"),tabsBody.classList.remove("active"),profileInner.classList.remove("active"))}))}}const isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if(isMobile.any()){document.body.classList.add("touch");let e=document.querySelectorAll(".menu__arrow");if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(function(e){n.parentElement.classList.toggle("active")}))}}else document.body.classList.add("pc");const iconMenu=document.querySelector(".menu__icon"),menuBody=document.querySelector(".menu__body"),bodyPage=document.querySelector(".page");iconMenu&&iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("lock"),iconMenu.classList.toggle("active"),menuBody.classList.toggle("active"),bodyPage.classList.toggle("active")}));const menuLinks=document.querySelectorAll(".menu__link[data-goto]");if(menuLinks.length>0){for(let e=0;e<menuLinks.length;e++){menuLinks[e].addEventListener("click",onMenuClick)}function onMenuClick(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const n=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;iconMenu.classList.contains("active")&&(document.body.classList.remove("lock"),iconMenu.classList.remove("active"),menuBody.classList.remove("active")),window.scrollTo({top:n,behavior:"smooth"}),e.preventDefault()}}}function DynamicAdapt(e){this.type=e}DynamicAdapt.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(n[0].trim()),o.breakpoint=n[1]?n[1].trim():"767",o.place=n[2]?n[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],o=String.prototype.split.call(n,","),s=window.matchMedia(o[0]),i=o[1],l=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===i}));s.addListener((function(){e.mediaHandler(s,l)})),this.mediaHandler(s,l)}},DynamicAdapt.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},DynamicAdapt.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},DynamicAdapt.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},DynamicAdapt.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},DynamicAdapt.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};const da=new DynamicAdapt("max");da.init();const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=500;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const t=popupLinks[e];t.addEventListener("click",(function(e){const n=t.getAttribute("href").replace("#","");popupOpen(document.getElementById(n)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const t=popupCloseIcon[e];t.addEventListener("click",(function(e){popupClose(t.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,t=!0){unlock&&(e.classList.remove("open"),t&&bodyUnLock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(let t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),500)}function bodyUnLock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),500),unlock=!1,setTimeout((function(){unlock=!0}),500)}document.addEventListener("keydown",(function(e){if(27===e.which){popupClose(document.querySelector(".popup.open"))}}));let _slideUp=(e,t=500)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)},_slideDown=(e,t=500)=>{e.style.removeProperty("display");let n=window.getComputedStyle(e).display;"none"===n&&(n="block"),e.style.display=n;let o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)},_slideToggle=(e,t=500)=>{if(!e.classList.contains("_slide"))return e.classList.add("_slide"),"none"===window.getComputedStyle(e).display?_slideDown(e,t):_slideUp(e,t)},selects=document.getElementsByTagName("select");function selects_init(){for(let e=0;e<selects.length;e++){select_init(selects[e])}document.addEventListener("click",(function(e){selects_close(e)})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&selects_close(e)}))}function selects_close(e){const t=document.querySelectorAll(".select");if(!e.target.closest(".select"))for(let e=0;e<t.length;e++){const n=t[e],o=n.querySelector(".select__options");n.classList.remove("_active"),_slideUp(o,100)}}function select_init(e){const t=e.parentElement,n=e.getAttribute("class"),o=e.querySelector("option:checked");e.setAttribute("data-default",o.value),e.style.display="none",t.insertAdjacentHTML("beforeend",'<div class="select select_'+n+'"></div>'),e.parentElement.querySelector(".select").appendChild(e),select_item(e)}function select_item(e){const t=e.parentElement,n=t.querySelector(".select__item"),o=e.querySelectorAll("option"),s=e.querySelector("option:checked").text,i=e.getAttribute("data-type");n&&n.remove();let l="";l="input"==i?'<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="'+s+'" data-error="Ошибка" data-value="'+s+'" class="select__input"></div>':'<div class="select__value icon-select-arrow"><span>'+s+"</span></div>",t.insertAdjacentHTML("beforeend",'<div class="select__item"><div class="select__title">'+l+'</div><div class="select__options">'+select_get_options(o)+"</div></div></div>"),select_actions(e,t)}function select_actions(e,t){const n=t.querySelector(".select__item"),o=t.querySelector(".select__options"),s=t.querySelectorAll(".select__option"),i=e.getAttribute("data-type"),l=t.querySelector(".select__input");n.addEventListener("click",(function(){let e=document.querySelectorAll(".select");for(let t=0;t<e.length;t++){const o=e[t],s=o.querySelector(".select__options");o!=n.closest(".select")&&(o.classList.remove("_active"),_slideUp(s,100))}_slideToggle(o,100),t.classList.toggle("_active")}));for(let n=0;n<s.length;n++){const o=s[n],a=o.getAttribute("data-value"),c=o.innerHTML;"input"==i?l.addEventListener("keyup",select_search):o.getAttribute("data-value")==e.value&&(o.style.display="none"),o.addEventListener("click",(function(){for(let e=0;e<s.length;e++){s[e].style.display="block"}"input"==i?(l.value=c,e.value=a):(t.querySelector(".select__value").innerHTML="<span>"+c+"</span>",e.value=a,o.style.display="none")}))}}function select_get_options(e){if(e){let t="";for(let n=0;n<e.length;n++){const o=e[n],s=o.value;if(""!=s){t=t+'<div data-value="'+s+'" class="select__option">'+o.text+"</div>"}}return t}}function select_search(e){e.target.closest(".select ").querySelector(".select__options");let t=e.target.closest(".select ").querySelectorAll(".select__option"),n=e.target.value.toUpperCase();for(let e=0;e<t.length;e++){let o=t[e];(o.textContent||o.innerText).toUpperCase().indexOf(n)>-1?o.style.display="":o.style.display="none"}}function selects_update_all(){let e=document.querySelectorAll("select");if(e)for(let t=0;t<e.length;t++){select_item(e[t])}}selects.length>0&&selects_init();let inputs=document.querySelectorAll("input[data-value],textarea[data-value]");function inputs_init(e){if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t],o=n.getAttribute("data-value");input_placeholder_add(n),""!=n.value&&n.value!=o&&input_focus_add(n),n.addEventListener("focus",(function(e){n.value==o&&(input_focus_add(n),n.value=""),"pass"===n.getAttribute("data-type")&&n.setAttribute("type","password"),n.classList.contains("_date"),n.classList.contains("_phone")&&(n.classList.add("_mask"),Inputmask("+375 (99) 9999999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){input_clear_mask(n,o)}}).mask(n)),n.classList.contains("_digital")&&(n.classList.add("_mask"),Inputmask("9{1,}",{placeholder:"",clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){input_clear_mask(n,o)}}).mask(n)),form_remove_error(n)})),n.addEventListener("blur",(function(e){""==n.value&&(n.value=o,input_focus_remove(n),n.classList.contains("_mask")&&input_clear_mask(n,o),"pass"===n.getAttribute("data-type")&&n.setAttribute("type","text"))})),n.classList.contains("_date")&&datepicker(n,{customDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],customMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],formatter:(e,t,n)=>{const o=t.toLocaleDateString();e.value=o},onSelect:function(e,t,n){input_focus_add(e.el)}})}}function input_placeholder_add(e){const t=e.getAttribute("data-value");""==e.value&&""!=t&&(e.value=t)}function input_focus_add(e){e.classList.add("_focus"),e.parentElement.classList.add("_focus")}function input_focus_remove(e){e.classList.remove("_focus"),e.parentElement.classList.remove("_focus")}function input_clear_mask(e,t){e.inputmask.remove(),e.value=t,input_focus_remove(e)}inputs_init(inputs),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);