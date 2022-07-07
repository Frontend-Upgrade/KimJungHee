// 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다.
// 손님에게 거슬러줘야할 돈이 N원일 때, 거슬러줘야 할 동전의 최소 개수를 구하라.
// 단, 거슬러줘야 할 돈 N은 항상 10의 배수이다.

const coin_types = [500, 100, 50, 10];
let money = 1260;
let result = 0;

coin_types.forEach((coin) => {
  result = result + Math.floor(money / coin);
  money = money % coin;
});
console.log(result);
