import React from 'react';

function Converter() {
  // (1) 첫번째 요소는 데이터 두번째 요소는 데이터를 수정하기 위한 함수
  const [minutes, setMinutes] = React.useState(0);
  // (3) onChange 함수 생성 => 데이터 업데이트!
  const onChange = (event) => setMinutes(event.target.value);
  const reset = () => setMinutes(0);
  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor='minutes'>Minutes</label>
        <input
          value={minutes} // (2) input의 value를 state로 연결하여 어디서든 input의 value 수정 가능
          id="minutes"
          placeholder='Minutes'
          type='number'
          onChange={onChange} // onChange 함수 연결
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours" 
          placeholder="Hours" 
          type="number"
          disabled 
        />
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Converter;
