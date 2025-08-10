export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="panel p-6 md:p-10">
        <h2 className="title text-2xl md:text-3xl mb-4">Contact</h2>
        <p className="text-white/85">Open to internships and full-time roles. Let’s build something great.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          <a className="btn" href="mailto:ra613rishabh@gmail.com">✉️ Email</a>
          <a className="btn" href="tel:+919354429093">📞 Phone</a>
          <a className="btn" href="https://wa.me/919354429093" target="_blank" rel="noreferrer">💬 WhatsApp</a>
          <a className="btn" href="https://t.me/your_username" target="_blank" rel="noreferrer">📨 Telegram</a>
          <a className="btn" href="https://www.linkedin.com/in/rishabhaggarwal999/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a className="btn" href="https://github.com/RishabhAggarwal613" target="_blank" rel="noreferrer">🧑‍💻 GitHub</a>
        </div>
      </div>
    </section>
  )
}
