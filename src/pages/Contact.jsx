const Contact = () => {
  return (
    <section className="py-4">
      <div className="container">
        <form style={{ maxWidth: '512px' }} className="mx-auto text-center">
          <img className="mb-4" src="https://em-content.zobj.net/source/whatsapp/326/boar_1f417.png" alt="" width="128" height="128" />
          <h1 className="h3 mb-3 fw-normal">Contact</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputName" placeholder="Name" />
            <label for="floatingInputName">Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
            <label for="floatingInputEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="phone" className="form-control" id="floatingInputPhone" placeholder="999888777" />
            <label for="floatingInputPhone">Phone</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '100px' }}></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
            <label className="form-check-label" for="checkDefault">
              Accept conditions and terms of use
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Send</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;