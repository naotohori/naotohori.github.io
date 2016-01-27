function FindProxyForURL (url, host) {
    if (shExpMatch(host, "*journals.aps.org")) {
        return "PROXY journals.aps.org.ezproxy.lib.utexas.edu";
        // return "PROXY "+host+".ezproxy.lib.utexas.edu";
    }
    return "DIRECT";
}
