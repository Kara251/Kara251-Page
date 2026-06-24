const CANONICAL_HOST = "www.kara251.com";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

function normalizeHostname(hostname) {
  return hostname.toLowerCase().replace(/\.$/, "");
}

function getRequestHostname(request, fallbackHostname) {
  const hostHeader = request.headers.get("host");

  if (!hostHeader) {
    return normalizeHostname(fallbackHostname);
  }

  return normalizeHostname(hostHeader.replace(/:\d+$/, ""));
}

function isLocalOrPreviewHost(hostname) {
  return (
    LOCAL_HOSTS.has(hostname) ||
    hostname.endsWith(".workers.dev") ||
    hostname.endsWith(".pages.dev")
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = getRequestHostname(request, url.hostname);

    if (hostname !== CANONICAL_HOST && !isLocalOrPreviewHost(hostname)) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 308);
    }

    return env.ASSETS.fetch(request);
  }
};
