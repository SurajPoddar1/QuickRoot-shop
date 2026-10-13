/* =====================================================================
   QUICKROOT -> GOOGLE SHEET SENDER  (sheet.js)
   ---------------------------------------------------------------------
   Ye file customer ka data (signup, login, order, enquiry) Google Sheet
   me bhejti hai. Ye script.js se ALAG file hai.

   Ye file in pages me load honi chahiye: login, profile, cart, contact
   (<script src="sheet.js"></script>)

   EDIT KARNE KI JAGAH (sirf ye 2 line):
   ===================================================================== */
(function () {
  var WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxQq1pcLHyvnSm0GIlTDcFUbql8TXxT1_OE3G8qRE9_VWyIiMkLgUpanvnprSqFB5zO/exec";
  var SECRET = "Poddar-quickrootshop1-purneabihar-111";   // Code.gs wale SECRET ke saath bilkul same

  /* ---------------- Neeche ka code EDIT NAHI karna ---------------- */

  var QUEUE_KEY = "qrSheetQueue";   // internet na ho to data yahan wait karta hai

  /* URL sahi set hai ya nahi */
  function configured() {
    return WEB_APP_URL.indexOf("https://script.google.com/") === 0;
  }

  /* Wait karta hua data padho / likho / hatao */
  function readQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY)) || []; } catch (e) { return []; }
  }
  function writeQueue(q) {
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-100))); } catch (e) {}
  }
  function removeFromQueue(id) {
    writeQueue(readQueue().filter(function (x) { return x.id !== id; }));
  }

  /* Ek item Google Sheet ko bhejo.
     text/plain isliye, kyunki Apps Script CORS preflight support nahi karta. */
  function post(item) {
    return fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(item)
    }).then(function () { removeFromQueue(item.id); });
  }

  /* Wait karta hua saara data dobara bhejne ki koshish */
  function flush() {
    if (!configured() || navigator.onLine === false) return;
    readQueue().forEach(function (item) { post(item).catch(function () {}); });
  }

  /* Har event ki unique id (duplicate rokne ke liye) */
  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  /* Dusre pages isko aise use karte hain:  QRSheet.send("order", {...}) */
  function send(type, data) {
    if (!configured()) {
      console.warn("QRSheet: WEB_APP_URL set nahi hai, data sheet me nahi gaya.");
      return;
    }
    var item = { id: newId(), key: SECRET, type: type, sentAt: new Date().toISOString(), data: data || {} };
    var q = readQueue();
    q.push(item);
    writeQueue(q);                      // pehle save, bhej diya to hat jayega
    post(item).catch(function () {});
  }

  window.QRSheet = { send: send, flush: flush };
  window.addEventListener("load", flush);      // page khulte hi pending data bhejo
  window.addEventListener("online", flush);    // net aate hi pending data bhejo
})();