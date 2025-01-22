//เป็นความผิดพลาดในการเขียนโค้ดอ่านยากๆ by guy
const button_start = document.getElementById("button_start")
const text_start = document.getElementById("text_start")
const main_ask = document.getElementById("main_ask")
const ask = document.getElementById("ask")
const Choose_Ans = document.getElementById("Choose_Ans")
const Text_Ans1 = document.getElementById("Text_Ans1")
const Text_Ans2 = document.getElementById("Text_Ans2")
const Text_Ans3 = document.getElementById("Text_Ans3")
const Text_Ans4 = document.getElementById("Text_Ans4")
const Text_Ans5 = document.getElementById("Text_Ans5")
const Text_Ans6 = document.getElementById("Text_Ans6")
const score = document.getElementById("score")
const img = document.getElementById("imgtrue_false")
const number_ask = document.getElementById("number")
const number_img = document.getElementById("number_img")
const img1 = document.getElementById("img1")

var ask_number = 0 //ตัวนับข้อ
var ask_score = 0 //ตัวนับข้อ
var True_ask = 0 //ข้อที่ถุกจะอยู่ที่ข้อไหน
var category = 0
var checkcate = 0
var wrong_ans = 0
var wrong_list = []
var beforewrong = 0
var beforescore = 0


flag = true



function checkhead(text_ask, head1, head2,head3,head4) { //เริ่มจะทำการปิดส่วนที่ไม่จําเป็นและเปิดส่วนที่จําเป็นและสุ่มข้อที่ถูกและผิดs
    if (button_start.style.display != "none") { //กันerror
        button_start.style.display = "none"
        main_ask.style.display = "inline"
        Choose_Ans.style.display = "inline"
        text_start.innerHTML = "START"
        img.style.display = "none"
        ask.innerHTML = text_ask
        number = 1
        number_ask.innerHTML = ask_number
        number_img.innerHTML = ask_number
        if (number == 1) { //setข้อถูกในตัวเลือก
            Text_Ans1.innerHTML = head1
            Text_Ans2.innerHTML = head2
            Text_Ans3.innerHTML = head3
            Text_Ans4.innerHTML = head4
        }
        ask_number = 1
    }
}





function start_ask(text_ask, anstrue, ansfalse,ansfalse2,ansfalse3) { //เริ่มจะทำการปิดส่วนที่ไม่จําเป็นและเปิดส่วนที่จําเป็นและสุ่มข้อที่ถูกและผิดs
    if (button_start.style.display != "none") { //กันerror
        button_start.style.display = "none"
        main_ask.style.display = "inline"
        Choose_Ans.style.display = "inline"
        text_start.innerHTML = "NEXT"
        img.style.display = "none"
        ask.innerHTML = text_ask
        number = Math.floor(Math.random() * 4 ) + 1; //สุ่ม
        number_ask.innerHTML = ask_number
        number_img.innerHTML = ask_number
        if (number == 1) { //setข้อถูกในตัวเลือก
            True_ask = 1
            Text_Ans1.innerHTML = anstrue
            Text_Ans2.innerHTML = ansfalse
            Text_Ans3.innerHTML = ansfalse2
            Text_Ans4.innerHTML = ansfalse3
        } else if(number == 2) {
            True_ask = 2
            Text_Ans2.innerHTML = anstrue
            Text_Ans1.innerHTML = ansfalse
            Text_Ans3.innerHTML = ansfalse2
            Text_Ans4.innerHTML = ansfalse3
        }
        else if(number==3){
            True_ask = 3
            Text_Ans2.innerHTML = ansfalse2
            Text_Ans1.innerHTML = ansfalse
            Text_Ans3.innerHTML = anstrue
            Text_Ans4.innerHTML = ansfalse3

        }
        else if(number==4){
            True_ask = 4
            Text_Ans2.innerHTML = ansfalse2
            Text_Ans1.innerHTML = ansfalse
            Text_Ans3.innerHTML = ansfalse3
            Text_Ans4.innerHTML = anstrue
        }
    }
}

function restart() { //เริมเกมใหม่และsetค่าใหม่
    text_start.innerHTML = "START"
    img.src = ""
    ask_number = 1
    ask_score = 0
    score.innerHTML = ask_score
    if (Text_Ans1.style.fontSize > "32px") {
        img.style.width = "30%"
    }
}




function next() { //เป็นfunctionให้function start_ask เอาข้อมูลมาใช้โดยtext_ask=โจทย์ anstrue=ข้อที่ถูก ansfalse=ข้อที่ผิด
    if (checkcate == 0 && ask_number == 0 ){
        checkhead("เลือกระดับของโจทย์","ระดับม.4","ระดับม.5","ระดับม.6","รวมม.ปลาย")
    }

    else if (ask_number == 1) { //ถ้าดต้องการเพิ่มข้อให้เพิ่มelse if ต่อจาก else if ล่างสุด
        start_ask("จงหาคำตอบ [(1+1+1)(2+3)(1+1)(2X10¹)+30+(10-3)]","LEG","LOOK","LOCK","LAKE")
    } else if (ask_number == 2) {
        start_ask("จงหาคำตอบ 5!+173+4!","LIE","LINE","LEAK","LAST")
    } else if (ask_number == 3) {
        start_ask("A={616,617,618} B={618,619,620} หาสมาชิกของ A∩B","BIG","SAD","MAD","DAD")
    } else if (ask_number == 4) {
        start_ask("กำหนดให้ประพจน์ p เป็นเท็จ q เป็นจริง และ r เป็นจริง<br> ก. (q∧p)↔[(rv~p)→q] มีค่าความจริงเป็นจริง ถ้าประพจน์นี้ถูก = 14 ถ้าผิด = 20 <br>ข. [pv(~q→p)]∧r มีค่าความจริงเป็นเท็จ ถ้าประพจน์นี้ถูก = 20 ถ้าผิด = 14 <br>หาคำตอบ ก+ข","HE","LIE","CRY","EYE")
    } else if (ask_number == 5) {
        start_ask("339 < x < 337 หาค่า x","BEE","FUN","RUN","MOM")
    } else if (ask_number == 6) {
        start_ask("จงหาค่าของ 1000-337","EGG","BEE","SEE","CAKE")
    } else if (ask_number == 7) {
        start_ask("ลูกบอล 1 ลูก มีเส้นผ่านศูนย์กลางยาว 28 ซม. จงหารัศมีของลูกบอล","HI","OK","NO","ME")
    } else if (ask_number == 8) {
        start_ask("","OIL","OUT","ODD","OAK")
        img.src = "img/A.webp"
        img.style.display = "inline"
    } else if (ask_number == 9) {
        start_ask("","SHE","SON","SUN","RUN")
        img.src = "img/received_1699451127237795.webp"
        img1.style.display = 'inline'
    } else if (ask_number == 10) {
        start_ask("","SEE","SIR","SAW","SUM")
        img.src = "img/2.jpeg"
        img.style.display = "inline"
        text_start.innerHTML = "REGAME"
        text_start.style.fontSize = "400%"
    } else {
        restart()
    }
}

function click1() { //ตรวจสอบที่ตัวเลือกที่ถูกหรือไม่
    if (checkcate == 0){
        category = 1
        checkcate = 1
        ask_number =1
        text_start.innerHTML = "NEXT"
        console.log(category)
    }
    if (True_ask == 1) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
    } else {
        beforewrong = ask_number
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        if (flag == true){
            flag = false
        } else {
            wrong_ans+=1
            ask_number+=1
            img.src = "img/red_prodpictxmark_2_1484336301-1.png"
            wrong_list.push(beforewrong)
            console.log(wrong_list)
        }
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
        console.log(wrong_ans)
        if (wrong_ans == 3){
            wrong_ans = 0
        }
        
    }
}

function click2() { //ตรวจสอบที่ตัวเลือกที่ถูกหรือไม่
    if (checkcate == 0){
        category = 2
        checkcate = 1
        ask_number =1
        text_start.innerHTML = "NEXT"
        console.log(category)
    }
    if (True_ask == 2) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
    } else {
        beforewrong = ask_number
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        if (flag == true){
            flag = false
        } else {
            wrong_ans+=1
            ask_number+=1
            img.src = "img/red_prodpictxmark_2_1484336301-1.png"
            wrong_list.push(beforewrong)
            console.log(wrong_list)
        }
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
        console.log(wrong_ans)
        if (wrong_ans == 3){
            wrong_ans = 0
        }
        
    }
}

function click3() { //ตรวจสอบที่ตัวเลือกที่ถูกหรือไม่
    if (checkcate == 0){
        category = 3
        checkcate = 1
        ask_number =1
        text_start.innerHTML = "NEXT"
        console.log(category)
    }
    if (True_ask == 3) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
    } else {
        beforewrong = ask_number
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        if (flag == true){
            flag = false
        } else {
            wrong_ans+=1
            ask_number+=1
            img.src = "img/red_prodpictxmark_2_1484336301-1.png"
            wrong_list.push(beforewrong)
            console.log(wrong_list)
        }
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
        console.log(wrong_ans)
        if (wrong_ans == 3){
            wrong_ans = 0
        }
        
    }
}


function click4() { //ตรวจสอบที่ตัวเลือกที่ถูกหรือไม่
    if (checkcate == 0){
        category = 4
        checkcate = 1
        ask_number =1
        text_start.innerHTML = "NEXT"
        console.log(category)
    }
    if (True_ask == 4) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
    } else {
        beforewrong = ask_number
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        if (flag == true){
            flag = false
        } else {
            wrong_ans+=1
            ask_number+=1
            img.src = "img/red_prodpictxmark_2_1484336301-1.png"
            wrong_list.push(beforewrong)
            console.log(wrong_list)
        }
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
        img1.style.display = 'none'
        console.log(wrong_ans)
        if (wrong_ans == 3){
            wrong_ans = 0
        }
        
    }
}

