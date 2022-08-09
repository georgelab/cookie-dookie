function fnxck (c){
    
    console.log(c);
    this.cookiename     = (c.cookiename) ? c.cookiename : 'fnxck_'+Math.random(),
    this.HTMLwarning    = (c.HTMLwarning) ? c.HTMLwarning : '<p>Este site utiliza cookies para promover uma melhor experiência em sua visitação. Se desejar, você pode desabilitá-los nas configurações de seu navegador.</p>',

    this.expiry         = (c.expiry) ? c.expiry : '-1',
    this.badge_icon     = (c.badge_icon) ? c.badge_icon : './fnxck_shield.svg',
    this.agree_label    = (c.agree_label) ? c.agree_label : 'Concordo',
    this.agree_valid_days       = (c.agree_valid_days) ? c.agree_valid_days : 365,
    this.disagree_label = (c.disagree_label) ? c.disagree_label : 'Não concordo',
    this.disagree_valid_days    = (c.disagree_valid_days) ? c.disagree_valid_days : 30,

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
    this.showWarn       = function() {
        var scaffold =  '<div id="boxck_'+this.cookiename+'" class="fnxcksetup">'+
                        '<div class="overlay"></div>'+
                        '<div class="content">'+
                        '<div class="sec">'+
                        '<img src="'+ this.badge_icon +'" width="32" height="32" alt="icone" title="icone" />'+
                        '</div>'+
                        '<div class="txt">' + this.HTMLwarning + '</div>' +
                        '<div class="ctl">' +
                        '<button class="agree" onclick="fnxck.setCookie(\'allowed\','+ this.agree_valid_days +')">'+this.agree_label+'</button>'+
                        '<button class="disagree" onclick="fnxck.setCookie(\'denied\','+ this.disagree_valid_days +')">'+this.disagree_label+'</button>'+
                        '</div>' +
                        '</div>' +
                        '</div>';
        var fnxdiv = document.createElement('div');
        fnxdiv.innerHTML = scaffold;
        while (fnxdiv.children.length > 0) {
            document.body.appendChild(fnxdiv.children[0]);
        }
    },
    this.start          = function() {
        if ( this.getCookie() === null ) this.showWarn();
    }
}