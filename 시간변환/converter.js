// 시간 변환
import React from 'react';

export function MinuterToHours() {
  // (1) 첫번째 요소는 데이터 두번째 요소는 데이터를 수정하기 위한 함수
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);

  // (3) onChange 함수 생성 => 데이터 업데이트!
  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  }
  return (
    <div>
      <div>
        <label htmlFor='minutes'>Minutes</label>
        <input
          value={inverted ? amount*60 : amount} // (2) input의 value를 state로 연결하여 어디서든 input의 value 수정 가능
          id="minutes"
          placeholder='Minutes'
          type='number'
          onChange={onChange} // onChange 함수 연결
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours" 
          placeholder="Hours" 
          type="number"
          onChange={onChange}
          disabled={!inverted} 
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
};

export function KmToMiles () {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);

  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  }
  return (
    <div>
      <div>
        <label htmlFor='minutes'>Km</label>
        <input
          value={inverted ? (amount*1.609).toFixed(5) : amount} // (2) input의 value를 state로 연결하여 어디서든 input의 value 수정 가능
          id="km"
          placeholder='KM'
          type='number'
          onChange={onChange} // onChange 함수 연결
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">miles</label>
        <input
          value={inverted ? amount : (amount/1.609).toFixed(5)}
          id="miles" 
          placeholder="Miles" 
          type="number"
          onChange={onChange}
          disabled={!inverted} 
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
} ;