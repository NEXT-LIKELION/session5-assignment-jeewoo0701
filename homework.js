const movie = prompt("등급을 입력해주세요");
if (movie === "A") {console.log("A, B, C를 볼 수 있습니다.");}
if (movie === "B") {console.log("B, C 를 볼 수 있습니다.");}
if (movie === "C") {console.log("C 를 볼 수 있습니다.");}

let height = 5;
for (let i = 1; i <= height; i++) {
    let space = " ".repeat(height - i); 
    let stars = "*".repeat(2 * i - 1); 
    console.log(space + stars); }

let choices = ["가위", "바위", "보"];
let user = prompt("가위, 바위, 보 중 하나를 입력하세요!");
let computer = choices[Math.floor(Math.random() * 3)]; // 랜덤으로 "가위", "바위", "보" 선택

console.log(`사용자 입력: ${user}`);
console.log(`컴퓨터 선택: ${computer}`);

if (user === computer) {
    console.log("무승부!");
} else if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
) {
    console.log("사용자 승리!");
} else {
    console.log("사용자 패배!");
}