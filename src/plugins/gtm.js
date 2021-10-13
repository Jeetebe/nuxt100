import Cookies from "js-cookie"

const gtmKey = "GTM-TPQ9C5Q" // <- insert your GTM key here

export default () => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== "production") return
  /*
   ** Only run if it's not prevented by user
   */
  if (Cookies.get("disable-gtm")) return
  /*
   ** Include Google Tag Manager
   */
  ;(function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r
    ;(i[r] =
      i[r] ||
      function() {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  )

  ;(function(w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({ "gtm.start": new Date().getTime(), "event": "gtm.js" })
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : ""
    j.async = true
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
    f.parentNode.insertBefore(j, f)
  })(window, document, "script", "dataLayer", gtmKey)
}
