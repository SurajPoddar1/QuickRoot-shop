/* =====================================================================
   QUICKROOT - SHARED ORDER HELPERS  (orders.js)
   =====================================================================
   Ye file cart.html, tracking.html aur profile.html teeno me load hoti hai.
   Order se jude saare kaam yahin hain, taaki ek jagah badalne se sab jagah
   badal jaye:

     1. Delivery progress (Confirmed -> Packed -> Out for Delivery -> Delivered)
     2. Order cancel karna
     3. Shop owner ko WhatsApp message banana
     4. Bill (PDF invoice) download

   Dusre pages isko aise use karte hain:  QROrders.getProgress(order)  etc.

   EDIT KARNE KI JAGAH: sirf neeche "SETTINGS" wala hissa.
   ===================================================================== */
(function () {

  /* =====================================================================
     SETTINGS (yahan badlo)
     ===================================================================== */

  /* Shop ki details (bill aur WhatsApp me dikhengi) */
  var SHOP = {
    name: "Mantu Fruits",
    brand: "QuickRoot",
    phone: "9122437214",
    whatsapp: "919122437214",          // WhatsApp number (91 + number)
    address: "R. N. Sah Chowk, Purnea, Bihar"
  };

  /* Order place hone ke kitne SECOND baad kaunsa step green hoga tracking time .
     [Confirmed, Packed, Out for Delivery, Delivered]
       0    = turant order Confirmed
       300  = 5 minute baad Packed
       600  = 10 minute baad Out for Delivery
       2400 = 30 minute baad Delivered
     Tez ya dheere karna ho to ye numbers badlo. */
  var STEP_TIMES = [0, 300, 600, 2400];

  /* Cancel kab tak ho sakta hai: is step tak (1 = Confirmed, 2 = Packed).
     Out for Delivery ke baad cancel nahi hoga. */
  var CANCEL_UNTIL_STEP = 2;

  /* Delivery ke 4 steps (naam aur chhota description) */
  var STEPS = [
    { status: "Order Confirmed", desc: "We received your order successfully." },
    { status: "Packed",          desc: "Your fruits are packed and quality checked." },
    { status: "Out for Delivery", desc: "Your order is on the way to your address." },
    { status: "Delivered",       desc: "Order delivered successfully." }
  ];

  /* ===================================================================== */


  /* ---------------- chhote helpers ---------------- */

  function readJSON(key, fallback) {
    try {
      var v = JSON.parse(localStorage.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function money(n) { return "₹" + (Number(n) || 0); }          // screen / WhatsApp ke liye
  function rs(n) { return "Rs. " + (Number(n) || 0); }          // PDF ke liye (PDF me ₹ nahi chalta)

  /* PDF me sirf simple English akshar chalte hain, baaki hata do */
  function pdfSafe(text) {
    return String(text === undefined || text === null ? "" : text).replace(/[^\x20-\x7E]/g, " ");
  }


  /* ---------------- orders ko padhna / save karna ---------------- */

  function getAll() { return readJSON("orders", []); }

  function saveAll(list) { localStorage.setItem("orders", JSON.stringify(list)); }

  function getById(id) {
    var list = getAll();
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].id) === String(id)) return list[i];
    }
    return null;
  }


  /* ---------------- order ke items (naam, qty, price) ----------------
     Naye orders me items ka poora detail order ke saath save hota hai
     (itemsDetail), taaki baad me price badalne se purana bill na badle. */
  function getOrderLines(order) {
    if (order && Array.isArray(order.itemsDetail) && order.itemsDetail.length) {
      return order.itemsDetail;
    }

    var fruits = readJSON("fruitData", []);
    var items = (order && order.items) || {};
    var lines = [];

    Object.keys(items).forEach(function (id) {
      var qty = Number(items[id]) || 0;
      if (!qty) return;

      var fruit = null;
      for (var i = 0; i < fruits.length; i++) {
        if (String(fruits[i].id) === String(id)) { fruit = fruits[i]; break; }
      }

      if (fruit) {
        var price = (Number(fruit.price) || 0) - (Number(fruit.discount) || 0);
        lines.push({ id: id, name: fruit.name, unit: fruit.unit || "", qty: qty, price: price, total: price * qty });
      } else {
        lines.push({ id: id, name: "Item " + id, unit: "", qty: qty, price: 0, total: 0 });
      }
    });

    return lines;
  }


  /* ---------------- payment ki details ----------------
     customer = customer ko dikhane wala text
     owner    = aapko WhatsApp / Sheet me dikhne wala text */
  function getPaymentInfo(order) {
    var method = String((order && order.paymentMethod) || "");
    var total = order ? order.total : 0;

    if (method === "Cash on Delivery") {
      return {
        label: "Cash on Delivery",
        customer: "Pay on delivery",
        owner: "PENDING - collect " + money(total) + " cash at delivery"
      };
    }

    if (method === "UPI") {
      return {
        label: "UPI (QR)",
        customer: "",
        owner: "UPI - PAID " + money(total) + "."
      };
    }

    return { label: method || "Not selected", customer: method || "-", owner: method || "-" };
  }


  /* ---------------- delivery progress ----------------
     Order ke time se hisaab lagta hai ki abhi kaunsa step chal raha hai.
     Return:
       cancelled : true/false
       step      : 1 se 4 (0 = cancelled)
       status    : step ka naam
       lines     : 3 lines ka % bhara hua [0-100, 0-100, 0-100]  (dhire dhire green)
       etaText   : "~12 mins" / "Delivered" / "Cancelled"                       */
  function statusToStep(status) {
    var s = String(status || "").toLowerCase();
    if (s.indexOf("deliver") !== -1 && s.indexOf("out") === -1) return 4;
    if (s.indexOf("out for") !== -1) return 3;
    if (s.indexOf("pack") !== -1) return 2;
    return 1;
  }

  function getProgress(order) {
    var status = String((order && order.status) || "");

    if (/cancel/i.test(status)) {
      return { cancelled: true, step: 0, status: "Cancelled", lines: [0, 0, 0], etaText: "Cancelled" };
    }

    var createdAt = Number(order && order.createdAt) || 0;
    var statusStep = statusToStep(status);
    var step, lines, etaText;

    if (!createdAt) {
      /* Purana order jisme time save nahi tha: sirf status se dikhao */
      step = statusStep;
      lines = [step >= 2 ? 100 : 0, step >= 3 ? 100 : 0, step >= 4 ? 100 : 0];
    } else {
      var elapsed = Math.max(0, (Date.now() - createdAt) / 1000);

      step = 1;
      for (var i = 0; i < STEP_TIMES.length; i++) {
        if (elapsed >= STEP_TIMES[i]) step = i + 1;
      }
      if (statusStep > step) step = statusStep;

      lines = [0, 1, 2].map(function (seg) {
        var from = STEP_TIMES[seg];
        var to = STEP_TIMES[seg + 1];
        var pct = ((elapsed - from) / (to - from)) * 100;
        pct = Math.max(0, Math.min(100, pct));
        return step > seg + 1 ? 100 : Math.round(pct * 10) / 10;
      });
    }

    if (step >= 4) {
      etaText = "Delivered";
    } else if (createdAt) {
      var remainMin = Math.max(1, Math.ceil((STEP_TIMES[3] - (Date.now() - createdAt) / 1000) / 60));
      etaText = "~" + remainMin + " min" + (remainMin > 1 ? "s" : "");
    } else {
      etaText = step === 3 ? "5-10 mins" : step === 2 ? "10-15 mins" : "15-20 mins";
    }

    return { cancelled: false, step: step, status: STEPS[step - 1].status, lines: lines, etaText: etaText };
  }

  /* Order ka abhi ka status text (Confirmed / Packed / ... / Cancelled) */
  function getStatus(order) { return getProgress(order).status; }

  /* Time jab ye step pura hua (jaise "10:42 am"), nahi pata to "" */
  function getStepTime(order, step) {
    var createdAt = Number(order && order.createdAt) || 0;
    if (!createdAt) return "";
    var d = new Date(createdAt + STEP_TIMES[step - 1] * 1000);
    return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
  }


  /* ---------------- order cancel ---------------- */

  /* Cancel ho sakta hai ya nahi */
  function canCancel(order) {
    if (!order) return false;
    var p = getProgress(order);
    return !p.cancelled && p.step <= CANCEL_UNTIL_STEP;
  }

  /* Order cancel karo: browser me save + Google Sheet me bhejo.
     Return: cancelled order, ya null agar cancel nahi ho sakta. */
  function cancelOrder(orderId, reason) {
    var list = getAll();
    var found = null;

    for (var i = 0; i < list.length; i++) {
      if (String(list[i].id) === String(orderId)) { found = list[i]; break; }
    }
    if (!found || !canCancel(found)) return null;

    found.status = "Cancelled";
    found.cancelledAt = new Date().toLocaleString();
    found.cancelReason = reason || "Not given";
    saveAll(list);

    /* tracking page ka "current order" bhi update karo */
    var current = readJSON("currentOrder", null);
    if (current && String(current.id) === String(orderId)) {
      localStorage.setItem("currentOrder", JSON.stringify(found));
    }

    if (window.QRSheet) {
      QRSheet.send("order_cancel", { orderId: found.id, reason: found.cancelReason, username: found.user || "" });
    }

    return found;
  }


  /* ---------------- WhatsApp messages ---------------- */

  var LINE = "━━━━━━━━━━━━━━━━━━";

  /* Naye order ka message (shop owner ko jata hai) */
  function buildOrderMessage(order) {
    var lines = getOrderLines(order);
    var pay = getPaymentInfo(order);
    var out = [];

    out.push("🍎 *" + SHOP.name.toUpperCase() + "*");
    out.push("_" + SHOP.brand + " online order_");
    out.push(LINE);
    out.push("🧾 *NEW ORDER*");
    out.push("Order ID: *" + order.id + "*");
    out.push("Date: " + (order.date || ""));
    out.push("");
    out.push("👤 *CUSTOMER DETAILS*");
    out.push("Name: " + order.name);
    out.push("Phone: " + order.phone);
    out.push("Address: " + order.address);
    out.push("");
    out.push("🛒 *ORDER ITEMS*");

    lines.forEach(function (item, i) {
      out.push((i + 1) + ". " + item.name + (item.unit ? " (" + item.unit + ")" : ""));
      out.push("     " + item.qty + " x " + money(item.price) + " = " + money(item.total));
    });

    out.push(LINE);
    out.push("Subtotal: " + money(order.subtotal));
    out.push("Delivery: " + (Number(order.delivery) ? money(order.delivery) : "FREE"));
    out.push("*TOTAL: " + money(order.total) + "*");
    out.push("");
    out.push("💳 *PAYMENT DETAILS*");
    out.push("Method: " + pay.label);
    out.push("Status: " + pay.owner);
    if (order.paymentMethod === "UPI") {
      out.push("📸 Payment screenshot isi chat me aa raha hai.");
    }
    out.push(LINE);
    out.push("Please confirm this order. Thank you! 🙏");

    return out.join("\n");
  }

  /* Payment screenshot bhejne wala chhota message (customer WhatsApp me khud screenshot attach karega) */
  function buildScreenshotMessage(order) {
    return "💳 *PAYMENT SCREENSHOT*\n" +
      "Order ID: *" + order.id + "*\n" +
      "Name: " + order.name + "\n" +
      "Amount paid: *" + money(order.total) + "*\n\n" +
      "Maine UPI se payment kar diya hai. Screenshot neeche attach kar raha/rahi hoon 👇";
  }

  /* Cancel ka message (shop owner ko jata hai) */
  function buildCancelMessage(order) {
    var pay = getPaymentInfo(order);
    var out = [];

    out.push("🍎 *" + SHOP.name.toUpperCase() + "*");
    out.push(LINE);
    out.push("❌ *ORDER CANCELLED*");
    out.push("Order ID: *" + order.id + "*");
    out.push("Cancelled at: " + (order.cancelledAt || ""));
    out.push("Reason: " + (order.cancelReason || "Not given"));
    out.push("");
    out.push("👤 *CUSTOMER*");
    out.push("Name: " + order.name);
    out.push("Phone: " + order.phone);
    out.push("");
    out.push("💳 *PAYMENT*");
    out.push("Method: " + pay.label);
    out.push("Order total: " + money(order.total));
    if (order.paymentMethod === "UPI") {
      out.push("Note: UPI se payment hua tha, refund ke liye customer se baat karein.");
    }
    out.push(LINE);

    return out.join("\n");
  }

  function whatsappUrl(text) {
    return "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(text);
  }

  /* WhatsApp naye tab me kholo. Return: true = khul gaya, false = browser ne roka. */
  function openWhatsApp(text) {
    var w = window.open(whatsappUrl(text), "_blank");
    if (w) {
      try { w.opener = null; } catch (e) {}
    }
    return !!w;
  }


  /* ---------------- BILL (PDF invoice) ---------------- */
  function downloadBill(order) {
    if (!order) {
      alert("No order found");
      return false;
    }
    if (/cancel/i.test(String(order.status || ""))) {
      alert("Cancelled order ka bill nahi ban sakta.");
      return false;
    }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF library load nahi hui. Internet check karke dobara try karo.");
      return false;
    }

    var doc = new window.jspdf.jsPDF({ unit: "mm", format: "a4" });
    var W = 210;
    var M = 14;
    var y;
    var lines = getOrderLines(order);
    var pay = getPaymentInfo(order);

    /* --- upar ka hara header --- */
    doc.setFillColor(22, 101, 52);
    doc.rect(0, 0, W, 38, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(pdfSafe(SHOP.name), M, 17);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(pdfSafe("Fresh Fruits Store  |  " + SHOP.address), M, 25);
    doc.text("Phone: " + pdfSafe(SHOP.phone), M, 31);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("INVOICE", W - M, 17, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Order ID: " + pdfSafe(order.id), W - M, 25, { align: "right" });
    doc.text("Date: " + pdfSafe(order.date), W - M, 31, { align: "right" });

    /* --- Billed to --- */
    doc.setTextColor(30, 41, 59);
    y = 50;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("BILLED TO", M, y);
    doc.text("PAYMENT", 130, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    y += 6;
    doc.text(pdfSafe(order.name), M, y);
    doc.text(pdfSafe(pay.label), 130, y);
    doc.text("Phone: " + pdfSafe(order.phone), M, y + 5);
    doc.text(pdfSafe(pay.customer), 130, y + 5);

    var addressLines = doc.splitTextToSize("Address: " + pdfSafe(order.address), 105);
    doc.text(addressLines, M, y + 10);
    y += 10 + addressLines.length * 5 + 6;

    /* --- items table --- */
    function drawTableHeader() {
      doc.setFillColor(240, 244, 241);
      doc.rect(M - 2, y, W - 2 * M + 4, 9, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Item", M, y + 6);
      doc.text("Unit", 92, y + 6);
      doc.text("Price", 140, y + 6, { align: "right" });
      doc.text("Qty", 158, y + 6, { align: "right" });
      doc.text("Total", W - M, y + 6, { align: "right" });
      doc.setFont("helvetica", "normal");
      y += 15;
    }
    drawTableHeader();

    lines.forEach(function (item) {
      if (y > 270) {
        doc.addPage();
        y = 20;
        drawTableHeader();
      }
      doc.text(pdfSafe(item.name).slice(0, 38), M, y);
      doc.text(pdfSafe(item.unit), 92, y);
      doc.text(rs(item.price), 140, y, { align: "right" });
      doc.text(String(item.qty), 158, y, { align: "right" });
      doc.text(rs(item.total), W - M, y, { align: "right" });

      doc.setDrawColor(226, 232, 240);
      doc.line(M - 2, y + 3, W - M + 2, y + 3);
      y += 9;
    });

    /* --- totals --- */
    if (y > 245) {
      doc.addPage();
      y = 20;
    }
    y += 4;
    doc.setFontSize(10);
    doc.text("Subtotal", 130, y);
    doc.text(rs(order.subtotal), W - M, y, { align: "right" });
    y += 7;
    doc.text("Delivery", 130, y);
    doc.text(Number(order.delivery) ? rs(order.delivery) : "FREE", W - M, y, { align: "right" });
    y += 5;

    doc.setFillColor(22, 101, 52);
    doc.rect(125, y, W - M - 125 + 2, 11, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("TOTAL", 130, y + 7.5);
    doc.text(rs(order.total), W - M, y + 7.5, { align: "right" });

    /* --- neeche dhanyavaad --- */
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Thank you for shopping with " + pdfSafe(SHOP.name) + "!", W / 2, 285, { align: "center" });

    doc.save("MantuFruits_Invoice_" + pdfSafe(order.id).replace(/\s+/g, "") + ".pdf");
    return true;
  }


  /* ---------------- bahar ke liye (dusre pages yahin se use karenge) ---------------- */
  window.QROrders = {
    SHOP: SHOP,
    STEPS: STEPS,
    STEP_TIMES: STEP_TIMES,
    getAll: getAll,
    saveAll: saveAll,
    getById: getById,
    getOrderLines: getOrderLines,
    getPaymentInfo: getPaymentInfo,
    getProgress: getProgress,
    getStatus: getStatus,
    getStepTime: getStepTime,
    canCancel: canCancel,
    cancelOrder: cancelOrder,
    buildOrderMessage: buildOrderMessage,
    buildCancelMessage: buildCancelMessage,
    buildScreenshotMessage: buildScreenshotMessage,
    whatsappUrl: whatsappUrl,
    openWhatsApp: openWhatsApp,
    downloadBill: downloadBill
  };
})();