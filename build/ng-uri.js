(function () {
  'use strict';
  angular.module('ngUri', []);
}());
(function () {
  'use strict';
  angular.module('ngUri').service('SLD', SLD);
  function SLD() {
    'use strict';
    // save current SecondLevelDomains variable, if any
    var _SecondLevelDomains = null;
    var SLD = {
        list: {
          'ac': ' com gov mil net org ',
          'ae': ' ac co gov mil name net org pro sch ',
          'af': ' com edu gov net org ',
          'al': ' com edu gov mil net org ',
          'ao': ' co ed gv it og pb ',
          'ar': ' com edu gob gov int mil net org tur ',
          'at': ' ac co gv or ',
          'au': ' asn com csiro edu gov id net org ',
          'ba': ' co com edu gov mil net org rs unbi unmo unsa untz unze ',
          'bb': ' biz co com edu gov info net org store tv ',
          'bh': ' biz cc com edu gov info net org ',
          'bn': ' com edu gov net org ',
          'bo': ' com edu gob gov int mil net org tv ',
          'br': ' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
          'bs': ' com edu gov net org ',
          'bz': ' du et om ov rg ',
          'ca': ' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
          'ck': ' biz co edu gen gov info net org ',
          'cn': ' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
          'co': ' com edu gov mil net nom org ',
          'cr': ' ac c co ed fi go or sa ',
          'cy': ' ac biz com ekloges gov ltd name net org parliament press pro tm ',
          'do': ' art com edu gob gov mil net org sld web ',
          'dz': ' art asso com edu gov net org pol ',
          'ec': ' com edu fin gov info med mil net org pro ',
          'eg': ' com edu eun gov mil name net org sci ',
          'er': ' com edu gov ind mil net org rochest w ',
          'es': ' com edu gob nom org ',
          'et': ' biz com edu gov info name net org ',
          'fj': ' ac biz com info mil name net org pro ',
          'fk': ' ac co gov net nom org ',
          'fr': ' asso com f gouv nom prd presse tm ',
          'gg': ' co net org ',
          'gh': ' com edu gov mil org ',
          'gn': ' ac com gov net org ',
          'gr': ' com edu gov mil net org ',
          'gt': ' com edu gob ind mil net org ',
          'gu': ' com edu gov net org ',
          'hk': ' com edu gov idv net org ',
          'hu': ' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
          'id': ' ac co go mil net or sch web ',
          'il': ' ac co gov idf k12 muni net org ',
          'in': ' ac co edu ernet firm gen gov i ind mil net nic org res ',
          'iq': ' com edu gov i mil net org ',
          'ir': ' ac co dnssec gov i id net org sch ',
          'it': ' edu gov ',
          'je': ' co net org ',
          'jo': ' com edu gov mil name net org sch ',
          'jp': ' ac ad co ed go gr lg ne or ',
          'ke': ' ac co go info me mobi ne or sc ',
          'kh': ' com edu gov mil net org per ',
          'ki': ' biz com de edu gov info mob net org tel ',
          'km': ' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
          'kn': ' edu gov net org ',
          'kr': ' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
          'kw': ' com edu gov net org ',
          'ky': ' com edu gov net org ',
          'kz': ' com edu gov mil net org ',
          'lb': ' com edu gov net org ',
          'lk': ' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
          'lr': ' com edu gov net org ',
          'lv': ' asn com conf edu gov id mil net org ',
          'ly': ' com edu gov id med net org plc sch ',
          'ma': ' ac co gov m net org press ',
          'mc': ' asso tm ',
          'me': ' ac co edu gov its net org priv ',
          'mg': ' com edu gov mil nom org prd tm ',
          'mk': ' com edu gov inf name net org pro ',
          'ml': ' com edu gov net org presse ',
          'mn': ' edu gov org ',
          'mo': ' com edu gov net org ',
          'mt': ' com edu gov net org ',
          'mv': ' aero biz com coop edu gov info int mil museum name net org pro ',
          'mw': ' ac co com coop edu gov int museum net org ',
          'mx': ' com edu gob net org ',
          'my': ' com edu gov mil name net org sch ',
          'nf': ' arts com firm info net other per rec store web ',
          'ng': ' biz com edu gov mil mobi name net org sch ',
          'ni': ' ac co com edu gob mil net nom org ',
          'np': ' com edu gov mil net org ',
          'nr': ' biz com edu gov info net org ',
          'om': ' ac biz co com edu gov med mil museum net org pro sch ',
          'pe': ' com edu gob mil net nom org sld ',
          'ph': ' com edu gov i mil net ngo org ',
          'pk': ' biz com edu fam gob gok gon gop gos gov net org web ',
          'pl': ' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
          'pr': ' ac biz com edu est gov info isla name net org pro prof ',
          'ps': ' com edu gov net org plo sec ',
          'pw': ' belau co ed go ne or ',
          'ro': ' arts com firm info nom nt org rec store tm www ',
          'rs': ' ac co edu gov in org ',
          'sb': ' com edu gov net org ',
          'sc': ' com edu gov net org ',
          'sh': ' co com edu gov net nom org ',
          'sl': ' com edu gov net org ',
          'st': ' co com consulado edu embaixada gov mil net org principe saotome store ',
          'sv': ' com edu gob org red ',
          'sz': ' ac co org ',
          'tr': ' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
          'tt': ' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
          'tw': ' club com ebiz edu game gov idv mil net org ',
          'mu': ' ac co com gov net or org ',
          'mz': ' ac co edu gov org ',
          'na': ' co com ',
          'nz': ' ac co cri geek gen govt health iwi maori mil net org parliament school ',
          'pa': ' abo ac com edu gob ing med net nom org sld ',
          'pt': ' com edu gov int net nome org publ ',
          'py': ' com edu gov mil net org ',
          'qa': ' com edu gov mil net org ',
          're': ' asso com nom ',
          'ru': ' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
          'rw': ' ac co com edu gouv gov int mil net ',
          'sa': ' com edu gov med net org pub sch ',
          'sd': ' com edu gov info med net org tv ',
          'se': ' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
          'sg': ' com edu gov idn net org per ',
          'sn': ' art com edu gouv org perso univ ',
          'sy': ' com edu gov mil net news org ',
          'th': ' ac co go in mi net or ',
          'tj': ' ac biz co com edu go gov info int mil name net nic org test web ',
          'tn': ' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
          'tz': ' ac co go ne or ',
          'ua': ' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
          'ug': ' ac co go ne or org sc ',
          'uk': ' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
          'us': ' dni fed isa kids nsn ',
          'uy': ' com edu gub mil net org ',
          've': ' co com edu gob info mil net org web ',
          'vi': ' co com k12 net org ',
          'vn': ' ac biz com edu gov health info int name net org pro ',
          'ye': ' co com gov ltd me net org plc ',
          'yu': ' ac co edu gov org ',
          'za': ' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
          'zm': ' ac co com edu gov net org sch '
        },
        has: function (domain) {
          var tldOffset = domain.lastIndexOf('.');
          if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
            return false;
          }
          var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
          if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
            return false;
          }
          var sldList = SLD.list[domain.slice(tldOffset + 1)];
          if (!sldList) {
            return false;
          }
          return sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') >= 0;
        },
        is: function (domain) {
          var tldOffset = domain.lastIndexOf('.');
          if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
            return false;
          }
          var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
          if (sldOffset >= 0) {
            return false;
          }
          var sldList = SLD.list[domain.slice(tldOffset + 1)];
          if (!sldList) {
            return false;
          }
          return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
        },
        get: function (domain) {
          var tldOffset = domain.lastIndexOf('.');
          if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
            return null;
          }
          var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
          if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
            return null;
          }
          var sldList = SLD.list[domain.slice(tldOffset + 1)];
          if (!sldList) {
            return null;
          }
          if (sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') < 0) {
            return null;
          }
          return domain.slice(sldOffset + 1);
        },
        noConflict: function () {
          if (root.SecondLevelDomains === this) {
            root.SecondLevelDomains = _SecondLevelDomains;
          }
          return this;
        }
      };
    return SLD;
  }
}());
(function () {
  'use strict';
  angular.module('ngUri').service('ngUri', ngUri);
  function ngUri(SLD) {
    'use strict';
    /*global location, escape, unescape */
    // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
    /*jshint camelcase: false */
    var _URI = null;
    function URI(url, base) {
      var _urlSupplied = arguments.length >= 1;
      var _baseSupplied = arguments.length >= 2;
      // Allow instantiation without the 'new' keyword
      if (!(this instanceof URI)) {
        if (_urlSupplied) {
          if (_baseSupplied) {
            return new URI(url, base);
          }
          return new URI(url);
        }
        return new URI();
      }
      if (url === undefined) {
        if (_urlSupplied) {
          throw new TypeError('undefined is not a valid argument for URI');
        }
        if (typeof location !== 'undefined') {
          url = location.href + '';
        } else {
          url = '';
        }
      }
      this.href(url);
      // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
      if (base !== undefined) {
        return this.absoluteTo(base);
      }
      return this;
    }
    URI.version = '1.15.1';
    var p = URI.prototype;
    var hasOwn = Object.prototype.hasOwnProperty;
    function escapeRegEx(string) {
      // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
      return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    function getType(value) {
      // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
      if (value === undefined) {
        return 'Undefined';
      }
      return String(Object.prototype.toString.call(value)).slice(8, -1);
    }
    function isArray(obj) {
      return getType(obj) === 'Array';
    }
    function filterArrayValues(data, value) {
      var lookup = {};
      var i, length;
      if (getType(value) === 'RegExp') {
        lookup = null;
      } else if (isArray(value)) {
        for (i = 0, length = value.length; i < length; i++) {
          lookup[value[i]] = true;
        }
      } else {
        lookup[value] = true;
      }
      for (i = 0, length = data.length; i < length; i++) {
        /*jshint laxbreak: true */
        var _match = lookup && lookup[data[i]] !== undefined || !lookup && value.test(data[i]);
        /*jshint laxbreak: false */
        if (_match) {
          data.splice(i, 1);
          length--;
          i--;
        }
      }
      return data;
    }
    function arrayContains(list, value) {
      var i, length;
      // value may be string, number, array, regexp
      if (isArray(value)) {
        // Note: this can be optimized to O(n) (instead of current O(m * n))
        for (i = 0, length = value.length; i < length; i++) {
          if (!arrayContains(list, value[i])) {
            return false;
          }
        }
        return true;
      }
      var _type = getType(value);
      for (i = 0, length = list.length; i < length; i++) {
        if (_type === 'RegExp') {
          if (typeof list[i] === 'string' && list[i].match(value)) {
            return true;
          }
        } else if (list[i] === value) {
          return true;
        }
      }
      return false;
    }
    function arraysEqual(one, two) {
      if (!isArray(one) || !isArray(two)) {
        return false;
      }
      // arrays can't be equal if they have different amount of content
      if (one.length !== two.length) {
        return false;
      }
      one.sort();
      two.sort();
      for (var i = 0, l = one.length; i < l; i++) {
        if (one[i] !== two[i]) {
          return false;
        }
      }
      return true;
    }
    URI._parts = function () {
      return {
        protocol: null,
        username: null,
        password: null,
        hostname: null,
        urn: null,
        port: null,
        path: null,
        query: null,
        fragment: null,
        duplicateQueryParameters: URI.duplicateQueryParameters,
        escapeQuerySpace: URI.escapeQuerySpace
      };
    };
    // state: allow duplicate query parameters (a=1&a=1)
    URI.duplicateQueryParameters = false;
    // state: replaces + with %20 (space in query strings)
    URI.escapeQuerySpace = true;
    // static properties
    URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    URI.idn_expression = /[^a-z0-9\.-]/i;
    URI.punycode_expression = /(xn--)/i;
    // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
    URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    // credits to Rich Brown
    // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
    // specification: http://www.ietf.org/rfc/rfc4291.txt
    URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    // expression used is "gruber revised" (@gruber v2) determined to be the
    // best solution in a regex-golf we did a couple of ages ago at
    // * http://mathiasbynens.be/demo/url-regex
    // * http://rodneyrehm.de/t/url-regex.html
    URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    URI.findUri = {
      start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
      end: /[\s\r\n]|$/,
      trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/
    };
    // http://www.iana.org/assignments/uri-schemes.html
    // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
    URI.defaultPorts = {
      http: '80',
      https: '443',
      ftp: '21',
      gopher: '70',
      ws: '80',
      wss: '443'
    };
    // allowed hostname characters according to RFC 3986
    // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
    // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . -
    URI.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
    // map DOM Elements to their URI attribute
    URI.domAttributes = {
      'a': 'href',
      'blockquote': 'cite',
      'link': 'href',
      'base': 'href',
      'script': 'src',
      'form': 'action',
      'img': 'src',
      'area': 'href',
      'iframe': 'src',
      'embed': 'src',
      'source': 'src',
      'track': 'src',
      'input': 'src',
      'audio': 'src',
      'video': 'src'
    };
    URI.getDomAttribute = function (node) {
      if (!node || !node.nodeName) {
        return undefined;
      }
      var nodeName = node.nodeName.toLowerCase();
      // <input> should only expose src for type="image"
      if (nodeName === 'input' && node.type !== 'image') {
        return undefined;
      }
      return URI.domAttributes[nodeName];
    };
    function escapeForDumbFirefox36(value) {
      // https://github.com/medialize/URI.js/issues/91
      return escape(value);
    }
    // encoding / decoding according to RFC3986
    function strictEncodeURIComponent(string) {
      // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
      return encodeURIComponent(string).replace(/[!'()*]/g, escapeForDumbFirefox36).replace(/\*/g, '%2A');
    }
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
    URI.iso8859 = function () {
      URI.encode = escape;
      URI.decode = unescape;
    };
    URI.unicode = function () {
      URI.encode = strictEncodeURIComponent;
      URI.decode = decodeURIComponent;
    };
    URI.characters = {
      pathname: {
        encode: {
          expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
          map: {
            '%24': '$',
            '%26': '&',
            '%2B': '+',
            '%2C': ',',
            '%3B': ';',
            '%3D': '=',
            '%3A': ':',
            '%40': '@'
          }
        },
        decode: {
          expression: /[\/\?#]/g,
          map: {
            '/': '%2F',
            '?': '%3F',
            '#': '%23'
          }
        }
      },
      reserved: {
        encode: {
          expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
          map: {
            '%3A': ':',
            '%2F': '/',
            '%3F': '?',
            '%23': '#',
            '%5B': '[',
            '%5D': ']',
            '%40': '@',
            '%21': '!',
            '%24': '$',
            '%26': '&',
            '%27': '\'',
            '%28': '(',
            '%29': ')',
            '%2A': '*',
            '%2B': '+',
            '%2C': ',',
            '%3B': ';',
            '%3D': '='
          }
        }
      },
      urnpath: {
        encode: {
          expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
          map: {
            '%21': '!',
            '%24': '$',
            '%27': '\'',
            '%28': '(',
            '%29': ')',
            '%2A': '*',
            '%2B': '+',
            '%2C': ',',
            '%3B': ';',
            '%3D': '=',
            '%40': '@'
          }
        },
        decode: {
          expression: /[\/\?#:]/g,
          map: {
            '/': '%2F',
            '?': '%3F',
            '#': '%23',
            ':': '%3A'
          }
        }
      }
    };
    URI.encodeQuery = function (string, escapeQuerySpace) {
      var escaped = URI.encode(string + '');
      if (escapeQuerySpace === undefined) {
        escapeQuerySpace = URI.escapeQuerySpace;
      }
      return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
    };
    URI.decodeQuery = function (string, escapeQuerySpace) {
      string += '';
      if (escapeQuerySpace === undefined) {
        escapeQuerySpace = URI.escapeQuerySpace;
      }
      try {
        return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
    // generate encode/decode path functions
    var _parts = {
        'encode': 'encode',
        'decode': 'decode'
      };
    var _part;
    var generateAccessor = function (_group, _part) {
      return function (string) {
        try {
          return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function (c) {
            return URI.characters[_group][_part].map[c];
          });
        } catch (e) {
          // we're not going to mess with weird encodings,
          // give up and return the undecoded original string
          // see https://github.com/medialize/URI.js/issues/87
          // see https://github.com/medialize/URI.js/issues/92
          return string;
        }
      };
    };
    for (_part in _parts) {
      URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
      URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
    }
    var generateSegmentedPathFunction = function (_sep, _codingFuncName, _innerCodingFuncName) {
      return function (string) {
        // Why pass in names of functions, rather than the function objects themselves? The
        // definitions of some functions (but in particular, URI.decode) will occasionally change due
        // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
        // that the functions we use here are "fresh".
        var actualCodingFunc;
        if (!_innerCodingFuncName) {
          actualCodingFunc = URI[_codingFuncName];
        } else {
          actualCodingFunc = function (string) {
            return URI[_codingFuncName](URI[_innerCodingFuncName](string));
          };
        }
        var segments = (string + '').split(_sep);
        for (var i = 0, length = segments.length; i < length; i++) {
          segments[i] = actualCodingFunc(segments[i]);
        }
        return segments.join(_sep);
      };
    };
    // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
    URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
    URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
    URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
    URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');
    URI.encodeReserved = generateAccessor('reserved', 'encode');
    URI.parse = function (string, parts) {
      var pos;
      if (!parts) {
        parts = {};
      }
      // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]
      // extract fragment
      pos = string.indexOf('#');
      if (pos > -1) {
        // escaping?
        parts.fragment = string.substring(pos + 1) || null;
        string = string.substring(0, pos);
      }
      // extract query
      pos = string.indexOf('?');
      if (pos > -1) {
        // escaping?
        parts.query = string.substring(pos + 1) || null;
        string = string.substring(0, pos);
      }
      // extract protocol
      if (string.substring(0, 2) === '//') {
        // relative-scheme
        parts.protocol = null;
        string = string.substring(2);
        // extract "user:pass@host:port"
        string = URI.parseAuthority(string, parts);
      } else {
        pos = string.indexOf(':');
        if (pos > -1) {
          parts.protocol = string.substring(0, pos) || null;
          if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
            // : may be within the path
            parts.protocol = undefined;
          } else if (string.substring(pos + 1, pos + 3) === '//') {
            string = string.substring(pos + 3);
            // extract "user:pass@host:port"
            string = URI.parseAuthority(string, parts);
          } else {
            string = string.substring(pos + 1);
            parts.urn = true;
          }
        }
      }
      // what's left must be the path
      parts.path = string;
      // and we're done
      return parts;
    };
    URI.parseHost = function (string, parts) {
      // extract host:port
      var pos = string.indexOf('/');
      var bracketPos;
      var t;
      if (pos === -1) {
        pos = string.length;
      }
      if (string.charAt(0) === '[') {
        // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
        // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
        // IPv6+port in the format [2001:db8::1]:80 (for the time being)
        bracketPos = string.indexOf(']');
        parts.hostname = string.substring(1, bracketPos) || null;
        parts.port = string.substring(bracketPos + 2, pos) || null;
        if (parts.port === '/') {
          parts.port = null;
        }
      } else {
        var firstColon = string.indexOf(':');
        var firstSlash = string.indexOf('/');
        var nextColon = string.indexOf(':', firstColon + 1);
        if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
          // IPv6 host contains multiple colons - but no port
          // this notation is actually not allowed by RFC 3986, but we're a liberal parser
          parts.hostname = string.substring(0, pos) || null;
          parts.port = null;
        } else {
          t = string.substring(0, pos).split(':');
          parts.hostname = t[0] || null;
          parts.port = t[1] || null;
        }
      }
      if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
        pos++;
        string = '/' + string;
      }
      return string.substring(pos) || '/';
    };
    URI.parseAuthority = function (string, parts) {
      string = URI.parseUserinfo(string, parts);
      return URI.parseHost(string, parts);
    };
    URI.parseUserinfo = function (string, parts) {
      // extract username:password
      var firstSlash = string.indexOf('/');
      var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
      var t;
      // authority@ must come before /path
      if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
        t = string.substring(0, pos).split(':');
        parts.username = t[0] ? URI.decode(t[0]) : null;
        t.shift();
        parts.password = t[0] ? URI.decode(t.join(':')) : null;
        string = string.substring(pos + 1);
      } else {
        parts.username = null;
        parts.password = null;
      }
      return string;
    };
    URI.parseQuery = function (string, escapeQuerySpace) {
      if (!string) {
        return {};
      }
      // throw out the funky business - "?"[name"="value"&"]+
      string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');
      if (!string) {
        return {};
      }
      var items = {};
      var splits = string.split('&');
      var length = splits.length;
      var v, name, value;
      for (var i = 0; i < length; i++) {
        v = splits[i].split('=');
        name = URI.decodeQuery(v.shift(), escapeQuerySpace);
        // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
        value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;
        if (hasOwn.call(items, name)) {
          if (typeof items[name] === 'string') {
            items[name] = [items[name]];
          }
          items[name].push(value);
        } else {
          items[name] = value;
        }
      }
      return items;
    };
    URI.build = function (parts) {
      var t = '';
      if (parts.protocol) {
        t += parts.protocol + ':';
      }
      if (!parts.urn && (t || parts.hostname)) {
        t += '//';
      }
      t += URI.buildAuthority(parts) || '';
      if (typeof parts.path === 'string') {
        if (parts.path.charAt(0) !== '/' && typeof parts.hostname === 'string') {
          t += '/';
        }
        t += parts.path;
      }
      if (typeof parts.query === 'string' && parts.query) {
        t += '?' + parts.query;
      }
      if (typeof parts.fragment === 'string' && parts.fragment) {
        t += '#' + parts.fragment;
      }
      return t;
    };
    URI.buildHost = function (parts) {
      var t = '';
      if (!parts.hostname) {
        return '';
      } else if (URI.ip6_expression.test(parts.hostname)) {
        t += '[' + parts.hostname + ']';
      } else {
        t += parts.hostname;
      }
      if (parts.port) {
        t += ':' + parts.port;
      }
      return t;
    };
    URI.buildAuthority = function (parts) {
      return URI.buildUserinfo(parts) + URI.buildHost(parts);
    };
    URI.buildUserinfo = function (parts) {
      var t = '';
      if (parts.username) {
        t += URI.encode(parts.username);
        if (parts.password) {
          t += ':' + URI.encode(parts.password);
        }
        t += '@';
      }
      return t;
    };
    URI.buildQuery = function (data, duplicateQueryParameters, escapeQuerySpace) {
      // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
      // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
      // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
      // URI.js treats the query string as being application/x-www-form-urlencoded
      // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type
      var t = '';
      var unique, key, i, length;
      for (key in data) {
        if (hasOwn.call(data, key) && key) {
          if (isArray(data[key])) {
            unique = {};
            for (i = 0, length = data[key].length; i < length; i++) {
              if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
                t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
                if (duplicateQueryParameters !== true) {
                  unique[data[key][i] + ''] = true;
                }
              }
            }
          } else if (data[key] !== undefined) {
            t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
          }
        }
      }
      return t.substring(1);
    };
    URI.buildQueryParameter = function (name, value, escapeQuerySpace) {
      // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
      // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
      return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
    };
    URI.addQuery = function (data, name, value) {
      if (typeof name === 'object') {
        for (var key in name) {
          if (hasOwn.call(name, key)) {
            URI.addQuery(data, key, name[key]);
          }
        }
      } else if (typeof name === 'string') {
        if (data[name] === undefined) {
          data[name] = value;
          return;
        } else if (typeof data[name] === 'string') {
          data[name] = [data[name]];
        }
        if (!isArray(value)) {
          value = [value];
        }
        data[name] = (data[name] || []).concat(value);
      } else {
        throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
      }
    };
    URI.removeQuery = function (data, name, value) {
      var i, length, key;
      if (isArray(name)) {
        for (i = 0, length = name.length; i < length; i++) {
          data[name[i]] = undefined;
        }
      } else if (getType(name) === 'RegExp') {
        for (key in data) {
          if (name.test(key)) {
            data[key] = undefined;
          }
        }
      } else if (typeof name === 'object') {
        for (key in name) {
          if (hasOwn.call(name, key)) {
            URI.removeQuery(data, key, name[key]);
          }
        }
      } else if (typeof name === 'string') {
        if (value !== undefined) {
          if (getType(value) === 'RegExp') {
            if (!isArray(data[name]) && value.test(data[name])) {
              data[name] = undefined;
            } else {
              data[name] = filterArrayValues(data[name], value);
            }
          } else if (data[name] === value) {
            data[name] = undefined;
          } else if (isArray(data[name])) {
            data[name] = filterArrayValues(data[name], value);
          }
        } else {
          data[name] = undefined;
        }
      } else {
        throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
      }
    };
    URI.hasQuery = function (data, name, value, withinArray) {
      if (typeof name === 'object') {
        for (var key in name) {
          if (hasOwn.call(name, key)) {
            if (!URI.hasQuery(data, key, name[key])) {
              return false;
            }
          }
        }
        return true;
      } else if (typeof name !== 'string') {
        throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
      }
      switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data;
      // data[name] !== undefined;
      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;
      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);
      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }
        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);
      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }
        if (!withinArray) {
          return false;
        }
        return arrayContains(data[name], value);
      case 'Number':
        value = String(value);
      /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }
        if (!withinArray) {
          return false;
        }
        return arrayContains(data[name], value);
      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
      }
    };
    URI.commonPath = function (one, two) {
      var length = Math.min(one.length, two.length);
      var pos;
      // find first non-matching character
      for (pos = 0; pos < length; pos++) {
        if (one.charAt(pos) !== two.charAt(pos)) {
          pos--;
          break;
        }
      }
      if (pos < 1) {
        return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
      }
      // revert to last /
      if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
        pos = one.substring(0, pos).lastIndexOf('/');
      }
      return one.substring(0, pos + 1);
    };
    URI.withinString = function (string, callback, options) {
      options || (options = {});
      var _start = options.start || URI.findUri.start;
      var _end = options.end || URI.findUri.end;
      var _trim = options.trim || URI.findUri.trim;
      var _attributeOpen = /[a-z0-9-]=["']?$/i;
      _start.lastIndex = 0;
      while (true) {
        var match = _start.exec(string);
        if (!match) {
          break;
        }
        var start = match.index;
        if (options.ignoreHtml) {
          // attribut(e=["']?$)
          var attributeOpen = string.slice(Math.max(start - 3, 0), start);
          if (attributeOpen && _attributeOpen.test(attributeOpen)) {
            continue;
          }
        }
        var end = start + string.slice(start).search(_end);
        var slice = string.slice(start, end).replace(_trim, '');
        if (options.ignore && options.ignore.test(slice)) {
          continue;
        }
        end = start + slice.length;
        var result = callback(slice, start, end, string);
        string = string.slice(0, start) + result + string.slice(end);
        _start.lastIndex = start + result.length;
      }
      _start.lastIndex = 0;
      return string;
    };
    URI.ensureValidHostname = function (v) {
      // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
      // they are not part of DNS and therefore ignored by URI.js
      if (v.match(URI.invalid_hostname_characters)) {
        // test punycode
        if (!punycode) {
          throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
        }
        if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
          throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
        }
      }
    };
    // noConflict
    URI.noConflict = function (removeAll) {
      if (removeAll) {
        var unconflicted = { URI: this.noConflict() };
        if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
          unconflicted.URITemplate = root.URITemplate.noConflict();
        }
        if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
          unconflicted.IPv6 = root.IPv6.noConflict();
        }
        if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
          unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
        }
        return unconflicted;
      } else if (root.URI === this) {
        root.URI = _URI;
      }
      return this;
    };
    p.build = function (deferBuild) {
      if (deferBuild === true) {
        this._deferred_build = true;
      } else if (deferBuild === undefined || this._deferred_build) {
        this._string = URI.build(this._parts);
        this._deferred_build = false;
      }
      return this;
    };
    p.clone = function () {
      return new URI(this);
    };
    p.valueOf = p.toString = function () {
      return this.build(false)._string;
    };
    function generateSimpleAccessor(_part) {
      return function (v, build) {
        if (v === undefined) {
          return this._parts[_part] || '';
        } else {
          this._parts[_part] = v || null;
          this.build(!build);
          return this;
        }
      };
    }
    function generatePrefixAccessor(_part, _key) {
      return function (v, build) {
        if (v === undefined) {
          return this._parts[_part] || '';
        } else {
          if (v !== null) {
            v = v + '';
            if (v.charAt(0) === _key) {
              v = v.substring(1);
            }
          }
          this._parts[_part] = v;
          this.build(!build);
          return this;
        }
      };
    }
    p.protocol = generateSimpleAccessor('protocol');
    p.username = generateSimpleAccessor('username');
    p.password = generateSimpleAccessor('password');
    p.hostname = generateSimpleAccessor('hostname');
    p.port = generateSimpleAccessor('port');
    p.query = generatePrefixAccessor('query', '?');
    p.fragment = generatePrefixAccessor('fragment', '#');
    p.search = function (v, build) {
      var t = this.query(v, build);
      return typeof t === 'string' && t.length ? '?' + t : t;
    };
    p.hash = function (v, build) {
      var t = this.fragment(v, build);
      return typeof t === 'string' && t.length ? '#' + t : t;
    };
    p.pathname = function (v, build) {
      if (v === undefined || v === true) {
        var res = this._parts.path || (this._parts.hostname ? '/' : '');
        return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
      } else {
        if (this._parts.urn) {
          this._parts.path = v ? URI.recodeUrnPath(v) : '';
        } else {
          this._parts.path = v ? URI.recodePath(v) : '/';
        }
        this.build(!build);
        return this;
      }
    };
    p.path = p.pathname;
    p.href = function (href, build) {
      var key;
      if (href === undefined) {
        return this.toString();
      }
      this._string = '';
      this._parts = URI._parts();
      var _URI = href instanceof URI;
      var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
      if (href.nodeName) {
        var attribute = URI.getDomAttribute(href);
        href = href[attribute] || '';
        _object = false;
      }
      // window.location is reported to be an object, but it's not the sort
      // of object we're looking for:
      // * location.protocol ends with a colon
      // * location.query != object.search
      // * location.hash != object.fragment
      // simply serializing the unknown object should do the trick
      // (for location, not for everything...)
      if (!_URI && _object && href.pathname !== undefined) {
        href = href.toString();
      }
      if (typeof href === 'string' || href instanceof String) {
        this._parts = URI.parse(String(href), this._parts);
      } else if (_URI || _object) {
        var src = _URI ? href._parts : href;
        for (key in src) {
          if (hasOwn.call(this._parts, key)) {
            this._parts[key] = src[key];
          }
        }
      } else {
        throw new TypeError('invalid input');
      }
      this.build(!build);
      return this;
    };
    // identification accessors
    p.is = function (what) {
      var ip = false;
      var ip4 = false;
      var ip6 = false;
      var name = false;
      var sld = false;
      var idn = false;
      var punycode = false;
      var relative = !this._parts.urn;
      if (this._parts.hostname) {
        relative = false;
        ip4 = URI.ip4_expression.test(this._parts.hostname);
        ip6 = URI.ip6_expression.test(this._parts.hostname);
        ip = ip4 || ip6;
        name = !ip;
        sld = name && SLD && SLD.has(this._parts.hostname);
        idn = name && URI.idn_expression.test(this._parts.hostname);
        punycode = name && URI.punycode_expression.test(this._parts.hostname);
      }
      switch (what.toLowerCase()) {
      case 'relative':
        return relative;
      case 'absolute':
        return !relative;
      // hostname identification
      case 'domain':
      case 'name':
        return name;
      case 'sld':
        return sld;
      case 'ip':
        return ip;
      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;
      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;
      case 'idn':
        return idn;
      case 'url':
        return !this._parts.urn;
      case 'urn':
        return !!this._parts.urn;
      case 'punycode':
        return punycode;
      }
      return null;
    };
    // component specific input validation
    var _protocol = p.protocol;
    var _port = p.port;
    var _hostname = p.hostname;
    p.protocol = function (v, build) {
      if (v !== undefined) {
        if (v) {
          // accept trailing ://
          v = v.replace(/:(\/\/)?$/, '');
          if (!v.match(URI.protocol_expression)) {
            throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
          }
        }
      }
      return _protocol.call(this, v, build);
    };
    p.scheme = p.protocol;
    p.port = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v !== undefined) {
        if (v === 0) {
          v = null;
        }
        if (v) {
          v += '';
          if (v.charAt(0) === ':') {
            v = v.substring(1);
          }
          if (v.match(/[^0-9]/)) {
            throw new TypeError('Port "' + v + '" contains characters other than [0-9]');
          }
        }
      }
      return _port.call(this, v, build);
    };
    p.hostname = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v !== undefined) {
        var x = {};
        URI.parseHost(v, x);
        v = x.hostname;
      }
      return _hostname.call(this, v, build);
    };
    // compound accessors
    p.host = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined) {
        return this._parts.hostname ? URI.buildHost(this._parts) : '';
      } else {
        URI.parseHost(v, this._parts);
        this.build(!build);
        return this;
      }
    };
    p.authority = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined) {
        return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
      } else {
        URI.parseAuthority(v, this._parts);
        this.build(!build);
        return this;
      }
    };
    p.userinfo = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined) {
        if (!this._parts.username) {
          return '';
        }
        var t = URI.buildUserinfo(this._parts);
        return t.substring(0, t.length - 1);
      } else {
        if (v[v.length - 1] !== '@') {
          v += '@';
        }
        URI.parseUserinfo(v, this._parts);
        this.build(!build);
        return this;
      }
    };
    p.resource = function (v, build) {
      var parts;
      if (v === undefined) {
        return this.path() + this.search() + this.hash();
      }
      parts = URI.parse(v);
      this._parts.path = parts.path;
      this._parts.query = parts.query;
      this._parts.fragment = parts.fragment;
      this.build(!build);
      return this;
    };
    // fraction accessors
    p.subdomain = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      // convenience, return "www" from "www.example.org"
      if (v === undefined) {
        if (!this._parts.hostname || this.is('IP')) {
          return '';
        }
        // grab domain and add another segment
        var end = this._parts.hostname.length - this.domain().length - 1;
        return this._parts.hostname.substring(0, end) || '';
      } else {
        var e = this._parts.hostname.length - this.domain().length;
        var sub = this._parts.hostname.substring(0, e);
        var replace = new RegExp('^' + escapeRegEx(sub));
        if (v && v.charAt(v.length - 1) !== '.') {
          v += '.';
        }
        if (v) {
          URI.ensureValidHostname(v);
        }
        this._parts.hostname = this._parts.hostname.replace(replace, v);
        this.build(!build);
        return this;
      }
    };
    p.domain = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (typeof v === 'boolean') {
        build = v;
        v = undefined;
      }
      // convenience, return "example.org" from "www.example.org"
      if (v === undefined) {
        if (!this._parts.hostname || this.is('IP')) {
          return '';
        }
        // if hostname consists of 1 or 2 segments, it must be the domain
        var t = this._parts.hostname.match(/\./g);
        if (t && t.length < 2) {
          return this._parts.hostname;
        }
        // grab tld and add another segment
        var end = this._parts.hostname.length - this.tld(build).length - 1;
        end = this._parts.hostname.lastIndexOf('.', end - 1) + 1;
        return this._parts.hostname.substring(end) || '';
      } else {
        if (!v) {
          throw new TypeError('cannot set domain empty');
        }
        URI.ensureValidHostname(v);
        if (!this._parts.hostname || this.is('IP')) {
          this._parts.hostname = v;
        } else {
          var replace = new RegExp(escapeRegEx(this.domain()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        }
        this.build(!build);
        return this;
      }
    };
    p.tld = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (typeof v === 'boolean') {
        build = v;
        v = undefined;
      }
      // return "org" from "www.example.org"
      if (v === undefined) {
        if (!this._parts.hostname || this.is('IP')) {
          return '';
        }
        var pos = this._parts.hostname.lastIndexOf('.');
        var tld = this._parts.hostname.substring(pos + 1);
        if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
          return SLD.get(this._parts.hostname) || tld;
        }
        return tld;
      } else {
        var replace;
        if (!v) {
          throw new TypeError('cannot set TLD empty');
        } else if (v.match(/[^a-zA-Z0-9-]/)) {
          if (SLD && SLD.is(v)) {
            replace = new RegExp(escapeRegEx(this.tld()) + '$');
            this._parts.hostname = this._parts.hostname.replace(replace, v);
          } else {
            throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
          }
        } else if (!this._parts.hostname || this.is('IP')) {
          throw new ReferenceError('cannot set TLD on non-domain host');
        } else {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        }
        this.build(!build);
        return this;
      }
    };
    p.directory = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined || v === true) {
        if (!this._parts.path && !this._parts.hostname) {
          return '';
        }
        if (this._parts.path === '/') {
          return '/';
        }
        var end = this._parts.path.length - this.filename().length - 1;
        var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');
        return v ? URI.decodePath(res) : res;
      } else {
        var e = this._parts.path.length - this.filename().length;
        var directory = this._parts.path.substring(0, e);
        var replace = new RegExp('^' + escapeRegEx(directory));
        // fully qualifier directories begin with a slash
        if (!this.is('relative')) {
          if (!v) {
            v = '/';
          }
          if (v.charAt(0) !== '/') {
            v = '/' + v;
          }
        }
        // directories always end with a slash
        if (v && v.charAt(v.length - 1) !== '/') {
          v += '/';
        }
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
        this.build(!build);
        return this;
      }
    };
    p.filename = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined || v === true) {
        if (!this._parts.path || this._parts.path === '/') {
          return '';
        }
        var pos = this._parts.path.lastIndexOf('/');
        var res = this._parts.path.substring(pos + 1);
        return v ? URI.decodePathSegment(res) : res;
      } else {
        var mutatedDirectory = false;
        if (v.charAt(0) === '/') {
          v = v.substring(1);
        }
        if (v.match(/\.?\//)) {
          mutatedDirectory = true;
        }
        var replace = new RegExp(escapeRegEx(this.filename()) + '$');
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
        if (mutatedDirectory) {
          this.normalizePath(build);
        } else {
          this.build(!build);
        }
        return this;
      }
    };
    p.suffix = function (v, build) {
      if (this._parts.urn) {
        return v === undefined ? '' : this;
      }
      if (v === undefined || v === true) {
        if (!this._parts.path || this._parts.path === '/') {
          return '';
        }
        var filename = this.filename();
        var pos = filename.lastIndexOf('.');
        var s, res;
        if (pos === -1) {
          return '';
        }
        // suffix may only contain alnum characters (yup, I made this up.)
        s = filename.substring(pos + 1);
        res = /^[a-z0-9%]+$/i.test(s) ? s : '';
        return v ? URI.decodePathSegment(res) : res;
      } else {
        if (v.charAt(0) === '.') {
          v = v.substring(1);
        }
        var suffix = this.suffix();
        var replace;
        if (!suffix) {
          if (!v) {
            return this;
          }
          this._parts.path += '.' + URI.recodePath(v);
        } else if (!v) {
          replace = new RegExp(escapeRegEx('.' + suffix) + '$');
        } else {
          replace = new RegExp(escapeRegEx(suffix) + '$');
        }
        if (replace) {
          v = URI.recodePath(v);
          this._parts.path = this._parts.path.replace(replace, v);
        }
        this.build(!build);
        return this;
      }
    };
    p.segment = function (segment, v, build) {
      var separator = this._parts.urn ? ':' : '/';
      var path = this.path();
      var absolute = path.substring(0, 1) === '/';
      var segments = path.split(separator);
      if (segment !== undefined && typeof segment !== 'number') {
        build = v;
        v = segment;
        segment = undefined;
      }
      if (segment !== undefined && typeof segment !== 'number') {
        throw new Error('Bad segment "' + segment + '", must be 0-based integer');
      }
      if (absolute) {
        segments.shift();
      }
      if (segment < 0) {
        // allow negative indexes to address from the end
        segment = Math.max(segments.length + segment, 0);
      }
      if (v === undefined) {
        /*jshint laxbreak: true */
        return segment === undefined ? segments : segments[segment];  /*jshint laxbreak: false */
      } else if (segment === null || segments[segment] === undefined) {
        if (isArray(v)) {
          segments = [];
          // collapse empty elements within array
          for (var i = 0, l = v.length; i < l; i++) {
            if (!v[i].length && (!segments.length || !segments[segments.length - 1].length)) {
              continue;
            }
            if (segments.length && !segments[segments.length - 1].length) {
              segments.pop();
            }
            segments.push(v[i]);
          }
        } else if (v || typeof v === 'string') {
          if (segments[segments.length - 1] === '') {
            // empty trailing elements have to be overwritten
            // to prevent results such as /foo//bar
            segments[segments.length - 1] = v;
          } else {
            segments.push(v);
          }
        }
      } else {
        if (v) {
          segments[segment] = v;
        } else {
          segments.splice(segment, 1);
        }
      }
      if (absolute) {
        segments.unshift('');
      }
      return this.path(segments.join(separator), build);
    };
    p.segmentCoded = function (segment, v, build) {
      var segments, i, l;
      if (typeof segment !== 'number') {
        build = v;
        v = segment;
        segment = undefined;
      }
      if (v === undefined) {
        segments = this.segment(segment, v, build);
        if (!isArray(segments)) {
          segments = segments !== undefined ? URI.decode(segments) : undefined;
        } else {
          for (i = 0, l = segments.length; i < l; i++) {
            segments[i] = URI.decode(segments[i]);
          }
        }
        return segments;
      }
      if (!isArray(v)) {
        v = typeof v === 'string' || v instanceof String ? URI.encode(v) : v;
      } else {
        for (i = 0, l = v.length; i < l; i++) {
          v[i] = URI.decode(v[i]);
        }
      }
      return this.segment(segment, v, build);
    };
    // mutating query string
    var q = p.query;
    p.query = function (v, build) {
      if (v === true) {
        return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      } else if (typeof v === 'function') {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        var result = v.call(this, data);
        this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        this.build(!build);
        return this;
      } else if (v !== undefined && typeof v !== 'string') {
        this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        this.build(!build);
        return this;
      } else {
        return q.call(this, v, build);
      }
    };
    p.setQuery = function (name, value, build) {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      if (typeof name === 'string' || name instanceof String) {
        data[name] = value !== undefined ? value : null;
      } else if (typeof name === 'object') {
        for (var key in name) {
          if (hasOwn.call(name, key)) {
            data[key] = name[key];
          }
        }
      } else {
        throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
      }
      this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      if (typeof name !== 'string') {
        build = value;
      }
      this.build(!build);
      return this;
    };
    p.addQuery = function (name, value, build) {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      URI.addQuery(data, name, value === undefined ? null : value);
      this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      if (typeof name !== 'string') {
        build = value;
      }
      this.build(!build);
      return this;
    };
    p.removeQuery = function (name, value, build) {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      URI.removeQuery(data, name, value);
      this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      if (typeof name !== 'string') {
        build = value;
      }
      this.build(!build);
      return this;
    };
    p.hasQuery = function (name, value, withinArray) {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      return URI.hasQuery(data, name, value, withinArray);
    };
    p.setSearch = p.setQuery;
    p.addSearch = p.addQuery;
    p.removeSearch = p.removeQuery;
    p.hasSearch = p.hasQuery;
    // sanitizing URLs
    p.normalize = function () {
      if (this._parts.urn) {
        return this.normalizeProtocol(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
      }
      return this.normalizeProtocol(false).normalizeHostname(false).normalizePort(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
    };
    p.normalizeProtocol = function (build) {
      if (typeof this._parts.protocol === 'string') {
        this._parts.protocol = this._parts.protocol.toLowerCase();
        this.build(!build);
      }
      return this;
    };
    p.normalizeHostname = function (build) {
      if (this._parts.hostname) {
        if (this.is('IDN') && punycode) {
          this._parts.hostname = punycode.toASCII(this._parts.hostname);
        } else if (this.is('IPv6') && IPv6) {
          this._parts.hostname = IPv6.best(this._parts.hostname);
        }
        this._parts.hostname = this._parts.hostname.toLowerCase();
        this.build(!build);
      }
      return this;
    };
    p.normalizePort = function (build) {
      // remove port of it's the protocol's default
      if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
        this._parts.port = null;
        this.build(!build);
      }
      return this;
    };
    p.normalizePath = function (build) {
      var _path = this._parts.path;
      if (!_path) {
        return this;
      }
      if (this._parts.urn) {
        this._parts.path = URI.recodeUrnPath(this._parts.path);
        this.build(!build);
        return this;
      }
      if (this._parts.path === '/') {
        return this;
      }
      var _was_relative;
      var _leadingParents = '';
      var _parent, _pos;
      // handle relative paths
      if (_path.charAt(0) !== '/') {
        _was_relative = true;
        _path = '/' + _path;
      }
      // resolve simples
      _path = _path.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/');
      // remember leading parents
      if (_was_relative) {
        _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
        if (_leadingParents) {
          _leadingParents = _leadingParents[0];
        }
      }
      // resolve parents
      while (true) {
        _parent = _path.indexOf('/..');
        if (_parent === -1) {
          // no more ../ to resolve
          break;
        } else if (_parent === 0) {
          // top level cannot be relative, skip it
          _path = _path.substring(3);
          continue;
        }
        _pos = _path.substring(0, _parent).lastIndexOf('/');
        if (_pos === -1) {
          _pos = _parent;
        }
        _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
      }
      // revert to relative
      if (_was_relative && this.is('relative')) {
        _path = _leadingParents + _path.substring(1);
      }
      _path = URI.recodePath(_path);
      this._parts.path = _path;
      this.build(!build);
      return this;
    };
    p.normalizePathname = p.normalizePath;
    p.normalizeQuery = function (build) {
      if (typeof this._parts.query === 'string') {
        if (!this._parts.query.length) {
          this._parts.query = null;
        } else {
          this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
        }
        this.build(!build);
      }
      return this;
    };
    p.normalizeFragment = function (build) {
      if (!this._parts.fragment) {
        this._parts.fragment = null;
        this.build(!build);
      }
      return this;
    };
    p.normalizeSearch = p.normalizeQuery;
    p.normalizeHash = p.normalizeFragment;
    p.iso8859 = function () {
      // expect unicode input, iso8859 output
      var e = URI.encode;
      var d = URI.decode;
      URI.encode = escape;
      URI.decode = decodeURIComponent;
      try {
        this.normalize();
      } finally {
        URI.encode = e;
        URI.decode = d;
      }
      return this;
    };
    p.unicode = function () {
      // expect iso8859 input, unicode output
      var e = URI.encode;
      var d = URI.decode;
      URI.encode = strictEncodeURIComponent;
      URI.decode = unescape;
      try {
        this.normalize();
      } finally {
        URI.encode = e;
        URI.decode = d;
      }
      return this;
    };
    p.readable = function () {
      var uri = this.clone();
      // removing username, password, because they shouldn't be displayed according to RFC 3986
      uri.username('').password('').normalize();
      var t = '';
      if (uri._parts.protocol) {
        t += uri._parts.protocol + '://';
      }
      if (uri._parts.hostname) {
        if (uri.is('punycode') && punycode) {
          t += punycode.toUnicode(uri._parts.hostname);
          if (uri._parts.port) {
            t += ':' + uri._parts.port;
          }
        } else {
          t += uri.host();
        }
      }
      if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
        t += '/';
      }
      t += uri.path(true);
      if (uri._parts.query) {
        var q = '';
        for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
          var kv = (qp[i] || '').split('=');
          q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace).replace(/&/g, '%26');
          if (kv[1] !== undefined) {
            q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace).replace(/&/g, '%26');
          }
        }
        t += '?' + q.substring(1);
      }
      t += URI.decodeQuery(uri.hash(), true);
      return t;
    };
    // resolving relative and absolute URLs
    p.absoluteTo = function (base) {
      var resolved = this.clone();
      var properties = [
          'protocol',
          'username',
          'password',
          'hostname',
          'port'
        ];
      var basedir, i, p;
      if (this._parts.urn) {
        throw new Error('URNs do not have any generally defined hierarchical components');
      }
      if (!(base instanceof URI)) {
        base = new URI(base);
      }
      if (!resolved._parts.protocol) {
        resolved._parts.protocol = base._parts.protocol;
      }
      if (this._parts.hostname) {
        return resolved;
      }
      for (i = 0; p = properties[i]; i++) {
        resolved._parts[p] = base._parts[p];
      }
      if (!resolved._parts.path) {
        resolved._parts.path = base._parts.path;
        if (!resolved._parts.query) {
          resolved._parts.query = base._parts.query;
        }
      } else if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }
      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? basedir + '/' : '') + resolved._parts.path;
        resolved.normalizePath();
      }
      resolved.build();
      return resolved;
    };
    p.relativeTo = function (base) {
      var relative = this.clone().normalize();
      var relativeParts, baseParts, common, relativePath, basePath;
      if (relative._parts.urn) {
        throw new Error('URNs do not have any generally defined hierarchical components');
      }
      base = new URI(base).normalize();
      relativeParts = relative._parts;
      baseParts = base._parts;
      relativePath = relative.path();
      basePath = base.path();
      if (relativePath.charAt(0) !== '/') {
        throw new Error('URI is already relative');
      }
      if (basePath.charAt(0) !== '/') {
        throw new Error('Cannot calculate a URI relative to another relative URI');
      }
      if (relativeParts.protocol === baseParts.protocol) {
        relativeParts.protocol = null;
      }
      if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
        return relative.build();
      }
      if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
        return relative.build();
      }
      if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
        relativeParts.hostname = null;
        relativeParts.port = null;
      } else {
        return relative.build();
      }
      if (relativePath === basePath) {
        relativeParts.path = '';
        return relative.build();
      }
      // determine common sub path
      common = URI.commonPath(relative.path(), base.path());
      // If the paths have nothing in common, return a relative URL with the absolute path.
      if (!common) {
        return relative.build();
      }
      var parents = baseParts.path.substring(common.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');
      relativeParts.path = parents + relativeParts.path.substring(common.length);
      return relative.build();
    };
    // comparing URIs
    p.equals = function (uri) {
      var one = this.clone();
      var two = new URI(uri);
      var one_map = {};
      var two_map = {};
      var checked = {};
      var one_query, two_query, key;
      one.normalize();
      two.normalize();
      // exact match
      if (one.toString() === two.toString()) {
        return true;
      }
      // extract query string
      one_query = one.query();
      two_query = two.query();
      one.query('');
      two.query('');
      // definitely not equal if not even non-query parts match
      if (one.toString() !== two.toString()) {
        return false;
      }
      // query parameters have the same length, even if they're permuted
      if (one_query.length !== two_query.length) {
        return false;
      }
      one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
      two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);
      for (key in one_map) {
        if (hasOwn.call(one_map, key)) {
          if (!isArray(one_map[key])) {
            if (one_map[key] !== two_map[key]) {
              return false;
            }
          } else if (!arraysEqual(one_map[key], two_map[key])) {
            return false;
          }
          checked[key] = true;
        }
      }
      for (key in two_map) {
        if (hasOwn.call(two_map, key)) {
          if (!checked[key]) {
            // two contains a parameter not present in one
            return false;
          }
        }
      }
      return true;
    };
    // state
    p.duplicateQueryParameters = function (v) {
      this._parts.duplicateQueryParameters = !!v;
      return this;
    };
    p.escapeQuerySpace = function (v) {
      this._parts.escapeQuerySpace = !!v;
      return this;
    };
    return URI;
  }
  ngUri.$inject = ['SLD'];
}());