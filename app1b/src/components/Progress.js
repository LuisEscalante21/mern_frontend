function Progress() {
    return (
        <>
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success"></div>
        </div>
        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-info" ></div>
        </div>
        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-warning" ></div>
        </div>
        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-danger" ></div>
        </div>
      </>  
    );

  }
export default Progress;
