import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
import { Wrench, Calendar, MessageSquare, ThermometerSnowflake, Menu, X, Bell, CheckCircle, Send, Droplets, Hammer, Phone, Clock, ShieldCheck, ChevronRight, Award, Star, Share2, } from 'https://esm.sh/lucide-react@0.554.0';
// AI response generator from the approved source code.  Returns a
// pseudo‑military response based on the incoming query.  Note: the
// function body is unmodified from the approved code.
const generateAIResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('leak') || lowerInput.includes('dripping')) {
        return 'Standard Operating Procedure for leaks: Locate your main water shut-off valve immediately to secure the perimeter from water damage. Is the leak located at a sink, toilet, or main line?';
    }
    if (lowerInput.includes('clog') || lowerInput.includes('drain') || lowerInput.includes('stuck')) {
        return 'For a clogged line, a plunger is your first line of defense. Stand down on chemical cleaners—they can compromise pipe integrity. Shall we schedule a drain cleaning operation?';
    }
    if (lowerInput.includes('frozen') || lowerInput.includes('ice') || lowerInput.includes('winter')) {
        return 'Frozen pipes are a critical threat. Secure water flow immediately. Thaw gently with indirect heat. Consult our Winterization Intel for full protocols.';
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('much')) {
        return 'Our deployment fee is $79, waived if you proceed with the mission. Final costs depend on the objective\'s complexity.';
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return 'Semper Fi! I\'m the Fidelis AI assistant. Ready to serve your plumbing needs.';
    }
    return 'That situation requires a specialist. I recommend securing a booking via the Calendar tab. Over.';
};
// Main application component implementing the progressive web app.  This
// component and its nested components are direct ports of the
// approved source code.  Type annotations have been added to aid
// TypeScript compilation but do not affect runtime behaviour.
function FidelisApp() {
    const [activeTab, setActiveTab] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallPrompt, setShowInstallPrompt] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallPrompt(true);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setShowInstallPrompt(false);
        }
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);
    const handleInstallClick = async () => {
        if (!deferredPrompt)
            return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            addNotification('Installing Fidelis App...');
        }
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
    };
    const addNotification = (message) => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, message }]);
        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 5000);
    };
    const handleSubscribe = () => {
        setSubscribed(true);
        addNotification('Affirmative. You are subscribed to Maintenance Alerts.');
        setTimeout(() => {
            addNotification('❄️ FROST ALERT: Low temperatures incoming. Execute drip protocols on exterior faucets.');
        }, 8000);
    };
    if (loading) {
        return (React.createElement("div", { className: "fixed inset-0 bg-green-950 flex flex-col items-center justify-center z-50 text-center p-4" },
            React.createElement("div", { className: "animate-bounce mb-4" },
                React.createElement("div", { className: "bg-amber-600 p-4 rounded-2xl shadow-2xl border-2 border-amber-400" },
                    React.createElement(Star, { className: "w-16 h-16 text-green-950 fill-current" }))),
            React.createElement("h1", { className: "text-3xl font-black text-stone-100 uppercase tracking-[0.2em] animate-pulse" }, "Fidelis"),
            React.createElement("h2", { className: "text-amber-500 text-sm font-bold uppercase tracking-widest mt-2" }, "Plumbing & Heating"),
            React.createElement("div", { className: "mt-8 w-48 h-1 bg-green-900 rounded-full overflow-hidden" },
                React.createElement("div", { className: "h-full bg-amber-500 animate-[width_2s_ease-in-out] w-full origin-left" })),
            React.createElement("p", { className: "absolute bottom-10 text-green-800 text-xs font-mono" }, "VETERAN OWNED \u2022 OPERATED")));
    }
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return React.createElement(Home, { setActiveTab: setActiveTab });
            case 'booking':
                return React.createElement(BookingSystem, { addNotification: addNotification });
            case 'tips':
                return React.createElement(WinterizationTips, null);
            case 'chat':
                return React.createElement(PlumberAI, null);
            default:
                return React.createElement(Home, { setActiveTab: setActiveTab });
        }
    };
    return (React.createElement("div", { className: "min-h-screen bg-stone-300 font-sans text-stone-900 relative overflow-x-hidden select-none" },
        React.createElement("header", { className: "bg-green-950 text-stone-200 sticky top-0 z-40 shadow-lg border-b-4 border-amber-600" },
            React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-3 flex justify-between items-center" },
                React.createElement("div", { className: "flex items-center space-x-2 cursor-pointer active:scale-95 transition-transform", onClick: () => setActiveTab('home') },
                    React.createElement("div", { className: "bg-amber-600 p-1.5 rounded-md shadow-md" },
                        React.createElement(Star, { className: "w-6 h-6 text-green-950 fill-current" })),
                    React.createElement("div", null,
                        React.createElement("span", { className: "text-xl font-black tracking-wider uppercase block leading-none" }, "Fidelis"),
                        React.createElement("span", { className: "text-xs text-amber-500 font-bold tracking-widest uppercase block" }, "Plumbing"))),
                React.createElement("nav", { className: "hidden md:flex space-x-6 font-medium" },
                    React.createElement(NavButton, { active: activeTab === 'home', onClick: () => setActiveTab('home'), icon: React.createElement(Wrench, { size: 16 }), label: "Base" }),
                    React.createElement(NavButton, { active: activeTab === 'booking', onClick: () => setActiveTab('booking'), icon: React.createElement(Calendar, { size: 16 }), label: "Book Op" }),
                    React.createElement(NavButton, { active: activeTab === 'tips', onClick: () => setActiveTab('tips'), icon: React.createElement(ThermometerSnowflake, { size: 16 }), label: "Intel" }),
                    React.createElement(NavButton, { active: activeTab === 'chat', onClick: () => setActiveTab('chat'), icon: React.createElement(MessageSquare, { size: 16 }), label: "Comms" })),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("button", { className: "md:hidden p-2 text-stone-400 hover:text-white" },
                        React.createElement(Share2, { size: 20 })),
                    React.createElement("button", { onClick: () => (!subscribed ? handleSubscribe() : addNotification('You are already on the roster!')), className: `p-2 rounded-full transition-colors ${subscribed ? 'bg-green-900 text-amber-400' : 'hover:bg-green-900 text-stone-400'}` },
                        React.createElement(Bell, { size: 20, fill: subscribed ? 'currentColor' : 'none' })),
                    React.createElement("button", { className: "md:hidden p-2 text-stone-200", onClick: () => setMobileMenuOpen(!mobileMenuOpen) }, mobileMenuOpen ? React.createElement(X, null) : React.createElement(Menu, null)))),
            mobileMenuOpen && (React.createElement("div", { className: "md:hidden bg-green-950 border-t border-green-900 animate-fadeIn pb-2" },
                React.createElement("div", { className: "flex flex-col p-2 space-y-2 text-stone-200" },
                    React.createElement(MobileNavButton, { active: activeTab === 'home', onClick: () => {
                            setActiveTab('home');
                            setMobileMenuOpen(false);
                        }, label: "Home Base", icon: React.createElement(Wrench, { size: 18 }) }),
                    React.createElement(MobileNavButton, { active: activeTab === 'booking', onClick: () => {
                            setActiveTab('booking');
                            setMobileMenuOpen(false);
                        }, label: "Book Operation", icon: React.createElement(Calendar, { size: 18 }) }),
                    React.createElement(MobileNavButton, { active: activeTab === 'tips', onClick: () => {
                            setActiveTab('tips');
                            setMobileMenuOpen(false);
                        }, label: "Winter Intel", icon: React.createElement(ThermometerSnowflake, { size: 18 }) }),
                    React.createElement(MobileNavButton, { active: activeTab === 'chat', onClick: () => {
                            setActiveTab('chat');
                            setMobileMenuOpen(false);
                        }, label: "AI Comms", icon: React.createElement(MessageSquare, { size: 18 }) }))))),
        React.createElement("main", { className: "pb-24 md:pb-20" }, renderContent()),
        showInstallPrompt && (React.createElement("div", { className: "fixed bottom-0 left-0 right-0 bg-stone-100 border-t border-stone-300 p-4 z-50 animate-slideUp md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.1)]" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "bg-green-950 p-2 rounded-lg" },
                        React.createElement(Star, { size: 20, className: "text-amber-500 fill-current" })),
                    React.createElement("div", null,
                        React.createElement("h4", { className: "font-bold text-sm text-green-950" }, "Install Fidelis App"),
                        React.createElement("p", { className: "text-xs text-stone-500" }, "Add to Home Screen for quick access"))),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("button", { onClick: () => setShowInstallPrompt(false), className: "text-stone-400 p-2" },
                        React.createElement(X, { size: 18 })),
                    React.createElement("button", { onClick: handleInstallClick, className: "bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md" }, "Install"))))),
        React.createElement("div", { className: "fixed top-20 right-4 z-50 flex flex-col gap-2 w-full max-w-xs px-4 sm:px-0 pointer-events-none" }, notifications.map((note) => (React.createElement("div", { key: note.id, className: "bg-stone-800/95 backdrop-blur text-stone-100 border-l-4 border-amber-500 shadow-2xl rounded-r-sm p-4 flex items-start space-x-3 animate-slideInRight pointer-events-auto" },
            React.createElement(Bell, { className: "text-amber-500 shrink-0 mt-1", size: 16 }),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-black text-xs text-amber-500 uppercase tracking-wide mb-1" }, "Comms Update"),
                React.createElement("p", { className: "text-xs leading-relaxed font-medium text-stone-300" }, note.message))))))));
}
// Navigation button component used in the desktop nav bar.  Props are
// typed for clarity.  This component mirrors the approved source code.
function NavButton({ active, onClick, icon, label, }) {
    return (React.createElement("button", { onClick: onClick, className: `flex items-center space-x-1.5 px-3 py-2 rounded-sm transition-all uppercase tracking-wide text-sm font-bold ${active ? 'bg-amber-600 text-green-950 shadow-md transform -translate-y-0.5' : 'text-green-100 hover:text-amber-400 hover:bg-green-900'}` },
        icon,
        React.createElement("span", null, label)));
}
// Navigation button component used in the mobile nav menu.  Mirrors
// the approved design.
function MobileNavButton({ active, onClick, label, icon, }) {
    return (React.createElement("button", { onClick: onClick, className: `w-full text-left px-4 py-4 rounded-lg flex items-center gap-4 transition-all font-bold tracking-wider ${active ? 'bg-amber-600 text-green-950 shadow-md' : 'bg-green-900 text-stone-300 hover:bg-green-800'}` },
        icon,
        label));
}
// Home screen component.  Contains hero section, services, and callout
// cards.  Accepts a single prop to set the active tab.
function Home({ setActiveTab }) {
    return (React.createElement("div", { className: "animate-fadeIn" },
        React.createElement("div", { className: "bg-green-950 text-stone-200 pt-12 pb-24 px-4 text-center relative overflow-hidden rounded-b-[3rem] shadow-2xl mb-8" },
            React.createElement("div", { className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-green-900 rounded-full opacity-40 -z-10 blur-3xl" }),
            React.createElement("div", { className: "absolute bottom-0 right-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-2xl" }),
            React.createElement("div", { className: "max-w-4xl mx-auto relative z-10" },
                React.createElement("div", { className: "inline-flex items-center gap-2 bg-green-900/80 px-4 py-1.5 rounded-full border border-amber-600/30 mb-8 animate-fadeUp" },
                    React.createElement(Award, { size: 14, className: "text-amber-500" }),
                    React.createElement("span", { className: "text-amber-500 font-bold text-[10px] tracking-[0.2em] uppercase" }, "Veteran Owned & Operated")),
                React.createElement("h1", { className: "text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.9] animate-fadeUp delay-100" },
                    "Service with ",
                    React.createElement("span", { className: "text-amber-500" }, "Honor"),
                    ". ",
                    React.createElement("br", null),
                    React.createElement("span", { className: "text-stone-400 text-3xl md:text-5xl tracking-normal normal-case font-bold block mt-4" }, "Plumbing with Pride.")),
                React.createElement("div", { className: "flex flex-col gap-4 justify-center max-w-sm mx-auto mt-10 animate-fadeUp delay-200" },
                    React.createElement("button", { onClick: () => setActiveTab('booking'), className: "bg-amber-600 text-green-950 px-8 py-4 rounded-xl font-black text-lg shadow-lg shadow-amber-900/20 hover:bg-amber-500 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider" },
                        "Book Mission ",
                        React.createElement(ChevronRight, { size: 20, strokeWidth: 3 })),
                    React.createElement("button", { onClick: () => setActiveTab('chat'), className: "bg-green-900/50 backdrop-blur-sm border border-stone-600 text-stone-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800/50 transition-all uppercase tracking-wider flex items-center justify-center gap-2" },
                        React.createElement(MessageSquare, { size: 18 }),
                        "Recon / AI Chat")))),
        React.createElement("div", { className: "max-w-6xl mx-auto px-4 pb-16" },
            React.createElement("div", { className: "text-center mb-10" },
                React.createElement("h2", { className: "text-2xl font-black text-green-950 uppercase tracking-widest mb-2" }, "Tactical Services"),
                React.createElement("div", { className: "h-1.5 w-16 bg-amber-500 mx-auto rounded-full" })),
            React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
                React.createElement(ServiceCard, { icon: React.createElement(Droplets, { className: "w-8 h-8 text-amber-600" }), title: "Leak Detection", desc: "Advanced sonic surveillance to locate hidden threats behind walls and under concrete." }),
                React.createElement(ServiceCard, { icon: React.createElement(Hammer, { className: "w-8 h-8 text-amber-600" }), title: "Heavy Installs", desc: "From tankless heaters to main lines, we install hardware that holds the line." }),
                React.createElement(ServiceCard, { icon: React.createElement(ThermometerSnowflake, { className: "w-8 h-8 text-amber-600" }), title: "Winter Defense", desc: "Fortify your perimeter against freezing temperatures with our winterization protocols." }))),
        React.createElement("div", { className: "bg-stone-200 py-12 border-y border-stone-400" },
            React.createElement("div", { className: "max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left" },
                React.createElement("div", { className: "flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity" },
                    React.createElement("div", { className: "bg-stone-300 p-3 rounded-full" },
                        React.createElement(Clock, { className: "w-6 h-6 text-green-900" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-bold text-lg text-green-950 uppercase leading-none" }, "24/7 Deployment"),
                        React.createElement("p", { className: "text-stone-600 text-xs mt-1 uppercase tracking-wider" }, "Always Ready"))),
                React.createElement("div", { className: "flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity" },
                    React.createElement("div", { className: "bg-stone-300 p-3 rounded-full" },
                        React.createElement(ShieldCheck, { className: "w-6 h-6 text-green-900" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-bold text-lg text-green-950 uppercase leading-none" }, "Licensed & Insured"),
                        React.createElement("p", { className: "text-stone-600 text-xs mt-1 uppercase tracking-wider" }, "Mission Guaranteed"))),
                React.createElement("div", { className: "flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity" },
                    React.createElement("div", { className: "bg-stone-300 p-3 rounded-full" },
                        React.createElement(Phone, { className: "w-6 h-6 text-green-900" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-bold text-lg text-green-950 uppercase leading-none" }, "(555) SEMPER-FI"),
                        React.createElement("p", { className: "text-stone-600 text-xs mt-1 uppercase tracking-wider" }, "Direct Line")))))));
}
// Service card component for displaying service offerings on the home
// screen.  It uses the same structure as the approved code.
function ServiceCard({ icon, title, desc, }) {
    return (React.createElement("div", { className: "bg-stone-200 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 border-green-950 relative group overflow-hidden" },
        React.createElement("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
        React.createElement("div", { className: "flex items-start gap-4" },
            React.createElement("div", { className: "bg-stone-300 w-14 h-14 rounded-lg flex items-center justify-center shrink-0 border border-stone-400 group-hover:bg-stone-100 group-hover:border-amber-500 transition-colors shadow-inner" }, icon),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-lg font-black mb-2 text-green-950 uppercase tracking-wide" }, title),
                React.createElement("p", { className: "text-stone-700 text-sm leading-relaxed font-medium" }, desc)))));
}
// Booking system component.  Handles mission scheduling form and
// success message state.  Accepts a callback to dispatch
// notifications.
function BookingSystem({ addNotification, }) {
    const [status, setStatus] = useState('idle');
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            addNotification('Mission Request Received. Stand by for confirmation.');
        }, 1500);
    };
    if (status === 'success') {
        return (React.createElement("div", { className: "max-w-md mx-auto mt-16 px-4 text-center animate-fadeIn" },
            React.createElement("div", { className: "w-24 h-24 bg-green-100 text-green-900 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-200 shadow-xl" },
                React.createElement(CheckCircle, { size: 48 })),
            React.createElement("h2", { className: "text-3xl font-black mb-4 text-green-950 uppercase tracking-tight" }, "Mission Confirmed"),
            React.createElement("p", { className: "text-stone-700 mb-8 font-medium" }, "We have your coordinates. A dispatcher will contact you within 1400 hours (2 hours) to confirm intel."),
            React.createElement("button", { onClick: () => setStatus('idle'), className: "w-full bg-stone-200 text-green-900 font-bold py-4 rounded-xl hover:bg-stone-100 uppercase tracking-wide shadow-md" }, "Book Another Op")));
    }
    return (React.createElement("div", { className: "max-w-xl mx-auto mt-6 px-4 animate-fadeIn" },
        React.createElement("div", { className: "bg-stone-200 rounded-xl shadow-xl border-t-4 border-amber-500 p-6 md:p-8" },
            React.createElement("div", { className: "mb-8 border-b-2 border-stone-300 pb-4 flex items-center justify-between" },
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-2xl font-black flex items-center gap-2 text-green-950 uppercase tracking-wide" }, "Schedule Op"),
                    React.createElement("p", { className: "text-stone-600 text-xs mt-1 font-bold uppercase tracking-wider" }, "Secure your slot")),
                React.createElement("div", { className: "bg-stone-300 p-3 rounded-full" },
                    React.createElement(Calendar, { className: "text-amber-600", size: 24 }))),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-5" },
                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                    React.createElement("div", { className: "space-y-1" },
                        React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "First Name"),
                        React.createElement("input", { required: true, type: "text", className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none transition-all text-stone-900 font-bold", placeholder: "John" })),
                    React.createElement("div", { className: "space-y-1" },
                        React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "Last Name"),
                        React.createElement("input", { required: true, type: "text", className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none transition-all text-stone-900 font-bold", placeholder: "Doe" }))),
                React.createElement("div", { className: "space-y-1" },
                    React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "Mission Type"),
                    React.createElement("div", { className: "relative" },
                        React.createElement("select", { className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none text-stone-900 font-bold appearance-none" },
                            React.createElement("option", null, "General Repair"),
                            React.createElement("option", null, "Clogged Drain"),
                            React.createElement("option", null, "Water Heater Issue"),
                            React.createElement("option", null, "Leak Detection"),
                            React.createElement("option", null, "Winterization Service")),
                        React.createElement(ChevronRight, { className: "absolute right-4 top-3.5 text-stone-400 rotate-90", size: 16 }))),
                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                    React.createElement("div", { className: "space-y-1" },
                        React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "Target Date"),
                        React.createElement("input", { required: true, type: "date", className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none text-stone-900 font-bold" })),
                    React.createElement("div", { className: "space-y-1" },
                        React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "Target Time"),
                        React.createElement("div", { className: "relative" },
                            React.createElement("select", { className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none text-stone-900 font-bold appearance-none" },
                                React.createElement("option", null, "0800 - 1200"),
                                React.createElement("option", null, "1200 - 1600"),
                                React.createElement("option", null, "1600 - 2000")),
                            React.createElement(ChevronRight, { className: "absolute right-4 top-3.5 text-stone-400 rotate-90", size: 16 })))),
                React.createElement("div", { className: "space-y-1" },
                    React.createElement("label", { className: "text-[10px] font-black uppercase text-stone-500 tracking-widest" }, "SitRep (Situation Report)"),
                    React.createElement("textarea", { rows: 3, className: "w-full px-4 py-3 bg-stone-100 border-2 border-transparent focus:border-amber-500 rounded-lg outline-none text-stone-900 font-medium resize-none", placeholder: "Brief description of the issue..." })),
                React.createElement("button", { disabled: status === 'submitting', type: "submit", className: "w-full bg-green-950 hover:bg-green-900 text-stone-100 font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg disabled:opacity-50 active:scale-[0.98] mt-4 flex justify-center gap-2" }, status === 'submitting' ? React.createElement("span", { className: "animate-pulse" }, "Transmitting...") : (React.createElement(React.Fragment, null,
                    "Confirm Mission ",
                    React.createElement(Send, { size: 18 }))))))));
}
// Winterization tips component.  Renders a list of cold weather
// recommendations and a call‑to‑action card.  Static content is
// identical to the approved source.
function WinterizationTips() {
    const tips = [
        {
            title: 'Disconnect Hose Bibs',
            content: 'Remove all garden hoses from outside faucets. If left connected, water inside the hose can freeze, back up into the pipe inside your wall, and burst it.',
        },
        {
            title: 'Insulate Exposed Pipes',
            content: 'Use foam pipe insulation on any pipes located in unheated areas like basements, attics, and garages. It\'s cheap and effective.',
        },
        {
            title: 'Keep the Heat On',
            content: 'Even if you are going on vacation, do not turn your heat off. Keep it set to at least 55°F (13°C) to prevent freezing.',
        },
        {
            title: 'Open Cabinet Doors',
            content: 'During extreme cold snaps, open kitchen and bathroom cabinet doors to allow warmer room air to circulate around the plumbing.',
        },
        {
            title: 'Locate the Main Shut-off',
            content: 'Know exactly where your main water shut-off valve is. If a pipe bursts, turning this off quickly can save you thousands in damage.',
        },
    ];
    return (React.createElement("div", { className: "max-w-3xl mx-auto mt-6 px-4 pb-12 animate-fadeIn" },
        React.createElement("div", { className: "bg-stone-200 rounded-xl p-6 mb-6 border-b-4 border-green-900 shadow-md" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("div", { className: "p-3 bg-green-950 rounded-lg" },
                    React.createElement(ThermometerSnowflake, { className: "w-8 h-8 text-amber-500" })),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-2xl font-black text-green-950 uppercase tracking-tight leading-none" }, "Winter Ops Guide"),
                    React.createElement("p", { className: "text-stone-600 mt-1 text-sm font-bold uppercase tracking-wider" }, "Cold Weather Protocols")))),
        React.createElement("div", { className: "grid gap-4" }, tips.map((tip, index) => (React.createElement("div", { key: index, className: "bg-stone-200 p-5 rounded-lg shadow-sm hover:bg-white transition-colors group cursor-pointer" },
            React.createElement("div", { className: "flex items-start gap-4" },
                React.createElement("span", { className: "bg-green-950 text-amber-500 text-lg font-black w-8 h-8 flex items-center justify-center rounded shrink-0 mt-0.5" }, index + 1),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg font-black text-green-950 mb-1 uppercase tracking-wide group-hover:text-amber-600 transition-colors" }, tip.title),
                    React.createElement("p", { className: "text-stone-700 leading-snug text-sm font-medium" }, tip.content))))))),
        React.createElement("div", { className: "mt-8 bg-green-950 text-stone-200 p-6 rounded-xl text-center border border-amber-600/30 shadow-xl relative overflow-hidden" },
            React.createElement("div", { className: "absolute top-0 left-0 w-full h-1 bg-amber-500" }),
            React.createElement("h3", { className: "text-xl font-black mb-2 uppercase tracking-wide text-amber-500" }, "Perimeter Check Required?"),
            React.createElement("p", { className: "text-stone-400 mb-6 text-sm font-medium" }, "We offer a complete Winterization Recon for just $99."),
            React.createElement("button", { className: "w-full bg-amber-600 text-green-950 py-3 rounded-lg font-black uppercase tracking-widest hover:bg-amber-500 transition-colors" }, "Book Recon Mission"))));
}
// AI chat component.  Provides a simple messaging interface that
// responds to keywords using the generateAIResponse helper.  Matches
// the approved source code.
function PlumberAI() {
    const [messages, setMessages] = useState([
        {
            sender: 'ai',
            text: "Semper Fi. I'm the Fidelis Automated Assistant. State your plumbing emergency or query.",
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim())
            return;
        const userMsg = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);
        setTimeout(() => {
            const aiResponseText = generateAIResponse(userMsg.text);
            setMessages((prev) => [...prev, { sender: 'ai', text: aiResponseText }]);
            setIsTyping(false);
        }, 1200);
    };
    return (React.createElement("div", { className: "max-w-2xl mx-auto md:mt-8 h-[calc(100vh-140px)] md:h-[600px] flex flex-col bg-stone-200 md:rounded-xl md:shadow-2xl overflow-hidden animate-fadeIn border-x border-stone-300" },
        React.createElement("div", { className: "bg-green-950 p-4 flex items-center gap-3 border-b-4 border-amber-600 shadow-md z-10" },
            React.createElement("div", { className: "bg-green-900 p-2 rounded-full border border-green-800 relative" },
                React.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-green-950" }),
                React.createElement(MessageSquare, { size: 20, className: "text-amber-400" })),
            React.createElement("div", null,
                React.createElement("h2", { className: "font-black text-base uppercase tracking-wide text-stone-200 leading-none" }, "Fidelis AI"),
                React.createElement("p", { className: "text-amber-500/80 text-[10px] font-mono mt-1 tracking-widest" }, "LINK ESTABLISHED \u2022 SECURE"))),
        React.createElement("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-stone-300 scroll-smooth" },
            messages.map((msg, idx) => (React.createElement("div", { key: idx, className: `flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeUp` },
                React.createElement("div", { className: `max-w-[85%] p-3 text-sm md:text-base shadow-sm ${msg.sender === 'user'
                        ? 'bg-amber-600 text-white rounded-2xl rounded-tr-sm'
                        : 'bg-stone-200 text-stone-900 border-l-4 border-green-950 rounded-r-xl rounded-bl-xl'}` }, msg.text)))),
            isTyping && (React.createElement("div", { className: "flex justify-start animate-pulse" },
                React.createElement("div", { className: "bg-stone-200 p-4 rounded-r-xl rounded-bl-xl border-l-4 border-green-950 shadow-sm flex gap-1.5" },
                    React.createElement("div", { className: "w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" }),
                    React.createElement("div", { className: "w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75" }),
                    React.createElement("div", { className: "w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150" })))),
            React.createElement("div", { ref: messagesEndRef })),
        React.createElement("form", { onSubmit: handleSend, className: "p-3 bg-stone-200 border-t border-stone-300 flex gap-2 items-center" },
            React.createElement("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "Enter transmission...", className: "flex-1 px-4 py-3 border-2 border-transparent focus:border-green-900 rounded-full outline-none bg-stone-100 text-stone-900 font-medium shadow-inner" }),
            React.createElement("button", { type: "submit", className: "bg-green-950 text-amber-500 p-3 rounded-full hover:bg-green-900 transition-colors shadow-md active:scale-95" },
                React.createElement(Send, { size: 20, className: "ml-0.5" })))));
}
\n// Mount application to DOM\nconst containerEl = document.getElementById('root');\nif (containerEl) {\n  const root = ReactDOM.createRoot(containerEl);\n  root.render(React.createElement(FidelisApp));\n}\n
