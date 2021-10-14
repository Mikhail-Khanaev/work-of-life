
const swiperOffer = new Swiper(".swiper-offer", {
    slidesPerView: 4,
    spaceBetween: 35,
    scrollbar: {
        el: ".swiper-offer .swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 4,

        },
        768: {
            slidesPerView: 2,

        },
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            // slidesPerGroup: 1,
        }
    }
});

const swiperNews = new Swiper(".news__cards", {
    slidesPerView: 3,
    spaceBetween: 35,
    scrollbar: {
        el: ".news__cards .swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 2,

        },
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            // slidesPerGroup: 1,
        }
    }
});


// Валидация формы
// document.addEventListener("DOMContentLoaded", function () {

//     const form = document.getElementById("form");
//     // form.addEventListener("submit", formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);

//         // if (error == 0) {
//         //     // Здесь надо будет отправлять форму, но это уже бэк
//         // } else {
//         //     alert("Заполните обязательные поля")
//         // }
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll(".req");

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains("email")) {
//                 if ((emailTest(input))) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked == false) {
//                 formAddError(input);
//                 error++;
//             } else if (input.classList.contains("tel")) {
//                 if ((telTest(input))) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if ((input.classList.contains("password")) && (document.getElementById("formPassword").value != "")) {
//                 if (document.getElementById("formPassword").value != document.getElementById("formPasswordAgreement").value) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.classList.contains("date")) {
//                 if ((dateTest(input))) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else {
//                 if (input.value == "") {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }

//         return error;

//     }


//     function formAddError(input) {
//         input.parentElement.classList.add("error");
//         input.classList.add("error");
//     }

//     function formRemoveError(input) {
//         input.parentElement.classList.remove("error");
//         input.classList.remove("error");
//     }

//     function emailTest(input) {
//         return !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(input.value);
//     }
//     function telTest(input) {
//         return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
//     }
//     function dateTest(input) {
//         return !/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(input.value);
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }

    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains("email")) {
                if ((emailTest(input))) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked == false) {
                formAddError(input);
                error++;
            } else if (input.classList.contains("tel")) {
                if ((telTest(input))) {
                    formAddError(input);
                    error++;
                }
            } else if ((input.classList.contains("password")) && (document.getElementById("formPassword").value != "")) {
                if (document.getElementById("formPassword").value != document.getElementById("formPasswordAgreement").value) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains("date")) {
                if ((dateTest(input))) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value == "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }
    //Функция теста email
    function emailTest(input) {
        return !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(input.value);
    }
    function telTest(input) {
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }
    function dateTest(input) {
        return !/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(input.value);
    }
});



const btnPass = document.querySelectorAll(".password__btn");
const inputPass = document.querySelectorAll(".form__password");
if (inputPass.length > 0) {
    for (let index = 0; index < btnPass.length; index++) {
        const btn = btnPass[index];
        const input = inputPass[index];


        btn.addEventListener("click", function (e) {
            btn.classList.toggle("active");

            if (input.style.webkitTextSecurity === "disc") {
                input.style.webkitTextSecurity = "none";
            } else {
                input.style.webkitTextSecurity = "disc";
            }
        })
    }
}

window.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="tel"]');

    Array.prototype.forEach.call(inputs, function (input) {
        new InputMask({
            selector: input, // в качестве селектора может быть элемент, или, собственно css селектор('#input', '.input', 'input'). Если селектор - тег или класс - будет получен только первый элемент
            layout: input.dataset.mask
        })
    })

})

function InputMask(options) {
    this.el = this.getElement(options.selector);
    if (!this.el) return console.log('Что-то не так с селектором');
    this.layout = options.layout || '+_ (___) ___-__-__';
    this.maskreg = this.getRegexp();

    this.setListeners();
}

InputMask.prototype.getRegexp = function () {
    var str = this.layout.replace(/_/g, '\\d')
    str = str.replace(/\(/g, '\\(')
    str = str.replace(/\)/g, '\\)')
    str = str.replace(/\+/g, '\\+')
    str = str.replace(/\s/g, '\\s')

    return str;
}

InputMask.prototype.mask = function (e) {
    var _this = e.target,
        matrix = this.layout,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = _this.value.replace(/\D/g, "");

    if (def.length >= val.length) val = def;

    _this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (e.type == "blur") {
        var regexp = new RegExp(this.maskreg);
        if (!regexp.test(_this.value)) _this.value = "";
    } else {
        this.setCursorPosition(_this.value.length, _this);
    }
}

InputMask.prototype.setCursorPosition = function (pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

InputMask.prototype.setListeners = function () {
    this.el.addEventListener("input", this.mask.bind(this), false);
    this.el.addEventListener("focus", this.mask.bind(this), false);
    this.el.addEventListener("blur", this.mask.bind(this), false);
}

InputMask.prototype.getElement = function (selector) {
    if (selector === undefined) return false;
    if (this.isElement(selector)) return selector;
    if (typeof selector == 'string') {
        var el = document.querySelector(selector);
        if (this.isElement(el)) return el;
    }
    return false
}

InputMask.prototype.isElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
}


// Табы
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
if (tabsItems.length > 0) {
    tabsBtn.forEach(function (item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove("active");
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove("active");
                });

                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            }


        });
    });

    document.querySelector(".tabs__nav-btn-top").click();
}
const iconTabs = document.querySelector(".tabs__icon");
const tabsBody = document.querySelector(".tabs__nav-bottom");
const profileInner = document.querySelector(".profile__inner");
const tabItems = document.querySelectorAll(".tabs__nav-btn");



if (iconTabs) {
    iconTabs.addEventListener("click", function (e) {
        iconTabs.classList.toggle("active");
        tabsBody.classList.toggle("active");
        profileInner.classList.toggle("active");
        for (let index = 0; index < tabItems.length; index++) {
            const tabItem = tabItems[index];
            tabItem.addEventListener("click", function () {

                tabItem.classList.add("active");
            });
        }
    });
    for (let index = 0; index < tabItems.length; index++) {
        const tabItem = tabItems[index];
        tabItem.addEventListener("click", function () {
            if (tabItem.classList.contains("active")) {
                iconTabs.classList.remove("active");
                tabsBody.classList.remove("active");
                profileInner.classList.remove("active");
            }
        });
    }
}

//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
    for (let index = 0; index < spollers.length; index++) {
        const spoller = spollers[index];
        spoller.addEventListener("click", function (e) {
            if (spollersGo) {
                spollersGo = false;
                if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
                    return false;
                }
                if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
                    return false;
                }
                if (spoller.closest('._spollers').classList.contains('_one')) {
                    let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
                    for (let i = 0; i < curent_spollers.length; i++) {
                        let el = curent_spollers[i];
                        if (el != spoller) {
                            el.classList.remove('_active');
                            _slideUp(el.nextElementSibling);
                        }
                    }
                }
                spoller.classList.toggle('_active');
                _slideToggle(spoller.nextElementSibling);

                setTimeout(function () {
                    spollersGo = true;
                }, 500);
            }
        });
    }
}
// const descriptionTabsBtn = document.querySelectorAll(".description__tab-btn");
// const descriptionTabsItems = document.querySelectorAll(".description__tabs-item");

// descriptionTabsBtn.forEach(onDescriptionTabClick);

// function onDescriptionTabClick(item) {
//     item.addEventListener("click", function () {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);

//         if (!currentBtn.classList.contains('active')) {
//             descriptionTabsBtn.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             descriptionTabsItems.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             currentBtn.classList.add('active');
//             currentTab.classList.add('active');
//         }
//     });
// }

// document.querySelector('.description__tab-btn').click();
"use strict"
/* =============================================== */
// Код для меню с подменю
/* =============================================== */
// Определяем на каком устройстве открыт сайт
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

// Если сайт открыт на мобильном устройстве,
// то добавляем к body класс "touch", 
// а если открыт на ПК, то добавляем класс "pc"
if (isMobile.any()) {
	document.body.classList.add("touch");

	// Собираем в коллекцию все элементы с классом "menu__arrow"
	let menuArrows = document.querySelectorAll(".menu__arrow");
	// Если такие элементы есть, то навешиваем на каждый событие "click"
	if (menuArrows.length > 0) {
		for (let i = 0; i < menuArrows.length; i++) {
			const menuArrow = menuArrows[i];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle("active"); // На родителя нашей стрелочки вешаем класс "active"
			});
		}
	}

} else {
	document.body.classList.add("pc");
}
/* =============================================== */



/* =============================================== */
// Меню Burger
/* =============================================== */
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const bodyPage = document.querySelector(".page");


if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		bodyPage.classList.toggle("active");

	});
}
/* =============================================== */



/* =============================================== */
// Прокрутка при клике
/* =============================================== */
// Собираем массив элементов, которые имеют класс "menu__link"
// и при этом имеют атрибут "data-goto"
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	for (let i = 0; i < menuLinks.length; i++) {
		let menuLink = menuLinks[i];
		menuLink.addEventListener("click", onMenuClick)
	};

	function onMenuClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;


			if (iconMenu.classList.contains("active")) {
				document.body.classList.remove("lock");
				iconMenu.classList.remove("active");
				menuBody.classList.remove("active");
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		};
	};
};
/* =============================================== */


/* =============================================== */
// Динамический адаптив
/* =============================================== */
function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
/* =============================================== */


/* =============================================== */
// Popup
/* =============================================== */
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute("href").replace("#", "");
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const element = popupCloseIcon[index];
		element.addEventListener("click", function (e) {
			popupClose(element.closest(".popup"));
			e.preventDefault();
		});
	}
}

// Функция открытия popup'апа
function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector(".popup.open");
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add("open");
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				popupClose(e.target.closest(".popup"));
			}
		});
	}
}

// Функция закрытия popup'апа 
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove("open");
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

// Фунция, которая делает так, чтобы контент не дёргался при открытии popup'апа
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const element = lockPadding[index];
			element.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add("lock");

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const element = lockPadding[index];
				element.style.paddingRight = "0px";
			}
		}
		body.style.paddingRight = "0px";
		body.classList.remove("lock");
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

// Закрытие popup'апа по нажатию кнопи escape
document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup.open");
		popupClose(popupActive);
	}
});
/* =============================================== */
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}


/* =============================================== */
//Select
/* =============================================== */
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}







/* =============================================== */
// Полифилы
/* =============================================== */
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();