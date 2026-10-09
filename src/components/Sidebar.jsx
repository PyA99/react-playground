const pages = [
  { id: "scope-3.1", label: "3.1" },
  { id: "scope-3.11", label: "3.11" },
  { id: "scope-3.12", label: "3.12" },
];

function Sidebar({ activePage, onSelect }) {
  return (
    <aside
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end"
      style={{ width: 200 }}
    >
      <span className="fs-5 fw-semibold mb-3">Scopes</span>
      <nav className="nav nav-pills flex-column gap-1">
        {pages.map((page) => (
          <button
            key={page.id}
            type="button"
            className={`nav-link text-start ${activePage === page.id ? "active" : "link-body-emphasis"}`}
            onClick={() => onSelect(page.id)}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
