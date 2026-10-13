function MaterialDetails({ materialName, onBack }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary mb-3"
        onClick={onBack}
      >
        ← Tillbaka
      </button>

      <h2>{materialName}</h2>

      <p>
        Här ska jag lägga in tabell och diagram
      </p>
    </div>
  );
}

export default MaterialDetails;