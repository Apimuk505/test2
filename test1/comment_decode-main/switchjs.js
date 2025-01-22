const main_score = document.getElementById("main_score") //รับidเพื่อเปลี่ยนstyle decodemath.htmlบรรทับที่59-96
const truemain = document.getElementById("truemain") //รับidเพื่อเปลี่ยนstyle อยุู่ในdecodemath.htmlบรรทับที่22-57
function checkme() {
    const checknow = document.getElementById("checkbox") //รับidเพื่อตรวจสอบค่าว่าเป็นtrue อยุู่ในdecodemath.htmlบรรทับที่17-20
    if (checknow.checked == true) { //ตรวจสอบcheckboxว่าเป็นtrue
        main_score.style.display = 'inline' //เปิดการมองเป็น
        truemain.style.display = 'none' //ปิดการมองเป็น
    } else { //ตรวจสอบcheckboxว่าไม่เป็นtrue
        main_score.style.display = 'none' //ปิดการมองเป็น
        truemain.style.display = 'inline' //เปิดการมองเป็น
    }
}