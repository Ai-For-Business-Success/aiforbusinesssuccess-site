/* ONE place to set the three Systeme.io links. Edit only the text inside the quotes.
   - optinUrl:  the Systeme.io opt-in page (used as the fallback link under the form)
   - pdfUrl:    the white paper PDF file link hosted on Systeme.io
   - sampleUrl: the Blueprint SAMPLE file link hosted on Systeme.io */
window.SITE = {
  optinUrl:  "https://aiforbusinesssuccessbook.systeme.io/whitepaper",
  pdfUrl:    "https://d1yei2z3i6k35z.cloudfront.net/19576743/6ae48f18f016a1.10957639_Agentic_AI_White_Paper_2026.pdf",
  sampleUrl: "https://d1yei2z3i6k35z.cloudfront.net/19576743/6ae48ab2ed1357.43961270_The_AI_Implementation_Blueprint_SAMPLE.xlsx",
  bookUrl:   "https://www.amazon.com/dp/B0GKYWGB4P"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var v = window.SITE[el.getAttribute("data-link")];
    if (v) el.setAttribute("href", v);
  });
});
