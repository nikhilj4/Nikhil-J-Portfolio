"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Video, ChevronLeft, ChevronRight, Check } from "lucide-react";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const TIME_SLOTS = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = "calendar" | "form" | "confirm";

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("calendar");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const close = useCallback(() => {
    onClose();
    setTimeout(() => {
      setStep("calendar");
      setSelectedDate(null);
      setSelectedTime(null);
      setForm({ name: "", email: "", message: "" });
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelectedDate(null);
    setSelectedTime(null);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Meeting Request: ${MONTH_NAMES[month]} ${selectedDate}, ${year} at ${selectedTime} IST`
    );
    const body = encodeURIComponent(
      `Hi Nikhil,\n\nName: ${form.name}\nEmail: ${form.email}\nPreferred Time: ${MONTH_NAMES[month]} ${selectedDate}, ${year} at ${selectedTime} IST\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:nikhiljram4@gmail.com?subject=${subject}&body=${body}`);
    setStep("confirm");
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const isToday = (d: number) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const isPast = (d: number) => new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-[#E8DDD0]"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-[#8B7355] hover:text-[#1C1410] hover:bg-[#F5EDE0] transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Left panel — info */}
              <div className="sm:w-56 bg-[#FAF7F2] p-6 border-b sm:border-b-0 sm:border-r border-[#E8DDD0] flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#C4943A] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm font-['Space_Grotesk']">NJ</span>
                </div>
                <p className="text-xs text-[#8B7355] font-medium mb-0.5">Nikhil J</p>
                <h3 className="font-bold text-[#1C1410] font-['Space_Grotesk'] text-lg leading-tight mb-4">
                  30 Min Intro Call
                </h3>
                <div className="space-y-2.5 text-sm text-[#5C4A32]">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#C4943A]" />
                    30 minutes
                  </div>
                  <div className="flex items-center gap-2">
                    <Video size={14} className="text-[#C4943A]" />
                    Video / Phone call
                  </div>
                </div>
                {selectedDate && selectedTime && step !== "confirm" && (
                  <div className="mt-4 pt-4 border-t border-[#E8DDD0] text-xs text-[#8B7355]">
                    <div className="font-semibold text-[#1C1410]">
                      {MONTH_NAMES[month]} {selectedDate}, {year}
                    </div>
                    <div>{selectedTime} IST</div>
                  </div>
                )}
              </div>

              {/* Right panel — steps */}
              <div className="flex-1 p-6">
                {step === "calendar" && (
                  <div>
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-[#1C1410] font-['Space_Grotesk']">
                        {MONTH_NAMES[month]} {year}
                      </h4>
                      <div className="flex gap-1">
                        <button onClick={prevMonth} className="p-1.5 rounded-lg hover:bg-[#F5EDE0] text-[#8B7355] hover:text-[#C4943A] transition-colors">
                          <ChevronLeft size={16} />
                        </button>
                        <button onClick={nextMonth} className="p-1.5 rounded-lg hover:bg-[#F5EDE0] text-[#8B7355] hover:text-[#C4943A] transition-colors">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-1">
                      {DAY_NAMES.map(d => (
                        <div key={d} className="text-center text-[10px] font-semibold text-[#8B7355] py-1">{d}</div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-y-1 mb-4">
                      {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                      {Array(daysInMonth).fill(null).map((_, i) => {
                        const d = i + 1;
                        const past = isPast(d);
                        const sel = selectedDate === d;
                        const tod = isToday(d);
                        return (
                          <button
                            key={d}
                            disabled={past}
                            onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                            className={`
                              h-8 w-8 mx-auto rounded-full text-sm font-medium transition-all
                              ${past ? "text-[#D4C4B0] cursor-not-allowed" : "hover:bg-[#F5EDE0] cursor-pointer"}
                              ${sel ? "bg-[#C4943A] text-white hover:bg-[#C4943A]" : ""}
                              ${tod && !sel ? "border border-[#C4943A] text-[#C4943A]" : ""}
                              ${!sel && !tod && !past ? "text-[#1C1410]" : ""}
                            `}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time slots */}
                    {selectedDate && (
                      <div>
                        <p className="text-xs font-semibold text-[#8B7355] uppercase tracking-wide mb-2">
                          Available Times — IST
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {TIME_SLOTS.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                                selectedTime === t
                                  ? "bg-[#C4943A] text-white border-[#C4943A]"
                                  : "border-[#E8DDD0] text-[#5C4A32] hover:border-[#C4943A] hover:text-[#C4943A]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedDate && selectedTime && (
                      <button
                        onClick={() => setStep("form")}
                        className="mt-4 w-full py-2.5 bg-[#C4943A] text-white font-semibold rounded-xl hover:bg-[#A07A2E] transition-colors"
                      >
                        Next →
                      </button>
                    )}
                  </div>
                )}

                {step === "form" && (
                  <div>
                    <button
                      onClick={() => setStep("calendar")}
                      className="flex items-center gap-1 text-sm text-[#8B7355] hover:text-[#C4943A] transition-colors mb-4"
                    >
                      <ChevronLeft size={15} /> Back
                    </button>
                    <h4 className="font-semibold text-[#1C1410] font-['Space_Grotesk'] mb-4">Enter your details</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-[#8B7355] block mb-1">Name *</label>
                        <input
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Your full name"
                          className="w-full px-3 py-2.5 rounded-xl border border-[#E8DDD0] text-sm text-[#1C1410] focus:outline-none focus:border-[#C4943A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#8B7355] block mb-1">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="w-full px-3 py-2.5 rounded-xl border border-[#E8DDD0] text-sm text-[#1C1410] focus:outline-none focus:border-[#C4943A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#8B7355] block mb-1">What would you like to discuss?</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          rows={3}
                          placeholder="Brief description of your project or query..."
                          className="w-full px-3 py-2.5 rounded-xl border border-[#E8DDD0] text-sm text-[#1C1410] focus:outline-none focus:border-[#C4943A] transition-colors resize-none"
                        />
                      </div>
                      <button
                        disabled={!form.name || !form.email}
                        onClick={handleSubmit}
                        className="w-full py-2.5 bg-[#C4943A] text-white font-semibold rounded-xl hover:bg-[#A07A2E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Schedule Event
                      </button>
                    </div>
                  </div>
                )}

                {step === "confirm" && (
                  <div className="flex flex-col items-center text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check size={28} className="text-green-600" />
                    </div>
                    <h4 className="font-bold text-[#1C1410] font-['Space_Grotesk'] text-xl mb-2">
                      Request Sent!
                    </h4>
                    <p className="text-sm text-[#5C4A32] mb-1">
                      Your meeting request has opened in your email client.
                    </p>
                    <p className="text-sm text-[#8B7355]">
                      Nikhil will confirm your slot at{" "}
                      <span className="text-[#C4943A] font-medium">{MONTH_NAMES[month]} {selectedDate}, {year}</span>
                      {" "}at{" "}
                      <span className="text-[#C4943A] font-medium">{selectedTime} IST</span>
                    </p>
                    <button
                      onClick={close}
                      className="mt-6 px-6 py-2 border border-[#E8DDD0] text-[#8B7355] text-sm rounded-xl hover:border-[#C4943A] hover:text-[#C4943A] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
