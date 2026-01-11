alert("Hello, World!");
console.log("This is a test file.");
function testFunction() {
    return "Test function executed.";
}

// 電卓を作成する簡単な関数
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// テスト用の関数呼び出し
console.log(add(5, 3));        // 8
console.log(subtract(5, 3));   // 2
console.log(multiply(5, 3));   // 15
console.log(divide(6, 3));     // 2