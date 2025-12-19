# 🎨 دليل الصور الافتراضية للموقع

## نظرة عامة
نظراً لعدم توفر صور حقيقية حالياً، تم إنشاء نظام احترافي من **التدرجات اللونية (Gradients)** كبديل مؤقت يعطي مظهراً عصرياً وجذاباً.

---

## 📸 الصور المطلوبة للموقع

### **1. Hero Section (الصفحة الرئيسية)**
- **الاسم**: `hero-background.jpg`
- **المقاس**: 1920x1080px
- **الوصف**: موقع بناء حديث مع رافعات ومباني تحت الإنشاء
- **البديل الحالي**: تدرج أزرق داكن → أخضر متحرك

### **2. قسم "من نحن"**
- **الاسم**: `about-company.jpg`
- **المقاس**: 800x600px
- **الوصف**: فريق عمل سعودي محترف في اجتماع
- **البديل الحالي**: تدرج أزرق → أخضر → ذهبي

### **3. المشاريع (6 صور)**

#### مشروع 1: مجمع المكاتب الإدارية
- **الاسم**: `project-office-building.jpg`
- **المقاس**: 800x600px
- **الوصف**: مبنى مكاتب زجاجي حديث
- **البديل**: تدرج بنفسجي (#667eea → #764ba2)

#### مشروع 2: صيانة مستشفى
- **الاسم**: `project-hospital.jpg`
- **المقاس**: 800x600px
- **الوصف**: مستشفى حديث مع معدات طبية
- **البديل**: تدرج وردي (#f093fb → #f5576c)

#### مشروع 3: فلل النخيل السكنية
- **الاسم**: `project-villas.jpg`
- **المقاس**: 800x600px
- **الوصف**: فلل فاخرة مع حدائق
- **البديل**: تدرج أزرق فاتح (#4facfe → #00f2fe)

#### مشروع 4: سكن عمال نيوم
- **الاسم**: `project-prefab-housing.jpg`
- **المقاس**: 800x600px
- **الوصف**: بيوت جاهزة حديثة
- **البديل**: تدرج أخضر (#43e97b → #38f9d7)

#### مشروع 5: البيوت الزراعية
- **الاسم**: `project-greenhouse.jpg`
- **المقاس**: 800x600px
- **الوصف**: بيوت محمية زراعية
- **البديل**: تدرج وردي-أصفر (#fa709a → #fee140)

#### مشروع 6: مشروع الطرق
- **الاسم**: `project-roads.jpg`
- **المقاس**: 800x600px
- **الوصف**: طرق وجسور حديثة
- **البديل**: تدرج سماوي-بنفسجي (#30cfd0 → #330867)

### **4. الخدمات (4 صور)**

#### خدمة 1: المقاولات العامة
- **الاسم**: `service-contracting.jpg`
- **المقاس**: 600x400px
- **الوصف**: موقع بناء مع معدات ثقيلة
- **الأيقونة**: 🏗️

#### خدمة 2: التشغيل والصيانة
- **الاسم**: `service-maintenance.jpg`
- **المقاس**: 600x400px
- **الوصف**: فنيون يعملون على صيانة
- **الأيقونة**: ⚙️

#### خدمة 3: التطوير العقاري
- **الاسم**: `service-realestate.jpg`
- **المقاس**: 600x400px
- **الوصف**: مشروع عقاري فاخر
- **الأيقونة**: 🏢

#### خدمة 4: البيوت الجاهزة
- **الاسم**: `service-prefab.jpg`
- **المقاس**: 600x400px
- **الوصف**: بيوت جاهزة قيد التركيب
- **الأيقونة**: 🏡

---

## 🎨 مواقع للحصول على صور مجانية

### **1. Unsplash** (مجاني - جودة عالية)
- https://unsplash.com/s/photos/construction
- https://unsplash.com/s/photos/architecture
- https://unsplash.com/s/photos/building

### **2. Pexels** (مجاني)
- https://www.pexels.com/search/construction/
- https://www.pexels.com/search/architecture/

### **3. Pixabay** (مجاني)
- https://pixabay.com/images/search/construction/

### **4. Freepik** (مجاني ومدفوع)
- https://www.freepik.com/search?format=search&query=construction

---

## 📁 هيكل المجلدات المقترح

```
assets/
├── images/
│   ├── hero/
│   │   └── hero-background.jpg
│   ├── about/
│   │   └── about-company.jpg
│   ├── projects/
│   │   ├── project-office-building.jpg
│   │   ├── project-hospital.jpg
│   │   ├── project-villas.jpg
│   │   ├── project-prefab-housing.jpg
│   │   ├── project-greenhouse.jpg
│   │   └── project-roads.jpg
│   └── services/
│       ├── service-contracting.jpg
│       ├── service-maintenance.jpg
│       ├── service-realestate.jpg
│       └── service-prefab.jpg
```

---

## 🔧 كيفية استبدال الصور

### **الطريقة 1: تحديث CSS**
```css
.hero-background {
    background-image: url('../assets/images/hero/hero-background.jpg');
    background-size: cover;
    background-position: center;
}
```

### **الطريقة 2: تحديث HTML**
```html
<div class="project-image">
    <img src="assets/images/projects/project-office-building.jpg" 
         alt="مجمع المكاتب الإدارية"
         loading="lazy">
</div>
```

---

## ✨ البدائل الحالية (Gradients)

تم إنشاء ملف `image-placeholders.css` يحتوي على:

- ✅ تدرجات لونية احترافية
- ✅ تأثيرات حركية (Animated Gradients)
- ✅ أنماط هندسية (Patterns)
- ✅ تأثيرات Shimmer عند Hover
- ✅ أيقونات تعبيرية

**لاستخدامها:**
```html
<link rel="stylesheet" href="css/image-placeholders.css">
```

---

## 🎯 الأولويات

### **عاجل (Priority 1)**
1. صورة Hero Background
2. صور المشاريع (3 على الأقل)

### **مهم (Priority 2)**
3. صورة قسم "من نحن"
4. صور الخدمات

### **إضافي (Priority 3)**
5. شعارات الشركاء
6. صور الفريق
7. شهادات الجودة

---

## 💡 نصائح للصور

1. **الجودة**: استخدم صور عالية الدقة (HD)
2. **التناسق**: حافظ على نفس الأسلوب
3. **الألوان**: تناسب مع لوحة ألوان الموقع
4. **الضغط**: استخدم TinyPNG لتقليل الحجم
5. **التنسيق**: WebP للويب الحديث

---

## 📊 مقاسات الصور الموصى بها

| الموقع | المقاس | النسبة |
|--------|--------|--------|
| Hero | 1920x1080 | 16:9 |
| Projects | 800x600 | 4:3 |
| Services | 600x400 | 3:2 |
| About | 800x600 | 4:3 |
| Thumbnails | 400x300 | 4:3 |

---

**ملاحظة**: البدائل الحالية (Gradients) تعطي مظهراً احترافياً مؤقتاً حتى يتم الحصول على الصور الحقيقية.
