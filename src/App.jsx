import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState); //지금 이거 자체가 구조분해할당한것임을 명심
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); //input을 위한 value

  const hndlForEach = function () {
    let temp = "";
    array.forEach((item, idx) => {
      temp += `${idx}:${item} /`;
    });
    setResult(temp);
  };

  const hndlFilter = function () {
    const filtered = array.filter((item, idx) => item.includes(query));
    setResult(filtered.join(", "));
  };
  const hndlMap = function () {
    const mapped = array.map(function (item, idx) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };
  const hndlReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc}+${cur}`;
    });
    setResult(reduced);
  };
  const hndlPush = function () {
    if (query.length <= 0) {
      alert("추가하려는 값을 입력하세요");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  // 실패한 첫번째 시도 - 아래랑 모범답안과 비교해볼것!!!
  // const hndlPop = function () {
  //   const newArr = [...array];
  //   console.log(newArr);
  //   const popped = newArr.pop();
  //   setArray(popped);
  //   setResult(popped);
  // };
  const hndlPop = function () {
    const newArr = [...array];
    newArr.pop();

    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const hndlSlice = () => {
    const slicedArr = array.slice(1, 4);
    setResult(slicedArr.join(", "));
  };

  //도전과제) 나중에 시간 남으면 입력값을 삽입하게끔 바꿔보기
  const hndlSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, query === "" ? "kiwi, lime" : query);

    // setArray(newArr);
    setResult(newArr.join(", "));
  };

  const hndlIndexOf = () => {
    const result = array.indexOf(query);
    setResult(result);
  };

  const hndlIncludes = () => {
    const result = array.includes(query);
    setResult(result.toString());
  };
  const hndlFind = () => {
    const found = array.find((el) => el.includes(query));
    setResult(found === undefined ? "Not Found" : found);
  };
  const hndlSome = () => {
    const result = array.some((el) => el.includes(query));

    setResult(result.toString());
  };
  const hndlEvery = () => {
    const result = array.every((el) => el.length >= 2);

    setResult(result.toString());
  };
  const hndlSort = () => {
    const newArr = [...array];
    newArr.sort();

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const hndlJoin = () => {
    const joined = array.join(" & ");
    setResult(joined);
  };

  return (
    <div style={{}}>
      <h1>스탠다드반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={hndlForEach}>forEach</button>
        <button onClick={hndlFilter}>Filter</button>
        <button onClick={hndlMap}>map</button>
        <button onClick={hndlReduce}>reduce</button>
        <button onClick={hndlPush}>push</button>
        <button onClick={hndlPop}>pop</button>
        <button onClick={hndlSlice}>slice</button>
        <button onClick={hndlSplice}>splice</button>
        <button onClick={hndlIndexOf}>IndexOf</button>
        <button onClick={hndlIncludes}>includes</button>
        <button onClick={hndlFind}>find</button>
        <button onClick={hndlSome}>some</button>
        <button onClick={hndlEvery}>every</button>
        <button onClick={hndlSort}>sort</button>
        <button onClick={hndlJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
