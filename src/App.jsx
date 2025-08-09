import './App.css';

function App() {
  return (
    <div className="container">
      <h1>🚀 CI/CD Overview</h1>
      
      <section className="card">
        <h2>✅ Continuous Integration (CI)</h2>
        <p>
          CI is the practice of frequently integrating code changes into a shared repository.
          Each commit triggers an automated build and test process to detect errors early.
        </p>
      </section>

      <section className="card">
        <h2>📦 Continuous Delivery (CD)</h2>
        <p>
          CD ensures that your software is always in a deployable state.
          After CI passes, code is automatically packaged and deployed to a staging environment.
        </p>
      </section>

      <section className="card">
        <h2>⚡ Continuous Deployment</h2>
        <p>
          This takes Continuous Delivery a step further by automatically deploying
          every change that passes the pipeline directly to production without manual approval.
        </p>
      </section>

      <footer>
        <p>Built with ❤️ using React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
