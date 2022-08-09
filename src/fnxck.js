function fnxck (fnxcookiename='fnxck'+Math.random(), fnxcookieexpiry='-1'){
    this.cookiename     = fnxcookiename;
    this.expiry         = fnxcookieexpiry;
    this.getCookie      = function() {
        var nameEQ = this.cookiename + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) {
                var val = c.substring(nameEQ.length,c.length);
                return (val) ? val : null;
            }
        }
        return null;
    },
    this.setCookie      = function(value, days=0) {
        name = this.cookiename;
        days = (days && days > 0) ? days : this.expiry;
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        if (document.getElementById('boxck_'+this.cookiename) != undefined ) {
            document.getElementById('boxck_'+this.cookiename).style="display:none";
        }
    },
    this.clearCookie    = function() {
        name = this.cookiename;
        days = this.expiry;
        var expires = "; expires=-1";
        document.cookie = name + "=" + expires + "; path=/";
    },
    this.showWarn       = function(html='') {
        var basichtml = '<p>warn</p>';
        var innerhtml = (html) ? '<div id="boxck_'+this.cookiename+'" class="fnxcksetup">'+html+'</div>' : '<div id="boxck_'+this.cookiename+'" class="fnxcksetup">'+basichtml+'</div>';
        var fnxdiv = document.createElement('div');
        fnxdiv.innerHTML = innerhtml;
        while (fnxdiv.children.length > 0) {
            document.body.appendChild(fnxdiv.children[0]);
        }
    }
}