import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  });
  const [loading, setLoading] = useState(true);

  const { title, price, description, category, image } = product;

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct(id);
  }, [id]);

  return (
    <section className="py-4">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div class="col-10 col-sm-8 col-lg-6">
                <img src={image} class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes" height="256" loading="lazy" />
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{title}</h1>
                <h2 class="lead fw-bold text-body-emphasis">${price}</h2>
                {/* add badge with category */}
                <p class="lead mb-3">{category}</p>
                <p class="lead">{description}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2">Buy</button>
                  <button type="button"
                    class="btn btn-outline-secondary btn-lg px-4">Add to cart</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;