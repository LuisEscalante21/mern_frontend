function Tooltips() {
    return (
        <button type="button" className="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Que bueno soy bro.">
        Custom tooltip
        </button>
    );
  }

export default Tooltips;