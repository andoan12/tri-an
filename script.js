function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = getQueryParam("name");

// Danh sách mã code + màu trái tim
const codes = {
    "Nguyen An": { code: "1234", color: "red" },
    "Tran Binh": { code: "5678", color: "blue" },
    "Le Cuc": { code: "4321", color: "green" },
    "Pham Dai": { code: "8765", color: "yellow" },
    "Hoang Em": { code: "1111", color: "purple" },
    "Vo Giao": { code: "2222", color: "orange" },
    "Do Hanh": { code: "3333", color: "pink" },
    "Bui Khanh": { code: "4444", color: "cyan" },
    "Nguyen Lam": { code: "5555", color: "magenta" },
    "Tran Minh": { code: "6666", color: "lime" }
};

document.getElementById("verifyBtn").addEventListener("click", function () {
    const inputCode = document.getElementById("codeInput").value;

    if (name && codes[name] && codes[name].code === inputCode) {
        document.getElementById("greeting").innerText = `Chúc mừng, ${decodeURIComponent(name)}! Chúc bạn một ngày tuyệt vời! 🎉`;
        document.getElementById("greeting").style.display = "block";
        document.getElementById("backLink").style.display = "block";
        document.getElementById("codeInput").style.display = "none";
        document.getElementById("verifyBtn").style.display = "none";
        document.getElementById("errorMessage").innerText = "";

        startFireworks();
        startBalloons();
        startHearts(codes[name].color);
    } else {
        document.getElementById("errorMessage").innerText = "Mã code không đúng, vui lòng thử lại!";
    }
});

// Pháo hoa
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const radius = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();
    }

    setInterval(createFirework, 100);
}

// Bóng bay
function startBalloons() {
    createFloatingEffect("balloon", "balloon-container");
}

// Trái tim (màu riêng)
function startHearts(color) {
    createFloatingEffect("heart", "heart-container", color);
}

function createFloatingEffect(className, containerId, color = null) {
    const container = document.getElementById(containerId);
    function createElement() {
        const el = document.createElement("div");
        el.classList.add(className);
        el.style.left = Math.random() * 100 + "vw";
        if (color) el.style.backgroundColor = color; // Set màu cho trái tim
        container.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }
    setInterval(createElement, 500);
}
