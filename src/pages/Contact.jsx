import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-4">
      <div className="container">
        <form style={{ maxWidth: '512px' }} className="mx-auto text-center" >
          <img className="mb-4" src="https://em-content.zobj.net/source/whatsapp/326/boar_1f417.png" alt="" width="128" height="128" />
          <h1 className="h3 mb-3 fw-normal">Contact</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="floatingInputName"
              name="name"
              value={formData.name}
              onInput={handleInput}
              required
            />
            <label htmlFor="floatingInputName">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              id="floatingInputEmail"
              name="email"
              value={formData.email}
              onInput={handleInput}
              required
            />
            <label htmlFor="floatingInputEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="phone"
              className="form-control"
              placeholder="999888777"
              id="floatingInputPhone"
              name="phone"
              value={formData.phone}
              onInput={handleInput}
              required
            />
            <label htmlFor="floatingInputPhone">Phone</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="message"
              value={formData.message}
              onInput={handleInput}
              style={{ height: '100px' }}
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.checked })}
              required
            />
            <label className="form-check-label" htmlFor="acceptTerms">
              Accept conditions and terms of use
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Send</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
        </form>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </section>
  );
}

export default Contact;