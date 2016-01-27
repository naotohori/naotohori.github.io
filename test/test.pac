function FindProxyForURL (url, host) {
    if (shExpMatch(host, "*journals.aps.org")) {
        return "PROXY "ezproxy.lib.utexas.edu";
        // return "PROXY "+host+".ezproxy.lib.utexas.edu";
    }
    return "DIRECT";
}
