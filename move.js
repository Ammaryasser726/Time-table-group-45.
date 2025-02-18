// Toggle between Arabic and English schedules
function toggleLanguage() {
    const arabicSchedule = document.getElementById("arabic-schedule");
    const englishSchedule = document.getElementById("english-schedule");

    if (arabicSchedule.style.display === "none") {
        arabicSchedule.style.display = "block";
        englishSchedule.style.display = "none";
    } else {
        arabicSchedule.style.display = "none";
        englishSchedule.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".bubble-container").style.display = "none";
    }, 10000); // تختفي الفقاعات بعد 10 ثوانٍ
});
document.addEventListener("DOMContentLoaded", function () {
    let subjects = document.querySelectorAll(".subject");
    let activeAddress = null;

    subjects.forEach(subject => {
        subject.addEventListener("click", function (event) {
            event.stopPropagation(); // منع إغلاق العنوان فور الضغط عليه

            let addressLink = this.querySelector(".address-link");

            if (activeAddress && activeAddress !== addressLink) {
                activeAddress.classList.remove("show");
                activeAddress.classList.add("hide");
                setTimeout(() => {
                    activeAddress.style.display = "none";
                }, 500);
            }

            if (addressLink.style.display === "inline-block") {
                addressLink.classList.remove("show");
                addressLink.classList.add("hide");
                setTimeout(() => {
                    addressLink.style.display = "none";
                }, 500);
                activeAddress = null;
            } else {
                addressLink.style.display = "inline-block";
                setTimeout(() => {
                    addressLink.classList.add("show");
                    addressLink.classList.remove("hide");
                }, 10);
                activeAddress = addressLink;
            }
        });
    });

    // إخفاء العنوان عند الضغط في أي مكان آخر في الصفحة
    document.addEventListener("click", function () {
        if (activeAddress) {
            activeAddress.classList.remove("show");
            activeAddress.classList.add("hide");
            setTimeout(() => {
                activeAddress.style.display = "none";
            }, 500);
            activeAddress = null;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let addressLinks = document.querySelectorAll(".address-link");

    addressLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // منع التنقل إلى رابط آخر
            this.classList.add("clicked"); // إضافة التأثير عند النقر

            // إزالة التأثير بعد 0.5 ثانية
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 500);
        });
    });
});

