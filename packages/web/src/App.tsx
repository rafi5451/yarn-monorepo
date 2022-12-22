import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { fetchSomeData, power, obs_v7_$ } from 'ts-lib';
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { add } from 'shared-lib';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState();

  useEffect(() => {

    const stream$ = interval(1000).pipe(
      map((a) => a * 1.6)
    );

    stream$.subscribe(console.warn);

    obs_v7_$.subscribe({
      next: (next) => {
        console.log({ next });
      },
    });

    fetchSomeData().then((res) => {
      setData(res.data);
    }).catch((e) => {
      setData(e.data);
    })
  }, [setData])

  return (
    <div className="App">
      <div>
        <details>
          {JSON.stringify(data)}
        </details>
        <h1>{add(3, 4)}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {power(count, count)}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR s
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
