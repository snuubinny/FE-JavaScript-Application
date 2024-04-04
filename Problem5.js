//5번 문제

let user = {
  name: "예린",
  part: "FE",
};

const json=JSON.stringify(user);
console.log(json);

const subin=JSON.parse(json);
console.log(subin);

