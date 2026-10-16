/**
 * FullStack JavaScript Day 10 Master Project Suite
 * Author: Sakthi
 * Architecture: Interactive Business Logic, Methods Playground, 21 Math Engine & Viva Arena
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. SECTION 2: 10 BUSINESS LOGIC TOPIC HANDLERS
     ========================================================================== */

  // Topic 06: Conditional Logic (if/else)
  const logicAgeInput = document.getElementById('logicAgeInput');
  const checkAgeBtn = document.getElementById('checkAgeBtn');
  const logicAgeResult = document.getElementById('logicAgeResult');

  function evaluateAgeEligibility() {
    if (!logicAgeInput || !logicAgeResult) return;
    const age = parseInt(logicAgeInput.value, 10);
    if (isNaN(age) || age < 0) {
      logicAgeResult.textContent = 'Please enter a valid positive age.';
      logicAgeResult.style.color = '#f87171';
      return;
    }

    if (age >= 18) {
      logicAgeResult.textContent = `Eligible to Vote & License Granted (Age: ${age} >= 18)`;
      logicAgeResult.style.color = '#34d399';
    } else {
      const remaining = 18 - age;
      logicAgeResult.textContent = `Underage: Ineligible (Needs ${remaining} more year${remaining > 1 ? 's' : ''})`;
      logicAgeResult.style.color = '#fbbf24';
    }
  }
  if (checkAgeBtn) checkAgeBtn.addEventListener('click', evaluateAgeEligibility);
  if (logicAgeInput) logicAgeInput.addEventListener('input', evaluateAgeEligibility);


  // Topic 07: Looping Logic (for/while)
  const logicLoopInput = document.getElementById('logicLoopInput');
  const runLoopBtn = document.getElementById('runLoopBtn');
  const logicLoopResult = document.getElementById('logicLoopResult');

  function executeLoopLogic() {
    if (!logicLoopInput || !logicLoopResult) return;
    const n = Math.min(Math.max(parseInt(logicLoopInput.value, 10) || 1, 1), 20);
    const sequence = [];
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sequence.push(i);
      sum += i;
    }

    logicLoopResult.textContent = `Sequence: [${sequence.join(', ')}] (Sum = ${sum})`;
    logicLoopResult.style.color = '#34d399';
  }
  if (runLoopBtn) runLoopBtn.addEventListener('click', executeLoopLogic);
  if (logicLoopInput) logicLoopInput.addEventListener('input', executeLoopLogic);


  // Topic 08: Functions & Modular Logic
  const logicAmountInput = document.getElementById('logicAmountInput');
  const calcTaxBtn = document.getElementById('calcTaxBtn');
  const logicTaxResult = document.getElementById('logicTaxResult');

  function calculateTaxAndTotal(amount, taxRate = 0.18) {
    const sub = parseFloat(amount) || 0;
    const tax = sub * taxRate;
    const total = sub + tax;
    return { sub, tax, total, taxPercent: taxRate * 100 };
  }

  function handleTaxCalculation() {
    if (!logicAmountInput || !logicTaxResult) return;
    const amt = parseFloat(logicAmountInput.value) || 0;
    const res = calculateTaxAndTotal(amt, 0.18);
    logicTaxResult.textContent = `Base: $${res.sub.toFixed(2)} + GST (${res.taxPercent}%) = $${res.total.toFixed(2)}`;
    logicTaxResult.style.color = '#34d399';
  }
  if (calcTaxBtn) calcTaxBtn.addEventListener('click', handleTaxCalculation);
  if (logicAmountInput) logicAmountInput.addEventListener('input', handleTaxCalculation);


  // Topic 09: Array Handling Logic
  const products = [
    { id: 1, name: 'Mouse', price: 25 },
    { id: 2, name: 'Keyboard', price: 45 },
    { id: 3, name: 'Monitor', price: 220 },
    { id: 4, name: 'Laptop', price: 1200 },
    { id: 5, name: 'USB-C Cable', price: 15 }
  ];

  const filterHighPriceBtn = document.getElementById('filterHighPriceBtn');
  const resetArrayBtn = document.getElementById('resetArrayBtn');
  const logicArrayResult = document.getElementById('logicArrayResult');

  function displayProducts(items) {
    if (!logicArrayResult) return;
    const formatted = items.map(p => `${p.name}: $${p.price}`).join(', ');
    logicArrayResult.textContent = `Items: [${formatted}]`;
  }

  if (filterHighPriceBtn) {
    filterHighPriceBtn.addEventListener('click', () => {
      const highValue = products.filter(p => p.price > 50);
      displayProducts(highValue);
      if (logicArrayResult) logicArrayResult.style.color = '#60a5fa';
    });
  }

  if (resetArrayBtn) {
    resetArrayBtn.addEventListener('click', () => {
      displayProducts(products);
      if (logicArrayResult) logicArrayResult.style.color = '#34d399';
    });
  }


  // Topic 10: Object Handling Logic
  const studentRegistry = {
    sakthi: { name: 'Sakthi', track: 'FullStack JS', gpa: 3.9, rank: 'Tier-1 Distinction' },
    priya: { name: 'Priya', track: 'AI & Data Science', gpa: 3.85, rank: 'Honor Roll' },
    kiran: { name: 'Kiran', track: 'Cloud Systems', gpa: 3.75, rank: 'First Class' }
  };

  const studentSelect = document.getElementById('studentSelect');
  const inspectStudentBtn = document.getElementById('inspectStudentBtn');
  const logicObjectResult = document.getElementById('logicObjectResult');

  function inspectStudent() {
    if (!studentSelect || !logicObjectResult) return;
    const key = studentSelect.value;
    const std = studentRegistry[key] || studentRegistry.sakthi;
    logicObjectResult.textContent = `{ Name: "${std.name}", Track: "${std.track}", GPA: ${std.gpa}, Status: "${std.rank}" }`;
    logicObjectResult.style.color = '#34d399';
  }
  if (inspectStudentBtn) inspectStudentBtn.addEventListener('click', inspectStudent);
  if (studentSelect) studentSelect.addEventListener('change', inspectStudent);


  // Topic 11: Form Validation Logic
  const valEmailInput = document.getElementById('valEmailInput');
  const valPassInput = document.getElementById('valPassInput');
  const logicValResult = document.getElementById('logicValResult');

  function validateFormFields() {
    if (!valEmailInput || !valPassInput || !logicValResult) return;
    const email = (valEmailInput.value || '').trim();
    const pass = valPassInput.value || '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailPattern.test(email);
    const isPassValid = pass.length >= 6;

    if (!isEmailValid && !isPassValid) {
      logicValResult.textContent = 'Invalid Email and Password too short (< 6 chars)';
      logicValResult.style.color = '#f87171';
    } else if (!isEmailValid) {
      logicValResult.textContent = 'Invalid Email format (requires name@domain.ext)';
      logicValResult.style.color = '#fbbf24';
    } else if (!isPassValid) {
      logicValResult.textContent = `Password weak: Length ${pass.length} (Requires >= 6 chars)`;
      logicValResult.style.color = '#fbbf24';
    } else {
      logicValResult.textContent = `Valid Email & Strong Password (Length: ${pass.length})`;
      logicValResult.style.color = '#34d399';
    }
  }
  if (valEmailInput) valEmailInput.addEventListener('input', validateFormFields);
  if (valPassInput) valPassInput.addEventListener('input', validateFormFields);


  // Topic 12: Authentication Logic
  const authUser = document.getElementById('authUser');
  const authPass = document.getElementById('authPass');
  const authBtn = document.getElementById('authBtn');
  const logicAuthResult = document.getElementById('logicAuthResult');

  function handleAuthCheck() {
    if (!authUser || !authPass || !logicAuthResult) return;
    const u = (authUser.value || '').trim().toLowerCase();
    const p = (authPass.value || '').trim();

    if (u === 'admin' && p === '1234') {
      logicAuthResult.textContent = 'Access Granted: Role = ADMIN (Session Token: auth_adm_8849)';
      logicAuthResult.style.color = '#34d399';
    } else if (u === 'sakthi' && (p === '1234' || p === 'pass123')) {
      logicAuthResult.textContent = 'Access Granted: Role = STUDENT / DEV (Session Token: auth_usr_9021)';
      logicAuthResult.style.color = '#60a5fa';
    } else {
      logicAuthResult.textContent = 'Access Denied: Invalid Credentials. Try admin / 1234';
      logicAuthResult.style.color = '#f87171';
    }
  }
  if (authBtn) authBtn.addEventListener('click', handleAuthCheck);


  // Topic 13: Payment Calculation Logic
  const payPrice = document.getElementById('payPrice');
  const payDiscount = document.getElementById('payDiscount');
  const calcPayBtn = document.getElementById('calcPayBtn');
  const logicPayResult = document.getElementById('logicPayResult');

  function computeInvoice() {
    if (!payPrice || !payDiscount || !logicPayResult) return;
    const subtotal = Math.max(0, parseFloat(payPrice.value) || 0);
    const discPct = Math.min(100, Math.max(0, parseFloat(payDiscount.value) || 0));
    const discAmount = subtotal * (discPct / 100);
    const discountedBase = subtotal - discAmount;
    const tax = discountedBase * 0.05; // 5% Sales Tax
    const finalBill = discountedBase + tax;

    logicPayResult.textContent = `Sub: $${subtotal.toFixed(2)} - ${discPct}% Disc + 5% Tax = $${finalBill.toFixed(2)}`;
    logicPayResult.style.color = '#34d399';
  }
  if (calcPayBtn) calcPayBtn.addEventListener('click', computeInvoice);
  if (payPrice) payPrice.addEventListener('input', computeInvoice);
  if (payDiscount) payDiscount.addEventListener('input', computeInvoice);


  // Topic 14: Inventory Management Logic
  let warehouseUnits = 14;
  const stockAddBtn = document.getElementById('stockAddBtn');
  const stockRemoveBtn = document.getElementById('stockRemoveBtn');
  const logicStockResult = document.getElementById('logicStockResult');

  function updateStockDisplay() {
    if (!logicStockResult) return;
    let status = 'Optimal';
    let color = '#34d399';

    if (warehouseUnits === 0) {
      status = 'OUT OF STOCK';
      color = '#f87171';
    } else if (warehouseUnits < 5) {
      status = 'LOW STOCK WARNING';
      color = '#fbbf24';
    }

    logicStockResult.textContent = `Warehouse Stock: ${warehouseUnits} Units [Status: ${status}]`;
    logicStockResult.style.color = color;
  }

  if (stockAddBtn) {
    stockAddBtn.addEventListener('click', () => {
      warehouseUnits += 1;
      updateStockDisplay();
    });
  }

  if (stockRemoveBtn) {
    stockRemoveBtn.addEventListener('click', () => {
      if (warehouseUnits > 0) {
        warehouseUnits -= 1;
      }
      updateStockDisplay();
    });
  }


  // Topic 15: Reporting & Analytics Logic
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let weeklySales = [600, 850, 450, 950, 700, 1000, 500];

  const salesChartContainer = document.getElementById('salesChartContainer');
  const logicAnalyticsResult = document.getElementById('logicAnalyticsResult');
  const randomizeSalesBtn = document.getElementById('randomizeSalesBtn');

  function renderAnalytics() {
    const total = weeklySales.reduce((acc, val) => acc + val, 0);
    const avg = Math.round(total / weeklySales.length);
    const maxVal = Math.max(...weeklySales);
    const minVal = Math.min(...weeklySales);
    const maxDay = days[weeklySales.indexOf(maxVal)];
    const minDay = days[weeklySales.indexOf(minVal)];

    // Render bar chart
    if (salesChartContainer) {
      salesChartContainer.innerHTML = '';
      weeklySales.forEach((val, idx) => {
        const heightPercent = Math.max(15, Math.round((val / maxVal) * 100));
        const col = document.createElement('div');
        col.className = 'chart-bar-item';
        col.innerHTML = `
          <div class="chart-bar-visual" style="height: ${heightPercent}%;" title="$${val}"></div>
          <span class="chart-bar-lbl">${days[idx]}</span>
        `;
        salesChartContainer.appendChild(col);
      });
    }

    if (logicAnalyticsResult) {
      logicAnalyticsResult.textContent = `Total: $${total.toLocaleString()} | Avg: $${avg}/day | Peak: $${maxVal} (${maxDay}) | Low: $${minVal} (${minDay})`;
      logicAnalyticsResult.style.color = '#34d399';
    }
  }

  if (randomizeSalesBtn) {
    randomizeSalesBtn.addEventListener('click', () => {
      weeklySales = days.map(() => Math.floor(Math.random() * 800) + 300);
      renderAnalytics();
    });
  }

  // Initial render
  renderAnalytics();


  /* ==========================================================================
     2. SECTION 3: 10 PRACTICAL JAVASCRIPT METHODS WITH CODE RUNNERS
     ========================================================================== */

  /* ==========================================================================
     2. SECTION 3: 10 PRACTICAL JAVASCRIPT METHODS WITH CODE RUNNERS
     ========================================================================== */

  const practicalMethods = [
    {
      name: "16. push()",
      category: "Array (Stack / Queue)",
      title: "16_array_push.js",
      mutates: true,
      complexity: "O(1) Time | O(1) Space",
      signature: "arr.push(element1, ... , elementN)",
      returns: "Number (New length of array)",
      formalDef: "Appends one or more elements to the end of an array and returns the new length of the array, mutating the original array in-place.",
      useCase: "Adding items to shopping carts, pushing event logs, stack LIFO push operations.",
      code: `let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]`,
      execute: (logger) => {
        let fruits = ["Apple", "Banana"];
        fruits.push("Orange");
        logger(`let fruits = ["Apple", "Banana"];`);
        logger(`fruits.push("Orange"); // Mutates in-place`);
        logger(`Output: ${JSON.stringify(fruits)} (New Length: ${fruits.length})`, 'success');
        return fruits;
      }
    },
    {
      name: "17. pop()",
      category: "Array (Stack / LIFO)",
      title: "17_array_pop.js",
      mutates: true,
      complexity: "O(1) Time | O(1) Space",
      signature: "arr.pop()",
      returns: "Any (Removed element or undefined)",
      formalDef: "Removes the last element from an array and returns that element. This method changes the length of the array.",
      useCase: "Undo/Redo command stacks, pop navigation history, dispatching queue buffers.",
      code: `let numbers = [10, 20, 30];
let popped = numbers.pop();
console.log(numbers); // [10, 20]
console.log(popped);  // 30`,
      execute: (logger) => {
        let numbers = [10, 20, 30];
        let popped = numbers.pop();
        logger(`let numbers = [10, 20, 30];`);
        logger(`let popped = numbers.pop(); // Popped value: ${popped}`);
        logger(`Remaining Array: ${JSON.stringify(numbers)}`, 'success');
        return numbers;
      }
    },
    {
      name: "18. map()",
      category: "Array (Pure Transformation)",
      title: "18_array_map.js",
      mutates: false,
      complexity: "O(N) Time | O(N) Space",
      signature: "arr.map(callback(currentValue, index, array))",
      returns: "Array (New array with transformed elements)",
      formalDef: "Creates a new array populated with the results of calling a provided callback function on every element in the calling array without modifying the source.",
      useCase: "Applying price discounts, formatting currencies, rendering React/Vue JSX templates.",
      code: `let prices = [100, 200, 300];
let discounted = prices.map(p => p * 0.9);
console.log(discounted); // [90, 180, 270]`,
      execute: (logger) => {
        let prices = [100, 200, 300];
        let discounted = prices.map(p => p * 0.9);
        logger(`let prices = [100, 200, 300];`);
        logger(`let discounted = prices.map(p => p * 0.9); // Pure transformation`);
        logger(`Output: ${JSON.stringify(discounted)}`, 'success');
        return discounted;
      }
    },
    {
      name: "19. filter()",
      category: "Array (Pure Search / Subset)",
      title: "19_array_filter.js",
      mutates: false,
      complexity: "O(N) Time | O(N) Space",
      signature: "arr.filter(predicate(element, index, array))",
      returns: "Array (Shallow copy of matching elements)",
      formalDef: "Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
      useCase: "Catalog search filters, active user queries, age eligibility gates.",
      code: `let ages = [12, 18, 25, 8];
let adults = ages.filter(a => a >= 18);
console.log(adults); // [18, 25]`,
      execute: (logger) => {
        let ages = [12, 18, 25, 8];
        let adults = ages.filter(a => a >= 18);
        logger(`let ages = [12, 18, 25, 8];`);
        logger(`let adults = ages.filter(a => a >= 18);`);
        logger(`Output: ${JSON.stringify(adults)}`, 'success');
        return adults;
      }
    },
    {
      name: "20. reduce()",
      category: "Array (Accumulation / Fold)",
      title: "20_array_reduce.js",
      mutates: false,
      complexity: "O(N) Time | O(1) Space",
      signature: "arr.reduce(callback(accumulator, currentValue), initialValue)",
      returns: "Any (Single accumulated output value)",
      formalDef: "Executes a user-supplied 'reducer' callback function on each element of the array, passing the return value from the calculation on the preceding element, returning a single value.",
      useCase: "Shopping cart gross totals, flattening nested arrays, grouping objects by category.",
      code: `let cart = [10, 20, 30];
let total = cart.reduce((sum, item) => sum + item, 0);
console.log(total); // 60`,
      execute: (logger) => {
        let cart = [10, 20, 30];
        let total = cart.reduce((sum, item) => sum + item, 0);
        logger(`let cart = [10, 20, 30];`);
        logger(`let total = cart.reduce((sum, item) => sum + item, 0);`);
        logger(`Output: Sum = ${total}`, 'success');
        return total;
      }
    },
    {
      name: "21. forEach()",
      category: "Array (Iteration / Side Effects)",
      title: "21_array_forEach.js",
      mutates: false,
      complexity: "O(N) Time | O(1) Space",
      signature: "arr.forEach(callback(currentValue, index, array))",
      returns: "undefined",
      formalDef: "Executes a provided function once for each array element. Unlike map(), it always returns undefined and cannot be chained or broken early.",
      useCase: "DOM node appending, dispatching telemetry events, terminal logging.",
      code: `let names = ["Sakthi", "Kiran", "Priya"];
names.forEach(n => console.log("Hello, " + n));`,
      execute: (logger) => {
        let names = ["Sakthi", "Kiran", "Priya"];
        logger(`let names = ["Sakthi", "Kiran", "Priya"];`);
        names.forEach(n => {
          logger(`Output: "Hello, ${n}"`, 'info');
        });
        return names;
      }
    },
    {
      name: "22. find()",
      category: "Array (Lookup / First Match)",
      title: "22_array_find.js",
      mutates: false,
      complexity: "O(N) Time (Worst) / O(1) Best",
      signature: "arr.find(predicate(element, index, array))",
      returns: "Element or undefined",
      formalDef: "Returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
      useCase: "Database primary key lookup, active session finding, SKU matching.",
      code: `let users = [{id: 1, name: "Sakthi"}, {id: 2, name: "Ram"}];
let found = users.find(u => u.id === 1);
console.log(found.name); // Sakthi`,
      execute: (logger) => {
        let users = [{id: 1, name: "Sakthi"}, {id: 2, name: "Ram"}];
        let found = users.find(u => u.id === 1);
        logger(`let users = [{id: 1, name: "Sakthi"}, {id: 2, name: "Ram"}];`);
        logger(`let found = users.find(u => u.id === 1);`);
        logger(`Output: found.name = "${found ? found.name : 'null'}"`, 'success');
        return found;
      }
    },
    {
      name: "23. includes()",
      category: "Array / String (Boolean Check)",
      title: "23_array_includes.js",
      mutates: false,
      complexity: "O(N) Time | O(1) Space",
      signature: "arr.includes(valueToFind, fromIndex)",
      returns: "Boolean (true / false)",
      formalDef: "Determines whether an array or string includes a certain value among its entries, returning true or false as appropriate using SameValueZero equality.",
      useCase: "Role permission checks (['ADMIN','DEV'].includes(role)), tag verification.",
      code: `let skills = ["HTML", "CSS", "JS"];
console.log(skills.includes("JS")); // true`,
      execute: (logger) => {
        let skills = ["HTML", "CSS", "JS"];
        let result = skills.includes("JS");
        logger(`let skills = ["HTML", "CSS", "JS"];`);
        logger(`skills.includes("JS");`);
        logger(`Output: ${result}`, 'success');
        return result;
      }
    },
    {
      name: "24. toUpperCase() / toLowerCase()",
      category: "String (Unicode Transformation)",
      title: "24_string_case.js",
      mutates: false,
      complexity: "O(N) Time | O(N) Space",
      signature: "str.toUpperCase() / str.toLowerCase()",
      returns: "String (New converted string)",
      formalDef: "Returns the calling string value converted to uppercase or lowercase according to any locale-specific case mappings without mutating the immutable source string.",
      useCase: "Case-insensitive email comparison, search normalization, badge uppercase titles.",
      code: `let message = "hello world";
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toUpperCase().toLowerCase()); // "hello world"`,
      execute: (logger) => {
        let message = "hello world";
        let upper = message.toUpperCase();
        let lower = upper.toLowerCase();
        logger(`let message = "hello world";`);
        logger(`message.toUpperCase() -> "${upper}"`, 'success');
        logger(`message.toLowerCase() -> "${lower}"`, 'info');
        return upper;
      }
    },
    {
      name: "25. addEventListener()",
      category: "DOM API (Event Handling)",
      title: "25_dom_event_listener.js",
      mutates: false,
      complexity: "O(1) Registration",
      signature: "target.addEventListener(type, listener, options)",
      returns: "undefined",
      formalDef: "Sets up a function that will be called whenever the specified event is delivered to the target, participating in DOM event bubbling and capturing propagation phases.",
      useCase: "Button clicks, input throttling, keyboard shortcuts, form submission interceptors.",
      code: `// Attaching a click event to DOM element
const demoBtn = document.createElement("button");
demoBtn.addEventListener("click", () => {
  console.log("Event Dispatched: Button Click Handled Successfully!");
});
demoBtn.click(); // Simulated Trigger`,
      execute: (logger) => {
        logger(`// Registering DOM Event Listener`);
        logger(`const demoBtn = document.createElement("button");`);
        logger(`demoBtn.addEventListener("click", () => { ... });`);
        logger(`[DOM Event Dispatch]: "Button Click Handled Successfully!"`, 'success');
        return "Event Fired";
      }
    }
  ];

  let currentMethodIndex = 0;

  // Terminal Simulator Element
  const terminalOutput = document.getElementById('terminalOutput');
  const codeDisplayArea = document.getElementById('codeDisplayArea');
  const currentSnippetTitle = document.getElementById('currentSnippetTitle');
  const clearTerminalBtn = document.getElementById('clearTerminalBtn');
  const runSingleSnippetBtn = document.getElementById('runSingleSnippetBtn');
  const runAllMethodsBtn = document.getElementById('runAllMethodsBtn');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const quickRunAllBtn = document.getElementById('quickRunAllBtn');
  const methodListItems = document.querySelectorAll('#methodList .list-group-item');

  // Method Spec Card Elements
  const specCategoryBadge = document.getElementById('specCategoryBadge');
  const specMethodName = document.getElementById('specMethodName');
  const specMutabilityBadge = document.getElementById('specMutabilityBadge');
  const specComplexityPill = document.getElementById('specComplexityPill');
  const specDefinition = document.getElementById('specDefinition');
  const specSignature = document.getElementById('specSignature');
  const specReturns = document.getElementById('specReturns');
  const specUseCase = document.getElementById('specUseCase');

  function logTerminal(msg, type = 'info') {
    if (!terminalOutput) return;
    const row = document.createElement('div');
    row.className = 'term-line';

    let colorClass = 'term-text-info';
    if (type === 'success') colorClass = 'term-text-success';
    if (type === 'warn') colorClass = 'term-text-warn';
    if (type === 'purple') colorClass = 'term-text-purple';
    if (type === 'muted') colorClass = 'term-text-muted';

    row.innerHTML = `
      <span class="term-prompt">&gt;</span>
      <span class="${colorClass}">${msg}</span>
    `;
    terminalOutput.appendChild(row);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function clearTerminal() {
    if (terminalOutput) {
      terminalOutput.innerHTML = `
        <div class="term-line">
          <span class="term-prompt">&gt;</span>
          <span class="term-text-muted">Console buffer cleared. Ready for next execution.</span>
        </div>
      `;
    }
  }

  function selectMethod(index) {
    currentMethodIndex = index;
    const method = practicalMethods[index];
    if (!method) return;

    if (codeDisplayArea) codeDisplayArea.textContent = method.code;
    if (currentSnippetTitle) currentSnippetTitle.textContent = method.title;

    // Update Method Spec Card
    if (specCategoryBadge) specCategoryBadge.textContent = method.category;
    if (specMethodName) specMethodName.textContent = method.name;
    if (specMutabilityBadge) {
      specMutabilityBadge.textContent = method.mutates ? 'Mutates Original Array' : 'Pure (Non-Mutating)';
      specMutabilityBadge.className = method.mutates ? 'badge bg-danger' : 'badge bg-success';
    }
    if (specComplexityPill) specComplexityPill.textContent = method.complexity;
    if (specDefinition) specDefinition.textContent = method.formalDef;
    if (specSignature) specSignature.textContent = method.signature;
    if (specReturns) specReturns.textContent = method.returns;
    if (specUseCase) specUseCase.textContent = method.useCase;

    methodListItems.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
  }

  function runCurrentMethod() {
    const method = practicalMethods[currentMethodIndex];
    if (!method) return;

    logTerminal(`--- Executing: ${method.title} (${method.name}) ---`, 'purple');
    method.execute(logTerminal);
    logTerminal(`✓ Execution finished without errors.`, 'muted');
  }

  function runAllPracticalMethods() {
    clearTerminal();
    logTerminal(`===================================================`, 'info');
    logTerminal(`🚀 BATCH RUNNER: Executing All 10 Practical Methods`, 'warn');
    logTerminal(`===================================================`, 'info');

    practicalMethods.forEach((m, idx) => {
      setTimeout(() => {
        logTerminal(`[${idx + 1}/10] Method: ${m.name}`, 'purple');
        m.execute(logTerminal);
      }, idx * 100);
    });

    setTimeout(() => {
      logTerminal(`===================================================`, 'info');
      logTerminal(`✨ All 10 Practical JS Methods executed cleanly!`, 'success');
      logTerminal(`===================================================`, 'info');
    }, practicalMethods.length * 100 + 50);
  }

  // Attach Method Navigation
  methodListItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      selectMethod(idx);
    });
  });

  if (runSingleSnippetBtn) runSingleSnippetBtn.addEventListener('click', runCurrentMethod);
  if (runAllMethodsBtn) runAllMethodsBtn.addEventListener('click', runAllPracticalMethods);
  if (quickRunAllBtn) quickRunAllBtn.addEventListener('click', (e) => {
    runAllPracticalMethods();
  });
  if (clearTerminalBtn) clearTerminalBtn.addEventListener('click', clearTerminal);

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const code = practicalMethods[currentMethodIndex].code;
      navigator.clipboard.writeText(code).then(() => {
        const original = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = `<i class="bi bi-check2 me-1"></i>Copied!`;
        copyCodeBtn.classList.replace('btn-outline-secondary', 'btn-success');
        setTimeout(() => {
          copyCodeBtn.innerHTML = original;
          copyCodeBtn.classList.replace('btn-success', 'btn-outline-secondary');
        }, 1800);
      }).catch(() => {
        alert('Code copied to clipboard!');
      });
    });
  }

  // Initial setup for practical methods
  if (methodListItems.length > 0) {
    selectMethod(0);
  }

  /* ==========================================================================
     3. SECTION 8: MASTER ENGINEERING DICTIONARY SEARCH & FILTERING
     ========================================================================== */
  const dictSearchInput = document.getElementById('dictSearchInput');
  const dictFilterButtons = document.querySelectorAll('#dictFilterGroup button');
  const dictItems = document.querySelectorAll('#dictGridContainer .dict-item');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function filterDictionary() {
    dictItems.forEach(item => {
      const cat = item.getAttribute('data-cat') || '';
      const text = item.textContent.toLowerCase();
      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = (!currentSearchQuery || text.includes(currentSearchQuery));

      if (matchesCat && matchesSearch) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (dictSearchInput) {
    dictSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = (e.target.value || '').trim().toLowerCase();
      filterDictionary();
    });
  }

  dictFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dictFilterButtons.forEach(b => {
        b.classList.remove('btn-primary', 'active');
        b.classList.add('btn-outline-secondary');
      });
      btn.classList.remove('btn-outline-secondary');
      btn.classList.add('btn-primary', 'active');

      currentCategory = btn.getAttribute('data-dict-cat') || 'all';
      filterDictionary();
    });
  });
});

/* ==========================================================================
   3. GLOBAL MATHEMATICAL COMPUTATIONS ENGINE
   ========================================================================== */

function calcFactorial() {
  const el = document.getElementById('factInput');
  const resEl = document.getElementById('factResult');
  if (!el || !resEl) return;
  const n = parseInt(el.value) || 0;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  resEl.textContent = `${n}! = ${res.toLocaleString()}`;
}

function calcSum() {
  const el = document.getElementById('sumInput');
  const resEl = document.getElementById('sumResult');
  if (!el || !resEl) return;
  const vals = el.value.split(',').map(v => parseFloat(v.trim()) || 0);
  const sum = vals.reduce((a, b) => a + b, 0);
  resEl.textContent = `Sum([${vals.join(', ')}]) = ${sum}`;
}

function calcAverage() {
  const el = document.getElementById('avgInput');
  const resEl = document.getElementById('avgResult');
  if (!el || !resEl) return;
  const vals = el.value.split(',').map(v => parseFloat(v.trim()) || 0);
  const sum = vals.reduce((a, b) => a + b, 0);
  const avg = vals.length ? (sum / vals.length).toFixed(2) : 0;
  resEl.textContent = `Avg([${vals.join(', ')}]) = ${avg}`;
}

function calcSquare() {
  const el = document.getElementById('squareInput');
  const resEl = document.getElementById('squareResult');
  if (!el || !resEl) return;
  const x = parseFloat(el.value) || 0;
  resEl.textContent = `${x}² = ${x * x}`;
}

function calcCube() {
  const el = document.getElementById('cubeInput');
  const resEl = document.getElementById('cubeResult');
  if (!el || !resEl) return;
  const x = parseFloat(el.value) || 0;
  resEl.textContent = `${x}³ = ${x * x * x}`;
}

function calcPower() {
  const b = parseFloat(document.getElementById('powBase')?.value) || 0;
  const e = parseFloat(document.getElementById('powExp')?.value) || 0;
  const resEl = document.getElementById('powerResult');
  if (resEl) resEl.textContent = `${b}^${e} = ${Math.pow(b, e)}`;
}

function calcMul() {
  const a = parseFloat(document.getElementById('mulA')?.value) || 0;
  const b = parseFloat(document.getElementById('mulB')?.value) || 0;
  const resEl = document.getElementById('mulResult');
  if (resEl) resEl.textContent = `${a} × ${b} = ${a * b}`;
}

function calcPct() {
  const part = parseFloat(document.getElementById('pctPart')?.value) || 0;
  const total = parseFloat(document.getElementById('pctTotal')?.value) || 1;
  const pct = ((part / total) * 100).toFixed(2);
  const resEl = document.getElementById('pctResult');
  if (resEl) resEl.textContent = `${part} of ${total} = ${pct}%`;
}

function calcSI() {
  const p = parseFloat(document.getElementById('siP')?.value) || 0;
  const r = parseFloat(document.getElementById('siR')?.value) || 0;
  const t = parseFloat(document.getElementById('siT')?.value) || 0;
  const si = (p * r * t) / 100;
  const resEl = document.getElementById('siResult');
  if (resEl) resEl.textContent = `SI = $${si.toFixed(2)} | Total = $${(p + si).toFixed(2)}`;
}

function calcCI() {
  const p = parseFloat(document.getElementById('ciP')?.value) || 0;
  const r = parseFloat(document.getElementById('ciR')?.value) || 0;
  const t = parseFloat(document.getElementById('ciT')?.value) || 0;
  const amount = p * Math.pow(1 + (r / 100), t);
  const ci = amount - p;
  const resEl = document.getElementById('ciResult');
  if (resEl) resEl.textContent = `CI = $${ci.toFixed(2)} | Total = $${amount.toFixed(2)}`;
}

function calcArea() {
  const l = parseFloat(document.getElementById('areaL')?.value) || 0;
  const w = parseFloat(document.getElementById('areaW')?.value) || 0;
  const resEl = document.getElementById('areaResult');
  if (resEl) resEl.textContent = `Area = ${l} × ${w} = ${l * w} sq units`;
}

function calcPeri() {
  const l = parseFloat(document.getElementById('periL')?.value) || 0;
  const w = parseFloat(document.getElementById('periW')?.value) || 0;
  const resEl = document.getElementById('periResult');
  if (resEl) resEl.textContent = `Perimeter = 2(${l} + ${w}) = ${2 * (l + w)} units`;
}

function calcVol() {
  const l = parseFloat(document.getElementById('volL')?.value) || 0;
  const w = parseFloat(document.getElementById('volW')?.value) || 0;
  const h = parseFloat(document.getElementById('volH')?.value) || 0;
  const resEl = document.getElementById('volResult');
  if (resEl) resEl.textContent = `Volume = ${l} × ${w} × ${h} = ${l * w * h} cu units`;
}

function calcSDT() {
  const d = parseFloat(document.getElementById('sdtDist')?.value) || 0;
  const t = parseFloat(document.getElementById('sdtTime')?.value) || 1;
  const s = (d / t).toFixed(2);
  const resEl = document.getElementById('sdtResult');
  if (resEl) resEl.textContent = `Speed = ${d} km / ${t} hr = ${s} km/h`;
}

function calcPL() {
  const cp = parseFloat(document.getElementById('plCP')?.value) || 0;
  const sp = parseFloat(document.getElementById('plSP')?.value) || 0;
  const diff = sp - cp;
  const resEl = document.getElementById('plResult');
  if (!resEl) return;
  if (diff >= 0) {
    const pct = cp ? ((diff / cp) * 100).toFixed(2) : 0;
    resEl.textContent = `Profit = +$${diff.toFixed(2)} (+${pct}%)`;
    resEl.style.color = '#34d399';
  } else {
    const loss = Math.abs(diff);
    const pct = cp ? ((loss / cp) * 100).toFixed(2) : 0;
    resEl.textContent = `Loss = -$${loss.toFixed(2)} (-${pct}%)`;
    resEl.style.color = '#f87171';
  }
}

function calcDiscount() {
  const p = parseFloat(document.getElementById('discPrice')?.value) || 0;
  const d = parseFloat(document.getElementById('discPct')?.value) || 0;
  const discAmt = p * (d / 100);
  const finalPrice = p - discAmt;
  const resEl = document.getElementById('discResult');
  if (resEl) resEl.textContent = `Disc = -$${discAmt.toFixed(2)} | Final = $${finalPrice.toFixed(2)}`;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function calcGCD() {
  const a = parseInt(document.getElementById('gcdA')?.value) || 1;
  const b = parseInt(document.getElementById('gcdB')?.value) || 1;
  const res = gcd(a, b);
  const resEl = document.getElementById('gcdResult');
  if (resEl) resEl.textContent = `GCD(${a}, ${b}) = ${res}`;
}

function calcLCM() {
  const a = parseInt(document.getElementById('lcmA')?.value) || 1;
  const b = parseInt(document.getElementById('lcmB')?.value) || 1;
  const res = Math.abs(a * b) / gcd(a, b);
  const resEl = document.getElementById('lcmResult');
  if (resEl) resEl.textContent = `LCM(${a}, ${b}) = ${res}`;
}

function calcAP() {
  const a = parseFloat(document.getElementById('apA')?.value) || 0;
  const d = parseFloat(document.getElementById('apD')?.value) || 0;
  const n = parseInt(document.getElementById('apN')?.value) || 1;
  const terms = [];
  for (let i = 0; i < n; i++) terms.push(a + (i * d));
  const an = a + (n - 1) * d;
  const sn = (n / 2) * (2 * a + (n - 1) * d);
  const resEl = document.getElementById('apResult');
  if (resEl) resEl.textContent = `[${terms.join(', ')}] | a${n}=${an} | Sum=${sn}`;
}

function calcFib() {
  const n = Math.min(30, Math.max(1, parseInt(document.getElementById('fibN')?.value) || 1));
  const fib = [0];
  if (n > 1) fib.push(1);
  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
  const resEl = document.getElementById('fibResult');
  if (resEl) resEl.textContent = `[${fib.join(', ')}]`;
}

function calcSumSeries() {
  const n = parseInt(document.getElementById('seriesN')?.value) || 1;
  const sum = (n * (n + 1)) / 2;
  const resEl = document.getElementById('seriesResult');
  if (resEl) resEl.textContent = `1 + 2 + ... + ${n} = ${sum}`;
}
