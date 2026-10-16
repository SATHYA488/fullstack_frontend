/**
 * DevLogic JS - Interactive Web Technologies & Business Logic Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSearch();
  initSandboxDemos();
  initPipelineSimulator();
  initCodePlayground();
  initQuiz();
  initBackToTop();
  initExportGuide();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('devlogic_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('devlogic_theme', newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`);
    });
  }
}

/* ==========================================================================
   2. Real-time Search & Filter
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('topicSearch');
  const techCards = document.querySelectorAll('.tech-card');
  const logicCards = document.querySelectorAll('.logic-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    techCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const keywords = card.getAttribute('data-keywords') || '';
      if (text.includes(query) || keywords.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    logicCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const keywords = card.getAttribute('data-keywords') || '';
      if (text.includes(query) || keywords.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   3. Interactive Sandbox Demos for the 10 Business Logics
   ========================================================================== */
let globalSalesData = [200, 300, 150];

function initSandboxDemos() {
  // Demo 1: Conditional Logic (Age Check)
  const demo1Age = document.getElementById('demo1Age');
  const demo1Run = document.getElementById('demo1Run');
  const demo1Result = document.getElementById('demo1Result');

  if (demo1Run && demo1Age && demo1Result) {
    function checkAge() {
      const age = parseInt(demo1Age.value, 10);
      if (isNaN(age)) return;
      if (age >= 18) {
        demo1Result.innerHTML = `<span>Result:</span><span class="result-badge badge-success">Eligible to vote (Age ${age} ≥ 18)</span>`;
      } else {
        demo1Result.innerHTML = `<span>Result:</span><span class="result-badge badge-danger">Not eligible to vote (Age ${age} < 18)</span>`;
      }
    }
    demo1Run.addEventListener('click', checkAge);
    demo1Age.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkAge(); });
  }

  // Demo 2: Looping Logic
  const demo2Count = document.getElementById('demo2Count');
  const demo2Run = document.getElementById('demo2Run');
  const demo2Chips = document.getElementById('demo2Chips');
  const demo2Result = document.getElementById('demo2Result');

  if (demo2Run && demo2Count && demo2Chips && demo2Result) {
    function runLoop() {
      const count = Math.min(Math.max(parseInt(demo2Count.value, 10) || 5, 1), 20);
      demo2Chips.innerHTML = '';
      for (let i = 1; i <= count; i++) {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = `Count: ${i}`;
        demo2Chips.appendChild(chip);
      }
      demo2Result.innerHTML = `<span>Status:</span><span class="result-badge badge-success">Completed ${count} Iterations</span>`;
    }
    demo2Run.addEventListener('click', runLoop);
  }

  // Demo 3: Functions & Modular Logic
  const demo3Name = document.getElementById('demo3Name');
  const demo3Style = document.getElementById('demo3Style');
  const demo3Run = document.getElementById('demo3Run');
  const demo3Result = document.getElementById('demo3Result');

  if (demo3Run && demo3Name && demo3Style && demo3Result) {
    function runGreet() {
      const name = demo3Name.value.trim() || 'Sakthi';
      const style = demo3Style.value;
      let msg = '';
      if (style === 'formal') msg = `Good day, ${name}. Welcome to our platform.`;
      else if (style === 'coder') msg = `const user = "${name}"; console.log("Hello, World!");`;
      else msg = `Hello, ${name}! 👋`;

      demo3Result.innerHTML = `<span>Output:</span><span style="color:#60a5fa; font-weight:bold;">${escapeHTML(msg)}</span>`;
    }
    demo3Run.addEventListener('click', runGreet);
  }

  // Demo 4: Array Handling Logic (Reduce Sum)
  let numbersArray = [10, 20, 30];
  const demo4Chips = document.getElementById('demo4Chips');
  const demo4Input = document.getElementById('demo4Input');
  const demo4Add = document.getElementById('demo4Add');
  const demo4Reset = document.getElementById('demo4Reset');
  const demo4Sum = document.getElementById('demo4Sum');

  if (demo4Add && demo4Chips && demo4Sum) {
    function renderArrayDemo() {
      demo4Chips.innerHTML = '';
      numbersArray.forEach(num => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = num;
        demo4Chips.appendChild(chip);
      });
      const sum = numbersArray.reduce((a, b) => a + b, 0);
      demo4Sum.textContent = `Sum: ${sum}`;
    }

    demo4Add.addEventListener('click', () => {
      const val = parseFloat(demo4Input.value);
      if (!isNaN(val)) {
        numbersArray.push(val);
        demo4Input.value = '';
        renderArrayDemo();
      }
    });

    demo4Reset.addEventListener('click', () => {
      numbersArray = [10, 20, 30];
      renderArrayDemo();
    });
  }

  // Demo 5: Object Handling Logic
  const demo5Name = document.getElementById('demo5Name');
  const demo5Marks = document.getElementById('demo5Marks');
  const demo5Update = document.getElementById('demo5Update');
  const demo5Output = document.getElementById('demo5Output');
  const demo5Grade = document.getElementById('demo5Grade');

  if (demo5Update && demo5Name && demo5Marks && demo5Output && demo5Grade) {
    function updateStudent() {
      const student = {
        name: demo5Name.value.trim() || 'Arun',
        marks: parseInt(demo5Marks.value, 10) || 0
      };
      demo5Output.textContent = `student.name = "${student.name}", marks = ${student.marks}`;
      let grade = 'F';
      let badgeClass = 'badge-danger';
      if (student.marks >= 80) { grade = 'A'; badgeClass = 'badge-success'; }
      else if (student.marks >= 60) { grade = 'B'; badgeClass = 'badge-info'; }
      else if (student.marks >= 40) { grade = 'C'; badgeClass = 'badge-warning'; }

      demo5Grade.className = `result-badge ${badgeClass}`;
      demo5Grade.textContent = `Grade: ${grade}`;
    }
    demo5Update.addEventListener('click', updateStudent);
  }

  // Demo 6: Form Validation Logic
  const demo6Email = document.getElementById('demo6Email');
  const demo6Validate = document.getElementById('demo6Validate');
  const demo6Status = document.getElementById('demo6Status');

  if (demo6Validate && demo6Email && demo6Status) {
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email.includes('@') && regex.test(email);
    }

    function checkEmailValidation() {
      const email = demo6Email.value.trim();
      const isValid = validateEmail(email);
      if (isValid) {
        demo6Status.className = 'result-badge badge-success';
        demo6Status.textContent = '✓ Valid Email';
      } else {
        demo6Status.className = 'result-badge badge-danger';
        demo6Status.textContent = '✗ Invalid Email Format';
      }
    }
    demo6Validate.addEventListener('click', checkEmailValidation);
    demo6Email.addEventListener('input', checkEmailValidation);
  }

  // Demo 7: Authentication Logic
  const demo7User = document.getElementById('demo7User');
  const demo7Pass = document.getElementById('demo7Pass');
  const demo7Login = document.getElementById('demo7Login');
  const demo7Status = document.getElementById('demo7Status');

  if (demo7Login && demo7User && demo7Pass && demo7Status) {
    const registeredUser = { username: 'admin', password: '1234' };
    function login(u, p) {
      return (u === registeredUser.username && p === registeredUser.password) ? 'Login Success' : 'Login Failed';
    }

    demo7Login.addEventListener('click', () => {
      const res = login(demo7User.value.trim(), demo7Pass.value);
      if (res === 'Login Success') {
        demo7Status.className = 'result-badge badge-success';
        demo7Status.textContent = '🔓 Login Success (Authenticated)';
      } else {
        demo7Status.className = 'result-badge badge-danger';
        demo7Status.textContent = '🔒 Login Failed (Invalid Credentials)';
      }
    });
  }

  // Demo 8: Payment Calculation Logic
  const demo8Price = document.getElementById('demo8Price');
  const demo8Qty = document.getElementById('demo8Qty');
  const demo8Calc = document.getElementById('demo8Calc');
  const demo8Total = document.getElementById('demo8Total');

  if (demo8Calc && demo8Price && demo8Qty && demo8Total) {
    function calculateTotal(price, qty) {
      return price * qty;
    }

    function updatePayment() {
      const price = parseFloat(demo8Price.value) || 0;
      const qty = parseInt(demo8Qty.value, 10) || 0;
      const total = calculateTotal(price, qty);
      demo8Total.textContent = `$${total.toFixed(2)} (${price} × ${qty})`;
    }
    demo8Calc.addEventListener('click', updatePayment);
    demo8Price.addEventListener('input', updatePayment);
    demo8Qty.addEventListener('input', updatePayment);
  }

  // Demo 9: Inventory Management Logic
  let inventory = ["Pen", "Book", "Laptop", "Mouse"];
  const demo9Chips = document.getElementById('demo9Chips');
  const demo9Item = document.getElementById('demo9Item');
  const demo9Add = document.getElementById('demo9Add');
  const demo9Pop = document.getElementById('demo9Pop');
  const demo9Count = document.getElementById('demo9Count');

  if (demo9Chips && demo9Count && demo9Add && demo9Pop) {
    function renderInventory() {
      demo9Chips.innerHTML = '';
      inventory.forEach(item => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = item;
        demo9Chips.appendChild(chip);
      });
      demo9Count.textContent = `${inventory.length} Items in Warehouse`;
      if (inventory.length <= 2) {
        demo9Count.className = 'result-badge badge-warning';
      } else {
        demo9Count.className = 'result-badge badge-info';
      }
    }

    demo9Add.addEventListener('click', () => {
      const newItem = demo9Item.value.trim();
      if (newItem) {
        inventory.push(newItem);
        demo9Item.value = '';
        renderInventory();
      }
    });

    demo9Pop.addEventListener('click', () => {
      if (inventory.length > 0) {
        inventory.pop();
        renderInventory();
      }
    });
  }

  // Demo 10: Reporting & Analytics Logic
  const demo10Chart = document.getElementById('demo10Chart');
  const demo10NewSale = document.getElementById('demo10NewSale');
  const demo10Add = document.getElementById('demo10Add');
  const demo10Reset = document.getElementById('demo10Reset');
  const demo10Avg = document.getElementById('demo10Avg');

  if (demo10Chart && demo10Avg) {
    window.renderSalesChart = function() {
      demo10Chart.innerHTML = '';
      const maxVal = Math.max(...globalSalesData, 100);
      globalSalesData.forEach((val, idx) => {
        const wrap = document.createElement('div');
        wrap.className = 'chart-bar-wrap';
        const pct = Math.round((val / maxVal) * 100);
        wrap.innerHTML = `
          <div class="chart-val">$${Math.round(val)}</div>
          <div class="chart-bar" style="height: ${pct}%;"></div>
          <div class="chart-label">Q${idx + 1}</div>
        `;
        demo10Chart.appendChild(wrap);
      });

      const avg = globalSalesData.length > 0 
        ? (globalSalesData.reduce((a, b) => a + b, 0) / globalSalesData.length).toFixed(2)
        : '0.00';
      demo10Avg.textContent = `$${avg}`;
    };

    if (demo10Add) {
      demo10Add.addEventListener('click', () => {
        const val = parseFloat(demo10NewSale.value);
        if (!isNaN(val) && val > 0) {
          globalSalesData.push(val);
          demo10NewSale.value = '';
          window.renderSalesChart();
        }
      });
    }

    if (demo10Reset) {
      demo10Reset.addEventListener('click', () => {
        globalSalesData = [200, 300, 150];
        window.renderSalesChart();
      });
    }
  }
}

/* ==========================================================================
   4. Integrated E-Commerce POS Simulator Pipeline
   ========================================================================= */
function initPipelineSimulator() {
  const posProductSelect = document.getElementById('posProductSelect');
  const posQty = document.getElementById('posQty');
  const posCoupon = document.getElementById('posCoupon');
  const posCustomerEmail = document.getElementById('posCustomerEmail');
  const posCheckoutBtn = document.getElementById('posCheckoutBtn');

  const posReceiptDate = document.getElementById('posReceiptDate');
  const posSubtotal = document.getElementById('posSubtotal');
  const posDiscount = document.getElementById('posDiscount');
  const posTax = document.getElementById('posTax');
  const posFinalTotal = document.getElementById('posFinalTotal');
  const posStatusNote = document.getElementById('posStatusNote');

  if (!posProductSelect || !posCheckoutBtn) return;

  let invoiceNumber = 1001;

  function calculatePOS() {
    const selectedOption = posProductSelect.selectedOptions[0];
    const price = parseFloat(selectedOption.getAttribute('data-price')) || 100;
    const qty = parseInt(posQty.value, 10) || 1;
    const subtotal = price * qty;

    // Coupon logic
    const couponCode = posCoupon.value.trim().toUpperCase();
    let discountRate = 0;
    let couponLabel = 'None';
    if (couponCode === 'SAKTHI20') {
      discountRate = 0.20;
      couponLabel = 'SAKTHI20 (20%)';
    } else if (couponCode === 'WELCOME10') {
      discountRate = 0.10;
      couponLabel = 'WELCOME10 (10%)';
    }

    const discountAmount = subtotal * discountRate;
    const discountedSubtotal = subtotal - discountAmount;
    const taxAmount = discountedSubtotal * 0.10; // 10% GST/Tax
    const finalTotal = discountedSubtotal + taxAmount;

    // Update UI Receipt
    if (posReceiptDate) posReceiptDate.textContent = `#INV-2026-${invoiceNumber}`;
    if (posSubtotal) posSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (posDiscount) {
      posDiscount.textContent = discountAmount > 0 
        ? `-$${discountAmount.toFixed(2)} (${couponLabel})` 
        : '$0.00 (No Discount)';
    }
    if (posTax) posTax.textContent = `+$${taxAmount.toFixed(2)}`;
    if (posFinalTotal) posFinalTotal.textContent = `$${finalTotal.toFixed(2)}`;

    return { price, qty, subtotal, finalTotal, product: selectedOption.value };
  }

  posCheckoutBtn.addEventListener('click', () => {
    const email = posCustomerEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showToast('⚠️ Please provide a valid customer email address.');
      if (posStatusNote) {
        posStatusNote.style.color = '#f87171';
        posStatusNote.style.background = 'rgba(239, 68, 68, 0.1)';
        posStatusNote.textContent = '✗ Checkout Aborted: Invalid customer email format.';
      }
      return;
    }

    invoiceNumber++;
    const result = calculatePOS();
    
    // Automatically push sale into Reporting & Analytics logic!
    globalSalesData.push(Math.round(result.finalTotal));
    if (window.renderSalesChart) window.renderSalesChart();

    if (posStatusNote) {
      posStatusNote.style.color = '#34d399';
      posStatusNote.style.background = 'rgba(16, 185, 129, 0.1)';
      posStatusNote.textContent = `✓ Order #INV-2026-${invoiceNumber} confirmed for ${email}! Revenue of $${result.finalTotal.toFixed(2)} pushed to Analytics.`;
    }
    showToast(`Order Processed! Invoice #${invoiceNumber}`);
  });

  posProductSelect.addEventListener('change', calculatePOS);
  posQty.addEventListener('input', calculatePOS);
  posCoupon.addEventListener('input', calculatePOS);
}

/* ==========================================================================
   5. 10 Practical JavaScript Methods & Live Interactive Playground
   ========================================================================== */
const practicalMethods = [
  {
    id: 1,
    title: "1. Conditional Logic",
    category: "Conditional",
    fileName: "conditional-logic.js",
    rawCode: `// 1. Conditional Logic
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
}`,
    highlightedHtml: `<span class="cmt">// 1. Conditional Logic</span>
<span class="kw">let</span> age = <span class="num">20</span>;
<span class="kw">if</span> (age >= <span class="num">18</span>) {
  console.<span class="fn">log</span>(<span class="str">"Eligible to vote"</span>);
}`,
    execute: (logger) => {
      let age = 20;
      if (age >= 18) {
        logger("Eligible to vote", "terminal-success");
      }
    }
  },
  {
    id: 2,
    title: "2. Looping Logic",
    category: "Looping",
    fileName: "looping-logic.js",
    rawCode: `// 2. Looping Logic
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}`,
    highlightedHtml: `<span class="cmt">// 2. Looping Logic</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">1</span>; i <= <span class="num">5</span>; i++) {
  console.<span class="fn">log</span>(<span class="str">"Count:"</span>, i);
}`,
    execute: (logger) => {
      for (let i = 1; i <= 5; i++) {
        logger(`Count: ${i}`);
      }
    }
  },
  {
    id: 3,
    title: "3. Function",
    category: "Functions",
    fileName: "modular-function.js",
    rawCode: `// 3. Function
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Sakthi"));`,
    highlightedHtml: `<span class="cmt">// 3. Function</span>
<span class="kw">function</span> <span class="fn">greet</span>(name) {
  <span class="kw">return</span> <span class="str">\`Hello, \${name}!\`</span>;
}
console.<span class="fn">log</span>(<span class="fn">greet</span>(<span class="str">"Sakthi"</span>));`,
    execute: (logger) => {
      function greet(name) {
        return `Hello, ${name}!`;
      }
      logger(greet("Sakthi"), "terminal-info");
    }
  },
  {
    id: 4,
    title: "4. Array Handling",
    category: "Array",
    fileName: "array-handling.js",
    rawCode: `// 4. Array Handling
let numbers = [10, 20, 30];
console.log("Sum:", numbers.reduce((a, b) => a + b, 0));`,
    highlightedHtml: `<span class="cmt">// 4. Array Handling</span>
<span class="kw">let</span> numbers = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];
console.<span class="fn">log</span>(<span class="str">"Sum:"</span>, numbers.<span class="fn">reduce</span>((a, b) => a + b, <span class="num">0</span>));`,
    execute: (logger) => {
      let numbers = [10, 20, 30];
      const sum = numbers.reduce((a, b) => a + b, 0);
      logger(`Sum: ${sum}`, "terminal-success");
    }
  },
  {
    id: 5,
    title: "5. Object Handling",
    category: "Object",
    fileName: "object-handling.js",
    rawCode: `// 5. Object Handling
let student = { name: "Arun", marks: 85 };
console.log(student.name, student.marks);`,
    highlightedHtml: `<span class="cmt">// 5. Object Handling</span>
<span class="kw">let</span> student = { name: <span class="str">"Arun"</span>, marks: <span class="num">85</span> };
console.<span class="fn">log</span>(student.name, student.marks);`,
    execute: (logger) => {
      let student = { name: "Arun", marks: 85 };
      logger(`Name: ${student.name}, Marks: ${student.marks}`);
    }
  },
  {
    id: 6,
    title: "6. Form Validation Example",
    category: "Validation",
    fileName: "form-validation.js",
    rawCode: `// 6. Form Validation Example
function validateEmail(email) {
  return email.includes("@") ? "Valid" : "Invalid";
}
console.log(validateEmail("test@gmail.com"));`,
    highlightedHtml: `<span class="cmt">// 6. Form Validation Example</span>
<span class="kw">function</span> <span class="fn">validateEmail</span>(email) {
  <span class="kw">return</span> email.<span class="fn">includes</span>(<span class="str">"@"</span>) ? <span class="str">"Valid"</span> : <span class="str">"Invalid"</span>;
}
console.<span class="fn">log</span>(<span class="fn">validateEmail</span>(<span class="str">"test@gmail.com"</span>));`,
    execute: (logger) => {
      function validateEmail(email) {
        return email.includes("@") ? "Valid" : "Invalid";
      }
      logger(`Email "test@gmail.com" => ${validateEmail("test@gmail.com")}`, "terminal-success");
    }
  },
  {
    id: 7,
    title: "7. Authentication Logic (simple check)",
    category: "Auth",
    fileName: "authentication-logic.js",
    rawCode: `// 7. Authentication Logic (simple check)
let user = { username: "admin", password: "1234" };
function login(u, p) {
  return (u === user.username && p === user.password) ? "Login Success" : "Login Failed";
}
console.log(login("admin", "1234"));`,
    highlightedHtml: `<span class="cmt">// 7. Authentication Logic (simple check)</span>
<span class="kw">let</span> user = { username: <span class="str">"admin"</span>, password: <span class="str">"1234"</span> };
<span class="kw">function</span> <span class="fn">login</span>(u, p) {
  <span class="kw">return</span> (u === user.username && p === user.password) ? <span class="str">"Login Success"</span> : <span class="str">"Login Failed"</span>;
}
console.<span class="fn">log</span>(<span class="fn">login</span>(<span class="str">"admin"</span>, <span class="str">"1234"</span>));`,
    execute: (logger) => {
      let user = { username: "admin", password: "1234" };
      function login(u, p) {
        return (u === user.username && p === user.password) ? "Login Success" : "Login Failed";
      }
      logger(login("admin", "1234"), "terminal-success");
    }
  },
  {
    id: 8,
    title: "8. Payment Calculation",
    category: "Payment",
    fileName: "payment-calculation.js",
    rawCode: `// 8. Payment Calculation
function calculateTotal(price, qty) {
  return price * qty;
}
console.log("Total:", calculateTotal(100, 3));`,
    highlightedHtml: `<span class="cmt">// 8. Payment Calculation</span>
<span class="kw">function</span> <span class="fn">calculateTotal</span>(price, qty) {
  <span class="kw">return</span> price * qty;
}
console.<span class="fn">log</span>(<span class="str">"Total:"</span>, <span class="fn">calculateTotal</span>(<span class="num">100</span>, <span class="num">3</span>));`,
    execute: (logger) => {
      function calculateTotal(price, qty) {
        return price * qty;
      }
      logger(`Total: ${calculateTotal(100, 3)}`, "terminal-info");
    }
  },
  {
    id: 9,
    title: "9. Inventory Management",
    category: "Inventory",
    fileName: "inventory-management.js",
    rawCode: `// 9. Inventory Management
let inventory = ["Pen", "Book", "Laptop"];
inventory.push("Mouse");
console.log("Updated Inventory:", inventory);`,
    highlightedHtml: `<span class="cmt">// 9. Inventory Management</span>
<span class="kw">let</span> inventory = [<span class="str">"Pen"</span>, <span class="str">"Book"</span>, <span class="str">"Laptop"</span>];
inventory.<span class="fn">push</span>(<span class="str">"Mouse"</span>);
console.<span class="fn">log</span>(<span class="str">"Updated Inventory:"</span>, inventory);`,
    execute: (logger) => {
      let inventory = ["Pen", "Book", "Laptop"];
      inventory.push("Mouse");
      logger(`Updated Inventory: [${inventory.map(i => `"${i}"`).join(', ')}]`, "terminal-success");
    }
  },
  {
    id: 10,
    title: "10. Reporting & Analytics",
    category: "Analytics",
    fileName: "reporting-analytics.js",
    rawCode: `// 10. Reporting & Analytics
let sales = [200, 300, 150];
let avg = sales.reduce((a, b) => a + b, 0) / sales.length;
console.log("Average Sales:", avg);`,
    highlightedHtml: `<span class="cmt">// 10. Reporting & Analytics</span>
<span class="kw">let</span> sales = [<span class="num">200</span>, <span class="num">300</span>, <span class="num">150</span>];
<span class="kw">let</span> avg = sales.<span class="fn">reduce</span>((a, b) => a + b, <span class="num">0</span>) / sales.length;
console.<span class="fn">log</span>(<span class="str">"Average Sales:"</span>, avg);`,
    execute: (logger) => {
      let sales = [200, 300, 150];
      let avg = sales.reduce((a, b) => a + b, 0) / sales.length;
      logger(`Average Sales: ${avg}`, "terminal-info");
    }
  }
];

let activeMethodIndex = 0;

function initCodePlayground() {
  const tabs = document.querySelectorAll('#playgroundTabs .tab-btn');
  const codeViewBlock = document.getElementById('codeViewBlock');
  const codeDisplay = document.getElementById('codeDisplay');
  const customCodeEditor = document.getElementById('customCodeEditor');
  const activeFileName = document.getElementById('activeFileName');
  const activeCategoryBadge = document.getElementById('activeCategoryBadge');
  const terminalOutput = document.getElementById('terminalOutput');
  const runSingleBtn = document.getElementById('runSingleBtn');
  const runAllBtn = document.getElementById('runAllBtn');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const clearConsoleBtn = document.getElementById('clearConsoleBtn');

  if (!codeDisplay || !terminalOutput) return;

  function logToTerminal(message, typeClass = 'terminal-output') {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    const time = new Date().toLocaleTimeString();
    line.innerHTML = `
      <span class="terminal-prompt">[${time}] &gt;</span>
      <span class="${typeClass}">${escapeHTML(message)}</span>
    `;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function renderActiveTab(index) {
    activeMethodIndex = index;
    tabs.forEach((tab, i) => tab.classList.toggle('active', i === index));

    if (index === 10) {
      // Live Scratchpad Mode
      if (codeViewBlock) codeViewBlock.style.display = 'none';
      if (customCodeEditor) customCodeEditor.style.display = 'block';
      if (activeFileName) activeFileName.textContent = 'scratchpad.js (Custom Editor)';
      if (activeCategoryBadge) {
        activeCategoryBadge.textContent = 'Custom JS';
        activeCategoryBadge.className = 'result-badge badge-warning';
      }
    } else {
      // Preset Practical Method Mode
      if (codeViewBlock) codeViewBlock.style.display = 'block';
      if (customCodeEditor) customCodeEditor.style.display = 'none';
      const method = practicalMethods[index];
      codeDisplay.innerHTML = method.highlightedHtml;
      if (activeFileName) activeFileName.textContent = method.fileName;
      if (activeCategoryBadge) {
        activeCategoryBadge.textContent = method.category;
        activeCategoryBadge.className = 'result-badge badge-info';
      }
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-index'), 10);
      renderActiveTab(idx);
    });
  });

  if (runSingleBtn) {
    runSingleBtn.addEventListener('click', () => {
      if (activeMethodIndex === 10) {
        // Execute Custom Code from Scratchpad
        const userCode = customCodeEditor.value.trim();
        if (!userCode) {
          logToTerminal('⚠️ Scratchpad is empty. Enter some JS code to run.', 'terminal-warn');
          return;
        }
        logToTerminal('Executing Custom Scratchpad Script...', 'terminal-info');
        try {
          const originalLog = console.log;
          const capturedLogs = [];
          console.log = (...args) => {
            capturedLogs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
          };
          
          const executeFn = new Function(userCode);
          const ret = executeFn();
          console.log = originalLog;

          if (capturedLogs.length > 0) {
            capturedLogs.forEach(logMsg => logToTerminal(logMsg, 'terminal-success'));
          }
          if (ret !== undefined) {
            logToTerminal(`Return value: ${typeof ret === 'object' ? JSON.stringify(ret) : ret}`, 'terminal-info');
          }
        } catch (err) {
          logToTerminal(`Runtime Error: ${err.message}`, 'terminal-error');
        }
      } else {
        const method = practicalMethods[activeMethodIndex];
        logToTerminal(`Executing: ${method.title}...`, 'terminal-info');
        method.execute(logToTerminal);
      }
    });
  }

  if (runAllBtn) {
    runAllBtn.addEventListener('click', () => {
      logToTerminal('========================================', 'terminal-info');
      logToTerminal('▶ RUNNING ALL 10 PRACTICAL JS METHODS...', 'terminal-info');
      logToTerminal('========================================', 'terminal-info');

      practicalMethods.forEach((m, idx) => {
        setTimeout(() => {
          logToTerminal(`--- Method ${m.id}: ${m.category} ---`, 'terminal-warn');
          m.execute(logToTerminal);
          if (idx === practicalMethods.length - 1) {
            logToTerminal('✓ All 10 methods completed successfully!', 'terminal-success');
          }
        }, idx * 120);
      });
    });
  }

  if (clearConsoleBtn) {
    clearConsoleBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = `
        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-info">Console cleared. Ready for next execution.</span>
        </div>
      `;
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      let textToCopy = '';
      if (activeMethodIndex === 10) {
        textToCopy = customCodeEditor.value;
      } else {
        textToCopy = practicalMethods[activeMethodIndex].rawCode;
      }
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied code to clipboard!`);
      }).catch(() => {
        showToast('Copied code successfully!');
      });
    });
  }

  // Initial render
  renderActiveTab(0);
}

/* ==========================================================================
   6. Self-Assessment Quiz Logic
   ========================================================================== */
function initQuiz() {
  const quizCards = document.querySelectorAll('.quiz-card');

  quizCards.forEach(card => {
    const correctIdx = parseInt(card.getAttribute('data-correct'), 10);
    const options = card.querySelectorAll('.quiz-opt');

    options.forEach((opt, idx) => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('correct', 'incorrect'));
        
        if (idx === correctIdx) {
          opt.classList.add('correct');
          showToast('✓ Correct Answer! Well done.');
        } else {
          opt.classList.add('incorrect');
          options[correctIdx].classList.add('correct');
          showToast('✗ Incorrect. Correct option highlighted in green.');
        }
      });
    });
  });
}

/* ==========================================================================
   7. Export Markdown Reference Guide
   ========================================================================== */
function initExportGuide() {
  const quickExportBtn = document.getElementById('quickExportBtn');
  if (!quickExportBtn) return;

  const markdownContent = `# Web Technologies & JavaScript Business Logic Masterclass

## 1. Web Technologies Overview
- **HTML (HyperText Markup Language)**: Defines structure with semantic elements.
- **CSS (Cascading Style Sheets)**: Layouts, colors, typography, responsive design.
- **JavaScript (JS)**: Event listeners, logic processing, DOM manipulation, async flow.
- **Bootstrap**: Pre-built UI components and 12-column grid.
- **Tailwind CSS**: Atomic utility classes for custom styling.

## 2. 10 Logical & Business Logic Topics in JavaScript
1. **Conditional Logic (if/else)**: Decision gates & role verification.
2. **Looping Logic (for/while)**: Repetitive batch tasks & array iterations.
3. **Functions & Modular Logic**: Reusable data transformers.
4. **Array Handling Logic**: Aggregations via reduce(), map(), and filter().
5. **Object Handling Logic**: Entities and structured records.
6. **Form Validation Logic**: Regex pattern checks & security.
7. **Authentication Logic**: Credential matching & session control.
8. **Payment Calculation Logic**: Commerce transactions, tax, discounts.
9. **Inventory Management Logic**: Push/pop catalog tracking.
10. **Reporting & Analytics Logic**: Computing averages and business trends.

## 3. 10 Practical JavaScript Methods
\`\`\`javascript
// 1. Conditional Logic
let age = 20;
if (age >= 18) { console.log("Eligible to vote"); }

// 2. Looping Logic
for (let i = 1; i <= 5; i++) { console.log("Count:", i); }

// 3. Function
function greet(name) { return \`Hello, \${name}!\`; }
console.log(greet("Sakthi"));

// 4. Array Handling
let numbers = [10, 20, 30];
console.log("Sum:", numbers.reduce((a, b) => a + b, 0));

// 5. Object Handling
let student = { name: "Arun", marks: 85 };
console.log(student.name, student.marks);

// 6. Form Validation
function validateEmail(email) { return email.includes("@") ? "Valid" : "Invalid"; }
console.log(validateEmail("test@gmail.com"));

// 7. Authentication Logic
let user = { username: "admin", password: "1234" };
function login(u, p) { return (u === user.username && p === user.password) ? "Login Success" : "Login Failed"; }
console.log(login("admin", "1234"));

// 8. Payment Calculation
function calculateTotal(price, qty) { return price * qty; }
console.log("Total:", calculateTotal(100, 3));

// 9. Inventory Management
let inventory = ["Pen", "Book", "Laptop"];
inventory.push("Mouse");
console.log("Updated Inventory:", inventory);

// 10. Reporting & Analytics
let sales = [200, 300, 150];
let avg = sales.reduce((a, b) => a + b, 0) / sales.length;
console.log("Average Sales:", avg);
\`\`\`

## 4. Conclusion
Combining foundational web technologies with core JavaScript business logic creates modern, production-grade applications.
`;

  quickExportBtn.addEventListener('click', () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DevLogic_Masterclass_Summary.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📥 Downloaded DevLogic_Masterclass_Summary.md');
  });
}

/* ==========================================================================
   8. Utilities & Navigation
   ========================================================================== */
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
