import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // let firstValue: string = 'Many';
  // let firstValue: number = 23;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 4];
  // let firstValue: Array<string> = ['2', '3', '4'];

  // // tuple
  // let aTuple: [string, number] =  ['Many', 5];

  // //  enum
  // enum Codes {first, second};

  // any
  let firstName: any = 4;

  // //  void
  // const warning = (): void=>{
  //   console.log('Warning')
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstName} is of { typeof firstName} type!
        </p>
      </header>
    </div>
  );
}

export default App;
