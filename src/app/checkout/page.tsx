"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  Volume2,
  Lock
} from "lucide-react";

export default function CheckoutPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
  
  // جلب البيانات من الـ Zustand Store
  const { quantity, selectedColor } = useCartStore();
  const total = selectedColor.price * quantity;

  // بيانات الشحن والتواصل
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-3xl p-8 text-center shadow-xl space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-stone-900">تم استلام طلبك بنجاح!</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            شكراً لك <span className="font-bold text-stone-800">{formData.fullName}</span>. تم تأكيد طلبك ورقم الشحنة هو <span className="font-mono font-bold text-amber-600">#AP-2026-892</span>. سنقوم بالتواصل معك قريباً لتأكيد الشحن.
          </p>
          <div className="pt-4">
            <Link 
              href="/" 
              className="inline-block w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-amber-600/20 transition-all text-sm"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
      
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4" />
            <span>العودة للمتجر</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white shadow-sm">
              <Volume2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-lg font-extrabold text-stone-900">AuraPods <span className="text-amber-600">Studio</span></span>
          </div>

          <div className="flex items-center gap-1 text-xs text-stone-500 font-bold">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>دفع آمن 100%</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h1 className="text-3xl font-black text-stone-900 mb-8">إتمام عملية الشراء</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Info */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-600" />
                  <span>معلومات الشحن والتوصيل</span>
                </h2>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">الاسم الكامل *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك الثلاثي"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm transition-all bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">البريد الإلكتروني *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm transition-all bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">رقم الهاتف *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="010XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm transition-all bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-stone-700 mb-1">العنوان التفصيلي *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="اسم الشارع، رقم المبنى، الشقة"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm transition-all bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">المدينة *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="القاهرة / الرياض..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm transition-all bg-stone-50/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  <span>طريقة الدفع</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      paymentMethod === "cod" 
                        ? "border-amber-500 bg-amber-50/50 text-stone-900" 
                        : "border-stone-200 bg-stone-50/50 text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">الدفع عند الاستلام</div>
                      <div className="text-xs text-stone-500">ادفع نقداً عند وصول الشحنة</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === "cod" ? "border-amber-600 bg-amber-600" : "border-stone-300"}`}></div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      paymentMethod === "card" 
                        ? "border-amber-500 bg-amber-50/50 text-stone-900" 
                        : "border-stone-200 bg-stone-50/50 text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">بطاقة ائتمان / مدى</div>
                      <div className="text-xs text-stone-500">Visa, Mastercard, Mada</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === "card" ? "border-amber-600 bg-amber-600" : "border-stone-300"}`}></div>
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-amber-600/25 transition-all text-base text-center"
              >
                تأكيد طلب الشراء (${total})
              </button>
            </form>
          </div>

          {/* Right Column: Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm sticky top-24 space-y-6">
              <h3 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-4">ملخص الطلب</h3>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-7 h-7 text-stone-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900">AuraPods Studio</h4>
                  <p className="text-xs text-stone-500">اللون: {selectedColor.name}</p>
                  <p className="text-xs font-bold text-amber-600 mt-1">الكمية: {quantity}</p>
                </div>
                <div className="mr-auto font-bold text-stone-900 text-sm">${selectedColor.price * quantity}</div>
              </div>

              <div className="border-t border-stone-200 pt-4 space-y-2 text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="font-bold text-stone-900">${total}</span>
                </div>
                <div className="flex justify-between">
                  <span>رسوم الشحن:</span>
                  <span className="font-bold text-emerald-600">مجاناً</span>
                </div>
                <div className="flex justify-between text-base font-black text-stone-900 pt-3 border-t border-stone-200">
                  <span>الإجمالي الكلي:</span>
                  <span className="text-amber-600">${total}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3 text-xs text-stone-600">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>طلبك محمي بضمان الاسترجاع والتأمين الكامل خلال الشحن.</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}