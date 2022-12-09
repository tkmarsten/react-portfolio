const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me</h1>
      <form className="contact-form">
        <label for="name">Name</label>
        <input type="text" name="name" className="field" />
        <label for="email">Email</label>
        <input type="text" name="email" className="field" />
        <label for="message">Message</label>
        <textarea rows={10} name="message" className="field" />
      </form>
    </div>
  )
}

export default Contact