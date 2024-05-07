export const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use href="#bootstrap"></use>
        </svg>
        <span className="fs-4">MYCN</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Doc
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Map
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            FAQs
          </a>
        </li>
      </ul>
    </header>
  );
};
