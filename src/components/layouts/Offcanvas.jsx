const Offcanvas = ({ data }) => {
  return (
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column gap-2">
          {data.length === 0 ? (
            <div className="alert alert-warning" role="alert">
              Your cart is empty
            </div>
          ) : (
            data.map(item => {
              return (
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }))}
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;