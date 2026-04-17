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
  fontSize: '14px', color: '#111827', background: '#f9fafb',
  border: '1px solid #e5e7eb', outline: 'none', transition: 'border-color 0.18s',
  fontFamily: 'inherit',
}

export default function Contact() {
  const [form,   setForm]   = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onFocus  = e => { e.target.style.borderColor = '#F58027'; e.target.style.boxShadow = '0 0 0 3px rgba(245,128,39,0.12)' }
  const onBlur   = e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }

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
    <section className="py-24 bg-gray-50">
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-white border border-orange/20 shadow-card">
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
              {[
                { label:'Email',    href:'mailto:xizershivas@gmail.com', icon:'✉️' },
                { label:'LinkedIn', href:'#', icon:'💼' },
                { label:'GitHub',   href:'#', icon:'🐙' },
              ].map(s => (
                <a key={s.label} href={s.href} title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-base bg-white border border-gray-200 shadow-card transition-all duration-200 hover:scale-110 hover:border-orange"
                >
                  {s.icon}
                </a>
              ))}
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
