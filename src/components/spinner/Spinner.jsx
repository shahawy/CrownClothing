import "./spinner.css";

function Spinner() {
  return (
    <div className="spinner-overlay" data-testid="spinner">  {/* data-testid: is for testing */}
      <div className="spinner-container"></div>
    </div>
  );
}

export default Spinner;
