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
const box_score = document.getElementById("box_score")

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
box_score.style.display = "none"


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
        box_score.style.display = "inline"
        main_ask.style.display = "inline"
        Choose_Ans.style.display = "inline"
        text_start.innerHTML = "NEXT"
        img.style.display = "none"
        ask.innerHTML = text_ask
        number = Math.floor(Math.random() * 4 ) + 1; //สุ่ม
        number_ask.innerHTML = ask_number
        number_img.innerHTML = ask_number
        var wrong_size = wrong_list.length
        if (wrong_size%3 == 0 && ask_number !=1){
            random_wrong = Math.floor(Math.random()*2) +0;
            usedwrong = wrong_list[random_wrong]
            console.log("Wrong_used",usedwrong)
        }
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
    ask_number = 0
    ask_score = 0
    category = 0
    checkcate = 0
    wrong_ans = 0
    beforewrong = 0
    beforescore = 0
    flag = true
    score.innerHTML = ask_score
    if (Text_Ans1.style.fontSize > "32px") {
        img.style.width = "30%"
    }
}
 


function next() { //เป็นfunctionให้function start_ask เอาข้อมูลมาใช้โดยtext_ask=โจทย์ anstrue=ข้อที่ถูก ansfalse=ข้อที่ผิด
    if (checkcate == 0 && ask_number == 0 ){
        checkhead("เลือกระดับของโจทย์","ระดับม.4","ระดับม.5","ระดับม.6","รวมม.ปลาย")
    }

    if (category == 1 ){
        if (ask_number == 1){
            start_ask("","EEL","SEE","LET","YET")
            img.src = "img/question1.png"
            img.style.display = "inline"
        }
        if (ask_number == 2){
            start_ask("กำหนดว่ามีสองจํานวนที่ผลรวมของพวกมันคือ 1480 และผลต่างของพวกมันคือ 2 จงหาค่าของจํานวนที่มากกว่า","GEL","GO","OWN","OF")
        }
        if(ask_number == 3){
            start_ask("","GIG","GO","OH","OAT")
            img.src = "img/question3.png"
            img.style.display = "inline"
        }
        if(ask_number == 4){
            start_ask("พิจารณาสองจุด A(3, 4) และ B(12, 16)จงหาความยาวของเส้นตรงที่เชื่อมระหว่างจุดทั้งสอง","IS","HE","IF","CRY")
        }
        if(ask_number == 5){
            start_ask("","SHE","ZOO","BEE","OK")
            img.src = "img/question6.png"
            img.style.display = "inline"
        }
        if(ask_number == 6){
            start_ask("","BE","KEY","SEE","OK")
            img.src = "img/question4.png"
            img.style.display = "inline"
        }
        if(ask_number == 7){

        }
        if(ask_number == 8){
            start_ask("","LEI","LED","RED","SAW")
            img.src = "img/question5.png"
            img.style.display = "inline"
        }
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
        img.src = "img/IMG_1074.PNG"
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
            img.src = "img/IMG_1073.PNG"
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
        img.src = "img/IMG_1074.PNG"
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
            img.src = "img/IMG_1073.PNG"
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
        img.src = "img/IMG_1074.PNG"
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
            img.src = "img/IMG_1073.png"
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
        img.src = "img/IMG_1074.PNG"
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
            img.src = "img/IMG_1073.PNG"
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