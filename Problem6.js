// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

 
  const arr1 = arr.filter(item => !(item.part === "staff" && item.name === "나현" && item.age === 24));

  console.log(arr1);

  const arr2=arr.sort(function(a,b){return b.age-a.age;});
  console.log(arr2);

  const arr3=arr2.map(function(st){
    return {
      ...st, part: st.part.toUpperCase()
    }
  })

  console.log(arr3);
  //...을 통해 새로운 객체를 만들 때 원래 객체의 속성들을 그래도 가지고 오면서 일부를 변경 가능
