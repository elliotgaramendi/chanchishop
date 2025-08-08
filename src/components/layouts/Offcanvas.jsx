const Offcanvas = ({ data }) => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column gap-4">
          {data.length === 0 ? (
            <div className="alert alert-warning" role="alert">
              Your cart is empty
            </div>
          ) : (
            data.map(item => {
              const { id, title, price, category, image } = item;

              return (
                <div key={id} className="card">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                      <img
                        src={image}
                        className="object-fit-contain p-2"
                        alt={title}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-subtitle fs-6">{category}</h5>
                        <h6 className="card-title fs-5">{title}</h6>
                        <span className="card-text fs-6">${price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }))}
        </div>
      </div>
      <div className="p-3 bg-body-secondary">
        <h5 className="d-flex justify-content-between">Total: <span>${data.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span></h5>
        <small>Costo de envío se calcula al finalizar la compra</small>
        <button className="btn btn-primary w-100 mt-2">Checkout</button>
      </div>
    </div>
  );
};

export default Offcanvas;