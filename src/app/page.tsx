"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { 
  ShoppingBag, 
  ShieldCheck, 
  BatteryCharging, 
  Star, 
  X, 
  Sparkles,
  Volume2,
  ChevronDown,
  Check,
  Truck
} from "lucide-react";

// خيارات الألوان المتاحة للمنتج
const colors = [
  { id: "amber", name: "ذهبي شامبين", class: "bg-amber-100 border-amber-300", accent: "bg-amber-600", price: 199 },
  { id: "sand", name: "رملي دافئ", class: "bg-stone-200 border-stone-300", accent: "bg-stone-800", price: 199 },
  { id: "coral", name: "مرجاني فاخر", class: "bg-rose-100 border-rose-300", accent: "bg-rose-500", price: 219 },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // استخدام Zustand Store بدلاً من الـ local state للسلة
  const { quantity, increaseQty, decreaseQty, selectedColor, setSelectedColor } = useCartStore();

  const subtotal = selectedColor.price * quantity;
  const shipping = 0;
  const total = subtotal + shipping;

  const faqs = [
    {
      q: "هل تعمل السماعات مع جميع أجهزة iPhone و Android؟",
      a: "نعم، تعمل السماعات ببروتوكول Bluetooth 5.3 المطور وتتوافق فوراً مع كافة الأجهزة الذكية والأجهزة المحمولة."
    },
    {
      q: "كم تستغرق شحنة البطارية بالكامل؟",
      a: "تستغرق الشحنة الكاملة 45 دقيقة فقط وتمنحك 8 ساعات تشغيل متواصل للقطع، و28 ساعة إضافية عبر علبة الشحن."
    },
    {
      q: "ما هي سياسة الضمان والاسترجاع؟",
      a: "نقدم ضماناً ذهبياً لمدة سنتين شاملاً عيوب التصنيع مع إمكانية الاسترجاع أو الاستبدال مجاناً خلال 14 يوماً."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>عرض خاص لفترة محدودة: شحن مجاني وسريع لكافة الطلبات اليوم!</span>
      </div>

      {/* Header / Navbar المطور */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white shadow-md shadow-amber-500/20">
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="text-xl font-extrabold text-stone-900 tracking-tight">
              AuraPods <span className="text-amber-600">Studio</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-600 transition-colors cursor-pointer">المنتج</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-600 transition-colors cursor-pointer">المواصفات</button>
            <button onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-600 transition-colors cursor-pointer">المقارنة</button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-600 transition-colors cursor-pointer">الأسئلة الشائعة</button>
          </nav>

          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold hidden sm:inline">السلة</span>
            {quantity > 0 && (
              <span className="bg-amber-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {quantity}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Preview Card */}
            <div className="relative group flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200/60 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
                
                <div className="absolute top-4 right-4 bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>إصدار الستوديو المطور</span>
                </div>

                <div className="w-48 h-48 rounded-full bg-stone-100 border-4 border-stone-200 flex items-center justify-center relative shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <div className={`w-32 h-32 rounded-full ${selectedColor.id === 'amber' ? 'bg-amber-100 border-amber-300' : selectedColor.id === 'sand' ? 'bg-stone-200 border-stone-300' : 'bg-rose-100 border-rose-300'} border-2 shadow-md flex items-center justify-center transition-all duration-300`}>
                    <Volume2 className="w-12 h-12 text-stone-500" />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <span className="text-xs text-stone-500 font-medium">اللون المختار:</span>
                  <p className="text-sm font-bold text-stone-800 mt-0.5">{selectedColor.name}</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-bold">(4.9 من 5 - أكثر من 2,400 مشتري)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight">
                AuraPods Studio <br />
                <span className="text-amber-600">نقاء وصوت ثلاثي الأبعاد</span>
              </h1>

              <p className="text-stone-600 text-base leading-relaxed font-normal">
                صممت لتعطيك أقصى درجات النقاء في الصوت مع معالج ذكي لعزل الضوضاء وخامات فاخرة تناسب الاستخدام اليومي والرياضة.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-4xl font-extrabold text-stone-900">${selectedColor.price}</span>
                <span className="text-stone-400 line-through text-lg">$249</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  خصم خاص 20%
                </span>
              </div>

              {/* Color Selector */}
              <div className="pt-4 border-t border-stone-200">
                <label className="text-xs font-bold text-stone-700 block mb-3">اختر اللمسة النهائية:</label>
                <div className="flex items-center gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        selectedColor.id === c.id 
                          ? "border-amber-500 bg-amber-50 text-stone-900 shadow-sm" 
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${c.class}`}></span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>إضافة للسلة والطلب الآن</span>
                </button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200 text-center text-xs font-semibold text-stone-600">
                <div className="flex flex-col items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                  <span>ضمان ذهبي سنتين</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Truck className="w-5 h-5 text-amber-600" />
                  <span>توصيل سريع مجاني</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <BatteryCharging className="w-5 h-5 text-amber-600" />
                  <span>36 ساعة بطارية</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-stone-900">مواصفات صممت للمستقبل</h2>
            <p className="mt-3 text-stone-600">كل عنصر في AuraPods Studio تم هندسته بعناية ليمنحك أفضل أداء صوتي.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">إلغاء الضوضاء النشط (ANC)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                ميكروفونات متطورة تقوم بتحليل الضوضاء المحيطة وإلغائها تلقائياً لتحصل على تركيز كامل.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">شحن سريع وطيار</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                10 دقائق شحن تعطيك ساعتين من الاستماع المتواصل، مع دعم الشحن اللاسلكي Qi.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">مقاومة الماء IPX5</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                مقاومة مثالية للتعرق والمطر الخفيف أثناء التمارين الرياضية أو التنقل في الخارج.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 border-t border-stone-200 bg-stone-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900">لماذا AuraPods Studio هي الخيار الأفضل؟</h2>
            <p className="mt-2 text-stone-600 text-sm">مقارنة سريعة بين إصدار الستوديو والسماعات العادية في السوق</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-right text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold">
                <tr>
                  <th className="p-4 sm:p-6">الميزة</th>
                  <th className="p-4 sm:p-6 text-amber-600">AuraPods Studio</th>
                  <th className="p-4 sm:p-6 text-stone-400">السماعات العادية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-4 sm:p-6 font-semibold">عزل الضوضاء الذكي (ANC)</td>
                  <td className="p-4 sm:p-6 text-emerald-600 font-bold flex items-center gap-1"><Check className="w-4 h-4" /> متطور جداً</td>
                  <td className="p-4 sm:p-6 text-stone-400">عادي / غير متوفر</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-semibold">عمر البطارية الكلي</td>
                  <td className="p-4 sm:p-6 text-emerald-600 font-bold">36 ساعة</td>
                  <td className="p-4 sm:p-6 text-stone-400">12 - 18 ساعة</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-semibold">ضمان عيوب التصنيع</td>
                  <td className="p-4 sm:p-6 text-emerald-600 font-bold">سنتين استبدال</td>
                  <td className="p-4 sm:p-6 text-stone-400">6 أشهر فقط</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 border-t border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-stone-900 text-center mb-10">الأسئلة الشائعة</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-stone-200 rounded-2xl bg-stone-50 overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-right font-bold text-stone-900 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-500 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
          ></div>

          <div className="relative w-full max-w-md bg-white border-r border-stone-200 h-full p-6 shadow-2xl flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-stone-900">سلة التسوق</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-stone-400 hover:text-stone-800 p-1 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex gap-4 border-b border-stone-200">
                <div className={`w-20 h-20 rounded-2xl ${selectedColor.id === 'amber' ? 'bg-amber-100 border-amber-300' : selectedColor.id === 'sand' ? 'bg-stone-200 border-stone-300' : 'bg-rose-100 border-rose-300'} border flex items-center justify-center flex-shrink-0`}>
                  <Volume2 className="w-8 h-8 text-stone-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-bold text-stone-900">AuraPods Studio</h4>
                  <p className="text-xs text-stone-500 font-medium">اللون: {selectedColor.name}</p>
                  <div className="text-sm font-bold text-amber-600 pt-1">${selectedColor.price}</div>
                  
                  {/* أزرار زيادة ونقصان الكمية من الـ Store */}
                  <div className="flex items-center gap-3 pt-2">
                    <button onClick={decreaseQty} className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 cursor-pointer font-bold">-</button>
                    <span className="text-sm font-bold">{quantity}</span>
                    <button onClick={increaseQty} className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 cursor-pointer font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-4">
              <div className="space-y-2 text-sm text-stone-600 font-medium">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="text-stone-900 font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>الشحن:</span>
                  <span className="text-emerald-600 font-bold">مجاناً</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                  <span>الإجمالي:</span>
                  <span className="text-amber-600">${total}</span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-amber-600/20 transition-all text-center block cursor-pointer"
              >
                إتمام الطلب الشراء ➔
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 text-center text-xs font-semibold text-stone-500">
        <p>© 2026 AuraPods Studio. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}