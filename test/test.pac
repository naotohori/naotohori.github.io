function FindProxyForURL (url, host) {
    if (shExpMatch(host, "*journals.aps.org")) {
        return "PROXY "+host+".ezproxy.lib.utexas.edu";
    }
}
