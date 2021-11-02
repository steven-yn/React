import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextid, setNextid] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // onsubmit 과 비슷하게 작동.
    const nextNames = names.concat({
      id: nextid, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextid(nextid + 1); // nextId 값에 1 더해주기
    setNames(nextNames); // names 값 업데이트
    setInputText(""); // inputText 비우기.
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  console.log(namesList);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
