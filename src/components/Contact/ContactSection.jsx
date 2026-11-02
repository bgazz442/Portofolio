import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../UI/Icons';
import SectionHeading from '../UI/SectionHeading';
import { personalData } from '../../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const { contact } = personalData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message || isSending) return;

    setIsSending(true);
    setSendError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || 'Pesan baru dari portofolio',
          message: formState.message,
          _subject: `Pesan Portfolio: ${formState.subject || 'Proyek baru'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Pesan gagal dikirim. Silakan coba lagi.');
      }

      setSubmittedName(formState.name);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSendError(error.message || 'Pesan gagal dikirim. Silakan coba lagi.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div 
        className="ambient-glow-circle w-96 h-96 bg-cyan-500/10 bottom-10 left-1/4" 
        aria-hidden="true" 
      />

      <div className="portfolio-container relative z-10">
        <SectionHeading 
          badge="Collaboration &amp; Inquiries"
          title="Let's Build Something Meaningful"
          subtitle={contact.ctaSubheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info & One-Click Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 space-y-6 flex-1 shadow-xl">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  Terbuka untuk tawaran posisi full-time, proyek freelance, atau diskusi teknis seputar arsitektur web modern.
                </p>
              </div>

              {/* One-Click Email Banner */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 relative overflow-hidden group">
                <div className="text-xs font-mono text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Primary Email</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs md:text-sm font-semibold text-white truncate font-mono">
                    {contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0 p-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs font-medium"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contact.locationDisplay}</span>
              </div>

              {/* Social Profiles Grid */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Connect &amp; Follow
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {contact.github && (
                    <a 
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {contact.linkedin && (
                    <a 
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all"
                    >
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {contact.instagram && (
                    <a 
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all"
                    >
                      <InstagramIcon className="w-4 h-4 text-rose-400" />
                      <span>Instagram</span>
                    </a>
                  )}
                  <a 
                    href={`mailto:${contact.email}`}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Quick Mail</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-between shadow-xl">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send a Direct Message</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Drop a Note</h3>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Message Received!</h4>
                    <p className="text-xs md:text-sm text-slate-300 max-w-md mx-auto">
                      Terima kasih telah menghubungi saya, <span className="text-cyan-300 font-semibold">{submittedName}</span>. Saya akan merespon pesan Anda sesegera mungkin.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                        setSubmittedName('');
                        setSendError('');
                      }}
                      className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-white/10 hover:text-white cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Nama Anda *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Email Anda *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. alex@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Subjek Proyek
                      </label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="e.g. Web Application Development / Collaboration"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Pesan *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Ceritakan gambaran singkat proyek atau kebutuhan yang ingin didiskusikan..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-primary w-full py-3 text-xs md:text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    {sendError && (
                      <p className="text-xs text-red-400 text-center" role="alert">
                        {sendError}
                      </p>
                    )}
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
