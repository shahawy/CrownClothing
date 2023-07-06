import "./spinner.css";

function Spinner() {
  return (
    <div className="spinner-overlay" data-testid="spinner">
      <div className="spinner-container"></div>
    </div>
  );
}

export default Spinner;
