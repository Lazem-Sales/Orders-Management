<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>لازم — نظام إدارة الطلبات</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="hdr">
  <div class="hdr-inner">
    <img id="hdrLogo" style="width:46px;height:46px;border-radius:12px;object-fit:cover;flex-shrink:0;">
    <div class="hdr-txt">
      <h1>لازم — إدارة الطلبات</h1>
      <p>Lazem Medical Services</p>
    </div>
    <div class="hdr-right">
      <span class="hdr-user" id="hdrUser" onclick="logout()">👤 تسجيل خروج</span>
      <span class="hdr-count" id="hdrCount">0 طلب</span>
      <button class="hdr-new-btn" onclick="showPage('form')">+ طلب جديد</button>
    </div>
  </div>
  <div class="tabs-bar">
    <div class="tabs-inner">
      <button class="tab active" onclick="showPage('dashboard')" id="tab-dashboard">🏠 الرئيسية</button>
      <button class="tab" onclick="showPage('form')" id="tab-form">➕ طلب جديد</button>
    </div>
  </div>
</header>

<main class="main">

<!-- LOGIN -->
<div class="page active" id="page-login">
  <div class="login-wrap">
    <div class="login-card">
      <img id="loginLogo" src="data:image/png;base64,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" style="width:90px;height:90px;border-radius:16px;object-fit:cover;margin:0 auto 20px;display:block;">
      <div class="login-title">مرحباً بك في لازم</div>
      <div class="login-sub">اختر حسابك للمتابعة</div>
      <div class="user-btns" id="userBtns"></div>
    </div>
  </div>
</div>

<!-- DASHBOARD -->
<div class="page" id="page-dashboard">
    <div class="stats-row">
    <div class="stat-card"><div class="stat-icon-wrap">📋</div><div><div class="stat-num" id="st-all">0</div><div class="stat-lbl">إجمالي الطلبات</div></div></div>
    <div class="stat-card"><div class="stat-icon-wrap">🎪</div><div><div class="stat-num" id="st-events">0</div><div class="stat-lbl">فعاليات</div></div></div>
    <div class="stat-card"><div class="stat-icon-wrap">🏗️</div><div><div class="stat-num" id="st-projects">0</div><div class="stat-lbl">مشاريع</div></div></div>
    <div class="stat-card"><div class="stat-icon-wrap">📚</div><div><div class="stat-num" id="st-training">0</div><div class="stat-lbl">دورات</div></div></div>
  </div>
    <div class="stat-card"><div class="stat-icon">🎪</div><div class="stat-num" id="st-events">0</div><div class="stat-lbl">فعاليات</div></div>
    <div class="stat-card"><div class="stat-icon">🏗️</div><div class="stat-num" id="st-projects">0</div><div class="stat-lbl">مشاريع</div></div>
    <div class="stat-card"><div class="stat-icon">📚</div><div class="stat-num" id="st-training">0</div><div class="stat-lbl">دورات</div></div>
  </div>
  <div class="orders-header">
    <div class="orders-title">الطلبات المسجّلة</div>
    <input type="text" class="search-input" id="searchInput" placeholder="🔍 بحث..." oninput="renderOrders()">
    <select class="filter-sel" id="filterSvc" onchange="renderOrders()">
      <option value="">كل الخدمات</option>
      <option value="contract">عقود النقل</option>
      <option value="events">فعاليات</option>
      <option value="projects">مشاريع</option>
      <option value="training">دورات تدريبية</option>
    </select>
  </div>
  <div class="orders-list" id="ordersList"></div>
</div>

<!-- FORM -->
<div class="page" id="page-form">
  <div class="form-wrap">
    <div class="svc-pick-title">
      <h2>طلب جديد</h2>
      <p>اختر نوع الخدمة أولاً</p>
    </div>
    <div class="svcs-grid-uniform" style="margin-bottom:24px;">
      <div class="svc-btn" onclick="pickSvc('contract',this)"><div class="si">📋</div><div class="st">عقود النقل</div><div class="sd">6 شهور أو سنة</div></div>
      <div class="svc-btn" onclick="pickSvc('events',this)"><div class="si">🎪</div><div class="st">تغطية الفعاليات</div><div class="sd">مناسبات وفعاليات</div></div>
      <div class="svc-btn" onclick="pickSvc('projects',this)"><div class="si">🏗️</div><div class="st">تغطية المشاريع</div><div class="sd">تشغيلي وصناعي</div></div>
      <div class="svc-btn" onclick="pickSvc('training',this)"><div class="si">📚</div><div class="st">الدورات التدريبية</div><div class="sd">إسعافات وسلامة</div></div>
    </div>

    <!-- معلومات العميل -->
    <div class="form-section" id="sec-client">
      <div class="fs-title">معلومات العميل</div>
      <div class="g2">
        <div class="fld s2"><label>اسم العميل / الجهة <span class="req">*</span></label><input type="text" id="f-client-name" placeholder="اسم الشخص أو الشركة أو الجهة"></div>
        <div class="fld s2"><label>ملاحظات عامة</label><textarea id="f-client-notes" placeholder="أي ملاحظات إضافية..."></textarea></div>
      </div>
    </div>

    <!-- عقود النقل -->
    <div class="form-section" id="sec-contract">
      <div class="fs-title">📋 تفاصيل العقد</div>
      <div class="alert info">📌 العقود في الرياض فقط — من غير عقد: 1,150 ريال/رحلة</div>
      <div class="g2">
        <div class="fld"><label>مدة العقد <span class="req">*</span></label><div class="ch" id="c-dur"><button class="cb" onclick="pick1('c-dur',this,'t')">6 شهور</button><button class="cb" onclick="pick1('c-dur',this,'t')">سنة كاملة</button></div></div>
        <div class="fld"><label>المدينة</label><div class="ch" id="c-city"><button class="cb" onclick="pick1('c-city',this,'g')">الرياض ✓</button><button class="cb" onclick="pick1('c-city',this,'r')">خارج الرياض ✗</button></div></div>
        <div class="fld s2"><label>اسم الشركة / الجهة</label><input type="text" id="c-company" placeholder="اسم الجهة"></div>
      </div>
    </div>

    <!-- الفعاليات -->
    <div class="form-section" id="sec-events">
      <div class="fs-title">🎪 تفاصيل الفعالية</div>

      <div class="fld" style="margin-bottom:14px;">
        <label>مستوى الخدمة المطلوبة <span class="req">*</span></label>
        <div class="level-row">
          <div class="level-card" id="ev-lc-bls" onclick="setEvLevel('bls')">
            <div class="lc-icon">🟢</div>
            <div class="lc-title">BLS</div>
            <div class="lc-desc">دعم أساسي</div>
          </div>
          <div class="level-card" id="ev-lc-als" onclick="setEvLevel('als')">
            <div class="lc-icon">🔴</div>
            <div class="lc-title">ALS</div>
            <div class="lc-desc">دعم متقدم</div>
          </div>
        </div>
      </div>

      <div class="g2">
        <div class="fld"><label>عدد المسعفين <span class="req">*</span></label><input type="number" id="e-paramedics" placeholder="مثال: 4" min="0"></div>
        <div class="fld"><label>عدد سيارات الإسعاف <span class="req">*</span></label><input type="number" id="e-ambulances" placeholder="مثال: 2" min="0"></div>
        <div class="fld"><label>عدد الحضور المتوقع</label><input type="number" id="e-attendees" placeholder="مثال: 500"></div>
        <div class="fld"><label>عدد الأيام <span class="req">*</span></label><input type="number" id="e-days" placeholder="أيام" min="1" oninput="chkEvAccom()"></div>
        <div class="fld"><label>ساعات يومياً</label><input type="number" id="e-hours" placeholder="ساعة" min="1" max="24"></div>
        <div class="fld"><label>تاريخ البداية <span class="req">*</span></label><input type="datetime-local" id="e-start"></div>
        <div class="fld"><label>المدن <span class="note">(اختر ما ينطبق)</span></label>
          <div class="cities-wrap" id="e-cities">
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">الرياض</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">جدة</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">مكة المكرمة</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">المدينة المنورة</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">الدمام</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">الخبر</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">الأحساء</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">تبوك</button>
            <button class="city-cb" onclick="toggleCity(this,'e-cities')">أبها</button>
            <button class="city-cb city-other" onclick="toggleCity(this,'e-cities')">أخرى</button>
          </div>
          <input type="text" id="e-cities-other" class="city-other-input" placeholder="اكتب اسم المدينة..." style="display:none;margin-top:8px;">
        </div>
        <div class="fld s2"><label>موقع الفعالية</label><input type="text" id="e-loc" placeholder="اسم المكان أو الرابط"></div>
        <div id="e-accom-wrap" class="cond s2">
          <div class="fld"><label>🏨 السكن (فعالية خارج الرياض أكثر من أسبوعين)</label><div class="ch" id="e-accom"><button class="cb" onclick="pick1('e-accom',this,'g')">على الجهة المنظِّمة</button><button class="cb" onclick="pick1('e-accom',this,'a')">على لازم</button></div></div>
        </div>
      </div>
    </div>

    <!-- المشاريع -->
    <div class="form-section" id="sec-projects">
      <div class="fs-title">🏗️ تفاصيل المشروع</div>

      <div class="fld" style="margin-bottom:14px;">
        <label>مستوى الخدمة المطلوبة <span class="req">*</span></label>
        <div class="level-row">
          <div class="level-card" id="pr-lc-bls" onclick="setPrLevel('bls')">
            <div class="lc-icon">🟢</div>
            <div class="lc-title">BLS</div>
            <div class="lc-desc">دعم أساسي</div>
          </div>
          <div class="level-card" id="pr-lc-als" onclick="setPrLevel('als')">
            <div class="lc-icon">🔴</div>
            <div class="lc-title">ALS</div>
            <div class="lc-desc">دعم متقدم</div>
          </div>
        </div>
      </div>

      <div class="g2">
        <div class="fld"><label>طبيعة المشروع <span class="req">*</span></label><div class="ch" id="p-type"><button class="cb" onclick="pick1('p-type',this,'t')">تشغيلي</button><button class="cb" onclick="pick1('p-type',this,'t')">صناعي</button><button class="cb" onclick="pick1('p-type',this,'t')">إنشائي</button><button class="cb" onclick="pick1('p-type',this,'t')">فعاليات</button></div></div>
        <div class="fld"><label>نوع الأيام</label><div class="ch" id="p-dtype"><button class="cb" onclick="pick1('p-dtype',this,'t')">متواصلة</button><button class="cb" onclick="pick1('p-dtype',this,'t')">متقطعة</button></div></div>
        <div class="fld"><label>ساعات العمل اليومية</label><input type="number" id="p-hours" placeholder="ساعة" min="1"></div>
        <div class="fld"><label>أيام العمل بالأسبوع</label><input type="number" id="p-dweek" placeholder="أيام" min="1" max="7"></div>
        <div class="fld"><label>المدة الزمنية</label><input type="text" id="p-dur" placeholder="مثال: 3 أشهر"></div>
        <div class="fld"><label>تاريخ البداية</label><input type="date" id="p-start"></div>
        <div class="fld s2"><label>المدن <span class="note">(اختر ما ينطبق)</span></label>
          <div class="cities-wrap" id="p-cities">
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">الرياض</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">جدة</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">مكة المكرمة</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">المدينة المنورة</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">الدمام</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">الخبر</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">الأحساء</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">تبوك</button>
            <button class="city-cb" onclick="toggleCity(this,'p-cities')">أبها</button>
            <button class="city-cb city-other" onclick="toggleCity(this,'p-cities')">أخرى</button>
          </div>
          <input type="text" id="p-cities-other" class="city-other-input" placeholder="اكتب اسم المدينة..." style="display:none;margin-top:8px;">
        </div>
        <div class="fld s2"><label>نوع الخدمة <span class="note">(أكثر من واحد)</span></label><div class="ch"><button class="cb multi" onclick="toggleMulti(this)">🚑 إسعاف</button><button class="cb multi" onclick="toggleMulti(this)">🏥 عيادة</button><button class="cb multi" onclick="toggleMulti(this)">🏃 فرقة راجلة</button><button class="cb multi" onclick="toggleMulti(this)">⛳ عربة قولف</button></div></div>
        <div class="fld"><label>السكن والإعاشة</label><div class="ch" id="p-accom"><button class="cb" onclick="pick1('p-accom',this,'g')">متوفر من الجهة</button><button class="cb" onclick="pick1('p-accom',this,'a')">غير متوفر</button></div></div>
        <div class="fld"><label>عدد المسعفين</label><input type="number" id="p-paramedics" placeholder="مثال: 4" min="0"></div>
        <div class="fld"><label>عدد سيارات الإسعاف</label><input type="number" id="p-ambulances" placeholder="مثال: 2" min="0"></div>
      </div>
    </div>

    <!-- الدورات -->
    <div class="form-section" id="sec-training">
      <div class="fs-title">📚 تفاصيل الدورة</div>
      <div class="g2">
        <div class="fld s2"><label>مكان الدورة</label><div class="ch" id="tr-loc"><button class="cb" onclick="pick1('tr-loc',this,'t');document.getElementById('tr-city-wrap').style.display='none'">داخل الرياض</button><button class="cb" onclick="pick1('tr-loc',this,'n');document.getElementById('tr-city-wrap').style.display='block'">خارج الرياض</button></div><div id="tr-city-wrap" style="display:none;margin-top:8px;"><input type="text" id="tr-city" class="city-other-input" placeholder="اكتب اسم المدينة..."></div></div>
        <div class="fld"><label>مقر التدريب</label><div class="ch" id="tr-venue"><button class="cb" onclick="pick1('tr-venue',this,'t')">من جهة الشركة</button><button class="cb" onclick="pick1('tr-venue',this,'a')">نحن نوفره</button></div></div>
        <div class="fld"><label>نوع الاعتماد</label><div class="ch" id="tr-cert"><button class="cb" onclick="pick1('tr-cert',this,'t')">محلي</button><button class="cb" onclick="pick1('tr-cert',this,'n')">دولي</button></div></div>
        <div class="fld"><label>اللغة</label><div class="ch" id="tr-lang"><button class="cb" onclick="pick1('tr-lang',this,'t')">عربي</button><button class="cb" onclick="pick1('tr-lang',this,'t')">English</button><button class="cb" onclick="pick1('tr-lang',this,'t')">Urdu</button></div></div>
        <div class="fld s2"><label>عدد المتدربين <span class="note">الحد الأقصى 20 لكل جلسة</span></label><input type="number" id="tr-count" placeholder="مثال: 15" min="1" oninput="chkTrainees()"><div id="tr-note" style="display:none;font-size:12px;color:var(--amber);margin-top:4px;font-weight:600;"></div></div>
        <div class="fld s2"><label>الدورات المطلوبة</label>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;font-weight:500;color:var(--text);"><input type="checkbox" id="crs-aware" style="width:16px;height:16px;accent-color:var(--teal);"> 💡 دورة توعية بالإسعافات الأولية (4 ساعات)</label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;font-weight:500;color:var(--text);"><input type="checkbox" id="crs-fa" style="width:16px;height:16px;accent-color:var(--teal);"> 🩹 الإسعافات الأولية (7 ساعات)</label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;font-weight:500;color:var(--text);"><input type="checkbox" id="crs-fire" style="width:16px;height:16px;accent-color:var(--teal);"> 🔥 السلامة من الحرائق (6 ساعات)</label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;font-weight:500;color:var(--text);"><input type="checkbox" id="crs-ohs" style="width:16px;height:16px;accent-color:var(--teal);"> ⛑️ الصحة والسلامة المهنية (6 ساعات)</label>
          </div>
        </div>
        <div class="fld s2"><label>اسم الجهة</label><input type="text" id="tr-company" placeholder="اسم الشركة أو الجهة"></div>
      </div>
    </div>

    <div id="submit-wrap" style="display:none;">
      <button class="submit-btn" onclick="saveOrder()">💾 حفظ الطلب في السجل</button>
    </div>
  </div>
</div>

</main>

<!-- DETAIL MODAL -->
<div class="overlay" id="detailOverlay">
  <div class="modal">
    <div class="modal-hdr">
      <div class="modal-hdr-icon" id="dIcon"></div>
      <div class="modal-hdr-info"><h2 id="dName"></h2><p id="dMeta"></p></div>
      <button class="modal-close" onclick="closeDetail()">✕</button>
    </div>
    <div class="modal-body">
      <div class="detail-rows" id="dRows"></div>

      <!-- سعر نهائي للفريق -->
      <div id="teamPriceSection" style="display:none;margin-top:16px;">
        <div class="team-price-banner" id="teamPriceBanner"></div>
      </div>

      <!-- تسعيرة المدير -->
      <div id="adminPricingSection" style="display:none;margin-top:16px;">
        <div class="pricing-block">
          <div class="pricing-title">💰 التسعيرة</div>
          <div id="pricingDisplay" style="display:none;" class="pricing-value-wrap">
            <span class="pricing-value" id="pricingValue"></span>
            <button class="pricing-edit-btn" onclick="togglePricingEdit(true)">تعديل</button>
          </div>
          <div id="pricingEdit" style="display:none;" class="pricing-edit-wrap">
            <input type="number" id="pricingInput" placeholder="أدخل المبلغ بالريال" min="0">
            <span class="pricing-currency">ريال</span>
            <button class="pricing-save-btn" onclick="savePricing()">حفظ</button>
            <button class="pricing-cancel-btn" onclick="togglePricingEdit(false)">إلغاء</button>
          </div>
          <div id="pricingEmpty" class="pricing-empty">
            <button class="pricing-add-btn" onclick="togglePricingEdit(true)">+ إضافة تسعيرة</button>
          </div>
          <div class="fld" style="margin-top:12px;">
            <label>ملاحظة التسعيرة</label>
            <textarea id="pricingNote" rows="2" placeholder="مثال: يشمل المعدات والطاقم..." onblur="savePricingNote()"></textarea>
          </div>
        </div>
      </div>

      <!-- حالة المدير -->
      <div id="adminStatusSection" style="display:none;margin-top:14px;">
        <div class="pricing-title">📌 قرار المدير</div>
        <div class="admin-status-btns">
          <button class="ast-btn ast-review" id="ast-review" onclick="setAdminStatus('review')">🔍 قيد المراجعة</button>
          <button class="ast-btn ast-approve" id="ast-approve" onclick="setAdminStatus('approved')">✅ قبول</button>
          <button class="ast-btn ast-reject" id="ast-reject" onclick="setAdminStatus('rejected')">❌ رفض</button>
        </div>
      </div>

      <!-- حالة الفريق -->
      <div id="teamStatusSection" style="display:none;margin-top:14px;">
        <div class="pricing-title">📌 تحديث الحالة</div>
        <div id="adminDecisionBadge" style="display:none;margin-bottom:10px;"></div>
        <div class="team-status-btns">
          <button class="tst-btn tst-done" id="tst-done" onclick="setTeamStatus('contracted')">✅ تم التعميد</button>
          <button class="tst-btn tst-notdone" id="tst-notdone" onclick="setTeamStatus('not_contracted')">❌ لم يتم التعميد</button>
        </div>
      </div>
    </div>

    <div class="modal-ftr">
      <button class="btn-del" onclick="deleteOrder()">🗑️ حذف</button>
      <button class="btn-share" onclick="shareOrder()">🔗 مشاركة</button>
      <button class="btn-copy" onclick="copyOrder()">📋 نسخ</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

  <script src="logo.js"></script>
  <script src="app.js"></script>
</body>
</html>