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