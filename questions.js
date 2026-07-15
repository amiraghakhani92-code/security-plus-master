/* ============================================================
   بانک سوالات Security+ SY0-701
   Question Bank
   ------------------------------------------------------------
   برای افزودن سوال جدید، یک بلوک مثل زیر به آرایه اضافه کنید:
   To add a new question, add a block like this to the array:

   {
     "number": 301,
     "en": "English question text?",
     "fa": "متن سوال فارسی؟",
     "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
     "correct": "B",
     "explanation": "توضیح فارسی درباره جواب درست.",
     "domain": 1
   }

   - correct: باید یکی از A/B/C/D باشد
   - domain: عددی بین ۱ تا ۵
   ============================================================ */

const QUESTIONS = [
 {
  "number": 1,
  "domain": 1,
  "correct": "C",
  "en": "A financial services company processes credit card transactions. During an audit, the assessor notes that database administrators can both approve new payment vendors AND process payments to those same vendors. The auditor flags this as a significant risk. Which control would BEST address the auditor's concern?",
  "fa": "یک شرکت خدمات مالی تراکنش‌های کارت اعتباری را پردازش می‌کند. حین ممیزی، ارزیاب متوجه می‌شود مدیران پایگاه‌داده هم می‌توانند فروشندگان پرداخت جدید را تأیید کنند و هم به همان فروشندگان پرداخت انجام دهند. ممیز این را ریسک مهمی می‌داند. کدام کنترل این نگرانی را بهتر برطرف می‌کند؟",
  "options": [
   "A) Least Privilege",
   "B) Mandatory Access Control",
   "C) Separation of Duties",
   "D) Job Rotation"
  ],
  "explanation": "Separation of Duties (تفکیک وظایف) درست است. مشکل این است که یک نفر هم تأیید و هم اجرا می‌کند که امکان تقلب می‌دهد. تفکیک وظایف نیاز به دو نفر مجزا برای این دو کار دارد.\n\nچرا بقیه نه: Least Privilege دسترسی را کم می‌کند اما لزوماً این دو وظیفه را جدا نمی‌کند. Job Rotation تقلب را کشف می‌کند اما جلوی آن را نمی‌گیرد. MAC درباره برچسب‌های امنیتی است نه تفکیک وظایف."
 },
 {
  "number": 2,
  "domain": 1,
  "correct": "B",
  "en": "An organization deploys a new system. Security wants to ensure that if the authentication service crashes unexpectedly, users are DENIED access rather than granted access by default. The system controls entry to a data center vault. Which design principle should be applied?",
  "fa": "سازمانی سیستم جدیدی راه‌اندازی می‌کند. تیم امنیت می‌خواهد مطمئن شود اگر سرویس احراز هویت به‌طور غیرمنتظره از کار افتاد، به‌جای اعطای دسترسی پیش‌فرض، دسترسی کاربران رد شود. این سیستم ورود به گاوصندوق مرکز داده را کنترل می‌کند. کدام اصل طراحی باید اعمال شود؟",
  "options": [
   "A) Fail-Open",
   "B) Fail-Secure (Fail-Closed)",
   "C) Least Privilege",
   "D) Defense in Depth"
  ],
  "explanation": "Fail-Secure (Fail-Closed) درست است. برای یک گاوصندوق، وقتی سیستم خراب می‌شود باید دسترسی را ببندد (امنیت اولویت دارد).\n\nچرا بقیه نه: Fail-Open برعکس است (دسترسی می‌دهد) که برای خروج اضطراری خوب است نه گاوصندوق. Least Privilege و Defense in Depth اصول درستی‌اند اما به رفتار هنگام خرابی ربط ندارند."
 },
 {
  "number": 3,
  "domain": 1,
  "correct": "D",
  "en": "A hospital wants to grant access to patient records based on several factors evaluated together: the user's department, whether they are currently assigned to that patient's care team, the time of day, and whether the request comes from a hospital-managed device. Which access control model supports ALL these conditions simultaneously?",
  "fa": "بیمارستانی می‌خواهد دسترسی به سوابق بیماران را بر اساس چند عامل که با هم ارزیابی می‌شوند اعطا کند: بخش کاربر، اینکه آیا در حال حاضر به تیم مراقبتی آن بیمار تخصیص یافته، زمان روز، و اینکه آیا درخواست از دستگاه مدیریت‌شده‌ی بیمارستان می‌آید. کدام مدل کنترل دسترسی همه‌ی این شرایط را هم‌زمان پشتیبانی می‌کند؟",
  "options": [
   "A) Role-Based Access Control (RBAC)",
   "B) Mandatory Access Control (MAC)",
   "C) Discretionary Access Control (DAC)",
   "D) Attribute-Based Access Control (ABAC)"
  ],
  "explanation": "ABAC درست است چون چندین ویژگی (بخش، رابطه با بیمار، زمان، نوع دستگاه) را هم‌زمان ارزیابی می‌کند.\n\nچرا بقیه نه: RBAC فقط بر اساس نقش تصمیم می‌گیرد، نه ترکیب شرایط پویا. MAC بر اساس برچسب‌های امنیتی است. DAC مالک‌محور است. فقط ABAC این سطح از انعطاف چندعاملی را دارد."
 },
 {
  "number": 4,
  "domain": 1,
  "correct": "A",
  "en": "A company's security policy states 'All confidential data must be protected against unauthorized disclosure.' A junior analyst asks how to actually implement this. Which document should the analyst consult NEXT for the specific technical requirement (e.g., which encryption algorithm to use)?",
  "fa": "سیاست امنیتی شرکت می‌گوید «تمام داده‌های محرمانه باید در برابر افشای غیرمجاز محافظت شوند.» یک تحلیلگر جونیور می‌پرسد چطور واقعاً این را پیاده کند. برای الزام فنی خاص (مثلاً کدام الگوریتم رمزنگاری استفاده شود) باید بعداً به کدام سند مراجعه کند؟",
  "options": [
   "A) Standard",
   "B) Policy",
   "C) Guideline",
   "D) Procedure"
  ],
  "explanation": "Standard (استاندارد) درست است. Policy هدف کلی را می‌گوید («داده محافظت شود»)، اما Standard الزام فنی خاص را تعیین می‌کند (مثلاً «از AES-256 استفاده شود»).\n\nچرا بقیه نه: Policy همان چیزی است که آنالیست از آن شروع کرد (کلی). Procedure گام‌های اجراست نه الزام فنی. Guideline اختیاری است، نه الزامی."
 },
 {
  "number": 5,
  "domain": 1,
  "correct": "C",
  "en": "An attacker gains access to a company's internal network by compromising an employee's laptop through phishing. Once inside, they find they can freely access file servers, databases, and other systems without any additional authentication challenges. Which security model, if implemented, would have MOST effectively limited the attacker's movement?",
  "fa": "مهاجمی با فیشینگ لپ‌تاپ یک کارمند را آلوده و به شبکه‌ی داخلی شرکت دسترسی پیدا می‌کند. پس از ورود، متوجه می‌شود می‌تواند آزادانه به سرورهای فایل، پایگاه‌داده و سیستم‌های دیگر بدون هیچ چالش احراز هویت اضافی دسترسی یابد. کدام مدل امنیتی، در صورت پیاده‌سازی، حرکت مهاجم را مؤثرتر محدود می‌کرد؟",
  "options": [
   "A) Defense in Depth",
   "B) Security through Obscurity",
   "C) Zero Trust Architecture",
   "D) Discretionary Access Control"
  ],
  "explanation": "Zero Trust درست است. مشکل این است که پس از ورود، به همه‌چیز اعتماد می‌شود (Lateral Movement آزاد). Zero Trust هر درخواست را صرف‌نظر از موقعیت تأیید می‌کند و این حرکت را متوقف می‌کند.\n\nچرا بقیه نه: Defense in Depth لایه‌های محیطی دارد اما به اعتماد داخلی نمی‌پردازد. Security through Obscurity ضعیف است. DAC جلوی Lateral Movement را نمی‌گیرد."
 },
 {
  "number": 6,
  "domain": 1,
  "correct": "B",
  "en": "A security team places a warning banner on the login screen stating 'Unauthorized access is prohibited and will be prosecuted.' This banner does not technically prevent anyone from attempting to log in. Which control TYPE does this banner represent?",
  "fa": "تیم امنیتی یک بنر هشدار روی صفحه‌ی ورود می‌گذارد که می‌گوید «دسترسی غیرمجاز ممنوع است و پیگرد قانونی دارد.» این بنر از نظر فنی جلوی تلاش کسی برای ورود را نمی‌گیرد. این بنر کدام نوع کنترل است؟",
  "options": [
   "A) Preventive",
   "B) Deterrent",
   "C) Detective",
   "D) Compensating"
  ],
  "explanation": "Deterrent (بازدارنده) درست است. بنر مهاجم را روانی دلسرد می‌کند اما فیزیکی جلوی او را نمی‌گیرد.\n\nچرا بقیه نه: Preventive واقعاً جلوگیری می‌کند (مثل قفل) اما این بنر مانع فنی نیست. Detective تشخیص می‌دهد. Compensating جایگزین کنترل دیگر است. نکته کلیدی: «جلوگیری فنی نمی‌کند» = بازدارنده، نه پیشگیرانه."
 },
 {
  "number": 7,
  "domain": 1,
  "correct": "D",
  "en": "After a security incident, an organization cannot patch a legacy medical device because the vendor no longer supports it, and replacing it would cost millions. Instead, they isolate the device on a separate network segment with strict firewall rules to reduce risk. What type of control is this isolation?",
  "fa": "پس از یک حادثه امنیتی، سازمانی نمی‌تواند یک دستگاه پزشکی قدیمی را وصله کند چون فروشنده دیگر پشتیبانی نمی‌کند و جایگزینی‌اش میلیون‌ها هزینه دارد. در عوض، دستگاه را روی یک بخش شبکه‌ی جدا با قوانین سختگیرانه‌ی فایروال ایزوله می‌کنند تا ریسک کم شود. این ایزوله‌سازی کدام نوع کنترل است؟",
  "options": [
   "A) Corrective",
   "B) Preventive",
   "C) Detective",
   "D) Compensating"
  ],
  "explanation": "Compensating (جبرانی) درست است. کنترل اصلی (وصله‌کردن) ممکن نیست، پس یک کنترل جایگزین (ایزوله‌سازی شبکه) محافظت مشابه فراهم می‌کند.\n\nچرا بقیه نه: هرچند ایزوله‌سازی جنبه‌ی Preventive دارد، اما چون *جایگزین* کنترل غیرممکن است، به‌طور خاص Compensating نامیده می‌شود. Corrective پس از حادثه ترمیم می‌کند. Detective تشخیص می‌دهد."
 },
 {
  "number": 8,
  "domain": 1,
  "correct": "A",
  "en": "A developer argues that keeping their encryption algorithm secret makes the system more secure, since attackers won't know how it works. The security architect disagrees, citing a well-established principle. Which principle supports the architect's position that security should NOT depend on the secrecy of the algorithm?",
  "fa": "یک توسعه‌دهنده استدلال می‌کند که مخفی نگه‌داشتن الگوریتم رمزنگاری‌شان سیستم را امن‌تر می‌کند، چون مهاجمان نمی‌دانند چطور کار می‌کند. معمار امنیت مخالف است و به یک اصل جاافتاده اشاره می‌کند. کدام اصل موضع معمار را که امنیت نباید به محرمانگی الگوریتم وابسته باشد پشتیبانی می‌کند؟",
  "options": [
   "A) Kerckhoffs's Principle",
   "B) Security through Obscurity",
   "C) Principle of Least Privilege",
   "D) Separation of Duties"
  ],
  "explanation": "Kerckhoffs's Principle درست است: سیستم باید حتی اگر همه‌چیز (جز کلید) عمومی باشد امن بماند. امنیت باید به کلید متکی باشد نه پنهان‌کاری الگوریتم.\n\nچرا بقیه نه: Security through Obscurity دقیقاً همان چیزی است که توسعه‌دهنده پیشنهاد می‌دهد (و اشتباه است). دو گزینه‌ی دیگر به این بحث ربط ندارند."
 },
 {
  "number": 9,
  "domain": 1,
  "correct": "C",
  "en": "An e-commerce site uses digital signatures on all order confirmations. A customer later claims they never placed a $5,000 order, but the company can prove cryptographically that the order was signed with the customer's private key. Which security concept does this scenario BEST demonstrate?",
  "fa": "یک سایت تجارت الکترونیک روی همه‌ی تأییدیه‌های سفارش امضای دیجیتال می‌گذارد. مشتری‌ای بعداً ادعا می‌کند هرگز سفارش ۵۰۰۰ دلاری نداده، اما شرکت می‌تواند به‌صورت رمزنگاری ثابت کند که سفارش با کلید خصوصی مشتری امضا شده. این سناریو کدام مفهوم امنیتی را بهتر نشان می‌دهد؟",
  "options": [
   "A) Confidentiality",
   "B) Integrity",
   "C) Non-repudiation",
   "D) Availability"
  ],
  "explanation": "Non-repudiation (انکارناپذیری) درست است. مشتری نمی‌تواند سفارش را انکار کند چون امضای دیجیتال با کلید خصوصی او ثابت می‌کند کار او بوده.\n\nچرا بقیه نه: Confidentiality درباره پنهان نگه‌داشتن داده است. Integrity درباره تغییرنکردن داده. Availability درباره دسترس‌پذیری. اینجا موضوع اثبات انکارناپذیر انجام یک عمل است."
 },
 {
  "number": 10,
  "domain": 1,
  "correct": "B",
  "en": "A company implements a system where a new employee automatically receives all the access permissions associated with their job title on their first day, and these permissions are automatically revoked the moment HR marks them as terminated. Which combination of concepts is being applied?",
  "fa": "شرکتی سیستمی پیاده می‌کند که در آن کارمند جدید در روز اول به‌طور خودکار تمام مجوزهای دسترسی مرتبط با عنوان شغلی‌اش را دریافت می‌کند، و این مجوزها لحظه‌ای که منابع انسانی او را خاتمه‌یافته علامت می‌زند به‌طور خودکار لغو می‌شوند. کدام ترکیب از مفاهیم اعمال می‌شود؟",
  "options": [
   "A) MAC and Job Rotation",
   "B) RBAC and Provisioning/Deprovisioning",
   "C) DAC and Least Privilege",
   "D) ABAC and Separation of Duties"
  ],
  "explanation": "RBAC و Provisioning/Deprovisioning درست است. دسترسی بر اساس «عنوان شغلی» (نقش = RBAC) داده می‌شود، و ایجاد/لغو خودکار حساب همان Provisioning/Deprovisioning است.\n\nچرا بقیه نه: MAC برچسب‌محور است. DAC مالک‌محور. ABAC چندویژگی‌محور. اینجا مشخصاً نقش شغلی (RBAC) مبنای دسترسی است."
 },
 {
  "number": 11,
  "domain": 1,
  "correct": "D",
  "en": "A security manager wants to reduce risk from a single employee having too much power over a critical financial process. They decide that the person who writes checks cannot also be the person who reconciles the bank statements. Additionally, they periodically move employees between these roles to detect any hidden fraud. Which TWO controls are being used, respectively?",
  "fa": "یک مدیر امنیت می‌خواهد ریسک ناشی از قدرت بیش‌ازحد یک کارمند بر یک فرآیند مالی حیاتی را کم کند. تصمیم می‌گیرد کسی که چک می‌نویسد نتواند همان کسی باشد که صورت‌حساب بانکی را تطبیق می‌دهد. علاوه بر این، به‌طور دوره‌ای کارمندان را بین این نقش‌ها جابجا می‌کند تا هر تقلب پنهانی را کشف کند. به‌ترتیب کدام دو کنترل استفاده می‌شوند؟",
  "options": [
   "A) Least Privilege and MAC",
   "B) Zero Trust and RBAC",
   "C) Deterrent and Preventive",
   "D) Separation of Duties and Job Rotation"
  ],
  "explanation": "Separation of Duties و Job Rotation درست است. جدا کردن نوشتن چک از تطبیق حساب = تفکیک وظایف. جابجایی دوره‌ای برای کشف تقلب = چرخش شغلی.\n\nچرا بقیه نه: بقیه ترکیب‌ها این دو کنترل خاص را توصیف نمی‌کنند. نکته کلیدی: دو عمل مجزا برای دو مفهوم مجزا در سوال توصیف شده."
 },
 {
  "number": 12,
  "domain": 1,
  "correct": "A",
  "en": "During a risk assessment, the team applies multiple overlapping security layers: a firewall at the perimeter, network segmentation internally, endpoint protection on devices, encryption of data, and user security training. The reasoning is that if one layer fails, others still provide protection. Which strategy does this represent?",
  "fa": "حین ارزیابی ریسک، تیم چندین لایه‌ی امنیتی هم‌پوشان اعمال می‌کند: فایروال در محیط، تقسیم‌بندی شبکه‌ی داخلی، محافظت Endpoint روی دستگاه‌ها، رمزنگاری داده، و آموزش امنیتی کاربران. استدلال این است که اگر یک لایه شکست خورد، بقیه همچنان محافظت کنند. این کدام استراتژی است؟",
  "options": [
   "A) Defense in Depth",
   "B) Zero Trust",
   "C) Least Privilege",
   "D) Fail-Secure"
  ],
  "explanation": "Defense in Depth (دفاع لایه‌ای) درست است. استفاده از چند لایه‌ی مستقل که اگر یکی شکست، بقیه محافظت می‌کنند، دقیقاً تعریف این استراتژی است.\n\nچرا بقیه نه: Zero Trust درباره «هرگز اعتماد نکن» است نه لایه‌بندی. Least Privilege درباره حداقل دسترسی. Fail-Secure درباره رفتار هنگام خرابی. نکته کلیدی: «چند لایه، اگر یکی شکست بقیه کار کنند» = Defense in Depth."
 },
 {
  "number": 13,
  "domain": 1,
  "correct": "C",
  "en": "A company classifies its data into Public, Internal, Confidential, and Restricted levels. An employee needs to determine what protection measures to apply to a new document containing employee salary information. What is the PRIMARY purpose of having this classification scheme?",
  "fa": "شرکتی داده‌هایش را به سطوح عمومی، داخلی، محرمانه و محدود طبقه‌بندی می‌کند. کارمندی باید تعیین کند چه تدابیر حفاظتی روی یک سند جدید حاوی اطلاعات حقوق کارمندان اعمال کند. هدف اصلی داشتن این طرح طبقه‌بندی چیست؟",
  "options": [
   "A) To comply with encryption laws",
   "B) To make data easier to search",
   "C) To apply appropriate security controls based on sensitivity",
   "D) To reduce data storage costs"
  ],
  "explanation": "اعمال کنترل‌های امنیتی مناسب بر اساس حساسیت درست است. طبقه‌بندی داده به سازمان می‌گوید هر نوع داده چه سطح محافظتی نیاز دارد (داده محدود کنترل شدیدتر از عمومی).\n\nچرا بقیه نه: طبقه‌بندی درباره قوانین رمزنگاری، جستجو، یا هزینه ذخیره نیست — بلکه درباره تطبیق سطح حفاظت با حساسیت داده است."
 },
 {
  "number": 14,
  "domain": 1,
  "correct": "B",
  "en": "A new application is being designed. The security team insists that privacy protections and data minimization be built into the architecture from the very first design meeting, rather than added after the application is complete. Which principle are they advocating?",
  "fa": "یک اپلیکیشن جدید در حال طراحی است. تیم امنیت اصرار دارد که حفاظت‌های حریم خصوصی و حداقل‌سازی داده از همان اولین جلسه‌ی طراحی در معماری گنجانده شود، نه اینکه پس از تکمیل اپلیکیشن اضافه شود. کدام اصل را ترویج می‌کنند؟",
  "options": [
   "A) Defense in Depth",
   "B) Privacy by Design",
   "C) Fail-Secure",
   "D) Least Privilege"
  ],
  "explanation": "Privacy by Design درست است. گنجاندن حفاظت حریم خصوصی و حداقل‌سازی داده از ابتدای طراحی (نه بعداً) دقیقاً تعریف این اصل است.\n\nچرا بقیه نه: Defense in Depth درباره لایه‌بندی است. Fail-Secure درباره رفتار هنگام خرابی. Least Privilege درباره دسترسی. نکته کلیدی: «حریم خصوصی از ابتدای طراحی» = Privacy by Design."
 },
 {
  "number": 15,
  "domain": 1,
  "correct": "D",
  "en": "A CISO is explaining to the board why the company invests in encryption. She states that even if an attacker steals the physical database backups, the data will be worthless to them. Which element of the CIA Triad is she PRIMARILY addressing?",
  "fa": "یک CISO به هیئت‌مدیره توضیح می‌دهد چرا شرکت روی رمزنگاری سرمایه‌گذاری می‌کند. او می‌گوید حتی اگر مهاجمی بکاپ‌های فیزیکی پایگاه‌داده را بدزدد، داده برای او بی‌ارزش خواهد بود. او در درجه‌ی اول به کدام عنصر از سه‌گانه‌ی CIA می‌پردازد؟",
  "options": [
   "A) Availability",
   "B) Integrity",
   "C) Non-repudiation",
   "D) Confidentiality"
  ],
  "explanation": "Confidentiality (محرمانگی) درست است. رمزنگاری تضمین می‌کند فقط افراد مجاز (با کلید) داده را بخوانند؛ داده دزدیده‌شده بدون کلید بی‌ارزش است = محرمانگی.\n\nچرا بقیه نه: Availability درباره دسترس‌پذیری است. Integrity درباره تغییرنکردن. Non-repudiation جزو CIA کلاسیک نیست. نکته: «داده دزدیده‌شده بی‌ارزش باشد» = محرمانگی."
 },
 {
  "domain": 2,
  "correct": "C",
  "en": "A user receives an email appearing to be from the CEO, marked urgent, asking them to purchase $2,000 in gift cards and send the codes immediately for a 'confidential client gift.' The email address is slightly misspelled. Which attack is this MOST likely?",
  "fa": "کارمندی ایمیلی دریافت می‌کند که به‌ظاهر از مدیرعامل است، با برچسب فوری، و از او می‌خواهد ۲۰۰۰ دلار گیفت‌کارت بخرد و کدها را فوراً برای «هدیه‌ی محرمانه‌ی مشتری» بفرستد. آدرس ایمیل کمی غلط املایی دارد. این به‌احتمال زیاد کدام حمله است؟",
  "options": [
   "A) Vishing",
   "B) Spear Phishing",
   "C) Business Email Compromise (BEC)",
   "D) Whaling"
  ],
  "explanation": "Business Email Compromise (BEC) درست است. جعل هویت مدیرعامل برای فریب کارمند به انتقال پول/کدها دقیقاً BEC است.\n\nچرا بقیه نه: Whaling حمله به خودِ مدیر است، نه جعل او برای فریب دیگران. Spear Phishing کلی‌تر است. Vishing تلفنی است نه ایمیلی. نکته: «جعل مدیر برای فریب کارمند به پرداخت» = BEC.",
  "number": 16
 },
 {
  "domain": 2,
  "correct": "B",
  "en": "An attacker tries the passwords 'Winter2024!' and 'Password1' against 5,000 different user accounts, using only one or two attempts per account to avoid triggering lockouts. Which attack is being used?",
  "fa": "مهاجمی رمزهای 'Winter2024!' و 'Password1' را روی ۵۰۰۰ حساب کاربری مختلف امتحان می‌کند و برای جلوگیری از فعال‌شدن قفل حساب، فقط یک یا دو تلاش برای هر حساب انجام می‌دهد. کدام حمله استفاده می‌شود؟",
  "options": [
   "A) Brute Force",
   "B) Password Spraying",
   "C) Dictionary Attack",
   "D) Credential Stuffing"
  ],
  "explanation": "Password Spraying درست است. امتحان چند رمز رایج روی حساب‌های زیاد (نه رمزهای زیاد روی یک حساب) برای دور زدن قفل حساب، دقیقاً Password Spraying است.\n\nچرا بقیه نه: Brute Force همه‌ی ترکیب‌ها را روی یک حساب امتحان می‌کند. Credential Stuffing از رمزهای دزدیده‌شده‌ی واقعی استفاده می‌کند. Dictionary Attack لیست کلمات را روی یک حساب می‌زند. نکته: «چند رمز روی حساب‌های زیاد، دوری از قفل» = Spraying.",
  "number": 17
 },
 {
  "domain": 2,
  "correct": "D",
  "en": "A company discovers that attackers gained access to many employee accounts by using username/password pairs that were leaked in a breach of a completely different website months earlier. What made this attack successful?",
  "fa": "شرکتی کشف می‌کند مهاجمان با استفاده از جفت‌های نام‌کاربری/رمز که ماه‌ها قبل در نشت یک وب‌سایت کاملاً متفاوت لو رفته بودند، به بسیاری از حساب‌های کارمندان دسترسی یافته‌اند. چه چیزی این حمله را موفق کرد؟",
  "options": [
   "A) Weak encryption",
   "B) A zero-day vulnerability",
   "C) Lack of a firewall",
   "D) Password reuse across sites"
  ],
  "explanation": "Password reuse across sites (استفاده مجدد رمز) درست است. این حمله Credential Stuffing است و فقط وقتی موفق می‌شود که کاربران همان رمز را در چند سایت استفاده کرده باشند.\n\nچرا بقیه نه: رمزنگاری ضعیف، zero-day، و نبود فایروال ربطی به کارکرد این حمله ندارند. عامل کلیدی، استفاده‌ی مجدد رمز توسط کاربران است.",
  "number": 18
 },
 {
  "domain": 2,
  "correct": "A",
  "en": "Users on a corporate network report being redirected to a malicious website when they type their bank's correct URL. Investigation shows the attacker corrupted the mapping between domain names and IP addresses in the network's cache. Which attack occurred?",
  "fa": "کاربران یک شبکه‌ی سازمانی گزارش می‌دهند هنگام تایپ آدرس صحیح بانکشان، به یک وب‌سایت مخرب هدایت می‌شوند. بررسی نشان می‌دهد مهاجم نگاشت بین نام‌های دامنه و آدرس‌های IP را در کش شبکه خراب کرده است. کدام حمله رخ داده؟",
  "options": [
   "A) DNS Poisoning",
   "B) ARP Poisoning",
   "C) On-Path Attack",
   "D) DNS Amplification"
  ],
  "explanation": "DNS Poisoning درست است. خراب‌کردن نگاشت نام دامنه به IP در کش، برای هدایت کاربران به سایت جعلی، دقیقاً DNS Poisoning است.\n\nچرا بقیه نه: ARP Poisoning نگاشت MAC به IP در شبکه محلی را دستکاری می‌کند. On-Path رهگیری بین دو طرف است. DNS Amplification یک نوع حمله DDoS است. نکته: «خراب‌کردن نگاشت نام←IP در کش» = DNS Poisoning.",
  "number": 19
 },
 {
  "domain": 2,
  "correct": "C",
  "en": "A web application allows users to submit a comment. An attacker submits a comment containing a malicious script. When other users view the page, the script runs in their browsers and steals their session cookies. Which vulnerability was exploited?",
  "fa": "یک اپلیکیشن وب به کاربران اجازه‌ی ثبت نظر می‌دهد. مهاجمی نظری حاوی یک اسکریپت مخرب ثبت می‌کند. وقتی کاربران دیگر صفحه را می‌بینند، اسکریپت در مرورگرشان اجرا می‌شود و کوکی‌های نشست آن‌ها را می‌دزدد. کدام آسیب‌پذیری بهره‌برداری شد؟",
  "options": [
   "A) SQL Injection",
   "B) CSRF",
   "C) Cross-Site Scripting (XSS)",
   "D) Buffer Overflow"
  ],
  "explanation": "Cross-Site Scripting (XSS) درست است. تزریق اسکریپت مخرب که در مرورگر کاربران دیگر اجرا می‌شود و داده می‌دزدد، دقیقاً XSS است.\n\nچرا بقیه نه: SQL Injection پایگاه‌داده را هدف می‌گیرد. CSRF کاربر را به انجام عمل ناخواسته فریب می‌دهد. Buffer Overflow حافظه را سرریز می‌کند. نکته: «اسکریپت تزریق‌شده در مرورگر کاربران دیگر اجرا شود» = XSS.",
  "number": 20
 },
 {
  "domain": 2,
  "correct": "B",
  "en": "A database-driven login form is compromised when an attacker enters ' OR '1'='1 into the username field, causing the application to return all user records. Which secure coding practice would have BEST prevented this?",
  "fa": "یک فرم ورود مبتنی بر پایگاه‌داده وقتی مهاجم عبارت ' OR '1'='1 را در فیلد نام‌کاربری وارد می‌کند و اپلیکیشن تمام رکوردهای کاربران را برمی‌گرداند، به خطر می‌افتد. کدام شیوه‌ی کدنویسی امن این را بهتر جلوگیری می‌کرد؟",
  "options": [
   "A) Multi-factor authentication",
   "B) Parameterized queries (input validation)",
   "C) Network segmentation",
   "D) Full disk encryption"
  ],
  "explanation": "Parameterized Queries درست است. این حمله SQL Injection است و بهترین دفاع، Parameterized Queries و اعتبارسنجی ورودی است که ورودی را به‌عنوان داده (نه دستور) تلقی می‌کند.\n\nچرا بقیه نه: MFA به احراز هویت مربوط است نه تزریق. Segmentation و رمزنگاری دیسک به این آسیب‌پذیری کد ربطی ندارند.",
  "number": 21
 },
 {
  "domain": 2,
  "correct": "D",
  "en": "A security researcher discovers a flaw in a popular application that the vendor is completely unaware of, and no patch exists. Attackers begin exploiting it before anyone can respond. What is this type of vulnerability called?",
  "fa": "یک پژوهشگر امنیتی نقصی در یک اپلیکیشن محبوب کشف می‌کند که فروشنده کاملاً از آن بی‌خبر است و هیچ وصله‌ای وجود ندارد. مهاجمان قبل از اینکه کسی بتواند واکنش نشان دهد شروع به بهره‌برداری از آن می‌کنند. این نوع آسیب‌پذیری چه نامیده می‌شود؟",
  "options": [
   "A) Known vulnerability (CVE)",
   "B) Misconfiguration",
   "C) Race condition",
   "D) Zero-Day"
  ],
  "explanation": "Zero-Day درست است. آسیب‌پذیری ناشناخته که فروشنده از آن بی‌خبر است و وصله ندارد، دقیقاً Zero-Day است.\n\nچرا بقیه نه: Known/CVE مستند شده و معمولاً وصله دارد. Misconfiguration خطای راه‌اندازی است. Race Condition نقص زمان‌بندی است. نکته: «فروشنده بی‌خبر، بدون وصله» = Zero-Day.",
  "number": 22
 },
 {
  "domain": 2,
  "correct": "A",
  "en": "An organization is targeted by a highly sophisticated, well-funded group that maintains persistent access to their network for over a year, quietly exfiltrating intellectual property. The group is believed to be government-backed. Which threat actor type is this?",
  "fa": "سازمانی هدف یک گروه بسیار پیچیده و خوش‌بودجه قرار می‌گیرد که بیش از یک سال دسترسی مستمر به شبکه‌شان را حفظ می‌کند و بی‌سروصدا مالکیت فکری را استخراج می‌کند. گمان می‌رود این گروه دولت‌پشتیبان باشد. این کدام نوع عامل تهدید است؟",
  "options": [
   "A) Advanced Persistent Threat (APT) / Nation-State",
   "B) Script Kiddie",
   "C) Hacktivist",
   "D) Insider Threat"
  ],
  "explanation": "APT / Nation-State درست است. گروه پیچیده، خوش‌بودجه، دولت‌پشتیبان با دسترسی مستمر و طولانی برای جاسوسی، دقیقاً APT است.\n\nچرا بقیه نه: Script Kiddie غیرماهر است. Hacktivist انگیزه‌ی سیاسی/اجتماعی دارد و معمولاً پرسروصداست. Insider Threat فرد داخلی است. نکته: «دولت‌پشتیبان، مستمر، مخفی، پیچیده» = APT.",
  "number": 23
 },
 {
  "domain": 2,
  "correct": "C",
  "en": "A software company's build server is compromised, and attackers inject malware into a legitimate software update. Thousands of the company's customers then install the trusted update, unknowingly infecting themselves. Which attack type is this?",
  "fa": "سرور ساخت یک شرکت نرم‌افزاری به خطر می‌افتد و مهاجمان بدافزار را در یک به‌روزرسانی معتبر نرم‌افزار تزریق می‌کنند. سپس هزاران مشتری شرکت به‌روزرسانی مورد اعتماد را نصب می‌کنند و ناخواسته خودشان را آلوده می‌کنند. این کدام نوع حمله است؟",
  "options": [
   "A) Watering Hole Attack",
   "B) Typosquatting",
   "C) Supply Chain Attack",
   "D) On-Path Attack"
  ],
  "explanation": "Supply Chain Attack درست است. آلوده‌کردن یک به‌روزرسانی معتبر که مشتریان زیاد نصب می‌کنند (سوءاستفاده از اعتماد به منبع معتبر) دقیقاً حمله‌ی زنجیره‌ی تأمین است.\n\nچرا بقیه نه: Watering Hole یک وب‌سایت پربازدید را آلوده می‌کند. Typosquatting دامنه‌ی غلط املایی ثبت می‌کند. On-Path رهگیری ارتباط است. نکته: «تزریق در به‌روزرسانی معتبر، آلودگی مشتریان» = Supply Chain.",
  "number": 24
 },
 {
  "domain": 2,
  "correct": "B",
  "en": "A SOC analyst notices a login for user 'jsmith' from New York at 9:00 AM, followed by another successful login for the same account from Singapore at 9:15 AM. Which detection concept has been triggered?",
  "fa": "یک تحلیلگر SOC متوجه ورودی برای کاربر 'jsmith' از نیویورک در ساعت ۹:۰۰ صبح می‌شود، که بلافاصله پس از آن ورود موفق دیگری برای همان حساب از سنگاپور در ساعت ۹:۱۵ صبح انجام شده. کدام مفهوم تشخیص فعال شده؟",
  "options": [
   "A) MFA fatigue",
   "B) Impossible Travel",
   "C) Pass-the-hash",
   "D) Password spraying"
  ],
  "explanation": "Impossible Travel درست است. ورود از دو مکان جغرافیایی دور در زمانی که سفر فیزیکی بینشان غیرممکن است، توسط UEBA به‌عنوان Impossible Travel تشخیص داده می‌شود.\n\nچرا بقیه نه: MFA Fatigue غرق‌کردن کاربر با اعلان‌هاست. Pass-the-hash استفاده از هش رمز است. Password Spraying امتحان رمز روی حساب‌های زیاد است. نکته: «دو ورود از مکان‌های دور در زمان غیرممکن» = Impossible Travel.",
  "number": 25
 },
 {
  "domain": 2,
  "correct": "D",
  "en": "An employee receives dozens of MFA push notifications on their phone late at night. Annoyed and half-asleep, they eventually tap 'Approve' just to make them stop — granting the attacker access. Which technique did the attacker use?",
  "fa": "کارمندی اواخر شب ده‌ها اعلان push مربوط به MFA روی گوشی‌اش دریافت می‌کند. کلافه و نیمه‌خواب، بالاخره روی 'تأیید' می‌زند تا اعلان‌ها متوقف شوند — و به مهاجم دسترسی می‌دهد. مهاجم از کدام تکنیک استفاده کرد؟",
  "options": [
   "A) Credential stuffing",
   "B) Vishing",
   "C) Pass-the-hash",
   "D) MFA Fatigue (Push Bombing)"
  ],
  "explanation": "MFA Fatigue (Push Bombing) درست است. غرق‌کردن کاربر با اعلان‌های مکرر MFA تا از سر کلافگی یکی را تأیید کند، دقیقاً این تکنیک است.\n\nچرا بقیه نه: Credential Stuffing از رمزهای دزدیده استفاده می‌کند. Vishing تلفنی است. Pass-the-hash از هش رمز بهره می‌برد. نکته: «اعلان‌های مکرر MFA تا تأیید از سر خستگی» = MFA Fatigue.",
  "number": 26
 },
 {
  "domain": 2,
  "correct": "A",
  "en": "After gaining access to a low-privilege user account, an attacker exploits a vulnerability to gain administrator rights on the SAME machine. What is this technique called?",
  "fa": "پس از دسترسی به یک حساب کاربری کم‌دسترسی، مهاجم از یک آسیب‌پذیری بهره می‌برد تا حقوق مدیر را روی همان دستگاه به‌دست آورد. این تکنیک چه نامیده می‌شود؟",
  "options": [
   "A) Privilege Escalation",
   "B) Lateral Movement",
   "C) Persistence",
   "D) Pivoting"
  ],
  "explanation": "Privilege Escalation (ارتقای دسترسی) درست است. کسب دسترسی بالاتر (مدیر) روی همان دستگاه، حرکت عمودی و دقیقاً Privilege Escalation است.\n\nچرا بقیه نه: Lateral Movement حرکت به سیستم‌های دیگر است (افقی). Persistence حفظ دسترسی بلندمدت است. Pivoting استفاده از یک میزبان برای رسیدن به بخش ایزوله است. نکته: «دسترسی بالاتر روی همان دستگاه» = Privilege Escalation.",
  "number": 27
 },
 {
  "domain": 2,
  "correct": "C",
  "en": "A company's website becomes unavailable after being flooded with traffic from thousands of compromised computers around the world simultaneously. Which attack is this?",
  "fa": "وب‌سایت شرکتی پس از اینکه هم‌زمان با ترافیک هزاران کامپیوتر آلوده در سراسر جهان غرق می‌شود، از دسترس خارج می‌شود. این کدام حمله است؟",
  "options": [
   "A) DoS",
   "B) On-Path Attack",
   "C) DDoS",
   "D) Privilege Escalation"
  ],
  "explanation": "DDoS درست است. غرق‌کردن هدف با ترافیک از هزاران منبع (بات‌نت) به‌طور هم‌زمان، دقیقاً DDoS است.\n\nچرا بقیه نه: DoS از یک منبع واحد است، نه هزاران. On-Path رهگیری ارتباط است. Privilege Escalation کسب دسترسی بالاتر است. نکته: «هزاران کامپیوتر در سراسر جهان هم‌زمان» = DDoS (توزیع‌شده).",
  "number": 28
 },
 {
  "domain": 2,
  "correct": "B",
  "en": "A disgruntled system administrator, before quitting, plants code that will delete all backups automatically if their name is ever removed from the payroll database. Which type of malware is this?",
  "fa": "یک مدیر سیستم ناراضی، پیش از استعفا، کدی می‌کارد که اگر نامش هرگز از پایگاه‌داده‌ی حقوق حذف شود، تمام بکاپ‌ها را به‌طور خودکار پاک می‌کند. این کدام نوع بدافزار است؟",
  "options": [
   "A) Rootkit",
   "B) Logic Bomb",
   "C) Worm",
   "D) Trojan"
  ],
  "explanation": "Logic Bomb (بمب منطقی) درست است. کد مخربی که با تحقق یک شرط خاص (حذف نام از لیست حقوق) فعال می‌شود، دقیقاً Logic Bomb است و اغلب توسط افراد داخلی کاشته می‌شود.\n\nچرا بقیه نه: Rootkit در عمق سیستم پنهان می‌شود. Worm خودتکثیر است. Trojan خود را مفید جا می‌زند. نکته: «فعال‌شدن با یک شرط خاص» = Logic Bomb.",
  "number": 29
 },
 {
  "domain": 2,
  "correct": "D",
  "en": "An organization's data is encrypted by attackers who then demand payment in cryptocurrency for the decryption key. Which single control would MOST effectively allow the organization to recover WITHOUT paying?",
  "fa": "داده‌های سازمانی توسط مهاجمان رمزنگاری می‌شود و سپس آن‌ها برای کلید رمزگشایی درخواست پرداخت با رمزارز می‌کنند. کدام کنترل واحد به سازمان اجازه می‌دهد بدون پرداخت، به‌طور مؤثرتری بازیابی کند؟",
  "options": [
   "A) A stronger firewall",
   "B) Multi-factor authentication",
   "C) Antivirus software",
   "D) Offline (air-gapped) backups"
  ],
  "explanation": "Offline (air-gapped) backups درست است. در برابر باج‌افزار، داشتن بکاپ آفلاین که مهاجم نمی‌تواند به آن برسد یا رمزنگاری کند، مؤثرترین راه بازیابی بدون پرداخت است.\n\nچرا بقیه نه: فایروال، MFA و آنتی‌ویروس ممکن است از آلودگی اولیه جلوگیری کنند، اما وقتی داده رمزنگاری شد، فقط بکاپ آفلاین امکان بازیابی می‌دهد. نکته: «بازیابی پس از باج‌افزار» = بکاپ آفلاین.",
  "number": 30
 },
 {
  "number": 31,
  "en": "A security administrator wants to deploy a solution that can detect and automatically block malicious network traffic in real time, rather than just generating alerts for manual review. Which of the following should be implemented?",
  "fa": "یک مدیر امنیتی می‌خواهد راهکاری پیاده‌سازی کند که بتواند ترافیک مخرب شبکه را در زمان واقعی شناسایی کند و به‌صورت خودکار مسدود کند، نه فقط هشدار تولید کند برای بررسی دستی. کدام مورد باید پیاده‌سازی شود؟",
  "options": [
   "A) IDS",
   "B) IPS",
   "C) SIEM",
   "D) Honeypot"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**IPS (Intrusion Prevention System)**\n\nتوضیح:\nاین سیستم نه فقط ترافیک مخرب را شناسایی می‌کند، بلکه به‌صورت خودکار و در زمان واقعی آن را مسدود می‌کند\n\nکلمه‌ی کلیدی **Prevention** در نامش دقیقاً به همین قابلیت \"جلوگیری فعال\" اشاره دارد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**IDS (Intrusion Detection System)**\n\nتوضیح:\nاین سیستم فقط ترافیک مخرب را شناسایی و هشدار تولید می‌کند، اما خودش هیچ اقدام مسدودسازی انجام نمی‌دهد؛ تصمیم نهایی با تحلیلگر انسانی است\n\n**SIEM**\n\nتوضیح:\nاین سیستم لاگ‌ها و هشدارهای امنیتی از منابع مختلف را جمع‌آوری و تحلیل می‌کند، اما خودش معمولاً به‌صورت مستقیم ترافیک شبکه را مسدود نمی‌کند\n\n**Honeypot**\n\nتوضیح:\nاین یک سیستم فریب‌دهنده است که برای جذب و مطالعه‌ی رفتار مهاجم طراحی شده، نه برای مسدودسازی ترافیک واقعی شبکه\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان کلمه‌ی **\"Detect\"** به‌تنهایی بود، به IDS فکر کن\nهر زمان کلمه‌ی **\"Detect AND Block\"** یا **\"Prevent\"** بود، به IPS فکر کن\n\n---",
  "domain": 3
 },
 {
  "number": 32,
  "en": "A company's incident response policy requires that evidence collected from a compromised system be documented showing who handled it, when, and why, from the moment of collection until it is presented in court. Which of the following does this describe?",
  "fa": "سیاست واکنش به حادثه‌ی یک شرکت الزام می‌کند که شواهد جمع‌آوری‌شده از یک سیستم آسیب‌دیده، از لحظه‌ی جمع‌آوری تا زمان ارائه در دادگاه، به‌طور کامل ثبت شود؛ اینکه چه کسی، چه زمانی، و به چه دلیل آن را در دست داشته است. این مورد کدام مفهوم را توصیف می‌کند؟",
  "options": [
   "A) Order of Volatility",
   "B) Chain of Custody",
   "C) Legal Hold",
   "D) Data Retention Policy"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) Chain of Custody** هست، نه A.\n\n**Chain of Custody**\n\nتوضیح:\nاین مفهوم به ثبت کامل و مستندسازی هر مرحله از حرکت شواهد اشاره دارد: چه کسی آن را جمع‌آوری کرد، چه زمانی، چگونه نگهداری شد، و چه کسانی به آن دسترسی داشتند تا لحظه‌ی ارائه در دادگاه\n\nاگر این زنجیره شکسته شود یا مستندسازی نشود، شواهد ممکن است در دادگاه **غیرقابل‌قبول** اعلام شوند، حتی اگر شواهد واقعی و درست باشند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Order of Volatility**\n\nتوضیح:\nاین مفهوم به ترتیب اولویت در جمع‌آوری شواهد بر اساس میزان ناپایداری آن‌ها اشاره دارد؛ یعنی داده‌هایی که سریع‌تر از بین می‌روند (مثل محتوای RAM) باید زودتر از داده‌های پایدارتر (مثل هارد دیسک) جمع‌آوری شوند. این مفهوم درباره‌ی **ترتیب جمع‌آوری** است، نه مستندسازی مسیر شواهد\n\n**Legal Hold**\n\nتوضیح:\nاین یک الزام قانونی است که شرکت را موظف می‌کند داده‌های مرتبط با یک پرونده‌ی احتمالی حقوقی را حذف نکند، نه مستندسازی مسیر حرکت شواهد فیزیکی\n\n**Data Retention Policy**\n\nتوضیح:\nاین سیاست مشخص می‌کند داده‌ها چه مدت باید نگهداری شوند، که موضوعی کاملاً متفاوت از مستندسازی شواهد در یک پرونده است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان کلمات **\"who handled it, when, documentation trail, admissible in court\"** را دیدی، جواب همیشه **Chain of Custody** است\nاین مفهوم را با **Order of Volatility** اشتباه نگیر؛ آن یکی درباره‌ی \"چه چیزی اول جمع‌آوری شود\" است، نه \"مسیر مستندسازی\"\n\nاین یکی از مفاهیمی است که باید دوباره مرورش کنیم تا کاملاً جا بیفته. به‌زودی یک سؤال مشابه دیگر در همین موضوع برات میارم.\n\n---",
  "domain": 4
 },
 {
  "number": 33,
  "en": "A digital forensics investigator arrives at a scene where a compromised server is still running. Which of the following pieces of data should the investigator collect FIRST, based on volatility?",
  "fa": "یک کارآگاه دیجیتال فورنزیک به محل حادثه می‌رسد، جایی که یک سرور آسیب‌دیده هنوز در حال اجراست. کدام مورد باید بر اساس میزان ناپایداری، اولویت اول برای جمع‌آوری باشد؟",
  "options": [
   "A) محتوای هارد دیسک",
   "B) محتوای RAM",
   "C) فایل‌های لاگ ذخیره‌شده روی دیسک",
   "D) نوار‌های پشتیبان (Backup Tapes)"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**RAM Contents**\n\nتوضیح:\nاین مفهوم به نام **Order of Volatility** شناخته می‌شود: ترتیب جمع‌آوری شواهد باید از ناپایدارترین داده شروع شود\n\nمحتوای **RAM** به‌محض خاموش شدن سیستم، کاملاً از بین می‌رود؛ به همین دلیل اولین اولویت برای جمع‌آوری است، حتی قبل از هارد دیسک\n\nترتیب کامل Order of Volatility (از ناپایدارترین تا پایدارترین):\n\n۱. **CPU Cache / Registers**\n۲. **RAM**\n۳. **Swap / Page File**\n۴. **Hard Drive Contents**\n۵. **Log Files روی دیسک**\n۶. **Backup Tapes / آرشیوهای دور**\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Hard Drive Contents**\n\nتوضیح:\nاین داده نسبتاً پایدار است و حتی بعد از خاموش شدن سیستم باقی می‌ماند، پس اولویت بعد از RAM دارد\n\n**Log Files روی دیسک**\n\nتوضیح:\nاین هم روی دیسک ذخیره شده و پایدارتر از RAM است\n\n**Backup Tapes**\n\nتوضیح:\nاین پایدارترین نوع داده در این لیست است و معمولاً آخرین اولویت برای جمع‌آوری فوری محسوب می‌شود\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان سناریو گفت **\"سیستم هنوز روشن/در حال اجراست\"** و سؤال درباره‌ی اولویت جمع‌آوری بود، اولین جواب تقریباً همیشه **RAM** است (مگر اینکه CPU Cache هم به‌عنوان گزینه باشد، که آن حتی ناپایدارتر است)\n\n---",
  "domain": 4
 },
 {
  "number": 34,
  "en": "A security analyst wants to prevent attackers from associating their own MAC address with the IP address of the default gateway on the local network. Which of the following security features would BEST mitigate this risk?",
  "fa": "یک تحلیلگر امنیتی می‌خواهد از این جلوگیری کند که مهاجمان آدرس MAC خودشان را با آدرس IP دروازه‌ی پیش‌فرض در شبکه‌ی محلی مرتبط کنند. کدام ویژگی امنیتی بهترین راه‌حل برای کاهش این خطر است؟",
  "options": [
   "A) Dynamic ARP Inspection",
   "B) Port Security",
   "C) DNSSEC",
   "D) Network Access Control"
  ],
  "correct": "A",
  "explanation": "درسته! ✅ گزینه A\n\n**Dynamic ARP Inspection (DAI)**\n\nتوضیح:\nاین ویژگی روی سوئیچ‌های شبکه فعال می‌شود و پیام‌های ARP را قبل از پذیرفتن، با یک جدول معتبر از association های IP-MAC مقایسه می‌کند\n\nاگر یک پیام ARP جعلی (مثل ادعای دروغین \"من دروازه‌ی پیش‌فرض هستم\") دریافت شود، سوئیچ آن را **رد می‌کند** و اجازه نمی‌دهد در جدول ARP دستگاه‌های دیگر تأثیر بگذارد\n\nاین دقیقاً راه‌حل تخصصی برای جلوگیری از **ARP Poisoning** است که در سؤال قبلی با هم کار کردیم\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Port Security**\n\nتوضیح:\nاین ویژگی تعداد یا نوع آدرس‌های MAC مجاز روی هر پورت سوئیچ را محدود می‌کند؛ بیشتر برای جلوگیری از **MAC Flooding** یا اتصال دستگاه‌های غیرمجاز کاربرد دارد، نه مستقیماً برای ARP\n\n**DNSSEC**\n\nتوضیح:\nاین برای تأیید صحت و یکپارچگی پاسخ‌های DNS استفاده می‌شود تا از حملاتی مثل **DNS Poisoning** جلوگیری کند، نه ARP Poisoning\n\n**Network Access Control (NAC)**\n\nتوضیح:\nاین کنترل می‌کند که کدام دستگاه‌ها اصلاً اجازه‌ی اتصال به شبکه را دارند (مثلاً بر اساس سلامت دستگاه یا احراز هویت)، اما به‌طور خاص برای بررسی صحت پیام‌های ARP طراحی نشده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان کلمه‌ی **\"ARP Poisoning\"** یا **\"prevent fake ARP messages\"** را دیدی، راه‌حل همیشه **Dynamic ARP Inspection** است\n\n---\n\nتا الان به سؤال ۲۹ از ۳۰۰ رسیدیم. ادامه بدیم؟",
  "domain": 3
 },
 {
  "number": 35,
  "en": "A company wants to restrict access to its financial database so that employees can only access it during business hours from devices physically located inside the corporate office network. Which of the following BEST describes this access control approach?",
  "fa": "یک شرکت می‌خواهد دسترسی به پایگاه‌داده‌ی مالی خود را محدود کند تا کارمندان فقط در ساعات کاری و از دستگاه‌هایی که فیزیکی داخل شبکه‌ی دفتر شرکت قرار دارند، بتوانند به آن دسترسی داشته باشند. کدام گزینه بهترین توصیف این روش کنترل دسترسی است؟",
  "options": [
   "A) Mandatory Access Control",
   "B) Discretionary Access Control",
   "C) Attribute-Based Access Control",
   "D) Rule-Based Access Control"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Attribute-Based Access Control** هست، نه A.\n\n**Attribute-Based Access Control (ABAC)**\n\nتوضیح:\nاین مدل دسترسی بر اساس **ترکیبی از چند ویژگی (Attribute)** تصمیم‌گیری می‌کند، نه فقط نقش کاربر\n\nدر این سناریو، دو ویژگی مختلف با هم بررسی می‌شوند:\n\n**زمان** (فقط ساعات کاری)\n\n**موقعیت/مکان** (فقط از داخل شبکه‌ی دفتر شرکت)\n\nاین دقیقاً تعریف کلاسیک ABAC است: تصمیم‌گیری پویا بر اساس چندین ویژگی هم‌زمان (کاربر، منبع، محیط، زمان، مکان)\n\nچرا گزینه‌ی A (Mandatory Access Control) رد شد:\n\n**Mandatory Access Control (MAC)**\n\nتوضیح:\nاین مدل بر اساس **سطح طبقه‌بندی امنیتی ثابت** (مثل Top Secret، Confidential) تصمیم می‌گیرد که چه کسی به چه داده‌ای دسترسی دارد، که توسط یک مرجع مرکزی (نه خود کاربر) تعیین می‌شود. این مدل ربطی به زمان یا موقعیت مکانی ندارد و بیشتر در محیط‌های نظامی و دولتی کاربرد دارد\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Discretionary Access Control**\n\nتوضیح:\nدر این مدل، **خود مالک داده** تصمیم می‌گیرد چه کسی به آن دسترسی دارد (مثل تنظیمات Share در فایل‌های گوگل‌درایو)، نه یک سیاست سازمانی بر اساس زمان و مکان\n\n**Rule-Based Access Control**\n\nتوضیح:\nاین مدل بر اساس **قوانین ثابت و از پیش تعیین‌شده** (مثل قوانین فایروال: اگر IP از کشور X بود، رد کن) عمل می‌کند. شباهت زیادی به ABAC دارد، اما تفاوتش این است که ABAC **ویژگی‌های پویا و متعدد** (کاربر + زمان + مکان + دستگاه) را همزمان در نظر می‌گیرد، در حالی که Rule-Based معمولاً سفت‌وسخت‌تر و مبتنی بر یک قانون ساده‌ی If-Then است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان سناریو **چند ویژگی متفاوت را با هم ترکیب می‌کرد** (مثل زمان + مکان + نوع دستگاه)، جواب معمولاً **ABAC** است\nاگر فقط **یک قانون ساده‌ی If-Then** بود (مثل \"اگر IP از این رنج بود، block کن\")، جواب **Rule-Based** است\n\nاین یک مفهوم جدید و کمی ظریف بود، طبیعیه که اشتباه بزنی. به‌زودی دوباره با یک سناریوی دیگه روی این موضوع کار می‌کنیم.",
  "domain": 5
 },
 {
  "number": 36,
  "en": "A company's HR department grants new employees access to systems based solely on their job title (e.g., \"Sales Representative\" automatically gets access to the CRM system). When an employee changes departments, their old access is removed and new access matching their new title is granted. Which access control model is this?",
  "fa": "بخش منابع انسانی یک شرکت، دسترسی کارمندان جدید را صرفاً بر اساس عنوان شغلی آن‌ها اعطا می‌کند (مثلاً \"نماینده‌ی فروش\" به‌طور خودکار دسترسی به سیستم CRM می‌گیرد). وقتی کارمندی بخش خود را تغییر می‌دهد، دسترسی قبلی حذف و دسترسی متناسب با عنوان جدید اعطا می‌شود. این کدام مدل کنترل دسترسی است؟",
  "options": [
   "A) Mandatory Access Control",
   "B) Role-Based Access Control",
   "C) Discretionary Access Control",
   "D) Attribute-Based Access Control"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Role-Based Access Control (RBAC)**\n\nتوضیح:\nاین مدل دسترسی را بر اساس **نقش یا عنوان شغلی** کاربر در سازمان تعیین می‌کند، نه بر اساس ویژگی‌های پویا (مثل زمان یا مکان) یا برچسب‌های ثابت طبقه‌بندی\n\nنکته‌ی کلیدی این سؤال: وقتی کارمند نقشش تغییر می‌کند، دسترسی‌ها به‌طور خودکار **بر اساس نقش جدید** به‌روزرسانی می‌شوند؛ این دقیقاً مزیت اصلی RBAC در مدیریت ساده‌تر دسترسی‌هاست\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Mandatory Access Control**\n\nتوضیح:\nاین بر اساس برچسب طبقه‌بندی ثابت روی منبع است، نه عنوان شغلی کاربر\n\n**Discretionary Access Control**\n\nتوضیح:\nدر این مدل، مالک منبع به‌صورت دستی تصمیم می‌گیرد، نه یک سیستم خودکار بر اساس عنوان شغلی\n\n**Attribute-Based Access Control**\n\nتوضیح:\nاین مدل چند ویژگی متفاوت (نه فقط عنوان شغلی) را با هم ترکیب می‌کند، در حالی که در این سؤال فقط یک فاکتور وجود دارد: عنوان شغلی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"based on job title/role\"** را دیدی، جواب همیشه **RBAC** است\n\n---",
  "domain": 5
 },
 {
  "number": 37,
  "en": "A file owner on a shared corporate drive manually selects which specific colleagues can view or edit their document by adding their names to a sharing list. Which access control model does this represent?",
  "fa": "مالک یک فایل روی درایو مشترک شرکت، به‌صورت دستی انتخاب می‌کند که کدام همکاران خاص می‌توانند سند او را مشاهده یا ویرایش کنند، با اضافه کردن نام آن‌ها به یک لیست اشتراک‌گذاری. این کدام مدل کنترل دسترسی را نشان می‌دهد؟",
  "options": [
   "A) Mandatory Access Control",
   "B) Discretionary Access Control",
   "C) Role-Based Access Control",
   "D) Rule-Based Access Control"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Discretionary Access Control (DAC)**\n\nتوضیح:\nدر این مدل، **خود مالک منبع** (نه یک مرجع مرکزی یا سیستم خودکار) به‌صورت مستقیم و دستی تصمیم می‌گیرد چه کسانی به فایلش دسترسی داشته باشند\n\nاین دقیقاً همان چیزی است که در گوگل‌درایو یا دراپ‌باکس هم می‌بینی: وقتی خودت یک فایل را Share می‌کنی و ایمیل افراد خاصی را اضافه می‌کنی\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Mandatory Access Control**\n\nتوضیح:\nدر این مدل، نه مالک فایل بلکه یک مرجع مرکزی دسترسی را بر اساس برچسب طبقه‌بندی تعیین می‌کند\n\n**Role-Based Access Control**\n\nتوضیح:\nدسترسی بر اساس نقش شغلی است، نه انتخاب دستی مالک فایل\n\n**Rule-Based Access Control**\n\nتوضیح:\nدسترسی بر اساس قوانین از پیش تعیین‌شده (مثل If-Then) است، نه انتخاب شخصی مالک\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"file owner decides/grants access\"** را دیدی، جواب همیشه **DAC** است\n\nعالی پیش رفتی! حالا چهار مدل اصلی کنترل دسترسی رو با مثال‌های متفاوت دیدی:\n\nMAC = برچسب ثابت + مرجع مرکزی\nDAC = تصمیم مالک فایل\nRBAC = بر اساس نقش شغلی\nABAC = ترکیب چند ویژگی پویا\n\n---",
  "domain": 5
 },
 {
  "number": 38,
  "en": "A security administrator implements a system where access to the payroll application requires verification of the user's department, time of request, device compliance status, and current network location — all evaluated together before granting access. Which access control model is this?",
  "fa": "یک مدیر امنیتی سیستمی پیاده‌سازی می‌کند که دسترسی به اپلیکیشن حقوق و دستمزد نیاز به تأیید همزمان بخش کاربر، زمان درخواست، وضعیت سلامت دستگاه، و موقعیت فعلی شبکه دارد — همه با هم ارزیابی می‌شوند قبل از اعطای دسترسی. این کدام مدل کنترل دسترسی است؟",
  "options": [
   "A) Rule-Based Access Control",
   "B) Mandatory Access Control",
   "C) Attribute-Based Access Control",
   "D) Discretionary Access Control"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Attribute-Based Access Control (ABAC)**\n\nتوضیح:\nاین سؤال دقیقاً ویژگی اصلی ABAC را نشان می‌دهد: ترکیب **چند ویژگی متفاوت و پویا** به‌صورت همزمان برای تصمیم‌گیری\n\nدر این سناریو چهار ویژگی مختلف با هم بررسی می‌شوند:\n\nبخش کاربر (User Attribute)\nزمان درخواست (Time Attribute)\nوضعیت سلامت دستگاه (Device Attribute)\nموقعیت شبکه (Location/Environment Attribute)\n\nاین دقیقاً تفاوتش با Rule-Based است که معمولاً فقط **یک شرط ساده** را بررسی می‌کند (مثل فقط IP)، در حالی که ABAC چندین ویژگی را هم‌زمان و پویا ارزیابی می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Rule-Based Access Control**\n\nتوضیح:\nاین معمولاً یک قانون ساده‌ی If-Then با یک یا دو شرط ثابت است، نه ترکیب چندگانه‌ی پویا از چهار ویژگی مختلف\n\n**Mandatory Access Control**\n\nتوضیح:\nاین بر اساس برچسب طبقه‌بندی ثابت روی منبع است (مثل Confidential)، نه ارزیابی هم‌زمان چند ویژگی پویا\n\n**Discretionary Access Control**\n\nتوضیح:\nاین بر اساس تصمیم دستی مالک منبع است، نه ارزیابی خودکار و ترکیبی ویژگی‌ها\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان **بیش از یک ویژگی پویا با هم** (کاربر + زمان + مکان + دستگاه) ارزیابی می‌شدند، جواب همیشه **ABAC** است\n\nعالی! این بار هم کاملاً درست تشخیص دادی 👏 به نظر می‌رسه الان تفاوت چهار مدل کنترل دسترسی (MAC, DAC, RBAC, ABAC, Rule-Based) رو کاملاً یاد گرفتی.\n\n---",
  "domain": 5
 },
 {
  "number": 39,
  "en": "During a vulnerability scan, a security tool reports that a critical patch is missing on a production server. However, upon manual inspection, the analyst confirms the patch is actually installed and the system is not vulnerable. Which of the following BEST describes this situation?",
  "fa": "در حین یک اسکن آسیب‌پذیری، یک ابزار امنیتی گزارش می‌دهد که یک وصله‌ی حیاتی روی سرور تولید نصب نشده است. اما پس از بررسی دستی، تحلیلگر تأیید می‌کند که وصله واقعاً نصب شده و سیستم آسیب‌پذیر نیست. کدام گزینه بهترین توصیف این وضعیت است؟",
  "options": [
   "A) True Positive",
   "B) False Positive",
   "C) True Negative",
   "D) False Negative"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**False Positive**\n\nتوضیح:\nابزار **اعلام کرد** که مشکل وجود دارد (یعنی Positive به‌معنای \"تشخیص تهدید\")، اما در واقعیت مشکلی وجود نداشت\n\nپس: ابزار **اشتباه** (False) یک هشدار **مثبت/تهدید** (Positive) داد\n\nاین یکی از مهم‌ترین مفاهیم در Security Operations است، چون False Positive های زیاد باعث **Alert Fatigue** می‌شوند؛ یعنی تحلیلگران امنیتی آن‌قدر هشدار اشتباه می‌بینند که ممکن است هشدارهای واقعی را هم نادیده بگیرند\n\nجدول کامل این چهار حالت (که باید کاملاً حفظ باشد):\n\n**True Positive**\nابزار گفت تهدید هست، و واقعاً هم هست (تشخیص درست)\n\n**False Positive**\nابزار گفت تهدید هست، اما واقعاً نیست (هشدار اشتباه)\n\n**True Negative**\nابزار گفت تهدید نیست، و واقعاً هم نیست (درست تشخیص داد که امن است)\n\n**False Negative**\nابزار گفت تهدید نیست، اما واقعاً هست (خطرناک‌ترین حالت، چون تهدید واقعی نادیده گرفته می‌شود)\n\nنکته‌ی کلیدی برای امتحان:\n**False Negative** بدترین حالت ممکن است، چون یک تهدید واقعی را به‌کلی از دست می‌دهی\n**False Positive** کم‌خطرتر است، اما باعث اتلاف وقت و Alert Fatigue می‌شود\n\n---",
  "domain": 4
 },
 {
  "correct": "C",
  "domain": 4,
  "en": "A SIEM system collects, correlates, and analyzes log data from multiple sources to detect security incidents in real time. What does SIEM stand for?",
  "fa": "یک سیستم SIEM لاگ‌ها را از منابع متعدد جمع‌آوری و تحلیل می‌کند. SIEM مخفف چیست؟",
  "options": [
   "A) System Information and Event Monitoring",
   "B) Security Incident and Event Management",
   "C) Security Information and Event Management",
   "D) System Integration and Event Management"
  ],
  "explanation": "SIEM = Security Information and Event Management. لاگ‌ها را جمع‌آوری، همبسته و تحلیل می‌کند برای تشخیص حوادث.",
  "number": 40
 },
 {
  "number": 41,
  "en": "A company wants to test its incident response team's readiness without actually impacting production systems, by having a separate team simulate real-world attack scenarios in a controlled discussion-based format. Which of the following exercises BEST matches this description?",
  "fa": "یک شرکت می‌خواهد آمادگی تیم واکنش به حادثه‌ی خود را بدون تأثیرگذاری واقعی بر سیستم‌های تولید، آزمایش کند؛ به این صورت که یک تیم جداگانه سناریوهای حمله‌ی واقعی را در یک فرمت بحث‌محور و کنترل‌شده شبیه‌سازی می‌کند. کدام تمرین بهترین تطابق با این توصیف را دارد؟",
  "options": [
   "A) Tabletop Exercise",
   "B) Penetration Test",
   "C) Red Team Exercise",
   "D) Vulnerability Scan"
  ],
  "correct": "A",
  "explanation": "مشکلی نیست، بگذار راهنماییت کنم تا خودت به جواب برسی.\n\nسرنخ ۱:\nبه این کلمات دقت کن: **\"without actually impacting production systems\"** و **\"discussion-based format\"**. این یعنی هیچ حمله‌ی واقعی روی هیچ سیستمی انجام نمی‌شود؛ فقط افراد **می‌نشینند و درباره‌ی سناریو صحبت می‌کنند**.\n\nسرنخ ۲:\nفکر کن به یک جلسه‌ی دور یک میز، جایی که تیم می‌نشیند و می‌گوید \"اگر این اتفاق بیفتد، ما چه کار می‌کنیم؟\" — بدون اینکه واقعاً چیزی هک یا تست شود.\n\nبا این دو سرنخ، کدوم گزینه به ذهنت میاد؟",
  "domain": 4
 },
 {
  "number": 42,
  "en": "A company's security policy requires that critical system updates be tested in a non-production environment before being applied to live systems, and that a documented rollback plan exists in case the update causes issues. Which of the following processes does this describe?",
  "fa": "سیاست امنیتی یک شرکت الزام می‌کند که به‌روزرسانی‌های حیاتی سیستم قبل از اعمال روی سیستم‌های واقعی، در یک محیط غیرتولیدی تست شوند و یک برنامه‌ی بازگشت (Rollback) مستند برای زمانی که به‌روزرسانی مشکل ایجاد کند وجود داشته باشد. کدام فرآیند این موضوع را توصیف می‌کند؟",
  "options": [
   "A) Patch Management",
   "B) Change Management",
   "C) Configuration Management",
   "D) Vulnerability Management"
  ],
  "correct": "B",
  "explanation": "مشکلی نیست، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این دو کلمه دقت کن: **\"tested in non-production environment\"** و **\"documented rollback plan\"**. این دو با هم، یک **فرآیند رسمی برای مدیریت هرگونه تغییر** در سیستم را توصیف می‌کنند، نه فقط نصب یک وصله‌ی امنیتی خاص.\n\nسرنخ ۲:\nاین سؤال در واقع دارد می‌گوید: \"قبل از اینکه هر تغییری (نه فقط patch) روی سیستم واقعی اعمال شود، باید یک فرآیند رسمی تأیید، تست، و برنامه‌ی برگشت داشته باشیم.\" این مفهوم در IT معمولاً با عبارت **\"CAB\" (Change Advisory Board)** هم مرتبط است.\n\nبا این دو سرنخ، فکر می‌کنی کدوم گزینه به این فرآیند رسمی و کلی‌تر (نه فقط نصب وصله) اشاره دارد؟",
  "domain": 4
 },
 {
  "number": 43,
  "en": "A network administrator divides the corporate network into separate zones, placing IoT devices, guest Wi-Fi, and critical servers on different VLANs so that a compromise in one zone cannot easily spread to another. Which of the following BEST describes this strategy?",
  "fa": "یک مدیر شبکه، شبکه‌ی شرکت را به بخش‌های مجزا تقسیم می‌کند و دستگاه‌های IoT، Wi-Fi مهمان، و سرورهای حیاتی را روی VLAN های مختلف قرار می‌دهد تا اگر یک بخش آسیب دید، به‌راحتی به بخش‌های دیگر سرایت نکند. کدام گزینه بهترین توصیف این استراتژی است؟",
  "options": [
   "A) Hardening",
   "B) Segmentation",
   "C) Patch Management",
   "D) Zero Trust"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Segmentation**\n\nتوضیح:\nاین استراتژی به تقسیم شبکه به بخش‌های مجزا (مثل VLAN های مختلف) اشاره دارد تا اگر یک بخش آسیب دید، آسیب محدود به همان بخش بماند و به‌راحتی به بقیه‌ی شبکه سرایت نکند\n\nاین دقیقاً اصل **\"کاهش سطح حمله از طریق ایزوله‌سازی\"** است. حتی اگر یک دستگاه IoT آسیب‌پذیر هک شود، مهاجم نمی‌تواند مستقیماً به سرورهای حیاتی دسترسی پیدا کند، چون آن‌ها در یک VLAN جداگانه قرار دارند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Hardening**\n\nتوضیح:\nاین به تقویت تنظیمات امنیتی **یک سیستم خاص** اشاره دارد (مثل غیرفعال کردن پروتکل قدیمی)، نه تقسیم‌بندی کلی شبکه به بخش‌های مجزا\n\n**Patch Management**\n\nتوضیح:\nاین به نصب وصله‌های نرم‌افزاری اشاره دارد، کاملاً بی‌ربط به طراحی و تقسیم‌بندی شبکه\n\n**Zero Trust**\n\nتوضیح:\nاین یک فیلسوفه‌ی کلی‌تر امنیتی است (Never Trust, Always Verify)؛ هرچند Segmentation می‌تواند یکی از ابزارهای پیاده‌سازی Zero Trust باشد، اما خود این سناریو دقیقاً و مستقیماً نام **Segmentation** را توصیف می‌کند، نه کل فیلسوفه‌ی Zero Trust\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"VLANs\"**، **\"isolate critical systems\"**، یا **\"limit the spread of a compromise\"** را دیدی، جواب همیشه **Segmentation** است\n\n---",
  "domain": 5
 },
 {
  "number": 44,
  "en": "A company wants to reduce the risk of a single compromised administrator account being used to access every system in the network. They decide that no single account should have full administrative rights across all systems; instead, different admins manage different segments. Which security principle does this represent?",
  "fa": "یک شرکت می‌خواهد ریسک استفاده از یک حساب مدیر آسیب‌دیده برای دسترسی به تمام سیستم‌های شبکه را کاهش دهد. آن‌ها تصمیم می‌گیرند که هیچ حساب کاربری به‌تنهایی دسترسی مدیریتی کامل به تمام سیستم‌ها نداشته باشد؛ در عوض، مدیران مختلف بخش‌های مختلف را مدیریت می‌کنند. این سناریو کدام اصل امنیتی را نشان می‌دهد؟",
  "options": [
   "A) Least Privilege",
   "B) Job Rotation",
   "C) Separation of Duties",
   "D) Mandatory Vacation"
  ],
  "correct": "A",
  "explanation": "جواب درست **A) Least Privilege** هست، نه C. این یک سؤال ظریف بود، بگذار تفاوتش رو با Separation of Duties دقیق توضیح بدم.\n\n**Least Privilege**\n\nتوضیح:\nاین اصل می‌گوید هر حساب کاربری (از جمله حساب‌های مدیریتی) باید فقط به **حداقل دسترسی لازم** برای انجام وظیفه‌اش محدود شود، نه دسترسی کامل به همه‌چیز\n\nدر این سناریو، تقسیم دسترسی مدیریتی بین چند ادمین مختلف (هرکدام فقط روی بخش خودشان) دقیقاً یعنی هر فرد فقط به همان مقداری که برای کارش لازم است دسترسی دارد، نه به کل شبکه\n\nچرا گزینه‌ی C (Separation of Duties) دقیق نبود:\n\n**Separation of Duties**\n\nتوضیح:\nاین اصل مخصوص زمانی است که یک **فرآیند حساس واحد** (مثل تأیید پرداخت مالی) بین چند نفر **تقسیم** می‌شود تا هیچ‌کس به‌تنهایی نتواند کل فرآیند را کنترل کند (هدف: جلوگیری از تقلب یا خطا)\n\nتفاوت کلیدی: در این سناریو صحبت از یک فرآیند واحد که بین چند نفر تقسیم شده نیست؛ بلکه صحبت از این است که **دسترسی هرکس محدود به بخش خودش باشد** — این دقیقاً تعریف Least Privilege است\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Job Rotation**\n\nتوضیح:\nاین به چرخش دوره‌ای کارمندان بین نقش‌های مختلف اشاره دارد، نه تقسیم دسترسی بر اساس بخش\n\n**Mandatory Vacation**\n\nتوضیح:\nاین به مرخصی اجباری دوره‌ای اشاره دارد تا تخلفات احتمالی در غیاب فرد کشف شود، کاملاً بی‌ربط به این سناریو\n\nنکته‌ی کلیدی برای امتحان (تفاوت نهایی این دو مفهوم مشابه):\n**Least Privilege** = محدود کردن **میزان دسترسی** هر فرد به حداقل لازم\n**Separation of Duties** = تقسیم یک **فرآیند واحد** بین چند نفر برای جلوگیری از کنترل کامل توسط یک نفر\n\nاین یکی از مفاهیمی است که باید بیشتر روش کار کنیم. به‌زودی دوباره با سناریوی دیگه میارمش.",
  "domain": 5
 },
 {
  "number": 45,
  "en": "A company implements a policy requiring all employees to take at least five consecutive days of vacation per year, during which their job duties are temporarily covered by another employee. Which of the following is the PRIMARY security purpose of this policy?",
  "fa": "یک شرکت سیاستی پیاده‌سازی می‌کند که الزام می‌کند تمام کارمندان حداقل پنج روز متوالی در سال مرخصی بگیرند، که در این مدت وظایف شغلی آن‌ها به‌طور موقت توسط کارمند دیگری پوشش داده می‌شود. هدف اصلی امنیتی این سیاست کدام است؟",
  "options": [
   "A) Reduce employee burnout",
   "B) Detect fraudulent activity through the temporary coverage employee",
   "C) Comply with labor laws",
   "D) Encourage job rotation"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Mandatory Vacation**\n\nتوضیح:\nهدف اصلی امنیتی این سیاست، **کشف فعالیت‌های متقلبانه یا سوءاستفاده** است. وقتی یک کارمند مجبور به مرخصی می‌شود، فرد دیگری موقتاً وظایفش را انجام می‌دهد\n\nاگر آن کارمند اصلی فعالیت مخفیانه یا متقلبانه‌ای انجام می‌داده (مثلاً دستکاری حساب‌های مالی، یا داشتن دسترسی‌های غیرضروری که از آن سوءاستفاده می‌کرده)، در غیاب او، فرد جایگزین احتمالاً به این موارد غیرعادی پی می‌برد\n\nنکته‌ی مهم: گزینه‌های A و C (کاهش خستگی کارمند یا رعایت قوانین کار) هم می‌توانند فواید جانبی این سیاست باشند، اما سؤال به‌طور مشخص پرسیده **\"PRIMARY SECURITY purpose\"**، یعنی هدف اصلی از منظر امنیتی، نه فواید جانبی منابع انسانی\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Reduce Employee Burnout**\n\nتوضیح:\nاین یک فایده‌ی واقعی است، اما هدف **امنیتی** این سیاست نیست؛ این بیشتر مرتبط با سلامت کارمند است\n\n**Comply with Labor Laws**\n\nتوضیح:\nاین هم می‌تواند یک دلیل جانبی باشد، اما هدف اصلی **امنیتی** سیاست نیست\n\n**Encourage Job Rotation**\n\nتوضیح:\nJob Rotation یک مفهوم جداست (چرخش دائمی نقش‌ها)، نه پوشش موقت در طول مرخصی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"mandatory vacation\"** و **\"temporary coverage\"** را با هم دیدی، هدف اصلی همیشه **شناسایی فعالیت مخرب/متقلبانه در غیاب فرد** است",
  "domain": 5
 },
 {
  "number": 46,
  "en": "A company's security policy requires every new piece of software to be evaluated, approved, and documented by a designated committee before it can be installed on any corporate device. Which of the following does this policy address?",
  "fa": "سیاست امنیتی یک شرکت الزام می‌کند که هر نرم‌افزار جدید قبل از نصب روی هر دستگاه شرکتی، توسط یک کمیته‌ی مشخص ارزیابی، تأیید، و مستند شود. این سیاست به کدام مورد می‌پردازد؟",
  "options": [
   "A) Shadow IT",
   "B) Bring Your Own Device",
   "C) Insider Threat",
   "D) Supply Chain Risk"
  ],
  "correct": "A",
  "explanation": "جواب درست **A) Shadow IT** هست، نه D.\n\n**Shadow IT**\n\nتوضیح:\nShadow IT به استفاده از نرم‌افزار، سرویس، یا دستگاه‌هایی در سازمان اشاره دارد که **بدون تأیید و اطلاع بخش IT/امنیت** نصب یا استفاده می‌شوند\n\nاین سیاست (الزام تأیید رسمی هر نرم‌افزار جدید توسط یک کمیته قبل از نصب) دقیقاً برای **پیشگیری از Shadow IT** طراحی شده؛ یعنی جلوگیری از اینکه کارمندان به‌صورت خودسرانه نرم‌افزارهای ناشناخته و تأییدنشده نصب کنند که می‌توانند ریسک امنیتی (مثل بدافزار یا آسیب‌پذیری ناشناخته) ایجاد کنند\n\nچرا گزینه‌ی D (Supply Chain Risk) دقیق نبود:\n\n**Supply Chain Risk**\n\nتوضیح:\nاین به ریسک‌های ناشی از **تامین‌کنندگان و شرکای ثالث** در زنجیره‌ی تأمین اشاره دارد (مثل یک آسیب‌پذیری در نرم‌افزار یک Vendor که شرکت از آن استفاده می‌کند). هرچند می‌توانست با ارزیابی نرم‌افزار جدید کمی مرتبط باشد، اما تمرکز اصلی این سؤال روی **کنترل داخلی نصب نرم‌افزار توسط کارمندان** است، نه ریسک تامین‌کنندگان بیرونی\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Bring Your Own Device**\n\nتوضیح:\nاین به سیاست استفاده از **دستگاه‌های شخصی کارمندان** برای کار اشاره دارد، نه تأیید نرم‌افزار روی دستگاه‌های شرکتی\n\n**Insider Threat**\n\nتوضیح:\nاین به تهدیدات ناشی از کارمندان داخلی (با نیت مخرب یا تصادفی) اشاره دارد، که مفهومی گسترده‌تر و متفاوت از کنترل نصب نرم‌افزار است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"unauthorized software/applications installed without IT approval\"** را دیدی، جواب همیشه **Shadow IT** است\n\nاین یکی از مفاهیمی است که باید بیشتر روش کار کنیم. به‌زودی دوباره با سناریوی متفاوت میارمش.",
  "domain": 5
 },
 {
  "number": 47,
  "en": "A company wants to ensure that backup data stored offsite can be restored quickly in the event of a disaster, with a maximum acceptable downtime of 4 hours. Which of the following terms refers to this 4-hour target?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که داده‌های پشتیبان ذخیره‌شده در خارج از سایت، در صورت بروز فاجعه، به‌سرعت بازیابی شوند، با حداکثر زمان قطعی قابل‌قبول ۴ ساعت. کدام اصطلاح به این هدف ۴ ساعته اشاره دارد؟",
  "options": [
   "A) RPO (Recovery Point Objective)",
   "B) RTO (Recovery Time Objective)",
   "C) MTBF (Mean Time Between Failures)",
   "D) MTTR (Mean Time To Repair)"
  ],
  "correct": "B",
  "explanation": "مشکلی نیست، بگذار این دو اصطلاح مهم (RPO و RTO) رو که خیلی شبیه هم هستن دقیق برات باز کنم.\n\nسرنخ ۱:\nکلمه‌ی **Time** در RTO و کلمه‌ی **Point** در RPO، کلید تشخیص این دو هستن:\n\n**RTO** = Recovery **Time** Objective → به **مدت‌زمان** (چقدر طول می‌کشد سیستم برگردد) اشاره دارد\n\n**RPO** = Recovery **Point** Objective → به یک **نقطه‌ی زمانی در گذشته** (چه مقدار داده ممکن است از دست برود) اشاره دارد\n\nسرنخ ۲:\nدر این سؤال، عبارت **\"maximum acceptable downtime\"** (حداکثر زمان قطعی قابل‌قبول) آمده. این دقیقاً درباره‌ی این است که **چه مدت زمان** طول می‌کشد سیستم دوباره کار کند، نه اینکه چه مقدار داده از دست می‌رود.\n\nبا این دو سرنخ، فکر می‌کنی کدوم گزینه (بین RPO و RTO) به این هدف ۴ ساعته اشاره دارد؟",
  "domain": 5
 },
 {
  "number": 48,
  "en": "A company performs backups every 24 hours. After a server crash, management determines that losing up to 24 hours of data is acceptable, but no more. Which of the following terms describes this 24-hour acceptable data loss threshold?",
  "fa": "یک شرکت هر ۲۴ ساعت یک‌بار بکاپ می‌گیرد. پس از خرابی سرور، مدیریت تشخیص می‌دهد که از دست رفتن تا ۲۴ ساعت داده قابل‌قبول است، نه بیشتر. کدام اصطلاح این آستانه‌ی ۲۴ ساعته‌ی از دست رفتن داده‌ی قابل‌قبول را توصیف می‌کند؟",
  "options": [
   "A) RTO (Recovery Time Objective)",
   "B) RPO (Recovery Point Objective)",
   "C) MTBF (Mean Time Between Failures)",
   "D) SLA (Service Level Agreement)"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**RPO (Recovery Point Objective)**\n\nتوضیح:\nاین اصطلاح به **حداکثر مقدار داده‌ای** اشاره دارد که سازمان حاضر است در صورت بروز فاجعه از دست بدهد، بر اساس فاصله‌ی زمانی بین بکاپ‌ها\n\nچون بکاپ‌گیری هر ۲۴ ساعت انجام می‌شود، در بدترین حالت (اگر خرابی دقیقاً قبل از بکاپ بعدی رخ دهد)، تا ۲۴ ساعت داده ممکن است از دست برود؛ این دقیقاً همان **RPO = 24 ساعت** است\n\nنکته‌ی کاربردی: اگر سازمان بخواهد RPO کمتری داشته باشد (مثلاً ۱ ساعت)، باید **دفعات بکاپ‌گیری را افزایش دهد** (مثلاً هر ۱ ساعت بکاپ بگیرد)، نه هر ۲۴ ساعت\n\nچرا گزینه‌های دیگر رد شدند:\n\n**RTO**\n\nتوضیح:\nاین به مدت‌زمان لازم برای **بازگرداندن سیستم به کار** اشاره دارد (مثلاً سیستم باید ظرف چند ساعت دوباره فعال شود)، نه به مقدار داده‌ی از دست‌رفته\n\n**MTBF**\n\nتوضیح:\nاین میانگین زمان بین خرابی‌های یک سیستم را نشان می‌دهد (معیار قابلیت‌اطمینان سخت‌افزار)، نه آستانه‌ی از دست رفتن داده\n\n**SLA (Service Level Agreement)**\n\nتوضیح:\nاین یک توافق رسمی بین سازمان و یک تامین‌کننده/مشتری درباره‌ی سطح خدمات (مثل Uptime تعهدشده) است؛ می‌تواند RTO و RPO را در خود داشته باشد، اما خودش اصطلاح دقیق برای این آستانه‌ی خاص نیست\n\nنکته‌ی کلیدی برای امتحان:\nرابطه‌ی RPO با دفعات بکاپ‌گیری مستقیم است: **هرچه بکاپ‌گیری بیشتر، RPO کمتر** (داده‌ی کمتری از دست می‌رود)",
  "domain": 5
 },
 {
  "number": 49,
  "en": "A company wants to ensure that even if its primary data center is completely destroyed by a natural disaster, business operations can continue with minimal disruption. They contract with a provider for a secondary location with fully configured, ready-to-use servers that can be activated almost immediately. Which of the following BEST describes this type of site?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که حتی اگر مرکز داده‌ی اصلی‌اش به‌طور کامل توسط یک بلای طبیعی نابود شود، عملیات کسب‌وکار با حداقل وقفه ادامه یابد. آن‌ها با یک تامین‌کننده برای یک مکان ثانویه با سرورهای کاملاً پیکربندی‌شده و آماده‌ی استفاده قرارداد می‌بندند که می‌توانند تقریباً فوراً فعال شوند. کدام گزینه بهترین توصیف این نوع سایت است؟",
  "options": [
   "A) Cold Site",
   "B) Warm Site",
   "C) Hot Site",
   "D) Cloud Backup"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Hot Site**\n\nتوضیح:\nاین نوع سایت **کاملاً پیکربندی‌شده و آماده‌ی استفاده‌ی فوری** است، با سرورها، داده‌های به‌روز (یا تقریباً به‌روز)، و زیرساخت کامل، که می‌تواند در عرض چند دقیقه تا چند ساعت فعال شود\n\nاین گزینه برای سازمان‌هایی مناسب است که **RTO بسیار کوتاهی** نیاز دارند (یعنی نمی‌توانند زمان قطعی زیادی را تحمل کنند)، اما هزینه‌ی نگهداری آن بسیار بالاست چون باید همیشه آماده و به‌روز باشد\n\nمقایسه‌ی سه نوع سایت (که باید کاملاً حفظ باشد):\n\n**Hot Site**\nکاملاً آماده، تجهیزات و داده‌ی به‌روز، فعال‌سازی تقریباً فوری\nهزینه: بسیار بالا\n\n**Warm Site**\nتجهیزات سخت‌افزاری نصب شده، اما داده‌ها باید به‌روزرسانی یا بازیابی شوند\nفعال‌سازی: ساعت‌ها تا یک یا دو روز\nهزینه: متوسط\n\n**Cold Site**\nفقط فضای فیزیکی خام (مثل یک ساختمان خالی)، بدون تجهیزات از پیش نصب‌شده\nفعال‌سازی: روزها تا هفته‌ها\nهزینه: پایین‌ترین\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Cold Site**\n\nتوضیح:\nاین فقط فضای خام است، نیاز به زمان زیاد برای نصب و راه‌اندازی دارد، که با \"فعال‌سازی تقریباً فوری\" در این سؤال مطابقت ندارد\n\n**Warm Site**\n\nتوضیح:\nهرچند تجهیزات نصب شده، اما داده‌ها به‌روز نیستند و نیاز به زمان بیشتری برای فعال‌سازی کامل دارد، نه \"تقریباً فوری\"\n\n**Cloud Backup**\n\nتوضیح:\nاین فقط به ذخیره‌ی داده در فضای ابری اشاره دارد، نه یک سایت کامل و جایگزین با سرورهای فیزیکی یا مجازی آماده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"fully configured\"** + **\"activated almost immediately\"** را دیدی، جواب همیشه **Hot Site** است",
  "domain": 3
 },
 {
  "number": 50,
  "en": "A small business wants a cost-effective disaster recovery option and contracts for a secondary location that has basic infrastructure like power, internet connectivity, and rack space, but requires the company to ship and install its own servers before it can be used. Which of the following BEST describes this type of site?",
  "fa": "یک کسب‌وکار کوچک به دنبال یک گزینه‌ی مقرون‌به‌صرفه برای بازیابی فاجعه است و با یک مکان ثانویه قرارداد می‌بندد که زیرساخت پایه‌ای مثل برق، اتصال اینترنت، و فضای رک دارد، اما نیاز دارد شرکت سرورهای خودش را ارسال و نصب کند تا قابل‌استفاده شود. کدام گزینه بهترین توصیف این نوع سایت است؟",
  "options": [
   "A) Hot Site",
   "B) Warm Site",
   "C) Cold Site",
   "D) Mobile Site"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Cold Site**\n\nتوضیح:\nاین نوع سایت فقط **زیرساخت پایه‌ای** (برق، اتصال اینترنت، فضای فیزیکی/رک) را فراهم می‌کند، اما هیچ سرور یا تجهیزات از پیش نصب‌شده‌ای ندارد\n\nشرکت باید خودش سرورها را **ارسال و نصب کند**، که این فرآیند معمولاً **روزها تا هفته‌ها** طول می‌کشد؛ به همین دلیل این گزینه برای کسب‌وکارهایی مناسب است که می‌توانند RTO طولانی‌تری را تحمل کنند، اما هزینه‌ی پایین‌تری می‌خواهند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Hot Site**\n\nتوضیح:\nاین کاملاً پیکربندی‌شده و آماده‌ی استفاده‌ی فوری است، با هزینه‌ی بسیار بالا؛ کاملاً برخلاف \"نیاز به ارسال و نصب سرور\" در این سؤال\n\n**Warm Site**\n\nتوضیح:\nاین تجهیزات سخت‌افزاری از پیش نصب‌شده دارد (فقط داده باید به‌روزرسانی شود)، اما در این سؤال هیچ سروری از پیش نصب نشده، که آن را از Warm Site متمایز می‌کند\n\n**Mobile Site**\n\nتوضیح:\nاین یک مفهوم متفاوت است که به یک واحد متحرک (مثل یک تریلر یا کانتینر مجهز) اشاره دارد که می‌تواند به هر مکانی منتقل شود؛ این سناریو درباره‌ی یک مکان ثابت با زیرساخت پایه است\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی سه‌گانه):\n**Cold Site** = فقط فضای خام + زیرساخت پایه (ارزان‌ترین، کندترین)\n**Warm Site** = سخت‌افزار نصب‌شده + داده نیاز به به‌روزرسانی (متوسط)\n**Hot Site** = همه‌چیز آماده و به‌روز (گران‌ترین، سریع‌ترین)",
  "domain": 5
 },
 {
  "number": 51,
  "en": "A company performs a daily full backup of all its data every Sunday, and then performs backups every other day of the week that only capture files changed since the last full backup. Which of the following backup types is being described for the non-Sunday backups?",
  "fa": "یک شرکت هر یکشنبه یک بکاپ کامل از تمام داده‌هایش انجام می‌دهد، و سپس در روزهای دیگر هفته، بکاپ‌هایی می‌گیرد که فقط فایل‌های تغییریافته از زمان آخرین بکاپ کامل را ثبت می‌کنند. کدام نوع بکاپ برای روزهای غیر از یکشنبه توصیف شده؟",
  "options": [
   "A) Full Backup",
   "B) Incremental Backup",
   "C) Differential Backup",
   "D) Snapshot Backup"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Differential Backup** هست، نه B. این یکی از تله‌های ریز و بسیار رایج در امتحان واقعیه، بگذار دقیق توضیح بدم.\n\n**Differential Backup**\n\nتوضیح:\nاین نوع بکاپ فقط فایل‌هایی را ذخیره می‌کند که **از زمان آخرین بکاپ کامل (Full Backup)** تغییر کرده‌اند، نه از آخرین بکاپ به‌طور کلی\n\nنکته‌ی کلیدی این سؤال: عبارت **\"changed since the last FULL backup\"** دقیقاً تعریف Differential است\n\nچرا گزینه‌ی B (Incremental) دقیق نبود:\n\n**Incremental Backup**\n\nتوضیح:\nاین نوع بکاپ فقط فایل‌هایی را ذخیره می‌کند که **از زمان آخرین بکاپ (هر نوعی، چه کامل و چه Incremental قبلی)** تغییر کرده‌اند، نه لزوماً از آخرین بکاپ کامل\n\nتفاوت عملی مهم بین این دو (که در امتحان خیلی مهمه):\n\n**Differential**: هر بار همه‌ی تغییرات از زمان آخرین Full را ذخیره می‌کند → حجم بکاپ‌ها به‌تدریج **بزرگ‌تر** می‌شود، اما بازیابی **سریع‌تر** است (فقط Full + آخرین Differential لازم است)\n\n**Incremental**: هر بار فقط تغییرات از بکاپ قبلی (هرچه که بود) را ذخیره می‌کند → حجم بکاپ‌ها **کوچک‌تر** است، اما بازیابی **کندتر** (باید Full + همه‌ی Incremental ها به‌ترتیب بازیابی شوند)\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Full Backup**\n\nتوضیح:\nاین هر بار تمام داده‌ها را کپی می‌کند، نه فقط تغییرات\n\n**Snapshot Backup**\n\nتوضیح:\nاین به ثبت وضعیت یک سیستم (معمولاً ماشین مجازی) در یک لحظه‌ی خاص اشاره دارد، که مفهوم متفاوتی از Full/Incremental/Differential است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"since the last FULL backup\"** را دیدی، فکر کن **Differential**\nهر زمان عبارت **\"since the last backup\"** (بدون مشخص کردن نوع) را دیدی، فکر کن **Incremental**\n\nاین مفهوم رو باید بیشتر تمرین کنیم چون یکی از پرتکرارترین تله‌های امتحان واقعیه. به‌زودی دوباره باهاش کار می‌کنیم.",
  "domain": 4
 },
 {
  "number": 52,
  "en": "A company performs a full backup every Sunday. On Monday, it backs up only the files changed since Sunday. On Tuesday, it backs up only the files changed since Monday's backup. Which of the following backup types is being used for the Monday and Tuesday backups?",
  "fa": "یک شرکت هر یکشنبه یک بکاپ کامل می‌گیرد. روز دوشنبه، فقط فایل‌های تغییریافته از یکشنبه را بکاپ می‌گیرد. روز سه‌شنبه، فقط فایل‌های تغییریافته از بکاپ دوشنبه را بکاپ می‌گیرد. کدام نوع بکاپ برای بکاپ‌های دوشنبه و سه‌شنبه استفاده شده؟",
  "options": [
   "A) Full Backup",
   "B) Incremental Backup",
   "C) Differential Backup",
   "D) Mirror Backup"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Incremental Backup**\n\nتوضیح:\nنکته‌ی کلیدی این سؤال در روز **سه‌شنبه** است: بکاپ سه‌شنبه فقط فایل‌های تغییریافته **از بکاپ دوشنبه** (نه از بکاپ کامل یکشنبه) را ذخیره می‌کند\n\nاین دقیقاً تعریف Incremental است: هر بکاپ فقط نسبت به **آخرین بکاپ قبلی** (هرچه که بود، چه Full و چه Incremental دیگر) تغییرات را ثبت می‌کند، نه همیشه نسبت به آخرین Full\n\nمقایسه با سؤال قبلی (که Differential بود):\n\n**سؤال قبلی (Differential):** همه‌ی بکاپ‌های غیر-یکشنبه، نسبت به **همان یکشنبه (Full)** تغییرات را ذخیره می‌کردند\n\n**این سؤال (Incremental):** هر بکاپ نسبت به **بکاپ بلافصل قبلی خودش** (نه لزوماً Full) تغییرات را ذخیره می‌کند؛ یعنی سه‌شنبه به دوشنبه ارجاع می‌دهد، نه به یکشنبه\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Full Backup**\n\nتوضیح:\nاین هر بار تمام داده‌ها را کپی می‌کند، که در این سؤال فقط برای یکشنبه صادق است\n\n**Differential Backup**\n\nتوضیح:\nدر این حالت، همه‌ی بکاپ‌ها باید نسبت به همان Full اصلی (یکشنبه) باشند؛ اما در این سؤال، سه‌شنبه نسبت به دوشنبه است، نه یکشنبه\n\n**Mirror Backup**\n\nتوضیح:\nاین یک کپی کامل و همیشه به‌روز از داده‌هاست که هم‌زمان با تغییرات سینک می‌شود، مفهوم متفاوتی از این الگوی زمان‌بندی‌شده\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی):\n**Differential** = هر بار نسبت به **همان Full اصلی** مقایسه می‌شود\n**Incremental** = هر بار نسبت به **بکاپ بلافصل قبلی** مقایسه می‌شود (زنجیره‌ای)",
  "domain": 4
 },
 {
  "number": 53,
  "en": "A company needs to restore its data after a server failure. They used a full backup on Sunday and incremental backups every day after. The failure occurred on Thursday morning. Which backups does the IT team need to restore, and in what order?",
  "fa": "یک شرکت باید داده‌هایش را بعد از خرابی سرور بازیابی کند. آن‌ها یکشنبه یک بکاپ کامل گرفته بودند و هر روز بعد از آن بکاپ افزایشی (Incremental) گرفته بودند. خرابی صبح پنج‌شنبه رخ داده است. تیم IT کدام بکاپ‌ها را باید بازیابی کند، و به چه ترتیب؟",
  "options": [
   "A) فقط بکاپ افزایشی چهارشنبه",
   "B) فقط بکاپ کامل یکشنبه",
   "C) بکاپ کامل یکشنبه، سپس بکاپ‌های افزایشی دوشنبه، سه‌شنبه، و چهارشنبه به‌ترتیب",
   "D) فقط بکاپ کامل یکشنبه و بکاپ افزایشی چهارشنبه"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Sunday's full backup, then Monday, Tuesday, and Wednesday's incremental backups in order**\n\nتوضیح:\nاین دقیقاً نشان‌دهنده‌ی نقطه‌ضعف اصلی Incremental Backup در فرآیند **بازیابی** است\n\nچون هر Incremental فقط نسبت به **بکاپ بلافصل قبلی** تغییرات را دارد (نه نسبت به Full اصلی)، برای بازسازی کامل داده تا چهارشنبه، تیم IT باید **همه‌ی زنجیره** را به‌ترتیب بازیابی کند:\n\n۱. ابتدا **Full Backup یکشنبه** (پایه و اساس همه‌چیز)\n۲. سپس **Incremental دوشنبه** (تغییرات از یکشنبه تا دوشنبه)\n۳. سپس **Incremental سه‌شنبه** (تغییرات از دوشنبه تا سه‌شنبه)\n۴. در نهایت **Incremental چهارشنبه** (تغییرات از سه‌شنبه تا چهارشنبه)\n\nاگر فقط Full + آخرین Incremental (چهارشنبه) بازیابی شود، تغییرات دوشنبه و سه‌شنبه از دست می‌رود؛ چون هرکدام فقط بخشی از مسیر را دارند، نه کل تصویر\n\nچرا گزینه‌های دیگر رد شدند:\n\n**فقط Incremental چهارشنبه**\n\nتوضیح:\nبدون Full اولیه، این بکاپ به‌تنهایی هیچ معنایی ندارد چون فقط شامل تغییرات نسبت به سه‌شنبه است، نه کل داده\n\n**فقط Full یکشنبه**\n\nتوضیح:\nاین فقط داده‌ی یکشنبه را بازمی‌گرداند و تمام تغییرات دوشنبه تا چهارشنبه از دست می‌رود\n\n**Full + فقط Incremental چهارشنبه**\n\nتوضیح:\nاین تغییرات دوشنبه و سه‌شنبه را نادیده می‌گیرد، که باعث ناقص ماندن داده می‌شود\n\nنکته‌ی کلیدی برای امتحان (مقایسه‌ی نهایی بین این دو روش):\n**Incremental**: بکاپ‌گیری سریع‌تر و کم‌حجم‌تر، اما **بازیابی پیچیده‌تر و کندتر** (باید همه‌ی زنجیره بازیابی شود)\n**Differential**: بکاپ‌گیری کندتر (حجم بیشتر در طول زمان)، اما **بازیابی سریع‌تر و ساده‌تر** (فقط Full + آخرین Differential لازم است)",
  "domain": 4
 },
 {
  "number": 54,
  "en": "A security team wants to centralize the collection, correlation, and analysis of log data from firewalls, servers, and endpoints across the organization to detect potential security incidents in real time. Which of the following tools BEST fits this requirement?",
  "fa": "یک تیم امنیتی می‌خواهد جمع‌آوری، ارتباط‌دهی، و تحلیل داده‌های لاگ از فایروال‌ها، سرورها، و دستگاه‌های انتهایی در سراسر سازمان را متمرکز کند تا حوادث امنیتی احتمالی را در زمان واقعی شناسایی کند. کدام ابزار بهترین تطابق با این نیاز را دارد؟",
  "options": [
   "A) SOAR",
   "B) SIEM",
   "C) IDS",
   "D) Vulnerability Scanner"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SIEM (Security Information and Event Management)**\n\nتوضیح:\nاین ابزار دقیقاً برای **جمع‌آوری متمرکز**، **ارتباط‌دهی (Correlation)**، و **تحلیل** داده‌های لاگ از منابع مختلف (فایروال، سرور، Endpoint و غیره) در سراسر سازمان طراحی شده\n\nقابلیت کلیدی SIEM: می‌تواند الگوهایی را که در یک منبع به‌تنهایی مشکوک به‌نظر نمی‌رسند، اما وقتی با داده‌های منابع دیگر **ترکیب (Correlate)** شوند، نشان‌دهنده‌ی یک حمله‌ی واقعی هستند، شناسایی کند؛ و معمولاً هشدارهای زمان واقعی برای تحلیلگران امنیتی تولید می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SOAR (Security Orchestration, Automation, and Response)**\n\nتوضیح:\nاین ابزار یک قدم جلوتر از SIEM است؛ معمولاً **بعد از** شناسایی یک حادثه (که اغلب توسط SIEM انجام می‌شود)، SOAR وظیفه‌ی **خودکارسازی پاسخ** (مثل مسدود کردن خودکار یک IP) را بر عهده دارد. تمرکز اصلی این سؤال روی **جمع‌آوری و تحلیل لاگ** است، که دقیق‌تر مربوط به SIEM می‌شود\n\n**IDS**\n\nتوضیح:\nاین فقط ترافیک شبکه را برای رفتار مشکوک پایش می‌کند؛ قابلیت **جمع‌آوری متمرکز لاگ از منابع متنوع مثل فایروال، سرور، Endpoint** را ندارد\n\n**Vulnerability Scanner**\n\nتوضیح:\nاین برای یافتن آسیب‌پذیری‌های نرم‌افزاری طراحی شده، نه برای جمع‌آوری و تحلیل لاگ‌های امنیتی در زمان واقعی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"centralize log collection\"** + **\"correlation\"** + **\"from multiple sources\"** را دیدی، جواب همیشه **SIEM** است",
  "domain": 4
 },
 {
  "number": 55,
  "en": "After a SIEM detects a confirmed phishing email across multiple mailboxes, a security team wants to automatically quarantine the email, disable the affected user accounts, and block the sender's domain — all without manual intervention for each step. Which of the following tools BEST supports this automated workflow?",
  "fa": "بعد از اینکه SIEM یک ایمیل فیشینگ تأیید‌شده را در چندین صندوق پستی شناسایی می‌کند، یک تیم امنیتی می‌خواهد به‌طور خودکار ایمیل را قرنطینه کند، حساب‌های کاربری آسیب‌دیده را غیرفعال کند، و دامنه‌ی فرستنده را مسدود کند — همه بدون دخالت دستی برای هر مرحله. کدام ابزار بهترین پشتیبانی از این گردش‌کار خودکار را دارد؟",
  "options": [
   "A) SIEM",
   "B) SOAR",
   "C) IDS",
   "D) DLP"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SOAR (Security Orchestration, Automation, and Response)**\n\nتوضیح:\nاین ابزار دقیقاً برای **خودکارسازی واکنش** به حوادث امنیتی طراحی شده، با اجرای یک **Playbook** (مجموعه‌ای از اقدامات از پیش تعریف‌شده) به‌محض شناسایی یک تهدید تأییدشده\n\nدر این سناریو، SOAR می‌تواند به‌صورت خودکار و بدون دخالت دستی، چند اقدام را پشت‌سرهم انجام دهد:\nقرنطینه‌ی ایمیل\nغیرفعال کردن حساب‌های کاربری آسیب‌دیده\nمسدود کردن دامنه‌ی فرستنده\n\nنکته‌ی کلیدی رابطه‌ی SIEM و SOAR (که اغلب با هم اشتباه گرفته می‌شوند):\n\n**SIEM** = **شناسایی** و هشدار (جمع‌آوری و تحلیل لاگ‌ها برای پیدا کردن تهدید)\n\n**SOAR** = **واکنش خودکار** بعد از شناسایی (اجرای چند اقدام پیشگیرانه به‌صورت زنجیره‌ای و بدون دخالت انسانی)\n\nاین دو معمولاً با هم یکپارچه کار می‌کنند: SIEM تهدید را پیدا می‌کند → SOAR به‌طور خودکار واکنش نشان می‌دهد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SIEM**\n\nتوضیح:\nاین فقط **شناسایی و هشدار** می‌دهد؛ خودش معمولاً اقدامات چندگانه‌ی خودکار (مثل غیرفعال کردن حساب) را اجرا نمی‌کند\n\n**IDS**\n\nتوضیح:\nاین فقط ترافیک شبکه را پایش و هشدار می‌دهد، بدون قابلیت اجرای زنجیره‌ای از اقدامات واکنشی\n\n**DLP (Data Loss Prevention)**\n\nتوضیح:\nاین برای جلوگیری از خروج غیرمجاز داده‌های حساس از سازمان طراحی شده (مثل مسدود کردن ارسال یک فایل حساس در ایمیل)، نه برای اجرای یک گردش‌کار واکنشی چندمرحله‌ای در برابر فیشینگ\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"automated workflow\"**، **\"multiple actions without manual intervention\"**، یا **\"Playbook\"** را دیدی، جواب همیشه **SOAR** است",
  "domain": 4
 },
 {
  "number": 56,
  "en": "A company wants to prevent employees from emailing files containing credit card numbers or social security numbers outside the organization, automatically blocking such emails before they are sent. Which of the following technologies BEST addresses this requirement?",
  "fa": "یک شرکت می‌خواهد از ارسال ایمیل توسط کارمندان که حاوی شماره‌کارت‌های اعتباری یا شماره‌های تأمین اجتماعی است به خارج از سازمان جلوگیری کند، و به‌طور خودکار چنین ایمیل‌هایی را قبل از ارسال مسدود کند. کدام فناوری بهترین پاسخ به این نیاز است؟",
  "options": [
   "A) SIEM",
   "B) DLP (Data Loss Prevention)",
   "C) IDS",
   "D) NAC"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**DLP (Data Loss Prevention)**\n\nتوضیح:\nاین فناوری به‌طور خاص برای **شناسایی و جلوگیری از خروج غیرمجاز داده‌های حساس** از سازمان طراحی شده\n\nDLP می‌تواند محتوای ایمیل‌ها، فایل‌ها، یا ترافیک شبکه را برای **الگوهای داده‌ی حساس** (مثل شماره‌کارت اعتباری، شماره‌ی تأمین اجتماعی، یا اطلاعات محرمانه‌ی دیگر) اسکن کند و در صورت تشخیص، آن انتقال را **به‌طور خودکار مسدود کند** قبل از اینکه داده از سازمان خارج شود\n\nاین فناوری معمولاً از **Pattern Matching** یا **Regular Expressions** برای شناسایی الگوهای خاص (مثل فرمت شماره‌کارت اعتباری) استفاده می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SIEM**\n\nتوضیح:\nاین برای جمع‌آوری و تحلیل لاگ‌ها برای شناسایی حوادث امنیتی طراحی شده، نه برای مسدود کردن مستقیم خروج داده‌های حساس از ایمیل\n\n**IDS**\n\nتوضیح:\nاین برای شناسایی ترافیک مخرب شبکه طراحی شده، نه برای اسکن محتوای ایمیل برای داده‌های حساس خاص\n\n**NAC (Network Access Control)**\n\nتوضیح:\nاین کنترل می‌کند کدام دستگاه‌ها اجازه‌ی اتصال به شبکه را دارند (مثلاً بر اساس سلامت دستگاه)، نه محتوای ایمیل‌های ارسالی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"prevent sensitive data (credit card, SSN, PII) from leaving the organization\"** را دیدی، جواب همیشه **DLP** است",
  "domain": 4
 },
 {
  "number": 57,
  "en": "A company wants to ensure that only devices meeting specific security requirements (updated antivirus, current OS patches, encrypted hard drive) are allowed to connect to the corporate network, automatically denying access to non-compliant devices. Which of the following technologies BEST addresses this requirement?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که فقط دستگاه‌هایی که الزامات امنیتی خاصی را دارند (آنتی‌ویروس به‌روز، وصله‌های سیستم‌عامل جاری، هارد رمزنگاری‌شده) اجازه‌ی اتصال به شبکه‌ی شرکت را دارند، و به‌طور خودکار دسترسی دستگاه‌های ناهماهنگ را رد می‌کند. کدام فناوری بهترین پاسخ به این نیاز است؟",
  "options": [
   "A) DLP",
   "B) NAC (Network Access Control)",
   "C) SIEM",
   "D) VPN"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**NAC (Network Access Control)**\n\nتوضیح:\nاین فناوری قبل از اجازه‌ی اتصال هر دستگاه به شبکه، **وضعیت سلامت و انطباق امنیتی** آن را بررسی می‌کند (مثل: آیا آنتی‌ویروس به‌روز است؟ آیا آخرین وصله‌های امنیتی نصب شده؟ آیا هارد رمزنگاری شده؟)\n\nاگر دستگاه این الزامات را نداشته باشد (Non-Compliant)، NAC می‌تواند:\nدسترسی را به‌طور کامل **رد کند**\nیا دستگاه را به یک شبکه‌ی **Quarantine** محدود هدایت کند تا قبل از دسترسی کامل، اصلاح شود\n\nچرا گزینه‌های دیگر رد شدند:\n\n**DLP**\n\nتوضیح:\nاین برای جلوگیری از خروج داده‌های حساس طراحی شده (مثل ایمیل‌های حاوی شماره‌کارت)، نه بررسی سلامت دستگاه قبل از اتصال به شبکه\n\n**SIEM**\n\nتوضیح:\nاین برای جمع‌آوری و تحلیل لاگ‌ها برای شناسایی حوادث طراحی شده، نه کنترل ورودی دستگاه‌ها به شبکه\n\n**VPN**\n\nتوضیح:\nاین یک تونل رمزنگاری‌شده برای ارتباط امن از راه دور ایجاد می‌کند؛ هرچند گاهی با NAC ترکیب می‌شود، اما خودش به‌تنهایی بررسی انطباق امنیتی دستگاه را انجام نمی‌دهد\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"device compliance check before network access\"** (آنتی‌ویروس، پچ، رمزنگاری) را دیدی، جواب همیشه **NAC** است",
  "domain": 4
 },
 {
  "number": 58,
  "en": "A security analyst wants to deploy a decoy server with intentionally weak security and fake sensitive data to attract attackers, allowing the team to study their tactics without risking real systems. Which of the following BEST describes this technology?",
  "fa": "یک تحلیلگر امنیتی می‌خواهد یک سرور فریب‌دهنده با امنیت عمداً ضعیف و داده‌های حساس جعلی برای جذب مهاجمان مستقر کند، تا تیم بتواند تاکتیک‌های آن‌ها را بدون به‌خطر انداختن سیستم‌های واقعی مطالعه کند. کدام گزینه بهترین توصیف این فناوری است؟",
  "options": [
   "A) Honeypot",
   "B) Sandbox",
   "C) DMZ",
   "D) Jump Server"
  ],
  "correct": "A",
  "explanation": "مشکلی نیست، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه کلمات کلیدی دقت کن: **\"decoy server\"** (سرور فریب‌دهنده)، **\"intentionally weak security\"** (امنیت عمداً ضعیف)، و **\"fake sensitive data\"** (داده‌ی جعلی). این یعنی این سرور **عمداً** طوری طراحی شده که جذاب و آسیب‌پذیر به‌نظر برسد تا مهاجم را وسوسه کند.\n\nسرنخ ۲:\nهدف اصلی این فناوری، **جذب مهاجم** به سمت خودش است، مثل عسلی که زنبور را جذب می‌کند. وقتی مهاجم وارد این سیستم فریبنده می‌شود، تیم امنیتی می‌تواند رفتار و تاکتیک‌های او را مطالعه کند، بدون اینکه سیستم‌های واقعی در خطر باشند. نام این فناوری مستقیماً به این مفهوم \"جذب با چیزی شیرین/جذاب\" اشاره دارد.\n\nبا این دو سرنخ، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 3
 },
 {
  "number": 59,
  "en": "A security team wants to safely analyze a suspicious email attachment to observe what actions it performs (file changes, network connections, registry modifications) without risking infection of any production system. Which of the following BEST describes the tool they should use?",
  "fa": "یک تیم امنیتی می‌خواهد یک پیوست ایمیل مشکوک را به‌صورت ایمن تحلیل کند تا ببیند چه اقداماتی انجام می‌دهد (تغییر فایل، اتصالات شبکه، تغییرات رجیستری)، بدون به‌خطر انداختن هیچ سیستم تولیدی. کدام گزینه بهترین توصیف ابزاری است که باید استفاده کنند؟",
  "options": [
   "A) Honeypot",
   "B) Sandbox",
   "C) Honeynet",
   "D) SIEM"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Sandbox**\n\nتوضیح:\nاین یک محیط **کاملاً ایزوله‌شده** است که فایل‌های مشکوک (مثل پیوست ایمیل) در آن **اجرا** می‌شوند تا تحلیلگران بتوانند رفتار واقعی‌شان را مشاهده کنند (تغییر فایل، اتصالات شبکه، تغییرات رجیستری) بدون اینکه هیچ خطری برای سیستم‌های واقعی وجود داشته باشد\n\nتفاوت کلیدی با Honeypot:\n\n**Sandbox** = محیطی برای **تحلیل ایمن یک فایل/کد خاص و مشکوک** (تمرکز روی تحلیل بدافزار)\n\n**Honeypot** = یک سیستم فریب‌دهنده برای **جذب مهاجمان واقعی** به‌منظور مطالعه‌ی رفتار و تاکتیک‌های حمله (تمرکز روی جذب مهاجم انسانی)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Honeypot**\n\nتوضیح:\nاین برای جذب یک **مهاجم فعال** طراحی شده، نه برای تحلیل یک فایل مشکوک خاص که از قبل در اختیار تیم است\n\n**Honeynet**\n\nتوضیح:\nاین یک شبکه‌ی کامل از چند Honeypot به‌هم‌متصل است که محیط واقعی‌تری برای جذب مهاجمان شبیه‌سازی می‌کند؛ همچنان مرتبط با مفهوم جذب مهاجم است، نه تحلیل فایل\n\n**SIEM**\n\nتوضیح:\nاین برای جمع‌آوری و تحلیل لاگ‌های امنیتی طراحی شده، نه اجرای ایزوله‌ی یک فایل مشکوک برای مشاهده‌ی رفتارش\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"safely execute/analyze a suspicious file\"** بدون خطر برای سیستم واقعی را دیدی، جواب همیشه **Sandbox** است\nهر زمان عبارت **\"lure/attract attackers\"** را دیدی، جواب **Honeypot** یا **Honeynet** است",
  "domain": 4
 },
 {
  "number": 60,
  "en": "A network architect places a public-facing web server in a separate network segment that sits between the internet and the internal corporate network, allowing external users to access the web server while preventing direct access to internal systems. Which of the following BEST describes this network architecture?",
  "fa": "یک معمار شبکه یک وب‌سرور عمومی را در یک بخش شبکه‌ی جداگانه قرار می‌دهد که بین اینترنت و شبکه‌ی داخلی شرکت واقع شده، که به کاربران خارجی اجازه‌ی دسترسی به وب‌سرور را می‌دهد و در عین حال دسترسی مستقیم به سیستم‌های داخلی را مسدود می‌کند. کدام گزینه بهترین توصیف این معماری شبکه است؟",
  "options": [
   "A) VPN",
   "B) DMZ (Demilitarized Zone)",
   "C) VLAN",
   "D) Honeynet"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**DMZ (Demilitarized Zone)**\n\nتوضیح:\nاین یک بخش شبکه‌ای **میانی و جداشده** است که بین اینترنت (شبکه‌ی نامطمئن) و شبکه‌ی داخلی سازمان (شبکه‌ی مطمئن) قرار می‌گیرد\n\nسرورهایی که باید از **اینترنت قابل‌دسترسی** باشند (مثل وب‌سرور، سرور ایمیل) در این منطقه قرار می‌گیرند، تا:\nکاربران خارجی بتوانند به این سرویس‌ها دسترسی داشته باشند\nاما حتی اگر این سرور هک شود، مهاجم **نمی‌تواند مستقیماً** به شبکه‌ی داخلی حساس‌تر شرکت دسترسی پیدا کند، چون DMZ با Firewall از هر دو طرف ایزوله شده\n\nاین دقیقاً یک لایه‌ی **دفاعی میانی** است که ریسک سرورهای عمومی را از سیستم‌های داخلی حساس جدا می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**VPN**\n\nتوضیح:\nاین یک تونل رمزنگاری‌شده برای ارتباط امن از راه دور است، نه یک منطقه‌ی شبکه‌ای جداشده برای میزبانی سرورهای عمومی\n\n**VLAN**\n\nتوضیح:\nاین یک تقسیم‌بندی منطقی شبکه برای جداسازی بخش‌های مختلف (مثل IoT از سرورهای حیاتی) است؛ هرچند DMZ می‌تواند با VLAN پیاده‌سازی شود، اما VLAN خودش مفهومی کلی‌تر برای تقسیم‌بندی شبکه است، نه به‌طور خاص \"منطقه‌ی بین اینترنت و شبکه‌ی داخلی\"\n\n**Honeynet**\n\nتوضیح:\nاین یک شبکه‌ی فریبنده برای جذب مهاجمان است، نه یک منطقه‌ی واقعی برای میزبانی سرویس‌های عمومی واقعی شرکت\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"public-facing server\"** + **\"between internet and internal network\"** را دیدی، جواب همیشه **DMZ** است",
  "domain": 3
 },
 {
  "number": 61,
  "en": "A company wants to encrypt all traffic between a remote employee's laptop and the corporate network when connecting over public Wi-Fi, creating a secure tunnel as if the employee were directly on the internal network. Which of the following technologies BEST addresses this requirement?",
  "fa": "یک شرکت می‌خواهد تمام ترافیک بین لپ‌تاپ یک کارمند دوردست و شبکه‌ی شرکت را هنگام اتصال از طریق Wi-Fi عمومی رمزنگاری کند، و یک تونل امن ایجاد کند، گویی کارمند مستقیماً روی شبکه‌ی داخلی قرار دارد. کدام فناوری بهترین پاسخ به این نیاز است؟",
  "options": [
   "A) DMZ",
   "B) VPN",
   "C) NAC",
   "D) VLAN"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**VPN (Virtual Private Network)**\n\nتوضیح:\nاین فناوری یک **تونل رمزنگاری‌شده** بین دستگاه کارمند و شبکه‌ی شرکت ایجاد می‌کند، که باعث می‌شود حتی اگر کارمند از یک شبکه‌ی نامطمئن (مثل Wi-Fi عمومی کافه یا فرودگاه) متصل شود، تمام ترافیکش امن و رمزنگاری‌شده باقی بماند\n\nعبارت **\"as if directly on the internal network\"** دقیقاً به این اشاره دارد که VPN باعث می‌شود کارمند از راه دور، گویی فیزیکی در شبکه‌ی داخلی شرکت حضور دارد، بتواند به منابع داخلی دسترسی داشته باشد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**DMZ**\n\nتوضیح:\nاین یک منطقه‌ی شبکه‌ای برای میزبانی سرورهای عمومی است، نه فناوری برای رمزنگاری ارتباط یک کارمند دوردست\n\n**NAC**\n\nتوضیح:\nاین بررسی می‌کند آیا دستگاه واجد شرایط امنیتی برای اتصال به شبکه هست یا نه، اما خودش تونل رمزنگاری‌شده ایجاد نمی‌کند؛ معمولاً NAC و VPN با هم استفاده می‌شوند، اما VPN است که مسئول رمزنگاری ترافیک است\n\n**VLAN**\n\nتوضیح:\nاین یک تقسیم‌بندی منطقی داخل یک شبکه‌ی محلی است، نه فناوری برای ارتباط امن یک کاربر دوردست از طریق اینترنت عمومی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"remote employee\"** + **\"encrypt traffic\"** + **\"public network/Wi-Fi\"** + **\"secure tunnel\"** را دیدی، جواب همیشه **VPN** است",
  "domain": 3
 },
 {
  "number": 62,
  "en": "A security engineer wants to deploy a single device at the network perimeter that can perform firewall filtering, intrusion prevention, VPN termination, and antivirus scanning, all integrated into one appliance. Which of the following BEST describes this solution?",
  "fa": "یک مهندس امنیتی می‌خواهد یک دستگاه واحد را در لبه‌ی شبکه مستقر کند که بتواند فیلترینگ فایروال، پیشگیری از نفوذ، پایان‌دهی VPN، و اسکن آنتی‌ویروس را همگی یکپارچه در یک دستگاه انجام دهد. کدام گزینه بهترین توصیف این راه‌حل است؟",
  "options": [
   "A) UTM (Unified Threat Management)",
   "B) NGFW (Next-Generation Firewall)",
   "C) Proxy Server",
   "D) Load Balancer"
  ],
  "correct": "A",
  "explanation": "جواب درست **A) UTM (Unified Threat Management)** هست، نه B. این یک تفاوت ظریف و مهم در امتحانه، بگذار دقیق توضیح بدم.\n\n**UTM (Unified Threat Management)**\n\nتوضیح:\nاین اصطلاح دقیقاً به دستگاه‌هایی اشاره دارد که **چندین قابلیت امنیتی متفاوت** را در یک دستگاه واحد **یکپارچه** می‌کنند، از جمله:\nفایروال\nIPS (پیشگیری از نفوذ)\nVPN\nآنتی‌ویروس/Anti-malware\nگاهی فیلترینگ محتوا و Spam Filter هم\n\nکلمه‌ی **\"Unified\"** (یکپارچه) دقیقاً به این معنی است که همه‌ی این قابلیت‌ها در **یک پلتفرم واحد** جمع شده‌اند، که این دقیقاً همان چیزی است که سؤال توصیف می‌کند\n\nچرا گزینه‌ی B (NGFW) دقیق نبود:\n\n**NGFW (Next-Generation Firewall)**\n\nتوضیح:\nاین هم قابلیت‌های پیشرفته‌تری نسبت به فایروال سنتی دارد (مثل آگاهی از لایه‌ی Application، تشخیص و کنترل برنامه‌های خاص، و گاهی IPS)، اما تمرکز اصلی NGFW هنوز روی **فایروال و فیلترینگ ترافیک پیشرفته** است\n\nتفاوت کلیدی: NGFW معمولاً **آنتی‌ویروس کامل و VPN Termination یکپارچه** را به همان اندازه‌ی گسترده‌ی UTM شامل نمی‌شود؛ UTM دقیقاً برای **ترکیب گسترده‌تر از چند ابزار امنیتی متفاوت** (نه فقط فایروال پیشرفته) طراحی شده\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Proxy Server**\n\nتوضیح:\nاین برای واسطه‌گری بین کاربران و اینترنت استفاده می‌شود (مثل فیلترینگ وب)، نه ترکیب گسترده‌ی فایروال + IPS + VPN + آنتی‌ویروس\n\n**Load Balancer**\n\nتوضیح:\nاین برای توزیع ترافیک بین چند سرور استفاده می‌شود، کاملاً بی‌ربط به این مجموعه‌ی قابلیت‌های امنیتی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"all-in-one\"** یا **\"firewall + IPS + VPN + antivirus integrated\"** را با هم دیدی، جواب همیشه **UTM** است\nاگر فقط تمرکز روی **فایروال پیشرفته با آگاهی از Application** بود (بدون آنتی‌ویروس و VPN کامل)، جواب **NGFW** است\n\nاین یک تفاوت ظریف بود، طبیعیه که اشتباه بزنی. به‌زودی دوباره باهاش کار می‌کنیم.",
  "domain": 3
 },
 {
  "number": 63,
  "en": "A security team deploys a firewall capable of identifying and blocking traffic based on the specific application generating it (e.g., blocking Facebook but allowing Salesforce), rather than just filtering by port and protocol. Which of the following BEST describes this firewall?",
  "fa": "یک تیم امنیتی یک فایروال مستقر می‌کند که می‌تواند ترافیک را بر اساس **اپلیکیشن خاصی** که آن را ایجاد کرده شناسایی و مسدود کند (مثلاً مسدود کردن Facebook ولی اجازه به Salesforce)، نه فقط فیلتر کردن بر اساس پورت و پروتوکل. کدام گزینه بهترین توصیف این فایروال است؟",
  "options": [
   "A) UTM",
   "B) NGFW (Next-Generation Firewall)",
   "C) Packet-Filtering Firewall",
   "D) Proxy Firewall"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**NGFW (Next-Generation Firewall)**\n\nتوضیح:\nویژگی متمایزکننده‌ی اصلی NGFW نسبت به فایروال‌های سنتی، **آگاهی از لایه‌ی Application (Layer 7)** است\n\nبرخلاف فایروال‌های قدیمی‌تر که فقط بر اساس **پورت و پروتوکل** (مثل پورت ۸۰ برای HTTP) فیلتر می‌کنند، NGFW می‌تواند تشخیص دهد که ترافیک واقعاً از **کدام اپلیکیشن خاص** می‌آید (مثل تشخیص Facebook در مقابل Salesforce، حتی اگر هر دو روی همان پورت ۴۴۳ کار کنند) و بر اساس آن سیاست‌های دقیق‌تری اعمال کند\n\nنکته‌ی کلیدی تفاوت با UTM (که در سؤال قبلی کار کردیم):\n\n**NGFW** = تمرکز اصلی روی **فیلترینگ پیشرفته و دقیق ترافیک** در سطح Application، عمق بیشتر در یک حوزه\n\n**UTM** = تمرکز روی **ترکیب گسترده‌ی چند ابزار امنیتی متفاوت** (فایروال + IPS + VPN + آنتی‌ویروس) در یک پلتفرم، عرض بیشتر در چند حوزه\n\nچرا گزینه‌های دیگر رد شدند:\n\n**UTM**\n\nتوضیح:\nهرچند می‌تواند شامل NGFW هم باشد، اما تمرکز اصلی سؤال روی **شناسایی دقیق اپلیکیشن** است که این ویژگی خاص و متمایزکننده‌ی NGFW است، نه صرفاً ترکیب چند ابزار\n\n**Packet-Filtering Firewall**\n\nتوضیح:\nاین نوع فایروال سنتی فقط بر اساس IP، پورت، و پروتوکل فیلتر می‌کند، دقیقاً برخلاف \"آگاهی از اپلیکیشن خاص\" در این سؤال\n\n**Proxy Firewall**\n\nتوضیح:\nاین در سطح Application کار می‌کند اما با مکانیزم متفاوتی (واسطه‌گری کامل ترافیک)؛ تمرکز اصلی‌اش بازرسی عمیق محتوا نیست، بلکه واسطه‌گری کامل ارتباط است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"identify/block specific applications\"** یا **\"Layer 7 awareness\"** را دیدی، جواب همیشه **NGFW** است",
  "domain": 3
 },
 {
  "number": 64,
  "en": "A company wants to ensure that if a load-balanced web application has one server fail, traffic is automatically redirected to the remaining healthy servers without any service interruption for users. Which security/availability concept does this represent?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که اگر یکی از سرورهای پشت Load Balancer در یک اپلیکیشن وب از کار بیفتد، ترافیک به‌طور خودکار به سرورهای سالم باقی‌مانده هدایت شود، بدون هیچ وقفه‌ای در سرویس برای کاربران. این کدام مفهوم دسترس‌پذیری/امنیتی را نشان می‌دهد؟",
  "options": [
   "A) Redundancy",
   "B) Scalability",
   "C) Segmentation",
   "D) Fault Tolerance"
  ],
  "correct": "D",
  "explanation": "جواب درست **D) Fault Tolerance** هست، نه A. این یک تفاوت ظریف بین دو مفهوم بسیار نزدیک به همه، بگذار دقیق توضیح بدم.\n\n**Fault Tolerance**\n\nتوضیح:\nاین مفهوم به **توانایی یک سیستم برای ادامه‌ی کارکرد بدون وقفه**، حتی زمانی که یک یا چند جزء آن دچار خرابی می‌شوند، اشاره دارد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"automatically redirected\"** + **\"without any service interruption\"** دقیقاً به این معناست که کل سیستم، **به‌رغم خرابی یک جزء**، بدون وقفه به کار خود ادامه می‌دهد؛ این دقیقاً تعریف Fault Tolerance است\n\nچرا گزینه‌ی A (Redundancy) دقیق نبود:\n\n**Redundancy**\n\nتوضیح:\nاین به **وجود اجزای پشتیبان یا تکراری** (مثل چند سرور به‌جای یک سرور) اشاره دارد، که هدفش حذف نقطه‌ی شکست واحد (Single Point of Failure) است\n\nتفاوت کلیدی: **Redundancy** ابزار/مکانیزم است (داشتن چند سرور)؛ **Fault Tolerance** نتیجه و قابلیت نهایی سیستم است (ادامه‌ی کار بدون وقفه به‌لطف آن Redundancy)\n\nبه زبان ساده: Redundancy یعنی \"ما چند سرور پشتیبان داریم\"، اما Fault Tolerance یعنی \"حتی اگر یکی خراب شود، کاربر هیچ وقفه‌ای حس نمی‌کند\"؛ چون سؤال **روی نتیجه‌ی نهایی (بدون وقفه برای کاربر)** تأکید کرده، نه صرفاً وجود سرورهای اضافی، پاسخ دقیق‌تر Fault Tolerance است\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Scalability**\n\nتوضیح:\nاین به توانایی سیستم برای **افزایش ظرفیت** متناسب با افزایش بار اشاره دارد (مثل اضافه کردن سرور برای ترافیک بیشتر)، نه واکنش به خرابی یک جزء\n\n**Segmentation**\n\nتوضیح:\nاین به تقسیم شبکه به بخش‌های مجزا برای امنیت اشاره دارد، کاملاً بی‌ربط به مفهوم تحمل خرابی\n\nنکته‌ی کلیدی برای امتحان:\nاین دو مفهوم اغلب با هم می‌آیند، اما:\n**Redundancy** = داشتن اجزای پشتیبان (the \"what\")\n**Fault Tolerance** = توانایی سیستم برای ادامه‌ی کار بدون وقفه به‌لطف آن پشتیبان‌ها (the \"result\")\n\nاین یکی از تله‌های ظریف امتحانه. به‌زودی با یک سناریوی متفاوت دوباره روش کار می‌کنیم تا کاملاً جا بیفته.",
  "domain": 3
 },
 {
  "number": 65,
  "en": "A data center installs two separate power supply units (PSUs) in each server, sourced from two different electrical circuits, so that if one power source fails, the server continues running uninterrupted on the other. Which of the following BEST describes this design approach?",
  "fa": "یک مرکز داده دو منبع تغذیه (PSU) جداگانه در هر سرور نصب می‌کند که از دو مدار برقی متفاوت تأمین می‌شوند، به‌طوری که اگر یک منبع برق از کار بیفتد، سرور بدون وقفه روی منبع دیگر کار می‌کند. کدام گزینه بهترین توصیف این رویکرد طراحی است؟",
  "options": [
   "A) Fault Tolerance",
   "B) Redundancy",
   "C) Scalability",
   "D) High Availability"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) Redundancy** هست، نه A. بگذار تفاوتش رو با سؤال قبلی روشن کنم چون این دو سؤال عمداً شبیه هم طراحی شدن تا تفاوت ظریفشون کاملاً جا بیفته.\n\n**Redundancy**\n\nتوضیح:\nنکته‌ی کلیدی این سؤال، **خود کلمه‌ی \"design approach\"** است. سؤال می‌پرسد این **رویکرد طراحی** (یعنی خودِ کاری که انجام شده) چه نام دارد، نه نتیجه‌ی نهایی‌اش\n\nدر این سناریو، خودِ اقدام انجام‌شده این است: **\"نصب دو منبع تغذیه‌ی جداگانه\"** — یعنی ایجاد یک **جزء تکراری/پشتیبان**. این دقیقاً تعریف Redundancy است: داشتن بیش از یک جزء برای از بین بردن نقطه‌ی شکست واحد\n\nمقایسه‌ی دقیق با سؤال قبلی:\n\n**سؤال قبلی:** تأکید بر **نتیجه‌ی نهایی برای کاربر** بود (\"بدون وقفه در سرویس برای کاربران\")؛ این یعنی توانایی کلی سیستم برای ادامه‌ی کار → **Fault Tolerance**\n\n**این سؤال:** تأکید بر **خود اقدام طراحی** است (\"نصب دو PSU جداگانه\")؛ این یعنی خودِ مکانیزم پشتیبان‌سازی → **Redundancy**\n\nرابطه‌ی این دو: **Redundancy** (داشتن دو PSU) باعث ایجاد **Fault Tolerance** (سرور بدون وقفه کار می‌کند) می‌شود؛ یعنی Redundancy ابزار است و Fault Tolerance نتیجه\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Scalability**\n\nتوضیح:\nاین به افزایش ظرفیت برای بار بیشتر اشاره دارد، نه پشتیبان‌سازی در برابر خرابی\n\n**High Availability**\n\nتوضیح:\nاین یک مفهوم **کلی و گسترده‌تر** است (دسترس‌پذیری بالای کل سیستم در طول زمان، معمولاً با درصد مثل 99.99%)، نه توصیف دقیق یک اقدام طراحی خاص مثل نصب PSU دوگانه\n\nنکته‌ی کلیدی برای امتحان (که این دو سؤال داشتن نشونت بدن):\nاگر سؤال **روی خودِ اقدام/جزء پشتیبان** تمرکز داشت (\"two PSUs\"، \"two servers\") → **Redundancy**\nاگر سؤال **روی نتیجه‌ی نهایی بدون وقفه برای کاربر** تمرکز داشت (\"no interruption for users\") → **Fault Tolerance**\n\nاین یکی از سخت‌ترین تله‌های مفهومی امتحانه چون این دو همیشه با هم میان. می‌خوای یک سؤال سوم هم روی همین تفاوت کار کنیم تا کاملاً تثبیت شه؟",
  "domain": 3
 },
 {
  "number": 66,
  "en": "A company's network has multiple internet service providers (ISPs) connected to its router, so that if one ISP experiences an outage, the network automatically continues operating through the other ISP. From a high-level perspective, what is the overall RESULT this design achieves for the organization's network?",
  "fa": "شبکه‌ی یک شرکت چندین ارائه‌دهنده‌ی خدمات اینترنت (ISP) متفاوت به روتر خود متصل کرده، به‌طوری که اگر یک ISP دچار قطعی شود، شبکه به‌طور خودکار از طریق ISP دیگر به کار خود ادامه می‌دهد. از یک منظر کلی، این طراحی چه **نتیجه‌ی** کلی برای شبکه‌ی سازمان ایجاد می‌کند؟",
  "options": [
   "A) Redundancy",
   "B) Scalability",
   "C) Fault Tolerance",
   "D) Segmentation"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Fault Tolerance** هست، نه A. دقیقاً به همون تله‌ای افتادی که قبلاً صحبت کردیم، بگذار باز هم تفکیکش رو دقیق انجام بدم.\n\n**Fault Tolerance**\n\nتوضیح:\nاین سؤال **عمداً** کلمه‌ی **\"RESULT\"** (نتیجه) را با حروف بزرگ نوشته تا تأکید کند که دنبال **نتیجه‌ی نهایی** هستیم، نه خودِ مکانیزم\n\nدر این سناریو:\nخودِ اقدام/مکانیزم: **داشتن چند ISP** ← این **Redundancy** است\nنتیجه‌ی نهایی که این اقدام ایجاد می‌کند: **شبکه بدون وقفه به کار ادامه می‌دهد حتی اگر یک جزء (یک ISP) خراب شود** ← این **Fault Tolerance** است\n\nچون سؤال مشخصاً پرسیده \"نتیجه‌ی کلی\" (overall RESULT)، باید به دنبال **پیامد نهایی** باشی، نه توصیف خودِ تجهیزات یا اقدام فیزیکی\n\nچرا گزینه‌ی A (Redundancy) این بار هم اشتباه بود:\n\n**Redundancy**\n\nتوضیح:\nاین توصیف **خودِ مکانیزم** است (یعنی \"داشتن چند ISP\")، نه نتیجه‌ی نهایی آن. Redundancy پاسخ درستی **برای این سؤال خاص** نیست، چون سؤال به‌وضوح دنبال \"نتیجه\" است، نه \"روش\"\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Scalability**\n\nتوضیح:\nاین به افزایش ظرفیت برای بار بیشتر اشاره دارد، نه ادامه‌ی کار در برابر خرابی\n\n**Segmentation**\n\nتوضیح:\nاین به تقسیم شبکه برای جداسازی امنیتی اشاره دارد، کاملاً بی‌ربط به این سناریو\n\nنکته‌ی نهایی و خلاصه‌ی کامل برای امتحان (این بار با تأکید روی کلمات کلیدی دقیق):\nاگر سؤال بپرسد **\"what mechanism/approach is used?\"** یا توصیف کند **\"two/multiple components installed\"** → **Redundancy**\nاگر سؤال بپرسد **\"what is the result/outcome?\"** یا تأکید کند بر **\"continues operating without interruption\"** → **Fault Tolerance**\n\nمی‌بینم که این مفهوم هنوز کاملاً جا نیفتاده. بیا یک‌بار دیگه، این‌بار با یک مقایسه‌ی مستقیم در یک سؤال، تمرین کنیم تا قطعی بشه.",
  "domain": 3
 },
 {
  "number": 67,
  "en": "A company installs two redundant database servers in an active-passive configuration. If the active server fails, the passive server automatically takes over within seconds, and users experience no disruption to the application. Match the correct term to each description:\n\n(1) \"The company installed two database servers\" = ___________\n(2) \"Users experience no disruption when one server fails\" = ___________",
  "fa": "یک شرکت دو سرور پایگاه‌داده‌ی پشتیبان را در پیکربندی Active-Passive نصب می‌کند. اگر سرور Active از کار بیفتد، سرور Passive به‌طور خودکار در عرض چند ثانیه جایگزین می‌شود، و کاربران هیچ اختلالی در اپلیکیشن حس نمی‌کنند. اصطلاح درست را برای هر توصیف مشخص کنید:\n\n(۱) \"شرکت دو سرور پایگاه‌داده نصب کرد\" = ___________\n(۲) \"کاربران هنگام خرابی یک سرور، هیچ اختلالی حس نمی‌کنند\" = ___________",
  "options": [
   "A) (۱) Fault Tolerance، (۲) Redundancy",
   "B) (۱) Redundancy، (۲) Fault Tolerance",
   "C) (۱) Scalability، (۲) Redundancy",
   "D) (۱) Redundancy، (۲) High Availability"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**\n\n**(۱) \"شرکت دو سرور پایگاه‌داده نصب کرد\" = Redundancy**\n\nتوضیح:\nاین جمله فقط **خودِ اقدام فیزیکی** (نصب یک جزء تکراری/پشتیبان) را توصیف می‌کند، بدون اشاره به نتیجه‌ی نهایی برای کاربر. این دقیقاً تعریف Redundancy است: وجود یک جزء پشتیبان برای از بین بردن نقطه‌ی شکست واحد\n\n**(۲) \"کاربران هیچ اختلالی حس نمی‌کنند\" = Fault Tolerance**\n\nتوضیح:\nاین جمله **نتیجه‌ی نهایی برای کاربر** را توصیف می‌کند: سیستم، به‌رغم خرابی یک جزء، بدون وقفه به کار خود ادامه می‌دهد. این دقیقاً تعریف Fault Tolerance است\n\nچرا گزینه‌های دیگر رد می‌شدند:\n\n**گزینه A**: ترتیب برعکس بود (مکانیزم را Fault Tolerance و نتیجه را Redundancy نامیده بود)\n\n**گزینه C**: Scalability برای نصب دو سرور پشتیبان نادرست است (Scalability درباره‌ی افزایش ظرفیت است، نه پشتیبان‌سازی)\n\n**گزینه D**: High Availability یک مفهوم کلی‌تر و آماری است (مثل 99.99% Uptime)، نه دقیقاً توصیف \"عدم اختلال در یک حادثه‌ی خاص\"\n\n🎯 **خلاصه‌ی نهایی و قطعی این دو مفهوم:**\n**Redundancy** = وجود جزء پشتیبان (روش/ابزار)\n**Fault Tolerance** = نتیجه‌ی نهایی: ادامه‌ی کار بدون وقفه (پیامد)\n\n---",
  "domain": 3
 },
 {
  "correct": "B",
  "domain": 3,
  "en": "A network architecture places public-facing servers in a separate subnet between the internet and internal network. What is this zone called?",
  "fa": "معماری شبکه سرورهای عمومی را در زیرشبکه‌ای بین اینترنت و شبکه داخلی قرار می‌دهد. نام این منطقه؟",
  "options": [
   "A) VLAN",
   "B) DMZ (Demilitarized Zone)",
   "C) VPN",
   "D) Intranet"
  ],
  "explanation": "DMZ = Demilitarized Zone. منطقه‌ای بین اینترنت و شبکه داخلی برای سرورهای عمومی (وب، ایمیل).",
  "number": 68
 },
 {
  "number": 69,
  "en": "A growing company anticipates that its user base will triple over the next two years and wants to ensure its infrastructure can handle this long-term growth by adding more servers and storage capacity over time. Which of the following BEST describes this requirement?",
  "fa": "یک شرکت در حال رشد، پیش‌بینی می‌کند که پایگاه کاربری‌اش در دو سال آینده سه برابر شود و می‌خواهد مطمئن شود که زیرساختش می‌تواند با اضافه کردن سرورها و فضای ذخیره‌سازی بیشتر در طول زمان، با این رشد بلندمدت کنار بیاید. کدام گزینه بهترین توصیف این نیاز است؟",
  "options": [
   "A) Elasticity",
   "B) Scalability",
   "C) Fault Tolerance",
   "D) Redundancy"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Scalability**\n\nتوضیح:\nاین مفهوم به توانایی یک سیستم برای **رشد و افزایش ظرفیت در طول زمان** برای پاسخ به نیاز **بلندمدت و برنامه‌ریزی‌شده** اشاره دارد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"over the next two years\"** و **\"long-term growth\"** نشان می‌دهد این یک رشد **تدریجی، برنامه‌ریزی‌شده، و یک‌طرفه** (فقط افزایش) است، نه یک نوسان خودکار و لحظه‌ای بین افزایش و کاهش\n\nتفاوت کلیدی با Elasticity (که در سؤال قبلی کار کردیم):\n\n**Scalability** = رشد **بلندمدت و برنامه‌ریزی‌شده** (مثل این سؤال: \"سه برابر شدن در دو سال\")؛ معمولاً جهتش فقط رو به رشد است\n\n**Elasticity** = تنظیم **خودکار و لحظه‌ای**، هم افزایش و هم کاهش، معمولاً در بازه‌های زمانی کوتاه (مثل ساعت‌ها یا روزها، نه سال‌ها)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Elasticity**\n\nتوضیح:\nاین به تنظیم خودکار و **دوطرفه** (افزایش و کاهش) در کوتاه‌مدت اشاره دارد؛ این سؤال درباره‌ی یک **روند رشد بلندمدت و یک‌طرفه** است، نه نوسان لحظه‌ای\n\n**Fault Tolerance**\n\nتوضیح:\nاین به ادامه‌ی کار بدون وقفه در برابر خرابی اشاره دارد، نه ظرفیت رشد برای کاربران بیشتر\n\n**Redundancy**\n\nتوضیح:\nاین به وجود اجزای پشتیبان برای جلوگیری از نقطه‌ی شکست واحد اشاره دارد، نه افزایش ظرفیت کلی سیستم\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی این دو مفهوم مرتبط):\n**Scalability** = رشد **بلندمدت، برنامه‌ریزی‌شده، معمولاً یک‌طرفه** (مثل افزایش کاربران در طول سال‌ها)\n**Elasticity** = تنظیم **کوتاه‌مدت، خودکار، دوطرفه** (مثل افزایش ترافیک در یک فروش ویژه و کاهش بعد از آن)",
  "domain": 3
 },
 {
  "number": 70,
  "en": "A company encrypts data using the same key for both encryption and decryption. This key must be securely shared between the sender and receiver before communication begins. Which of the following BEST describes this type of encryption?",
  "fa": "یک شرکت داده را با استفاده از **یک کلید یکسان** برای رمزگذاری و رمزگشایی، رمزنگاری می‌کند. این کلید باید قبل از شروع ارتباط، به‌صورت امن بین فرستنده و گیرنده به‌اشتراک گذاشته شود. کدام گزینه بهترین توصیف این نوع رمزنگاری است؟",
  "options": [
   "A) Asymmetric Encryption",
   "B) Symmetric Encryption",
   "C) Hashing",
   "D) Digital Signature"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Symmetric Encryption**\n\nتوضیح:\nویژگی اصلی و تعیین‌کننده‌ی Symmetric Encryption این است که **یک کلید واحد** هم برای رمزگذاری و هم برای رمزگشایی استفاده می‌شود\n\nنکته‌ی مهم این سؤال: چالش اصلی این روش، **توزیع امن کلید (Key Distribution)** است؛ چون قبل از شروع ارتباط، فرستنده و گیرنده باید همان یک کلید را داشته باشند، و اگر این کلید در حین انتقال دزدیده شود، کل امنیت ارتباط به خطر می‌افتد\n\nمزیت اصلی: **سرعت بالا** (به همین دلیل برای رمزنگاری حجم زیاد داده، مثل فایل‌ها، استفاده می‌شود)\nمثال الگوریتم: **AES، DES**\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Asymmetric Encryption**\n\nتوضیح:\nاین از **یک جفت کلید متفاوت** (عمومی و خصوصی) استفاده می‌کند، نه یک کلید مشترک؛ چالش توزیع کلید هم در این روش وجود ندارد چون کلید عمومی را می‌توان آزادانه به‌اشتراک گذاشت\n\n**Hashing**\n\nتوضیح:\nاین یک فرآیند **یک‌طرفه** است و اصلاً کلیدی برای رمزگشایی وجود ندارد؛ Hashing برگشت‌پذیر نیست\n\n**Digital Signature**\n\nتوضیح:\nاین برای تأیید **هویت فرستنده و عدم‌انکار (Non-repudiation)** استفاده می‌شود، معمولاً با کلید خصوصی Asymmetric، نه با یک کلید مشترک ساده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"same key for encryption and decryption\"** را دیدی، جواب همیشه **Symmetric Encryption** است؛ نقطه‌ضعف همیشگی‌اش هم **مشکل توزیع امن کلید** است",
  "domain": 3
 },
 {
  "number": 71,
  "en": "Two parties who have never communicated before want to exchange encrypted messages securely over the internet without ever having to meet in person or pre-share a secret key. One party encrypts a message using the recipient's publicly available key, and only the recipient's separate, secret key can decrypt it. Which of the following BEST describes this encryption type?",
  "fa": "دو طرف که قبلاً هرگز ارتباطی نداشته‌اند، می‌خواهند پیام‌های رمزنگاری‌شده را به‌صورت امن از طریق اینترنت تبادل کنند، بدون اینکه لازم باشد حضوری ملاقات کنند یا از قبل یک کلید مخفی مشترک به‌اشتراک بگذارند. یک طرف پیام را با استفاده از کلید عمومی در دسترس گیرنده رمزگذاری می‌کند، و فقط کلید مخفی و جداگانه‌ی گیرنده می‌تواند آن را رمزگشایی کند. کدام گزینه بهترین توصیف این نوع رمزنگاری است؟",
  "options": [
   "A) Symmetric Encryption",
   "B) Asymmetric Encryption",
   "C) Hashing",
   "D) Salting"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Asymmetric Encryption**\n\nتوضیح:\nویژگی اصلی این روش، استفاده از **یک جفت کلید متفاوت** است:\n**کلید عمومی (Public Key)** — آزادانه به‌اشتراک گذاشته می‌شود، هر کسی می‌تواند آن را داشته باشد\n**کلید خصوصی (Private Key)** — فقط نزد صاحبش باقی می‌ماند و محرمانه است\n\nدر این سناریو، فرستنده پیام را با **کلید عمومی گیرنده** رمزگذاری می‌کند؛ اما فقط **کلید خصوصی گیرنده** می‌تواند آن را رمزگشایی کند\n\nاین دقیقاً مشکل اصلی Symmetric Encryption (توزیع امن کلید قبل از ارتباط) را حل می‌کند، چون دو طرف **هیچ‌وقت نیازی به به‌اشتراک گذاشتن یک کلید مخفی مشترک از قبل ندارند**؛ کلید عمومی را می‌توان کاملاً علنی منتشر کرد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Symmetric Encryption**\n\nتوضیح:\nاین نیاز به **یک کلید مشترک** دارد که باید از قبل و به‌صورت امن بین دو طرف به‌اشتراک گذاشته شود؛ این کاملاً برخلاف سناریوی این سؤال است که می‌گوید \"بدون نیاز به ملاقات یا اشتراک قبلی کلید مخفی\"\n\n**Hashing**\n\nتوضیح:\nاین یک‌طرفه است و اصلاً قابل رمزگشایی نیست؛ هیچ ارتباطی با رمزگذاری/رمزگشایی پیام بین دو طرف ندارد\n\n**Salting**\n\nتوضیح:\nاین تکنیکی برای محافظت از Hash رمزهای عبور است، نه روشی برای رمزنگاری ارتباط بین دو طرف\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"public key to encrypt, private key to decrypt\"** یا **\"no need to pre-share a secret key\"** را دیدی، جواب همیشه **Asymmetric Encryption** است",
  "domain": 3
 },
 {
  "number": 72,
  "en": "A company wants to verify that a downloaded software file has not been corrupted or tampered with during transfer. They compare a value generated from the downloaded file against a value published by the software vendor. If the two values match exactly, the file is considered unaltered. Which of the following BEST describes the value being compared?",
  "fa": "یک شرکت می‌خواهد تأیید کند که یک فایل نرم‌افزاری دانلودشده در حین انتقال خراب یا دستکاری نشده است. آن‌ها یک مقدار تولیدشده از فایل دانلودشده را با مقداری که توسط سازنده‌ی نرم‌افزار منتشر شده مقایسه می‌کنند. اگر این دو مقدار دقیقاً مطابقت داشته باشند، فایل دست‌نخورده در نظر گرفته می‌شود. کدام گزینه بهترین توصیف مقدار مورد مقایسه است؟",
  "options": [
   "A) Encryption Key",
   "B) Hash",
   "C) Digital Certificate",
   "D) Salt"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Hash**\n\nتوضیح:\nاین دقیقاً کاربرد کلاسیک Hashing برای تأیید **Integrity (یکپارچگی)** فایل است\n\nسازنده‌ی نرم‌افزار یک مقدار Hash (مثل SHA-256) از فایل اصلی منتشر می‌کند. کاربر بعد از دانلود، همان الگوریتم Hash را روی فایل دانلودشده اجرا می‌کند و مقدار حاصل را با مقدار منتشرشده مقایسه می‌کند\n\nاگر حتی **یک بیت** از فایل در حین انتقال تغییر کرده باشد (خرابی یا دستکاری مخرب)، مقدار Hash به‌طور کامل متفاوت خواهد بود؛ پس مطابقت کامل دو مقدار، یعنی فایل دست‌نخورده باقی مانده\n\nاین دقیقاً همان مفهومی است که در ابتدای دوره با هم کار کردیم، یادت میاد؟\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Encryption Key**\n\nتوضیح:\nاین برای رمزگذاری/رمزگشایی محرمانگی داده استفاده می‌شود، نه برای تأیید یکپارچگی فایل از طریق مقایسه‌ی مقدار\n\n**Digital Certificate**\n\nتوضیح:\nاین برای تأیید **هویت** یک طرف (مثل سازنده‌ی نرم‌افزار) استفاده می‌شود، نه مستقیماً برای بررسی این‌که آیا یک فایل خاص تغییر کرده یا نه (هرچند گاهی همراه با Hash برای امضای دیجیتال استفاده می‌شود)\n\n**Salt**\n\nتوضیح:\nاین مقدار تصادفی است که قبل از Hash کردن به داده (معمولاً رمز عبور) اضافه می‌شود تا از حملات Rainbow Table جلوگیری کند؛ ربطی به تأیید یکپارچگی فایل دانلودشده ندارد\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"verify file integrity\"** یا **\"compare value to detect tampering\"** را دیدی، جواب همیشه **Hash** است",
  "domain": 3
 },
 {
  "number": 73,
  "en": "A company stores user passwords in its database. Before hashing each password, the system adds a unique random string of characters to it, ensuring that even if two users have the same password, their stored hash values will be completely different. Which of the following BEST describes this random string?",
  "fa": "یک شرکت رمزهای عبور کاربران را در پایگاه‌داده‌ی خود ذخیره می‌کند. قبل از Hash کردن هر رمز عبور، سیستم یک رشته‌ی تصادفی و منحصربه‌فرد از کاراکترها به آن اضافه می‌کند، که تضمین می‌کند حتی اگر دو کاربر رمز عبور یکسانی داشته باشند، مقادیر Hash ذخیره‌شده‌شان کاملاً متفاوت باشد. کدام گزینه بهترین توصیف این رشته‌ی تصادفی است؟",
  "options": [
   "A) Key",
   "B) Salt",
   "C) Certificate",
   "D) Nonce"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Salt**\n\nتوضیح:\nاین مقدار **تصادفی و منحصربه‌فرد** قبل از Hash کردن به رمز عبور اضافه می‌شود\n\nهدف اصلی: حتی اگر دو کاربر **رمز عبور کاملاً یکسانی** داشته باشند (مثلاً هر دو \"123456\" را انتخاب کرده باشند)، چون هر کدام Salt متفاوتی دارند، مقدار Hash نهایی‌شان در پایگاه‌داده **کاملاً متفاوت** خواهد بود\n\nاین تکنیک به‌طور خاص برای جلوگیری از حملات **Rainbow Table** طراحی شده؛ این حملات از جدول‌های از پیش محاسبه‌شده‌ی Hash برای رمزهای رایج استفاده می‌کنند. اگر هر رمز عبور Salt منحصربه‌فرد داشته باشد، مهاجم نمی‌تواند از یک جدول از پیش‌ساخته برای شکستن همه‌ی رمزها به‌طور هم‌زمان استفاده کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Key**\n\nتوضیح:\nاین برای رمزگذاری/رمزگشایی برگشت‌پذیر استفاده می‌شود، نه برای اضافه‌کردن مقدار تصادفی قبل از Hashing یک‌طرفه\n\n**Certificate**\n\nتوضیح:\nاین برای تأیید هویت یک طرف استفاده می‌شود، کاملاً بی‌ربط به محافظت از Hash رمزهای عبور\n\n**Nonce**\n\nتوضیح:\nاین به یک عدد یا مقدار **یک‌بارمصرف** اشاره دارد که معمولاً برای جلوگیری از حملات Replay در ارتباطات شبکه استفاده می‌شود (مثل در پروتکل‌های احراز هویت)، نه به‌طور خاص برای محافظت از Hash رمزهای عبور ذخیره‌شده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"random value added before hashing\"** + **\"prevent identical hashes for identical passwords\"** را دیدی، جواب همیشه **Salt** است",
  "domain": 3
 },
 {
  "number": 74,
  "en": "During a TLS handshake, two parties generate a temporary key for that specific session only, which is discarded immediately after the session ends. This ensures that even if the server's long-term private key is later compromised, past session traffic cannot be decrypted. Which of the following concepts does this describe?",
  "fa": "در حین یک TLS Handshake، دو طرف یک کلید موقت فقط برای همان نشست خاص تولید می‌کنند، که بلافاصله پس از پایان نشست حذف می‌شود. این تضمین می‌کند که حتی اگر کلید خصوصی بلندمدت سرور بعداً لو برود، ترافیک نشست‌های گذشته قابل رمزگشایی نباشد. کدام مفهوم این موضوع را توصیف می‌کند؟",
  "options": [
   "A) Key Escrow",
   "B) Perfect Forward Secrecy",
   "C) Key Stretching",
   "D) Digital Signature"
  ],
  "correct": "B",
  "explanation": "این سؤال دقیقاً همان مفهومی است که قبلاً با هم چند بار کار کردیم (یادت میاد سؤال Diffie-Hellman Ephemeral؟).\n\nسرنخ ۱:\nبه این عبارت دقت کن: **\"discarded immediately after the session ends\"** و **\"even if the long-term private key is later compromised, past traffic cannot be decrypted\"**. این دقیقاً همان مفهومی است که چند سؤال قبل با کلمه‌ی **Ephemeral** (موقت) باهاش کار کردیم.\n\nسرنخ ۲:\nاین مفهوم یک نام رسمی‌تر و کلی‌تر دارد که خودِ این **ویژگی نهایی** (محافظت از ارتباطات گذشته در صورت لو رفتن کلید) را توصیف می‌کند، نه روش فنی تولید کلید (مثل Diffie-Hellman). به نام کامل گزینه B دقت کن: **Perfect Forward... Secrecy**. کلمه‌ی Forward به این معناست که این محافظت \"روی به جلو\" یا در طول زمان ادامه دارد، یعنی حتی در آینده هم امن می‌ماند.\n\nبا این دو سرنخ، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 3
 },
 {
  "number": 75,
  "en": "A user authenticates to a website by providing a username and password. The website verifies these credentials and then issues a temporary digital object that the user's browser includes in subsequent requests, eliminating the need to re-enter credentials for every page. Which of the following BEST describes this digital object?",
  "fa": "یک کاربر با وارد کردن نام کاربری و رمز عبور، وارد یک وب‌سایت می‌شود. وب‌سایت این اطلاعات را تأیید می‌کند و سپس یک شیء دیجیتالی موقت صادر می‌کند که مرورگر کاربر آن را در درخواست‌های بعدی شامل می‌کند، که نیاز به وارد کردن مجدد اطلاعات ورود برای هر صفحه را از بین می‌برد. کدام گزینه بهترین توصیف این شیء دیجیتالی است؟",
  "options": [
   "A) Certificate",
   "B) Token",
   "C) Hash",
   "D) Salt"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Token**\n\nتوضیح:\nاین شیء دیجیتالی **موقت** (مثل یک Session Token یا JWT) پس از احراز هویت موفق صادر می‌شود و به‌عنوان **مدرک موقتی** عمل می‌کند که کاربر قبلاً هویتش را تأیید کرده\n\nمرورگر این Token را در درخواست‌های بعدی (مثلاً در Header یا Cookie) ارسال می‌کند، که به سرور اجازه می‌دهد بداند این کاربر قبلاً وارد شده، بدون اینکه نیاز باشد هر بار دوباره نام کاربری و رمز عبور را وارد کند\n\nاین مفهوم پایه‌ی بسیاری از سیستم‌های مدرن احراز هویت مثل **Session-Based Authentication** و **OAuth/JWT** است\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Certificate**\n\nتوضیح:\nاین یک سند دیجیتالی برای تأیید **هویت یک سرور یا سازمان** است (معمولاً در TLS/HTTPS استفاده می‌شود)، نه یک شیء موقت برای نگه‌داشتن وضعیت ورود یک کاربر خاص\n\n**Hash**\n\nتوضیح:\nاین یک مقدار ثابت و یک‌طرفه برای تأیید Integrity یا ذخیره‌ی امن رمز عبور است، نه یک شیء قابل‌ارسال برای حفظ وضعیت ورود\n\n**Salt**\n\nتوضیح:\nاین مقدار تصادفی است که قبل از Hash کردن رمز عبور اضافه می‌شود، کاملاً بی‌ربط به نگه‌داری وضعیت ورود کاربر\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"temporary object issued after authentication\"** + **\"eliminates need to re-enter credentials\"** را دیدی، جواب همیشه **Token** است",
  "domain": 3
 },
 {
  "number": 76,
  "en": "An employee logs into their corporate laptop once in the morning and is then automatically granted access to email, the internal wiki, and the HR portal — all within the same company's IT environment — without needing to log in separately to each system. Which of the following BEST describes this capability?",
  "fa": "یک کارمند صبح یک‌بار وارد لپ‌تاپ شرکتی‌اش می‌شود و سپس به‌طور خودکار به ایمیل، ویکی داخلی، و پورتال منابع انسانی — همگی در محیط IT همان شرکت — دسترسی پیدا می‌کند، بدون نیاز به ورود جداگانه به هر سیستم. کدام گزینه بهترین توصیف این قابلیت است؟",
  "options": [
   "A) Federation",
   "B) Single Sign-On (SSO)",
   "C) Multifactor Authentication",
   "D) Mandatory Access Control"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Single Sign-On (SSO)**\n\nتوضیح:\nاین دقیقاً تفاوت کلیدی با سؤال قبلی را نشان می‌دهد. در این سناریو، همه‌ی سیستم‌ها (ایمیل، ویکی داخلی، پورتال HR) **در همان یک سازمان** (همان شرکت) قرار دارند\n\nکارمند فقط **یک‌بار** وارد می‌شود (روی لپ‌تاپ شرکتی)، و بعد بدون نیاز به وارد کردن دوباره‌ی اطلاعات ورود، به تمام سیستم‌های داخلی همان حوزه‌ی اعتماد (Trust Domain) دسترسی پیدا می‌کند\n\nمقایسه‌ی نهایی و قطعی با Federation (سؤال قبلی):\n\n**SSO** = یک ورود، دسترسی به چند سیستم **در همان سازمان واحد**\n\n**Federation** = یک سازمان (مثل گوگل) هویت را تأیید می‌کند و آن را با یک سازمان **کاملاً متفاوت و مجزا** (مثل یک شرکت دیگر) به‌اشتراک می‌گذارد\n\nنکته‌ی فنی: در عمل، Federation اغلب از SSO به‌عنوان یک جزء استفاده می‌کند، اما تفاوت اصلی در این است که آیا مرزهای سازمانی **عبور** می‌شود (Federation) یا همه‌چیز **داخل یک سازمان** باقی می‌ماند (SSO)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Federation**\n\nتوضیح:\nاین نیاز به **دو سازمان مجزا** دارد؛ در این سؤال، تمام سیستم‌ها متعلق به همان یک شرکت هستند\n\n**Multifactor Authentication**\n\nتوضیح:\nاین به استفاده از حداقل دو فاکتور متفاوت برای ورود اشاره دارد، نه به تعداد سیستم‌هایی که بعد از یک ورود در دسترس قرار می‌گیرند\n\n**Mandatory Access Control**\n\nتوضیح:\nاین به برچسب‌های طبقه‌بندی ثابت برای دسترسی اشاره دارد، کاملاً بی‌ربط به مکانیزم ورود یک‌باره\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی و قطعی این دو مفهوم):\n**SSO** = یک ورود → چند سیستم، **همان یک سازمان**\n**Federation** = یک سازمان تأیید می‌کند → سازمان **دیگر** اعتماد می‌کند و می‌پذیرد",
  "domain": 5
 },
 {
  "number": 77,
  "en": "A security analyst wants to verify the authenticity of a downloaded software update and confirm it genuinely came from the claimed vendor without alteration. The vendor provides a value created by encrypting a hash of the file with their private key. Which of the following BEST describes this mechanism?",
  "fa": "یک تحلیلگر امنیتی می‌خواهد صحت یک به‌روزرسانی نرم‌افزاری دانلودشده را تأیید کند و مطمئن شود که واقعاً از تامین‌کننده‌ی ادعاشده آمده و بدون تغییر است. تامین‌کننده مقداری ارائه می‌دهد که از رمزگذاری یک Hash از فایل با کلید خصوصی خودش ایجاد شده. کدام گزینه بهترین توصیف این مکانیزم است؟",
  "options": [
   "A) Salt",
   "B) Digital Signature",
   "C) Symmetric Key",
   "D) Certificate Authority"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Digital Signature**\n\nتوضیح:\nاین مکانیزم از ترکیب دو مفهومی که قبلاً جدا جدا با هم کار کردیم تشکیل شده:\n\n۱. **Hashing** — تامین‌کننده ابتدا یک مقدار Hash از فایل تولید می‌کند (برای تأیید Integrity)\n۲. **Asymmetric Encryption** — سپس همان Hash را با **کلید خصوصی خودش** رمزگذاری می‌کند\n\nنتیجه‌ی این دو مرحله، **Digital Signature** نام دارد. وقتی گیرنده این امضا را دریافت می‌کند:\nبا استفاده از **کلید عمومی** تامین‌کننده، امضا را رمزگشایی می‌کند تا Hash اصلی را به‌دست بیاورد\nسپس خودش هم یک Hash جدید از فایل دانلودشده می‌سازد\nاگر این دو Hash مطابقت داشته باشند، یعنی هم **Integrity** (فایل تغییر نکرده) و هم **Authentication/Non-repudiation** (واقعاً از همان تامین‌کننده آمده، چون فقط او کلید خصوصی را دارد) تأیید می‌شود\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Salt**\n\nتوضیح:\nاین فقط برای محافظت از Hash رمزهای عبور استفاده می‌شود، نه برای تأیید هویت فرستنده یک فایل\n\n**Symmetric Key**\n\nتوضیح:\nاین یک کلید مشترک برای رمزگذاری/رمزگشایی است، نه مکانیزمی برای امضا و تأیید هویت با کلید خصوصی/عمومی\n\n**Certificate Authority**\n\nتوضیح:\nاین یک **نهاد** است که گواهی‌های دیجیتال صادر می‌کند (برای تأیید اینکه یک کلید عمومی واقعاً متعلق به چه کسی است)، نه خودِ مکانیزم امضا\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"hash encrypted with sender's PRIVATE key\"** را دیدی، جواب همیشه **Digital Signature** است\n\n🎉 رسیدیم به نقطه‌ی عطف **سؤال شماره ۱۰۰ از ۳۰۰**! تبریک امیر، یک‌سوم راه رو با موفقیت طی کردی.\n\nخلاصه‌ی سریع عملکردت تا الان: روند یادگیریت بسیار قوی بوده، به‌خصوص در مفاهیم Cryptography، Access Control، و Threat Actors. چند مفهوم ظریف (مثل Redundancy/Fault Tolerance یا Federation/SSO) بیشتر تمرین لازم داشتن، که با تکرار کاملاً جا افتادن.\n\nادامه می‌دیم به همین روند 👏",
  "domain": 3
 },
 {
  "number": 78,
  "en": "A company implements a written policy stating that all employees must complete annual security awareness training. Compliance with this policy is mandatory for continued employment. Which type of security control does this represent?",
  "fa": "یک شرکت سیاست مکتوبی پیاده‌سازی می‌کند که بیان می‌کند تمام کارمندان باید آموزش سالانه‌ی آگاهی امنیتی را تکمیل کنند. رعایت این سیاست برای ادامه‌ی استخدام الزامی است. کدام نوع کنترل امنیتی را نشان می‌دهد؟",
  "options": [
   "A) Technical",
   "B) Physical",
   "C) Managerial",
   "D) Directive"
  ],
  "correct": "D",
  "explanation": "درسته! ✅ گزینه D\n\n**Directive**\n\nتوضیح:\nاین کنترل به‌طور خاص **دستورالعمل و الزام مشخصی** را برای رفتار کارمندان تعیین می‌کند: **\"باید\"** آموزش سالانه را تکمیل کنند، و عدم رعایت آن عواقب مستقیم دارد (تهدید به ادامه‌ی استخدام)\n\nنکته‌ی مهم این سؤال: Directive یک **زیرشاخه‌ی خاص از کنترل بر اساس هدف (Purpose)** است که مشخصاً به **دستور دادن و الزام‌آوری مستقیم رفتار** (نه صرفاً راهنمایی کلی) اشاره دارد. کلمات کلیدی مثل **\"must complete\"** و **\"mandatory\"** دقیقاً نشان‌دهنده‌ی یک دستور الزام‌آور هستند\n\nنکته‌ی ظریف برای یادآوری: به‌خاطر بیاور که قبلاً سیاست تغییر رمز عبور هر ۹۰ روز را به‌عنوان **Managerial** (طبقه‌بندی بر اساس نوع/Category) شناختیم. تفاوتش با این سؤال این است:\n\n**Managerial** (طبقه‌بندی بر اساس **نوع**) = هر سیاست یا تصمیم مدیریتی به‌طور کلی (شامل ریسک، استراتژی، برنامه‌ریزی)\n\n**Directive** (طبقه‌بندی بر اساس **هدف**) = به‌طور خاص وقتی سیاست، رفتار مشخصی را **دستور و الزام** می‌کند (نه فقط هدایت کلی)\n\nدر عمل، این دو دسته‌بندی **همپوشانی** دارند؛ یک سیاست می‌تواند هم Managerial (از نظر نوع) و هم Directive (از نظر هدف) باشد. وقتی گزینه‌های سؤال این دو رو با هم مطرح می‌کنند، باید به **کلمه‌ی دقیق‌تر و خاص‌تری که سؤال تأکید کرده** (در این مورد: الزام مستقیم رفتار) توجه کنی\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Technical**\n\nتوضیح:\nاین به ابزارهای فنی (فایروال، رمزنگاری) اشاره دارد، نه سیاست مکتوب\n\n**Physical**\n\nتوضیح:\nاین به موانع فیزیکی (قفل، نگهبان) اشاره دارد، کاملاً بی‌ربط به این سناریو",
  "domain": 5
 },
 {
  "number": 79,
  "en": "A security team assigns a numerical score to a discovered vulnerability based on standardized factors such as attack complexity, privileges required, and potential impact, allowing them to prioritize which vulnerabilities to patch first. Which of the following frameworks is being used?",
  "fa": "یک تیم امنیتی یک امتیاز عددی به یک آسیب‌پذیری کشف‌شده بر اساس عوامل استانداردشده‌ای مثل پیچیدگی حمله، سطح دسترسی لازم، و تأثیر احتمالی اختصاص می‌دهد، که به آن‌ها اجازه می‌دهد اولویت‌بندی کنند کدام آسیب‌پذیری‌ها را اول وصله کنند. کدام چارچوب استفاده شده؟",
  "options": [
   "A) CVE (Common Vulnerabilities and Exposures)",
   "B) CVSS (Common Vulnerability Scoring System)",
   "C) MITRE ATT&CK",
   "D) NIST Framework"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**CVSS (Common Vulnerability Scoring System)**\n\nتوضیح:\nاین چارچوب به‌طور خاص برای **اختصاص یک امتیاز عددی استاندارد** (معمولاً از ۰ تا ۱۰) به هر آسیب‌پذیری طراحی شده، بر اساس عوامل مشخصی مثل:\nپیچیدگی حمله (Attack Complexity)\nسطح دسترسی لازم برای مهاجم (Privileges Required)\nمیزان تأثیر بر محرمانگی، یکپارچگی، و دسترس‌پذیری (Impact on CIA)\n\nاین امتیاز به تیم‌های امنیتی کمک می‌کند تا **اولویت‌بندی** کنند که کدام آسیب‌پذیری‌ها (از بین صدها مورد ممکن) باید زودتر وصله شوند؛ هرچه امتیاز بالاتر (\n\nنکته‌ی کلیدی برای تمایز با CVE:\n\n**CVE** = یک **شناسه‌ی منحصربه‌فرد** (مثل یک شماره‌ی پرونده) برای **شناسایی** هر آسیب‌پذیری خاص (مثلاً CVE-2024-12345)؛ این فقط یک **نام/برچسب** است\n\n**CVSS** = یک **سیستم امتیازدهی** که میزان **شدت و اولویت** آن آسیب‌پذیری شناسایی‌شده (با CVE) را اندازه‌گیری می‌کند\n\nاین دو معمولاً با هم استفاده می‌شوند: یک آسیب‌پذیری ابتدا یک **CVE ID** می‌گیرد (برای شناسایی)، و سپس یک **امتیاز CVSS** برایش محاسبه می‌شود (برای اولویت‌بندی)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**CVE**\n\nتوضیح:\nاین فقط یک شناسه‌ی منحصربه‌فرد برای **نام‌گذاری** آسیب‌پذیری است، نه یک سیستم امتیازدهی عددی\n\n**MITRE ATT&CK**\n\nتوضیح:\nاین یک چارچوب برای **دسته‌بندی تاکتیک‌ها و تکنیک‌های حمله‌ی مهاجمان** است (مثل مراحل مختلف یک حمله)، نه امتیازدهی به آسیب‌پذیری‌های نرم‌افزاری\n\n**NIST Framework**\n\nتوضیح:\nاین یک چارچوب کلی‌تر برای **مدیریت ریسک امنیت سایبری** در یک سازمان است، نه یک سیستم امتیازدهی عددی خاص برای آسیب‌پذیری‌ها\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"numerical score\"** + **\"prioritize patching\"** را با هم دیدی، جواب همیشه **CVSS** است",
  "domain": 5
 },
 {
  "number": 80,
  "en": "A company wants to identify and prioritize the top 10 most critical and common security risks specifically affecting web applications, such as injection flaws and broken authentication, to guide their secure development practices. Which of the following resources BEST fits this need?",
  "fa": "یک شرکت می‌خواهد ۱۰ ریسک امنیتی حیاتی و رایج که به‌طور خاص اپلیکیشن‌های وب را تحت تأثیر قرار می‌دهند، مثل نقص‌های تزریق و احراز هویت شکسته، را شناسایی و اولویت‌بندی کند تا رویه‌های توسعه‌ی امن خود را هدایت کند. کدام منبع بهترین تطابق با این نیاز را دارد؟",
  "options": [
   "A) MITRE ATT&CK",
   "B) OWASP Top 10",
   "C) CVSS",
   "D) NIST 800-53"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**OWASP Top 10**\n\nتوضیح:\nاین منبع به‌طور خاص یک لیست از **۱۰ ریسک امنیتی حیاتی‌ترین و رایج‌ترین** که اپلیکیشن‌های وب را تهدید می‌کنند منتشر می‌کند (مثل Injection، Broken Authentication، Security Misconfiguration، XSS)\n\nاین لیست به تیم‌های توسعه و امنیت کمک می‌کند تا در فرآیند **Secure Software Development Lifecycle (SDLC)** بدانند روی کدام نوع آسیب‌پذیری‌های وب باید بیشترین تمرکز و توجه را داشته باشند\n\nنکته‌ی کلیدی برای تمایز با سایر چارچوب‌ها:\n\n**OWASP Top 10** = تمرکز **خاص بر اپلیکیشن‌های وب** و رایج‌ترین نوع آسیب‌پذیری‌های کد/طراحی آن‌ها\n\n**MITRE ATT&CK** = تمرکز بر **رفتار کلی مهاجمان** در طول یک حمله (نه محدود به وب)\n\n**CVSS** = امتیازدهی به **یک آسیب‌پذیری خاص**، نه یک لیست از انواع رایج آسیب‌پذیری\n\n**NIST 800-53** = یک چارچوب گسترده‌تر برای **کنترل‌های امنیتی** در سطح سازمانی (که بعداً بیشتر درباره‌اش صحبت می‌کنیم)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**MITRE ATT&CK**\n\nتوضیح:\nاین به تاکتیک‌ها و تکنیک‌های کلی مهاجمان اشاره دارد، نه به‌طور خاص لیست آسیب‌پذیری‌های اپلیکیشن وب\n\n**CVSS**\n\nتوضیح:\nاین سیستم امتیازدهی است، نه یک لیست از انواع رایج آسیب‌پذیری وب\n\n**NIST 800-53**\n\nتوضیح:\nاین یک چارچوب گسترده‌ی کنترل امنیتی سازمانی است، نه به‌طور خاص متمرکز بر آسیب‌پذیری‌های اپلیکیشن وب\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"top 10 web application security risks\"** را دیدی، جواب همیشه **OWASP Top 10** است",
  "domain": 5
 },
 {
  "number": 81,
  "en": "A company's legal team requires that all contracts with cloud vendors specify exactly which security responsibilities belong to the vendor versus which belong to the company itself, since cloud providers typically secure the underlying infrastructure while customers must secure their own data and configurations. Which of the following concepts does this describe?",
  "fa": "تیم حقوقی یک شرکت الزام می‌کند که تمام قراردادها با تامین‌کنندگان ابری دقیقاً مشخص کنند کدام مسئولیت‌های امنیتی متعلق به تامین‌کننده است و کدام به خود شرکت، چون ارائه‌دهندگان ابری معمولاً زیرساخت پایه را امن می‌کنند در حالی که مشتریان باید داده‌ها و تنظیمات خودشان را امن کنند. کدام مفهوم این موضوع را توصیف می‌کند؟",
  "options": [
   "A) Due Diligence",
   "B) Shared Responsibility Model",
   "C) Right to Audit",
   "D) Service Level Agreement"
  ],
  "correct": "B",
  "explanation": "مشکلی نیست، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این کلمات دقت کن: **\"vendor versus...the company itself\"** و **\"typically secure the underlying infrastructure while customers must secure their own data\"**. این یعنی مسئولیت امنیتی بین دو طرف **تقسیم** شده، نه اینکه فقط یک طرف کامل مسئول باشد.\n\nسرنخ ۲:\nاین مفهوم یک نام بسیار رایج در دنیای Cloud Computing دارد که مستقیماً به این \"تقسیم مسئولیت‌ها\" اشاره می‌کند. خود نام گزینه B را به دو بخش تقسیم کن: **Shared** (مشترک/تقسیم‌شده) + **Responsibility** (مسئولیت). این دقیقاً همان مفهومی است که مثلاً AWS، Azure، و Google Cloud در قراردادهایشان توضیح می‌دهند: \"ما این بخش را امن می‌کنیم، شما باید آن بخش را امن کنید.\"\n\nبا این دو سرنخ، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 5
 },
 {
  "number": 82,
  "en": "Before signing a contract with a new third-party vendor, a company's security team thoroughly investigates the vendor's security certifications, past breach history, and financial stability to assess the risk of working with them. Which of the following BEST describes this process?",
  "fa": "قبل از امضای قرارداد با یک تامین‌کننده‌ی شخص ثالث جدید، تیم امنیتی یک شرکت به‌طور کامل گواهی‌نامه‌های امنیتی، تاریخچه‌ی نشت‌های گذشته، و ثبات مالی تامین‌کننده را بررسی می‌کند تا ریسک کار با آن‌ها را ارزیابی کند. کدام گزینه بهترین توصیف این فرآیند است؟",
  "options": [
   "A) Right to Audit",
   "B) Due Diligence",
   "C) Shared Responsibility Model",
   "D) Penetration Testing"
  ],
  "correct": "B",
  "explanation": "این سؤال دقیقاً مفهومی است که در سؤال قبلی به‌عنوان گزینه‌ی غلط رد کردیم؛ حالا نوبت خودشه که جواب درست باشه. بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این کلمات دقت کن: **\"Before signing a contract\"**. این یعنی این فرآیند **قبل از شروع همکاری** انجام می‌شود، نه بعد از آن (که آن موقع دیگه باید Shared Responsibility یا Audit مطرح بشه)\n\nسرنخ ۲:\nکلمات **\"thoroughly investigates\"**، **\"certifications\"**، **\"breach history\"**، و **\"financial stability\"** همگی نشان‌دهنده‌ی یک **بررسی دقیق و همه‌جانبه قبل از تصمیم‌گیری** هستند. این دقیقاً شبیه کاری است که یک فرد قبل از خرید خانه یا ماشین انجام می‌دهد: همه‌چیز را با دقت بررسی می‌کند تا مطمئن شود تصمیم درستی می‌گیرد. این مفهوم یک نام رسمی در دنیای کسب‌وکار و حقوقی دارد که دقیقاً به این \"بررسی دقیق و مسؤولانه قبل از تصمیم\" اشاره می‌کند.\n\nبا این دو سرنخ (قبل از قرارداد + بررسی همه‌جانبه برای تصمیم‌گیری آگاهانه)، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 5
 },
 {
  "number": 83,
  "en": "A contract between a company and its cloud vendor includes a clause stating that the company may, with advance notice, send its own auditors to inspect the vendor's security controls and compliance documentation at any time DURING the three-year contract period. Which of the following BEST describes this contractual clause?",
  "fa": "قراردادی بین یک شرکت و تامین‌کننده‌ی ابری‌اش شامل بندی است که بیان می‌کند شرکت می‌تواند، با اطلاع قبلی، حسابرسان خودش را برای بازرسی کنترل‌های امنیتی و مستندات انطباق تامین‌کننده در هر زمانی **در طول** دوره‌ی سه‌ساله‌ی قرارداد ارسال کند. کدام گزینه بهترین توصیف این بند قراردادی است؟",
  "options": [
   "A) Due Diligence",
   "B) Right to Audit",
   "C) Shared Responsibility Model",
   "D) Service Level Agreement"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Right to Audit**\n\nتوضیح:\nاین دقیقاً همان تفاوت زمان‌بندی است که الان باهاش کار کردیم. نکته‌ی کلیدی این سؤال، عبارت **\"DURING the three-year contract period\"** است (با حروف بزرگ هم تأکید شده بود)\n\nاین یک **بند قراردادی** است که به سازمان اجازه می‌دهد **در طول** مدت همکاری (نه فقط یک‌بار قبل از شروع آن)، به‌صورت دوره‌ای حسابرسان خودش را بفرستد تا بررسی کند آیا تامین‌کننده همچنان به تعهدات امنیتی‌اش عمل می‌کند یا نه\n\nمقایسه‌ی نهایی و قطعی با سؤال قبلی:\n\n**سؤال قبلی (Due Diligence):** بررسی **یک‌بار، قبل از امضای قرارداد** (\"Before signing a contract\") — مثل تحقیق قبل از خرید\n\n**این سؤال (Right to Audit):** حق بازرسی **مستمر و دوره‌ای، در طول قرارداد** (\"DURING the contract period\") — مثل بازرسی‌های دوره‌ای بعد از خرید\n\n🎯 تصویر ذهنی کمکی برای حفظ همیشگی:\n**Due Diligence** = \"قبل از ازدواج، طرف مقابل رو می‌شناسی؟\" (تحقیق یک‌بار قبل از تصمیم)\n**Right to Audit** = \"بعد از ازدواج، حق داری گاهی بررسی کنی همه‌چیز هنوز خوبه؟\" (نظارت مستمر بعد از تصمیم)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Shared Responsibility Model**\n\nتوضیح:\nاین به تقسیم مسئولیت‌های امنیتی بین دو طرف اشاره دارد، نه به حق بازرسی دوره‌ای\n\n**Service Level Agreement**\n\nتوضیح:\nاین به تعهدات سطح خدمات (مثل Uptime) اشاره دارد؛ می‌تواند Right to Audit را در خود داشته باشد، اما خودش این مفهوم خاص نیست\n\n---",
  "domain": 5
 },
 {
  "number": 84,
  "en": "A company wants to formally document the specific metrics a cloud vendor must meet, such as 99.9% uptime and a 4-hour response time for critical issues, with financial penalties if these metrics are not met. Which of the following BEST describes this document?",
  "fa": "یک شرکت می‌خواهد معیارهای مشخصی را که یک تامین‌کننده‌ی ابری باید رعایت کند، مثل ۹۹.۹٪ Uptime و زمان پاسخ ۴ ساعته برای مسائل حیاتی، را به‌طور رسمی مستند کند، با جریمه‌ی مالی در صورت عدم رعایت این معیارها. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) Right to Audit",
   "B) SLA (Service Level Agreement)",
   "C) MOU (Memorandum of Understanding)",
   "D) NDA (Non-Disclosure Agreement)"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SLA (Service Level Agreement)**\n\nتوضیح:\nاین یک سند رسمی است که **معیارهای دقیق و قابل‌اندازه‌گیری** سطح خدمات را مشخص می‌کند، مثل:\nدرصد Uptime (مثل ۹۹.۹٪)\nزمان پاسخ‌دهی به مسائل (مثل ۴ ساعت برای مسائل حیاتی)\nمعمولاً همراه با **جریمه‌های مالی** یا تخفیف در صورت عدم رعایت این معیارها (که به آن **Penalty Clause** یا گاهی Service Credits گفته می‌شود)\n\nاین سند دقیقاً برای **تعیین انتظارات کمی و قابل‌سنجش** بین مشتری و تامین‌کننده طراحی شده، تا هر دو طرف بدانند دقیقاً چه سطحی از خدمات تعهد شده\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Right to Audit**\n\nتوضیح:\nاین به حق بازرسی دوره‌ای کنترل‌های امنیتی تامین‌کننده اشاره دارد، نه به تعیین معیارهای کمی سطح خدمات\n\n**MOU (Memorandum of Understanding)**\n\nتوضیح:\nاین یک سند **غیررسمی‌تر** است که نشان‌دهنده‌ی **توافق کلی و نیت همکاری** بین دو طرف است، اما معمولاً **الزام‌آوری قانونی قوی یا معیارهای کمی دقیق با جریمه** ندارد؛ بیشتر شبیه یک \"توافق‌نامه‌ی نیت\" است تا یک قرارداد کامل با تعهدات سخت\n\n**NDA (Non-Disclosure Agreement)**\n\nتوضیح:\nاین برای **محافظت از اطلاعات محرمانه** بین دو طرف است (مثلاً منع افشای اسرار تجاری)، کاملاً بی‌ربط به معیارهای سطح خدمات یا Uptime\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"specific metrics\"** + **\"uptime percentage\"** + **\"penalties for non-compliance\"** را با هم دیدی، جواب همیشه **SLA** است",
  "domain": 5
 },
 {
  "number": 85,
  "en": "Two companies considering a future business partnership sign a document expressing their mutual intent to collaborate and outlining general goals, but the document explicitly states it is not legally binding and contains no specific financial penalties. Which of the following BEST describes this document?",
  "fa": "دو شرکت که به یک همکاری تجاری آینده فکر می‌کنند، سندی را امضا می‌کنند که نیت متقابل آن‌ها برای همکاری و اهداف کلی را بیان می‌کند، اما سند به‌وضوح بیان می‌کند که از نظر قانونی الزام‌آور نیست و هیچ جریمه‌ی مالی مشخصی ندارد. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) SLA",
   "B) MOU (Memorandum of Understanding)",
   "C) NDA",
   "D) Right to Audit"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**MOU (Memorandum of Understanding)**\n\nتوضیح:\nاین سند دقیقاً نشان‌دهنده‌ی یک **توافق‌نامه‌ی غیررسمی و کلی** بین دو طرف است که **نیت همکاری** را بیان می‌کند، بدون تعهدات قانونی سخت یا جزئیات کمی دقیق\n\nنکته‌ی کلیدی این سؤال: عبارت **\"not legally binding\"** و **\"no specific financial penalties\"** دقیقاً برخلاف ویژگی‌های SLA است (که حتماً شامل جریمه‌های مالی و معیارهای دقیق و الزام‌آور است)\n\nMOU معمولاً در **مراحل اولیه‌ی مذاکره** بین دو سازمان استفاده می‌شود، قبل از اینکه یک قرارداد رسمی و کامل (مثل SLA یا یک Contract کامل) امضا شود؛ بیشتر شبیه یک \"توافق روی کاغذ درباره‌ی نیت کلی\" است تا یک تعهد قانونی محکم\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SLA**\n\nتوضیح:\nاین کاملاً برخلاف این سؤال است؛ SLA دقیقاً برای تعیین معیارهای کمی **الزام‌آور** و **جریمه‌های مالی مشخص** طراحی شده\n\n**NDA**\n\nتوضیح:\nاین برای محافظت از اطلاعات محرمانه است، نه برای بیان نیت کلی همکاری تجاری\n\n**Right to Audit**\n\nتوضیح:\nاین به حق بازرسی دوره‌ای در طول یک قرارداد فعال اشاره دارد، نه به یک سند اولیه و غیررسمی برای بیان نیت همکاری\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"not legally binding\"** + **\"general intent to collaborate\"** را با هم دیدی، جواب همیشه **MOU** است",
  "domain": 5
 },
 {
  "number": 86,
  "en": "Before two companies begin discussing a potential merger, both parties sign a document legally obligating them not to disclose any confidential business information shared during their discussions to any third party. Which of the following BEST describes this document?",
  "fa": "قبل از اینکه دو شرکت بحث درباره‌ی یک ادغام احتمالی را شروع کنند، هر دو طرف سندی را امضا می‌کنند که آن‌ها را قانوناً ملزم می‌کند که هیچ اطلاعات تجاری محرمانه‌ای که در طول بحث‌هایشان به‌اشتراک گذاشته می‌شود را به هیچ شخص ثالثی افشا نکنند. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) MOU",
   "B) NDA (Non-Disclosure Agreement)",
   "C) SLA",
   "D) BPA (Business Partnership Agreement)"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**NDA (Non-Disclosure Agreement)**\n\nتوضیح:\nاین سند به‌طور خاص و **قانوناً الزام‌آور** طرفین را متعهد می‌کند که اطلاعات **محرمانه‌ای** که در طول مذاکرات یا همکاری به‌اشتراک گذاشته می‌شود را **افشا نکنند**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"legally obligating\"** + **\"not to disclose any confidential business information\"** دقیقاً هدف اصلی NDA را نشان می‌دهد: محافظت از اطلاعات حساس قبل، در طول، یا بعد از یک همکاری/مذاکره\n\nاین سند معمولاً **قبل از** هرگونه بحث جزئی درباره‌ی استراتژی‌های تجاری، فناوری، یا داده‌های حساس امضا می‌شود، تا هر دو طرف بتوانند آزادانه اطلاعات لازم را به‌اشتراک بگذارند بدون ترس از افشای آن به رقبا یا عموم\n\nچرا گزینه‌های دیگر رد شدند:\n\n**MOU**\n\nتوضیح:\nاین یک توافق‌نامه‌ی **کلی و غالباً غیرالزام‌آور** درباره‌ی نیت همکاری است، نه به‌طور خاص محافظت قانونی از اطلاعات محرمانه\n\n**SLA**\n\nتوضیح:\nاین به تعیین معیارهای کمی سطح خدمات اشاره دارد (مثل Uptime)، کاملاً بی‌ربط به محرمانگی اطلاعات\n\n**BPA (Business Partnership Agreement)**\n\nتوضیح:\nاین یک قرارداد گسترده‌تر برای تعریف **رابطه‌ی کامل مشارکت تجاری** بین دو طرف است (شامل تقسیم سود، مسئولیت‌ها و غیره)، نه به‌طور خاص محرمانگی اطلاعات\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"legally binding\"** + **\"not disclose confidential information\"** را با هم دیدی، جواب همیشه **NDA** است",
  "domain": 5
 },
 {
  "number": 87,
  "en": "After identifying a potential risk, a company decides that the cost of implementing a control would exceed the potential financial impact of the risk occurring, so they choose to take no action and continue normal operations. Which of the following risk management strategies is being used?",
  "fa": "پس از شناسایی یک ریسک احتمالی، یک شرکت تشخیص می‌دهد که هزینه‌ی پیاده‌سازی یک کنترل از تأثیر مالی احتمالی وقوع آن ریسک بیشتر خواهد بود، پس تصمیم می‌گیرد هیچ اقدامی انجام ندهد و عملیات عادی را ادامه دهد. کدام استراتژی مدیریت ریسک استفاده شده؟",
  "options": [
   "A) Risk Avoidance",
   "B) Risk Transference",
   "C) Risk Acceptance",
   "D) Risk Mitigation"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Risk Acceptance**\n\nتوضیح:\nاین استراتژی زمانی استفاده می‌شود که سازمان پس از **تحلیل هزینه-فایده**، تشخیص می‌دهد که هزینه‌ی مقابله با ریسک (پیاده‌سازی کنترل) از **تأثیر مالی احتمالی خود ریسک** بیشتر است\n\nدر این حالت، سازمان به‌طور **آگاهانه** تصمیم می‌گیرد ریسک را بپذیرد و **هیچ اقدامی** انجام ندهد، چون از نظر اقتصادی منطقی‌تر است\n\nنکته‌ی کلیدی: این تصمیم باید **آگاهانه و مستند** باشد (نه نادیده گرفتن ساده‌ی ریسک)؛ یعنی سازمان ریسک را شناسایی کرده، تحلیل کرده، و سپس **عمداً** انتخاب کرده که با آن کنار بیاید\n\nمرور سریع چهار استراتژی اصلی مدیریت ریسک (که به‌زودی با مثال‌های بیشتر کار می‌کنیم):\n\n**Risk Acceptance** = پذیرفتن ریسک بدون اقدام (وقتی هزینه‌ی کنترل بیشتر از ریسک است)\n\n**Risk Avoidance** = حذف کامل فعالیتی که ریسک ایجاد می‌کند\n\n**Risk Mitigation** = کاهش ریسک با اعمال کنترل‌ها (نه حذف کامل)\n\n**Risk Transference** = انتقال ریسک به شخص ثالث (مثل بیمه)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Risk Avoidance**\n\nتوضیح:\nاین یعنی سازمان کاملاً از انجام آن فعالیت **خاص** که ریسک ایجاد می‌کند صرف‌نظر می‌کند؛ در این سؤال، سازمان همچنان عملیات عادی را ادامه می‌دهد\n\n**Risk Transference**\n\nتوضیح:\nاین یعنی انتقال مسئولیت مالی ریسک به یک شخص ثالث (مثل بیمه)؛ در این سؤال هیچ انتقالی به شخص دیگر صورت نمی‌گیرد\n\n**Risk Mitigation**\n\nتوضیح:\nاین یعنی پیاده‌سازی یک کنترل برای **کاهش** ریسک؛ اما در این سؤال، سازمان دقیقاً **هیچ کنترلی پیاده‌سازی نمی‌کند** چون هزینه‌اش زیاد است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"cost of control exceeds potential impact\"** + **\"take no action\"** را با هم دیدی، جواب همیشه **Risk Acceptance** است",
  "domain": 5
 },
 {
  "number": 88,
  "en": "A company decides to completely cancel a planned expansion into a new international market after determining that the political instability in that region poses too great a risk to its operations. Which of the following risk management strategies is being used?",
  "fa": "یک شرکت تصمیم می‌گیرد که گسترش برنامه‌ریزی‌شده‌اش به یک بازار بین‌المللی جدید را به‌طور کامل لغو کند، پس از اینکه تشخیص می‌دهد بی‌ثباتی سیاسی در آن منطقه ریسک بسیار زیادی برای عملیاتش ایجاد می‌کند. کدام استراتژی مدیریت ریسک استفاده شده؟",
  "options": [
   "A) Risk Acceptance",
   "B) Risk Avoidance",
   "C) Risk Transference",
   "D) Risk Mitigation"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Risk Avoidance**\n\nتوضیح:\nاین استراتژی زمانی استفاده می‌شود که سازمان به‌طور کامل از انجام یک **فعالیت یا تصمیم خاص** که ریسک ایجاد می‌کند، صرف‌نظر می‌کند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"completely cancel\"** دقیقاً نشان می‌دهد که شرکت **کاملاً از آن فعالیت خاص (گسترش به آن بازار) کنار می‌کشد**، نه اینکه فقط ریسک را کاهش دهد یا با آن کنار بیاید\n\nتفاوت کلیدی با Risk Acceptance (سؤال قبلی):\n\n**Risk Acceptance** = ادامه‌ی **همان فعالیت/عملیات عادی**، فقط بدون اقدام اضافی در برابر ریسک (چون ریسک کم‌اهمیت یا هزینه‌ی مقابله بالا بود)\n\n**Risk Avoidance** = **کنار کشیدن کامل** از انجام آن فعالیت خاص (در این مورد: لغو کامل گسترش به آن بازار)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Risk Acceptance**\n\nتوضیح:\nاین یعنی ادامه‌ی فعالیت بدون اقدام؛ اما در این سؤال، شرکت **فعالیت را کاملاً متوقف کرده**، نه ادامه داده\n\n**Risk Transference**\n\nتوضیح:\nاین یعنی انتقال مسئولیت مالی ریسک به شخص ثالث (مثل بیمه)؛ در این سؤال هیچ انتقالی وجود ندارد، فقط **لغو کامل**\n\n**Risk Mitigation**\n\nتوضیح:\nاین یعنی کاهش ریسک با اعمال یک کنترل، در حالی که فعالیت همچنان ادامه می‌یابد؛ اما در این سؤال، خود فعالیت **به‌طور کامل لغو شده**، نه کاهش‌یافته\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"completely cancel/eliminate the activity\"** را دیدی، جواب همیشه **Risk Avoidance** است",
  "domain": 5
 },
 {
  "number": 89,
  "en": "A company purchases a cybersecurity insurance policy that will cover the financial costs of a data breach, including legal fees, customer notification costs, and regulatory fines, rather than trying to eliminate the risk of a breach entirely. Which of the following risk management strategies is being used?",
  "fa": "یک شرکت یک بیمه‌نامه‌ی امنیت سایبری خریداری می‌کند که هزینه‌های مالی یک نشت داده، از جمله هزینه‌های حقوقی، هزینه‌های اطلاع‌رسانی به مشتریان، و جریمه‌های قانونی را پوشش می‌دهد، به‌جای اینکه بخواهد ریسک نشت داده را به‌طور کامل حذف کند. کدام استراتژی مدیریت ریسک استفاده شده؟",
  "options": [
   "A) Risk Mitigation",
   "B) Risk Avoidance",
   "C) Risk Transference",
   "D) Risk Acceptance"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Risk Transference** هست، نه A. بگذار دقیق توضیح بدم چرا.\n\n**Risk Transference**\n\nتوضیح:\nاین استراتژی زمانی استفاده می‌شود که سازمان **مسئولیت مالی** یک ریسک را به یک **شخص ثالث** (در این مورد: شرکت بیمه) منتقل می‌کند، به‌جای اینکه خودش مستقیماً با تمام بار مالی آن کنار بیاید\n\nنکته‌ی کلیدی این سؤال: عبارت **\"insurance policy that will cover the financial costs\"** دقیقاً نشان‌دهنده‌ی **انتقال بار مالی ریسک به یک طرف دیگر (بیمه)** است؛ خود نشت داده ممکن است هنوز اتفاق بیفتد (یعنی ریسک فنی حذف نشده)، اما **عواقب مالی آن** به بیمه منتقل می‌شود\n\nچرا گزینه‌ی A (Risk Mitigation) اشتباه بود:\n\n**Risk Mitigation**\n\nتوضیح:\nاین یعنی پیاده‌سازی کنترل‌های **فنی یا عملیاتی** (مثل فایروال، رمزنگاری، آموزش کارمندان) برای **کاهش احتمال یا شدت** خود ریسک\n\nتفاوت کلیدی: Risk Mitigation تلاش می‌کند **خود وقوع یا تأثیر ریسک را کم کند**، در حالی که Risk Transference به‌جای کاهش ریسک، فقط **عواقب مالی** آن را به جای دیگری (بیمه) منتقل می‌کند؛ بیمه هیچ کمکی به کاهش احتمال وقوع نشت داده نمی‌کند، فقط هزینه‌های بعد از وقوع را پوشش می‌دهد\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Risk Avoidance**\n\nتوضیح:\nاین یعنی کنار کشیدن کامل از یک فعالیت؛ در این سؤال، شرکت همچنان فعالیت‌های عادی (که ریسک نشت داده دارد) را ادامه می‌دهد\n\n**Risk Acceptance**\n\nتوضیح:\nاین یعنی پذیرفتن ریسک **بدون هیچ اقدامی**؛ اما در این سؤال، شرکت یک اقدام مشخص (خرید بیمه) انجام داده تا بار مالی را منتقل کند، نه اینکه صرفاً آن را نادیده بگیرد\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی چهار استراتژی با مثال‌های متمایز):\n**Risk Mitigation** = کاهش ریسک با کنترل‌های فنی (مثل فایروال)\n**Risk Transference** = انتقال بار مالی به شخص ثالث (مثل بیمه)\n**Risk Avoidance** = کنار کشیدن کامل از فعالیت\n**Risk Acceptance** = پذیرفتن بدون اقدام (وقتی هزینه‌ی کنترل بیشتر از ریسک است)\n\n🎯 کلمه‌ی کلیدی که Risk Transference را همیشه مشخص می‌کند: **\"Insurance\"** یا **\"third party assumes financial responsibility\"**\n\nاین یکی از مفاهیمی است که باید بیشتر روش کار کنیم. به‌زودی دوباره با سناریوی متفاوت میارمش.",
  "domain": 5
 },
 {
  "number": 90,
  "en": "A company outsources its payment processing to a third-party vendor that specializes in PCI-DSS compliant payment systems, so that if a payment card breach occurs through that system, the vendor bears the contractual and financial liability rather than the company itself. Which of the following risk management strategies is being used?",
  "fa": "یک شرکت پردازش پرداخت خود را به یک تامین‌کننده‌ی شخص ثالث که در سیستم‌های پرداخت منطبق با PCI-DSS تخصص دارد، برون‌سپاری می‌کند، به‌طوری که اگر یک نشت کارت پرداخت از طریق آن سیستم رخ دهد، تامین‌کننده مسئولیت قراردادی و مالی را به‌جای خود شرکت بر عهده می‌گیرد. کدام استراتژی مدیریت ریسک استفاده شده؟",
  "options": [
   "A) Risk Mitigation",
   "B) Risk Transference",
   "C) Risk Avoidance",
   "D) Risk Acceptance"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Risk Transference**\n\nتوضیح:\nاین دقیقاً نمونه‌ی دیگری از انتقال مسئولیت **مالی و قراردادی** ریسک به یک شخص ثالث است\n\nنکته‌ی کلیدی این سؤال: عبارت **\"vendor bears the contractual and financial liability\"** دقیقاً نشان می‌دهد که اگر نشتی رخ دهد، **مسئولیت (و هزینه‌های ناشی از آن) به‌جای شرکت اصلی، به تامین‌کننده منتقل می‌شود**\n\nاین یک نوع دیگر از Risk Transference است (علاوه بر بیمه که در سؤال قبلی دیدیم): **برون‌سپاری (Outsourcing)** یک فعالیت پرریسک به یک متخصص ثالث که مسئولیت را بر عهده می‌گیرد\n\nنکته‌ی مهم برای یادآوری: Risk Transference همیشه فقط به معنای \"بیمه\" نیست؛ هر مکانیزمی که **بار مسئولیت/هزینه‌ی مالی** ریسک را به یک طرف دیگر منتقل کند (چه بیمه، چه برون‌سپاری با مسئولیت قراردادی مشخص) در این دسته قرار می‌گیرد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Risk Mitigation**\n\nتوضیح:\nاین یعنی کاهش **مستقیم** ریسک با کنترل‌های فنی توسط خود شرکت؛ در این سؤال، شرکت کاری برای کاهش ریسک نکرده، بلکه مسئولیت را به دیگری سپرده\n\n**Risk Avoidance**\n\nتوضیح:\nاین یعنی کنار کشیدن کامل از یک فعالیت؛ اما در این سؤال، شرکت همچنان پردازش پرداخت را انجام می‌دهد (فقط از طریق شخص دیگری)\n\n**Risk Acceptance**\n\nتوضیح:\nاین یعنی پذیرفتن ریسک توسط خود سازمان بدون اقدام؛ اما در این سؤال، مسئولیت صریحاً به یک طرف دیگر منتقل شده\n\nنکته‌ی کلیدی برای امتحان (تثبیت نهایی):\nهر زمان عبارت **\"third party bears liability/responsibility\"**، **\"insurance\"**، یا **\"outsourcing with contractual liability shift\"** را دیدی، جواب همیشه **Risk Transference** است",
  "domain": 5
 },
 {
  "number": 91,
  "en": "After identifying that employees are vulnerable to phishing attacks, a company implements mandatory security awareness training, deploys email filtering software, and enables multifactor authentication — reducing the likelihood and impact of a successful attack, though not eliminating the risk entirely. Which of the following risk management strategies is being used?",
  "fa": "پس از شناسایی این‌که کارمندان در برابر حملات فیشینگ آسیب‌پذیر هستند، یک شرکت آموزش اجباری آگاهی امنیتی پیاده‌سازی می‌کند، نرم‌افزار فیلترینگ ایمیل مستقر می‌کند، و احراز هویت چندعاملی را فعال می‌کند — که احتمال و تأثیر یک حمله‌ی موفق را کاهش می‌دهد، هرچند ریسک را به‌طور کامل حذف نمی‌کند. کدام استراتژی مدیریت ریسک استفاده شده؟",
  "options": [
   "A) Risk Transference",
   "B) Risk Avoidance",
   "C) Risk Mitigation",
   "D) Risk Acceptance"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Risk Mitigation**\n\nتوضیح:\nاین استراتژی دقیقاً به پیاده‌سازی **کنترل‌های فنی و عملیاتی مستقیم** اشاره دارد که هدفشان **کاهش احتمال یا شدت** یک ریسک است، نه حذف کامل آن یا انتقال به دیگری\n\nنکته‌ی کلیدی این سؤال: عبارت **\"reducing the likelihood and impact\"** + **\"though not eliminating the risk entirely\"** دقیقاً تعریف Risk Mitigation است\n\nدر این سناریو، شرکت سه کنترل مختلف پیاده‌سازی کرده (آموزش، فیلترینگ ایمیل، MFA) که همگی به‌طور **مستقیم توسط خود شرکت** اجرا می‌شوند تا ریسک فیشینگ را **کاهش** دهند، نه اینکه حذفش کنند یا مسئولیتش را به جای دیگری بسپارند\n\nمرور نهایی و کامل چهار استراتژی (که الان باید کاملاً مسلط شده باشی):\n\n**Risk Mitigation** = کاهش ریسک با کنترل‌های **فنی/عملیاتی مستقیم** توسط خود سازمان (مثل MFA، فیلترینگ، آموزش)\n\n**Risk Transference** = انتقال **بار مالی/مسئولیت** به شخص ثالث (مثل بیمه، برون‌سپاری)\n\n**Risk Avoidance** = **کنار کشیدن کامل** از فعالیتی که ریسک ایجاد می‌کند\n\n**Risk Acceptance** = پذیرفتن ریسک **بدون هیچ اقدامی** (وقتی هزینه‌ی کنترل بیشتر از ریسک است)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Risk Transference**\n\nتوضیح:\nاین نیاز به انتقال مسئولیت به یک شخص ثالث دارد (مثل بیمه)؛ در این سؤال، شرکت خودش مستقیماً کنترل‌ها را پیاده‌سازی می‌کند، نه انتقال به دیگری\n\n**Risk Avoidance**\n\nتوضیح:\nاین یعنی توقف کامل یک فعالیت؛ در این سؤال، شرکت همچنان از ایمیل استفاده می‌کند، فقط با کنترل‌های بیشتر\n\n**Risk Acceptance**\n\nتوضیح:\nاین یعنی عدم اقدام؛ اما در این سؤال، شرکت **سه اقدام مشخص** انجام داده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"implement controls to reduce likelihood/impact\"** را دیدی (بدون حذف کامل یا انتقال)، جواب همیشه **Risk Mitigation** است",
  "domain": 5
 },
 {
  "number": 92,
  "en": "A risk assessment team calculates that a specific server outage has a 20% chance of occurring each year, and if it occurs, it would cost the company $500,000 in lost revenue. Which of the following calculations represents the Annualized Loss Expectancy (ALE) for this risk?",
  "fa": "یک تیم ارزیابی ریسک محاسبه می‌کند که یک قطعی سرور خاص، ۲۰٪ احتمال وقوع در هر سال دارد، و اگر رخ دهد، ۵۰۰,۰۰۰ دلار هزینه‌ی از دست رفتن درآمد برای شرکت ایجاد می‌کند. کدام گزینه مقدار Annualized Loss Expectancy (ALE) برای این ریسک را نشان می‌دهد؟",
  "options": [
   "A) $۱۰۰,۰۰۰",
   "B) $۵۰۰,۰۰۰",
   "C) $۲۰,۰۰۰",
   "D) $۲,۵۰۰,۰۰۰"
  ],
  "correct": "A",
  "explanation": "این یک سؤال محاسباتی است که نیاز به یک فرمول ساده دارد، بگذار قدم‌به‌قدم یادت بدم.\n\n## فرمول ALE (Annualized Loss Expectancy)\n\nاین فرمول از ترکیب دو مقدار دیگر تشکیل می‌شود:\n\n**SLE (Single Loss Expectancy)** = هزینه‌ی از دست رفتن در **یک بار وقوع** ریسک\nدر این سؤال: **$500,000**\n\n**ARO (Annualized Rate of Occurrence)** = احتمال وقوع ریسک **در یک سال** (به‌صورت اعشاری، نه درصد)\nدر این سؤال: ۲۰٪ = **0.20**\n\n**فرمول نهایی:**\n$$ALE = SLE \\times ARO$$\n\n## محاسبه برای این سؤال:\n\n$$ALE = \\$500,000 \\times 0.20$$\n\nحالا خودت این ضرب رو انجام بده: $500,000 ضربدر 0.20 چند می‌شه؟\n\nبا این محاسبه، فکر می‌کنی کدوم گزینه (A تا D) جواب درسته؟",
  "domain": 5
 },
 {
  "number": 93,
  "en": "A company determines that if its e-commerce website goes down, it loses $50,000. Historical data shows this type of outage occurs once every 4 years. Which of the following BEST represents the ARO (Annualized Rate of Occurrence) for this risk?",
  "fa": "یک شرکت تشخیص می‌دهد که اگر وب‌سایت فروشگاهی‌اش از کار بیفتد، ۵۰,۰۰۰ دلار ضرر می‌کند. داده‌های تاریخی نشان می‌دهد این نوع قطعی هر ۴ سال یک‌بار رخ می‌دهد. کدام گزینه بهترین نمایش ARO (نرخ سالانه‌ی وقوع) برای این ریسک است؟",
  "options": [
   "A) 4",
   "B) 0.25",
   "C) $50,000",
   "D) $12,500"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) 0.25** هست، نه D. بگذار توضیح بدم چرا، چون این سؤال یک مفهوم متفاوت از سؤال قبلی رو می‌سنجه (نه محاسبه‌ی ALE، بلکه فقط محاسبه‌ی ARO).\n\n**ARO (Annualized Rate of Occurrence)**\n\nتوضیح:\nاین مقدار نشان می‌دهد یک ریسک **به‌طور میانگین چند بار در سال** اتفاق می‌افتد (به‌صورت یک عدد اعشاری، نه پول و نه درصد)\n\nنکته‌ی کلیدی محاسبه: اگر یک رویداد **هر ۴ سال یک‌بار** رخ می‌دهد، یعنی در **هر سال**، به‌طور میانگین:\n\n$$ARO = \\frac{1}{\\text{تعداد سال‌ها}} = \\frac{1}{4} = 0.25$$\n\nیعنی این ریسک به‌طور میانگین **۲۵٪ احتمال وقوع در هر سال** دارد (یا می‌توان گفت: یک‌چهارم یک بار در سال)\n\nچرا گزینه‌ی D ($12,500) اشتباه بود:\n\nاین عدد در واقع نتیجه‌ی محاسبه‌ی **ALE** است، نه ARO:\n$$ALE = SLE \\times ARO = \\$50,000 \\times 0.25 = \\$12,500$$\n\nاما سؤال **فقط ARO** را پرسیده بود، نه ALE کامل؛ این یک تله‌ی ریز بود که باید به **دقیقاً چه مقداری پرسیده شده** توجه کنی\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**A) 4**\n\nتوضیح:\nاین فقط تعداد سال‌هاست (مخرج کسر)، نه نتیجه‌ی محاسبه‌ی ARO؛ ARO باید معکوس این عدد باشد (۱ تقسیم بر ۴)\n\n**C) $50,000**\n\nتوضیح:\nاین مقدار **SLE** (هزینه‌ی یک‌بار وقوع) است، نه ARO\n\nنکته‌ی کلیدی برای امتحان (مرور کامل و نهایی فرمول‌های ریسک):\n$$ARO = \\frac{1}{\\text{تعداد سال بین وقوع‌ها}}$$\n$$ALE = SLE \\times ARO$$\n\nاین سؤال طراحی شده بود تا ببینیم آیا تفاوت بین **خودِ ARO** و **محاسبه‌ی کامل ALE** را تشخیص می‌دهی یا نه. به‌زودی یک سؤال دیگه روی این تفاوت کار می‌کنیم.",
  "domain": 5
 },
 {
  "number": 94,
  "en": "A company's SLE for a specific data breach scenario is $200,000, and historical industry data suggests this type of breach occurs twice every year on average. What is the ALE for this risk?",
  "fa": "SLE یک شرکت برای یک سناریوی خاص نشت داده ۲۰۰,۰۰۰ دلار است، و داده‌های تاریخی صنعت نشان می‌دهد این نوع نشت به‌طور میانگین **دو بار در سال** رخ می‌دهد. مقدار ALE برای این ریسک چقدر است؟",
  "options": [
   "A) $100,000",
   "B) $200,000",
   "C) $400,000",
   "D) 2.0"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) $400,000** هست، نه B. بگذار قدم‌به‌قدم محاسبه رو با هم انجام بدیم.\n\n**مرحله‌ی اول: تشخیص مقادیر**\n\n**SLE** = ۲۰۰,۰۰۰ دلار (داده شده مستقیم در سؤال)\n\n**ARO** = این بار، چون رویداد **دو بار در سال** رخ می‌دهد (نه یک بار هر چند سال)، محاسبه‌اش متفاوت است:\n\n$$ARO = 2 \\text{ (دو بار در هر سال)}$$\n\nنکته‌ی مهم: وقتی رویداد **بیشتر از یک‌بار در سال** رخ می‌دهد، ARO می‌تواند **بزرگ‌تر از ۱** باشد (نه فقط بین ۰ تا ۱)؛ این برخلاف سؤال قبلی بود که رویداد **کمتر از یک‌بار در سال** (هر ۴ سال) رخ می‌داد و ARO کوچک‌تر از ۱ (0.25) بود\n\n**مرحله‌ی دوم: محاسبه‌ی ALE**\n\n$$ALE = SLE \\times ARO$$\n$$ALE = \\$200,000 \\times 2 = \\$400,000$$\n\nچرا گزینه‌ی B ($200,000) اشتباه بود:\n\nاین فقط مقدار **SLE** است (هزینه‌ی یک‌بار وقوع)؛ سؤال فراموش کرد که ARO را هم در محاسبه ضرب کند\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**A) $100,000**\n\nتوضیح:\nاین از تقسیم اشتباه (۲۰۰,۰۰۰ ÷ ۲ به‌جای ضرب) به‌دست می‌آید\n\n**D) 2.0**\n\nتوضیح:\nاین فقط مقدار **ARO** است، نه نتیجه‌ی نهایی ALE\n\n🎯 نکته‌ی کلیدی نهایی برای امتحان (که این دو سؤال آخر باهم نشونت دادن):\nARO همیشه باید با دقت از متن سؤال استخراج شود:\nاگر گفته شد **\"once every X years\"** → $ARO = \\frac{1}{X}$ (کوچک‌تر از ۱)\nاگر گفته شد **\"X times per year\"** → $ARO = X$ (می‌تواند بزرگ‌تر از ۱ باشد)\n\nسپس همیشه: $ALE = SLE \\times ARO$\n\nاین یکی از محاسبات پرتکرار امتحانه. بیا یک سؤال دیگه روی این فرمول کار کنیم تا کاملاً مسلط بشی.",
  "domain": 5
 },
 {
  "number": 95,
  "en": "A risk assessment shows that a server hardware failure costs the company $80,000 each time it occurs (including replacement and downtime costs), and this type of failure happens on average once every 2 years. What is the ALE for this risk?",
  "fa": "یک ارزیابی ریسک نشان می‌دهد که خرابی سخت‌افزار سرور هر بار که رخ می‌دهد ۸۰,۰۰۰ دلار برای شرکت هزینه دارد (شامل هزینه‌ی تعویض و قطعی)، و این نوع خرابی به‌طور میانگین هر ۲ سال یک‌بار رخ می‌دهد. مقدار ALE برای این ریسک چقدر است؟",
  "options": [
   "A) $۱۶۰,۰۰۰",
   "B) $۸۰,۰۰۰",
   "C) $۴۰,۰۰۰",
   "D) $۲۰,۰۰۰"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) $40,000** هست، نه A. بگذار محاسبه‌ی دقیق رو با هم مرور کنیم تا ببینیم کجای محاسبه به مشکل خورد.\n\n**مرحله‌ی اول: تشخیص مقادیر**\n\n**SLE** = ۸۰,۰۰۰ دلار (هزینه‌ی هر بار وقوع)\n\n**ARO** = چون این خرابی **\"once every 2 years\"** (هر ۲ سال یک‌بار) رخ می‌دهد:\n\n$$ARO = \\frac{1}{2} = 0.5$$\n\nنکته‌ی کلیدی: این دقیقاً مثل سؤال ARO قبلی است (یادت میاد سرور هر ۴ سال یک‌بار؟)؛ وقتی عبارت **\"once every X years\"** می‌بینی، باید **۱ تقسیم بر X** کنی، نه خودِ X را به‌عنوان ARO در نظر بگیری\n\n**مرحله‌ی دوم: محاسبه‌ی ALE**\n\n$$ALE = SLE \\times ARO$$\n$$ALE = \\$80,000 \\times 0.5 = \\$40,000$$\n\nچرا گزینه‌ی A ($160,000) اشتباه بود:\n\nبه‌نظر می‌رسد به‌جای ضرب در **0.5**، در عدد **2** ضرب شده ($80,000 × 2 = $160,000)؛ این دقیقاً تله‌ای است که در سؤال ARO قبلی هم صحبت کردیم: وقتی می‌گوید **\"once every 2 years\"**، ARO باید **0.5** (یعنی ۱ تقسیم بر ۲) باشد، نه خودِ عدد ۲\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**B) $80,000**\nاین فقط SLE است، بدون ضرب در ARO\n\n**D) $20,000**\nاین از تقسیم اشتباه ۸۰,۰۰۰ بر ۴ به‌دست می‌آید، نه فرمول صحیح\n\n🎯 **قانون طلایی نهایی که باید همیشه به‌خاطر بسپاری:**\nعبارت **\"once every X years\"** = $ARO = \\frac{1}{X}$ (عدد کوچک‌تر از ۱)\nعبارت **\"X times per year\"** = $ARO = X$ (می‌تواند عدد بزرگ‌تر از ۱ باشد)\n\nاین یک تله‌ی بسیار رایج در امتحان واقعیه؛ خیلی‌ها عدد سال را مستقیماً به‌جای معکوسش در فرمول می‌گذارند. بیا یک‌بار دیگه با یک سؤال مشابه تمرین کنیم تا این تله رو دیگه هیچ‌وقت نیفتی توش.",
  "domain": 5
 },
 {
  "number": 96,
  "en": "A risk assessment team rates risks using subjective categories like \"High,\" \"Medium,\" and \"Low\" based on team discussions and experience, rather than using specific dollar amounts or percentages. Which of the following BEST describes this risk analysis approach?",
  "fa": "یک تیم ارزیابی ریسک، ریسک‌ها را با استفاده از دسته‌های ذهنی مثل \"بالا\"، \"متوسط\"، و \"پایین\" بر اساس بحث‌های تیمی و تجربه رتبه‌بندی می‌کند، نه با استفاده از مقادیر دلاری یا درصدهای مشخص. کدام گزینه بهترین توصیف این رویکرد تحلیل ریسک است؟",
  "options": [
   "A) Quantitative Risk Analysis",
   "B) Qualitative Risk Analysis",
   "C) Risk Register",
   "D) Risk Appetite"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Qualitative Risk Analysis**\n\nتوضیح:\nاین رویکرد ریسک‌ها را با استفاده از **دسته‌های ذهنی و توصیفی** (مثل High، Medium، Low) ارزیابی می‌کند، بر اساس **قضاوت، تجربه، و بحث تیمی**، نه اعداد دقیق مالی\n\nنکته‌ی کلیدی این سؤال: عبارت **\"subjective categories\"** و **\"rather than using specific dollar amounts\"** دقیقاً نشان‌دهنده‌ی این است که این روش بر **تخمین کیفی و توصیفی** تکیه دارد، نه محاسبات عددی دقیق (مثل ALE که قبلاً با هم کار کردیم)\n\nتفاوت کلیدی با Quantitative Risk Analysis:\n\n**Qualitative** = استفاده از **کلمات و دسته‌بندی‌های توصیفی** (High/Medium/Low)، سریع‌تر و ساده‌تر، اما کمتر دقیق\n\n**Quantitative** = استفاده از **اعداد و مقادیر مالی دقیق** (مثل SLE، ARO، ALE)، دقیق‌تر اما زمان‌بر‌تر و نیاز به داده‌ی بیشتر\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Quantitative Risk Analysis**\n\nتوضیح:\nاین دقیقاً برخلاف این سؤال است؛ Quantitative از اعداد دقیق دلاری استفاده می‌کند، نه دسته‌های ذهنی مثل High/Medium/Low\n\n**Risk Register**\n\nتوضیح:\nاین یک **سند یا پایگاه‌داده** است که تمام ریسک‌های شناسایی‌شده را (همراه با جزئیاتشان) فهرست می‌کند؛ خودش یک **روش تحلیل** نیست، بلکه محل ثبت نتایج تحلیل است\n\n**Risk Appetite**\n\nتوضیح:\nاین به میزان **ریسکی که یک سازمان حاضر است بپذیرد** اشاره دارد (مثلاً یک سازمان محافظه‌کار یا ریسک‌پذیر)، نه به روش خاص تحلیل ریسک\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"High/Medium/Low\"** یا **\"subjective/descriptive categories\"** را دیدی، جواب همیشه **Qualitative Risk Analysis** است\nهر زمان عبارت **\"specific dollar amounts\"** یا **\"SLE/ARO/ALE calculations\"** را دیدی، جواب **Quantitative Risk Analysis** است",
  "domain": 5
 },
 {
  "number": 97,
  "en": "A company maintains a centralized document that lists every identified risk, along with its likelihood, impact, assigned owner, and current mitigation status, to track risk management activities across the organization over time. Which of the following BEST describes this document?",
  "fa": "یک شرکت یک سند متمرکز نگه می‌دارد که هر ریسک شناسایی‌شده، به‌همراه احتمال وقوع، تأثیر، مالک مسئول، و وضعیت فعلی کاهش آن را فهرست می‌کند، تا فعالیت‌های مدیریت ریسک را در سراسر سازمان در طول زمان پیگیری کند. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) SLA",
   "B) Risk Register",
   "C) BIA (Business Impact Analysis)",
   "D) Risk Matrix"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Risk Register**\n\nتوضیح:\nاین یک **سند یا پایگاه‌داده‌ی متمرکز** است که به‌عنوان مرجع اصلی برای **پیگیری و مدیریت تمام ریسک‌های شناسایی‌شده** در سازمان عمل می‌کند\n\nاین سند معمولاً شامل اطلاعاتی مثل:\nتوضیح خود ریسک\nاحتمال وقوع (Likelihood)\nتأثیر (Impact)\nمالک/مسئول ریسک (Risk Owner)\nوضعیت فعلی اقدامات کاهشی (Mitigation Status)\n\nاین سند به سازمان اجازه می‌دهد یک **دید کلی و قابل‌پیگیری** از همه‌ی ریسک‌ها داشته باشد و در طول زمان وضعیت هرکدام را به‌روزرسانی کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SLA**\n\nتوضیح:\nاین یک توافق‌نامه‌ی سطح خدمات بین سازمان و تامین‌کننده است، نه یک سند داخلی برای پیگیری ریسک‌ها\n\n**BIA (Business Impact Analysis)**\n\nتوضیح:\nاین یک تحلیل است که **تأثیر اختلال در عملیات حیاتی کسب‌وکار** را ارزیابی می‌کند (مثلاً برای برنامه‌ریزی Disaster Recovery)؛ تمرکزش روی تحلیل تأثیر یک رویداد خاص است، نه یک سند جامع برای فهرست **همه‌ی** ریسک‌ها در طول زمان\n\n**Risk Matrix**\n\nتوضیح:\nاین یک **ابزار بصری** (معمولاً یک جدول یا نمودار) است که ریسک‌ها را بر اساس احتمال و تأثیر در یک نمودار نمایش می‌دهد؛ می‌تواند بخشی از Risk Register باشد، اما خودش یک سند کامل و جامع با تمام جزئیات (مالک، وضعیت) نیست\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"centralized document\"** + **\"lists all risks\"** + **\"track over time\"** را با هم دیدی، جواب همیشه **Risk Register** است",
  "domain": 5
 },
 {
  "number": 98,
  "en": "A company conducts an analysis to determine which business functions are most critical to its survival and what the financial and operational impact would be if each function were disrupted for varying lengths of time. This analysis directly informs the organization's RTO and RPO targets. Which of the following BEST describes this analysis?",
  "fa": "یک شرکت تحلیلی انجام می‌دهد تا مشخص کند کدام عملکردهای کسب‌وکار برای بقای آن حیاتی‌ترین هستند و تأثیر مالی و عملیاتی اختلال در هر عملکرد برای مدت‌زمان‌های مختلف چقدر خواهد بود. این تحلیل مستقیماً اهداف RTO و RPO سازمان را تعیین می‌کند. کدام گزینه بهترین توصیف این تحلیل است؟",
  "options": [
   "A) Risk Register",
   "B) Qualitative Risk Analysis",
   "C) BIA (Business Impact Analysis)",
   "D) Risk Matrix"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**BIA (Business Impact Analysis)**\n\nتوضیح:\nاین تحلیل به‌طور خاص برای شناسایی **عملکردهای حیاتی کسب‌وکار** (Critical Business Functions) و ارزیابی **تأثیر اختلال** در هر کدام طراحی شده\n\nنکته‌ی کلیدی این سؤال: عبارت **\"directly informs the organization's RTO and RPO targets\"** دقیقاً نشان می‌دهد که BIA یک **پیش‌نیاز اساسی** برای تعیین این دو هدف است که قبلاً با هم کار کردیم:\n\nBIA مشخص می‌کند: \"این عملکرد چقدر حیاتی است و اگر X ساعت/روز قطع شود، چقدر ضرر می‌کنیم؟\"\nاین تحلیل به سازمان کمک می‌کند تا **RTO** (چقدر سریع باید بازگردد) و **RPO** (چقدر داده می‌تواند از دست برود) را برای هر سیستم به‌درستی تعیین کند\n\nرابطه‌ی این مفاهیم با هم (که الان باید کاملاً واضح باشه):\n**BIA** = تحلیل اولیه برای فهم اهمیت و تأثیر (پایه و اساس)\n**RTO/RPO** = اهداف مشخصی که از نتایج BIA به‌دست می‌آیند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Risk Register**\n\nتوضیح:\nاین یک سند برای **فهرست‌کردن و پیگیری همه‌ی ریسک‌ها** است، نه تحلیل خاص تأثیر کسب‌وکار برای تعیین RTO/RPO\n\n**Qualitative Risk Analysis**\n\nتوضیح:\nاین یک **روش کلی** برای ارزیابی ریسک با دسته‌بندی‌های ذهنی (High/Medium/Low) است، نه یک تحلیل خاص و عمیق روی عملکردهای حیاتی کسب‌وکار\n\n**Risk Matrix**\n\nتوضیح:\nاین یک ابزار بصری برای نمایش احتمال/تأثیر ریسک‌هاست، نه تحلیل عمیق تأثیر کسب‌وکار برای تعیین اهداف بازیابی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"critical business functions\"** + **\"informs RTO/RPO\"** را با هم دیدی، جواب همیشه **BIA** است",
  "domain": 5
 },
 {
  "number": 99,
  "en": "During a Business Impact Analysis, a team identifies that if the customer database becomes unavailable, the company would lose $10,000 per hour in revenue, and after 8 hours, the company would face regulatory penalties as well. Which of the following concepts does this $10,000 per hour figure represent?",
  "fa": "در حین یک Business Impact Analysis، یک تیم تشخیص می‌دهد که اگر پایگاه‌داده‌ی مشتریان غیرقابل‌دسترس شود، شرکت ۱۰,۰۰۰ دلار در ساعت درآمد از دست می‌دهد، و بعد از ۸ ساعت، شرکت با جریمه‌های قانونی هم مواجه می‌شود. این رقم ۱۰,۰۰۰ دلار در ساعت چه مفهومی را نشان می‌دهد؟",
  "options": [
   "A) RTO",
   "B) RPO",
   "C) MTD (Maximum Tolerable Downtime)",
   "D) Impact/Cost of Downtime"
  ],
  "correct": "D",
  "explanation": "این سؤال یکی از مفاهیم BIA است که هنوز با هم به‌طور خاص کار نکرده بودیم، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این عبارت دقت کن: **\"$10,000 per hour in revenue\"**. این یک مقدار **پول** است که نشان می‌دهد هر ساعت قطعی **چقدر هزینه** برای شرکت دارد. این یک عدد **مالی مستقیم**، نه یک معیار زمانی (مثل RTO که \"چند ساعت طول می‌کشد\" را نشان می‌دهد)\n\nسرنخ ۲:\nگزینه‌های A و B (RTO و RPO) هر دو معیارهای **زمانی** هستند (چند ساعت، چقدر داده)، نه مقادیر **مالی**. گزینه‌ی C (MTD) هم یک معیار **زمانی** است (حداکثر زمان قابل‌تحمل قطعی، نزدیک به مفهوم RTO). اما این سؤال مشخصاً یک **رقم دلاری در ساعت** را توصیف می‌کند، که نشان‌دهنده‌ی **هزینه‌ی واقعی هر ساعت قطعی** برای کسب‌وکار است؛ این دقیقاً یکی از خروجی‌های کلیدی یک BIA است که نشان می‌دهد \"هر ساعت قطعی چقدر برای ما گران تمام می‌شود؟\"\n\nبا این دو سرنخ (مقدار پولی + هزینه‌ی هر واحد زمان قطعی)، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 5
 },
 {
  "number": 100,
  "en": "During the same Business Impact Analysis, the team also determines that the company's customer database absolutely cannot remain unavailable for longer than 8 hours, because beyond that point, the company would face irreversible regulatory penalties and permanent loss of major clients, regardless of cost. Which of the following BEST describes this 8-hour figure?",
  "fa": "در همان Business Impact Analysis، تیم همچنین تشخیص می‌دهد که پایگاه‌داده‌ی مشتریان شرکت مطلقاً نمی‌تواند بیش از ۸ ساعت غیرقابل‌دسترس باقی بماند، چون بعد از آن نقطه، شرکت با جریمه‌های قانونی غیرقابل‌برگشت و از دست رفتن دائمی مشتریان اصلی مواجه می‌شود، صرف‌نظر از هزینه. کدام گزینه بهترین توصیف این رقم ۸ ساعته است؟",
  "options": [
   "A) RPO",
   "B) Cost of Downtime",
   "C) MTD (Maximum Tolerable Downtime)",
   "D) ARO"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**MTD (Maximum Tolerable Downtime)**\n\nتوضیح:\nاین مفهوم به **حداکثر زمانی** اشاره دارد که یک کسب‌وکار می‌تواند **بدون آسیب غیرقابل‌برگشت** بدون یک عملکرد حیاتی دوام بیاورد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"absolutely cannot remain unavailable for longer than\"** + **\"irreversible...regardless of cost\"** دقیقاً نشان می‌دهد که این یک **مرز قطعی و نهایی** است، نه یک هدف ایده‌آل قابل‌مذاکره\n\nتفاوت ظریف و مهم MTD با RTO (که باید کاملاً روشن باشه):\n\n**RTO** = **هدف ایده‌آل** که سازمان برای آن **برنامه‌ریزی می‌کند** (مثلاً \"می‌خواهیم ظرف ۴ ساعت برگردیم\")؛ این یک هدف عملیاتی و قابل‌تنظیم بر اساس بودجه است\n\n**MTD** = **مرز مطلق و نهایی** که اگر از آن عبور شود، آسیب **غیرقابل‌برگشت** (Catastrophic) به کسب‌وکار وارد می‌شود؛ این یک محدودیت سخت‌گیرانه‌تر است\n\nرابطه‌ی منطقی این دو: **RTO همیشه باید کوچک‌تر یا مساوی MTD باشد**؛ یعنی سازمان باید قبل از رسیدن به نقطه‌ی فاجعه‌بار (MTD)، سیستم را بازیابی کرده باشد (RTO)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**RPO**\n\nتوضیح:\nاین به میزان داده‌ی **قابل‌قبول از دست رفتن** اشاره دارد، نه به زمان کلی قابل‌تحمل قطعی کسب‌وکار\n\n**Cost of Downtime**\n\nتوضیح:\nاین یک رقم **دلاری** (مثل $10,000 در ساعت) است، نه یک معیار **زمانی نهایی و مطلق**\n\n**ARO**\n\nتوضیح:\nاین به نرخ سالانه‌ی وقوع یک ریسک اشاره دارد، کاملاً بی‌ربط به این سناریو\n\nنکته‌ی کلیدی برای امتحان (مرور نهایی این مفاهیم BIA):\n**RTO** = هدف برنامه‌ریزی‌شده برای بازیابی (قابل‌انعطاف‌تر)\n**MTD** = مرز مطلق قبل از فاجعه (سخت‌گیرانه‌تر، نباید از آن عبور کرد)",
  "domain": 5
 },
 {
  "number": 101,
  "en": "A penetration tester runs a port scanning tool directly against a target company's web server to identify open ports and running services, which generates traffic that could potentially be detected by the company's security systems. Which of the following BEST describes this technique?",
  "fa": "یک تستر نفوذ یک ابزار اسکن پورت را مستقیماً علیه وب‌سرور یک شرکت هدف اجرا می‌کند تا پورت‌های باز و سرویس‌های در حال اجرا را شناسایی کند، که این کار ترافیکی ایجاد می‌کند که می‌تواند به‌طور بالقوه توسط سیستم‌های امنیتی شرکت شناسایی شود. کدام گزینه بهترین توصیف این تکنیک است؟",
  "options": [
   "A) Passive Reconnaissance",
   "B) Active Reconnaissance",
   "C) OSINT",
   "D) Footprinting"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Active Reconnaissance**\n\nتوضیح:\nاین تکنیک نیاز به **تعامل مستقیم** با سیستم‌های هدف دارد (در این مورد: اجرای Port Scanning مستقیماً روی وب‌سرور)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"runs...directly against a target\"** + **\"generates traffic that could potentially be detected\"** دقیقاً نشان‌دهنده‌ی تفاوت اصلی با Passive Reconnaissance است\n\nچون این فعالیت **مستقیماً با سیستم هدف تعامل** دارد (ارسال درخواست‌ها برای بررسی پورت‌ها)، یک **ردپای قابل‌شناسایی** (مثل ترافیک غیرعادی در لاگ‌های فایروال یا IDS) ایجاد می‌کند؛ این دقیقاً برخلاف Passive Reconnaissance است که هیچ تعاملی با هدف ندارد و عملاً غیرقابل‌شناسایی است\n\nمقایسه‌ی نهایی و قطعی این دو مفهوم (که الان باید کاملاً مسلط باشی):\n\n**Passive Reconnaissance** = فقط مشاهده از منابع علنی (LinkedIn، وب‌سایت)، **بدون تعامل**، غیرقابل‌شناسایی\n\n**Active Reconnaissance** = تعامل **مستقیم** با سیستم هدف (Port Scanning، Ping)، **قابل‌شناسایی** چون ترافیک واقعی ایجاد می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Passive Reconnaissance**\n\nتوضیح:\nاین کاملاً برخلاف این سؤال است؛ این سؤال صراحتاً تعامل مستقیم و ایجاد ترافیک قابل‌شناسایی را توصیف می‌کند\n\n**OSINT (Open Source Intelligence)**\n\nتوضیح:\nاین به جمع‌آوری اطلاعات از منابع **عمومی و علنی** اشاره دارد (مشابه Passive Reconnaissance)، نه اسکن مستقیم یک سرور\n\n**Footprinting**\n\nتوضیح:\nاین یک اصطلاح **کلی‌تر** برای فرآیند جمع‌آوری اطلاعات درباره‌ی یک هدف است (می‌تواند هم Passive و هم Active باشد)؛ اما این سؤال به‌طور خاص ویژگی **تعامل مستقیم و قابل‌شناسایی** را توصیف می‌کند که دقیقاً Active Reconnaissance است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"directly scans/interacts with target systems\"** + **\"generates detectable traffic\"** را با هم دیدی، جواب همیشه **Active Reconnaissance** است",
  "domain": 3
 },
 {
  "number": 102,
  "en": "A security team conducts a structured penetration testing engagement using a methodology that includes five phases: reconnaissance, scanning, gaining access, maintaining access, and covering tracks. This methodology closely mirrors which of the following?",
  "fa": "یک تیم امنیتی یک تست نفوذ ساختاریافته را با استفاده از متدولوژی‌ای که شامل پنج فاز است انجام می‌دهد: شناسایی، اسکن، کسب دسترسی، حفظ دسترسی، و پاک کردن ردپا. این متدولوژی شباهت زیادی به کدام مورد دارد؟",
  "options": [
   "A) فرآیند واکنش به حادثه",
   "B) Cyber Kill Chain / چرخه‌ی حمله‌ی معمول",
   "C) چارچوب مدیریت ریسک",
   "D) فرآیند مدیریت تغییر"
  ],
  "correct": "B",
  "explanation": "این سؤال یک مفهوم نسبتاً جدید برای ماست، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این پنج فاز دقت کن: **شناسایی → اسکن → کسب دسترسی → حفظ دسترسی → پاک کردن ردپا**. این دقیقاً همان مراحلی است که یک **مهاجم واقعی** هم در یک حمله‌ی واقعی دنبال می‌کند، نه فقط یک تستر نفوذ. این یعنی این متدولوژی، **چرخه‌ی کامل یک حمله‌ی سایبری از ابتدا تا انتها** را شبیه‌سازی می‌کند.\n\nسرنخ ۲:\nگزینه‌های A، C، و D (واکنش به حادثه، مدیریت ریسک، مدیریت تغییر) همگی فرآیندهای **سازمانی و دفاعی** هستند که در محیط امن و کنترل‌شده انجام می‌شوند، نه فرآیندی که مراحل **حمله** را دنبال کند. اما گزینه‌ی B دقیقاً به یک **مدل معروف در امنیت سایبری** اشاره دارد که مراحل یک حمله‌ی سایبری (از شناسایی هدف تا رسیدن به هدف نهایی) را گام‌به‌گام توصیف می‌کند؛ نامش هم به یک زنجیره (Chain) اشاره دارد، چون اگر یک حلقه از این زنجیره قطع شود، کل حمله متوقف می‌شود.\n\nبا این دو سرنخ (پنج مرحله‌ی شبیه به حمله‌ی واقعی + نام مرتبط با \"زنجیره\")، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 4
 },
 {
  "number": 103,
  "en": "After detecting a security incident, an organization's first priority is to limit the spread of the attack and prevent further damage, such as isolating an infected computer from the network, before attempting to remove the threat entirely. Which phase of the incident response process does this represent?",
  "fa": "پس از شناسایی یک حادثه‌ی امنیتی، اولویت اول یک سازمان محدود کردن گسترش حمله و جلوگیری از آسیب بیشتر است، مثل ایزوله کردن یک کامپیوتر آلوده از شبکه، قبل از تلاش برای حذف کامل تهدید. این مرحله از فرآیند واکنش به حادثه را نشان می‌دهد؟",
  "options": [
   "A) Eradication",
   "B) Containment",
   "C) Recovery",
   "D) Identification"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Containment**\n\nتوضیح:\nاین مرحله دقیقاً به **محدود کردن گسترش** یک حادثه و **جلوگیری از آسیب بیشتر** اشاره دارد، **قبل از** تلاش برای حذف کامل تهدید\n\nنکته‌ی کلیدی این سؤال: عبارت **\"isolating an infected computer from the network\"** + **\"before attempting to remove the threat entirely\"** دقیقاً نشان می‌دهد که هدف این مرحله، **متوقف کردن سرایت** است، نه پاک‌سازی نهایی (که آن مرحله‌ی بعدی، Eradication، خواهد بود)\n\nمرور کامل فرآیند واکنش به حادثه (Incident Response Process) — شش مرحله‌ی استاندارد که باید کاملاً حفظ باشد:\n\n**۱. Preparation (آماده‌سازی)** = ایجاد برنامه، ابزار، و آموزش **قبل از** وقوع هر حادثه\n\n**۲. Identification (شناسایی)** = تشخیص اینکه یک حادثه‌ی واقعی رخ داده\n\n**۳. Containment (مهار)** = محدود کردن گسترش آسیب (مثل ایزوله کردن سیستم آلوده)\n\n**۴. Eradication (ریشه‌کنی)** = حذف کامل تهدید/بدافزار از سیستم\n\n**۵. Recovery (بازیابی)** = بازگرداندن سیستم‌ها به حالت عادی و عملیاتی\n\n**۶. Lessons Learned (درس‌های آموخته‌شده)** = بررسی پس از حادثه برای بهبود فرآیندها در آینده\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Eradication**\n\nتوضیح:\nاین مرحله‌ی **بعدی** است که در آن تهدید به‌طور کامل **حذف** می‌شود؛ اما این سؤال صراحتاً می‌گوید \"قبل از تلاش برای حذف کامل تهدید\"، یعنی هنوز به این مرحله نرسیده‌ایم\n\n**Recovery**\n\nتوضیح:\nاین مرحله‌ی بازگرداندن سیستم به حالت عادی **پس از** پاک‌سازی است، نه مهار اولیه‌ی گسترش\n\n**Identification**\n\nتوضیح:\nاین مرحله‌ی **قبلی** است (تشخیص اینکه حادثه‌ای رخ داده)؛ در این سؤال، حادثه از قبل **شناسایی شده** و الان در مرحله‌ی محدودسازی هستیم\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"isolate/limit spread BEFORE removing the threat\"** را دیدی، جواب همیشه **Containment** است",
  "domain": 4
 },
 {
  "number": 104,
  "en": "After isolating an infected server, the security team completely removes the malware from the system, deletes any malicious files, and closes the vulnerability that allowed the initial infection. Which phase of the incident response process does this represent?",
  "fa": "پس از ایزوله کردن یک سرور آلوده، تیم امنیتی بدافزار را به‌طور کامل از سیستم حذف می‌کند، هر فایل مخربی را پاک می‌کند، و آسیب‌پذیری‌ای که باعث آلودگی اولیه شده بود را می‌بندد. کدام مرحله از فرآیند واکنش به حادثه را نشان می‌دهد؟",
  "options": [
   "A) Containment",
   "B) Eradication",
   "C) Recovery",
   "D) Preparation"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Eradication**\n\nتوضیح:\nاین مرحله دقیقاً به **حذف کامل** تهدید از سیستم اشاره دارد، شامل:\nحذف بدافزار و فایل‌های مخرب\nبستن آسیب‌پذیری که باعث ورود اولیه شده بود (تا حمله‌ی مشابه دوباره تکرار نشود)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"After isolating\"** (یعنی Containment قبلاً انجام شده) + **\"completely removes the malware\"** + **\"closes the vulnerability\"** دقیقاً نشان می‌دهد که این مرحله **پس از مهار** و **قبل از بازگرداندن سیستم به کار عادی** (Recovery) قرار دارد\n\nتوالی منطقی این سه مرحله (که الان باید کاملاً واضح باشه):\n\n**Containment** → اول ایزوله می‌کنیم تا گسترش نیابد\n**Eradication** → سپس تهدید را کاملاً ریشه‌کن می‌کنیم\n**Recovery** → در نهایت سیستم را به کار عادی برمی‌گردانیم\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Containment**\n\nتوضیح:\nاین مرحله‌ی **قبلی** بود (ایزوله کردن سرور)؛ در این سؤال صراحتاً گفته شده \"After isolating\"، یعنی این مرحله از قبل تکمیل شده\n\n**Recovery**\n\nتوضیح:\nاین مرحله‌ی **بعدی** خواهد بود (بازگرداندن سیستم به کار عادی)؛ اما در این سؤال هنوز صحبت از بازگشت به کار عادی نشده، فقط حذف تهدید مطرح است\n\n**Preparation**\n\nتوضیح:\nاین مرحله‌ی **اولیه** (قبل از وقوع هر حادثه) است، کاملاً بی‌ربط به یک سرور که از قبل آلوده و ایزوله شده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"completely remove malware\"** + **\"close the vulnerability\"** را با هم دیدی، جواب همیشه **Eradication** است",
  "domain": 4
 },
 {
  "number": 105,
  "en": "After confirming that all malware has been removed and the vulnerability has been patched, the security team restores the server from a clean backup, brings it back online, and closely monitors it for any signs of reinfection before declaring the incident fully resolved. Which phase of the incident response process does this represent?",
  "fa": "پس از تأیید این‌که تمام بدافزار حذف شده و آسیب‌پذیری وصله شده است، تیم امنیتی سرور را از یک بکاپ سالم بازیابی می‌کند، آن را دوباره آنلاین می‌کند، و آن را از نزدیک برای هرگونه نشانه‌ی آلودگی مجدد پایش می‌کند قبل از اینکه حادثه را کاملاً حل‌شده اعلام کند. کدام مرحله از فرآیند واکنش به حادثه را نشان می‌دهد؟",
  "options": [
   "A) Eradication",
   "B) Containment",
   "C) Recovery",
   "D) Lessons Learned"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Recovery**\n\nتوضیح:\nاین مرحله دقیقاً به **بازگرداندن سیستم به حالت عملیاتی عادی** پس از حذف کامل تهدید اشاره دارد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"After confirming...removed and...patched\"** (یعنی Eradication قبلاً کامل شده) + **\"restores...brings it back online\"** + **\"closely monitors...for any signs of reinfection\"** دقیقاً نشان‌دهنده‌ی این مرحله است\n\nنکته‌ی مهم: Recovery فقط به معنای \"روشن کردن دوباره‌ی سیستم\" نیست؛ بلکه شامل **پایش دقیق** برای اطمینان از عدم بازگشت تهدید هم می‌شود، قبل از اینکه به‌طور رسمی حادثه \"بسته\" شود\n\n🎯 **مرور کامل و نهایی توالی شش‌مرحله‌ای IR (که الان باید کاملاً مسلط شده باشی):**\n\n**Preparation** (قبل از حادثه) → **Identification** (تشخیص وقوع) → **Containment** (مهار/ایزوله) → **Eradication** (حذف کامل) → **Recovery** (بازگشت به کار + پایش) → **Lessons Learned** (بررسی پس از حادثه)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Eradication**\n\nتوضیح:\nاین مرحله‌ی **قبلی** بود (حذف بدافزار)؛ این سؤال صراحتاً می‌گوید \"After confirming...removed\"، یعنی Eradication از قبل تکمیل شده\n\n**Containment**\n\nتوضیح:\nاین مرحله‌ی **اول** بود (ایزوله کردن)؛ این سؤال درباره‌ی بازگرداندن سیستم به کار صحبت می‌کند، نه ایزوله‌سازی اولیه\n\n**Lessons Learned**\n\nتوضیح:\nاین مرحله‌ی **نهایی و بعدی** است که در آن تیم بررسی می‌کند چه چیزی را می‌توان در آینده بهتر انجام داد؛ این سؤال هنوز در مرحله‌ی بازگرداندن سیستم است، نه تحلیل پس از حادثه\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"restore from backup\"** + **\"bring back online\"** + **\"monitor for reinfection\"** را با هم دیدی، جواب همیشه **Recovery** است",
  "domain": 4
 },
 {
  "number": 106,
  "en": "After fully resolving a security incident, the team holds a meeting to document what happened, evaluate how effectively the team responded, and identify specific improvements to prevent similar incidents in the future. Which phase of the incident response process does this represent?",
  "fa": "پس از حل کامل یک حادثه‌ی امنیتی، تیم جلسه‌ای برگزار می‌کند تا آنچه اتفاق افتاده را مستند کند، اثربخشی واکنش تیم را ارزیابی کند، و بهبودهای خاصی را برای پیشگیری از حوادث مشابه در آینده شناسایی کند. کدام مرحله از فرآیند واکنش به حادثه را نشان می‌دهد؟",
  "options": [
   "A) Recovery",
   "B) Eradication",
   "C) Lessons Learned",
   "D) Containment"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Lessons Learned**\n\nتوضیح:\nاین مرحله‌ی **نهایی** فرآیند واکنش به حادثه است که **پس از حل کامل** حادثه انجام می‌شود\n\nنکته‌ی کلیدی این سؤال: عبارت **\"After fully resolving\"** + **\"document what happened\"** + **\"evaluate...how effectively the team responded\"** + **\"identify...improvements to prevent similar incidents\"** دقیقاً تعریف این مرحله است\n\nهدف اصلی این مرحله، **یادگیری از تجربه** برای بهبود فرآیندهای آینده است؛ این می‌تواند شامل موارد زیر باشد:\nبه‌روزرسانی برنامه‌ی واکنش به حادثه (IR Plan)\nشناسایی نقاط ضعف در فرآیند تشخیص یا مهار\nارائه‌ی آموزش‌های جدید به کارمندان\nگاهی این مرحله نتیجه‌اش به‌صورت یک سند رسمی به نام **After-Action Report (AAR)** یا **Post-Incident Review** ثبت می‌شود\n\n🎉 تبریک! این بار با درک کامل توالی، هر شش مرحله‌ی فرآیند واکنش به حادثه را به‌ترتیب و با مثال‌های متمایز یاد گرفتی:\n\n**Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned**\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Recovery**\n\nتوضیح:\nاین به بازگرداندن سیستم به کار عادی اشاره دارد، نه به جلسه‌ی بررسی و تحلیل پس از حل کامل حادثه\n\n**Eradication**\n\nتوضیح:\nاین به حذف کامل تهدید اشاره دارد، نه به ارزیابی فرآیند پاسخ بعد از پایان حادثه\n\n**Containment**\n\nتوضیح:\nاین مرحله‌ی اولیه‌ی مهار گسترش آسیب است، کاملاً متفاوت از تحلیل نهایی پس از حادثه\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"after the incident is resolved\"** + **\"document/evaluate/improve for the future\"** را با هم دیدی، جواب همیشه **Lessons Learned** است",
  "domain": 4
 },
 {
  "number": 107,
  "en": "Before any security incident occurs, an organization develops a formal incident response plan, establishes a dedicated response team with defined roles, and conducts regular training exercises so that everyone knows exactly what to do when a real incident happens. Which phase of the incident response process does this represent?",
  "fa": "قبل از وقوع هر حادثه‌ی امنیتی، یک سازمان یک برنامه‌ی رسمی واکنش به حادثه تدوین می‌کند، یک تیم واکنش اختصاصی با نقش‌های مشخص ایجاد می‌کند، و تمرین‌های آموزشی منظم برگزار می‌کند تا همه دقیقاً بدانند هنگام وقوع یک حادثه‌ی واقعی چه‌کاری باید انجام دهند. کدام مرحله از فرآیند واکنش به حادثه را نشان می‌دهد؟",
  "options": [
   "A) Identification",
   "B) Preparation",
   "C) Containment",
   "D) Lessons Learned"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Preparation**\n\nتوضیح:\nاین مرحله **اولین و پایه‌ای‌ترین** مرحله از کل فرآیند واکنش به حادثه است، که **قبل از وقوع هر حادثه‌ای** انجام می‌شود\n\nنکته‌ی کلیدی این سؤال: عبارت **\"Before any security incident occurs\"** + **\"develops a formal...plan\"** + **\"establishes a...team\"** + **\"conducts regular training exercises\"** دقیقاً نشان‌دهنده‌ی فعالیت‌های **پیشگیرانه و آماده‌سازی** است که شامل موارد زیر می‌شود:\n\nتدوین **IR Plan** (برنامه‌ی رسمی واکنش به حادثه)\nتشکیل **CSIRT** (Computer Security Incident Response Team) با نقش‌های مشخص\nبرگزاری **Tabletop Exercises** (که قبلاً با هم کار کردیم!) برای آماده‌سازی تیم\n\n🎯 **مرور کامل و نهایی، با تمام شش مرحله به‌ترتیب کامل (که الان قطعی یاد گرفتی):**\n\n| ترتیب | مرحله | کلمات کلیدی |\n|---|---|---|\n| ۱ | **Preparation** | \"before any incident\", \"plan\", \"training\" |\n| ۲ | **Identification** | \"detect/confirm an incident occurred\" |\n| ۳ | **Containment** | \"isolate\", \"limit spread\", \"before removing\" |\n| ۴ | **Eradication** | \"completely remove\", \"close vulnerability\" |\n| ۵ | **Recovery** | \"restore\", \"back online\", \"monitor for reinfection\" |\n| ۶ | **Lessons Learned** | \"after resolved\", \"document/evaluate/improve\" |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Identification**\n\nتوضیح:\nاین به تشخیص وقوع یک حادثه‌ی واقعی اشاره دارد؛ این سؤال درباره‌ی فعالیت‌های **قبل از وقوع هر حادثه‌ای** است\n\n**Containment**\n\nتوضیح:\nاین به مهار یک حادثه‌ی **در حال وقوع** اشاره دارد، نه آماده‌سازی پیشاپیش\n\n**Lessons Learned**\n\nتوضیح:\nاین مرحله‌ی **پایانی پس از** یک حادثه‌ی واقعی است، نه آماده‌سازی **قبل از** وقوع\n\n🎉 رسیدیم به **سؤال شماره ۱۵۰ از ۳۰۰** — دقیقاً **نیمه‌ی راه**! تبریک امیر، عملکردت در فرآیند واکنش به حادثه و کل دامنه‌های امنیت عملیاتی بسیار قوی بوده.",
  "domain": 4
 },
 {
  "number": 108,
  "en": "A company wants to ensure that log data from all its servers is automatically copied to a separate, centralized logging server in real time, so that even if an attacker deletes logs on a compromised system, the original records remain intact elsewhere. Which of the following BEST describes this practice?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که داده‌های لاگ از تمام سرورهایش به‌طور خودکار و در زمان واقعی به یک سرور لاگ‌گیری متمرکز و جداگانه کپی می‌شود، به‌طوری که حتی اگر مهاجم لاگ‌ها را روی یک سیستم آسیب‌دیده حذف کند، رکوردهای اصلی در جای دیگری دست‌نخورده باقی بمانند. کدام گزینه بهترین توصیف این رویه است؟",
  "options": [
   "A) Log Rotation",
   "B) Log Aggregation",
   "C) SIEM",
   "D) Log Retention"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Log Aggregation**\n\nتوضیح:\nاین رویه به‌طور خاص به **جمع‌آوری و تجمیع متمرکز** لاگ‌ها از منابع مختلف (سرورها) در یک مکان واحد اشاره دارد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"automatically copied...in real time\"** + **\"original records remain intact elsewhere\"** دقیقاً نشان‌دهنده‌ی هدف اصلی Log Aggregation است: **محافظت از یکپارچگی لاگ‌ها** با نگه‌داری یک نسخه‌ی جداگانه که مهاجم (حتی با کنترل کامل سیستم آسیب‌دیده) نمی‌تواند به آن دسترسی داشته باشد یا آن را حذف کند\n\nاین یک تکنیک کلیدی **ضد‌Anti-Forensics** است؛ مهاجمان حرفه�ای معمولاً تلاش می‌کنند لاگ‌های روی سیستم آسیب‌دیده را پاک کنند (که قبلاً در مرحله‌ی Covering Tracks از Cyber Kill Chain با هم دیدیم)، اما اگر لاگ‌ها از قبل به یک سرور مرکزی دیگر کپی شده باشند، این تلاش بی‌اثر می‌شود\n\nنکته‌ی مهم برای تمایز با SIEM:\n\n**Log Aggregation** = صرفاً **جمع‌آوری و تجمیع متمرکز** لاگ‌ها (بدون لزوماً تحلیل پیچیده)\n\n**SIEM** = شامل Log Aggregation است، **به‌علاوه‌ی تحلیل، ارتباط‌دهی (Correlation)، و تولید هشدار** بر اساس آن داده‌ها\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Log Rotation**\n\nتوضیح:\nاین به فرآیند **مدیریت حجم فایل‌های لاگ** اشاره دارد (مثل آرشیو کردن لاگ‌های قدیمی و ایجاد فایل جدید)، نه به کپی کردن آن‌ها به یک سرور مرکزی جداگانه\n\n**SIEM**\n\nتوضیح:\nاین یک پلتفرم گسترده‌تر است که علاوه بر جمع‌آوری، **تحلیل و هشدار** هم تولید می‌کند؛ تمرکز این سؤال صرفاً روی **محافظت از لاگ با کپی متمرکز** است، نه قابلیت‌های تحلیلی\n\n**Log Retention**\n\nتوضیح:\nاین به **سیاست مدت‌زمان نگه‌داری** لاگ‌ها اشاره دارد (مثلاً \"لاگ‌ها باید ۹۰ روز نگه‌داری شوند\")، نه به مکانیزم کپی کردن آن‌ها به یک مکان امن\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"centralized server\"** + **\"protect logs even if attacker deletes them locally\"** را با هم دیدی، جواب همیشه **Log Aggregation** است",
  "domain": 4
 },
 {
  "number": 109,
  "en": "A company's compliance policy requires that security logs be kept for a minimum of 7 years to meet regulatory requirements, after which they can be safely deleted. Which of the following BEST describes this policy?",
  "fa": "سیاست انطباق یک شرکت الزام می‌کند که لاگ‌های امنیتی حداقل به‌مدت ۷ سال برای رعایت الزامات قانونی نگه‌داری شوند، که پس از آن می‌توانند به‌صورت ایمن حذف شوند. کدام گزینه بهترین توصیف این سیاست است؟",
  "options": [
   "A) Log Aggregation",
   "B) Log Retention",
   "C) Log Rotation",
   "D) Chain of Custody"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) Log Retention** هست، نه C. بگذار تفاوتش رو با Log Rotation دقیق توضیح بدم.\n\n**Log Retention**\n\nتوضیح:\nاین سیاست به‌طور خاص مشخص می‌کند **چه مدت‌زمانی** لاگ‌ها باید نگه‌داری شوند، معمولاً بر اساس **الزامات قانونی یا انطباق (Compliance)**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"kept for a minimum of 7 years\"** + **\"meet regulatory requirements\"** دقیقاً به یک **سیاست مدت‌زمان نگه‌داری** اشاره دارد، نه به مکانیزم فنی مدیریت فایل‌ها\n\nچرا گزینه‌ی C (Log Rotation) دقیق نبود:\n\n**Log Rotation**\n\nتوضیح:\nاین یک **فرآیند فنی و عملیاتی** است که به مدیریت **حجم و فضای ذخیره‌سازی** فایل‌های لاگ اشاره دارد؛ وقتی یک فایل لاگ به اندازه‌ی مشخصی می‌رسد (یا یک بازه‌ی زمانی کوتاه‌تر مثل روزانه می‌گذرد)، سیستم آن را **آرشیو می‌کند و یک فایل جدید** برای ثبت لاگ‌های بعدی باز می‌کند\n\nتفاوت کلیدی این دو مفهوم (که باید کاملاً روشن باشه):\n\n**Log Retention** = **چه مدت** باید لاگ‌ها نگه‌داری شوند (سیاست مدت‌زمان، اغلب با انگیزه‌ی قانونی/Compliance)\n\n**Log Rotation** = **چگونه** فایل‌های لاگ به‌صورت فنی مدیریت می‌شوند تا حجم زیادی فضای ذخیره‌سازی اشغال نکنند (مکانیزم عملیاتی، مثل ایجاد فایل جدید هر روز)\n\nاین دو معمولاً با هم کار می‌کنند: Log Rotation فایل‌های قدیمی را آرشیو می‌کند، اما Log Retention مشخص می‌کند که این آرشیوها باید **چقدر زمان** نگه‌داری شوند قبل از حذف نهایی\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Log Aggregation**\n\nتوضیح:\nاین به جمع‌آوری متمرکز لاگ‌ها از منابع مختلف اشاره دارد (که در سؤال قبلی کار کردیم)، نه مدت‌زمان نگه‌داری آن‌ها\n\n**Chain of Custody**\n\nتوضیح:\nاین به مستندسازی مسیر حرکت شواهد دیجیتال در یک پرونده‌ی خاص اشاره دارد (که در ابتدای دوره با هم کار کردیم)، نه سیاست کلی نگه‌داری لاگ برای انطباق قانونی\n\nنکته‌ی کلیدی برای امتحان (تثبیت نهایی):\nهر زمان عبارت **\"how long must logs be kept\"** یا **\"regulatory/compliance requirement for duration\"** را دیدی، جواب همیشه **Log Retention** است\nهر زمان عبارت **\"manage file size\"** یا **\"archive and create new log file\"** را دیدی، جواب **Log Rotation** است\n\nاین یکی از مفاهیمی است که باید بیشتر روش کار کنیم. به‌زودی دوباره با سناریوی متفاوت میارمش.",
  "domain": 4
 },
 {
  "correct": "C",
  "domain": 4,
  "en": "Which log management practice involves moving older logs to archival storage and removing them from active systems on a schedule?",
  "fa": "کدام رویه مدیریت لاگ، لاگ‌های قدیمی را طبق برنامه به آرشیو منتقل می‌کند؟",
  "options": [
   "A) Log Aggregation",
   "B) Log Correlation",
   "C) Log Rotation",
   "D) Log Analysis"
  ],
  "explanation": "Log Rotation لاگ‌های قدیمی را طبق برنامه آرشیو/حذف می‌کند تا فضا مدیریت شود. متفاوت از Log Retention (مدت نگه‌داری).",
  "number": 110
 },
 {
  "number": 111,
  "en": "A security analyst needs to investigate a security incident and wants to correlate events across multiple systems by examining the exact date and time each event occurred. The analyst discovers that the affected servers have clocks that are not synchronized, making it difficult to establish an accurate timeline. Which of the following protocols, if properly implemented beforehand, would have prevented this issue?",
  "fa": "یک تحلیلگر امنیتی باید یک حادثه‌ی امنیتی را بررسی کند و می‌خواهد رویدادها را در چندین سیستم با بررسی تاریخ و زمان دقیق وقوع هر رویداد، با هم مرتبط کند. تحلیلگر کشف می‌کند که ساعت‌های سرورهای آسیب‌دیده همگام‌سازی نشده‌اند، که باعث می‌شود ایجاد یک خط‌زمانی دقیق دشوار باشد. کدام پروتکل، اگر از قبل به‌درستی پیاده‌سازی شده بود، می‌توانست از این مشکل جلوگیری کند؟",
  "options": [
   "A) NTP (Network Time Protocol)",
   "B) SNMP",
   "C) DNS",
   "D) SYSLOG"
  ],
  "correct": "A",
  "explanation": "درسته! ✅ گزینه A\n\n**NTP (Network Time Protocol)**\n\nتوضیح:\nاین پروتکل به‌طور خاص برای **همگام‌سازی ساعت** بین سیستم‌های مختلف در یک شبکه طراحی شده، با استفاده از یک سرور زمان مرجع (Time Source)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"clocks that are not synchronized\"** + **\"difficult to establish an accurate timeline\"** دقیقاً نشان می‌دهد که چرا همگام‌سازی زمان در تحلیل امنیتی **حیاتی** است\n\nاین مشکل به‌طور خاص در **بررسی حوادث (Incident Response)** و **تحلیل فورنزیک** بسیار مهم است: اگر سرورهای مختلف ساعت‌های متفاوتی داشته باشند، تحلیلگر نمی‌تواند با اطمینان بگوید **کدام رویداد ابتدا اتفاق افتاده**، که می‌تواند کل خط‌زمانی یک حمله (مثلاً تشخیص اینکه مهاجم ابتدا کجا وارد شده و بعد به کجا حرکت کرده) را مختل کند\n\nاین یکی از نکات کم‌توجه اما **بسیار مهم** در امنیت عملیاتی است: زیرساخت باید از قبل (در مرحله‌ی Preparation که قبلاً با هم کار کردیم) برای پشتیبانی صحیح از فعالیت‌های فورنزیک آینده **آماده** شده باشد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SNMP (Simple Network Management Protocol)**\n\nتوضیح:\nاین پروتکل برای **مدیریت و نظارت بر دستگاه‌های شبکه** (مثل روترها) استفاده می‌شود، نه برای همگام‌سازی زمان\n\n**DNS**\n\nتوضیح:\nاین برای تبدیل نام دامنه به آدرس IP استفاده می‌شود، کاملاً بی‌ربط به همگام‌سازی ساعت سیستم‌ها\n\n**SYSLOG**\n\nتوضیح:\nاین یک پروتکل/فرمت استاندارد برای **ارسال و جمع‌آوری پیام‌های لاگ** است (که می‌تواند به Log Aggregation کمک کند، که قبلاً با هم کار کردیم)، اما خودش زمان سیستم را همگام‌سازی نمی‌کند؛ در واقع، اگر زمان سیستم اشتباه باشد، حتی پیام‌های Syslog هم Timestamp نادرستی خواهند داشت\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"clock synchronization\"** یا **\"accurate timeline across systems\"** را دیدی، جواب همیشه **NTP** است",
  "domain": 4
 },
 {
  "number": 112,
  "en": "A network administrator wants to remotely monitor the health and performance of routers and switches across the network, collecting data such as CPU usage, bandwidth utilization, and device status. Which of the following protocols is BEST suited for this purpose?",
  "fa": "یک مدیر شبکه می‌خواهد سلامت و عملکرد روترها و سوئیچ‌ها را در سراسر شبکه از راه دور پایش کند، و داده‌هایی مثل استفاده‌ی CPU، میزان مصرف باندوید، و وضعیت دستگاه را جمع‌آوری کند. کدام پروتکل بهترین تطابق برای این هدف را دارد؟",
  "options": [
   "A) NTP",
   "B) SNMP",
   "C) SYSLOG",
   "D) SSH"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SNMP (Simple Network Management Protocol)**\n\nتوضیح:\nاین پروتکل به‌طور خاص برای **مدیریت و نظارت از راه دور** بر دستگاه‌های شبکه (روتر، سوئیچ، فایروال و غیره) طراحی شده\n\nSNMP می‌تواند داده‌های مختلفی را از این دستگاه‌ها جمع‌آوری کند، از جمله:\nاستفاده از CPU و حافظه\nمیزان مصرف باندویدث\nوضعیت کلی دستگاه (آنلاین/آفلاین، خطاها)\n\nاین پروتکل به مدیران شبکه اجازه می‌دهد یک **دید کلی از سلامت زیرساخت شبکه** داشته باشند، معمولاً از طریق یک کنسول مرکزی مدیریت شبکه (NMS - Network Management System)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**NTP**\n\nتوضیح:\nاین برای همگام‌سازی **زمان** بین دستگاه‌ها استفاده می‌شود (که در سؤال قبلی با هم کار کردیم)، نه برای پایش عملکرد و سلامت دستگاه‌ها\n\n**SYSLOG**\n\nتوضیح:\nاین برای **ارسال و جمع‌آوری پیام‌های لاگ** متنی استفاده می‌شود (مثل رویدادهای خطا یا هشدار)؛ هرچند می‌تواند برخی اطلاعات مرتبط با مشکلات را نشان دهد، اما برای **پایش لحظه‌ای و ساختاریافته‌ی معیارهای عملکردی** (مثل درصد CPU) طراحی نشده\n\n**SSH (Secure Shell)**\n\nتوضیح:\nاین پروتکل برای **دسترسی امن از راه دور و مدیریت دستی** یک دستگاه (مثل اجرای دستورات Command Line) استفاده می‌شود، نه برای پایش خودکار و مستمر معیارهای عملکردی در مقیاس شبکه\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"monitor network devices\"** + **\"CPU, bandwidth, device status\"** را با هم دیدی، جواب همیشه **SNMP** است",
  "domain": 5
 },
 {
  "number": 113,
  "en": "A company wants to ensure that administrators connecting remotely to manage Linux servers use an encrypted connection instead of an older protocol that transmits commands and passwords in plaintext. Which of the following should be used?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که مدیرانی که از راه دور برای مدیریت سرورهای لینوکس متصل می‌شوند، از یک اتصال رمزنگاری‌شده استفاده می‌کنند، به‌جای یک پروتکل قدیمی‌تر که دستورات و رمزهای عبور را به‌صورت متن ساده ارسال می‌کند. کدام گزینه باید استفاده شود؟",
  "options": [
   "A) Telnet",
   "B) SSH",
   "C) FTP",
   "D) HTTP"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SSH (Secure Shell)**\n\nتوضیح:\nاین پروتکل به‌طور خاص برای **دسترسی امن و رمزنگاری‌شده از راه دور** به سیستم‌ها (معمولاً سرورهای لینوکس/یونیکس) طراحی شده\n\nنکته‌ی کلیدی این سؤال: عبارت **\"encrypted connection\"** + **\"instead of an older protocol that transmits...in plaintext\"** دقیقاً به جایگزینی **SSH به‌جای Telnet** اشاره دارد\n\nاین یکی از کلاسیک‌ترین مقایسه‌های امنیتی است:\n\n**Telnet (قدیمی، ناامن)** = تمام داده‌ها از جمله **نام کاربری و رمز عبور** به‌صورت **متن ساده (Plaintext)** ارسال می‌شوند؛ اگر مهاجم ترافیک را رهگیری کند (مثل On-Path Attack که قبلاً با هم کار کردیم)، می‌تواند مستقیماً رمز عبور را بخواند\n\n**SSH (مدرن، امن)** = تمام ارتباط، شامل دستورات و اطلاعات ورود، **رمزنگاری‌شده** است؛ حتی اگر ترافیک رهگیری شود، محتوا برای مهاجم غیرقابل‌خوانش خواهد بود\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Telnet**\n\nتوضیح:\nاین دقیقاً همان پروتکل قدیمی و ناامنی است که سؤال می‌خواهد از آن **اجتناب** شود؛ تمام ترافیک به‌صورت متن ساده ارسال می‌شود\n\n**FTP (File Transfer Protocol)**\n\nتوضیح:\nاین برای **انتقال فایل** استفاده می‌شود (نه مدیریت/کنترل سیستم از راه دور)، و نسخه‌ی سنتی آن هم رمزنگاری‌نشده است (نسخه‌ی امن آن SFTP یا FTPS نام دارد)\n\n**HTTP**\n\nتوضیح:\nاین برای مرور وب استفاده می‌شود (نه مدیریت سیستم از راه دور)، و نسخه‌ی رمزنگاری‌شده‌اش HTTPS نام دارد\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"secure remote access to manage a server\"** را دیدی (به‌جای Telnet)، جواب همیشه **SSH** است",
  "domain": 5
 },
 {
  "number": 114,
  "en": "A company wants employees to securely transfer sensitive files to a remote server, ensuring that both the login credentials and the file contents are encrypted during transmission, unlike an older protocol that sends everything in plaintext. Which of the following should be used?",
  "fa": "یک شرکت می‌خواهد کارمندان فایل‌های حساس را به‌صورت امن به یک سرور راه دور انتقال دهند، به‌طوری که هم اطلاعات ورود و هم محتوای فایل در حین انتقال رمزنگاری شوند، برخلاف یک پروتکل قدیمی‌تر که همه‌چیز را به‌صورت متن ساده ارسال می‌کند. کدام گزینه باید استفاده شود؟",
  "options": [
   "A) FTP",
   "B) SFTP (SSH File Transfer Protocol)",
   "C) HTTP",
   "D) Telnet"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**SFTP (SSH File Transfer Protocol)**\n\nتوضیح:\nاین پروتکل دقیقاً نسخه‌ی **امن و رمزنگاری‌شده** برای انتقال فایل است، که از زیرساخت **SSH** (که در سؤال قبلی با هم کار کردیم) برای رمزنگاری استفاده می‌کند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"both the login credentials and the file contents are encrypted\"** + **\"unlike an older protocol that sends everything in plaintext\"** دقیقاً به جایگزینی **SFTP به‌جای FTP** اشاره دارد\n\nمقایسه‌ی کلاسیک امنیتی دیگر:\n\n**FTP (قدیمی، ناامن)** = نام کاربری، رمز عبور، و **محتوای فایل** همگی به‌صورت **متن ساده** ارسال می‌شوند\n\n**SFTP (مدرن، امن)** = همه‌چیز، از جمله اطلاعات ورود و محتوای فایل، از طریق **تونل رمزنگاری‌شده‌ی SSH** منتقل می‌شود\n\n🎯 الگوی کلی که الان باید کاملاً برات روشن باشه (نسخه‌های قدیمی در مقابل نسخه‌های امن):\n**Telnet** (ناامن) → **SSH** (امن) — برای مدیریت از راه دور\n**FTP** (ناامن) → **SFTP** (امن) — برای انتقال فایل\n**HTTP** (ناامن) → **HTTPS** (امن) — برای مرور وب\n\nچرا گزینه‌های دیگر رد شدند:\n\n**FTP**\n\nتوضیح:\nاین دقیقاً همان پروتکل قدیمی و ناامنی است که سؤال می‌خواهد از آن اجتناب شود\n\n**HTTP**\n\nتوضیح:\nاین برای مرور وب استفاده می‌شود، نه به‌طور خاص برای انتقال فایل بین کارمند و سرور\n\n**Telnet**\n\nتوضیح:\nاین برای دسترسی و مدیریت از راه دور (نه انتقال فایل) استفاده می‌شود، و به‌هرحال ناامن است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"secure file transfer\"** + **\"encrypted credentials and content\"** را با هم دیدی، جواب همیشه **SFTP** است",
  "domain": 4
 },
 {
  "number": 115,
  "en": "A network administrator needs to allow secure web traffic through the corporate firewall while blocking unencrypted web traffic. Which of the following port numbers should be allowed for HTTPS traffic?",
  "fa": "یک مدیر شبکه باید اجازه‌ی عبور ترافیک وب امن از فایروال شرکت را بدهد، در حالی که ترافیک وب رمزنگاری‌نشده را مسدود کند. کدام شماره پورت باید برای ترافیک HTTPS مجاز باشد؟",
  "options": [
   "A) Port 21",
   "B) Port 80",
   "C) Port 443",
   "D) Port 25"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Port 443**\n\nتوضیح:\nاین پورت استاندارد برای ترافیک **HTTPS** (نسخه‌ی رمزنگاری‌شده‌ی HTTP با استفاده از TLS/SSL) است\n\nاین یکی از مهم‌ترین شماره‌پورت‌هایی است که باید برای امتحان **حفظ کنی**، چون سؤالات زیادی درباره‌ی تشخیص پورت‌های استاندارد می‌پرسند\n\n🎯 **جدول پورت‌های ضروری و پرتکرار برای امتحان (که باید کاملاً حفظ باشد):**\n\n| پورت | پروتکل | کاربرد |\n|---|---|---|\n| **21** | FTP | انتقال فایل (ناامن) |\n| **22** | SSH/SFTP | دسترسی امن از راه دور / انتقال فایل امن |\n| **23** | Telnet | دسترسی از راه دور (ناامن) |\n| **25** | SMTP | ارسال ایمیل |\n| **53** | DNS | تبدیل نام دامنه به IP |\n| **80** | HTTP | وب (رمزنگاری‌نشده) |\n| **443** | HTTPS | وب (رمزنگاری‌شده) |\n| **3389** | RDP | دسترسی از راه دور به دسکتاپ ویندوز |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Port 21**\n\nتوضیح:\nاین پورت استاندارد **FTP** (انتقال فایل ناامن) است، نه HTTPS\n\n**Port 80**\n\nتوضیح:\nاین پورت استاندارد **HTTP** (وب رمزنگاری‌نشده) است؛ این دقیقاً همان ترافیکی است که سؤال می‌خواهد **مسدود شود**، نه مجاز\n\n**Port 25**\n\nتوضیح:\nاین پورت استاندارد **SMTP** (پروتکل ارسال ایمیل) است، بی‌ربط به ترافیک وب\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"HTTPS\"** یا **\"secure web traffic\"** را دیدی، پورت همیشه **443** است\nهر زمان عبارت **\"HTTP\"** یا **\"unencrypted web traffic\"** را دیدی، پورت همیشه **80** است",
  "domain": 3
 },
 {
  "number": 116,
  "en": "A security administrator wants to block all unencrypted remote management traffic to company servers while still allowing administrators to connect securely. Which of the following port pairs represents the INSECURE protocol to block and the SECURE protocol to allow for remote server management?",
  "fa": "یک مدیر امنیتی می‌خواهد تمام ترافیک مدیریت از راه دور رمزنگاری‌نشده به سرورهای شرکت را مسدود کند، در حالی که همچنان به مدیران اجازه دهد به‌صورت امن متصل شوند. کدام جفت پورت، پروتکل **ناامن** برای مسدود کردن و پروتکل **امن** برای اجازه‌ی مدیریت از راه دور سرور را نشان می‌دهد؟",
  "options": [
   "A) Block Port 80, Allow Port 443",
   "B) Block Port 23, Allow Port 22",
   "C) Block Port 21, Allow Port 22",
   "D) Block Port 25, Allow Port 443"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) Block Port 23, Allow Port 22** هست، نه A. بگذار توضیح بدم چرا، چون این سؤال دقیقاً بین چند مفهوم مشابه که با هم کار کردیم تفاوت می‌گذارد.\n\n**B) Block Port 23 (Telnet), Allow Port 22 (SSH)**\n\nتوضیح:\nنکته‌ی کلیدی این سؤال، عبارت **\"remote management\"** (مدیریت از راه دور) است، نه ترافیک وب\n\n**Port 23 (Telnet)** = پروتکل **ناامن** برای **مدیریت/دسترسی از راه دور به سرور** (که قبلاً با هم کار کردیم؛ Telnet همه‌چیز را به‌صورت متن ساده ارسال می‌کند)\n\n**Port 22 (SSH)** = پروتکل **امن و رمزنگاری‌شده** جایگزین Telnet برای همان هدف (مدیریت از راه دور)\n\nاین دقیقاً همان جفت پروتکلی است که در سؤال ۱۵۶ با هم کار کردیم (Telnet در مقابل SSH برای مدیریت سرور)\n\nچرا گزینه‌ی A اشتباه بود:\n\n**A) Block Port 80, Allow Port 443**\n\nتوضیح:\nاین جفت پورت مربوط به **ترافیک وب** (HTTP در مقابل HTTPS) است، نه **مدیریت از راه دور سرور**؛ سؤال به‌طور خاص می‌گفت **\"remote management traffic\"**، که این به Telnet/SSH اشاره دارد، نه به مرور وب\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**C) Block Port 21, Allow Port 22**\n\nتوضیح:\nپورت ۲۱ مربوط به **FTP** (انتقال فایل) است، نه مدیریت از راه دور سرور؛ این یک جفت نادرست است چون FTP و SSH اهداف متفاوتی دارند (یکی انتقال فایل، دیگری مدیریت سرور)، برخلاف Telnet/SSH که دقیقاً همان هدف را دارند فقط با امنیت متفاوت\n\n**D) Block Port 25, Allow Port 443**\n\nتوضیح:\nپورت ۲۵ مربوط به SMTP (ایمیل) و ۴۴۳ مربوط به HTTPS (وب) است؛ این دو اصلاً به یک هدف مشترک (مدیریت از راه دور) اشاره ندارند\n\n🎯 نکته‌ی کلیدی برای امتحان (تثبیت نهایی این الگو):\nهر زمان عبارت **\"remote management/access to a server\"** را دیدی، جفت درست همیشه **Telnet (23) ناامن در مقابل SSH (22) امن** است\nبرای **ترافیک وب**: HTTP (80) ناامن در مقابل HTTPS (443) امن\nبرای **انتقال فایل**: FTP (21) ناامن در مقابل SFTP (که از پورت ۲۲ SSH استفاده می‌کند) امن\n\nاین یکی از مفاهیمی است که باید بیشتر روش کار کنیم. به‌زودی دوباره با سناریوی متفاوت میارمش.",
  "domain": 3
 },
 {
  "number": 117,
  "en": "A company's security policy requires blocking all unencrypted file transfer traffic to its servers while still allowing employees to transfer files securely. Which of the following port pairs represents the INSECURE protocol to block and the SECURE protocol to allow for file transfer?",
  "fa": "سیاست امنیتی یک شرکت الزام می‌کند تمام ترافیک انتقال فایل رمزنگاری‌نشده به سرورهایش مسدود شود، در حالی که همچنان به کارمندان اجازه دهد فایل‌ها را به‌صورت امن انتقال دهند. کدام جفت پورت، پروتکل **ناامن** برای مسدود کردن و پروتکل **امن** برای اجازه‌ی انتقال فایل را نشان می‌دهد؟",
  "options": [
   "A) Block Port 23, Allow Port 22",
   "B) Block Port 21, Allow Port 22 (SFTP)",
   "C) Block Port 80, Allow Port 443",
   "D) Block Port 53, Allow Port 443"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Block Port 21 (FTP), Allow Port 22 (SFTP)**\n\nتوضیح:\nاین بار دقیقاً هدف \"انتقال فایل\" را درست تشخیص دادی، نه \"مدیریت از راه دور\"\n\nنکته‌ی کلیدی این سؤال: عبارت **\"file transfer traffic\"** دقیقاً به جفت **FTP/SFTP** اشاره دارد، نه به Telnet/SSH (که برای مدیریت سرور بود، نه انتقال فایل)\n\n**Port 21 (FTP)** = پروتکل **ناامن** برای انتقال فایل (متن ساده)\n\n**Port 22 (SFTP)** = پروتکل **امن** برای انتقال فایل (از زیرساخت رمزنگاری‌شده‌ی SSH استفاده می‌کند، که جالب است همان پورت ۲۲ را به اشتراک می‌گذارد)\n\nنکته‌ی مهم برای یادآوری: SFTP و SSH هر دو از **پورت ۲۲** استفاده می‌کنند؛ این یعنی وقتی پورت ۲۲ باز است، هم مدیریت امن از راه دور (SSH) و هم انتقال امن فایل (SFTP) ممکن می‌شود، چون SFTP در واقع روی پروتکل SSH ساخته شده\n\n🎯 **مرور نهایی و قطعی این الگوی پرتکرار (که الان باید کاملاً مسلط شده باشی):**\n\n| هدف | ناامن (Block) | امن (Allow) |\n|---|---|---|\n| مدیریت از راه دور | Telnet (23) | SSH (22) |\n| انتقال فایل | FTP (21) | SFTP (22) |\n| مرور وب | HTTP (80) | HTTPS (443) |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**A) Block Port 23, Allow Port 22**\n\nتوضیح:\nاین جفت مربوط به **مدیریت از راه دور** (Telnet/SSH) است، نه انتقال فایل؛ این دقیقاً جواب سؤال **قبلی** بود\n\n**C) Block Port 80, Allow Port 443**\n\nتوضیح:\nاین جفت مربوط به **مرور وب** است (HTTP/HTTPS)، نه انتقال فایل\n\n**D) Block Port 53, Allow Port 443**\n\nتوضیح:\nپورت ۵۳ مربوط به DNS است، بی‌ربط به انتقال فایل",
  "domain": 3
 },
 {
  "correct": "B",
  "domain": 3,
  "en": "Which secure protocol uses port 443 and encrypts web traffic between a browser and server?",
  "fa": "کدام پروتکل امن از پورت ۴۴۳ استفاده می‌کند و ترافیک وب را رمزنگاری می‌کند؟",
  "options": [
   "A) HTTP",
   "B) HTTPS",
   "C) FTP",
   "D) Telnet"
  ],
  "explanation": "HTTPS از پورت ۴۴۳ و TLS برای رمزنگاری ترافیک وب استفاده می‌کند. HTTP (پورت ۸۰) رمزنگاری ندارد.",
  "number": 118
 },
 {
  "number": 119,
  "en": "A network engineer is troubleshooting an issue and needs to identify which port is used by DNS for resolving domain names to IP addresses. Which of the following is the correct port number?",
  "fa": "یک مهندس شبکه در حال عیب‌یابی یک مشکل است و باید مشخص کند کدام پورت توسط DNS برای تبدیل نام دامنه به آدرس IP استفاده می‌شود. کدام شماره‌پورت صحیح است؟",
  "options": [
   "A) Port 53",
   "B) Port 443",
   "C) Port 110",
   "D) Port 161"
  ],
  "correct": "A",
  "explanation": "درسته! ✅ گزینه A\n\n**Port 53**\n\nتوضیح:\nاین پورت استاندارد برای پروتکل **DNS (Domain Name System)** است که وظیفه‌ی تبدیل نام‌های دامنه (مثل google.com) به آدرس‌های IP را بر عهده دارد\n\nنکته‌ی فنی برای آگاهی بیشتر: DNS از هر دو پروتکل **UDP** (برای جستجوهای معمولی و سریع) و **TCP** (برای انتقال داده‌ی حجیم‌تر یا Zone Transfer) روی همین پورت ۵۳ استفاده می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Port 443**\n\nتوضیح:\nاین پورت استاندارد **HTTPS** (وب رمزنگاری‌شده) است، نه DNS\n\n**Port 110**\n\nتوضیح:\nاین پورت استاندارد **POP3** (دریافت ایمیل، نسخه‌ی ناامن) است که در سؤال قبلی با هم کار کردیم\n\n**Port 161**\n\nتوضیح:\nاین پورت استاندارد **SNMP** (مدیریت و نظارت بر دستگاه‌های شبکه) است که قبلاً با هم کار کردیم\n\n🎯 **به‌روزرسانی جدول کامل پورت‌ها (نسخه‌ی نهایی و جامع برای حفظ کردن قبل از امتحان):**\n\n| پورت | پروتکل | کاربرد |\n|---|---|---|\n| ۲۱ | FTP | انتقال فایل (ناامن) |\n| ۲۲ | SSH/SFTP | دسترسی/انتقال فایل امن |\n| ۲۳ | Telnet | دسترسی از راه دور (ناامن) |\n| ۲۵ | SMTP | ارسال ایمیل |\n| **۵۳** | **DNS** | **تبدیل نام دامنه به IP** |\n| ۸۰ | HTTP | وب (ناامن) |\n| ۱۱۰ | POP3 | دریافت ایمیل (ناامن) |\n| ۱۴۳ | IMAP | دریافت ایمیل (ناامن) |\n| ۱۶۱ | SNMP | مدیریت دستگاه شبکه |\n| ۴۴۳ | HTTPS | وب (امن) |\n| ۵۸۷ | SMTP (امن) | ارسال ایمیل امن |\n| ۹۹۳ | IMAP (امن) | دریافت ایمیل امن |\n| ۹۹۵ | POP3 (امن) | دریافت ایمیل امن |\n| ۳۳۸۹ | RDP | دسترسی از راه دور به دسکتاپ ویندوز |",
  "domain": 3
 },
 {
  "number": 120,
  "en": "A company's remote desktop solution allows employees to connect to their office Windows computers from home. Which of the following is the default port used by RDP (Remote Desktop Protocol)?",
  "fa": "راه‌حل دسکتاپ از راه دور یک شرکت به کارمندان اجازه می‌دهد از خانه به کامپیوترهای ویندوزی دفترشان متصل شوند. کدام گزینه پورت پیش‌فرض استفاده‌شده توسط RDP (Remote Desktop Protocol) است؟",
  "options": [
   "A) Port 3389",
   "B) Port 22",
   "C) Port 443",
   "D) Port 1433"
  ],
  "correct": "A",
  "explanation": "درسته! ✅ گزینه A\n\n**Port 3389**\n\nتوضیح:\nاین پورت استاندارد برای **RDP (Remote Desktop Protocol)** است که توسط مایکروسافت طراحی شده تا کاربران بتوانند **به‌صورت گرافیکی و کامل** به یک کامپیوتر ویندوزی از راه دور دسترسی پیدا کنند (نه فقط خط فرمان، بلکه کل محیط دسکتاپ)\n\nنکته‌ی امنیتی مهم: پورت RDP یکی از **هدف‌های پرتکرار حملات Brute Force** است (که در ابتدای دوره با هم کار کردیم)، چون اگر این پورت مستقیماً به اینترنت باز باشد، مهاجمان به‌طور مستمر تلاش می‌کنند رمزهای عبور مختلف را امتحان کنند؛ به همین دلیل توصیه می‌شود RDP پشت یک **VPN** قرار بگیرد یا با **MFA** محافظت شود، نه اینکه مستقیماً به‌صورت عمومی در دسترس باشد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Port 22**\n\nتوضیح:\nاین پورت استاندارد **SSH** است (دسترسی از راه دور خط فرمان، معمولاً برای سیستم‌های لینوکس)، نه دسترسی گرافیکی به دسکتاپ ویندوز\n\n**Port 443**\n\nتوضیح:\nاین پورت استاندارد **HTTPS** است، بی‌ربط به دسترسی به دسکتاپ از راه دور\n\n**Port 1433**\n\nتوضیح:\nاین پورت استاندارد **Microsoft SQL Server** است (برای ارتباط با پایگاه‌داده)، نه برای دسترسی به دسکتاپ\n\n🎯 **افزودن به جدول نهایی پورت‌ها:**\n\n| پورت | پروتکل | کاربرد |\n|---|---|---|\n| **۳۳۸۹** | **RDP** | **دسترسی گرافیکی از راه دور به دسکتاپ ویندوز** |\n| ۱۴۳۳ | MS SQL | ارتباط با پایگاه‌داده‌ی مایکروسافت |\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"Remote Desktop\"** یا **\"graphical access to Windows\"** را دیدی، پورت همیشه **۳۳۸۹** است",
  "domain": 3
 },
 {
  "number": 121,
  "en": "A database administrator needs to allow a specific application server to connect to a Microsoft SQL Server database through the corporate firewall. Which of the following ports should be opened?",
  "fa": "یک مدیر پایگاه‌داده باید اجازه دهد یک سرور اپلیکیشن خاص از طریق فایروال شرکت به یک پایگاه‌داده‌ی Microsoft SQL Server متصل شود. کدام پورت باید باز شود؟",
  "options": [
   "A) Port 3389",
   "B) Port 1433",
   "C) Port 3306",
   "D) Port 53"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Port 1433**\n\nتوضیح:\nاین پورت استاندارد برای **Microsoft SQL Server** است، که به اپلیکیشن‌ها اجازه می‌دهد با این پایگاه‌داده ارتباط برقرار کنند\n\nنکته‌ی فنی مفید (که ممکنه در امتحان به‌عنوان گزینه‌ی دیگه بیاد): پورت **3306** برای **MySQL** (یک نوع دیگر از پایگاه‌داده) استفاده می‌شود؛ این دو پورت گاهی با هم اشتباه گرفته می‌شوند، پس باید دقت کنی کدام **نوع پایگاه‌داده** در سؤال ذکر شده\n\n🎯 **افزودن به جدول نهایی پورت‌ها (تکمیل بخش پایگاه‌داده):**\n\n| پورت | پروتکل | کاربرد |\n|---|---|---|\n| **۱۴۳۳** | **Microsoft SQL Server** | پایگاه‌داده‌ی مایکروسافت |\n| **۳۳۰۶** | **MySQL** | پایگاه‌داده‌ی MySQL |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Port 3389**\n\nتوضیح:\nاین پورت RDP است (دسترسی از راه دور به دسکتاپ ویندوز)، نه ارتباط با پایگاه‌داده\n\n**Port 3306**\n\nتوضیح:\nاین پورت **MySQL** است، نه Microsoft SQL Server؛ این سؤال به‌طور خاص گفته \"Microsoft SQL Server\"، که پورت متفاوتی دارد\n\n**Port 53**\n\nتوضیح:\nاین پورت DNS است، کاملاً بی‌ربط به پایگاه‌داده\n\nنکته‌ی کلیدی برای امتحان (تمایز این دو پورت پایگاه‌داده‌ی مشابه):\nهر زمان عبارت **\"Microsoft SQL Server\"** را دیدی، پورت **۱۴۳۳** است\nهر زمان عبارت **\"MySQL\"** را دیدی، پورت **۳۳۰۶** است",
  "domain": 3
 },
 {
  "number": 122,
  "en": "A European company that processes personal data of EU citizens must comply with strict regulations regarding data collection, storage, consent, and the right to be forgotten. Which of the following regulations is this company required to follow?",
  "fa": "یک شرکت اروپایی که داده‌های شخصی شهروندان اتحادیه‌ی اروپا را پردازش می‌کند، باید مقررات سختگیرانه‌ای درباره‌ی جمع‌آوری داده، ذخیره‌سازی، رضایت، و حق فراموش‌شدن را رعایت کند. این شرکت موظف است کدام مقررات را رعایت کند؟",
  "options": [
   "A) HIPAA",
   "B) GDPR (General Data Protection Regulation)",
   "C) PCI-DSS",
   "D) SOX"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**GDPR (General Data Protection Regulation)**\n\nتوضیح:\nاین مقررات توسط **اتحادیه‌ی اروپا** تدوین شده و به‌طور خاص بر **حفاظت از داده‌های شخصی شهروندان اروپایی** تمرکز دارد، شامل الزاماتی مثل:\n**رضایت صریح (Explicit Consent)** قبل از جمع‌آوری داده\n**حق فراموش‌شدن (Right to be Forgotten)** — کاربر می‌تواند درخواست حذف کامل داده‌هایش را بدهد\n**Data Breach Notification** در بازه‌ی زمانی مشخص (معمولاً ۷۲ ساعت) در صورت نشت داده\n\nنکته‌ی مهم: این مقررات نه‌فقط شرکت‌های اروپایی، بلکه **هر شرکتی در هر کجای جهان** که داده‌ی شهروندان اروپایی را پردازش می‌کند را هم شامل می‌شود (دامنه‌ی فراسرزمینی)\n\n🎯 **مرور سریع چارچوب‌های قانونی/انطباق مهم (که به‌زودی بیشتر بررسی می‌کنیم):**\n\n**GDPR** = حفاظت از داده‌های شخصی **شهروندان اتحادیه‌ی اروپا**\n\n**HIPAA** = حفاظت از اطلاعات **سلامت** در آمریکا (Health Insurance Portability and Accountability Act)\n\n**PCI-DSS** = استاندارد امنیتی برای پردازش **اطلاعات کارت پرداخت**\n\n**SOX (Sarbanes-Oxley)** = الزامات **مالی و حسابداری** برای شرکت‌های سهامی عام در آمریکا\n\nچرا گزینه‌های دیگر رد شدند:\n\n**HIPAA**\n\nتوضیح:\nاین به‌طور خاص به داده‌های **سلامت** در آمریکا اشاره دارد، نه به داده‌های شخصی عمومی شهروندان اروپایی\n\n**PCI-DSS**\n\nتوضیح:\nاین به‌طور خاص برای **اطلاعات کارت پرداخت** است، نه داده‌های شخصی عمومی\n\n**SOX**\n\nتوضیح:\nاین به انطباق **مالی و حسابداری** اشاره دارد، بی‌ربط به حفاظت از داده‌های شخصی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"EU citizens\"** + **\"right to be forgotten\"** + **\"personal data protection\"** را با هم دیدی، جواب همیشه **GDPR** است",
  "domain": 5
 },
 {
  "number": 123,
  "en": "A hospital in the United States that stores and transmits patient medical records electronically must implement specific safeguards to protect the privacy and security of this sensitive health information. Which of the following regulations applies to this organization?",
  "fa": "یک بیمارستان در ایالات متحده که سوابق پزشکی بیماران را به‌صورت الکترونیکی ذخیره و منتقل می‌کند، باید تدابیر حفاظتی خاصی را برای محافظت از حریم خصوصی و امنیت این اطلاعات سلامت حساس پیاده‌سازی کند. کدام مقررات برای این سازمان اعمال می‌شود؟",
  "options": [
   "A) GDPR",
   "B) HIPAA (Health Insurance Portability and Accountability Act)",
   "C) PCI-DSS",
   "D) FERPA"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**HIPAA (Health Insurance Portability and Accountability Act)**\n\nتوضیح:\nاین قانون آمریکایی به‌طور خاص برای محافظت از **اطلاعات سلامت محرمانه‌ی بیماران (PHI - Protected Health Information)** طراحی شده\n\nاین قانون سازمان‌های مرتبط با سلامت (بیمارستان‌ها، بیمه‌های درمانی، پزشکان) را موظف می‌کند که تدابیر امنیتی مشخصی برای محافظت از حریم خصوصی و امنیت سوابق پزشکی الکترونیکی (مثل رمزنگاری، کنترل دسترسی محدود، و آموزش کارمندان) پیاده‌سازی کنند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"United States\"** + **\"patient medical records\"** دقیقاً به HIPAA اشاره دارد، نه GDPR (که مخصوص اتحادیه‌ی اروپا و داده‌ی شخصی عمومی است، نه به‌طور خاص سلامت)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**GDPR**\n\nتوضیح:\nاین به داده‌های شخصی **شهروندان اتحادیه‌ی اروپا** اشاره دارد (به‌طور کلی، نه فقط سلامت)، نه به‌طور خاص این سناریوی آمریکایی\n\n**PCI-DSS**\n\nتوضیح:\nاین به‌طور خاص برای **اطلاعات کارت پرداخت** است، نه سوابق پزشکی\n\n**FERPA (Family Educational Rights and Privacy Act)**\n\nتوضیح:\nاین یک قانون آمریکایی است، اما به‌طور خاص به محافظت از **سوابق تحصیلی دانش‌آموزان** اشاره دارد، نه سوابق پزشکی بیماران\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"medical records\"** + **\"patient health information\"** + **\"United States\"** را با هم دیدی، جواب همیشه **HIPAA** است",
  "domain": 5
 },
 {
  "number": 124,
  "en": "An online retailer that accepts credit card payments must implement specific security controls, such as encrypting cardholder data and maintaining a secure network, to comply with industry requirements set by major credit card companies. Which of the following standards applies to this organization?",
  "fa": "یک خرده‌فروش آنلاین که پرداخت‌های کارت اعتباری را می‌پذیرد، باید کنترل‌های امنیتی خاصی مثل رمزنگاری داده‌های دارنده‌ی کارت و حفظ یک شبکه‌ی امن را پیاده‌سازی کند تا با الزامات صنعتی تعیین‌شده توسط شرکت‌های اصلی کارت اعتباری مطابقت داشته باشد. کدام استاندارد برای این سازمان اعمال می‌شود؟",
  "options": [
   "A) HIPAA",
   "B) GDPR",
   "C) PCI-DSS (Payment Card Industry Data Security Standard)",
   "D) SOX"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**PCI-DSS (Payment Card Industry Data Security Standard)**\n\nتوضیح:\nاین استاندارد به‌طور خاص توسط **شرکت‌های اصلی کارت اعتباری** (مثل Visa، Mastercard) تدوین شده تا اطمینان حاصل شود هر سازمانی که اطلاعات کارت پرداخت را پردازش، ذخیره، یا منتقل می‌کند، کنترل‌های امنیتی مشخصی را رعایت کند\n\nبرخی الزامات کلیدی PCI-DSS شامل:\nرمزنگاری داده‌های دارنده‌ی کارت (Cardholder Data)\nحفظ یک شبکه‌ی امن (مثل فایروال)\nمحدود کردن دسترسی به داده‌های کارت بر اساس **Need to Know** (که قبلاً با هم کار کردیم)\nآزمایش منظم سیستم‌های امنیتی (مثل Penetration Testing)\n\nنکته‌ی مهم: برخلاف HIPAA یا GDPR که قوانین **دولتی/قانونی** هستند، PCI-DSS یک **استاندارد صنعتی** است که توسط شرکت‌های کارت اعتباری (نه دولت) اعمال می‌شود؛ عدم رعایت آن می‌تواند منجر به جریمه یا از دست دادن توانایی پردازش کارت اعتباری شود\n\nچرا گزینه‌های دیگر رد شدند:\n\n**HIPAA**\n\nتوضیح:\nاین به‌طور خاص به اطلاعات سلامت اشاره دارد، نه اطلاعات کارت پرداخت\n\n**GDPR**\n\nتوضیح:\nاین به داده‌های شخصی شهروندان اروپایی به‌طور کلی اشاره دارد، نه به‌طور خاص اطلاعات کارت پرداخت در یک استاندارد صنعتی خاص\n\n**SOX**\n\nتوضیح:\nاین به انطباق مالی و حسابداری شرکت‌های سهامی عام اشاره دارد، نه امنیت داده‌های کارت پرداخت\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"credit card\"** + **\"cardholder data\"** را با هم دیدی، جواب همیشه **PCI-DSS** است\n\n🎯 مرور کامل و نهایی چهار چارچوب قانونی/استاندارد که الان مسلط شدی:\n**GDPR** = داده‌ی شخصی EU\n**HIPAA** = سلامت در آمریکا\n**PCI-DSS** = اطلاعات کارت پرداخت (صنعتی)\n**SOX** = مالی/حسابداری شرکت‌های سهامی عام",
  "domain": 5
 },
 {
  "number": 125,
  "en": "A publicly traded company's executives must personally certify the accuracy of financial statements, and the company must maintain strict internal controls over financial reporting to prevent fraud, following a series of major corporate accounting scandals. Which of the following regulations requires this?",
  "fa": "مدیران ارشد یک شرکت سهامی عام باید شخصاً صحت صورت‌های مالی را تصدیق کنند، و شرکت باید کنترل‌های داخلی سختگیرانه‌ای بر گزارش‌دهی مالی برای جلوگیری از تقلب حفظ کند، که این الزام پس از یک سری رسوایی‌های بزرگ حسابداری شرکتی به وجود آمد. کدام مقررات این را الزام می‌کند؟",
  "options": [
   "A) PCI-DSS",
   "B) HIPAA",
   "C) SOX (Sarbanes-Oxley Act)",
   "D) GDPR"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**SOX (Sarbanes-Oxley Act)**\n\nتوضیح:\nاین قانون آمریکایی پس از **رسوایی‌های بزرگ حسابداری شرکتی** (مثل رسوایی Enron در اوایل دهه‌ی ۲۰۰۰) تدوین شد، تا اعتماد عمومی به صورت‌های مالی شرکت‌های سهامی عام بازگردد\n\nالزامات کلیدی SOX شامل:\n**مدیران ارشد (CEO/CFO)** باید **شخصاً** صحت صورت‌های مالی را تصدیق و امضا کنند\nشرکت باید **کنترل‌های داخلی قوی** بر فرآیند گزارش‌دهی مالی داشته باشد تا تقلب یا اشتباه شناسایی شود\nنقض این قانون می‌تواند منجر به **مجازات‌های کیفری شخصی** برای مدیران ارشد شود (نه فقط جریمه‌ی شرکت)\n\nنکته‌ی مهم برای امنیت سایبری: SOX اهمیت زیادی برای تیم‌های IT و امنیت دارد چون نیاز به **کنترل‌های دسترسی قوی** و **حسابرسی دقیق** بر سیستم‌های مالی دارد تا گزارش‌های مالی قابل‌اعتماد و دستکاری‌نشده باشند (ارتباط مستقیم با مفاهیمی مثل Separation of Duties که قبلاً با هم کار کردیم!)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**PCI-DSS**\n\nتوضیح:\nاین به امنیت اطلاعات کارت پرداخت اشاره دارد، نه به صحت صورت‌های مالی کلی شرکت\n\n**HIPAA**\n\nتوضیح:\nاین به اطلاعات سلامت اشاره دارد، کاملاً بی‌ربط به گزارش‌دهی مالی\n\n**GDPR**\n\nتوضیح:\nاین به حفاظت از داده‌های شخصی شهروندان اروپایی اشاره دارد، نه صحت مالی شرکت‌های سهامی عام\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"financial statements\"** + **\"executives certify\"** + **\"accounting scandals\"** را با هم دیدی، جواب همیشه **SOX** است",
  "domain": 5
 },
 {
  "number": 126,
  "en": "A university that maintains student academic records, including grades and disciplinary history, must restrict access to these records and obtain consent before disclosing them to third parties. Which of the following regulations applies to this organization?",
  "fa": "یک دانشگاه که سوابق تحصیلی دانشجویان، از جمله نمرات و سوابق انضباطی را نگه‌داری می‌کند، باید دسترسی به این سوابق را محدود کند و قبل از افشای آن‌ها به اشخاص ثالث، رضایت کسب کند. کدام مقررات برای این سازمان اعمال می‌شود؟",
  "options": [
   "A) HIPAA",
   "B) FERPA (Family Educational Rights and Privacy Act)",
   "C) GDPR",
   "D) PCI-DSS"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**FERPA (Family Educational Rights and Privacy Act)**\n\nتوضیح:\nاین قانون آمریکایی به‌طور خاص برای محافظت از **حریم خصوصی سوابق تحصیلی دانش‌آموزان/دانشجویان** طراحی شده\n\nاین قانون موسسات آموزشی (مدارس، دانشگاه‌ها) را موظف می‌کند که:\nدسترسی به سوابق تحصیلی (نمرات، سوابق انضباطی، اطلاعات شخصی) را **محدود** کنند\nقبل از افشای این اطلاعات به اشخاص ثالث (مثل کارفرمایان یا حتی والدین، بعد از سن قانونی دانشجو)، **رضایت** کسب کنند\n\nاین دقیقاً همان مفهومی است که در سؤال قبل از این به‌عنوان گزینه‌ی غلط مطرح شد؛ حالا نوبت خودشه که جواب درست باشه\n\nنکته‌ی کلیدی این سؤال: کلمات **\"student academic records\"** + **\"grades and disciplinary history\"** دقیقاً به FERPA اشاره دارند، نه HIPAA (که مخصوص سلامت است) یا GDPR (که مخصوص اتحادیه‌ی اروپا و داده‌ی شخصی عمومی است)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**HIPAA**\n\nتوضیح:\nاین به اطلاعات **سلامت** اشاره دارد، نه سوابق تحصیلی\n\n**GDPR**\n\nتوضیح:\nاین به داده‌ی شخصی شهروندان اتحادیه‌ی اروپا اشاره دارد؛ این سناریو به‌طور خاص یک قانون **آمریکایی** برای سوابق تحصیلی است\n\n**PCI-DSS**\n\nتوضیح:\nاین به اطلاعات کارت پرداخت اشاره دارد، کاملاً بی‌ربط به سوابق تحصیلی\n\n🎯 **مرور نهایی و کامل پنج چارچوب قانونی/استاندارد اصلی (که الان مسلط شدی):**\n\n| چارچوب | حوزه |\n|---|---|\n| **GDPR** | داده‌ی شخصی شهروندان اتحادیه‌ی اروپا |\n| **HIPAA** | اطلاعات سلامت در آمریکا |\n| **PCI-DSS** | اطلاعات کارت پرداخت (صنعتی) |\n| **SOX** | مالی/حسابداری شرکت‌های سهامی عام |\n| **FERPA** | سوابق تحصیلی دانش‌آموزان در آمریکا |",
  "domain": 5
 },
 {
  "number": 127,
  "en": "A security team conducts an internal review to verify that the organization's own security controls are functioning as intended and meeting internal policy requirements, with the results used solely for internal improvement purposes. Which of the following BEST describes this activity?",
  "fa": "یک تیم امنیتی یک بازبینی داخلی انجام می‌دهد تا تأیید کند کنترل‌های امنیتی خود سازمان همان‌طور که در نظر گرفته شده عمل می‌کنند و الزامات سیاست داخلی را رعایت می‌کنند، که نتایج آن صرفاً برای اهداف بهبود داخلی استفاده می‌شود. کدام گزینه بهترین توصیف این فعالیت است؟",
  "options": [
   "A) External Audit",
   "B) Internal Audit",
   "C) Regulatory Audit",
   "D) Penetration Test"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Internal Audit**\n\nتوضیح:\nاین نوع بازبینی به‌طور خاص توسط **تیم خودِ سازمان** (نه یک نهاد یا شرکت خارجی) انجام می‌شود تا بررسی کند آیا کنترل‌های امنیتی موجود **به‌درستی کار می‌کنند** و با **سیاست‌های داخلی** سازمان مطابقت دارند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"internal review\"** + **\"organization's own...team\"** + **\"results used solely for internal improvement\"** دقیقاً نشان می‌دهد که این فرآیند **درون سازمانی** است و هدفش **بهبود مستمر داخلی**، نه گزارش‌دهی به یک نهاد خارجی یا قانونی\n\nتفاوت کلیدی با انواع دیگر بازرسی:\n\n**Internal Audit** = انجام‌شده توسط **خود سازمان**، برای **بهبود داخلی**\n\n**External Audit** = انجام‌شده توسط یک **شرکت یا نهاد مستقل خارجی**، اغلب برای ارائه‌ی گزارش به ذی‌نفعان خارجی (مثل سهامداران یا قانون‌گذاران)\n\n**Regulatory Audit** = یک نوع خاص از External Audit که توسط یک **نهاد قانون‌گذار/دولتی** انجام می‌شود تا انطباق با قوانین (مثل HIPAA یا GDPR که قبلاً با هم کار کردیم) تأیید شود\n\nچرا گزینه‌های دیگر رد شدند:\n\n**External Audit**\n\nتوضیح:\nاین توسط یک نهاد **مستقل و خارج از سازمان** انجام می‌شود؛ این سؤال صراحتاً به \"تیم خودِ سازمان\" اشاره دارد\n\n**Regulatory Audit**\n\nتوضیح:\nاین به‌طور خاص برای بررسی **انطباق با قوانین/مقررات** توسط یک نهاد قانونی خارجی انجام می‌شود، نه برای بهبود داخلی توسط خود سازمان\n\n**Penetration Test**\n\nتوضیح:\nاین یک **تست فنی فعال** برای یافتن آسیب‌پذیری از طریق شبیه‌سازی حمله است (که قبلاً با هم کار کردیم)، نه یک بازبینی کلی از انطباق با سیاست‌های داخلی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"conducted by the organization itself\"** + **\"for internal improvement\"** را با هم دیدی، جواب همیشه **Internal Audit** است",
  "domain": 5
 },
 {
  "number": 128,
  "en": "A company hires an independent, certified accounting firm to review its financial controls and provide an objective, formal report to its shareholders and regulators, since the company cannot self-certify its own compliance for this purpose. Which of the following BEST describes this activity?",
  "fa": "یک شرکت یک موسسه‌ی حسابداری مستقل و دارای صلاحیت را استخدام می‌کند تا کنترل‌های مالی‌اش را بررسی کند و یک گزارش رسمی و عینی به سهامداران و قانون‌گذاران ارائه دهد، چون شرکت نمی‌تواند برای این هدف انطباق خودش را خودش تأیید کند. کدام گزینه بهترین توصیف این فعالیت است؟",
  "options": [
   "A) Internal Audit",
   "B) External Audit",
   "C) Vulnerability Scan",
   "D) Tabletop Exercise"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**External Audit**\n\nتوضیح:\nاین نوع بازرسی توسط یک **نهاد مستقل و خارج از سازمان** (در این مورد: یک موسسه‌ی حسابداری مستقل) انجام می‌شود\n\nنکته‌ی کلیدی این سؤال: عبارت **\"independent, certified...firm\"** + **\"objective, formal report to...shareholders and regulators\"** + **\"cannot self-certify\"** دقیقاً نشان می‌دهد که چرا External Audit ضروری است: برای **اعتبار و بی‌طرفی**، باید یک طرف **مستقل** (نه خود سازمان) نتیجه را تأیید کند، چون سازمان نمی‌تواند به‌طور بی‌طرفانه خودش را ارزیابی کند\n\nاین دقیقاً برخلاف Internal Audit (سؤال قبلی) است که توسط **خود سازمان** و فقط برای **بهبود داخلی** انجام می‌شد، نه برای ارائه‌ی گزارش رسمی به ذی‌نفعان خارجی مثل سهامداران\n\n🎯 **مرور نهایی این دو مفهوم (که الان کاملاً مسلط شدی):**\n\n| ویژگی | Internal Audit | External Audit |\n|---|---|---|\n| انجام‌دهنده | تیم خودِ سازمان | نهاد مستقل خارجی |\n| هدف | بهبود داخلی | گزارش رسمی به ذی‌نفعان خارجی |\n| مخاطب نتیجه | مدیریت داخلی | سهامداران، قانون‌گذاران |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Internal Audit**\n\nتوضیح:\nاین توسط خودِ سازمان انجام می‌شود، نه یک موسسه‌ی مستقل خارجی؛ این سؤال صراحتاً به استقلال و بی‌طرفی نیاز دارد\n\n**Vulnerability Scan**\n\nتوضیح:\nاین یک ابزار فنی برای یافتن آسیب‌پذیری‌های نرم‌افزاری است، نه بررسی کنترل‌های مالی توسط یک نهاد مستقل\n\n**Tabletop Exercise**\n\nتوضیح:\nاین یک تمرین بحث‌محور برای آمادگی تیم واکنش به حادثه است، کاملاً بی‌ربط به بازرسی مالی مستقل\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"independent third-party\"** + **\"objective report to shareholders/regulators\"** را با هم دیدی، جواب همیشه **External Audit** است",
  "domain": 5
 },
 {
  "number": 129,
  "en": "A company's senior leadership establishes high-level statements that define the organization's overall security objectives and expectations, such as \"All employee data must be encrypted at rest,\" which then guide the creation of more detailed procedures. Which of the following BEST describes these high-level statements?",
  "fa": "مدیریت ارشد یک شرکت بیانیه‌های کلی‌ای را تدوین می‌کند که اهداف و انتظارات کلی امنیتی سازمان را تعریف می‌کنند، مثل \"تمام داده‌های کارمندان باید در حالت سکون رمزنگاری شوند\"، که سپس ایجاد رویه‌های دقیق‌تر را هدایت می‌کنند. کدام گزینه بهترین توصیف این بیانیه‌های سطح‌بالا است؟",
  "options": [
   "A) Procedures",
   "B) Standards",
   "C) Policies",
   "D) Guidelines"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Policies** هست، نه B. این یک مفهوم جدید است که هنوز با هم کار نکرده بودیم؛ بگذار سلسله‌مراتب کامل این چهار سند را برات توضیح بدم.\n\n## سلسله‌مراتب اسناد حاکمیتی (Governance Documents)\n\n**۱. Policy (سیاست)**\nسطح: **بالاترین و کلی‌ترین**\nمحتوا: بیانیه‌های **سطح‌بالا** که توسط **مدیریت ارشد** تدوین می‌شوند و اهداف کلی را تعیین می‌کنند (مثل \"تمام داده‌ها باید رمزنگاری شوند\")\nمثال: \"All employee data must be encrypted at rest\"\n\n**۲. Standards (استانداردها)**\nسطح: **پایین‌تر از Policy**\nمحتوا: الزامات **فنی و دقیق‌تر** که Policy را اجرایی می‌کنند (مثل \"باید از AES-256 برای رمزنگاری استفاده شود\")\n\n**۳. Procedures (رویه‌ها)**\nسطح: **پایین‌تر از Standards**\nمحتوا: دستورالعمل‌های **قدم‌به‌قدم** برای اجرای یک Standard (مثل \"برای فعال کردن رمزنگاری، این مراحل را دنبال کنید: ۱، ۲، ۳...\")\n\n**۴. Guidelines (راهنماها)**\nسطح: **توصیه‌ای، نه الزام‌آور**\nمحتوا: پیشنهادات و بهترین شیوه‌ها (Best Practices) که **اختیاری** هستند، نه اجباری\n\nنکته‌ی کلیدی این سؤال که چرا Policy درست بود نه Standard: عبارت **\"senior leadership\"** + **\"high-level statements\"** + **\"overall security objectives\"** دقیقاً به **Policy** اشاره دارد؛ این بیانیه‌ها **خودشان** Standards دقیق‌تر را **هدایت** می‌کنند، یعنی این سند در **بالاترین سطح** سلسله‌مراتب قرار دارد، نه در سطح Standard (که خودش از Policy مشتق می‌شود)\n\n🎯 تصویر ذهنی برای حفظ توالی:\n**Policy** (چرا/چه چیزی - کلی) → **Standard** (دقیقاً چه چیزی - فنی) → **Procedure** (چگونه - قدم‌به‌قدم) → **Guideline** (پیشنهاد - اختیاری)\n\nاین یک مفهوم جدید بود، طبیعیه که اشتباه بزنی. بیا یک سؤال دیگه روی این سلسله‌مراتب کار کنیم تا کاملاً جا بیفته.",
  "domain": 5
 },
 {
  "number": 130,
  "en": "Following the company's policy requiring data encryption, the IT department creates a specific technical requirement stating that all encryption must use AES-256 with a minimum key length of 256 bits. Which of the following BEST describes this technical requirement?",
  "fa": "پیرو سیاست شرکت که الزام به رمزنگاری داده می‌کند، بخش IT یک الزام فنی خاص ایجاد می‌کند که بیان می‌کند تمام رمزنگاری باید با AES-256 و حداقل طول کلید ۲۵۶ بیت باشد. کدام گزینه بهترین توصیف این الزام فنی است؟",
  "options": [
   "A) Policy",
   "B) Standard",
   "C) Guideline",
   "D) Procedure"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Standard**\n\nتوضیح:\nاین دقیقاً سطح **دوم** سلسله‌مراتب است که در سؤال قبلی با هم یاد گرفتیم. نکته‌ی کلیدی این سؤال: عبارت **\"Following the company's policy\"** + **\"specific technical requirement\"** + **\"AES-256 with a minimum key length of 256 bits\"** دقیقاً نشان می‌دهد که:\n\n**Policy** (سؤال قبلی) گفت: \"داده باید رمزنگاری شود\" (کلی)\n**Standard** (این سؤال) مشخص می‌کند: **دقیقاً کدام الگوریتم و چه مشخصات فنی** باید استفاده شود (جزئیات فنی دقیق)\n\nاین رابطه‌ی مستقیم بین این دو سند را نشان می‌دهد: **Standard همیشه از یک Policy مشتق می‌شود** تا آن را قابل‌اجرا و دقیق کند\n\n🎯 **مرور کامل و نهایی سلسله‌مراتب (با مثال‌های پیوسته که الان باید کاملاً جا افتاده باشه):**\n\n**Policy** = \"تمام داده‌ها باید رمزنگاری شوند\" (چرا/چه چیزی - کلی)\n↓\n**Standard** = \"باید از AES-256 با کلید ۲۵۶ بیتی استفاده شود\" (دقیقاً چه چیزی - فنی)\n↓\n**Procedure** = \"برای فعال‌سازی AES-256 روی سرور، این ۵ مرحله را دنبال کنید\" (چگونه - قدم‌به‌قدم)\n↓\n**Guideline** = \"پیشنهاد می‌شود کلیدها هر ۹۰ روز چرخش داده شوند\" (توصیه - اختیاری)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Policy**\n\nتوضیح:\nاین بیانیه‌ی **کلی و سطح‌بالا** است (که در سؤال قبلی دیدیم)؛ این سؤال یک **جزئیات فنی دقیق** (نوع الگوریتم، طول کلید) را توصیف می‌کند، نه یک هدف کلی\n\n**Guideline**\n\nتوضیح:\nاین **اختیاری و توصیه‌ای** است؛ اما این سؤال یک **الزام (Requirement)** را توصیف می‌کند، نه یک پیشنهاد قابل‌چشم‌پوشی\n\n**Procedure**\n\nتوضیح:\nاین **مراحل قدم‌به‌قدم اجرا** را نشان می‌دهد (مثل \"این کلیک‌ها را انجام بده\")؛ اما این سؤال فقط **مشخصات فنی** (AES-256, 256-bit) را تعیین می‌کند، نه مراحل اجرایی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"specific technical requirement\"** + **\"specific algorithm/specification\"** را دیدی، جواب همیشه **Standard** است",
  "domain": 5
 },
 {
  "number": 131,
  "en": "To implement the AES-256 encryption standard, the IT department creates a detailed, step-by-step document instructing administrators exactly how to configure the encryption settings on each type of server, including specific menu options to click and commands to run. Which of the following BEST describes this document?",
  "fa": "برای پیاده‌سازی استاندارد رمزنگاری AES-256، بخش IT یک سند مفصل و قدم‌به‌قدم ایجاد می‌کند که دقیقاً به مدیران سیستم می‌گوید چگونه تنظیمات رمزنگاری را روی هر نوع سرور پیکربندی کنند، شامل گزینه‌های منوی خاص برای کلیک کردن و دستورات برای اجرا کردن. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) Policy",
   "B) Standard",
   "C) Procedure",
   "D) Guideline"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Procedure**\n\nتوضیح:\nاین سند دقیقاً سطح **سوم** سلسله‌مراتب است: دستورالعمل **قدم‌به‌قدم و عملی** برای اجرای یک Standard\n\nنکته‌ی کلیدی این سؤال: عبارت **\"detailed, step-by-step document\"** + **\"exactly how to configure\"** + **\"specific menu options to click and commands to run\"** دقیقاً تعریف Procedure است؛ این سند به شخص می‌گوید **دقیقاً چه کاری، با چه ترتیب** انجام دهد، نه فقط چه مشخصات فنی باید رعایت شود (که آن Standard بود)\n\n🎯 **تکمیل کامل سلسله‌مراتب با مثال پیوسته (که الان قطعی یاد گرفتی):**\n\n**Policy** = \"تمام داده‌ها باید رمزنگاری شوند\" (هدف کلی)\n↓\n**Standard** = \"باید از AES-256 با کلید ۲۵۶ بیتی استفاده شود\" (مشخصات فنی دقیق)\n↓\n**Procedure** (این سؤال) = \"برای فعال‌سازی AES-256: ۱) به منوی Settings برو ۲) Encryption را انتخاب کن ۳) این دستور را اجرا کن...\" (مراحل دقیق و عملی)\n↓\n**Guideline** = \"پیشنهاد می‌شود کلیدها هر ۹۰ روز چرخش داده شوند\" (توصیه‌ی اختیاری)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Policy**\n\nتوضیح:\nاین یک بیانیه‌ی کلی سطح‌بالا از مدیریت ارشد است، نه دستورالعمل دقیق فنی برای پیکربندی\n\n**Standard**\n\nتوضیح:\nاین فقط **مشخصات فنی** (مثل نوع الگوریتم) را تعیین می‌کند، نه **مراحل دقیق اجرا** (مثل کدام منو را کلیک کنیم)؛ این سؤال دقیقاً مرحله‌ی **اجرای عملی** آن Standard را توصیف می‌کند\n\n**Guideline**\n\nتوضیح:\nاین **توصیه‌ای و اختیاری** است؛ اما این سند **الزام‌آور و دقیق** است (باید دقیقاً این مراحل دنبال شوند)\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"step-by-step\"** + **\"exactly how to\"** + **\"specific commands/clicks\"** را با هم دیدی، جواب همیشه **Procedure** است",
  "domain": 5
 },
 {
  "number": 132,
  "en": "The IT department publishes a document suggesting that employees consider using a password manager and recommending they change their personal email passwords periodically, though employees are not required to follow these suggestions. Which of the following BEST describes this document?",
  "fa": "بخش IT سندی منتشر می‌کند که پیشنهاد می‌کند کارمندان استفاده از یک مدیر رمز عبور را در نظر بگیرند و توصیه می‌کند رمزهای عبور ایمیل شخصی‌شان را به‌صورت دوره‌ای تغییر دهند، هرچند کارمندان موظف به پیروی از این پیشنهادات نیستند. کدام گزینه بهترین توصیف این سند است؟",
  "options": [
   "A) Policy",
   "B) Standard",
   "C) Procedure",
   "D) Guideline"
  ],
  "correct": "D",
  "explanation": "درسته! ✅ گزینه D\n\n**Guideline**\n\nتوضیح:\nاین سند دقیقاً سطح **چهارم و آخر** سلسله‌مراتب است: پیشنهادات و **بهترین شیوه‌ها (Best Practices)** که **اختیاری** هستند، نه الزام‌آور\n\nنکته‌ی کلیدی این سؤال: عبارت **\"suggesting\"** + **\"recommending\"** + **\"employees are not required to follow\"** دقیقاً ویژگی متمایزکننده‌ی Guideline را نشان می‌دهد: **عدم الزام‌آوری**\n\nاین دقیقاً تفاوتش با سه سند دیگر است که همگی **الزام‌آور (Mandatory)** بودند (Policy، Standard، Procedure)؛ Guideline تنها سندی است که کارمند می‌تواند **آن را رعایت نکند** بدون نقض یک قانون رسمی\n\n🎉 **مرور کامل و نهایی هر چهار سند با مثال پیوسته (که الان به‌طور کامل و قطعی یاد گرفتی):**\n\n| سند | سطح الزام | مثال |\n|---|---|---|\n| **Policy** | الزام‌آور (کلی) | \"تمام داده‌ها باید رمزنگاری شوند\" |\n| **Standard** | الزام‌آور (فنی دقیق) | \"باید AES-256 با کلید ۲۵۶ بیتی استفاده شود\" |\n| **Procedure** | الزام‌آور (قدم‌به‌قدم) | \"این ۵ مرحله را برای فعال‌سازی دنبال کنید\" |\n| **Guideline** | **اختیاری/توصیه‌ای** | \"پیشنهاد می‌شود از مدیر رمز عبور استفاده کنید\" |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Policy**\n\nتوضیح:\nاین یک هدف **الزام‌آور** سطح‌بالا از مدیریت ارشد است، نه یک پیشنهاد اختیاری\n\n**Standard**\n\nتوضیح:\nاین یک الزام **فنی و دقیق** است، نه یک پیشنهاد قابل‌چشم‌پوشی\n\n**Procedure**\n\nتوضیح:\nاین مراحل **الزام‌آور و دقیق** اجرا هستند، نه پیشنهادات اختیاری\n\nنکته‌ی کلیدی برای امتحان (تثبیت نهایی):\nهر زمان عبارت **\"suggest/recommend\"** + **\"not required/optional/best practice\"** را با هم دیدی، جواب همیشه **Guideline** است",
  "domain": 5
 },
 {
  "number": 133,
  "en": "A company designates a specific role responsible for ensuring data is properly classified, tagged with correct metadata, and maintained at a consistent quality standard across the organization, focusing on data accuracy and proper categorization rather than technical security implementation. Which of the following roles BEST describes this position?",
  "fa": "یک شرکت نقش خاصی را تعیین می‌کند که مسئول اطمینان از این است که داده به‌درستی دسته‌بندی شده، با متادیتای صحیح برچسب‌گذاری شده، و در سراسر سازمان با کیفیت یکسانی نگه‌داری می‌شود، با تمرکز بر دقت داده و دسته‌بندی صحیح، نه پیاده‌سازی فنی امنیت. کدام نقش بهترین توصیف این موقعیت است؟",
  "options": [
   "A) Data Owner",
   "B) Data Custodian",
   "C) Data Steward",
   "D) Data Processor"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Data Steward**\n\nتوضیح:\nاین نقش به‌طور خاص بر **کیفیت، دسته‌بندی، و استانداردسازی داده** تمرکز دارد، نه بر تصمیم‌گیری استراتژیک (Data Owner) یا اجرای فنی امنیت (Data Custodian)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"properly classified\"** + **\"correct metadata\"** + **\"consistent quality standard\"** + **\"data accuracy and proper categorization rather than technical security implementation\"** دقیقاً تعریف Data Steward را نشان می‌دهد\n\n🎉 **مرور کامل و نهایی چهار نقش مدیریت داده (که الان به‌طور کامل و قطعی یاد گرفتی):**\n\n| نقش | تمرکز اصلی | مثال فعالیت |\n|---|---|---|\n| **Data Owner** | تصمیم‌گیری استراتژیک، مسئولیت نهایی | تعیین می‌کند چه کسی دسترسی دارد |\n| **Data Custodian** | اجرای فنی روزمره | بکاپ‌گیری، پیاده‌سازی کنترل‌های امنیتی |\n| **Data Steward** | کیفیت و دسته‌بندی داده | برچسب‌گذاری صحیح، استانداردسازی متادیتا |\n| **Data Processor** | پردازش از طرف Owner (اغلب شخص ثالث) | پردازش داده طبق دستور Owner (در چارچوب GDPR) |\n\n🎯 تصویر ذهنی نهایی برای حفظ همیشگی این چهار نقش:\n**Owner** = تصمیم می‌گیرد **چه باید بشود** (مدیر)\n**Custodian** = **اجرا می‌کند** امنیت فنی (نگهبان)\n**Steward** = مطمئن می‌شود داده **درست و باکیفیت** است (سرپرست کیفیت)\n**Processor** = داده را **از طرف دیگری پردازش** می‌کند (پردازشگر third-party)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Data Owner**\n\nتوضیح:\nاین به تصمیم‌گیری استراتژیک اشاره دارد، نه کار عملیاتی روی کیفیت و دسته‌بندی داده\n\n**Data Custodian**\n\nتوضیح:\nاین به اجرای **فنی امنیت** (مثل بکاپ‌گیری) اشاره دارد؛ این سؤال صراحتاً می‌گوید **\"rather than technical security implementation\"**\n\n**Data Processor**\n\nتوضیح:\nاین به پردازش داده از طرف Owner اشاره دارد (اغلب شخص ثالث)، نه به کیفیت و دسته‌بندی داخلی",
  "domain": 5
 },
 {
  "number": 134,
  "en": "A company creates different categories for its data, such as \"Public,\" \"Internal,\" \"Confidential,\" and \"Restricted,\" to determine the appropriate level of security controls each type of data requires. Which of the following BEST describes this practice?",
  "fa": "یک شرکت دسته‌های مختلفی برای داده‌هایش ایجاد می‌کند، مثل \"عمومی\"، \"داخلی\"، \"محرمانه\"، و \"محدود\"، تا سطح مناسب کنترل‌های امنیتی که هر نوع داده نیاز دارد را تعیین کند. کدام گزینه بهترین توصیف این رویه است؟",
  "options": [
   "A) Data Masking",
   "B) Data Classification",
   "C) Data Minimization",
   "D) Data Sovereignty"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Data Classification**\n\nتوضیح:\nاین رویه به‌طور خاص به **دسته‌بندی داده بر اساس سطح حساسیت** اشاره دارد، تا سازمان بتواند **سطح مناسب کنترل‌های امنیتی** را برای هر دسته تعیین کند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"Public,\" \"Internal,\" \"Confidential,\" and \"Restricted\"** دقیقاً نمونه‌ای از سطوح رایج طبقه‌بندی داده است؛ هرچه سطح حساسیت بالاتر برود (از Public به Restricted)، کنترل‌های امنیتی سخت‌گیرانه‌تری (مثل رمزنگاری قوی‌تر، محدودیت دسترسی بیشتر) لازم می‌شود\n\nاین مفهوم پایه‌ی بسیاری از تصمیمات امنیتی دیگر است (مثل تصمیم‌گیری درباره‌ی اینکه کدام داده باید با DLP محافظت شود، یا چه سطح رمزنگاری لازم است)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Data Masking**\n\nتوضیح:\nاین یک **تکنیک** برای پنهان کردن بخش‌هایی از داده‌ی حساس است (مثل نمایش فقط ۴ رقم آخر شماره‌کارت)، نه دسته‌بندی کلی داده بر اساس حساسیت\n\n**Data Minimization**\n\nتوضیح:\nاین اصلی است که می‌گوید سازمان باید فقط **حداقل داده‌ی لازم** را جمع‌آوری کند (مرتبط با GDPR)، نه دسته‌بندی داده‌های موجود\n\n**Data Sovereignty**\n\nتوضیح:\nاین به این مفهوم اشاره دارد که داده باید تحت **قوانین کشوری که در آن ذخیره شده** باشد (مثلاً داده‌ی اروپایی باید طبق قوانین اروپا مدیریت شود)، نه دسته‌بندی بر اساس سطح حساسیت\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"Public/Internal/Confidential/Restricted\"** یا **\"categorize data by sensitivity level\"** را دیدی، جواب همیشه **Data Classification** است",
  "domain": 5
 },
 {
  "number": 135,
  "en": "A company wants to allow developers to test a new application using realistic-looking customer data without exposing actual sensitive information, so they replace real names and credit card numbers with fictitious but realistically formatted values. Which of the following BEST describes this technique?",
  "fa": "یک شرکت می‌خواهد به برنامه‌نویسان اجازه دهد یک اپلیکیشن جدید را با داده‌های مشتری واقعی‌نما تست کنند، بدون افشای اطلاعات حساس واقعی، پس نام‌های واقعی و شماره‌کارت‌های اعتباری را با مقادیر ساختگی اما با فرمت واقعی جایگزین می‌کنند. کدام گزینه بهترین توصیف این تکنیک است؟",
  "options": [
   "A) Data Classification",
   "B) Data Masking",
   "C) Tokenization",
   "D) Encryption"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Data Masking**\n\nتوضیح:\nاین تکنیک به‌طور خاص برای جایگزینی داده‌ی **واقعی و حساس** با مقادیر **ساختگی اما با ظاهر و فرمت واقعی** استفاده می‌شود، معمولاً برای محیط‌های **تست یا توسعه (Non-Production)**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"realistic-looking customer data\"** + **\"replace real names and credit card numbers with fictitious but realistically formatted values\"** دقیقاً تعریف Data Masking است؛ هدف این است که برنامه‌نویسان بتوانند با داده‌ای کار کنند که **شبیه داده‌ی واقعی** است (همان فرمت، طول، ساختار)، اما **هیچ ارتباطی با هویت واقعی مشتری** ندارد\n\nاین تکنیک معمولاً **غیرقابل‌برگشت** است (Static Data Masking)؛ یعنی نمی‌توان داده‌ی ماسک‌شده را به داده‌ی اصلی برگرداند، که این برای محیط تست کاملاً مناسب است (چون نیازی به بازگشت به داده‌ی اصلی نیست)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Data Classification**\n\nتوضیح:\nاین به دسته‌بندی داده بر اساس سطح حساسیت اشاره دارد (که در سؤال قبلی کار کردیم)، نه به تکنیک جایگزینی داده‌ی واقعی با داده‌ی ساختگی\n\n**Tokenization**\n\nتوضیح:\nاین هم داده‌ی حساس را با یک مقدار جایگزین می‌کند، اما تفاوت کلیدی این است که Tokenization معمولاً **قابل‌برگشت** است (یک Token به یک مقدار اصلی نگاشت می‌شود از طریق یک جدول مرجع امن، که اغلب در پردازش پرداخت واقعی استفاده می‌شود)، در حالی که این سؤال به‌طور خاص محیط **تست** را توصیف می‌کند که هدفش صرفاً شبیه‌سازی است، نه نگاشت‌پذیری به داده‌ی اصلی\n\n**Encryption**\n\nتوضیح:\nاین داده را به یک فرمت **غیرقابل‌خوانش** (نه «واقعی‌نما») تبدیل می‌کند که با کلید قابل‌بازگشت است؛ این سؤال به‌طور خاص می‌خواهد داده **شبیه داده‌ی واقعی** به‌نظر برسد، نه کاملاً رمزنگاری‌شده و نامفهوم\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"testing/development environment\"** + **\"fictitious but realistic-looking data\"** را با هم دیدی، جواب همیشه **Data Masking** است",
  "domain": 3
 },
 {
  "number": 136,
  "en": "A retail company processes credit card transactions and wants to replace the actual credit card number with a randomly generated substitute value that has no mathematical relationship to the original number, while securely storing the mapping between the two in a separate, highly protected vault. Which of the following BEST describes this technique?",
  "fa": "یک شرکت خرده‌فروشی تراکنش‌های کارت اعتباری را پردازش می‌کند و می‌خواهد شماره‌ی واقعی کارت اعتباری را با یک مقدار جایگزین تصادفی‌تولید‌شده که هیچ رابطه‌ی ریاضی با عدد اصلی ندارد، جایگزین کند، در حالی که نگاشت بین این دو را به‌صورت امن در یک Vault جداگانه و بسیار محافظت‌شده ذخیره می‌کند. کدام گزینه بهترین توصیف این تکنیک است؟",
  "options": [
   "A) Data Masking",
   "B) Tokenization",
   "C) Hashing",
   "D) Encryption"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Tokenization**\n\nتوضیح:\nاین تکنیک دقیقاً ویژگی کلیدی‌ای را نشان می‌دهد که در سؤال قبلی به‌عنوان تفاوت با Data Masking مطرح کردیم: **قابلیت بازگشت (Reversibility) از طریق یک نگاشت ذخیره‌شده**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"randomly generated substitute value that has no mathematical relationship\"** + **\"securely storing the mapping...in a separate, highly protected vault\"** دقیقاً تعریف Tokenization است\n\nاین تکنیک به‌طور گسترده در **پردازش پرداخت واقعی** (نه فقط محیط تست) استفاده می‌شود: شماره‌ی کارت واقعی با یک **Token** جایگزین می‌شود که در سیستم‌های روزمره گردش می‌کند (مثلاً برای پردازش‌های بعدی یا بازپرداخت)، در حالی که شماره‌ی واقعی کارت فقط در یک **Token Vault** بسیار امن نگه‌داری می‌شود\n\nنکته‌ی کلیدی فنی: Token **هیچ رابطه‌ی ریاضی یا قابل‌محاسبه** با داده‌ی اصلی ندارد (برخلاف رمزنگاری که از یک الگوریتم ریاضی قابل‌برگشت با کلید استفاده می‌کند)؛ تنها راه بازگرداندن به مقدار اصلی، مراجعه به همان **جدول نگاشت در Vault** است\n\nمقایسه‌ی نهایی با مفاهیم مرتبط:\n\n**Data Masking** = جایگزینی **غیرقابل‌برگشت** برای محیط **تست**\n\n**Tokenization** = جایگزینی **قابل‌برگشت از طریق Vault** برای استفاده‌ی **عملیاتی واقعی** (مثل پردازش پرداخت)\n\n**Encryption** = تبدیل ریاضی **قابل‌برگشت با کلید** (نه نگاشت در یک Vault جداگانه)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Data Masking**\n\nتوضیح:\nاین معمولاً **غیرقابل‌برگشت** است و برای محیط تست استفاده می‌شود، نه پردازش پرداخت واقعی با نیاز به بازگشت‌پذیری\n\n**Hashing**\n\nتوضیح:\nاین یک‌طرفه است و اصلاً قابل بازگشت به مقدار اصلی نیست؛ این سؤال صراحتاً نیاز به **نگاشت قابل‌بازگشت** را توصیف می‌کند\n\n**Encryption**\n\nتوضیح:\nاین از یک **رابطه‌ی ریاضی** (الگوریتم + کلید) برای رمزگذاری/رمزگشایی استفاده می‌کند؛ این سؤال صراحتاً می‌گوید مقدار جدید **\"no mathematical relationship\"** با اصلی دارد، که این برخلاف ماهیت Encryption است\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"no mathematical relationship\"** + **\"mapping stored in a vault\"** را با هم دیدی، جواب همیشه **Tokenization** است",
  "domain": 3
 },
 {
  "number": 137,
  "en": "A customer service representative needs to verify a customer's identity over the phone but should not see the customer's full credit card number. The system displays the card number as \"XXXX-XXXX-XXXX-1234,\" showing only the last four digits while hiding the rest. Which of the following BEST describes this technique?",
  "fa": "یک نماینده‌ی خدمات مشتری باید هویت یک مشتری را پشت تلفن تأیید کند اما نباید شماره‌ی کامل کارت اعتباری مشتری را ببیند. سیستم شماره‌ی کارت را به‌صورت \"XXXX-XXXX-XXXX-1234\" نمایش می‌دهد، که فقط چهار رقم آخر را نشان می‌دهد و باقی را پنهان می‌کند. کدام گزینه بهترین توصیف این تکنیک است؟",
  "options": [
   "A) Tokenization",
   "B) Data Masking",
   "C) Hashing",
   "D) Encryption"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Data Masking**\n\nتوضیح:\nاین نمونه‌ای دیگر از Data Masking است، اما این بار به شکل **Dynamic Masking** (پنهان‌سازی پویا در زمان نمایش)، برخلاف سؤال قبلی که Static Masking (برای محیط تست) بود\n\nنکته‌ی کلیدی این سؤال: عبارت **\"showing only the last four digits while hiding the rest\"** دقیقاً نشان‌دهنده‌ی هدف اصلی Data Masking است: **پنهان کردن بخشی از داده‌ی حساس** در حین نمایش، تا کاربر (در این مورد: نماینده‌ی خدمات مشتری) بتواند کار خودش (تأیید هویت با ۴ رقم آخر) را انجام دهد، بدون اینکه به **کل** اطلاعات حساس دسترسی پیدا کند\n\nاین یک مثال بسیار رایج و عملی از Data Masking است که در صفحات وب و سیستم‌های CRM/خدمات مشتری در سراسر جهان استفاده می‌شود (Least Privilege در عمل، که قبلاً با هم کار کردیم!)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Tokenization**\n\nتوضیح:\nاین نیاز به یک **Token جداگانه و کاملاً متفاوت** دارد که در Vault نگاشت می‌شود (مثل سؤال قبلی)؛ اما در این سؤال، فقط **بخشی از همان عدد اصلی** پنهان شده (نه جایگزینی با یک مقدار کاملاً متفاوت در یک سیستم دیگر)\n\n**Hashing**\n\nتوضیح:\nاین یک مقدار **کاملاً متفاوت و یک‌طرفه** تولید می‌کند (نه نمایش بخشی از عدد اصلی با کاراکترهای X)\n\n**Encryption**\n\nتوضیح:\nاین کل داده را به یک فرمت رمزنگاری‌شده و نامفهوم تبدیل می‌کند، نه نمایش بخشی قابل‌خوانش از داده‌ی اصلی (مثل ۴ رقم آخر)\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"show only part of the data (like last 4 digits)\"** + **\"hide the rest with X's\"** را با هم دیدی، جواب همیشه **Data Masking** است",
  "domain": 3
 },
 {
  "number": 138,
  "en": "A company operating in multiple countries must ensure that customer data collected from users in a specific country remains stored within that country's physical borders and is governed by that country's specific data protection laws, rather than being freely transferred to servers in other nations. Which of the following concepts does this represent?",
  "fa": "یک شرکت که در چندین کشور فعالیت می‌کند باید مطمئن شود که داده‌ی مشتری جمع‌آوری‌شده از کاربران یک کشور خاص، درون مرزهای فیزیکی همان کشور ذخیره می‌شود و تحت قوانین حفاظت داده‌ی خاص همان کشور قرار می‌گیرد، نه اینکه آزادانه به سرورهای کشورهای دیگر منتقل شود. کدام مفهوم این موضوع را نشان می‌دهد؟",
  "options": [
   "A) Data Classification",
   "B) Data Sovereignty",
   "C) Data Minimization",
   "D) Data Masking"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Data Sovereignty**\n\nتوضیح:\nاین مفهوم به‌طور خاص اشاره دارد به این که داده باید تحت **قوانین کشوری که در آن جمع‌آوری یا ذخیره شده** باشد، و معمولاً باید **در همان مرزهای جغرافیایی** باقی بماند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"remains stored within that country's physical borders\"** + **\"governed by that country's specific data protection laws\"** دقیقاً تعریف Data Sovereignty است\n\nاین مفهوم به‌خصوص برای شرکت‌های **چندملیتی** که از سرویس‌های **Cloud** استفاده می‌کنند بسیار مهم است؛ مثلاً یک شرکت ممکن است مجبور باشد داده‌ی کاربران آلمانی را روی سرورهایی **در داخل آلمان یا اتحادیه‌ی اروپا** نگه‌دارد (نه در آمریکا)، تا با قوانین محلی (مثل GDPR که قبلاً با هم کار کردیم) مطابقت داشته باشد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Data Classification**\n\nتوضیح:\nاین به دسته‌بندی داده بر اساس **سطح حساسیت** اشاره دارد (مثل Public/Confidential)، نه به محل جغرافیایی ذخیره‌سازی داده\n\n**Data Minimization**\n\nتوضیح:\nاین اصلی است که می‌گوید سازمان باید فقط **حداقل داده‌ی لازم** را جمع‌آوری کند، نه به محل ذخیره‌سازی جغرافیایی داده\n\n**Data Masking**\n\nتوضیح:\nاین تکنیک پنهان کردن بخشی از داده‌ی حساس برای نمایش است، کاملاً بی‌ربط به محل جغرافیایی ذخیره‌سازی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"data must remain within a country's borders\"** + **\"governed by local laws\"** را با هم دیدی، جواب همیشه **Data Sovereignty** است",
  "domain": 5
 },
 {
  "number": 139,
  "en": "A security team conducts a structured exercise where they actively search for signs of undetected threats already present within the network, rather than waiting for automated alerts to identify a breach. Which of the following BEST describes this proactive activity?",
  "fa": "یک تیم امنیتی یک تمرین ساختاریافته انجام می‌دهد که در آن به‌طور فعال به‌دنبال نشانه‌های تهدیدهای شناسایی‌نشده‌ای که از قبل در شبکه حضور دارند می‌گردند، به‌جای اینکه منتظر هشدارهای خودکار برای شناسایی یک نشت باشند. کدام گزینه بهترین توصیف این فعالیت پیشگیرانه است؟",
  "options": [
   "A) Vulnerability Scanning",
   "B) Threat Hunting",
   "C) Penetration Testing",
   "D) Incident Response"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Threat Hunting**\n\nتوضیح:\nاین فعالیت به‌طور خاص به جستجوی **فعال و دستی** برای تهدیداتی اشاره دارد که **از قبل** ممکن است در شبکه حضور داشته باشند اما توسط ابزارهای خودکار (مثل آنتی‌ویروس یا SIEM) هنوز شناسایی نشده‌اند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"actively search for signs of undetected threats already present\"** + **\"rather than waiting for automated alerts\"** دقیقاً تفاوت کلیدی این فعالیت را نشان می‌دهد\n\nتفاوت کلیدی با رویکردهای واکنشی (Reactive):\nرویکردهای سنتی (مثل SIEM یا IDS) **منتظر** یک هشدار یا الگوی مشخص هستند تا واکنش نشان دهند (Reactive)\n**Threat Hunting** یک رویکرد **پیشگیرانه (Proactive)** است: تحلیلگران با فرضیه‌های مبتنی بر اطلاعات تهدید (Threat Intelligence) و چارچوب‌هایی مثل **MITRE ATT&CK** (که قبلاً با هم کار کردیم)، فعالانه به‌دنبال نشانه‌های ظریف یک حمله (مثل APT که ممکن است هفته‌ها بدون شناسایی مخفی مانده باشد) می‌گردند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Vulnerability Scanning**\n\nتوضیح:\nاین به جستجوی **آسیب‌پذیری‌های نرم‌افزاری شناخته‌شده** اشاره دارد (مثل نسخه‌ی قدیمی یک نرم‌افزار)، نه جستجوی فعال برای **مهاجمان واقعی که از قبل وارد شده‌اند**\n\n**Penetration Testing**\n\nتوضیح:\nاین یک **حمله‌ی شبیه‌سازی‌شده** برای یافتن آسیب‌پذیری‌هاست (تست فعال نفوذ به سیستم)، نه جستجو برای تهدیداتی که از قبل و به‌صورت واقعی در شبکه مخفی شده‌اند\n\n**Incident Response**\n\nتوضیح:\nاین یک فرآیند **واکنشی** است که **پس از شناسایی** یک حادثه‌ی تأییدشده فعال می‌شود (که قبلاً با هم کار کردیم)، نه جستجوی فعال و پیشگیرانه قبل از هر گونه هشدار\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"proactively search for undetected/hidden threats\"** را دیدی (نه واکنش به هشدار)، جواب همیشه **Threat Hunting** است",
  "domain": 4
 },
 {
  "number": 140,
  "en": "A company subscribes to a service that provides regularly updated information about emerging malware signatures, attacker tactics, and known malicious IP addresses, which the security team uses to proactively adjust their defenses before an attack occurs. Which of the following BEST describes this service?",
  "fa": "یک شرکت در یک سرویس عضو می‌شود که اطلاعات به‌طور منظم به‌روزرسانی‌شده درباره‌ی امضاهای بدافزار نوظهور، تاکتیک‌های مهاجمان، و آدرس‌های IP مخرب شناخته‌شده ارائه می‌دهد، که تیم امنیتی از آن برای تنظیم پیشگیرانه‌ی دفاع‌هایش قبل از وقوع یک حمله استفاده می‌کند. کدام گزینه بهترین توصیف این سرویس است؟",
  "options": [
   "A) SIEM",
   "B) Threat Intelligence",
   "C) Vulnerability Scanner",
   "D) SOAR"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Threat Intelligence**\n\nتوضیح:\nاین سرویس به‌طور خاص اطلاعات **به‌روز و عملیاتی** درباره‌ی تهدیدات فعلی و نوظهور را جمع‌آوری و ارائه می‌دهد، شامل:\nامضاهای بدافزار جدید\nتاکتیک‌ها و تکنیک‌های مهاجمان (که می‌تواند به چارچوب MITRE ATT&CK مرتبط باشد)\nشاخص‌های نفوذ (IOCs - Indicators of Compromise) مثل آدرس‌های IP مخرب شناخته‌شده\n\nنکته‌ی کلیدی این سؤال: عبارت **\"regularly updated information\"** + **\"proactively adjust their defenses BEFORE an attack occurs\"** دقیقاً نشان می‌دهد که Threat Intelligence یک منبع **اطلاعاتی پیشگیرانه** است که به تیم امنیتی کمک می‌کند **قبل از** وقوع حمله، آگاه و آماده باشد\n\nارتباط مهم با Threat Hunting (سؤال قبلی): Threat Intelligence معمولاً **ورودی اصلی** برای Threat Hunting است؛ تحلیلگران از اطلاعات Threat Intelligence (مثل تاکتیک‌های جدید APT) استفاده می‌کنند تا **فرضیه‌سازی** کنند و بدانند دقیقاً به‌دنبال چه نشانه‌هایی در شبکه باشند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SIEM**\n\nتوضیح:\nاین یک **پلتفرم** برای جمع‌آوری و تحلیل **لاگ‌های داخلی** سازمان است (که قبلاً با هم کار کردیم)، نه یک سرویس **خارجی** برای دریافت اطلاعات جدید درباره‌ی تهدیدات نوظهور در سطح جهانی\n\n**Vulnerability Scanner**\n\nتوضیح:\nاین ابزاری برای یافتن **آسیب‌پذیری‌های موجود در سیستم‌های خودِ سازمان** است، نه دریافت اطلاعات به‌روز درباره‌ی تاکتیک‌های مهاجمان در سطح صنعت\n\n**SOAR**\n\nتوضیح:\nاین برای **خودکارسازی واکنش** به حوادث طراحی شده (که قبلاً با هم کار کردیم)، نه برای ارائه‌ی اطلاعات پیشگیرانه درباره‌ی تهدیدات نوظهور\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"emerging threats/malware signatures/attacker tactics\"** + **\"proactively adjust defenses\"** را با هم دیدی، جواب همیشه **Threat Intelligence** است",
  "domain": 4
 },
 {
  "number": 141,
  "en": "A company wants to deploy mobile devices to employees while maintaining centralized control over device configurations, enforcing encryption, remotely wiping lost devices, and pushing security policies — all from a single management console. Which of the following BEST describes this solution?",
  "fa": "یک شرکت می‌خواهد دستگاه‌های موبایل را به کارمندان واگذار کند، در حالی که کنترل متمرکزی بر تنظیمات دستگاه‌ها حفظ می‌کند، رمزنگاری را اجرا می‌کند، دستگاه‌های گم‌شده را از راه دور پاک می‌کند، و سیاست‌های امنیتی را اعمال می‌کند — همه از یک کنسول مدیریت واحد. کدام گزینه بهترین توصیف این راه‌حل است؟",
  "options": [
   "A) NAC",
   "B) MDM (Mobile Device Management)",
   "C) DLP",
   "D) VPN"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**MDM (Mobile Device Management)**\n\nتوضیح:\nاین راه‌حل به‌طور خاص برای **مدیریت متمرکز دستگاه‌های موبایل** در یک سازمان طراحی شده، با قابلیت‌هایی مثل:\nاعمال **رمزنگاری اجباری** روی دستگاه\n**پاک‌سازی از راه دور (Remote Wipe)** در صورت گم‌شدن یا دزدیده‌شدن دستگاه\nاعمال و اجرای **سیاست‌های امنیتی** (مثل الزام رمز عبور قوی)\nهمه از طریق یک **کنسول مدیریت متمرکز واحد**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"centralized control over device configurations\"** + **\"remotely wiping lost devices\"** + **\"pushing security policies\"** + **\"single management console\"** دقیقاً ویژگی‌های کلیدی MDM را نشان می‌دهد\n\nاین راه‌حل به‌خصوص برای مدیریت برنامه‌های **BYOD (Bring Your Own Device)** یا دستگاه‌های متعلق به شرکت که در اختیار کارمندان قرار می‌گیرد بسیار مهم است، چون به سازمان امکان می‌دهد حتی روی دستگاه‌هایی که فیزیکی در دفتر نیستند، کنترل امنیتی داشته باشد\n\nچرا گزینه‌های دیگر رد شدند:\n\n**NAC (Network Access Control)**\n\nتوضیح:\nاین بررسی می‌کند آیا یک دستگاه واجد شرایط امنیتی برای **اتصال به شبکه** هست یا نه (که قبلاً با هم کار کردیم)، اما قابلیت‌های گسترده‌تری مثل پاک‌سازی از راه دور یا مدیریت کامل تنظیمات دستگاه را ندارد\n\n**DLP (Data Loss Prevention)**\n\nتوضیح:\nاین برای جلوگیری از خروج داده‌های حساس از سازمان طراحی شده (که قبلاً با هم کار کردیم)، نه برای مدیریت کامل پیکربندی دستگاه‌های موبایل\n\n**VPN**\n\nتوضیح:\nاین یک تونل رمزنگاری‌شده برای ارتباط امن از راه دور ایجاد می‌کند، نه یک پلتفرم مدیریت متمرکز برای کنترل کامل دستگاه\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"centralized device management\"** + **\"remote wipe\"** + **\"enforce policies on mobile devices\"** را با هم دیدی، جواب همیشه **MDM** است",
  "domain": 3
 },
 {
  "number": 142,
  "en": "A company allows employees to use their personal smartphones for work email and applications, but requires that a separate, encrypted partition be created on the device to keep corporate data completely isolated from the employee's personal apps and files. Which of the following BEST describes this approach?",
  "fa": "یک شرکت به کارمندان اجازه می‌دهد از گوشی‌های شخصی‌شان برای ایمیل و اپلیکیشن‌های کاری استفاده کنند، اما الزام می‌کند که یک پارتیشن جداگانه و رمزنگاری‌شده روی دستگاه ایجاد شود تا داده‌ی شرکتی به‌طور کامل از اپلیکیشن‌ها و فایل‌های شخصی کارمند جدا بماند. کدام گزینه بهترین توصیف این رویکرد است؟",
  "options": [
   "A) COPE (Corporate Owned, Personally Enabled)",
   "B) BYOD (Bring Your Own Device)",
   "C) Containerization",
   "D) CYOD (Choose Your Own Device)"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) Containerization** هست، نه B. این یک تفاوت ظریف بین **سیاست کلی مالکیت دستگاه** و **تکنیک خاص جداسازی داده** است؛ بگذار توضیح بدم.\n\n**Containerization**\n\nتوضیح:\nاین یک **تکنیک فنی خاص** است که داده‌ی شرکتی را در یک **پارتیشن یا کانتینر رمزنگاری‌شده و جداگانه** روی دستگاه نگه می‌دارد، کاملاً مجزا از اپلیکیشن‌ها و داده‌های شخصی کارمند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"separate, encrypted partition\"** + **\"keep corporate data completely isolated from...personal apps and files\"** دقیقاً توصیف **مکانیزم فنی Containerization** است، نه خودِ سیاست کلی مالکیت دستگاه\n\nچرا گزینه‌ی B (BYOD) دقیق نبود:\n\n**BYOD (Bring Your Own Device)**\n\nتوضیح:\nاین یک **مدل کلی و سیاست سازمانی** است که توصیف می‌کند کارمند **دستگاه شخصی خودش** را برای کار استفاده می‌کند (مالکیت دستگاه با کارمند است)؛ این مفهوم به **چگونگی پیاده‌سازی فنی جداسازی داده** اشاره ندارد\n\nتفاوت کلیدی: BYOD فقط می‌گوید **\"چه کسی صاحب دستگاه است\"** (کارمند)، در حالی که Containerization می‌گوید **\"چگونه داده‌ی شرکتی از داده‌ی شخصی جدا نگه‌داری می‌شود\"** (تکنیک فنی)؛ این سؤال به‌طور خاص روی **مکانیزم جداسازی** تمرکز دارد (پارتیشن رمزنگاری‌شده)، که این دقیقاً Containerization است، نه صرفاً سیاست BYOD\n\nنکته‌ی مهم: Containerization می‌تواند **در کنار** BYOD استفاده شود (یعنی یک سازمان می‌تواند سیاست BYOD داشته باشد و Containerization را به‌عنوان روش فنی برای ایمن‌سازی آن پیاده‌سازی کند)؛ این دو **مکمل** هم هستند، نه جایگزین\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**COPE (Corporate Owned, Personally Enabled)**\n\nتوضیح:\nاین مدلی است که در آن **شرکت** صاحب دستگاه است، اما به کارمند اجازه می‌دهد از آن برای کارهای شخصی هم استفاده کند؛ این برخلاف سؤال است که دستگاه **شخصی کارمند** است\n\n**CYOD (Choose Your Own Device)**\n\nتوضیح:\nاین مدلی است که کارمند از بین چند گزینه‌ی **تأییدشده توسط شرکت** انتخاب می‌کند، اما باز هم دستگاه توسط شرکت تأمین می‌شود، نه دستگاه شخصی کارمند\n\n🎯 نکته‌ی کلیدی برای امتحان (تثبیت این تفاوت):\nهر زمان سؤال درباره‌ی **\"چه کسی صاحب دستگاه است\"** بود → BYOD/COPE/CYOD\nهر زمان سؤال درباره‌ی **\"چگونه داده جدا نگه‌داری می‌شود (فنی)\"** بود → **Containerization**\n\nاین یک مفهوم جدید و ظریف بود.",
  "domain": 5
 },
 {
  "number": 143,
  "en": "A company's policy states that employees may use their own personal smartphones and laptops for work purposes, with the company providing minimal technical restrictions beyond basic security requirements like a screen lock. Which of the following mobile device deployment models does this represent?",
  "fa": "سیاست یک شرکت بیان می‌کند که کارمندان می‌توانند از گوشی‌های هوشمند و لپ‌تاپ‌های شخصی خودشان برای اهداف کاری استفاده کنند، در حالی که شرکت محدودیت‌های فنی حداقلی فراتر از الزامات امنیتی پایه مثل قفل صفحه اعمال می‌کند. کدام مدل استقرار دستگاه موبایل را نشان می‌دهد؟",
  "options": [
   "A) COPE",
   "B) CYOD",
   "C) BYOD",
   "D) Containerization"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**BYOD (Bring Your Own Device)**\n\nتوضیح:\nاین بار دقیقاً تفاوت کلیدی را درست تشخیص دادی. نکته‌ی کلیدی این سؤال: عبارت **\"employees may use their OWN personal smartphones and laptops\"** + **\"minimal technical restrictions\"** دقیقاً به سیاست کلی **مالکیت دستگاه توسط کارمند** اشاره دارد، نه به یک تکنیک فنی خاص (مثل Containerization)\n\nاین سؤال بر خلاف سؤال قبلی، **هیچ مکانیزم فنی خاص جداسازی** (مثل پارتیشن رمزنگاری‌شده) را توصیف نمی‌کند؛ فقط می‌گوید سیاست کلی این است که **دستگاه متعلق به کارمند است** و شرکت کنترل فنی محدودی دارد\n\n🎯 **مرور کامل و نهایی مدل‌های استقرار دستگاه (که الان باید مسلط شده باشی):**\n\n| مدل | مالکیت دستگاه | کنترل شرکت |\n|---|---|---|\n| **BYOD** | کارمند | حداقلی |\n| **COPE** | شرکت | بالا (اما اجازه‌ی استفاده‌ی شخصی هم می‌دهد) |\n| **CYOD** | شرکت (از میان گزینه‌های مجاز) | بالا |\n| **Containerization** | (این یک *تکنیک* است، نه مدل مالکیت) | جداسازی فنی داده، مستقل از مالکیت دستگاه |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**COPE**\n\nتوضیح:\nاین یعنی **شرکت** دستگاه را تأمین می‌کند (نه کارمند)؛ این سؤال صراحتاً می‌گوید **\"their OWN personal\"** دستگاه\n\n**CYOD**\n\nتوضیح:\nاین یعنی کارمند از میان گزینه‌های **تأییدشده توسط شرکت** انتخاب می‌کند (و باز شرکت مالک است)، نه دستگاه شخصی خودش\n\n**Containerization**\n\nتوضیح:\nاین یک تکنیک فنی برای جداسازی داده است (که در سؤال قبلی با هم کار کردیم)، نه یک سیاست کلی مالکیت دستگاه؛ این سؤال هیچ اشاره‌ای به جداسازی فنی نکرده، فقط سیاست کلی مالکیت را توصیف کرده\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"employee's own/personal device\"** + **\"minimal company restrictions\"** را با هم دیدی، جواب همیشه **BYOD** است",
  "domain": 5
 },
 {
  "number": 144,
  "en": "A company deploys hundreds of small, internet-connected sensors throughout its office building to monitor temperature and occupancy, but security researchers note that many of these devices ship with default passwords that are rarely changed and have limited processing power for running traditional security software. Which of the following BEST describes these devices?",
  "fa": "یک شرکت صدها حسگر کوچک متصل به اینترنت را در سراسر ساختمان دفترش مستقر می‌کند تا دما و میزان اشغال فضا را پایش کند، اما محققان امنیتی اشاره می‌کنند که بسیاری از این دستگاه‌ها با رمزهای عبور پیش‌فرض ارسال می‌شوند که به‌ندرت تغییر می‌کنند و توان پردازشی محدودی برای اجرای نرم‌افزار امنیتی سنتی دارند. کدام گزینه بهترین توصیف این دستگاه‌ها است؟",
  "options": [
   "A) SCADA/ICS",
   "B) IoT (Internet of Things) Devices",
   "C) Cloud Infrastructure",
   "D) Virtual Machines"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**IoT (Internet of Things) Devices**\n\nتوضیح:\nاین دستگاه‌ها به دستگاه‌های **کوچک، متصل به اینترنت**، و معمولاً با **منابع پردازشی محدود** اشاره دارند که برای جمع‌آوری داده یا انجام وظایف خاص (مثل پایش دما) طراحی شده‌اند\n\nنکته‌ی کلیدی این سؤال که آن را از SCADA/ICS متمایز می‌کند: عبارت **\"hundreds of small...sensors\"** + **\"default passwords...rarely changed\"** + **\"limited processing power\"** دقیقاً ویژگی‌های متمایزکننده‌ی IoT را نشان می‌دهد\n\nتفاوت کلیدی با SCADA/ICS (سؤال قبلی):\n\n**SCADA/ICS** = سیستم‌های **بزرگ و صنعتی** برای کنترل **فرآیندهای فیزیکی حیاتی** (مثل خط تولید کارخانه)؛ چالش اصلی: **نمی‌توان آن‌ها را Patch کرد** بدون مختل کردن عملیات\n\n**IoT** = دستگاه‌های **کوچک‌تر و متعدد** (حسگرها، دوربین‌ها)؛ چالش اصلی: **توان پردازشی محدود** برای اجرای امنیت سنتی + **رمزهای عبور پیش‌فرض** که اغلب تغییر نمی‌کنند (که این دقیقاً یک Misconfiguration کلاسیک است که قبلاً با هم کار کردیم!)\n\nاین دستگاه‌ها معمولاً هدف محبوبی برای **بات‌نت‌ها (Botnets)** هستند (مثل بات‌نت معروف Mirai که از دستگاه‌های IoT با رمز پیش‌فرض برای حملات DDoS بزرگ استفاده کرد)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**SCADA/ICS**\n\nتوضیح:\nاین به سیستم‌های **صنعتی بزرگ** برای کنترل فرآیندهای فیزیکی حیاتی اشاره دارد (مثل کارخانه)، نه حسگرهای کوچک پایش دما در یک ساختمان دفتری\n\n**Cloud Infrastructure**\n\nتوضیح:\nاین به زیرساخت‌های مجازی آنلاین اشاره دارد، نه دستگاه‌های فیزیکی کوچک متصل\n\n**Virtual Machines**\n\nتوضیح:\nاین به محیط‌های مجازی‌سازی‌شده‌ی نرم‌افزاری اشاره دارد، کاملاً بی‌ربط به حسگرهای فیزیکی\n\nنکته‌ی کلیدی برای امتحان (تفاوت نهایی SCADA/ICS و IoT):\n**SCADA/ICS** = صنعتی، بزرگ، چالش اصلی: نمی‌توان Patch کرد\n**IoT** = کوچک، متعدد، چالش اصلی: منابع محدود + رمز پیش‌فرض",
  "domain": 3
 },
 {
  "number": 145,
  "en": "A company runs multiple isolated operating system instances on a single physical server, allowing each instance to operate independently with its own allocated resources, improving hardware utilization and enabling easier disaster recovery through snapshots. Which of the following BEST describes this technology?",
  "fa": "یک شرکت چندین نمونه‌ی ایزوله‌ی سیستم‌عامل را روی یک سرور فیزیکی واحد اجرا می‌کند، که به هر نمونه اجازه می‌دهد به‌طور مستقل با منابع تخصیص‌یافته‌ی خودش کار کند، که این کار استفاده از سخت‌افزار را بهبود می‌دهد و بازیابی فاجعه را از طریق Snapshot آسان‌تر می‌کند. کدام گزینه بهترین توصیف این فناوری است؟",
  "options": [
   "A) Containerization",
   "B) Virtualization",
   "C) Cloud Computing",
   "D) SCADA"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Virtualization**\n\nتوضیح:\nاین فناوری به‌طور خاص اجازه می‌دهد چندین **نمونه‌ی کامل و ایزوله‌ی سیستم‌عامل** (Virtual Machines) روی یک سرور فیزیکی واحد اجرا شوند، که هر کدام منابع تخصیص‌یافته‌ی خودشان (CPU، حافظه، فضای ذخیره‌سازی) را دارند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"multiple isolated operating system instances\"** + **\"each instance...with its own allocated resources\"** + **\"easier disaster recovery through snapshots\"** دقیقاً ویژگی‌های Virtualization را نشان می‌دهد\n\nاین کار از طریق یک نرم‌افزار به نام **Hypervisor** (مثل VMware یا Hyper-V) انجام می‌شود که منابع سخت‌افزاری فیزیکی را بین چندین **VM (Virtual Machine)** مدیریت و تقسیم می‌کند\n\nنکته‌ی مهم برای تمایز با Containerization (که در سؤالات قبلی به شکل دیگری دیدیم):\n\n**Virtualization** = هر نمونه یک **سیستم‌عامل کامل و مستقل** دارد (سنگین‌تر، اما ایزوله‌تر)\n\n**Containerization** = چندین Container یک **هسته‌ی سیستم‌عامل مشترک** را به‌اشتراک می‌گذارند، اما اپلیکیشن‌ها و کتابخانه‌هایشان جدا هستند (سبک‌تر و سریع‌تر، اما ایزولاسیون کمتری دارد نسبت به VM کامل)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Containerization**\n\nتوضیح:\nاین سؤال صراحتاً می‌گوید **\"operating system instances\"** (نمونه‌های کامل سیستم‌عامل)، نه Container هایی که هسته‌ی سیستم‌عامل را به‌اشتراک می‌گذارند\n\n**Cloud Computing**\n\nتوضیح:\nاین به ارائه‌ی منابع محاسباتی از طریق اینترنت توسط یک تامین‌کننده‌ی خارجی اشاره دارد (مثل AWS)؛ Virtualization می‌تواند **زیربنای فنی** Cloud Computing باشد، اما خودِ این سؤال محیط داخلی یک سرور فیزیکی را توصیف می‌کند، نه لزوماً یک سرویس Cloud\n\n**SCADA**\n\nتوضیح:\nاین به سیستم‌های کنترل صنعتی اشاره دارد، کاملاً بی‌ربط به مجازی‌سازی سیستم‌عامل\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"multiple complete OS instances on one physical server\"** را دیدی، جواب همیشه **Virtualization** است",
  "domain": 3
 },
 {
  "number": 146,
  "en": "A development team packages an application along with all its dependencies and libraries into a lightweight unit that shares the host operating system's kernel, allowing it to start up in seconds and be easily deployed across different environments. Which of the following BEST describes this technology?",
  "fa": "یک تیم توسعه یک اپلیکیشن را همراه با تمام وابستگی‌ها و کتابخانه‌هایش در یک واحد سبک بسته‌بندی می‌کند که هسته‌ی سیستم‌عامل میزبان را به‌اشتراک می‌گذارد، که این اجازه می‌دهد در عرض چند ثانیه راه‌اندازی شود و به‌راحتی در محیط‌های مختلف مستقر شود. کدام گزینه بهترین توصیف این فناوری است؟",
  "options": [
   "A) Virtualization",
   "B) Containerization",
   "C) SCADA",
   "D) IoT"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Containerization**\n\nتوضیح:\nاین بار دقیقاً تفاوت کلیدی را درست تشخیص دادی. نکته‌ی کلیدی این سؤال: عبارت **\"shares the host operating system's kernel\"** + **\"start up in seconds\"** + **\"lightweight unit\"** دقیقاً ویژگی‌های متمایزکننده‌ی Containerization را نشان می‌دهد\n\nمقایسه‌ی نهایی و قطعی این دو فناوری (که الان باید کاملاً مسلط شده باشی):\n\n| ویژگی | Virtualization (سؤال قبلی) | Containerization (این سؤال) |\n|---|---|---|\n| سیستم‌عامل | هر VM، سیستم‌عامل **کامل و مستقل** خودش را دارد | همه‌ی Container ها **هسته‌ی سیستم‌عامل میزبان** را به‌اشتراک می‌گذارند |\n| سرعت راه‌اندازی | کندتر (باید کل OS بوت شود) | بسیار سریع‌تر (چند ثانیه) |\n| حجم/سبکی | سنگین‌تر | سبک‌تر |\n| سطح ایزولاسیون | بیشتر (ایزولاسیون کامل در سطح سیستم‌عامل) | کمتر (به‌دلیل اشتراک هسته) |\n| ابزار رایج | VMware, Hyper-V (Hypervisor) | Docker, Kubernetes |\n\n🎯 تصویر ذهنی کمکی برای حفظ همیشگی:\n**Virtualization** = مثل ساختن چند **آپارتمان کاملاً مستقل** با تجهیزات جداگانه (هر کدام آشپزخانه و حمام خودش را دارد) — سنگین‌تر اما ایزوله‌تر\n**Containerization** = مثل چند **اتاق در یک هتل** که از همان زیرساخت مشترک ساختمان (لوله‌کشی، برق) استفاده می‌کنند، اما هرکدام محتوای داخلی خودش را دارد — سبک‌تر و سریع‌تر\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Virtualization**\n\nتوضیح:\nاین نیاز به یک سیستم‌عامل **کامل و مستقل** برای هر نمونه دارد؛ این سؤال صراحتاً می‌گوید هسته‌ی سیستم‌عامل **به‌اشتراک گذاشته می‌شود**، که این برخلاف Virtualization است\n\n**SCADA**\n\nتوضیح:\nاین به سیستم‌های کنترل صنعتی اشاره دارد، کاملاً بی‌ربط به بسته‌بندی اپلیکیشن\n\n**IoT**\n\nتوضیح:\nاین به دستگاه‌های فیزیکی متصل اشاره دارد، نه به یک روش بسته‌بندی نرم‌افزار\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"shares the host OS kernel\"** + **\"lightweight\"** + **\"fast startup\"** را با هم دیدی، جواب همیشه **Containerization** است",
  "domain": 3
 },
 {
  "number": 147,
  "en": "A company uses a cloud service where it has full control over the operating system, storage, and applications it deploys, but the cloud provider manages the underlying physical hardware, networking, and virtualization layer. Which of the following cloud service models BEST describes this arrangement?",
  "fa": "یک شرکت از یک سرویس ابری استفاده می‌کند که در آن کنترل کامل بر سیستم‌عامل، ذخیره‌سازی، و اپلیکیشن‌هایی که مستقر می‌کند دارد، اما تامین‌کننده‌ی ابری سخت‌افزار فیزیکی زیربنایی، شبکه، و لایه‌ی مجازی‌سازی را مدیریت می‌کند. کدام مدل سرویس ابری بهترین توصیف این ترتیب را دارد؟",
  "options": [
   "A) SaaS (Software as a Service)",
   "B) PaaS (Platform as a Service)",
   "C) IaaS (Infrastructure as a Service)",
   "D) FaaS (Function as a Service)"
  ],
  "correct": "C",
  "explanation": "🎉 رسیدیم به نقطه‌ی عطف سؤال ۲۰۰ از ۳۰۰! این یک مفهوم جدید (مدل‌های سرویس Cloud) است، بگذار قبل از پاسخ، هر سه مدل اصلی را خلاصه کنم.\n\n## سه مدل اصلی سرویس Cloud (بر اساس میزان کنترل مشتری)\n\n**IaaS (Infrastructure as a Service)**\nمشتری کنترل می‌کند: **سیستم‌عامل، ذخیره‌سازی، اپلیکیشن‌ها**\nتامین‌کننده مدیریت می‌کند: **سخت‌افزار فیزیکی، شبکه، Virtualization**\nمثال: AWS EC2, Microsoft Azure VMs\nشبیه: **اجاره‌ی یک زمین خالی** که خودت باید همه‌چیز روی آن بسازی\n\n**PaaS (Platform as a Service)**\nمشتری کنترل می‌کند: فقط **اپلیکیشن و داده**\nتامین‌کننده مدیریت می‌کند: سیستم‌عامل، Runtime، زیرساخت\nمثال: Google App Engine, Heroku\nشبیه: **اجاره‌ی یک خانه‌ی نیمه‌ساخته** که خودت فقط باید وسایلش را بچینی\n\n**SaaS (Software as a Service)**\nمشتری کنترل می‌کند: **فقط استفاده از اپلیکیشن** (هیچ‌چیز فنی)\nتامین‌کننده مدیریت می‌کند: همه‌چیز (از سخت‌افزار تا خود اپلیکیشن)\nمثال: Gmail, Microsoft 365, Salesforce\nشبیه: **اجاره‌ی یک هتل کاملاً مبله** که فقط باید واردش شوی\n\nبا این توضیح، حالا به سؤال نگاه کن: عبارت **\"full control over the operating system, storage, and applications\"** + **\"provider manages...hardware, networking, and virtualization\"** دقیقاً به کدام یک از این سه مدل اشاره دارد؟",
  "domain": 3
 },
 {
  "number": 148,
  "en": "A small business uses an email and office productivity suite hosted entirely by a third-party provider, where the company simply logs in and uses the application without managing any underlying infrastructure, operating system, or even the application code itself. Which of the following cloud service models BEST describes this arrangement?",
  "fa": "یک کسب‌وکار کوچک از یک مجموعه‌ی ایمیل و بهره‌وری اداری استفاده می‌کند که کاملاً توسط یک تامین‌کننده‌ی شخص ثالث میزبانی می‌شود، که در آن شرکت فقط وارد می‌شود و از اپلیکیشن استفاده می‌کند، بدون مدیریت هیچ زیرساخت، سیستم‌عامل، یا حتی خودِ کد اپلیکیشن. کدام مدل سرویس ابری بهترین توصیف این ترتیب را دارد؟",
  "options": [
   "A) IaaS",
   "B) PaaS",
   "C) SaaS (Software as a Service)",
   "D) FaaS"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**SaaS (Software as a Service)**\n\nتوضیح:\nاین مدل به‌طور خاص زمانی است که مشتری **هیچ کنترل فنی** ندارد و فقط **از اپلیکیشن نهایی استفاده می‌کند**\n\nنکته‌ی کلیدی این سؤال: عبارت **\"simply logs in and uses the application\"** + **\"without managing any underlying infrastructure, operating system, or even the application code itself\"** دقیقاً تعریف SaaS است؛ مثال‌های رایج این مدل: **Gmail، Microsoft 365، Salesforce، Zoom**\n\nاین کمترین سطح مسئولیت امنیتی را برای مشتری دارد (طبق Shared Responsibility Model که قبلاً با هم کار کردیم)؛ مشتری فقط باید نگران **استفاده‌ی صحیح و امن از حساب کاربری خودش** باشد (مثل MFA، رمز عبور قوی)، اما هیچ مسئولیتی برای سرور، سیستم‌عامل، یا کد اپلیکیشن ندارد\n\n🎯 **مرور نهایی و کامل، با تأکید بر نقطه‌ی تمایز کلیدی هر مدل:**\n\n**IaaS** = مشتری کنترل سیستم‌عامل را **دارد** (بیشترین کنترل)\n**PaaS** = مشتری فقط کد/اپلیکیشن را کنترل می‌کند (کنترل متوسط)\n**SaaS** = مشتری فقط **استفاده می‌کند**، هیچ کنترل فنی ندارد (کمترین کنترل)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**IaaS**\n\nتوضیح:\nاین به مشتری کنترل کامل روی سیستم‌عامل و زیرساخت می‌دهد؛ این سؤال صراحتاً می‌گوید مشتری هیچ‌چیز فنی را مدیریت نمی‌کند\n\n**PaaS**\n\nتوضیح:\nاین به مشتری امکان مدیریت **کد اپلیکیشن خودش** را می‌دهد؛ این سؤال می‌گوید مشتری حتی **کد اپلیکیشن** را هم مدیریت نمی‌کند (چون از یک محصول نهایی و آماده استفاده می‌کند)\n\n**FaaS**\n\nتوضیح:\nاین مدلی است که مشتری فقط **توابع کد (Functions)** خاصی را می‌نویسد، نه یک اپلیکیشن کامل و آماده مثل ایمیل\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"just log in and use\"** + **\"no infrastructure/OS/code management\"** را با هم دیدی، جواب همیشه **SaaS** است",
  "domain": 3
 },
 {
  "number": 149,
  "en": "A software development team writes and deploys their application's code, but the cloud provider automatically handles the underlying operating system, runtime environment, and server management, allowing developers to focus only on writing and deploying code without worrying about infrastructure. Which of the following cloud service models BEST describes this arrangement?",
  "fa": "یک تیم توسعه‌ی نرم‌افزار کد اپلیکیشن خودش را می‌نویسد و مستقر می‌کند، اما تامین‌کننده‌ی ابری به‌طور خودکار سیستم‌عامل زیربنایی، محیط Runtime، و مدیریت سرور را مدیریت می‌کند، که این اجازه می‌دهد توسعه‌دهندگان فقط روی نوشتن و استقرار کد تمرکز کنند بدون نگرانی درباره‌ی زیرساخت. کدام مدل سرویس ابری بهترین توصیف این ترتیب را دارد؟",
  "options": [
   "A) IaaS",
   "B) PaaS (Platform as a Service)",
   "C) SaaS",
   "D) On-Premises"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**PaaS (Platform as a Service)**\n\nتوضیح:\nاین مدل دقیقاً **بین IaaS و SaaS** قرار دارد؛ مشتری فقط **کد و داده‌ی خودش** را مدیریت می‌کند، در حالی که تامین‌کننده تمام لایه‌های زیرین (سیستم‌عامل، Runtime، سرور) را مدیریت می‌کند\n\nنکته‌ی کلیدی این سؤال: عبارت **\"writes and deploys their application's code\"** + **\"provider automatically handles the...operating system, runtime...and server management\"** + **\"focus only on writing and deploying code\"** دقیقاً تعریف PaaS است؛ مثال‌های رایج: **Google App Engine, Heroku, AWS Elastic Beanstalk**\n\n🎉 **مرور کامل و نهایی، با تثبیت قطعی تفاوت سه مدل (که الان به‌طور کامل یاد گرفتی):**\n\n| مدل | مشتری چه چیزی را مدیریت می‌کند | مثال |\n|---|---|---|\n| **IaaS** | سیستم‌عامل + اپلیکیشن + داده | AWS EC2 |\n| **PaaS** | فقط کد/اپلیکیشن + داده | Heroku, Google App Engine |\n| **SaaS** | هیچ‌چیز فنی (فقط استفاده) | Gmail, Microsoft 365 |\n\n🎯 تصویر ذهنی نهایی برای حفظ همیشگی این سه مدل (پیتزا به‌عنوان مثال کلاسیک):\n**IaaS** = خریدن مواد اولیه و پختن پیتزا در خانه‌ی خودت (کنترل کامل، کار زیاد)\n**PaaS** = سفارش پیتزای نیمه‌پخته و فقط گرم کردنش (کنترل متوسط)\n**SaaS** = سفارش پیتزا و تحویل آن به در خانه (فقط مصرف، بدون کار فنی)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**IaaS**\n\nتوضیح:\nاین به مشتری مسئولیت مدیریت **سیستم‌عامل** را هم می‌دهد؛ این سؤال صراحتاً می‌گوید تامین‌کننده سیستم‌عامل را مدیریت می‌کند\n\n**SaaS**\n\nتوضیح:\nاین به مشتری حتی امکان نوشتن **کد سفارشی** را نمی‌دهد (فقط استفاده از محصول نهایی)؛ این سؤال می‌گوید تیم توسعه **کد می‌نویسد**\n\n**On-Premises**\n\nتوضیح:\nاین یعنی همه‌چیز (از سخت‌افزار تا اپلیکیشن) **در داخل سازمان و بدون Cloud** مدیریت می‌شود، کاملاً برخلاف این سناریوی Cloud-based\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"developers write/deploy code, provider manages OS/runtime\"** را با هم دیدی، جواب همیشه **PaaS** است",
  "domain": 3
 },
 {
  "number": 150,
  "en": "A company decides to host certain non-sensitive marketing applications using a public cloud provider shared with other organizations, while keeping its highly sensitive financial systems on a privately dedicated infrastructure used exclusively by the company itself, and connects both environments together. Which of the following cloud deployment models BEST describes this approach?",
  "fa": "یک شرکت تصمیم می‌گیرد اپلیکیشن‌های بازاریابی غیرحساس خاصی را با استفاده از یک تامین‌کننده‌ی ابر عمومی که با سازمان‌های دیگر مشترک است میزبانی کند، در حالی که سیستم‌های مالی بسیار حساسش را روی یک زیرساخت اختصاصی و خصوصی که فقط توسط خود شرکت استفاده می‌شود نگه می‌دارد، و این دو محیط را به هم متصل می‌کند. کدام مدل استقرار ابری بهترین توصیف این رویکرد را دارد؟",
  "options": [
   "A) Public Cloud",
   "B) Private Cloud",
   "C) Hybrid Cloud",
   "D) Community Cloud"
  ],
  "correct": "C",
  "explanation": "درسته! ✅ گزینه C\n\n**Hybrid Cloud**\n\nتوضیح:\nاین مدل دقیقاً ترکیبی از **چند مدل استقرار مختلف** (در این مورد: Public + Private) است که با هم **متصل** می‌شوند تا سازمان بتواند از مزایای هر دو بهره ببرد\n\nنکته‌ی کلیدی این سؤال: عبارت **\"non-sensitive...using a public cloud provider shared with other organizations\"** + **\"highly sensitive financial systems on a privately dedicated infrastructure\"** + **\"connects both environments together\"** دقیقاً تعریف Hybrid Cloud است\n\nاین رویکرد به سازمان اجازه می‌دهد:\nداده‌ی **حساس** (مثل سیستم مالی) را در یک محیط **خصوصی و کنترل‌شده‌تر** نگه دارد (امنیت بیشتر)\nدر عین حال از **مقیاس‌پذیری و هزینه‌ی کمتر** Public Cloud برای کارهای کم‌ریسک‌تر (مثل بازاریابی) استفاده کند\n\n🎯 **مرور سریع چهار مدل استقرار Cloud (که به‌زودی با مثال‌های بیشتر کار می‌کنیم):**\n\n**Public Cloud** = زیرساخت **مشترک** بین چندین سازمان مختلف (مثل AWS، Azure برای عموم)\n\n**Private Cloud** = زیرساخت **اختصاصی فقط برای یک سازمان** (می‌تواند داخلی یا میزبانی‌شده باشد)\n\n**Hybrid Cloud** = **ترکیب** Public و Private، با اتصال بین آن‌ها\n\n**Community Cloud** = زیرساخت **مشترک بین چند سازمان با نیازهای مشابه** (مثل چند بیمارستان که نیازهای Compliance یکسان دارند)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Public Cloud**\n\nتوضیح:\nاین فقط به بخش **اپلیکیشن‌های بازاریابی** اشاره دارد، نه به کل سناریو که شامل یک بخش **خصوصی** هم می‌شود\n\n**Private Cloud**\n\nتوضیح:\nاین فقط به بخش **سیستم مالی** اشاره دارد، نه به کل سناریو که شامل بخش **Public** هم می‌شود\n\n**Community Cloud**\n\nتوضیح:\nاین به اشتراک‌گذاری زیرساخت بین **چند سازمان با نیاز مشابه** اشاره دارد، نه به ترکیب Public/Private درون یک سازمان واحد\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"combination of public and private\"** + **\"connected together\"** را با هم دیدی، جواب همیشه **Hybrid Cloud** است",
  "domain": 3
 },
 {
  "number": 151,
  "en": "Several hospitals in a region decide to share a dedicated cloud infrastructure exclusively among themselves, since they all have similar regulatory compliance needs (such as HIPAA) and want to share the costs while keeping the environment closed to the general public. Which of the following cloud deployment models BEST describes this arrangement?",
  "fa": "چند بیمارستان در یک منطقه تصمیم می‌گیرند یک زیرساخت ابری اختصاصی را فقط بین خودشان به‌اشتراک بگذارند، چون همگی نیازهای انطباق قانونی مشابهی دارند (مثل HIPAA) و می‌خواهند هزینه‌ها را تقسیم کنند در حالی که محیط را از دسترس عموم بسته نگه می‌دارند. کدام مدل استقرار ابری بهترین توصیف این ترتیب را دارد؟",
  "options": [
   "A) Public Cloud",
   "B) Private Cloud",
   "C) Hybrid Cloud",
   "D) Community Cloud"
  ],
  "correct": "D",
  "explanation": "درسته! ✅ گزینه D\n\n**Community Cloud**\n\nتوضیح:\nاین مدل دقیقاً زمانی استفاده می‌شود که **چند سازمان با نیازهای مشابه** (معمولاً از نظر Compliance یا صنعت) یک زیرساخت ابری را **به‌اشتراک می‌گذارند**، اما این زیرساخت برای **عموم مردم بسته** است (برخلاف Public Cloud)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"several hospitals\"** + **\"similar regulatory compliance needs (HIPAA)\"** + **\"share the costs\"** + **\"closed to the general public\"** دقیقاً تعریف Community Cloud است\n\nاین مدل مزایای خاصی دارد:\nسازمان‌ها **هزینه‌ها** را بین خودشان تقسیم می‌کنند (ارزان‌تر از Private Cloud اختصاصی برای هرکدام)\nچون همه **نیاز قانونی مشابه** (مثل HIPAA) دارند، می‌توانند کنترل‌های امنیتی مشترکی طراحی کنند که برای همه‌شان کاربردی باشد\nامنیت بیشتری نسبت به Public Cloud دارد (چون فقط محدود به اعضای همان Community است)\n\n🎯 **مرور کامل و نهایی چهار مدل استقرار Cloud با تأکید بر تفاوت کلیدی (که الان قطعی یاد گرفتی):**\n\n| مدل | چه کسی استفاده می‌کند |\n|---|---|\n| **Public** | همه (عموم مردم/سازمان‌ها) |\n| **Private** | فقط **یک** سازمان |\n| **Community** | **چند** سازمان با نیاز مشابه |\n| **Hybrid** | ترکیبی از دو یا چند مدل بالا |\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Public Cloud**\n\nتوضیح:\nاین برای **عموم** در دسترس است؛ این سؤال صراحتاً می‌گوید محیط **بسته به عموم** است\n\n**Private Cloud**\n\nتوضیح:\nاین فقط برای **یک** سازمان اختصاصی است؛ این سؤال می‌گوید **چند** بیمارستان آن را به‌اشتراک می‌گذارند\n\n**Hybrid Cloud**\n\nتوضیح:\nاین ترکیبی از چند مدل (مثل Public+Private) درون **یک** سازمان است؛ این سؤال به اشتراک‌گذاری بین **چند سازمان مختلف** با یک نوع محیط اشاره دارد، نه ترکیب مدل‌های مختلف\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"multiple organizations with similar needs/compliance\"** + **\"shared but not public\"** را با هم دیدی، جواب همیشه **Community Cloud** است",
  "domain": 3
 },
 {
  "number": 152,
  "en": "A company wants to ensure that its cloud-based infrastructure can be deployed consistently and repeatedly through code and configuration files rather than manual setup, allowing the entire environment to be version-controlled, tested, and quickly recreated if needed. Which of the following BEST describes this approach?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که زیرساخت مبتنی بر Cloud آن می‌تواند به‌طور مستمر و تکرارپذیر از طریق کد و فایل‌های پیکربندی مستقر شود، نه راه‌اندازی دستی، که این اجازه می‌دهد کل محیط نسخه‌بندی شود، تست شود، و در صورت نیاز به‌سرعت بازسازی شود. کدام گزینه بهترین توصیف این رویکرد است؟",
  "options": [
   "A) Virtualization",
   "B) Infrastructure as Code (IaC)",
   "C) Containerization",
   "D) Serverless Computing"
  ],
  "correct": "B",
  "explanation": "این یک مفهوم نسبتاً جدید برای ماست، بگذار راهنماییت کنم.\n\nسرنخ ۱:\nبه این عبارت دقت کن: **\"deployed...through code and configuration files rather than manual setup\"**. این یعنی به‌جای اینکه یک مدیر شبکه دستی روی هر سرور تنظیمات را وارد کند (کلیک‌کردن در یک رابط گرافیکی)، همه‌چیز با **نوشتن کد** مشخص می‌شود.\n\nسرنخ ۲:\nبه این عبارت هم دقت کن: **\"entire environment to be version-controlled, tested, and quickly recreated\"**. این یعنی زیرساخت (سرورها، شبکه، تنظیمات) مثل یک **فایل کد نرم‌افزاری** رفتار می‌کند؛ می‌توان آن را در Git ذخیره کرد، تغییراتش را پیگیری کرد، و دوباره از صفر بازسازی کرد. خود نام گزینه B دقیقاً این مفهوم را در خودش دارد: **\"Infrastructure as Code\"** یعنی **\"زیرساخت به‌عنوان کد\"** — زیرساخت را مثل کد نرم‌افزار می‌نویسیم و مدیریت می‌کنیم.\n\nبا این دو سرنخ (زیرساخت = کد، نه تنظیمات دستی)، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 3
 },
 {
  "number": 153,
  "en": "A development team wants to integrate code changes from multiple developers frequently into a shared repository, with automated testing running immediately after each integration to catch errors early, before moving toward automated deployment to production. Which of the following BEST describes this practice?",
  "fa": "یک تیم توسعه می‌خواهد تغییرات کد از چندین برنامه‌نویس را به‌طور مکرر در یک مخزن مشترک ادغام کند، با تست‌های خودکاری که بلافاصله پس از هر ادغام اجرا می‌شوند تا خطاها را زود تشخیص دهند، قبل از حرکت به‌سوی استقرار خودکار در محیط تولید. کدام گزینه بهترین توصیف این رویه است؟",
  "options": [
   "A) Infrastructure as Code",
   "B) CI/CD (Continuous Integration/Continuous Deployment)",
   "C) Containerization",
   "D) Agile Methodology"
  ],
  "correct": "B",
  "explanation": "این یک مفهوم مهم در DevOps است، بگذار توضیح بدم.\n\n## CI/CD (Continuous Integration / Continuous Deployment)\n\nاین اصطلاح از دو بخش تشکیل شده که هرکدام به یک مرحله از سؤال اشاره دارد:\n\n**CI (Continuous Integration) — ادغام مستمر**\nتوضیح: برنامه‌نویسان مختلف **به‌طور مکرر** کد خودشان را در یک **مخزن مشترک (Repository)** ادغام می‌کنند\nبعد از هر ادغام، **تست‌های خودکار** بلافاصله اجرا می‌شوند تا اگر خطایی وجود دارد، **زود** (نه بعد از هفته‌ها) شناسایی شود\nاین دقیقاً قسمت اول سؤال است: **\"integrate code changes...frequently\"** + **\"automated testing running immediately...to catch errors early\"**\n\n**CD (Continuous Deployment/Delivery) — استقرار/تحویل مستمر**\nتوضیح: بعد از تأیید تست‌ها، کد به‌طور **خودکار** (یا با کمترین دخالت دستی) به محیط **Production** منتقل می‌شود\nاین دقیقاً قسمت دوم سؤال است: **\"moving toward automated deployment to production\"**\n\nنکته‌ی کلیدی این سؤال: کل توالی **\"integrate frequently + automated testing + automated deployment\"** دقیقاً فرآیند کامل CI/CD را توصیف می‌کند\n\nبا این توضیح، حالا مطمئنم که می‌دونی جواب کدوم گزینه است. می‌خوای جوابت رو بگی، یا قبل از آن یک سؤال داشته باشی؟",
  "domain": 3
 },
 {
  "number": 154,
  "en": "A development team uses a system that tracks every change made to source code over time, allows multiple developers to work on the same codebase simultaneously, and enables reverting to a previous version if a change introduces a bug. Which of the following BEST describes this system?",
  "fa": "یک تیم توسعه از سیستمی استفاده می‌کند که هر تغییری که در کد منبع در طول زمان ایجاد می‌شود را پیگیری می‌کند، اجازه می‌دهد چندین برنامه‌نویس به‌طور هم‌زمان روی همان کدبیس کار کنند، و امکان بازگشت به نسخه‌ی قبلی را در صورتی که یک تغییر باعث ایجاد باگ شود فراهم می‌کند. کدام گزینه بهترین توصیف این سیستم است؟",
  "options": [
   "A) CI/CD Pipeline",
   "B) Version Control System (e.g., Git)",
   "C) Infrastructure as Code",
   "D) Configuration Management"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Version Control System (مثل Git)**\n\nتوضیح:\nاین سیستم به‌طور خاص برای **پیگیری تغییرات کد در طول زمان**، امکان **همکاری چند برنامه‌نویس** روی یک کدبیس مشترک، و قابلیت **بازگشت به نسخه‌های قبلی (Rollback)** طراحی شده\n\nنکته‌ی کلیدی این سؤال: عبارت **\"tracks every change...over time\"** + **\"multiple developers...simultaneously\"** + **\"reverting to a previous version if...bug\"** دقیقاً ویژگی‌های اصلی یک Version Control System (مثل **Git**, **GitHub**, **GitLab**) را نشان می‌دهد\n\nاین ابزار پایه‌ای برای بسیاری از مفاهیمی است که قبلاً با هم کار کردیم:\n**IaC** نیاز دارد که خودِ فایل‌های پیکربندی زیرساخت هم در یک Version Control ذخیره شوند\n**CI/CD** معمولاً با هر **Commit** جدید در Version Control، به‌طور خودکار فعال می‌شود (Trigger)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**CI/CD Pipeline**\n\nتوضیح:\nاین به فرآیند **ادغام و استقرار خودکار** کد اشاره دارد (که قبلاً با هم کار کردیم)؛ این سؤال به‌طور خاص خودِ **سیستم پیگیری نسخه‌ها** را توصیف می‌کند، نه فرآیند تست و استقرار\n\n**Infrastructure as Code**\n\nتوضیح:\nاین به تعریف **زیرساخت** با کد اشاره دارد، نه سیستم کلی پیگیری تغییرات هر نوع کد\n\n**Configuration Management**\n\nتوضیح:\nاین به مدیریت و مستندسازی **تنظیمات فعلی سیستم‌ها** اشاره دارد (که در ابتدای دوره به‌طور مختصر با هم دیدیم)، نه به‌طور خاص پیگیری تاریخچه‌ی تغییرات کد منبع با امکان بازگشت\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"track changes to code\"** + **\"multiple developers work simultaneously\"** + **\"revert to previous version\"** را با هم دیدی، جواب همیشه **Version Control System** است",
  "domain": 3
 },
 {
  "correct": "B",
  "domain": 5,
  "en": "A formal agreement between two parties defining the level of service expected, including uptime guarantees, is called what?",
  "fa": "توافق رسمی بین دو طرف که سطح سرویس مورد انتظار (مثل تضمین uptime) را تعریف می‌کند، چه نام دارد؟",
  "options": [
   "A) MOU",
   "B) SLA (Service Level Agreement)",
   "C) NDA",
   "D) BPA"
  ],
  "explanation": "SLA = Service Level Agreement. سطح سرویس مورد انتظار شامل تضمین uptime و زمان پاسخ را تعریف می‌کند.",
  "number": 155
 },
 {
  "number": 156,
  "en": "A company performs continuous, automated scans across its entire network to identify, prioritize based on CVSS scores, and track the remediation status of all known weaknesses across its systems over time. Which of the following BEST describes this broader, ongoing program?",
  "fa": "یک شرکت اسکن‌های مستمر و خودکار را در سراسر شبکه‌اش انجام می‌دهد تا تمام ضعف‌های شناخته‌شده در سیستم‌هایش را شناسایی کند، بر اساس امتیازات CVSS اولویت‌بندی کند، و وضعیت رفع آن‌ها را در طول زمان پیگیری کند. کدام گزینه بهترین توصیف این برنامه‌ی گسترده‌تر و مستمر را دارد؟",
  "options": [
   "A) Patch Management",
   "B) Penetration Testing",
   "C) Vulnerability Management",
   "D) Change Management"
  ],
  "correct": "C",
  "explanation": "این سؤال دقیقاً مفهومی است که در سؤال قبلی به‌عنوان گزینه‌ی غلط رد کردیم؛ حالا نوبت خودشه که جواب درست باشه. بگذار تفاوتش با Patch Management را روشن کنم.\n\nسرنخ ۱:\nبه این عبارت دقت کن: **\"identify, prioritize based on CVSS scores, and track the remediation status\"**. این یعنی سه مرحله‌ی مجزا وجود دارد: **شناسایی** (با اسکن)، **اولویت‌بندی** (با CVSS که قبلاً با هم کار کردیم)، و **پیگیری وضعیت رفع** در طول زمان. این یک فرآیند **گسترده‌تر و چندمرحله‌ای** است، نه فقط یک مرحله‌ی خاص.\n\nسرنخ ۲:\n**Patch Management** (که در سؤال قبلی جواب درست بود) فقط به **خودِ نصب وصله‌ها** اشاره دارد (مرحله‌ی نهایی رفع مشکل)؛ اما این سؤال، **کل چرخه** را توصیف می‌کند: از همان لحظه‌ی **شناسایی** آسیب‌پذیری (با اسکن) تا **اولویت‌بندی** و در نهایت **پیگیری رفع** آن. Patch Management می‌تواند **یک بخش از** این فرآیند بزرگ‌تر باشد (یعنی یکی از راه‌های \"Remediation\")، اما خودش کل این چرخه‌ی گسترده را در بر نمی‌گیرد.\n\nبا این دو سرنخ (فرآیند گسترده‌تر شامل شناسایی+اولویت‌بندی+پیگیری، نه فقط نصب وصله)، فکر می‌کنی کدوم گزینه درست‌تره؟",
  "domain": 4
 },
 {
  "number": 157,
  "en": "A security team's quarterly process includes running automated scans to discover new weaknesses, ranking them by severity using a standardized scoring system, deciding whether to patch, apply a compensating control, or accept the risk for each one, and then documenting the final resolution. Which of the following BEST describes this entire ongoing program?",
  "fa": "فرآیند فصلی یک تیم امنیتی شامل اجرای اسکن‌های خودکار برای کشف ضعف‌های جدید، رتبه‌بندی آن‌ها بر اساس شدت با استفاده از یک سیستم امتیازدهی استاندارد، تصمیم‌گیری درباره‌ی اینکه آیا باید وصله کرد، یک کنترل جایگزین اعمال کرد، یا ریسک را برای هر کدام پذیرفت، و سپس مستندسازی نتیجه‌ی نهایی. کدام گزینه بهترین توصیف کل این برنامه‌ی مستمر است؟",
  "options": [
   "A) Patch Management",
   "B) Vulnerability Management",
   "C) Risk Acceptance",
   "D) Penetration Testing"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Vulnerability Management**\n\nتوضیح:\nاین بار دقیقاً تفاوت کلیدی را درست تشخیص دادی. این سؤال یک نمونه‌ی **کامل‌تر و پیچیده‌تر** از همان چرخه است که چندین مفهوم دیگری را که قبلاً با هم کار کردیم، در خودش ترکیب می‌کند:\n\n**شناسایی** = \"running automated scans to discover new weaknesses\"\n**اولویت‌بندی** = \"ranking them by severity using a standardized scoring system\" (یعنی **CVSS** که قبلاً با هم کار کردیم)\n**رفع/تصمیم‌گیری** = انتخاب بین **Patch** (Patch Management) یا **Compensating Control** (که قبلاً با هم کار کردیم!) یا **Risk Acceptance** (که هم قبلاً با هم کار کردیم!)\n**مستندسازی** = ثبت نتیجه‌ی نهایی (شبیه Risk Register که قبلاً با هم کار کردیم)\n\nنکته‌ی کلیدی این سؤال: این نشان می‌دهد **Vulnerability Management** یک **برنامه‌ی فراگیر** است که می‌تواند **چندین استراتژی مختلف** (نه فقط Patch کردن) را به‌کار بگیرد؛ گزینه‌های C و D در این سؤال (Risk Acceptance و Patch Management) که قبلاً به‌تنهایی جواب درست بودند، حالا فقط **بخش‌هایی کوچک‌تر** از این فرآیند بزرگ‌تر هستند\n\n🎯 این سؤال به‌خوبی نشان می‌دهد چگونه مفاهیم مختلفی که در طول دوره با هم یاد گرفتیم (CVSS، Risk Acceptance، Compensating Control، Patch Management) همگی می‌توانند **زیرمجموعه‌ای از یک برنامه‌ی بزرگ‌تر (Vulnerability Management)** باشند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Patch Management**\n\nتوضیح:\nاین فقط **یکی از چند گزینه‌ی ممکن** برای رفع است (همانطور که در سؤال دیدیم: Patch **یا** Compensating Control **یا** Risk Acceptance)؛ پس Patch Management نمی‌تواند کل این فرآیند را توصیف کند\n\n**Risk Acceptance**\n\nتوضیح:\nاین هم فقط **یکی از چند نتیجه‌ی ممکن** برای هر آسیب‌پذیری خاص است، نه کل برنامه‌ی مستمر شناسایی و مدیریت\n\n**Penetration Testing**\n\nتوضیح:\nاین یک **تست فعال و دوره‌ای** (نه لزوماً مستمر و خودکار) برای کشف آسیب‌پذیری از طریق شبیه‌سازی حمله است، نه یک برنامه‌ی کامل مدیریت چرخه‌ای\n\nنکته‌ی کلیدی برای امتحان (تثبیت نهایی):\nهر زمان فرآیند شامل **چندین گزینه‌ی ممکن برای رفع** (Patch/Compensating/Accept) بود، در کنار شناسایی و اولویت‌بندی، جواب همیشه **Vulnerability Management** است، چون این یک برنامه‌ی **فراگیرتر** از هر کدام از زیرمجموعه‌هایش است",
  "domain": 4
 },
 {
  "number": 158,
  "en": "A company wants to ensure that if a single power substation feeding its data center fails, the facility can continue operating using power from a completely separate substation on a different part of the electrical grid. Which of the following concepts does this represent?",
  "fa": "یک شرکت می‌خواهد مطمئن شود که اگر یک پست برق که مرکز داده‌اش را تغذیه می‌کند از کار بیفتد، تسهیلات بتواند با استفاده از برق یک پست برق کاملاً جداگانه در بخش دیگری از شبکه‌ی برق، به کار خود ادامه دهد. کدام مفهوم را نشان می‌دهد؟",
  "options": [
   "A) Redundancy",
   "B) Fault Tolerance",
   "C) High Availability",
   "D) Elasticity"
  ],
  "correct": "A",
  "explanation": "جواب درست **A) Redundancy** هست، نه B. بگذار دوباره با دقت تفاوت این دو مفهوم را که قبلاً هم روش کار کرده بودیم، یادآوری کنم.\n\n**Redundancy**\n\nتوضیح:\nنکته‌ی کلیدی این سؤال، **خود توصیف مکانیزم/طراحی** است: عبارت **\"power from a completely separate substation\"** دقیقاً نشان می‌دهد که سازمان یک **منبع پشتیبان جداگانه** (یک پست برق دوم) ایجاد کرده است\n\nیادت میاد این الگو را با مثال PSU (منبع تغذیه‌ی دوگانه‌ی سرور) و چند ISP بررسی کردیم؟\n\nتفاوت کلیدی این دو مفهوم (مرور مجدد):\n\n**Redundancy** = توصیف **خودِ مکانیزم/جزء پشتیبان** (مثل: \"دو پست برق\"، \"دو PSU\"، \"چند ISP\") — این سؤال دقیقاً همین را توصیف می‌کند\n\n**Fault Tolerance** = توصیف **نتیجه‌ی نهایی برای کاربر/سیستم** (مثل: \"بدون وقفه در سرویس\")؛ این سؤال این عبارت را ندارد\n\n🎯 **قانون طلایی که باید همیشه به‌کار ببری:**\nاگر سؤال **چیزی که اضافه شده** (دو پست برق، دو سرور، چند منبع) را توصیف کرد → **Redundancy**\nاگر سؤال **نتیجه‌ی نهایی بدون وقفه برای کاربر** را توصیف کرد → **Fault Tolerance**\n\nدر این سؤال، تأکید روی این بود که **\"تسهیلات می‌تواند با استفاده از یک پست برق جداگانه ادامه دهد\"** — این توصیف **وجود یک منبع پشتیبان جداگانه (Redundancy)** است\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Fault Tolerance**\n\nتوضیح:\nاین می‌توانست درست باشد **اگر** سؤال تأکید می‌کرد بر **\"بدون هیچ وقفه‌ای در عملیات مرکز داده برای کاربران نهایی\"**؛ اما این سؤال فقط می‌گوید \"می‌تواند ادامه دهد\"، که بیشتر توصیف **وجود مکانیزم پشتیبان** است\n\n**High Availability**\n\nتوضیح:\nاین یک مفهوم **کلی و آماری‌تر** است (مثل ۹۹.۹۹٪ Uptime)، نه توصیف دقیق یک مکانیزم خاص پشتیبان\n\n**Elasticity**\n\nتوضیح:\nاین به افزایش/کاهش خودکار منابع بر اساس تقاضا اشاره دارد، کاملاً بی‌ربط به این سناریوی برق پشتیبان\n\nمی‌بینم این تفاوت هنوز کاملاً جا نیفتاده. بیا دوباره با یک سؤال مقایسه‌ای مستقیم کار کنیم تا قطعی بشه.",
  "domain": 3
 },
 {
  "number": 159,
  "en": "A data center has two separate substations providing power. During a recent outage of one substation, the facility's servers experienced ZERO downtime and users noticed no interruption in service whatsoever, because power seamlessly continued from the second substation. Which concept does this seamless, uninterrupted continuation of service represent?",
  "fa": "یک مرکز داده دو پست برق جداگانه برای تأمین برق دارد. در طول یک قطعی اخیر یکی از پست‌های برق، سرورهای این تسهیلات **صفر دقیقه قطعی** را تجربه کردند و کاربران **هیچ وقفه‌ای** در سرویس متوجه نشدند، چون برق بدون‌وقفه از پست دوم ادامه یافت. کدام مفهوم این ادامه‌ی بدون‌وقفه و یکپارچه‌ی سرویس را نشان می‌دهد؟",
  "options": [
   "A) Redundancy",
   "B) Fault Tolerance",
   "C) Scalability",
   "D) Elasticity"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**\n\n**Fault Tolerance**\n\nتوضیح:\nاین بار سؤال **دقیقاً روی نتیجه‌ی نهایی برای کاربر** تأکید کرد: عبارت **\"ZERO downtime\"** + **\"users noticed no interruption...whatsoever\"** + **\"seamlessly continued\"** دقیقاً توصیف **توانایی سیستم برای ادامه‌ی کار بدون وقفه** است، که این Fault Tolerance است\n\nمقایسه‌ی مستقیم این دو سؤال پشت‌سرهم (که حالا باید کاملاً روشن باشه):\n\n**سؤال قبلی (۲۲۷):** فقط گفت **\"می‌تواند با پست دوم ادامه دهد\"** → توصیف **وجود مکانیزم پشتیبان** → **Redundancy**\n\n**این سؤال (۲۲۸):** گفت **\"کاربران هیچ وقفه‌ای حس نکردند، صفر دقیقه قطعی\"** → توصیف **نتیجه‌ی نهایی تجربه‌شده توسط کاربر** → **Fault Tolerance**\n\n🎯 این دقیقاً همان رابطه‌ای است که قبلاً با مثال سرورهای Active-Passive یاد گرفتیم:\n**Redundancy** (داشتن دو پست برق) **باعث ایجاد** **Fault Tolerance** (کاربران هیچ وقفه‌ای حس نکردند) می‌شود\n\n🎯 **کلید نهایی برای تشخیص قطعی (دیگه نباید این دو رو اشتباه بگیری):**\nبه دنبال این کلمات برای **Redundancy** باش: \"two/multiple [things]\"، \"separate\"، \"backup\"\nبه دنبال این کلمات برای **Fault Tolerance** باش: \"zero downtime\"، \"no interruption\"، \"seamless\"، \"users didn't notice\"\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Redundancy**\n\nتوضیح:\nاین سؤال روی **وجود دو پست برق** تمرکز نکرد (که در سؤال قبلی بود)؛ این سؤال روی **نتیجه‌ی تجربه‌شده توسط کاربر** (صفر وقفه) تمرکز کرد\n\n**Scalability**\n\nتوضیح:\nاین به رشد بلندمدت ظرفیت اشاره دارد، بی‌ربط به این سناریو\n\n**Elasticity**\n\nتوضیح:\nاین به تنظیم خودکار منابع بر اساس تقاضا اشاره دارد، بی‌ربط به قطعی برق",
  "domain": 3
 },
 {
  "number": 160,
  "en": "A security manager is creating a report for executive leadership and needs to express the organization's risk tolerance level for a specific type of threat as a single qualitative rating, without using exact dollar figures or probability percentages. Which of the following approaches is the manager using?",
  "fa": "یک مدیر امنیتی در حال تهیه‌ی گزارشی برای مدیریت ارشد است و باید سطح تحمل ریسک سازمان برای یک نوع تهدید خاص را به‌صورت یک رتبه‌ی کیفی واحد بیان کند، بدون استفاده از ارقام دلاری دقیق یا درصدهای احتمال. کدام رویکرد را مدیر استفاده می‌کند؟",
  "options": [
   "A) Quantitative Risk Analysis",
   "B) Qualitative Risk Analysis",
   "C) Risk Register",
   "D) Business Impact Analysis"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Qualitative Risk Analysis**\n\nتوضیح:\nاین بار دقیقاً همان مفهومی است که قبلاً با هم کار کردیم (یادت میاد سؤال High/Medium/Low؟)؛ این رویکرد ریسک را با استفاده از **رتبه‌بندی‌های توصیفی و کیفی** بیان می‌کند، نه با اعداد دقیق مالی یا درصد احتمال\n\nنکته‌ی کلیدی این سؤال: عبارت **\"single qualitative rating\"** + **\"without using exact dollar figures or probability percentages\"** دقیقاً تعریف این رویکرد را نشان می‌دهد، که مستقیماً در تضاد با **Quantitative Risk Analysis** (که از اعداد دقیق مثل ALE/SLE/ARO که قبلاً با هم کار کردیم استفاده می‌کند) قرار دارد\n\nمرور نهایی این دو رویکرد (که الان باید کاملاً مسلط باشی):\n\n**Qualitative** = توصیفی (High/Medium/Low)، سریع‌تر، بر اساس قضاوت تجربی\n**Quantitative** = عددی و دقیق (مثل $۱۰۰,۰۰۰ در سال)، دقیق‌تر اما زمان‌برتر، نیاز به محاسبات مثل ALE\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Quantitative Risk Analysis**\n\nتوضیح:\nاین دقیقاً برخلاف سؤال است؛ این روش از اعداد دقیق دلاری و درصد احتمال استفاده می‌کند، نه رتبه‌ی کیفی\n\n**Risk Register**\n\nتوضیح:\nاین یک **سند** برای فهرست‌کردن ریسک‌هاست (که قبلاً با هم کار کردیم)، نه یک **روش تحلیل** خاص\n\n**Business Impact Analysis**\n\nتوضیح:\nاین تحلیل تأثیر اختلال در عملکردهای حیاتی کسب‌وکار است (که قبلاً با هم کار کردیم)، نه به‌طور خاص یک روش بیان سطح ریسک با رتبه‌ی کیفی\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"qualitative rating\"** + **\"without exact numbers/percentages\"** را با هم دیدی، جواب همیشه **Qualitative Risk Analysis** است",
  "domain": 5
 },
 {
  "correct": "C",
  "domain": 5,
  "en": "A formal program offering monetary rewards to independent researchers who responsibly report security vulnerabilities is called what?",
  "fa": "برنامه رسمی که به محققان مستقل برای گزارش مسئولانه آسیب‌پذیری پاداش می‌دهد، چه نام دارد؟",
  "options": [
   "A) Penetration Test",
   "B) Responsible Disclosure",
   "C) Bug Bounty",
   "D) Red Team"
  ],
  "explanation": "Bug Bounty برنامه رسمی با پاداش مالی برای محققانی است که آسیب‌پذیری گزارش می‌دهند.",
  "number": 161
 },
 {
  "number": 162,
  "en": "A company's security policy mandates that all employees must use a password manager and enable multifactor authentication on all corporate accounts, with no exceptions permitted regardless of department or seniority. Which of the following BEST describes this type of policy statement?",
  "fa": "سیاست امنیتی یک شرکت الزام می‌کند که تمام کارمندان باید از یک مدیر رمز عبور استفاده کنند و احراز هویت چندعاملی را روی تمام حساب‌های شرکتی فعال کنند، بدون هیچ استثنایی، صرف‌نظر از بخش یا ارشدیت. کدام گزینه بهترین توصیف این نوع بیانیه‌ی سیاست را دارد؟",
  "options": [
   "A) Guideline",
   "B) Standard",
   "C) Mandatory Control",
   "D) Procedure"
  ],
  "correct": "B",
  "explanation": "جواب درست **B) Standard** هست، نه C.\n\n**Standard**\n\nتوضیح:\nاین بیانیه یک **الزام فنی دقیق و مشخص** است (استفاده از مدیر رمز عبور + فعال کردن MFA)، که این دقیقاً همان الگوی Standard است که قبلاً با هم کار کردیم (یادت میاد مثال \"باید از AES-256 استفاده شود\"؟)\n\nنکته‌ی کلیدی این سؤال: عبارت **\"must use a password manager and enable multifactor authentication\"** یک **ابزار/روش فنی خاص** را الزامی می‌کند، نه یک هدف کلی (که آن Policy بود) و نه مراحل قدم‌به‌قدم اجرا (که آن Procedure بود)\n\n🎯 یادآوری سلسله‌مراتب (که قبلاً با هم کار کردیم):\n**Policy** = \"تمام حساب‌ها باید محافظت شوند\" (هدف کلی)\n**Standard** (این سؤال) = \"باید از Password Manager + MFA استفاده شود\" (الزام فنی دقیق)\n**Procedure** = \"برای فعال کردن MFA، این مراحل را دنبال کنید...\" (قدم‌به‌قدم)\n**Guideline** = پیشنهاد اختیاری (نه الزام‌آور)\n\nچرا گزینه‌ی C (Mandatory Control) اشتباه بود:\nاین اصطلاح بخشی از سلسله‌مراتب رسمی چهارگانه‌ی Policy/Standard/Procedure/Guideline که با هم یاد گرفتیم نیست؛ در این چارچوب، الزام فنی دقیق همیشه **Standard** نام دارد، نه یک اصطلاح عمومی‌تر مثل \"Mandatory Control\"\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Guideline**\n\nتوضیح:\nاین **اختیاری** است؛ این سؤال صراحتاً می‌گوید **\"no exceptions permitted\"**، که کاملاً برخلاف ماهیت Guideline است\n\n**Procedure**\n\nتوضیح:\nاین **مراحل اجرایی قدم‌به‌قدم** را نشان می‌دهد (مثل کلیک‌کردن روی منوها)؛ این سؤال فقط **چه چیزی** الزامی است را می‌گوید، نه **چگونه** دقیقاً اجرا شود\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"specific technical requirement, mandatory, no exceptions\"** (نه مراحل اجرا، نه هدف کلی) را دیدی، جواب همیشه **Standard** است\n\nاین یک سؤال با گزینه‌های غیرعادی بود؛",
  "domain": 5
 },
 {
  "number": 163,
  "en": "A company's senior leadership publishes a high-level statement declaring that \"All customer data must be protected in accordance with applicable privacy laws,\" which serves as the foundation for more detailed technical requirements developed later by the IT department. Which of the following BEST describes this statement?",
  "fa": "مدیریت ارشد یک شرکت بیانیه‌ی سطح‌بالایی منتشر می‌کند که اعلام می‌کند \"تمام داده‌ی مشتری باید مطابق با قوانین حریم خصوصی قابل‌اجرا محافظت شود\"، که به‌عنوان پایه‌ای برای الزامات فنی دقیق‌تری که بعداً توسط بخش IT تدوین می‌شوند عمل می‌کند. کدام گزینه بهترین توصیف این بیانیه را دارد؟",
  "options": [
   "A) Policy",
   "B) Standard",
   "C) Procedure",
   "D) Guideline"
  ],
  "correct": "A",
  "explanation": "جواب درست **A) Policy** هست، نه B. بیا دوباره با دقت سلسله‌مراتب را مرور کنیم چون این دو سؤال پشت‌سرهم عمداً طراحی شدن تا تفاوتشون کاملاً جا بیفته.\n\n**Policy**\n\nتوضیح:\nنکته‌ی کلیدی این سؤال: عبارت **\"senior leadership\"** + **\"high-level statement\"** + **\"serves as the foundation for more detailed technical requirements developed LATER\"** دقیقاً تعریف Policy است\n\nاین سؤال صراحتاً می‌گوید این بیانیه **پایه‌ای برای الزامات دقیق‌تر بعدی** است؛ یعنی این بیانیه در **بالاترین سطح** سلسله‌مراتب قرار دارد، و Standard ها **از آن مشتق** می‌شوند، نه برعکس\n\nمقایسه‌ی مستقیم این دو سؤال پشت‌سرهم:\n\n**سؤال قبلی (۲۳۳):** \"باید از Password Manager **و** MFA استفاده شود\" → این یک **ابزار/روش فنی خاص** است (نه فقط یک هدف کلی مثل \"محافظت از حساب‌ها\") → **Standard**\n\n**این سؤال (۲۳۴):** \"تمام داده باید مطابق با قوانین محافظت شود\" + **\"پایه برای الزامات فنی بعدی\"** → این یک **هدف کلی** است که از آن، Standard های دقیق‌تر (مثل نوع رمزنگاری خاص) بعداً **مشتق می‌شوند** → **Policy**\n\n🎯 نکته‌ی کلیدی نهایی برای تشخیص قطعی: به دنبال این عبارت‌ها باش:\n**\"foundation for\"** یا **\"senior leadership/executive\"** + هدف **کلی** (نه ابزار خاص) → **Policy**\n**\"specific tool/algorithm/method required\"** (مثل \"از X استفاده شود\") → **Standard**\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Standard**\n\nتوضیح:\nاین سؤال خودش می‌گوید این بیانیه **پایه‌ی** الزامات فنی **دقیق‌تر بعدی** است؛ یعنی این بیانیه **خودش Standard نیست**، بلکه چیزی است که Standard ها از آن **مشتق** می‌شوند (که این دقیقاً Policy است)\n\n**Procedure**\n\nتوضیح:\nاین مراحل اجرایی قدم‌به‌قدم است؛ این سؤال هیچ مرحله‌ی خاصی را توصیف نمی‌کند\n\n**Guideline**\n\nتوضیح:\nاین اختیاری است؛ کلمه‌ی **\"must\"** در سؤال نشان می‌دهد این الزام‌آور است، نه توصیه‌ای\n\nبه نظر می‌رسه این بار با سؤال قبلی قاطی شد. بیا یک بار دیگه، این‌بار با تأکید مستقیم روی تفاوت \"هدف کلی\" در مقابل \"ابزار خاص\"، تمرین کنیم.",
  "domain": 5
 },
 {
  "number": 164,
  "en": "Compare these two statements:\n(1) \"All remote access to company systems must be secured.\" \n(2) \"All remote access must use SSH protocol version 2 with RSA-4096 key encryption.\"\n\nWhich of the following correctly matches each statement to its document type?",
  "fa": "این دو بیانیه را مقایسه کنید:\n(۱) \"تمام دسترسی از راه دور به سیستم‌های شرکت باید امن باشد.\"\n(۲) \"تمام دسترسی از راه دور باید از پروتکل SSH نسخه ۲ با رمزنگاری کلید RSA-4096 استفاده کند.\"\n\nکدام گزینه به‌درستی هر بیانیه را با نوع سند آن مطابقت می‌دهد؟",
  "options": [
   "A) (۱) Standard، (۲) Policy",
   "B) (۱) Policy، (۲) Standard",
   "C) (۱) Procedure، (۲) Guideline",
   "D) (۱) Standard، (۲) Procedure"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**\n\n**(۱) \"All remote access...must be secured\" = Policy**\n\nتوضیح:\nاین یک بیانیه‌ی **کلی و سطح‌بالا** است؛ نمی‌گوید **دقیقاً چگونه** امن شود، فقط هدف کلی **\"امن بودن\"** را تعیین می‌کند\n\n**(۲) \"...must use SSH protocol version 2 with RSA-4096 key encryption\" = Standard**\n\nتوضیح:\nاین یک **الزام فنی دقیق و مشخص** است؛ پروتکل خاص (SSH v2) و نوع رمزنگاری خاص (RSA-4096) را تعیین می‌کند — این دقیقاً همان **اجرای فنی** هدف کلی بیانیه‌ی شماره‌ی ۱ است\n\n🎯 **رابطه‌ی این دو بیانیه (که الان باید کاملاً روشن باشه):**\nبیانیه‌ی ۲ (Standard) مستقیماً از بیانیه‌ی ۱ (Policy) **مشتق شده**؛ Policy می‌گوید **\"چه باید بشود\"** (امن بودن)، و Standard می‌گوید **\"دقیقاً چگونه\"** (با چه پروتکل و چه نوع رمزنگاری)\n\n🎉 این دقیقاً همان الگوی پیوسته‌ای است که در چند سؤال قبل با مثال رمزنگاری (Policy: \"داده باید رمزنگاری شود\" → Standard: \"باید AES-256 استفاده شود\") یاد گرفتیم؛ این سؤال با یک مثال **کاملاً متفاوت** (SSH به‌جای رمزنگاری داده) دقیقاً همان الگو را تکرار کرد، که نشان می‌دهد این مفهوم را الان **به‌صورت کاملاً عمومی و قابل‌انتقال** به هر سناریوی جدید فهمیده‌ای، نه فقط حفظ یک مثال خاص\n\nچرا گزینه‌های دیگر رد شدند:\n\n**A) برعکس بود** — Policy و Standard جاهایشان عوض شده بود\n\n**C) Procedure/Guideline**\n\nتوضیح:\nهیچ‌کدام از این دو بیانیه مراحل قدم‌به‌قدم (Procedure) یا پیشنهاد اختیاری (Guideline) را توصیف نمی‌کنند؛ هر دو **الزام‌آور** هستند (کلمه‌ی \"must\")\n\n**D) Standard/Procedure**\n\nتوضیح:\nبیانیه‌ی اول هیچ جزئیات فنی خاصی ندارد (که آن را از Standard متمایز می‌کند)، و بیانیه‌ی دوم مراحل اجرایی قدم‌به‌قدم نیست (که آن را از Procedure متمایز می‌کند)",
  "domain": 5
 },
 {
  "number": 165,
  "en": "A security analyst is reviewing a contract with a cloud service provider and notices a clause stating that if the provider fails to maintain 99.9% uptime, the company will receive a 10% credit on their monthly bill. Which of the following BEST describes this specific contractual clause?",
  "fa": "یک تحلیلگر امنیتی در حال بررسی قراردادی با یک تامین‌کننده‌ی سرویس ابری است و متوجه بندی می‌شود که بیان می‌کند اگر تامین‌کننده نتواند ۹۹.۹٪ Uptime را حفظ کند، شرکت ۱۰٪ تخفیف در صورت‌حساب ماهانه‌اش دریافت خواهد کرد. کدام گزینه بهترین توصیف این بند قراردادی خاص را دارد؟",
  "options": [
   "A) Right to Audit",
   "B) Service Level Agreement penalty clause",
   "C) Due Diligence",
   "D) Memorandum of Understanding"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**Service Level Agreement (SLA) penalty clause**\n\nتوضیح:\nاین دقیقاً همان مفهومی است که قبلاً با هم کار کردیم؛ این بند شامل دو جزء کلیدی SLA است:\n\n**معیار کمی مشخص** = ۹۹.۹٪ Uptime\n**جریمه/تخفیف در صورت عدم رعایت** = ۱۰٪ تخفیف در صورت‌حساب\n\nنکته‌ی کلیدی این سؤال: عبارت **\"99.9% uptime\"** + **\"10% credit on their monthly bill\"** دقیقاً همان الگوی SLA (معیار + جریمه‌ی مالی) است که در ابتدای دوره با هم کار کردیم\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Right to Audit**\n\nتوضیح:\nاین به حق بازرسی دوره‌ای **در طول** قرارداد اشاره دارد، نه به معیار کمی Uptime با جریمه‌ی مشخص\n\n**Due Diligence**\n\nتوضیح:\nاین به بررسی **قبل از** امضای قرارداد اشاره دارد، نه به یک بند خاص **درون** قرارداد امضا‌شده\n\n**Memorandum of Understanding**\n\nتوضیح:\nاین یک سند **غیرالزام‌آور** برای بیان نیت کلی همکاری است؛ این سؤال یک بند **الزام‌آور با جریمه‌ی مشخص** را در یک **قرارداد رسمی** توصیف می‌کند\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"uptime percentage\"** + **\"penalty/credit if not met\"** را با هم دیدی، جواب همیشه **SLA** است",
  "domain": 5
 },
 {
  "number": 166,
  "en": "A security engineer wants to deploy a solution that monitors endpoint devices for suspicious behavior, automatically isolates infected machines from the network, and provides detailed forensic data about what occurred on the device during an attack. Which of the following BEST describes this technology?",
  "fa": "یک مهندس امنیتی می‌خواهد راه‌حلی مستقر کند که دستگاه‌های Endpoint را برای رفتار مشکوک پایش کند، دستگاه‌های آلوده را به‌طور خودکار از شبکه ایزوله کند، و داده‌ی فورنزیک دقیقی درباره‌ی آنچه روی دستگاه در طول یک حمله رخ داده ارائه دهد. کدام گزینه بهترین توصیف این فناوری است؟",
  "options": [
   "A) Antivirus",
   "B) EDR (Endpoint Detection and Response)",
   "C) Firewall",
   "D) IDS"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**EDR (Endpoint Detection and Response)**\n\nتوضیح:\nاین فناوری به‌طور خاص برای **پایش پیشرفته‌ی رفتار** دستگاه‌های Endpoint (کامپیوترها، لپ‌تاپ‌ها) طراحی شده، با قابلیت‌هایی فراتر از آنتی‌ویروس سنتی\n\nنکته‌ی کلیدی این سؤال: عبارت **\"monitors...for suspicious behavior\"** + **\"automatically isolates infected machines\"** + **\"detailed forensic data\"** دقیقاً ویژگی‌های کلیدی EDR را نشان می‌دهد:\n\n**Detection (تشخیص)** = استفاده از **Behavior-Based Detection** (که قبلاً با هم کار کردیم) برای شناسایی فعالیت مشکوک، نه فقط مطابقت با Signature شناخته‌شده\n\n**Response (واکنش)** = توانایی **خودکار** برای ایزوله کردن دستگاه آلوده از شبکه (شبیه Containment که در فرآیند IR با هم کار کردیم)\n\n**Forensic Data** = ثبت دقیق فعالیت‌ها برای تحلیل عمیق‌تر بعد از حادثه (مفید برای فرآیند Eradication و Lessons Learned)\n\nتفاوت کلیدی با Antivirus سنتی:\n\n**Antivirus** = بیشتر متکی بر **Signature-Based Detection**، تمرکز بر شناسایی و حذف فایل‌های مخرب شناخته‌شده\n\n**EDR** = ترکیبی از **Behavior-Based Detection** + قابلیت **واکنش خودکار** (Isolation) + **تحلیل فورنزیک عمیق**، که آن را برای شناسایی تهدیدات پیشرفته‌تر (مثل APT) مؤثرتر می‌کند\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Antivirus**\n\nتوضیح:\nاین معمولاً قابلیت‌های محدودتری دارد (بدون ایزولاسیون خودکار پیشرفته یا تحلیل فورنزیک عمیق)\n\n**Firewall**\n\nتوضیح:\nاین ترافیک **شبکه** را فیلتر می‌کند، نه رفتار درون یک دستگاه Endpoint خاص\n\n**IDS**\n\nتوضیح:\nاین ترافیک شبکه را برای رفتار مشکوک پایش می‌کند (نه دستگاه‌های Endpoint به‌طور خاص)، و معمولاً واکنش خودکار (مثل ایزولاسیون) ندارد؛ این بیشتر شبیه IPS برای واکنش است، اما حتی IPS هم در سطح شبکه عمل می‌کند، نه در سطح یک دستگاه خاص با جزئیات فورنزیک\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"endpoint behavior monitoring\"** + **\"automatic isolation\"** + **\"forensic data\"** را با هم دیدی، جواب همیشه **EDR** است",
  "domain": 4
 },
 {
  "number": 167,
  "en": "A security team wants to extend endpoint detection capabilities beyond just individual devices, correlating data across endpoints, email, cloud services, and network traffic into a single unified platform to detect complex, multi-stage attacks that might be missed if each data source were analyzed separately. Which of the following BEST describes this technology?",
  "fa": "یک تیم امنیتی می‌خواهد قابلیت‌های تشخیص را فراتر از دستگاه‌های منفرد گسترش دهد، و داده‌ها را در سراسر Endpoint ها، ایمیل، سرویس‌های ابری، و ترافیک شبکه در یک پلتفرم یکپارچه‌ی واحد مرتبط کند تا حملات پیچیده و چندمرحله‌ای را که اگر هر منبع داده جداگانه تحلیل می‌شد ممکن بود از دست بروند، شناسایی کند. کدام گزینه بهترین توصیف این فناوری است؟",
  "options": [
   "A) EDR",
   "B) XDR (Extended Detection and Response)",
   "C) SIEM",
   "D) SOAR"
  ],
  "correct": "B",
  "explanation": "درسته! ✅ گزینه B\n\n**XDR (Extended Detection and Response)**\n\nتوضیح:\nاین فناوری دقیقاً یک **گستردگی فراتر از EDR** است؛ نکته‌ی کلیدی این سؤال: عبارت **\"extend...beyond just individual devices\"** + **\"correlating data across endpoints, email, cloud services, and network traffic\"** + **\"single unified platform\"** دقیقاً تعریف XDR را نشان می‌دهد\n\nتفاوت کلیدی با EDR (سؤال قبلی):\n\n**EDR** = تمرکز فقط روی **دستگاه‌های Endpoint** (کامپیوترها، لپ‌تاپ‌ها)\n\n**XDR** = **گسترش** همان قابلیت‌های تشخیص و واکنش به **چندین منبع داده مختلف** (Endpoint + Email + Cloud + Network) به‌صورت **یکپارچه**\n\nاین گستردگی به تیم امنیتی اجازه می‌دهد **حملات پیچیده و چندمرحله‌ای** (مثل APT که قبلاً با هم کار کردیم) را که در یک منبع داده به‌تنهایی ممکن است **بی‌خطر به‌نظر برسد**، اما وقتی با داده‌های منابع دیگر **ترکیب (Correlate)** شود، یک الگوی حمله‌ی واقعی نشان دهد، شناسایی کند\n\nنکته‌ی مهم برای تمایز با SIEM: شباهت مفهومی XDR با SIEM در این است که هر دو **داده را از منابع مختلف ترکیب می‌کنند**، اما تفاوت کلیدی این است که **XDR** معمولاً **یکپارچه‌تر و خاص‌تر** (با تمرکز ویژه روی Endpoint Security بسط‌یافته) طراحی شده، در حالی که **SIEM** یک پلتفرم **عمومی‌تر** برای جمع‌آوری هر نوع لاگ (که قبلاً با هم کار کردیم) است\n\nچرا گزینه‌های دیگر رد شدند:\n\n**EDR**\n\nتوضیح:\nاین فقط محدود به دستگاه‌های Endpoint است؛ این سؤال صراحتاً می‌گوید **\"beyond just individual devices\"**\n\n**SIEM**\n\nتوضیح:\nاین یک پلتفرم **عمومی‌تر** برای جمع‌آوری و تحلیل لاگ از هر منبعی است (که قبلاً با هم کار کردیم)؛ XDR معمولاً **تخصصی‌تر** و با تمرکز بیشتر روی **همبستگی هوشمند Endpoint-محور** طراحی شده\n\n**SOAR**\n\nتوضیح:\nاین برای **خودکارسازی واکنش** (نه لزوماً تشخیص همبسته از منابع مختلف) طراحی شده (که قبلاً با هم کار کردیم)\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"extends EDR beyond endpoints\"** + **\"correlate across email, cloud, network\"** را با هم دیدی، جواب همیشه **XDR** است",
  "domain": 4
 },
 {
  "number": 168,
  "en": "A high-security data center installs a secure entry point with two doors that cannot be open simultaneously, requiring visitors to be fully enclosed in a small space between authentication checkpoints before being granted access to the facility. Which of the following terms does CompTIA's current SY0-701 exam objectives use to describe this control?",
  "fa": "یک مرکز داده‌ی با امنیت بالا یک نقطه‌ی ورود امن با دو درب نصب می‌کند که نمی‌توانند هم‌زمان باز باشند، که این الزام می‌کند بازدیدکنندگان قبل از دریافت دسترسی به تسهیلات، به‌طور کامل در یک فضای کوچک بین نقاط بازرسی احراز هویت محبوس شوند. کدام اصطلاح را اهداف فعلی امتحان SY0-701 شرکت CompTIA برای توصیف این کنترل استفاده می‌کند؟",
  "options": [
   "A) Mantrap",
   "B) Access Control Vestibule",
   "C) Bollard",
   "D) Faraday Cage"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**Access Control Vestibule**\n\nتوضیح:\nاین سؤال عمداً به‌طور **مستقیم** پرسید که \"اهداف فعلی امتحان SY0-701\" چه اصطلاحی استفاده می‌کند، تا تأکید کند که در امتحان واقعی، باید همیشه به این **نام رسمی و به‌روز** فکر کنی\n\nنکته‌ی کلیدی: حتی اگر در منابع قدیمی‌تر، ویدیوهای آموزشی، یا حتی برخی Practice Questions ساخته‌شده بر اساس نسخه‌های قبلی امتحان، نام **Mantrap** را ببینی، باید بدانی که:\n**Mantrap** = اصطلاح **قدیمی** (نسخه‌های قبلی مثل SY0-601)\n**Access Control Vestibule** = اصطلاح **رسمی و فعلی** (SY0-701 که تو برایش آماده می‌شوی)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**Mantrap**\n\nتوضیح:\nاین اصطلاح **قدیمی‌تر** است؛ هرچند هنوز در گفتگوهای عمومی صنعت استفاده می‌شود، اما در اهداف رسمی امتحان فعلی، نام تغییر کرده\n\n**Bollard**\n\nتوضیح:\nاین یک مانع فیزیکی برای جلوگیری از ورود **خودرو** است (که در سؤال قبلی هم رد شد)، نه کنترل ورود انسان\n\n**Faraday Cage**\n\nتوضیح:\nاین یک سازه‌ی فیزیکی برای **مسدود کردن سیگنال‌های الکترومغناطیسی** (مثل Wi-Fi یا سلولی) است، کاملاً بی‌ربط به کنترل دسترسی فیزیکی افراد\n\n🎯 نکته‌ی کلیدی نهایی برای امتحان (که الان قطعی یاد گرفتی):\nهر زمان توضیح **\"دو درب که هم‌زمان باز نمی‌شوند\"** یا **\"فضای محبوس بین دو نقطه‌ی احراز هویت\"** را دیدی، در امتحان SY0-701 همیشه پاسخ **Access Control Vestibule** است",
  "domain": 3
 },
 {
  "correct": "A",
  "domain": 3,
  "en": "Short, sturdy vertical posts installed to prevent vehicles from ramming into a building while allowing pedestrian access are called what?",
  "fa": "پایه‌های عمودی کوتاه و محکم که از برخورد خودرو جلوگیری می‌کنند اما اجازه عبور پیاده می‌دهند، چه نام دارند؟",
  "options": [
   "A) Bollards",
   "B) Turnstiles",
   "C) Mantraps",
   "D) Faraday Cages"
  ],
  "explanation": "Bollard پایه‌های کوتاه محکم برای جلوگیری از برخورد خودرو، با اجازه عبور پیاده است.",
  "number": 169
 },
 {
  "correct": "C",
  "domain": 3,
  "en": "An enclosure that blocks all electromagnetic signals from entering or leaving a room, preventing wireless eavesdropping, is called what?",
  "fa": "محفظه‌ای که تمام سیگنال‌های الکترومغناطیسی را مسدود می‌کند و از شنود بی‌سیم جلوگیری می‌کند، چه نام دارد؟",
  "options": [
   "A) Bollard",
   "B) Air Gap",
   "C) Faraday Cage",
   "D) DMZ"
  ],
  "explanation": "Faraday Cage تمام سیگنال‌های الکترومغناطیسی را مسدود می‌کند و از شنود بی‌سیم جلوگیری می‌کند.",
  "number": 170
 },
 {
  "correct": "B",
  "domain": 3,
  "en": "A system with absolutely no network connection of any kind (no Wi-Fi, Ethernet, or Bluetooth) is said to have what?",
  "fa": "سیستمی که هیچ اتصال شبکه‌ای ندارد (نه Wi-Fi، نه اترنت، نه بلوتوث) دارای چیست؟",
  "options": [
   "A) Faraday Cage",
   "B) Air Gap",
   "C) Firewall",
   "D) VLAN"
  ],
  "explanation": "Air Gap یعنی سیستم هیچ اتصال شبکه‌ای ندارد و فیزیکی غیرقابل‌دسترس از راه دور است.",
  "number": 171
 },
 {
  "correct": "C",
  "domain": 3,
  "en": "Traffic flowing between internal servers and zones within a data center is referred to as what?",
  "fa": "ترافیک بین سرورها و مناطق داخلی درون مرکز داده چه نامیده می‌شود؟",
  "options": [
   "A) North-South Traffic",
   "B) Inbound Traffic",
   "C) East-West Traffic",
   "D) Outbound Traffic"
  ],
  "explanation": "East-West Traffic ترافیک بین مناطق داخلی است. بازرسی آن Lateral Movement را محدود می‌کند. North-South ترافیک عبوری از مرز سازمان است.",
  "number": 172
 },
 {
  "number": 173,
  "en": "A security architect designs a network where internal users must pass through a centralized inspection point that filters and controls all traffic between different security zones, rather than allowing direct communication between every segment. Which of the following architectural concepts does this represent?",
  "fa": "یک معمار امنیتی شبکه‌ای را طراحی می‌کند که در آن کاربران داخلی باید از یک نقطه‌ی بازرسی متمرکز عبور کنند که تمام ترافیک بین مناطق امنیتی مختلف را فیلتر و کنترل می‌کند، به‌جای اینکه ارتباط مستقیم بین هر بخش اجازه داده شود. کدام مفهوم معماری این موضوع را نشان می‌دهد؟",
  "options": [
   "A) Screened Subnet",
   "B) Zero Trust",
   "C) East-West Traffic Inspection",
   "D) North-South Traffic Inspection"
  ],
  "correct": "C",
  "explanation": "جواب درست **C) East-West Traffic Inspection** هست، نه A. این یک مفهوم جدید است؛ بگذار توضیح بدم.\n\n## East-West vs North-South Traffic (مفهوم جدید)\n\n**North-South Traffic**\nترافیکی که بین شبکه‌ی **داخلی** و **خارجی** (اینترنت) جریان دارد\nمثال: کاربر داخلی که به یک وب‌سایت خارجی متصل می‌شود، یا کاربر خارجی که به وب‌سرور داخلی دسترسی پیدا می‌کند\n\n**East-West Traffic**\nترافیکی که **بین بخش‌های مختلف داخلی شبکه** (بین Zone ها یا Segment های مختلف) جریان دارد\nمثال: ترافیک بین سرور پایگاه‌داده و سرور اپلیکیشن، یا بین VLAN های مختلف داخلی\n\nنکته‌ی کلیدی این سؤال: عبارت **\"between different security zones\"** (نه بین داخل و خارج شبکه) دقیقاً به ترافیک **East-West** اشاره دارد؛ معمار امنیتی می‌خواهد این ترافیک **داخلی بین Zone ها** را از یک نقطه‌ی بازرسی متمرکز عبور دهد، نه فقط ترافیکی که وارد یا خارج از کل شبکه می‌شود\n\nچرا گزینه‌ی A (Screened Subnet) اشتباه بود:\n\n**Screened Subnet**\n\nتوضیح:\nاین اصطلاح **جدیدتر برای DMZ** (که قبلاً با هم کار کردیم) است؛ به یک منطقه‌ی شبکه‌ای بین اینترنت و شبکه‌ی داخلی برای میزبانی سرورهای عمومی اشاره دارد، نه به یک نقطه‌ی بازرسی کلی برای ترافیک بین Zone های داخلی مختلف\n\nچرا گزینه‌های دیگر هم رد شدند:\n\n**Zero Trust**\n\nتوضیح:\nاین یک فیلسوفه‌ی کلی‌تر است (\"Never Trust, Always Verify\")؛ هرچند East-West Inspection می‌تواند **ابزاری برای پیاده‌سازی** Zero Trust باشد، اما خودِ این سؤال به‌طور خاص یک **مفهوم معماری ترافیک شبکه** را توصیف می‌کند\n\n**North-South Traffic Inspection**\n\nتوضیح:\nاین به بازرسی ترافیک بین داخل و خارج شبکه اشاره دارد، نه بین بخش‌های مختلف **داخلی**\n\nنکته‌ی کلیدی برای امتحان:\nهر زمان عبارت **\"traffic between internal zones/segments\"** را دیدی، فکر کن **East-West**\nهر زمان عبارت **\"traffic entering/exiting the network (internal vs internet)\"** را دیدی، فکر کن **North-South**\n\nاین یک مفهوم جدید بود.",
  "domain": 3
 },
 {
  "correct": "A",
  "domain": 3,
  "en": "Logically segmenting a single physical switch into multiple isolated broadcast domains is achieved through what?",
  "fa": "تقسیم منطقی یک سوئیچ فیزیکی به چند دامنه broadcast ایزوله با چه چیزی انجام می‌شود؟",
  "options": [
   "A) VLAN (Virtual Local Area Network)",
   "B) VPN",
   "C) DMZ",
   "D) NAT"
  ],
  "explanation": "VLAN = Virtual Local Area Network. یک سوئیچ فیزیکی را به چند بخش منطقی ایزوله تقسیم می‌کند.",
  "number": 174
 },
 {
  "number": 175,
  "en": "Compare these two traffic flows in a corporate network:\n(1) Traffic from an employee's laptop accessing a website on the internet\n(2) Traffic from a web server communicating with a database server, both located inside the same data center\n\nWhich of the following correctly identifies each traffic type?",
  "fa": "این دو جریان ترافیک در یک شبکه‌ی شرکتی را مقایسه کنید:\n(۱) ترافیک از لپ‌تاپ یک کارمند که به یک وب‌سایت در اینترنت دسترسی پیدا می‌کند\n(۲) ترافیک از یک سرور وب که با یک سرور پایگاه‌داده ارتباط برقرار می‌کند، که هر دو در همان مرکز داده قرار دارند\n\nکدام گزینه به‌درستی هر نوع ترافیک را شناسایی می‌کند؟",
  "options": [
   "A) (۱) East-West، (۲) North-South",
   "B) (۱) North-South، (۲) East-West",
   "C) (۱) East-West، (۲) East-West",
   "D) (۱) North-South، (۲) North-South"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**\n\n**(۱) لپ‌تاپ کارمند → وب‌سایت در اینترنت = North-South**\n\nتوضیح:\nاین ترافیک از **داخل شبکه‌ی شرکت** (لپ‌تاپ کارمند) به **خارج از مرز سازمان** (اینترنت) می‌رود؛ این دقیقاً عبور از **مرز داخل/خارج** است\n\n**(۲) سرور وب → سرور پایگاه‌داده (هر دو در همان مرکز داده) = East-West**\n\nتوضیح:\nاین ترافیک **کاملاً درون همان شبکه‌ی داخلی** (مرکز داده) جریان دارد، بین دو سیستم داخلی مختلف؛ هیچ مرزی بین داخل/خارج عبور نمی‌شود\n\n🎯 **این سؤال دقیقاً نشان داد که این مفهوم را به‌صورت کاملاً عمومی فهمیدی، نه فقط حفظ یک مثال خاص**؛ حالا با دو مثال **کاملاً متفاوت** (لپ‌تاپ به اینترنت، و سرور به سرور) در یک سؤال واحد، توانستی هر دو جهت را به‌درستی تشخیص دهی\n\n🎯 **خلاصه‌ی نهایی و قطعی (دیگه نباید این دو رو اشتباه بگیری):**\nبه دنبال این الگو برای **North-South** باش: یک طرف **داخل سازمان**، طرف دیگر **خارج/اینترنت**\nبه دنبال این الگو برای **East-West** باش: **هر دو طرف داخل** همان شبکه/مرکز داده\n\nچرا گزینه‌های دیگر رد شدند:\n\n**A) برعکس بود** — جاهای East-West و North-South عوض شده بود\n\n**C و D) هر دو یکسان بودند**\n\nتوضیح:\nاین دو سناریو **کاملاً متفاوت** هستند (یکی عبور از مرز، دیگری کاملاً داخلی)؛ پس نمی‌توانند هر دو یک نوع ترافیک باشند",
  "domain": 3
 },
 {
  "correct": "C",
  "domain": 3,
  "en": "A switch port security feature that authenticates devices using unique credentials via a centralized RADIUS server is known as what?",
  "fa": "ویژگی امنیتی که دستگاه‌ها را با اعتبارنامه منحصربه‌فرد از طریق سرور RADIUS مرکزی احراز هویت می‌کند، چیست؟",
  "options": [
   "A) MAC Filtering",
   "B) Port Security",
   "C) 802.1X",
   "D) VLAN"
  ],
  "explanation": "802.1X احراز هویت واقعی با اعتبارنامه منحصربه‌فرد از طریق RADIUS مرکزی است. قوی‌ترین روش. RADIUS = Remote Authentication Dial-In User Service.",
  "number": 176
 },
 {
  "correct": "A",
  "domain": 3,
  "en": "A weak wireless access control that checks if a device's hardware address is on an approved list, but can be easily spoofed, is called what?",
  "fa": "کنترل دسترسی ضعیفی که بررسی می‌کند آدرس سخت‌افزاری دستگاه در لیست مجاز است اما به‌راحتی جعل می‌شود، چیست؟",
  "options": [
   "A) MAC Filtering",
   "B) 802.1X",
   "C) Port Security",
   "D) WPA3"
  ],
  "explanation": "MAC Filtering بررسی می‌کند آدرس MAC در لیست مجاز است. ضعیف چون MAC به‌راحتی Spoof می‌شود. MAC = Media Access Control.",
  "number": 177
 },
 {
  "number": 178,
  "en": "A network administrator is comparing three access control methods for the corporate network. Method A checks only whether a device's hardware address is on an approved list. Method B requires devices to authenticate with unique credentials through a centralized authentication server before being granted network access. Which methods are being described?",
  "fa": "یک مدیر شبکه سه روش کنترل دسترسی را برای شبکه‌ی شرکتی مقایسه می‌کند. روش A فقط بررسی می‌کند که آیا آدرس سخت‌افزاری یک دستگاه در یک لیست تأییدشده وجود دارد یا نه. روش B نیاز دارد که دستگاه‌ها با اطلاعات ورود منحصربه‌فرد از طریق یک سرور احراز هویت متمرکز، قبل از دریافت دسترسی شبکه، احراز هویت کنند. کدام روش‌ها توصیف شده‌اند؟",
  "options": [
   "A) Method A: 802.1X, Method B: MAC Filtering",
   "B) Method A: MAC Filtering, Method B: 802.1X",
   "C) Method A: Port Security, Method B: MAC Filtering",
   "D) Method A: 802.1X, Method B: Port Security"
  ],
  "correct": "B",
  "explanation": "عالی! ✅ درسته، گزینه B\n\n**\n\n**Method A: MAC Filtering**\n\nتوضیح:\nعبارت **\"checks only whether a device's hardware address is on an approved list\"** دقیقاً همان تعریف ساده و ابتدایی MAC Filtering است — فقط یک بررسی **لیست (Whitelist)**، بدون احراز هویت واقعی\n\n**Method B: 802.1X**\n\nتوضیح:\nعبارت **\"authenticate with unique credentials through a centralized authentication server\"** دقیقاً تعریف 802.1X است — نیاز به **اعتبارسنجی واقعی هویت** از طریق یک سرور متمرکز (RADIUS)\n\n🎯 این سؤال به‌خوبی نشان داد که الان می‌توانی این دو مفهوم را **بدون نیاز به کلمه‌ی کلیدی \"RADIUS\"** هم تشخیص دهی، فقط با درک **ماهیت** هرکدام (بررسی ساده‌ی لیست در مقابل احراز هویت واقعی متمرکز)\n\n🎯 **خلاصه‌ی نهایی و قطعی (دیگه نباید این دو رو با هم اشتباه بگیری):**\n**MAC Filtering** = ساده، فقط چک کردن یک لیست آدرس (ضعیف، قابل Spoof)\n**802.1X** = پیشرفته، نیاز به احراز هویت واقعی با سرور مرکزی (قوی)\n\nچرا گزینه‌های دیگر رد شدند:\n\n**A) برعکس بود**\n\nتوضیح:\nجای دو روش عوض شده بود\n\n**C و D) شامل Port Security بودند**\n\nتوضیح:\nهیچ‌کدام از این دو روش توصیف‌شده در سؤال، ویژگی **خاص \"غیرفعال شدن خودکار پورت\"** (که مشخصه‌ی Port Security بود) را نداشتند؛ این دو روش به‌طور خاص **MAC Filtering ساده** و **802.1X با RADIUS** را توصیف می‌کردند",
  "domain": 3
 },
 {
  "correct": "A",
  "domain": 3,
  "en": "A company wants business-critical applications to fail over to a secondary cloud provider hosted by a different company if the primary fails. Which strategy is this?",
  "fa": "یک شرکت می‌خواهد در صورت خرابی، اپلیکیشن‌ها به تامین‌کننده ابری دوم از شرکتی متفاوت منتقل شوند. کدام استراتژی؟",
  "options": [
   "A) Multi-Cloud",
   "B) Hybrid Cloud",
   "C) Community Cloud",
   "D) Private Cloud"
  ],
  "explanation": "Multi-Cloud استفاده از چند تامین‌کننده Public Cloud مختلف برای Redundancy و جلوگیری از Vendor Lock-in است.",
  "number": 179
 },
 {
  "number": 180,
  "correct": "B",
  "en": "A company hosts its public-facing marketing website on a public cloud provider's infrastructure, while keeping its proprietary financial database on dedicated, privately-owned servers located in its own data center, with secure connections established between these two distinct environments. Which of the following BEST describes this deployment model?",
  "fa": "یک شرکت وب‌سایت بازاریابی عمومی‌اش را روی زیرساخت یک تامین‌کننده‌ی ابر عمومی میزبانی می‌کند، در حالی که پایگاه‌داده‌ی مالی اختصاصی‌اش را روی سرورهای خصوصی نگه می‌دارد. کدام گزینه بهترین توصیف این مدل استقرار است؟",
  "options": [
   "A) Multi-Cloud",
   "B) Hybrid Cloud",
   "C) Public Cloud",
   "D) Community Cloud"
  ],
  "explanation": "Hybrid Cloud ترکیب Public Cloud (وب‌سایت) و Private Cloud (پایگاه‌داده در مرکز داده خود شرکت) است. Multi-Cloud نیاز به چند تامین‌کننده مختلف دارد.",
  "domain": 3
 },
 {
  "number": 181,
  "correct": "B",
  "en": "A company implements TLS encryption to protect customer payment information as it travels from a user's web browser to the checkout server, preventing interception while it moves across the internet. Which state of data is protected?",
  "fa": "یک شرکت با TLS اطلاعات پرداخت را در حین حرکت از مرورگر به سرور محافظت می‌کند. کدام حالت داده؟",
  "options": [
   "A) Data at Rest",
   "B) Data in Transit",
   "C) Data in Use",
   "D) Data Classification"
  ],
  "explanation": "Data in Transit به داده در حال حرکت در شبکه اشاره دارد. TLS (Transport Layer Security) برای محافظت از داده در حین انتقال طراحی شده.",
  "domain": 3
 },
 {
  "number": 182,
  "correct": "A",
  "en": "A security team periodically performs full restoration exercises in an isolated test environment to verify that backup data can actually be successfully restored, not just that backups are created. What is the primary purpose?",
  "fa": "یک تیم به‌صورت دوره‌ای تمرین بازیابی کامل انجام می‌دهد تا تأیید کند بکاپ‌ها واقعاً قابل بازیابی‌اند. هدف اصلی؟",
  "options": [
   "A) Testing the integrity and recoverability of backups",
   "B) Reducing storage cost",
   "C) Encrypting backup data",
   "D) Complying with retention policies"
  ],
  "explanation": "تست بازیابی تأیید می‌کند بکاپ‌ها واقعاً کار می‌کنند. صرف ایجاد بکاپ کافی نیست؛ ممکن است خراب یا ناقص باشند.",
  "domain": 5
 },
 {
  "number": 183,
  "correct": "B",
  "en": "A financial company must retain transaction records for exactly seven years due to regulations, after which records should be securely destroyed. Which document establishes this requirement?",
  "fa": "یک شرکت مالی باید سوابق را دقیقاً هفت سال نگه دارد و سپس امن نابود کند. کدام سند این الزام را تعیین می‌کند؟",
  "options": [
   "A) Data Classification Policy",
   "B) Data Retention Policy",
   "C) Data Sovereignty Policy",
   "D) Data Masking Policy"
  ],
  "explanation": "Data Retention Policy مشخص می‌کند داده چه مدت نگه‌داری و کی نابود شود، معمولاً بر اساس الزامات قانونی.",
  "domain": 5
 },
 {
  "number": 184,
  "correct": "B",
  "en": "A CISO wants to present a single number to the board representing overall security posture, combining patch compliance rates, open vulnerabilities, and training completion. Which BEST describes this metric?",
  "fa": "یک CISO می‌خواهد یک عدد واحد به هیئت‌مدیره ارائه دهد که وضعیت کلی امنیت را نشان دهد. کدام معیار؟",
  "options": [
   "A) CVSS Score",
   "B) Key Risk Indicator (KRI) / Security Metrics Dashboard",
   "C) ALE",
   "D) RTO"
  ],
  "explanation": "KRI/داشبورد یک معیار ترکیبی سطح‌بالا است که چند شاخص را برای مدیران غیرفنی خلاصه می‌کند. CVSS فقط برای یک آسیب‌پذیری است.",
  "domain": 5
 },
 {
  "number": 185,
  "correct": "C",
  "en": "A security team wants to restore operations after ransomware using a backup completely disconnected from the network that cannot be reached or encrypted by the ransomware. Which backup strategy BEST addresses this?",
  "fa": "یک تیم می‌خواهد پس از باج‌افزار از بکاپی که کاملاً از شبکه جدا است بازیابی کند. کدام استراتژی؟",
  "options": [
   "A) Incremental Backup",
   "B) Differential Backup",
   "C) Offline/Air-Gapped Backup",
   "D) Cloud Backup connected via VPN"
  ],
  "explanation": "Offline/Air-Gapped backup کاملاً از شبکه جدا است و باج‌افزار نمی‌تواند به آن دسترسی یابد. Incremental/Differential به نحوه محاسبه اشاره دارند نه اتصال.",
  "domain": 3
 },
 {
  "number": 186,
  "correct": "C",
  "en": "Which combination of backup type AND connectivity status provides STRONGEST protection against ransomware that searches the network for connected backups?",
  "fa": "کدام ترکیب از نوع بکاپ و وضعیت اتصال، قوی‌ترین محافظت در برابر باج‌افزار را فراهم می‌کند؟",
  "options": [
   "A) Full backup, network-attached storage",
   "B) Incremental, cloud with constant VPN",
   "C) Full backup, offline on tape physically disconnected",
   "D) Differential, same server being protected"
  ],
  "explanation": "Full backup (بازیابی کامل) + Offline/Air-Gapped (غیرقابل‌دسترس برای باج‌افزار) قوی‌ترین ترکیب است. این دو معیار مستقل از هم‌اند.",
  "domain": 3
 },
 {
  "number": 187,
  "correct": "B",
  "en": "A DR plan requires operations resume within 4 hours (RTO) with no more than 1 hour data loss (RPO). The company backs up every 6 hours. What is the MOST significant problem?",
  "fa": "یک برنامه بازیابی RTO=۴ ساعت و RPO=۱ ساعت دارد اما هر ۶ ساعت بکاپ می‌گیرد. مهم‌ترین مشکل؟",
  "options": [
   "A) RTO too short to achieve",
   "B) Backup frequency does not support the stated RPO",
   "C) Alternate site unnecessary",
   "D) No problem; setup is adequate"
  ],
  "explanation": "RPO=۱ ساعت نیاز به بکاپ هر ۱ ساعت دارد، اما هر ۶ ساعت بکاپ می‌گیرند. در بدترین حالت ۶ ساعت داده از دست می‌رود. RPO=Recovery Point Objective.",
  "domain": 5
 },
 {
  "number": 188,
  "correct": "B",
  "en": "A BIA determined an e-commerce platform has an MTD of 6 hours before catastrophic impact. The IT team sets RTO at 5 hours. Which correctly explains the relationship between MTD and RTO?",
  "fa": "یک BIA تعیین کرده MTD=۶ ساعت است. تیم RTO را ۵ ساعت تعیین می‌کند. رابطه MTD و RTO؟",
  "options": [
   "A) RTO should always be longer than MTD",
   "B) RTO is appropriately set below MTD, providing a buffer before catastrophic impact",
   "C) MTD and RTO must be identical",
   "D) MTD is irrelevant once RTO is established"
  ],
  "explanation": "RTO باید همیشه کمتر از MTD باشد تا حاشیه امنیتی باشد. MTD=Maximum Tolerable Downtime مرز نهایی است. RTO=۵ < MTD=۶ یعنی ۱ ساعت buffer.",
  "domain": 5
 },
 {
  "number": 189,
  "correct": "B",
  "en": "Campaign A had 40% click rate but 5% reporting rate. Campaign B had 25% click rate and 35% reporting rate. Which BEST interprets these results regarding security culture?",
  "fa": "کمپین A نرخ کلیک ۴۰٪ و گزارش ۵٪ داشت. کمپین B نرخ کلیک ۲۵٪ و گزارش ۳۵٪. کدام تفسیر بهتر است؟",
  "options": [
   "A) Campaign A shows better awareness",
   "B) Campaign B shows better awareness, employees clicked less AND reported more",
   "C) Click rate is the only metric",
   "D) Reporting rate is irrelevant"
  ],
  "explanation": "هر دو معیار مهم‌اند. کمپین B بهتر است: کلیک کمتر و گزارش بیشتر. فرهنگ امنیتی خوب هم از تهدید جلوگیری و هم آن را گزارش می‌کند.",
  "domain": 5
 },
 {
  "number": 190,
  "correct": "B",
  "en": "A network defender configures a system to feed false but believable data to an attacker who has gained limited access, to waste their time while gathering intelligence. Which BEST describes this technique?",
  "fa": "یک مدافع داده جعلی به مهاجمی که دسترسی محدود دارد تغذیه می‌کند تا وقتش را هدر دهد و اطلاعات جمع کند. کدام تکنیک؟",
  "options": [
   "A) Honeypot",
   "B) Deception Technology / Active Defense",
   "C) Sandboxing",
   "D) Containerization"
  ],
  "explanation": "Deception Technology استراتژی گسترده‌ای است که شامل تزریق فعال داده جعلی به مهاجمی است که از قبل دسترسی دارد. Honeypot یک سیستم مستقل است.",
  "domain": 3
 },
 {
  "number": 191,
  "correct": "B",
  "en": "A company deploys a standalone server with intentionally weak security and fake confidential files, in an isolated segment with no real data, to attract attackers before they reach real systems. Which BEST describes this control?",
  "fa": "یک شرکت سرور مستقلی با امنیت ضعیف عمدی و فایل‌های جعلی در بخش ایزوله مستقر می‌کند تا مهاجم را جذب کند. کدام کنترل؟",
  "options": [
   "A) Deception Technology (broad strategy)",
   "B) Honeypot (a specific decoy system)",
   "C) Active Defense",
   "D) Threat Hunting"
  ],
  "explanation": "Honeypot یک سیستم طعمه مستقل و خاص است. Deception Technology استراتژی گسترده‌تری است که می‌تواند شامل honeypot باشد.",
  "domain": 3
 },
 {
  "number": 192,
  "correct": "B",
  "en": "A monitoring tool flags a critical server as down, but investigation shows the server is functioning normally and the alert was triggered by a temporary network blip. Which BEST classifies this alert?",
  "fa": "ابزار پایش هشدار می‌دهد سرور از کار افتاده، اما بررسی نشان می‌دهد سرور عادی کار می‌کند. کدام طبقه‌بندی؟",
  "options": [
   "A) True Positive",
   "B) False Positive",
   "C) True Negative",
   "D) False Negative"
  ],
  "explanation": "False Positive: هشدار صادر شد (Positive) اما تهدید واقعی نبود (False). حجم بالای آن‌ها باعث Alert Fatigue می‌شود.",
  "domain": 4
 },
 {
  "number": 193,
  "correct": "D",
  "en": "Antivirus software generates no alert for a file. Three months later, researchers determine it was sophisticated malware actively exfiltrating data the entire time. Which BEST classifies the original assessment?",
  "fa": "آنتی‌ویروس هیچ هشداری برای فایلی نمی‌دهد. سه ماه بعد معلوم می‌شود بدافزار بوده و داده استخراج می‌کرده. کدام طبقه‌بندی؟",
  "options": [
   "A) True Positive",
   "B) False Positive",
   "C) True Negative",
   "D) False Negative"
  ],
  "explanation": "False Negative: هشدار صادر نشد (Negative) اما تهدید واقعی بود (False). خطرناک‌ترین حالت چون تهدید واقعی نادیده گرفته شد.",
  "domain": 4
 },
 {
  "number": 194,
  "correct": "B",
  "en": "A team isolates a server, preserves logs, analyzes the attack, removes malware, and finally restores the system to normal operation. Which incident response phase is completed when they 'restore the system to normal operation'?",
  "fa": "یک تیم سرور را جدا، لاگ‌ها را حفظ، حمله را تحلیل، بدافزار را حذف و سیستم را به حالت عادی بازمی‌گرداند. «بازگرداندن به حالت عادی» کدام فاز است؟",
  "options": [
   "A) Containment",
   "B) Recovery",
   "C) Post-Incident (Lessons Learned)",
   "D) Detection and Analysis"
  ],
  "explanation": "Recovery فاز بازگرداندن سیستم به حالت عادی است. ترتیب: Detection→Containment→Eradication→Recovery→Post-Incident.",
  "domain": 4
 },
 {
  "correct": "B",
  "domain": 4,
  "en": "A company uses encryption but stores the keys in plain text in a config file on the same server as the encrypted data. An attacker accessing the server can decrypt everything. What is the primary failure?",
  "fa": "شرکتی کلیدهای رمزنگاری را در متن ساده روی همان سرور داده ذخیره می‌کند. مهاجم با دسترسی به سرور همه را رمزگشایی می‌کند. نقص اصلی؟",
  "options": [
   "A) Weak encryption algorithm",
   "B) Key Management - improper storage of cryptographic keys",
   "C) Data Classification not performed",
   "D) Wrong encryption layers"
  ],
  "explanation": "Key Management (مدیریت کلید) شکست خورده. کلیدها باید جدا از داده و در HSM (Hardware Security Module) یا key vault محافظت‌شده ذخیره شوند.",
  "number": 195
 },
 {
  "correct": "A",
  "domain": 5,
  "en": "A company conducts a structured review to identify, assess, and prioritize risks, then decides how to treat each one. What is this process called?",
  "fa": "شرکتی بررسی ساختاریافته‌ای برای شناسایی، ارزیابی و اولویت‌بندی ریسک‌ها انجام می‌دهد. این فرآیند چیست؟",
  "options": [
   "A) Risk Assessment",
   "B) Penetration Testing",
   "C) Vulnerability Scanning",
   "D) Incident Response"
  ],
  "explanation": "Risk Assessment فرآیند شناسایی، ارزیابی و اولویت‌بندی ریسک‌ها است. سپس تصمیم درباره treatment (پذیرش، کاهش، انتقال، اجتناب) گرفته می‌شود.",
  "number": 196
 },
 {
  "correct": "C",
  "domain": 5,
  "en": "A company purchases cyber insurance to handle the financial impact of a potential breach. Which risk treatment strategy is this?",
  "fa": "شرکتی بیمه سایبری می‌خرد تا تأثیر مالی نشت احتمالی را مدیریت کند. کدام استراتژی برخورد با ریسک؟",
  "options": [
   "A) Risk Avoidance",
   "B) Risk Acceptance",
   "C) Risk Transference",
   "D) Risk Mitigation"
  ],
  "explanation": "Risk Transference (انتقال ریسک) انتقال تأثیر مالی به طرف سوم مثل بیمه است.",
  "number": 197
 },
 {
  "correct": "A",
  "domain": 5,
  "en": "After evaluating a low-probability, low-impact risk, management decides to take no action and simply accept the potential consequences. Which strategy is this?",
  "fa": "پس از ارزیابی ریسک کم‌احتمال و کم‌تأثیر، مدیریت تصمیم می‌گیرد اقدامی نکند و عواقب را بپذیرد. کدام استراتژی؟",
  "options": [
   "A) Risk Acceptance",
   "B) Risk Transference",
   "C) Risk Avoidance",
   "D) Risk Mitigation"
  ],
  "explanation": "Risk Acceptance (پذیرش ریسک) تصمیم آگاهانه برای عدم اقدام و پذیرش عواقب، معمولاً برای ریسک‌های کم است.",
  "number": 198
 },
 {
  "correct": "D",
  "domain": 5,
  "en": "A company decides to completely stop offering a risky service to eliminate the associated risk entirely. Which strategy is this?",
  "fa": "شرکتی تصمیم می‌گیرد یک سرویس پرریسک را کاملاً متوقف کند تا ریسک را حذف کند. کدام استراتژی؟",
  "options": [
   "A) Risk Acceptance",
   "B) Risk Transference",
   "C) Risk Mitigation",
   "D) Risk Avoidance"
  ],
  "explanation": "Risk Avoidance (اجتناب از ریسک) حذف کامل فعالیت پرریسک برای از بین بردن کامل ریسک است.",
  "number": 199
 },
 {
  "correct": "B",
  "domain": 5,
  "en": "Which regulation governs the protection of personal data and privacy for individuals within the European Union?",
  "fa": "کدام مقررات از داده‌های شخصی و حریم خصوصی افراد در اتحادیه اروپا محافظت می‌کند؟",
  "options": [
   "A) HIPAA",
   "B) GDPR",
   "C) PCI DSS",
   "D) SOX"
  ],
  "explanation": "GDPR = General Data Protection Regulation. حریم خصوصی و داده شخصی افراد در اتحادیه اروپا را محافظت می‌کند.",
  "number": 200
 },
 {
  "correct": "A",
  "domain": 5,
  "en": "Which standard governs the secure handling of credit card information by organizations that process payments?",
  "fa": "کدام استاندارد مدیریت امن اطلاعات کارت اعتباری توسط سازمان‌های پردازش پرداخت را تنظیم می‌کند؟",
  "options": [
   "A) PCI DSS",
   "B) GDPR",
   "C) HIPAA",
   "D) ISO 27001"
  ],
  "explanation": "PCI DSS = Payment Card Industry Data Security Standard. امنیت اطلاعات کارت اعتباری را تنظیم می‌کند.",
  "number": 201
 },
 {
  "correct": "C",
  "domain": 4,
  "en": "A SOAR platform automates repetitive security tasks and orchestrates responses across tools. What does SOAR stand for?",
  "fa": "یک پلتفرم SOAR وظایف امنیتی تکراری را خودکار می‌کند. SOAR مخفف چیست؟",
  "options": [
   "A) Security Operations and Automated Response",
   "B) System Orchestration, Automation and Response",
   "C) Security Orchestration, Automation, and Response",
   "D) Security Operations, Analysis, and Reporting"
  ],
  "explanation": "SOAR = Security Orchestration, Automation, and Response. وظایف تکراری را خودکار و پاسخ‌ها را هماهنگ می‌کند.",
  "number": 202
 },
 {
  "correct": "B",
  "domain": 4,
  "en": "A security analyst proactively searches through networks and datasets to detect threats that evade existing security solutions. What is this practice?",
  "fa": "تحلیلگری فعالانه در شبکه‌ها می‌گردد تا تهدیداتی که از راه‌حل‌های موجود فرار کرده‌اند را بیابد. کدام رویه؟",
  "options": [
   "A) Vulnerability Scanning",
   "B) Threat Hunting",
   "C) Penetration Testing",
   "D) Incident Response"
  ],
  "explanation": "Threat Hunting جستجوی فعالانه برای تهدیدات پنهانی است که از کنترل‌های موجود عبور کرده‌اند.",
  "number": 203
 },
 {
  "correct": "A",
  "domain": 4,
  "en": "A piece of evidence must maintain a documented record of who handled it and when, from collection to court. What is this called?",
  "fa": "شواهد باید سابقه مستندی از اینکه چه کسی و کی آن را در اختیار داشته حفظ کنند. نام آن؟",
  "options": [
   "A) Chain of Custody",
   "B) Legal Hold",
   "C) Due Diligence",
   "D) Non-repudiation"
  ],
  "explanation": "Chain of Custody (زنجیره حفاظت) سابقه مستند هرکسی که شواهد را در اختیار داشته، از جمع‌آوری تا دادگاه، حفظ می‌کند.",
  "number": 204
 },
 {
  "correct": "C",
  "domain": 4,
  "en": "During a forensic investigation, which principle requires that the original evidence remains unaltered while analysis is done on copies?",
  "fa": "در تحقیقات قانونی، کدام اصل می‌گوید شواهد اصلی باید بدون تغییر بمانند و تحلیل روی کپی انجام شود؟",
  "options": [
   "A) Chain of Custody",
   "B) Legal Hold",
   "C) Evidence Preservation / Integrity",
   "D) Order of Volatility"
  ],
  "explanation": "Evidence Preservation حفظ یکپارچگی شواهد اصلی است؛ تحلیل روی کپی (image) انجام می‌شود تا اصل دست‌نخورده بماند.",
  "number": 205
 },
 {
  "correct": "B",
  "domain": 4,
  "en": "When collecting digital evidence, which principle dictates capturing the most volatile data (like RAM) first before it is lost?",
  "fa": "هنگام جمع‌آوری شواهد دیجیتال، کدام اصل می‌گوید فرارترین داده (مثل RAM) اول جمع شود؟",
  "options": [
   "A) Chain of Custody",
   "B) Order of Volatility",
   "C) Legal Hold",
   "D) Data Retention"
  ],
  "explanation": "Order of Volatility (ترتیب فراریت) می‌گوید فرارترین داده (RAM، cache) اول جمع شود چون با خاموشی از بین می‌رود.",
  "number": 206
 },
 {
  "correct": "A",
  "domain": 3,
  "en": "A cryptographic method that produces a fixed-length output from input data and is used to verify integrity (one-way) is called what?",
  "fa": "روش رمزنگاری که خروجی با طول ثابت تولید می‌کند و برای بررسی یکپارچگی استفاده می‌شود (یک‌طرفه)، چیست؟",
  "options": [
   "A) Hashing",
   "B) Symmetric Encryption",
   "C) Asymmetric Encryption",
   "D) Tokenization"
  ],
  "explanation": "Hashing (هش) خروجی با طول ثابت تولید می‌کند و یک‌طرفه است (غیرقابل‌بازگشت). برای بررسی Integrity استفاده می‌شود. مثل SHA-256.",
  "number": 207
 },
 {
  "correct": "C",
  "domain": 3,
  "en": "Which encryption type uses a pair of mathematically related keys: a public key for encryption and a private key for decryption?",
  "fa": "کدام نوع رمزنگاری از جفت کلید مرتبط استفاده می‌کند: کلید عمومی برای رمزنگاری و خصوصی برای رمزگشایی؟",
  "options": [
   "A) Symmetric Encryption",
   "B) Hashing",
   "C) Asymmetric Encryption",
   "D) Steganography"
  ],
  "explanation": "Asymmetric Encryption (رمزنگاری نامتقارن) از جفت کلید عمومی/خصوصی استفاده می‌کند. پایه PKI = Public Key Infrastructure است.",
  "number": 208
 },
 {
  "correct": "B",
  "domain": 3,
  "en": "Which encryption type uses a single shared key for both encryption and decryption, offering speed but key distribution challenges?",
  "fa": "کدام نوع رمزنگاری از یک کلید مشترک برای رمزنگاری و رمزگشایی استفاده می‌کند، سریع اما با چالش توزیع کلید؟",
  "options": [
   "A) Asymmetric Encryption",
   "B) Symmetric Encryption",
   "C) Hashing",
   "D) Digital Signature"
  ],
  "explanation": "Symmetric Encryption (رمزنگاری متقارن) یک کلید مشترک برای هر دو عمل دارد. سریع است اما توزیع امن کلید چالش‌برانگیز است. مثل AES.",
  "number": 209
 }
];
