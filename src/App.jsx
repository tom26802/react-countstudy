import React, { useEffect, useState } from "react";
import ColerfulMessage from "./componets/ColorfulMessage";

const App = () => {
  // numは変数、SetNumは更新関数,useStateの中は初期値
  // Appの中で変化があると、このコンポーネントごとReactが再レンダリングをしているため
  // 再レンダリングの箇所を必要な部分にしていく
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColerfulMessage color="blue" message="お元気ですか" />
      <ColerfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <button onClick={onClickShowFlag}>On/Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
