const QUESTION_BANK = [
  {
    id: "q1",
    domain: "Domain 4.0 – Security Operations",
    domain_fa: "دامنه ۴: عملیات امنیت",
    question: "You are a security analyst tasked with investigating a suspected security breach incident. You decide to examine the firewall logs. Which of the following pieces of information would be MOST valuable in this firewall log to investigate the incident?",
    question_fa: "شما یک تحلیلگر امنیت هستید که مسئول بررسی یک حادثه مشکوک به نقض امنیت شده‌اید. تصمیم می‌گیرید لاگ‌های فایروال را بررسی کنید. کدام‌یک از اطلاعات زیر در لاگ فایروال، برای بررسی این حادثه، بیشترین ارزش را دارد؟",
    choices: [
      { key: "A", text: "Connection details including source and destination IPs, timestamps, and ports used in the last week.", fa: "جزئیات ارتباطات شامل آدرس‌های IP مبدأ و مقصد، زمان ثبت ارتباط و پورت‌های استفاده‌شده در طول هفته گذشته." },
      { key: "B", text: "A summary of the amount of data bandwidth and throughput by each department over the previous week.", fa: "خلاصه‌ای از میزان پهنای باند مصرفی و نرخ انتقال داده هر بخش در هفته گذشته." },
      { key: "C", text: "The details of the website purchases made by employees during lunchtime.", fa: "جزئیات خریدهای اینترنتی کارکنان در زمان ناهار." },
      { key: "D", text: "The number of software updates performed last month, when they were completed and what was installed.", fa: "تعداد به‌روزرسانی‌های نرم‌افزاری انجام‌شده در ماه گذشته، زمان تکمیل آن‌ها و نرم‌افزارهای نصب‌شده." }
    ],
    correct: "A",
    explanation: "Firewall logs contain records of all network traffic passing through the firewall. Such records include source and destination IP addresses, timestamps, and ports used. This information can be critical in identifying unauthorized or suspicious connections that may indicate a breach. While monitoring bandwidth usage is important for network management and troubleshooting, it is less likely to contribute valuable information about a specific security incident in the firewall logs. Software update details are also unlikely to be contained in firewall logs.",
    explanation_fa: "لاگ‌های فایروال، سوابق تمام ترافیک شبکه‌ای را که از فایروال عبور می‌کند ثبت می‌کنند. این اطلاعات شامل آدرس IP مبدأ، آدرس IP مقصد، زمان ثبت ارتباط و پورت‌های استفاده‌شده است. این اطلاعات برای شناسایی ارتباطات غیرمجاز یا مشکوکی که ممکن است نشان‌دهنده یک نفوذ امنیتی باشند، بسیار ارزشمند هستند. هرچند بررسی میزان مصرف پهنای باند برای مدیریت و عیب‌یابی شبکه اهمیت دارد، اما معمولاً اطلاعات کافی برای بررسی یک حادثه امنیتی مشخص در اختیار شما قرار نمی‌دهد. همچنین اطلاعات مربوط به به‌روزرسانی نرم‌افزارها معمولاً در لاگ فایروال ثبت نمی‌شود."
  }
];
