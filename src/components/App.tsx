import Counter from './Counter/Counter';

export default function App() {
  return (
    <>
      <main>
        <Counter count={0}>
          <h1>Hello, React!</h1>
        </Counter>
      </main>
    </>
  );
}
