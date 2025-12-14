import { Gamepad2, Shield, CreditCard, Headphones } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Trust badges */}
      <div className="border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">تداول آمن</h4>
              <p className="mt-1 text-sm text-muted-foreground">معاملات آمنة 100%</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">دفع سهل</h4>
              <p className="mt-1 text-sm text-muted-foreground">خيارات دفع متعددة</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">دعم ٢٤/٧</h4>
              <p className="mt-1 text-sm text-muted-foreground">دائماً هنا للمساعدة</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">حسابات موثقة</h4>
              <p className="mt-1 text-sm text-muted-foreground">جميع الحسابات تم التحقق منها</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Gamepad2 className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-heading text-xl font-bold">
                  سوق<span className="text-primary">eFootball</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                السوق الموثوق لحسابات eFootball المميزة. اشترِ وبِع بثقة.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold">السوق</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">تصفح الحسابات</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">العروض المميزة</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">بيع حساب</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">الأسعار</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">الدعم</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">مركز المساعدة</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">اتصل بنا</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">الأسئلة الشائعة</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">نصائح الأمان</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">قانوني</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">شروط الخدمة</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">سياسة الخصوصية</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">سياسة الاسترداد</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">سياسة ملفات تعريف الارتباط</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © ٢٠٢٤ سوق eFootball. جميع الحقوق محفوظة. غير مرتبط بشركة كونامي.
        </div>
      </div>
    </footer>
  );
}