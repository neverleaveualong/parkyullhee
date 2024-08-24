// script.js
function updateCountdown() {
    const targetDate = new Date('2024-08-26T00:00:00'); // 목표 날짜: 2024년 8월 26일 자정
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // 생일이 지났으면 "Happy Birthday!"를 표시하고 카운트다운을 멈춤
        document.getElementById('countdown').innerHTML = "생일 축하합니다!";
        return;
    }

    // 남은 시간 계산
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // HTML에 남은 시간 업데이트
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `
        <span>${hours}시간</span> 
        <span>${minutes}분</span> 
        <span>${seconds}초</span>
    `;

    // 1초마다 업데이트
    setTimeout(updateCountdown, 1000);
}

// 페이지 로드 시 카운트다운 시작
updateCountdown();
