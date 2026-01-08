import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import { 
  Wind, MessageSquare, ShoppingCart, PlayCircle, 
  CheckCircle2, Instagram, QrCode, ArrowRight,
  Zap
} from 'https://esm.sh/lucide-react@0.284.0';

const CONFIG = {
  whatsapp: "541138463120", 
  instagram: "discrecion.ok",
  precioPack: 10000,
  mensajeSoporte: "Hola! Necesito asistencia con mí Buen Aura.",
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('uso');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensajeSoporte)}`;
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="relative mb-8">
          <div className="w-16 h-16 border-2 border-stone-800 border-t-white rounded-full animate-spin"></div>
          <Wind className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" size={20} />
        </div>
        <p className="text-[10px] font-black tracking-[0.5em] uppercase animate-pulse italic">Protocolo Aura</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans antialiased">
      {/* Barra de Estado Superior */}
      <div className="bg-black text-white text-[8px] py-2 px-6 flex justify-between items-center font-black tracking-widest uppercase italic">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
          <span>Sistema Activo</span>
        </div>
        <span>Neutralizador De Humo</span>
      </div>

      {/* Navegación Principal */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200 px-6 py-5 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black italic tracking-tighter leading-none uppercase">Buen Aura</h1>
          <p className="text-[7px] font-bold tracking-[0.3em] uppercase text-stone-400 mt-1 italic">Portal Oficial de Usuario</p>
        </div>
        <div className="bg-stone-100 p-2.5 rounded-full border border-stone-200 shadow-inner">
           <QrCode size={16} className="text-stone-600" />
        </div>
      </nav>

      <main className="max-w-xl mx-auto pb-32">
        {/* Sección de Impacto */}
        <section className="p-10 text-center bg-white border-b border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
             <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-2 leading-[0.85]">Cero.<br/><span className="text-stone-300">Rastro.</span></h2>
            <div className="inline-block bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] mt-6 italic">Pureza 99.9%</div>
          </div>
        </section>

        {/* Pestañas de Navegación */}
        <div className="p-4 sticky top-[77px] z-40 bg-[#fafafa]/80 backdrop-blur-md">
          <div className="flex bg-stone-200/50 p-1 rounded-2xl border border-stone-200/30 shadow-inner">
            {['uso', 'soporte', 'tienda'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-white text-black shadow-lg scale-[1.02]' 
                  : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab === 'uso' ? 'Protocolo' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido Dinámico */}
        <div className="px-6 space-y-6">
          {activeTab === 'uso' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
                <h3 className="text-xs font-black uppercase tracking-widest mb-10 flex items-center gap-3 italic">
                  <PlayCircle size={18} /> Guía de uso 
                </h3>
                <div className="space-y-12">
                  {[
                    { title: "Preparacion", desc: "Abrir y verter el compuesto en la bolsa." },
                    { title: "Activación", desc: "Agregar 150 ML de agua y retirar el aire." },
                    { title: "Captura", desc: "Exhala el humo en el interior inflando la bolsa." }
                    { title: "Agitar", desc: "Agitar durante 5 segundos para neutralizar." }
              
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 relative italic">
                      {i !== 2 && <div className="absolute left-[15px] top-12 w-[1.5px] h-14 bg-stone-100"></div>}
                      <div className="w-8 h-8 rounded-full border-[2.5px] border-black flex items-center justify-center shrink-0 bg-white z-10 shadow-sm">
                        <span className="text-[11px] font-black italic">{i + 1}</span>
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[11px] font-black uppercase mb-1.5 tracking-wider">{item.title}</p>
                        <p className="text-[13px] text-stone-500 font-medium leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'soporte' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-stone-100 text-center italic">
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100 shadow-inner">
                  <MessageSquare size={28} className="text-stone-800" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-black uppercase mb-3 tracking-tighter">Asistencia VIP</h2>
                <p className="text-xs text-stone-400 mb-10 px-6 leading-relaxed">Atención directa para nuestra comunidad de usuarios profesionales.</p>
                <button 
                  onClick={handleWhatsApp} 
                  className="w-full bg-black text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-stone-200 active:scale-95 transition-transform"
                >
                  Contactar por WhatsApp
                </button>
              </div>
            </div>
          )}

          {activeTab === 'tienda' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-white rounded-[3rem] p-5 shadow-sm border border-stone-100 text-center italic">
                <div className="aspect-square bg-stone-50 rounded-[2.5rem] flex items-center justify-center mb-8 border border-stone-100 shadow-inner relative overflow-hidden group">
                   <Wind size={80} strokeWidth={0.5} className="text-stone-300 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-black uppercase mb-1 tracking-tighter">kit Inicial x4 Recargas</h3>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-6">Máxima discreción garantizada</p>
                <p className="text-4xl font-black mb-10 tracking-tighter">${CONFIG.precioPack.toLocaleString('es-AR')}</p>
                <button className="w-full bg-black text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-stone-200">
                  Adquirir Ahora
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Navegación Inferior Estática */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-xl border-t border-stone-100 flex justify-between items-center z-50 italic">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-stone-300 uppercase tracking-widest">Instagram</span>
          <span className="text-[10px] font-black uppercase mt-1">@{CONFIG.instagram.toUpperCase()}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[8px] font-black text-stone-300 uppercase tracking-widest">Protocolo</span>
          <span className="text-[10px] font-black uppercase mt-1 underline underline-offset-4 decoration-stone-200">#nolosa</span>
        </div>
      </footer>
    </div>
  );
}

