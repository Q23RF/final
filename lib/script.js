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
    "適度曬太陽，有助於身體合成維生素D，強化骨骼。",
    "均衡飲食應包含多種類的蔬菜、水果、全穀物和優質蛋白質。",
    "每週至少進行150分鐘中等強度或75分鐘高強度有氧運動。",
    "成人每晚建議睡眠7-9小時，以利身體修復與提升免疫力。",
    "學習有效的壓力管理技巧，如冥想、深呼吸或瑜珈，有助身心健康。",
    "定期健康檢查（如成人健檢、癌症篩檢）能及早發現潛在健康問題。",
    "用肥皂和水正確洗手至少20秒，是預防疾病傳播的最簡單有效方法之一。",
    "減少攝取高糖、高鹽及高脂肪的加工食品，選擇天然原型食物。",
    "保持樂觀積極的心態，有助於提升整體幸福感和健康水平。",
    "戒菸及避免二手菸暴露，可大幅降低罹患多種疾病的風險。"
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

    // BMI Calculator Feature
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
    const bmiResultDisplay = document.getElementById('bmi-result');

    if (calculateBmiBtn && weightInput && heightInput && bmiResultDisplay) {
        calculateBmiBtn.addEventListener('click', () => {
            const weight = parseFloat(weightInput.value);
            const height = parseFloat(heightInput.value);

            bmiResultDisplay.style.display = 'block';
            bmiResultDisplay.textContent = ''; // Clear previous result
            bmiResultDisplay.style.backgroundColor = 'transparent';
            bmiResultDisplay.style.width = '80%';
            bmiResultDisplay.style.color = '#333';
            bmiResultDisplay.style.padding = '10px';

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                bmiResultDisplay.textContent = '請輸入有效的體重和身高。';
                bmiResultDisplay.style.color = '#D4846E';
                bmiResultDisplay.style.backgroundColor = '#FFF5E1';
                return;
            }
            
            if (height > 300) { 
                 bmiResultDisplay.textContent = '您輸入的身高數值似乎過大，請確認單位是否為公分。';
                 bmiResultDisplay.style.color = '#D4846E';
                 bmiResultDisplay.style.backgroundColor = '#FFF5E1';
                 return;
            }
            if (height < 50) { 
                 bmiResultDisplay.textContent = '您輸入的身高數值似乎過小，請確認單位是否為公分。';
                 bmiResultDisplay.style.color = '#D4846E';
                 bmiResultDisplay.style.backgroundColor = '#FFF5E1';
                 return;
            }

            const bmiResult = calculateBMI(weight, height);
            if(window.innerWidth<=480) {
                bmiResultDisplay.innerHTML = `<p>您的 BMI 是：<br>${bmiResult.bmiRounded} (${bmiResult.category})</p>`;
            }
            else {
                bmiResultDisplay.textContent = `您的 BMI 是：${bmiResult.bmiRounded} (${bmiResult.category})`;
            }
            bmiResultDisplay.style.color = bmiResult.textColor;
            bmiResultDisplay.style.backgroundColor = bmiResult.bgColor;
        });
    }

    // Health Advisor Feature
    const advisorAgeInput = document.getElementById('advisor-age');
    const advisorGenderSelect = document.getElementById('advisor-gender');
    const advisorWeightInput = document.getElementById('advisor-weight');
    const advisorHeightInput = document.getElementById('advisor-height');
    const getAdviceBtn = document.getElementById('get-advice-btn');
    const adviceResultDisplay = document.getElementById('advice-result');

    const healthAdviceData = {
        "child": { // 0-12
            "any": [
                { disease: "常見感冒/流感", department: "小兒科/家醫科", insurance: "基本醫療險、兒童醫療險" },
                { disease: "腸胃炎 (病毒性/細菌性)", department: "小兒科/家醫科", insurance: "基本醫療險、兒童醫療險" },
                { disease: "過敏性疾病 (如鼻炎、氣喘、異位性皮膚炎)", department: "小兒科/過敏免疫科", insurance: "基本醫療險、實支實付醫療險" },
            ]
        },
        "teen": { // 13-19
            "male": [
                { disease: "青春痘 (痤瘡)", department: "皮膚科", insurance: "基本醫療險 (視情況)" },
                { disease: "運動傷害", department: "骨科/復健科", insurance: "意外險、學生平安保險" },
            ],
            "female": [
                { disease: "青春痘 (痤瘡)", department: "皮膚科", insurance: "基本醫療險 (視情況)" },
                { disease: "經期不適/經前症候群", department: "婦產科/家醫科", insurance: "基本醫療險" },
            ],
            "any": [ // Common for both genders in this age group
                { disease: "視力問題 (近視、散光)", department: "眼科", insurance: "基本醫療險" },
                { disease: "情緒與壓力問題", department: "精神科/心理諮商", insurance: "部分諮商可能需自費，特定保險可能涵蓋" },
            ]
        },
        "young_adult": { // 20-39
            "male": [
                { disease: "胃食道逆流/消化性潰瘍", department: "腸胃內科", insurance: "實支實付醫療險" },
                { disease: "椎間盤突出/下背痛", department: "骨科/神經外科/復健科", insurance: "實支實付醫療險、意外險" },
            ],
            "female": [
                { disease: "婦科常見問題 (如子宮肌瘤、卵巢囊腫、多囊性卵巢)", department: "婦產科", insurance: "婦女險、實支實付醫療險、重大傷病險" },
                { disease: "泌尿道感染", department: "婦產科/泌尿科/家醫科", insurance: "實支實付醫療險" },
            ],
            "any": [
                { disease: "偏頭痛/緊張型頭痛", department: "神經內科/家醫科", insurance: "實支實付醫療險" },
                { disease: "三高前期 (高血壓、高血糖、高血脂風險)", department: "家醫科/新陳代謝科", insurance: "定期健檢、實支實付醫療險、重大傷病險" },
                { disease: "自律神經失調", department: "精神科/身心科/神經內科", insurance: "實支實付醫療險 (部分)" },
            ]
        },
        "middle_aged": { // 40-59
            "male": [
                { disease: "心血管疾病風險 (如冠心病、高血壓)", department: "心臟內科/家醫科", insurance: "重大傷病險、實支實付醫療險、癌症險" },
                { disease: "攝護腺問題 (如攝護腺肥大)", department: "泌尿科", insurance: "實支實付醫療險、手術險" },
            ],
            "female": [
                { disease: "更年期綜合症", department: "婦產科/家醫科", insurance: "實支實付醫療險" },
                { disease: "骨質疏鬆風險", department: "骨科/新陳代謝科/家醫科", insurance: "實支實付醫療險、意外險(防骨折)" },
                { disease: "乳癌篩檢與防治", department: "乳房外科/婦產科", insurance: "癌症險、重大傷病險、實支實付醫療險" },
            ],
            "any": [
                 { disease: "糖尿病 (第二型)", department: "新陳代謝科/內分泌科/家醫科", insurance: "重大傷病險、實支實付醫療險" },
                 { disease: "退化性關節炎", department: "骨科/復健科", insurance: "實支實付醫療險、手術險" },
                 { disease: "大腸癌篩檢與防治", department: "腸胃內科/大腸直腸外科", insurance: "癌症險、重大傷病險、實支實付醫療險" },
                 { disease: "肺癌篩檢與防治 (尤其吸菸者)", department: "胸腔內科/胸腔外科", insurance: "癌症險、重大傷病險、實支實付醫療險" },
            ]
        },
        "senior": { // 60+
            "any": [
                { disease: "高血壓/心臟病", department: "心臟內科/老年醫學科/家醫科", insurance: "實支實付醫療險(注意投保年齡上限)、長照險" },
                { disease: "糖尿病及其併發症", department: "新陳代謝科/老年醫學科/家醫科", insurance: "實支實付醫療險(注意投保年齡上限)、長照險" },
                { disease: "骨質疏鬆與骨折風險", department: "骨科/老年醫學科", insurance: "意外險、實支實付醫療險、長照險" },
                { disease: "失智症 (阿茲海默症等)", department: "神經內科/精神科/老年醫學科", insurance: "長照險、特定疾病險" },
                { disease: "白內障/青光眼/黃斑部病變", department: "眼科", insurance: "實支實付醫療險(手術)、醫療雜費" },
                { disease: "聽力退化", department: "耳鼻喉科", insurance: "部分輔具補助、實支實付醫療險" },
                { disease: "慢性阻塞性肺病 (COPD)", department: "胸腔內科/老年醫學科", insurance: "實支實付醫療險、長照險" },
                { disease: "癌症 (如大腸癌、肺癌、攝護腺癌、乳癌等，依篩檢建議)", department: "相關癌症專科 (如腫瘤科、血液腫瘤科等)", insurance: "癌症險、重大傷病險、實支實付醫療險" }
            ]
        }
    };

    if (getAdviceBtn && advisorAgeInput && advisorGenderSelect && advisorWeightInput && advisorHeightInput && adviceResultDisplay) {
        getAdviceBtn.addEventListener('click', () => {
            const age = parseInt(advisorAgeInput.value);
            const gender = advisorGenderSelect.value;
            const weight = parseFloat(advisorWeightInput.value);
            const height = parseFloat(advisorHeightInput.value);

            adviceResultDisplay.innerHTML = ''; // Clear previous results
            adviceResultDisplay.style.display = 'inline';
            adviceResultDisplay.style.backgroundColor = 'transparent';
            adviceResultDisplay.style.padding = '0';

            // Validation
            let errors = [];
            if (isNaN(age) || age < 60 || age > 120) errors.push("請輸入有效的年齡 (60-120)。");
            if (gender === "") errors.push("請選擇生理性別。");
            if (isNaN(weight) || weight <= 0 || weight > 500) errors.push("請輸入有效的體重。");
            if (isNaN(height) || height <= 50 || height > 300) errors.push("請輸入有效的身高 (50-300 公分)。");

            if (errors.length > 0) {
                adviceResultDisplay.innerHTML = `<p style="color: #D4846E; background-color: #FFF5E1; padding: 10px; border-radius: 5px;">${errors.join("<br>")}</p>`;
                return;
            }

            // Determine age group
            let ageGroup = "";
            if (age < 60) { // This case should ideally not be hit due to input validation and min attribute
                // Fallback or handle as an error, though validation should catch it.
                // For safety, one might assign to a group or show a specific message.
                // However, with min="60" on input and JS validation, this block is less critical.
                 if (age <= 12) ageGroup = "child";
                 else if (age <= 19) ageGroup = "teen";
                 else if (age <= 39) ageGroup = "young_adult";
                 else if (age <= 59) ageGroup = "middle_aged"; // Covers 40-59
            } else { // age is 60 or older
                ageGroup = "senior";
            }

            let adviceHtml = `<div class="advice-card">`;

            // BMI Calculation
            const bmiResult = calculateBMI(weight, height);
            adviceHtml += `<h3>您的健康狀態參考：</h3>`;
            adviceHtml += `<p><strong>BMI 指數：</strong> ${bmiResult.bmiRounded} (${bmiResult.category})</p>`;
            if (bmiResult.category !== '健康體位') {
                adviceHtml += `<p style="color: ${bmiResult.textColor};">您的BMI指數為「${bmiResult.category}」，建議諮詢醫師或營養師以獲得個人化的飲食與運動計畫。</p>`;
            }

            // Get health advice
            adviceHtml += `<h3>針對您的年齡 (${age}歲) 與性別 (${gender === 'male' ? '男性':'女性'})，可能的健康關注點：</h3>`;
            
            const specificAdvice = healthAdviceData[ageGroup];
            let relevantAdvice = [];

            if (specificAdvice) {
                if (specificAdvice[gender]) {
                    relevantAdvice = relevantAdvice.concat(specificAdvice[gender]);
                }
                if (specificAdvice["any"]) { // Add "any" gender advice
                    relevantAdvice = relevantAdvice.concat(specificAdvice["any"]);
                }
            }
            

            if (relevantAdvice.length > 0) {
                adviceHtml += `<ul>`;
                relevantAdvice.forEach(item => {
                    adviceHtml += `<li>
                        <p><strong>${item.disease}</strong></p>
                        <em>建議科別：</em> ${item.department}<br>
                        <em>相關保險參考：</em> ${item.insurance}
                    </li>`;
                });
                adviceHtml += `</ul>`;
            } else {
                adviceHtml += `<p>目前針對此年齡層與性別無特定預設資料，建議定期健康檢查，並與醫師討論。</p>`;
            }
            
            adviceHtml += `<p class="disclaimer"><strong>重要提醒：</strong>以上資訊僅為一般性參考，不能取代專業醫師的診斷與建議。若有任何健康疑慮，請務必諮詢專業醫療人員。</p>`;
            adviceHtml += `</div>`;
            adviceResultDisplay.innerHTML = adviceHtml;
        });
    }
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);

    let category = '';
    let textColor = '#333';
    let bgColor = '#FFF5E1';

    if (bmi < 18.5) {
        category = '體重過輕';
        textColor = '#C97A63'; // Using a distinct color from the palette
        bgColor = '#FFC898';
    } else if (bmi >= 18.5 && bmi < 24) {
        category = '健康體位';
        textColor = '#333333';
        bgColor = '#FFF5E1'; // Lightest for healthy
    } else if (bmi >= 24 && bmi < 27) {
        category = '過重';
        textColor = '#C97A63';
        bgColor = '#FFC898';
    } else { // bmi >= 27
        category = '肥胖';
        textColor = '#D4846E'; // Stronger warning
        bgColor = '#F1C27D'; // More prominent bg
    }
    return { bmiRounded, category, textColor, bgColor };
}