import { useState } from 'react'
import { sendContact } from '../api/portfolioApi'

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs text-muted uppercase tracking-wide mb-1.5 block font-semibold">{label}</label>
      {children}
    </div>
  )
}

const baseInput = {
  width: '100%', borderRadius: '12px', padding: '10px 14px',
  fontSize: '14px', color: '#2c3e55', background: '#ffffff',
  border: '1px solid rgba(44,62,85,0.15)', outline: 'none', transition: 'border-color 0.18s',
  fontFamily: 'inherit',
}

export default function Contact() {
  const [form,   setForm]   = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onFocus  = e => { e.target.style.borderColor = '#d4820a'; e.target.style.boxShadow = '0 0 0 3px rgba(212,130,10,0.14)' }
  const onBlur   = e => { e.target.style.borderColor = 'rgba(44,62,85,0.15)'; e.target.style.boxShadow = 'none' }

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContact(form)
      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip-teal mb-4">Let's Talk</span>
          <h2 className="text-4xl font-black text-ink mt-3">
            Get In <span className="heading-line text-orange">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted leading-relaxed text-base">
              Whether you have a project, job opportunity, or just want to say hello — I'd love to hear from you.
              Let's build something great together.
            </p>

            {[
              { icon:'📍', label:'Location', value:'Angono, Rizal, Philippines' },
              { icon:'📧', label:'Email',    value:'xizershivas@gmail.com' },
              { icon:'📱', label:'Phone',    value:'+63 969 277 6820' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-white border border-orange/30 shadow-card">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-semibold">{item.label}</p>
                  <p className="text-ink font-semibold text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a href="mailto:xizershivas@gmail.com" title="Email"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-teal/15 shadow-card transition-all duration-200 hover:scale-110 hover:border-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/aldrin-anthony-calatrava-i-7a1563122/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-teal/15 shadow-card transition-all duration-200 hover:scale-110 hover:border-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/xizershivas" target="_blank" rel="noopener noreferrer" title="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-teal/15 shadow-card transition-all duration-200 hover:scale-110 hover:border-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="card p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input name="name" value={form.name} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
                  required placeholder="Your name" style={baseInput} />
              </Field>
              <Field label="Email">
                <input type="email" name="email" value={form.email} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
                  required placeholder="your@email.com" style={baseInput} />
              </Field>
            </div>
            <Field label="Subject">
              <input name="subject" value={form.subject} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
                required placeholder="What's this about?" style={baseInput} />
            </Field>
            <Field label="Message">
              <textarea name="message" value={form.message} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
                required rows={5} placeholder="Tell me about your project..."
                style={{ ...baseInput, resize: 'none' }} />
            </Field>

            {status === 'success' && (
              <p className="text-sm text-center py-2 rounded-xl chip-teal w-full justify-center">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-center py-2 rounded-xl"
                style={{ color:'#ef4444', background:'#fef2f2', border:'1px solid #fecaca' }}>
                ✗ Failed to send. Please email me directly.
              </p>
            )}

            <button type="submit" disabled={status === 'loading'}
              className="btn-orange w-full !rounded-xl disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
