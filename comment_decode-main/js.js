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
            start_ask("","OS","EYE","FEE","KEY")
            img.src="img/question18.png"
            img.style.display = "inline"
        }
        if(ask_number == 8){
            start_ask("","LEI","LED","RED","SAW")
            img.src = "img/question5.png"
            img.style.display = "inline"
        }
        if(ask_number == 9){
            start_ask("A={{{{{{1, 2}}}}}, {4{1, 3}, {{4, 5, 6}}}} จงหา n(A)","ZOO","ZIP","SAW","SEE")
        }
        if(ask_number == 10){
            start_ask("A = {{{{789,456]}},{1,{5,6,4},{{45}}}} B = {{1,2},{{2,6,5,7}},7} จงหา n(A+B) ","SO","OK","SEE","SAW")
            text_start.innerHTML = "REGAME"
            text_start.style.fontSize = "400%"
        }
        if(ask_number == 11){
            restart()
        }
    }
    if(category == 2){
        if (ask_number == 1){
            start_ask("","LEI","WE","SO","NO")
            img.src = "img/question7.png"
            img.style.display = "inline"
        }
        if (ask_number ==2){
            start_ask("","ZOO","SPY","SPA","PAW")
            img.src = "img/question8.png"
            img.style.display = "inline"
        }
        if (ask_number ==3 ){
            start_ask("","BEG","BAR","CAR","JAR")
            img.src = "img/question9.png"
            img.style.display = "inline"

        }
        if(ask_number == 4){
            start_ask("","SO","OK","HEY","NO")
            img.src = "img/question11.png"
            img.style.display = "inline"
        }
        if(ask_number == 5){
            start_ask("","OH","HI","HE","SHE")
            img.src = "img/question10.png"
            img.style.display = "inline"
        }
        if(ask_number == 6){
            start_ask("ให้ z = 3 - 4i จงหาค่าของขนาดของ (|Z|) * 10","OS","US","SAW","HE")
        }
        if(ask_number == 7){
            start_ask("ให้ลำดับอนุกรม 3,7,11,15,... จงหาพจน์ที่ 10 ของลำดับนี้ และนำคำตอบที่ ได้ มาลบ 1","BE","BUS","SEE","RAT")
        }
        if(ask_number == 8){
            start_ask("ให้ลำดับอนุกรมเรขาคณิต 5,10,20,40,.. จงหาผลบวกของ 6 พจน์แรก ของลำดับนี้และนำคำตอบที่ได้ +2","LIE","CRY","HE","SHE")
        }
        if(ask_number == 9){
            start_ask("","IS","HE","HIM","SHE")
            img.src = "img/question12.png"
            img.style.display = "inline"
        }
        if(ask_number == 10){
            start_ask("จากการสุ่มเลือก 3 คนจากกลุ่มนักเรียน 10 คน เพื่อนำไปเป็นตัวแทนในการแข่งขัน โดยเลือกได้ไม่ซ้ำกัน ไม่ได้คำนึงถึงลำดับการเลือก) ถามว่า จะมีวิธีการเลือกตัวแทนได้ทั้งหมดกี่วิธี จากนั้นนำคำตอบมาหารด้วย 60","ZOO","SEE","SAW","OH")
            text_start.innerHTML = "REGAME"
            text_start.style.fontSize = "400%"
        }
        if(ask_number == 11){
            restart()
        }
    }
    if (category == 3){
        if(ask_number ==1 ){
            start_ask("คะแนนสอบของนักเรียน 5 คนคือ:918, 937, 338, 993, 710 จงหาค่ามัธยฐานของข้อมูลชุดนี้","BIG","SMALL","CALL","LAW")
        }
        if(ask_number == 2){
            start_ask("","LEG","ARM","EYE","SEE")
            img.src = "img/question13.png"
            img.style.display = "inline"

        }
        if(ask_number == 3){
            start_ask("น้ำหนักของสัตว์ 5 ตัวคือ: 335, 317, 345, 338, 514 จงหาค่าเฉลี่ยของน้ำหนักสัตว์แล้วบวกด้วย537.2","LOG","FOG","SOCK","JOB")
        }
        if(ask_number ==4 ){
            start_ask("","SHE","HE","BEE","SEE")
            img.src = "img/questuin14.png"
            img.style.display = "inline"
            
        }
        if(ask_number == 5){
            start_ask("คะแนนสอบของนักเรียน: 14, 34, 34, 338, 338 จงหาค่าฐานนิยมของข้อมูลชุดนี้","HE","ME","BE","TEA")
        }
        if(ask_number == 6){
            start_ask("","HIS","HER","JOB","COP")
            img.src = "img/question15.png"
            img.style.display = "inline"
        }
        if(ask_number == 7){
            start_ask("","EGG","PIG","SEE","YOU")
            img.src = "img/question16.png"
            img.style.display = "inline"
        }
        if(ask_number == 8){
            start_ask("จำนวนตัวเลขในข้อมูล:(14, 34, 317, 335, 710)  จงหาค่ามัธยฐาน","LIE","BUY","CRY","IS")
        }
        if(ask_number == 9){
            start_ask("","HI","SIR","BED","CAR")
            img.src = "img/question17.png"
            img.style.display = "inline"
        }
        if (ask_number == 10){
            start_ask("ชุดข้อมูล: 14, 28, 34, 338, 338, 415 จงหาฐานนิยม ของข้อมูลชุดนี้","BEE","SEE","SHE","EYE")
            text_start.innerHTML = "REGAME"
            text_start.style.fontSize = "400%"
        }
        if(ask_number == 11){
            restart()
        }
    }
    if (category == 4){
        if(ask_number == 1){
            start_ask("","SHE","ZOO","BEE","OK")
            img.src = "img/question6.png"
            img.style.display = "inline"
        }
        if(ask_number == 7){
            start_ask("","BE","KEY","SEE","OK")
            img.src = "img/question4.png"
            img.style.display = "inline"
        }
        if(ask_number==3){
            start_ask("A = {{{{789,456]}},{1,{5,6,4},{{45}}}} B = {{1,2},{{2,6,5,7}},7} จงหา n(A+B) ","SO","OK","SEE","SAW")
        }
        if(ask_number == 4){
            start_ask("","EGG","PIG","SEE","YOU")
            img.src = "img/question16.png"
            img.style.display = "inline"
        }
        if(ask_number == 5){
            start_ask("","OH","HI","HE","SHE")
            img.src = "img/question10.png"
            img.style.display = "inline"
        }
        if(ask_number == 8){
            start_ask("ให้ลำดับอนุกรมเรขาคณิต 5,10,20,40,.. จงหาผลบวกของ 6 พจน์แรก ของลำดับนี้และนำคำตอบที่ได้ +2","LIE","CRY","HE","SHE")
        }
        if(ask_number == 2){
            start_ask("คะแนนสอบของนักเรียน: 14, 34, 34, 338, 338 จงหาค่าฐานนิยมของข้อมูลชุดนี้","HE","ME","BE","TEA")
        }
        if(ask_number == 6){
            start_ask("","HIS","HER","JOB","COP")
            img.src = "img/question16.png"
            img.style.display = "inline"
        }
        if(ask_number == 9  ){
            start_ask("คะแนนสอบของนักเรียน 5 คนคือ:918, 937, 338, 993, 710 จงหาค่ามัธยฐานของข้อมูลชุดนี้","BIG","SMALL","CALL","LAW")
        }
        if (ask_number == 10){
            start_ask("ชุดข้อมูล: 14, 28, 34, 338, 338, 415 จงหาฐานนิยม ของข้อมูลชุดนี้","BEE","SEE","SHE","EYE")
            text_start.innerHTML = "REGAME"
            text_start.style.fontSize = "400%"
        }
        if(ask_number==11){
            restart()
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