'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"SkinCheck","url":"https://skincheck.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"SkinCheck","url":"https://skincheck.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate is smartphone dermoscopy for melanoma detection?","acceptedAnswer":{"@type":"Answer","text":"Medical-grade dermoscope attachments capture the same subsurface details dermatologists see in clinical exams. Our board-certified physicians review every image using established diagnostic criteria, providing accuracy comparable to in-person consultations for screening purposes."}},{"@type":"Question","name":"Can my regular doctor check for skin cancer instead?","acceptedAnswer":{"@type":"Answer","text":"While primary care doctors can perform basic skin exams, they typically lack specialized dermoscopy equipment and training in dermatopathology. Our service provides dermatologist-level expertise with professional imaging tools that reveal details invisible to the naked eye."}},{"@type":"Question","name":"How much does skin cancer screening cost without insurance?","acceptedAnswer":{"@type":"Answer","text":"Traditional dermatology consultations range from $200-400 without insurance. Our mail-order screening service provides the same quality assessment at a significantly lower cost, making professional skin cancer screening accessible regardless of insurance coverage."}},{"@type":"Question","name":"What happens if something concerning is found?","acceptedAnswer":{"@type":"Answer","text":"If our dermatologists identify suspicious lesions, you'll receive a detailed report with urgency level and specific recommendations. We provide referrals to local dermatologists and can expedite appointments when immediate follow-up is needed."}},{"@type":"Question","name":"How does this compare to AI skin cancer apps?","acceptedAnswer":{"@type":"Answer","text":"Unlike AI-only apps that often produce false positives, every SkinCheck analysis is reviewed by board-certified dermatologists using medical-grade imaging. You get human expertise combined with professional-quality dermoscopy rather than algorithmic guesswork from standard phone photos."}},{"@type":"Question","name":"Is the dermoscope attachment easy to use at home?","acceptedAnswer":{"@type":"Answer","text":"Our medical-grade smartphone attachment is designed for consumer use with step-by-step guidance. The same dermoscopy technology used in clinics, simplified for home photography with detailed instructions and technique videos."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            SkinCheck
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Professional Skin Cancer Screening Without Dermatologist Wait Times
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Get medical-grade skin analysis at home with our smartphone dermoscopy kit and 48-hour board-certified physician review. No more 50+ day appointments.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Get Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why SkinCheck?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Medical-Grade Smartphone Dermoscopy" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Medical-Grade Smartphone Dermoscopy</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Professional dermoscope attachment reveals subsurface details that standard phone cameras miss. Same imaging technology dermatologists use in clinical practice.</p>
          </section>
          <section aria-label="48-Hour Physician Review" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">48-Hour Physician Review</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Board-certified dermatologists analyze your images and provide detailed reports with next steps. No AI-only guesswork or false positives.</p>
          </section>
          <section aria-label="Affordable Without Insurance" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Affordable Without Insurance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Complete screening for a fraction of clinic costs. Skip insurance hassles and get the care you need when you need it.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How accurate is smartphone dermoscopy for melanoma detection?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Medical-grade dermoscope attachments capture the same subsurface details dermatologists see in clinical exams. Our board-certified physicians review every image using established diagnostic criteria, providing accuracy comparable to in-person consultations for screening purposes.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Can my regular doctor check for skin cancer instead?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">While primary care doctors can perform basic skin exams, they typically lack specialized dermoscopy equipment and training in dermatopathology. Our service provides dermatologist-level expertise with professional imaging tools that reveal details invisible to the naked eye.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How much does skin cancer screening cost without insurance?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Traditional dermatology consultations range from \$200-400 without insurance. Our mail-order screening service provides the same quality assessment at a significantly lower cost, making professional skin cancer screening accessible regardless of insurance coverage.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What happens if something concerning is found?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">If our dermatologists identify suspicious lesions, you'll receive a detailed report with urgency level and specific recommendations. We provide referrals to local dermatologists and can expedite appointments when immediate follow-up is needed.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How does this compare to AI skin cancer apps?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Unlike AI-only apps that often produce false positives, every SkinCheck analysis is reviewed by board-certified dermatologists using medical-grade imaging. You get human expertise combined with professional-quality dermoscopy rather than algorithmic guesswork from standard phone photos.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Is the dermoscope attachment easy to use at home?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Our medical-grade smartphone attachment is designed for consumer use with step-by-step guidance. The same dermoscopy technology used in clinics, simplified for home photography with detailed instructions and technique videos.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 SkinCheck. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
