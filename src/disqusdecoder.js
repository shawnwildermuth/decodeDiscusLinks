// https://disq.us/url?impression=80560ace-3f45-11ed-b04b-1253810cd1bd&thread=7158067798&forum=5011031&url=https%3A%2F%2Fdisqus.com%2Fby%2Fjajuanjones%2F%3Futm_source%3Dreply%26utm_medium%3Demail%26utm_content%3Davatar%3A4G1cxZueDtqMhVlOu4t6eHJwX4U&variant=active&experiment=notif_digest_v3&behavior=click&post=5998333152&type=notification.post.registered&event=email
document.addEventListener("DOMContentLoaded", () => {
  const theInput = document.getElementById("urlInput");
  document.getElementById("goButton")
    .addEventListener("click", () => {
      const url = theInput.value;
      const parts = url.split("?");
      const paramList = new URLSearchParams(parts[1]);
      const commentUrl = paramList.get("url");
      window.location = decodeURI(commentUrl);
    });

});