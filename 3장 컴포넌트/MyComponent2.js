const MyComponent2 = (props) => {
  return <div>안녕하세요, 제이름은 {props.name} 입니다</div>;
};

MyComponent2.defaultProps = {
  name: "기본 이름",
};

export default MyComponent2;
