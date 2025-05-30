document.addEventListener('DOMContentLoaded', () => {
    const navItemButtons = document.querySelectorAll('.nav-item-button');

    navItemButtons.forEach(button => {
        const submenuId = button.getAttribute('aria-controls');
        const submenu = document.getElementById(submenuId);
        const icon = button.querySelector('.nav-toggle-icon');

        if (submenu) {
            submenu.style.display = 'none';
        }

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            navItemButtons.forEach(otherButton => {
                const otherSubmenuId = otherButton.getAttribute('aria-controls');
                const otherSubmenu = document.getElementById(otherSubmenuId);
                const otherIcon = otherButton.querySelector('.nav-toggle-icon');

                if (otherSubmenu && otherButton !== button) {
                    otherSubmenu.style.display = 'none';
                    otherButton.setAttribute('aria-expanded', 'false');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });

            // Then toggle current one
            if (submenu) {
                if (isExpanded) {
                    submenu.style.display = 'none';
                    button.setAttribute('aria-expanded', 'false');
                    if (icon) icon.textContent = '+';
                } else {
                    submenu.style.display = 'block';
                    button.setAttribute('aria-expanded', 'true');
                    if (icon) icon.textContent = '−';
                }
            }
        });
    });

    // Optional: Close all submenus if clicking outside
    document.addEventListener('click', (event) => {
        const mainNav = document.getElementById('main-nav');
        if (mainNav && !mainNav.contains(event.target)) {
            navItemButtons.forEach(button => {
                const submenuId = button.getAttribute('aria-controls');
                const submenu = document.getElementById(submenuId);
                const icon = button.querySelector('.nav-toggle-icon');
                if (submenu && submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                    button.setAttribute('aria-expanded', 'false');
                    if (icon) icon.textContent = '+';
                }
            });
        }
    });

const tips = [
    "每日保持適度活動，例如散步30分鐘，有助於心血管健康。",
    "多喝水，維持身體機能正常運作，尤其在運動前後。",
    "均衡飲食，多攝取蔬菜水果，補充膳食纖維。",
    "保持充足睡眠，有助於身體恢復與精神飽滿。",
    "定期做伸展運動，保持關節靈活，減少僵硬感。",
    "與親友保持聯繫，參與社交活動，有益心理健康。",
    "學習新事物，如園藝或手工，保持大腦活躍。",
    "注意安全，預防跌倒，家中可設置扶手或移除障礙物。",
    "定期健康檢查，及早發現問題，及早處理。",
    "選擇自己喜歡的運動方式，才能持之以恆。",
    "飯後百步走，活到九十九。但剛吃飽不宜劇烈運動，散步即可。",
    "常做深呼吸，有助於放鬆心情，增加氧氣吸入。",
    "保持樂觀心態，笑容是最好的良藥。",
    "注意保暖，尤其在天氣變化時，避免感冒。",
    "適度曬太陽，有助於身體合成維生素D，強化骨骼。"
];

const tipTextElement = document.getElementById('health-tip-text');
const newTipButton = document.getElementById('new-tip-button');
const readTipButton = document.getElementById('read-tip-button');

function showRandomTip() {
    if (tips.length > 0) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipTextElement.textContent = tips[randomIndex];
    } else {
        tipTextElement.textContent = "暫無健康提示。";
    }
}

function readTip() {
    const text = tipTextElement.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    // 設定中文語音（找得到 "zh-TW" 最好，否則退而求其次）
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang === 'zh-TW') || voices.find(v => v.lang.startsWith('zh'));

    if (zhVoice) {
        utterance.voice = zhVoice;
    }
    speechSynthesis.cancel(); // 先停止先前的朗讀
    speechSynthesis.speak(utterance);
}

if (newTipButton && tipTextElement && readTipButton) {
    newTipButton.addEventListener('click', showRandomTip);
    readTipButton.addEventListener('click', readTip);
    showRandomTip(); // 初始提示
} else {
    console.error("Health tip elements not found!");
}


    var coll = document.getElementsByClassName("hide");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (this.children[1].innerHTML === "＋") {
        this.children[1].innerHTML = "－";
        this.style.marginBottom = '0';
        } else {
        this.children[1].innerHTML = "＋";
        this.style.marginBottom = '1em';
        }
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
        content.style.display = "none";
        } else {
        content.style.display = "flex";
        }
    });
    }


});