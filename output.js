//Wed Jul 31 2024 05:56:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5f1048 = _0x1c8bd0("滴滴打车"),
  _0x591f92 = require("fs"),
  _0x49f7c9 = require("got"),
  _0x3a650f = require("crypto-js"),
  _0x23e760 = require("ws"),
  _0x431658 = "didi",
  _0x362833 = _0x431658 + "Cookie.txt",
  _0x3a502a = 20000,
  _0x434485 = 3;
const _0x2a39b7 = 1.02,
  _0x335699 = "didi",
  _0x3bdac3 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x94ffec = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x335699 + ".json",
  _0x26852a = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2d) NetType/WIFI Language/zh_CN",
  _0x2a157a = "https://servicewechat.com/wxaf35009675aa0b2a/783/page-frame.html",
  _0x494e86 = 2000,
  _0x2ae988 = 5,
  _0x238648 = 5000,
  _0x56f109 = 2500;
const _0x31437a = {
  dchn: "kkXgpzO",
  prod_key: "ut-limited-seckill"
};
const _0x319f92 = {
  dchn: "gL3E8qZ",
  prod_key: "ut-support-coupon"
};
const _0x574b44 = [_0x31437a, _0x319f92],
  _0x340b7d = "wss://game-proxy.xiaojukeji.com/proxy/game/go";
const _0x60c836 = {
    "0": "金币",
    "1": "体力",
    "2": "立减金额经验",
    "3": "有效日期经验",
    "4": "使用门槛经验"
  },
  _0x576e0e = ["ut_look_through_weibo"],
  _0x485014 = 4000,
  _0x44c9d4 = {
    enable: true,
    name: "社群券",
    dchn: "jG16pgJ",
    dsi: "38b1ce87f5295a51c32cfcd88cb511725379lq74"
  };
const _0x3f4d01 = {
  enable: true,
  name: "社群神券1",
  dchn: "Qm0wKR1",
  dsi: "e674ac10376e717aeac76c7510243b76410u18sh"
};
const _0x2588ca = {
  enable: true,
  name: "社群神券2",
  dchn: "X36nDxm",
  dsi: "e07e39cc47bc70f0c80cd99493be07d9897achcy"
};
const _0x45013c = {
  enable: true,
  name: "晚高峰券",
  dchn: "dprrb96",
  dsi: "9b9d7c3eb8ac28f069380374c21ef0f8537flwyh"
};
const _0x4c1de7 = {
  enable: true,
  name: "早高峰券",
  dchn: "09KLeDY",
  dsi: "149daa3d5d63987865bdbbc19bd55ad3537vtrpq"
};
const _0x283242 = {
  enable: true,
  name: "代驾洗车券",
  dchn: "DZdQqlE",
  dsi: "80dda490be5cfc6506bf4cbf7b01aa36410odlfg"
};
const _0x3e6240 = {
  enable: true,
  name: "代驾券",
  dchn: "aqj1Xk5",
  dsi: "622554f9d87e57040413526a116ac629410nk8lu"
};
const _0x5db264 = {
  enable: false,
  name: "城市限定券",
  dchn: "o2vw2nM",
  dsi: "a4ce24f7e82060f61cb3ea252e2a35e8919kd2r2"
};
const _0x5d526f = [_0x44c9d4, _0x3f4d01, _0x2588ca, _0x45013c, _0x4c1de7, _0x283242, _0x3e6240, _0x5db264],
  _0x17faa6 = {
    enable: true,
    xbiz: "240401",
    dchn: "X3kl9n2",
    activity_id: 216416785552,
    game_id: 7332,
    xak: "imk-lottery-J64Dby9UlTeO"
  };
const _0x4b0b7c = {
  enable: true,
  xbiz: "240101",
  dchn: "vWMzgr0",
  activity_id: 212887864500,
  game_id: 5882,
  xak: "imk-lottery-8i2oFlUdLjUN"
};
const _0xf705a5 = [_0x17faa6, _0x4b0b7c],
  _0x2dc14f = "R4doMFFeMNlliIWM",
  _0xcf1ee9 = "ABCDEFG0123456789abcdefgHIJKLMN+/hijklmnOPQRSTopqrstUVWXYZuvwxyz";
let _0x192ee3 = "6612528ad60e22079f35d61d901bef73342kcgfg";
class _0x6f11ca {
  constructor() {
    this.index = _0x5f1048.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x59bea1 = {
      limit: 0
    };
    const _0x497da0 = {
      Connection: "keep-alive"
    };
    const _0x1cc906 = {
      retry: _0x59bea1,
      timeout: _0x3a502a,
      followRedirect: false,
      headers: _0x497da0
    };
    this.got = _0x49f7c9.extend(_0x1cc906);
  }
  get_prefix(_0x2c90ca = {}) {
    var _0x4f3743 = "",
      _0x23cd69 = _0x5f1048.userCount.toString().length;
    if (this.index) {
      _0x4f3743 += "账号[" + _0x5f1048.padStr(this.index, _0x23cd69) + "]";
    }
    if (this.name) {
      _0x4f3743 += "[" + this.name + "]";
    }
    return _0x4f3743;
  }
  log(_0x522a96, _0x1d4bef = {}) {
    let _0x3df152 = this.get_prefix();
    _0x5f1048.log(_0x3df152 + _0x522a96, _0x1d4bef);
  }
  async request(_0x2949f3) {
    const _0x4c4dc9 = ["RequestError"],
      _0x1bdcf1 = ["TimeoutError"];
    let _0x51ee5b = _0x5f1048.copy(_0x2949f3),
      _0x15eb92 = {};
    try {
      let _0x4cc905 = null,
        _0x58fe1a = 0,
        _0x10bfc4 = _0x51ee5b.fn || _0x51ee5b.url,
        _0x23bac1 = _0x51ee5b.valid_code || [200];
      if (_0x51ee5b.form) {
        for (let _0x2430d0 in _0x51ee5b.form) {
          typeof _0x51ee5b.form[_0x2430d0] == "object" && (_0x51ee5b.form[_0x2430d0] = JSON.stringify(_0x51ee5b.form[_0x2430d0]));
        }
      }
      _0x51ee5b.method = _0x51ee5b?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x51ee5b.searchParams) {
        for (let _0x40a72d in _0x51ee5b.searchParams) {
          typeof _0x51ee5b.searchParams[_0x40a72d] == "object" && (_0x51ee5b.searchParams[_0x40a72d] = JSON.stringify(_0x51ee5b.searchParams[_0x40a72d]));
        }
      }
      let _0xea11b0 = _0x51ee5b.got_client || this.got;
      _0x51ee5b.debug_in && console.log(_0x51ee5b);
      while (_0x58fe1a < _0x434485) {
        if (_0x58fe1a > 0) {
          await _0x5f1048.wait(_0x494e86 * _0x58fe1a);
          let _0x43d4b8 = _0x5f1048.get(_0x51ee5b, "retryer", null);
          if (_0x43d4b8) {
            let _0x1766dc = _0x5f1048.get(_0x51ee5b, "retryer_opt", {});
            await _0x43d4b8(_0x51ee5b, _0x1766dc);
          }
        }
        _0x58fe1a++;
        let _0x7138ec = null;
        try {
          let _0x412917 = Number(_0x51ee5b?.["timeout"]?.["request"] || _0x51ee5b?.["timeout"] || _0x3a502a),
            _0x4bc3d2 = false,
            _0x10531f = Date.now(),
            _0x16b9df = _0xea11b0(_0x51ee5b),
            _0x4aaa59 = setTimeout(() => {
              _0x4bc3d2 = true;
              _0x16b9df.cancel();
            }, _0x412917);
          await _0x16b9df.then(_0x245e2b => {
            _0x4cc905 = _0x245e2b;
          }, _0x3fa02f => {
            _0x7138ec = _0x3fa02f;
            _0x4cc905 = _0x3fa02f.response;
          }).finally(() => clearTimeout(_0x4aaa59));
          let _0x46df55 = Date.now(),
            _0x162497 = _0x46df55 - _0x10531f,
            _0x3eaf8a = _0x4cc905?.["statusCode"] || null;
          if (_0x4bc3d2 || _0x1bdcf1.includes(_0x7138ec?.["name"])) {
            let _0x37ca7e = "";
            _0x7138ec?.["code"] && (_0x37ca7e += "(" + _0x7138ec.code, _0x7138ec?.["event"] && (_0x37ca7e += ":" + _0x7138ec.event), _0x37ca7e += ")");
            this.log("[" + _0x10bfc4 + "]请求超时" + _0x37ca7e + "(" + _0x162497 + "ms)，重试第" + _0x58fe1a + "次");
          } else {
            if (_0x4c4dc9.includes(_0x7138ec?.["name"])) {
              this.log("[" + _0x10bfc4 + "]请求错误(" + _0x7138ec.code + ")(" + _0x162497 + "ms)，重试第" + _0x58fe1a + "次");
            } else {
              if (_0x3eaf8a) {
                _0x7138ec && !_0x23bac1.includes(_0x3eaf8a) && this.log("请求[" + _0x10bfc4 + "]返回[" + _0x3eaf8a + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x7138ec || {};
                this.log("请求[" + _0x10bfc4 + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x8d7570) {
          this.log("[" + _0x10bfc4 + "]请求错误(" + _0x8d7570.message + ")，重试第" + _0x58fe1a + "次");
        }
      }
      if (_0x4cc905 === null || _0x4cc905 === undefined) {
        const _0x4f8ebd = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x4f8ebd;
      }
      let {
          statusCode: _0x507905,
          headers: _0x513649,
          body: _0x109240
        } = _0x4cc905,
        _0x1a89ac = _0x5f1048.get(_0x51ee5b, "decode_json", true);
      if (_0x109240 && _0x1a89ac) {
        try {
          _0x109240 = JSON.parse(_0x109240);
        } catch {}
      }
      const _0x1ff708 = {
        statusCode: _0x507905,
        headers: _0x513649,
        result: _0x109240
      };
      _0x15eb92 = _0x1ff708;
      _0x51ee5b.debug_out && console.log(_0x15eb92);
    } catch (_0x132396) {
      console.log(_0x132396);
    } finally {
      return _0x15eb92;
    }
  }
}
let _0x50ffdf = new _0x6f11ca();
class _0xd8eb75 extends _0x6f11ca {
  constructor(_0x5ad43f) {
    super();
    let _0x2b301d = _0x5ad43f.split("#");
    _0x2b301d?.[1] ? (this.remark = _0x2b301d[0] || "", this.name = this.remark || "", this.ticket = _0x2b301d[1]) : (this.remark = "", this.name = "", this.ticket = _0x2b301d[0]);
    this.lat = "22.5" + _0x5f1048.randomString(13, "0123456789");
    this.lng = "114.0" + _0x5f1048.randomString(13, "0123456789");
    this.t_req = 0;
    this.t_game_draw = 0;
    this.game_gid = 0;
    this.game_coupon = null;
    this.game_coin = 0;
    this.game_timer = {};
    this.wait_flag = {};
    this.game_can_exchange_coupon = true;
    const _0x39a992 = {
      "User-Agent": _0x26852a,
      Referer: _0x2a157a
    };
    const _0x41a77e = {
      headers: _0x39a992
    };
    this.got = this.got.extend(_0x41a77e);
  }
  coupon_log(_0x1e9b33, _0x38b6f8 = "", _0x54ab40 = {}) {
    _0x54ab40.notify = _0x5f1048.get(_0x54ab40, "notify", true);
    let _0xd58317 = _0x38b6f8 || "领券";
    this.log(_0xd58317 + ": " + _0x1e9b33, _0x54ab40);
  }
  get_common_body(_0x4c5ec9 = {}) {
    return {
      lang: "zh-CN",
      token: this.token,
      access_key_id: 9,
      appversion: "6.7.40",
      channel: 1100000013,
      _ds: "",
      xoid: "",
      xpsid: _0x5f1048.randomString(),
      xpsid_root: _0x5f1048.randomString(),
      city_id: 2,
      lat: this.lat,
      lng: this.lng,
      platform: "mp",
      env: {
        isHitButton: true,
        newAppid: 35009,
        userAgent: "",
        openId: "",
        model: "iPhone 14 Pro Max<iPhone15,3>",
        wifi: 1
      },
      f_xpsid: _0x5f1048.randomString(),
      root_xpsid: _0x5f1048.randomString()
    };
  }
  get_env(_0x5a1b71 = {}) {
    const _0x1eb6aa = {
      token: this.token
    };
    return JSON.stringify(_0x1eb6aa);
  }
  gen_wsgsig(_0x539b07, _0x54965a = "json", _0x2817de = {}) {
    let _0x1fe6d4 = "";
    if (_0x54965a == "json") {
      _0x1fe6d4 = JSON.stringify(_0x539b07);
    } else {
      let _0x168657 = [];
      for (let _0x5d6c7b in _0x539b07) {
        let _0x2bf37d = _0x539b07[_0x5d6c7b];
        typeof _0x2bf37d == "object" ? _0x168657.push("" + _0x5d6c7b + JSON.stringify(_0x2bf37d)) : _0x168657.push("" + _0x5d6c7b + _0x2bf37d);
      }
      _0x1fe6d4 = _0x168657.sort().reverse().join("");
    }
    const _0x262127 = {
      k: "v",
      v: "1"
    };
    const _0x3758d8 = {
      k: "os",
      v: "web"
    };
    const _0x1b6373 = {
      k: "av",
      v: "02"
    };
    const _0x21a606 = {
      k: "kv",
      v: "0000010001"
    };
    let _0x492c1a = [{
        k: "ts",
        v: Math.floor(Date.now() / 1000)
      }, _0x262127, _0x3758d8, _0x1b6373, _0x21a606, {
        k: "vl",
        v: Buffer.from(_0x1fe6d4).length
      }, {
        k: "sig",
        v: _0x3a650f.MD5(_0x2dc14f + _0x1fe6d4).toString()
      }],
      _0x13da76 = _0x492c1a.map(_0x14a7ae => _0x14a7ae.k + "=" + _0x14a7ae.v).join("&"),
      _0x129455 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)],
      _0x430a5d = [].concat(_0x129455);
    for (let _0x3635fc = 0; _0x3635fc < _0x13da76.length; _0x3635fc++) {
      _0x430a5d.push(_0x13da76.charCodeAt(_0x3635fc) ^ _0x129455[_0x3635fc % 4]);
    }
    let _0x2eecd3 = 3 - _0x430a5d.length % 3,
      _0x337086 = _0x2eecd3;
    while (_0x337086-- > 0) {
      _0x430a5d.push(0);
    }
    let _0x2fabea = "";
    for (let _0x24faf4 = 0; _0x24faf4 < _0x430a5d.length; _0x24faf4 += 3) {
      let _0x5bf638 = _0x430a5d[_0x24faf4] << 16 | _0x430a5d[_0x24faf4 + 1] << 8 | _0x430a5d[_0x24faf4 + 2];
      _0x2fabea += _0xcf1ee9.charAt(_0x5bf638 >> 18 & 63) + _0xcf1ee9.charAt(_0x5bf638 >> 12 & 63) + _0xcf1ee9.charAt(_0x5bf638 >> 6 & 63) + _0xcf1ee9.charAt(_0x5bf638 & 63);
    }
    _0x2eecd3 && (_0x2fabea = _0x2fabea.slice(0, -_0x2eecd3));
    return "dd03-" + _0x2fabea;
  }
  async signInByOpenid(_0x1de0fb = {}) {
    let _0x12ca25 = false;
    try {
      const _0x3fab4b = {
        channel: 1100000003
      };
      const _0x1eef2e = {
        api_version: "1.0.1",
        appid: 35009,
        role: 1,
        extra_info: _0x3fab4b,
        device_name: "iPhone 14 Pro Max<iPhone15,3>",
        sec_session_id: "",
        ddfp: "",
        lang: "zh-CN",
        wsgenv: "",
        model: "iPhone iPhone 14 Pro Max<iPhone15,3>",
        unionid_through_login: false,
        oauthcode: "",
        ticket: this.ticket,
        with_temp_ticket: true
      };
      let _0x62c231 = {
          q: JSON.stringify(_0x1eef2e)
        },
        _0x39f66d = {
          fn: "signInByOpenid",
          method: "post",
          url: "https://epassport.diditaxi.com.cn/passport/login/v5/signInByOpenid",
          searchParams: {
            wsgsig: this.gen_wsgsig(_0x62c231, "form")
          },
          form: _0x62c231
        },
        {
          result: _0x51f536,
          statusCode: _0xd37ed
        } = await this.request(_0x5f1048.copy(_0x39f66d)),
        _0x59c3df = _0x5f1048.get(_0x51f536, "errno", _0xd37ed);
      if (_0x59c3df == 0) {
        let {
          cell: _0x5b7ff8,
          ticket: _0x464baa,
          temp_ticket: _0x168600,
          uid: _0x221025
        } = _0x51f536;
        this.uid = _0x221025;
        this.ticket = _0x464baa;
        this.token = _0x168600;
        this.mobile = _0x5b7ff8;
        this.name = this.name || _0x5b7ff8;
        this.got = this.got.extend({
          headers: {
            "Didi-Ticket": this.token
          }
        });
        this.log("登录成功: uid=" + _0x221025);
        _0x21136a();
        _0x12ca25 = true;
      } else {
        let _0x26ac7b = _0x5f1048.get(_0x51f536, "error", "");
        const _0x2db307 = {
          notify: true
        };
        this.log("登录失败(先检查格式有没有填错)[" + _0x59c3df + "]: " + _0x26ac7b, _0x2db307);
      }
    } catch (_0x321de6) {
      console.log(_0x321de6);
    } finally {
      return _0x12ca25;
    }
  }
  async sign_index(_0xcf0597 = {}) {
    try {
      let _0x1ba5b9 = {
        fn: "sign_index",
        method: "post",
        url: "https://ut.xiaojukeji.com/ut/janitor/api/home/sign/index",
        json: this.get_common_body()
      };
      {
        let {
            result: _0x25a3e2,
            statusCode: _0x5d5e1f
          } = await this.request(_0x5f1048.copy(_0x1ba5b9)),
          _0x157639 = _0x5f1048.get(_0x25a3e2, "errno", _0x5d5e1f);
        if (_0x157639 == 0) {
          let {
            visited: _0xab7e4a,
            total_progress: _0xf2b09,
            current_progress: _0x24d4ee,
            finished_times: _0x360905
          } = _0x25a3e2?.["data"];
          _0x360905 >= _0x24d4ee ? this.log("今天已签到: " + _0x360905 + "/" + _0xf2b09) : await this.sign_do();
        } else {
          let _0x26214c = _0x5f1048.get(_0x25a3e2, "errmsg", "");
          this.log("查询签到信息失败[" + _0x157639 + "]: " + _0x26214c);
        }
      }
      {
        let {
            result: _0x23faa7,
            statusCode: _0x1bda54
          } = await this.request(_0x5f1048.copy(_0x1ba5b9)),
          _0x3a7210 = _0x5f1048.get(_0x23faa7, "errno", _0x1bda54);
        if (_0x3a7210 == 0) {
          let {
            lottery_chance: _0x3378c0,
            activity_id: _0x30fefb
          } = _0x23faa7?.["data"];
          this.log("可以抽奖" + _0x3378c0 + "次");
          while (_0x3378c0-- > 0) {
            await this.doLottery(_0x30fefb);
          }
        } else {
          let _0x17eff8 = _0x5f1048.get(_0x23faa7, "errmsg", "");
          this.log("查询抽奖次数失败[" + _0x3a7210 + "]: " + _0x17eff8);
        }
      }
    } catch (_0x58a479) {
      console.log(_0x58a479);
    }
  }
  async sign_do(_0x3d9fb7 = {}) {
    try {
      let _0x57d13c = {
          fn: "sign_do",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/sign/do",
          json: this.get_common_body()
        },
        {
          result: _0x367ef4,
          statusCode: _0x3575d8
        } = await this.request(_0x5f1048.copy(_0x57d13c)),
        _0x5113be = _0x5f1048.get(_0x367ef4, "errno", _0x3575d8);
      if (_0x5113be == 0) {
        let {
          total_progress: _0x482a24,
          current_progress: _0x686fde,
          finished_times: _0x3ef7f3
        } = _0x367ef4?.["data"];
        this.log("签到成功: " + _0x3ef7f3 + "/" + _0x482a24);
      } else {
        let _0x31149c = _0x5f1048.get(_0x367ef4, "errmsg", "");
        this.log("签到失败[" + _0x5113be + "]: " + _0x31149c);
      }
    } catch (_0x3e138d) {
      console.log(_0x3e138d);
    }
  }
  async doLottery(_0x517c6e, _0x150e96 = {}) {
    try {
      let _0x4dd5f8 = {
        fn: "doLottery",
        method: "post",
        url: "https://ut.xiaojukeji.com/ut/janitor/api/action/lottery/doLottery",
        json: {
          ...this.get_common_body(),
          act_id: _0x517c6e
        }
      };
      await _0x5f1048.wait_gap_interval(this.t_req, _0x238648);
      let {
        result: _0x1c36eb,
        statusCode: _0x4265e8
      } = await this.request(_0x5f1048.copy(_0x4dd5f8));
      this.t_req = Date.now();
      let _0x3d6f96 = _0x5f1048.get(_0x1c36eb, "errno", _0x4265e8);
      if (_0x3d6f96 == 0) {
        let _0x5bbe39 = [],
          {
            win_lottery: _0x4287e4,
            prize_data: _0x36d3ea
          } = _0x1c36eb?.["data"];
        if (_0x4287e4) {
          for (let _0xc9fdd7 of _0x36d3ea || []) {
            let {
              name: _0x44edd1,
              threshold_desc: _0x3e4bbd,
              coupon_amount: _0x140ea4
            } = _0xc9fdd7;
            _0x5bbe39.push("[" + _0x44edd1 + "]" + _0x3e4bbd + "减" + _0x140ea4);
          }
        }
        this.log("抽奖: " + (_0x5bbe39.join(", ") || "空气"));
      } else {
        let _0x534454 = _0x5f1048.get(_0x1c36eb, "errmsg", "");
        this.log("抽奖失败[" + _0x3d6f96 + "]: " + _0x534454);
      }
    } catch (_0x367e6d) {
      console.log(_0x367e6d);
    }
  }
  async product_init(_0x1cc118, _0x1fcfa5 = {}) {
    try {
      let _0x29e204 = {
        fn: "product_init",
        method: "post",
        url: "https://api.didi.cn/webx/chapter/product/init",
        json: {
          ...this.get_common_body(),
          uid: this.uid,
          dchn: _0x1cc118,
          args: {
            key: this.uid,
            invoke_key: "default",
            runtime_args: {
              dsi: _0x192ee3,
              env: {
                dchn: _0x1cc118,
                model: "iPhone 14 Pro Max<iPhone15,3>",
                openId: "",
                sceneId: 1001,
                latitude: Number(this.lat),
                newAppid: "35009",
                isOpenWeb: false,
                longitude: Number(this.lng),
                openIdType: 1,
                fromChannel: "2",
                isHitButton: false
              },
              lat: this.lat,
              lng: this.lng,
              ncc: true,
              scene: 1037,
              token: this.token,
              x_test_user: {
                key: this.uid
              }
            }
          },
          xbiz: "110105",
          xenv: "wxmp",
          xoid: "",
          openId: "",
          prod_key: "wyc-cpc-v-three",
          xspm_from: "none.none.none.none",
          xpsid_from: "",
          is_prefetch: true,
          xpsid_share: "",
          need_page_config: true,
          need_share_config: true
        }
      };
      await this.request(_0x5f1048.copy(_0x29e204));
    } catch (_0x35e683) {
      console.log(_0x35e683);
    }
  }
  async getBubble(_0x48377d = {}) {
    try {
      let _0x4d3978 = {
          fn: "getBubble",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/getBubble",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x176750,
          statusCode: _0x4ec60d
        } = await this.request(_0x5f1048.copy(_0x4d3978)),
        _0x5c2058 = _0x5f1048.get(_0x176750, "errno", _0x4ec60d);
      if (_0x5c2058 == 0) {
        let {
          bubble_list: _0x4dfa6b
        } = _0x176750?.["data"];
        for (let _0x7c76f3 of (_0x4dfa6b || []).filter(_0x2f8c28 => _0x2f8c28.cycle_id)) {
          await this.clickBubble(_0x7c76f3);
        }
      } else {
        let _0x46543d = _0x5f1048.get(_0x176750, "errmsg", "");
        this.log("查询福利金可领取气泡失败[" + _0x5c2058 + "]: " + _0x46543d);
      }
    } catch (_0xa9078a) {
      console.log(_0xa9078a);
    }
  }
  async clickBubble(_0x5f5884, _0xafd528 = {}) {
    try {
      let _0x598b33 = {
          fn: "clickBubble",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/clickBubble",
          json: {
            ...this.get_common_body(),
            cycle_id: _0x5f5884.cycle_id,
            bubble_type: _0x5f5884.bubble_type,
            env: this.get_env()
          }
        },
        {
          result: _0x86ea1,
          statusCode: _0x1d1304
        } = await this.request(_0x5f1048.copy(_0x598b33)),
        _0x543266 = _0x5f1048.get(_0x86ea1, "errno", _0x1d1304);
      if (_0x543266 == 0) {
        this.log("领取气泡[" + _0x5f5884.pre_content + "]奖励成功: " + _0x5f5884.reward_count + "福利金");
      } else {
        let _0x3394e1 = _0x5f1048.get(_0x86ea1, "errmsg", "");
        this.log("领取福利金气泡奖励失败[" + _0x543266 + "]: " + _0x3394e1);
      }
    } catch (_0x587de4) {
      console.log(_0x587de4);
    }
  }
  async divideData(_0x2d0ce4 = {}) {
    try {
      let _0x2c80ff = {
          fn: "divideData",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/divideData",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x319c23,
          statusCode: _0x5e59f3
        } = await this.request(_0x5f1048.copy(_0x2c80ff)),
        _0x29dd9f = _0x5f1048.get(_0x319c23, "errno", _0x5e59f3);
      if (_0x29dd9f == 0) {
        for (let _0x11637c of Object.keys(_0x319c23?.["data"]?.["divide_data"]?.["divide"] || {}) || []) {
          let _0x461f70 = _0x319c23.data.divide_data.divide[_0x11637c],
            {
              status: _0x5c2ad0
            } = _0x461f70;
          switch (_0x5c2ad0) {
            case 1:
              {
                await this.joinDivide(_0x11637c, _0x461f70);
                break;
              }
            case 2:
              {
                let _0x50fe9c = _0x5f1048.time("yyyy-MM-dd");
                _0x50fe9c == _0x11637c ? await this.divideReward(_0x11637c, _0x461f70) : this.log("已投注参加[" + _0x11637c + "]期瓜瓜乐");
                break;
              }
            case 3:
              {
                this.log("已打卡[" + _0x11637c + "]期瓜瓜乐, 等待瓜分");
                break;
              }
            case 4:
              {
                this.log("已瓜分[" + _0x11637c + "]期瓜瓜乐");
                break;
              }
            default:
              {
                this.log("未知[" + _0x11637c + "]期瓜瓜乐参与状态[" + _0x5c2ad0 + "]");
                break;
              }
          }
        }
      } else {
        let _0xffa864 = _0x5f1048.get(_0x319c23, "errmsg", "");
        this.log("查询瓜瓜乐状态失败[" + _0x29dd9f + "]: " + _0xffa864);
      }
    } catch (_0x2b0d2a) {
      console.log(_0x2b0d2a);
    }
  }
  async joinDivide(_0x3aa972, _0x4adc25, _0x472e4e = {}) {
    try {
      let _0x35617e = {
          fn: "joinDivide",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/joinDivide",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x4adc25.activity_id,
            count: _0x4adc25.button.count,
            type: _0x4adc25.button.type
          }
        },
        {
          result: _0x20c398,
          statusCode: _0x44f133
        } = await this.request(_0x5f1048.copy(_0x35617e)),
        _0x429ba6 = _0x5f1048.get(_0x20c398, "errno", _0x44f133);
      if (_0x429ba6 == 0) {
        this.log("投注参加[" + _0x3aa972 + "]期瓜瓜乐成功");
      } else {
        let _0x31138c = _0x5f1048.get(_0x20c398, "errmsg", "");
        this.log("投注参加[" + _0x3aa972 + "]期瓜瓜乐失败[" + _0x429ba6 + "]: " + _0x31138c);
      }
    } catch (_0x463e97) {
      console.log(_0x463e97);
    }
  }
  async divideReward(_0x580c4, _0x1076cb, _0x2dadb2 = {}) {
    try {
      let _0x284d40 = {
          fn: "divideReward",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/divideReward",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x1076cb.activity_id,
            task_id: _0x1076cb.task_id
          }
        },
        {
          result: _0x25f6b8,
          statusCode: _0x4d87dc
        } = await this.request(_0x5f1048.copy(_0x284d40)),
        _0x39a5c9 = _0x5f1048.get(_0x25f6b8, "errno", _0x4d87dc);
      if (_0x39a5c9 == 0) {
        this.log("打卡[" + _0x580c4 + "]期瓜瓜乐成功, 等待瓜分");
      } else {
        let _0x4d1092 = _0x5f1048.get(_0x25f6b8, "errmsg", "");
        this.log("打卡[" + _0x580c4 + "]期瓜瓜乐失败[" + _0x39a5c9 + "]: " + _0x4d1092);
      }
    } catch (_0x1c9929) {
      console.log(_0x1c9929);
    }
  }
  async productInit(_0x56b9c1 = {}) {
    try {
      let _0x5262ae = {
        fn: "productInit",
        method: "post",
        url: "https://api.didi.cn/webx/v2/productInit",
        json: {
          ...this.get_common_body(),
          dchn: "q8d86BM",
          args: {
            invoke_key: "default",
            key: "",
            runtime_args: {
              token: this.token,
              lat: this.lat,
              lng: this.lng,
              env: this.get_env()
            }
          }
        }
      };
      {
        let {
            result: _0x311edc,
            statusCode: _0x445417
          } = await this.request(_0x5f1048.copy(_0x5262ae)),
          _0x46d0c4 = _0x5f1048.get(_0x311edc, "errno", _0x445417);
        if (_0x46d0c4 == 0) {
          let {
            now_track_id: _0x1a0614,
            sign_activity: _0x59cb85
          } = _0x311edc?.["data"]?.["conf"]?.["strategy_data"]?.["data"]?.["daily_sign"];
          for (let _0x499918 of _0x59cb85 || []) {
            if (_0x499918.activity_turn_track_id == _0x1a0614) {
              switch (_0x499918.sign_status) {
                case 0:
                  {
                    await this.dailySign();
                    break;
                  }
                case 1:
                  {
                    this.log("今天福利金已签到");
                    break;
                  }
                default:
                  {
                    this.log("未知福利金签到状态[" + _0x499918.sign_status + "]");
                    break;
                  }
              }
              break;
            }
          }
          await this.getBubble();
          await this.divideData();
        } else {
          let _0x18c3ed = _0x5f1048.get(_0x311edc, "errmsg", "");
          this.log("查询福利金签到状态失败[" + _0x46d0c4 + "]: " + _0x18c3ed);
        }
      }
      {
        let {
            result: _0x7e2036,
            statusCode: _0x2f6a79
          } = await this.request(_0x5f1048.copy(_0x5262ae)),
          _0x479f3e = _0x5f1048.get(_0x7e2036, "errno", _0x2f6a79);
        if (_0x479f3e == 0) {
          let _0x3a1a8f = _0x7e2036?.["data"]?.["conf"]?.["strategy_data"]?.["data"]?.["bonus_info"]?.["total_amount"] || 0;
          const _0x5d4e46 = {
            notify: true
          };
          this.log("福利金余额: " + _0x3a1a8f, _0x5d4e46);
        } else {
          let _0x1702b6 = _0x5f1048.get(_0x7e2036, "errmsg", "");
          this.log("查询福利金失败[" + _0x479f3e + "]: " + _0x1702b6);
        }
      }
    } catch (_0x5f61d1) {
      console.log(_0x5f61d1);
    }
  }
  async dailySign(_0x4f3cf2 = {}) {
    try {
      let _0x4dd871 = {
          fn: "dailySign",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/dailySign",
          json: {
            ...this.get_common_body(),
            dchn: "q8d86BM",
            env: this.get_env()
          }
        },
        {
          result: _0x1e1de4,
          statusCode: _0x11e8ca
        } = await this.request(_0x5f1048.copy(_0x4dd871)),
        _0x554783 = _0x5f1048.get(_0x1e1de4, "errno", _0x11e8ca);
      if (_0x554783 == 0) {
        if (_0x1e1de4?.["data"]?.["prize_status"]) {
          let {
            subsidy_amount: _0x4e3fcf
          } = _0x1e1de4?.["data"]?.["subsidy_state"];
          this.log("福利金签到成功: " + _0x4e3fcf + "福利金");
        } else {
          this.log("福利金签到成功, 没有奖品");
        }
      } else {
        let _0x23644b = _0x5f1048.get(_0x1e1de4, "errmsg", "");
        this.log("福利金签到失败[" + _0x554783 + "]: " + _0x23644b);
      }
    } catch (_0x3eab5d) {
      console.log(_0x3eab5d);
    }
  }
  async getTaskList_v3(_0x5dae4c = {}) {
    try {
      let _0x8ef50f = {
          fn: "getTaskList_v3",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/getTaskList/v3",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x156e66,
          statusCode: _0x2e9815
        } = await this.request(_0x5f1048.copy(_0x8ef50f)),
        _0x2e45c1 = _0x5f1048.get(_0x156e66, "errno", _0x2e9815);
      if (_0x2e45c1 == 0) {
        let {
          task_list: _0x112675
        } = _0x156e66?.["data"];
        for (let _0xcda867 of _0x112675 || []) {
          switch (_0xcda867.status) {
            case "not_enroll":
              {
                await this.receiveTask_v2(_0xcda867);
                break;
              }
            case "ing":
              {
                await this.receiveTask_v2(_0xcda867);
                break;
              }
            case "complete":
              {
                await this.taskReward(_0xcda867);
                break;
              }
            case "finish":
              {
                break;
              }
          }
        }
      } else {
        let _0x190646 = _0x5f1048.get(_0x156e66, "errmsg", "");
        this.log("查询福利金任务列表失败[" + _0x2e45c1 + "]: " + _0x190646);
      }
    } catch (_0x2b61bf) {
      console.log(_0x2b61bf);
    }
  }
  async receiveTask_v2(_0x59c45c, _0x5cc7c5 = {}) {
    try {
      let _0x181a25 = {
          fn: "receiveTask_v2",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/receiveTask/v2",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            ..._0x59c45c
          }
        },
        {
          result: _0x2c3d7a,
          statusCode: _0x298708
        } = await this.request(_0x5f1048.copy(_0x181a25)),
        _0x2f2cf0 = _0x5f1048.get(_0x2c3d7a, "errno", _0x298708);
      if (_0x2f2cf0 == 0) {
        _0x2c3d7a?.["data"]?.["result"] ? (this.log("接受任务[" + _0x59c45c.title + "]成功"), await this.taskReward(_0x59c45c)) : this.log("接受任务[" + _0x59c45c.title + "]失败");
      } else {
        let _0x2e418f = _0x5f1048.get(_0x2c3d7a, "errmsg", "");
        this.log("接受任务[" + _0x59c45c.title + "]失败[" + _0x2f2cf0 + "]: " + _0x2e418f);
      }
    } catch (_0x1d092d) {
      console.log(_0x1d092d);
    }
  }
  async taskReward(_0x31f83b, _0xf3fea9 = {}) {
    try {
      let {
          title: _0x4dee04,
          activity_id: _0x352a28,
          task_id: _0x280faf
        } = _0x31f83b,
        _0x533591 = {
          fn: "taskReward",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/taskReward",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x352a28,
            task_id: _0x280faf
          }
        },
        {
          result: _0x3719f7,
          statusCode: _0x13b895
        } = await this.request(_0x5f1048.copy(_0x533591)),
        _0x5b1251 = _0x5f1048.get(_0x3719f7, "errno", _0x13b895);
      if (_0x5b1251 == 0) {
        this.log("领取任务[" + _0x4dee04 + "]奖励成功");
      } else {
        let _0x46680b = _0x5f1048.get(_0x3719f7, "errmsg", "");
        this.log("领取任务[" + _0x4dee04 + "]奖励失败[" + _0x5b1251 + "]: " + _0x46680b);
      }
    } catch (_0x3f1d5f) {
      console.log(_0x3f1d5f);
    }
  }
  get_game_gid() {
    return (++this.game_gid).toString();
  }
  async game_ws_send_data(_0x478894, _0x4e2e1b, _0x5501d4 = {}) {
    let _0x170a54 = {
      msg_type: _0x478894,
      game_data: _0x4e2e1b,
      gid: this.get_game_gid()
    };
    this.ws_client.send(JSON.stringify(_0x170a54));
  }
  async game_RiskParamInit(_0x172976 = {}) {
    let _0x5d88f1 = {
      "D-Header-T": this.token,
      "D-Header-Did": "",
      "D-Header-Ddfp": "",
      "D-Header-OpenId": "",
      "D-Header-FromChannel": "0",
      "D-Header-Appid": "35009",
      "D-Header-IsHitButton": "true",
      "D-Header-IsOpenWeb": "true",
      "D-Header-AppVersion": "",
      "D-Header-Dchn": "Yk1z1Jx",
      "D-Header-Model": "",
      "D-Header-WifiName": "",
      "D-Header-K": "X!p2B3*qvAuFawDR",
      "D-Header-xAxes": "0",
      "D-Header-yAxes": "0",
      "D-Header-UserAgent": "",
      "D-Header-Platform": "ios",
      "D-Header-DeviceOrientation": "portrait",
      "D-Header-Toshi": ""
    };
    await this.game_ws_send_data("RiskParamInit", _0x5d88f1);
  }
  async game_send_common_msg(_0x44daad, _0x50031a = {}, _0x13c7c1 = {}) {
    let _0x5072f3 = {
      ..._0x50031a,
      platform: 1,
      token: this.token
    };
    await this.game_ws_send_data(_0x44daad, _0x5072f3);
  }
  game_set_wait_flag(_0x2c2099, _0x69a9fe, _0x92dd93 = {}) {
    let _0x5917bb = this;
    this.wait_flag[_0x2c2099] = true;
    this.game_timer[_0x2c2099] = setTimeout(() => {
      _0x5917bb.wait_flag[_0x2c2099] = false;
    }, _0x69a9fe);
  }
  game_clear_wait_flag(_0x4eb7ee, _0xd496c5 = {}) {
    this.game_timer[_0x4eb7ee] && clearTimeout(this.game_timer[_0x4eb7ee]);
    this.wait_flag[_0x4eb7ee] = false;
  }
  async game_wait_flag(_0x56435d, _0x42d9ca = {}) {
    while (this.wait_flag[_0x56435d]) {
      await _0x5f1048.wait(100);
    }
  }
  async game_handler_RiskParamInit(_0x3c048e) {
    this.game_clear_wait_flag("RiskParamInit");
  }
  async game_handler_CoasterRefreshPower(_0x5ee5f7) {
    try {
      let {
        data: _0x522e53,
        errmsg: _0x574adf,
        errno: _0x8c49e4
      } = _0x5ee5f7;
      if (_0x8c49e4 == 0) {
        this.game_timer.CoasterRefreshPower && clearTimeout(this.game_timer.CoasterRefreshPower);
        let _0x21aea8 = _0x522e53?.["recovery_power"]?.["power"] || 0;
        this.log("游戏可以抽奖" + _0x21aea8 + "次");
        while (_0x21aea8-- > 0) {
          await _0x5f1048.wait_gap_interval(this.t_game_draw, _0x56f109);
          this.game_set_wait_flag("CoasterDraw", _0x485014);
          await this.game_send_common_msg("CoasterDraw");
          this.t_game_draw = Date.now();
          await this.game_wait_flag("CoasterDraw");
        }
        await _0x5f1048.wait(1000);
        this.wait_flag.CoasterRefreshPower = false;
      } else {
        this.log("获取游戏参数错误[" + _0x8c49e4 + "]: " + _0x574adf);
      }
    } catch (_0x5573b2) {
      console.log(_0x5573b2);
    } finally {
      this.game_clear_wait_flag("CoasterRefreshPower");
    }
  }
  async game_handler_CoasterDraw(_0x37599f) {
    try {
      let {
        data: _0x205cab,
        errmsg: _0x567e1f,
        errno: _0x13a66e
      } = _0x37599f;
      if (_0x13a66e == 0) {
        let {
            coin: _0x574681,
            coupon: _0x32a9ca,
            draw_item: _0x29554c
          } = _0x205cab,
          {
            id: _0x14563c,
            num: _0x383a9a,
            type: _0x48f179
          } = _0x29554c;
        this.log("游戏抽奖: " + _0x383a9a + (_0x60c836[_0x14563c] || "未知类型[" + _0x14563c + "]"));
        this.game_coupon = _0x32a9ca;
        this.game_coin = _0x574681;
      } else {
        this.log("游戏抽奖错误[" + _0x13a66e + "]: " + _0x567e1f);
      }
    } catch (_0xc02956) {
      console.log(_0xc02956);
    } finally {
      this.game_clear_wait_flag("CoasterDraw");
    }
  }
  async game_handler_CoasterGetUserNowCouponLists(_0x3530b0) {
    try {
      let {
        data: _0x24a10e,
        errmsg: _0x3e519e,
        errno: _0x17281d
      } = _0x3530b0;
      if (_0x17281d == 0) {
        let {
          coupon: _0x1eec1b
        } = _0x24a10e;
        for (let _0x2a3c29 of (_0x1eec1b || []).filter(_0x2c5044 => !_0x2c5044.exchanged)) {
          if (!this.game_can_exchange_coupon) {
            break;
          }
          this.game_set_wait_flag("CoasterExchangePower", _0x485014);
          const _0x2aa5be = {
            coupon_id: _0x2a3c29.coupon_id
          };
          await this.game_send_common_msg("CoasterExchangePower", _0x2aa5be);
          await this.game_wait_flag("CoasterExchangePower");
        }
      } else {
        this.log("查询券兑换体力错误[" + _0x17281d + "]: " + _0x3e519e);
      }
    } catch (_0x45b2ff) {
      console.log(_0x45b2ff);
    } finally {
      this.game_clear_wait_flag("CoasterGetUserNowCouponLists");
    }
  }
  async game_handler_CoasterExchangePower(_0x150954) {
    try {
      let {
        data: _0x474230,
        errmsg: _0x7c03,
        errno: _0x37e58e
      } = _0x150954;
      if (_0x37e58e == 0) {
        let {
          power: _0xa3569b
        } = _0x474230;
        this.game_power = _0xa3569b;
      } else {
        this.log("券兑换体力错误[" + _0x37e58e + "]: " + _0x7c03);
        _0x7c03?.["includes"]("已达上限") && (this.game_can_exchange_coupon = false);
      }
    } catch (_0x3d582e) {
      console.log(_0x3d582e);
    } finally {
      this.game_clear_wait_flag("CoasterExchangePower");
    }
  }
  async game_handler_MissionList(_0x237bc6) {
    try {
      let {
        data: _0xbadcac,
        errmsg: _0x2d7012,
        errno: _0xe4bebe
      } = _0x237bc6;
      if (_0xe4bebe == 0) {
        let {
          missions: _0x28d0cd
        } = _0xbadcac;
        for (let _0x1b1ff9 of _0x28d0cd || []) {
          if (_0x576e0e.includes(_0x1b1ff9.msg_key)) {
            continue;
          }
          if (_0x1b1ff9.progress == 0) {
            this.game_set_wait_flag("MissionUpdate", _0x485014);
            const _0x137776 = {
              mission_id: _0x1b1ff9.id,
              game_id: 30
            };
            await this.game_send_common_msg("MissionUpdate", _0x137776);
            await this.game_wait_flag("MissionUpdate");
          } else {
            this.game_set_wait_flag("MissionAward", _0x485014);
            const _0x26cc90 = {
              mission_id: _0x1b1ff9.id,
              game_id: 30
            };
            await this.game_send_common_msg("MissionAward", _0x26cc90);
            await this.game_wait_flag("MissionAward");
          }
        }
      } else {
        this.log("查询任务列表错误[" + _0xe4bebe + "]: " + _0x2d7012);
      }
    } catch (_0x1da9f2) {
      console.log(_0x1da9f2);
    } finally {
      this.game_clear_wait_flag("MissionList");
    }
  }
  async game_handler_PushMissionList(_0x9de5cf) {
    try {
      let {
        data: _0x142743,
        errmsg: _0x32e4ea,
        errno: _0x5ebebe
      } = _0x9de5cf;
      if (_0x5ebebe == 0) {
        for (let _0x5a0d4e of _0x142743 || []) {
          this.game_set_wait_flag("MissionAward", _0x485014);
          const _0x1939e5 = {
            mission_id: _0x5a0d4e.id,
            game_id: 30
          };
          await this.game_send_common_msg("MissionAward", _0x1939e5);
          await this.game_wait_flag("MissionAward");
        }
      } else {
        this.log("[PushMissionList]错误[" + _0x5ebebe + "]: " + _0x32e4ea);
      }
    } catch (_0x59d85e) {
      console.log(_0x59d85e);
    } finally {
      this.game_clear_wait_flag("PushMissionList");
    }
  }
  async game_handler_MissionUpdate(_0x134f43) {
    try {
      let {
        data: _0x335130,
        errmsg: _0x105b62,
        errno: _0x36cb5d
      } = _0x134f43;
      if (!(_0x36cb5d == 0)) {
        this.log("完成任务错误[" + _0x36cb5d + "]: " + _0x105b62);
      }
    } catch (_0x566858) {
      console.log(_0x566858);
    } finally {
      this.game_clear_wait_flag("MissionUpdate");
    }
  }
  async game_handler_MissionAward(_0x32e721) {
    try {
      let {
        data: _0x250df8,
        errmsg: _0x2d153a,
        errno: _0x3b59ed
      } = _0x32e721;
      if (_0x3b59ed == 0) {
        let {
            title: _0xebe80d,
            reward: _0x4976fb
          } = _0x250df8,
          _0x512336 = [];
        for (let _0x19b0a0 of _0x4976fb || []) {
          _0x512336.push(_0x19b0a0.name + "x" + _0x19b0a0.count);
        }
        this.log("领取任务[" + _0xebe80d + "]奖励: " + (_0x512336.join(", ") || "空气"));
      } else {
        this.log("领取任务奖励错误[" + _0x3b59ed + "]: " + _0x2d153a);
      }
    } catch (_0x5ba2c2) {
      console.log(_0x5ba2c2);
    } finally {
      this.game_clear_wait_flag("MissionAward");
    }
  }
  async game_handler_CoasterWheelUpgrade(_0x471b4c) {
    try {
      let {
        data: _0x2d9d29,
        errmsg: _0x2e0748,
        errno: _0xb2a885
      } = _0x471b4c;
      if (_0xb2a885 == 0) {
        let {
          wheel: _0x2a33a5
        } = _0x2d9d29;
        this.log("升级转盘成功: Lv." + _0x2a33a5.wheel_level);
      } else {
        this.log("升级转盘错误[" + _0xb2a885 + "]: " + _0x2e0748);
      }
    } catch (_0xa9566a) {
      console.log(_0xa9566a);
    } finally {
      this.game_clear_wait_flag("CoasterWheelUpgrade");
    }
  }
  async game_handler_CoasterSignList(_0x2f35f6) {
    try {
      let {
        data: _0x169ed4,
        errmsg: _0x41d013,
        errno: _0x1840e0
      } = _0x2f35f6;
      if (_0x1840e0 == 0) {
        let {
          last_sign_time: _0x2a66bf,
          sign_times: _0x1b9afc
        } = _0x169ed4;
        _0x2a66bf && _0x5f1048.time("yyyyMMdd", _0x2a66bf * 1000) == _0x5f1048.time("yyyyMMdd") ? this.log("游戏今天已签到, 已签到" + _0x1b9afc + "天") : (this.game_set_wait_flag("CoasterSign", _0x485014), await this.game_send_common_msg("CoasterSign"), await this.game_wait_flag("CoasterSign"));
      } else {
        this.log("查询游戏签到状态错误[" + _0x1840e0 + "]: " + _0x41d013);
      }
    } catch (_0x517e5e) {
      console.log(_0x517e5e);
    } finally {
      this.game_clear_wait_flag("CoasterSignList");
    }
  }
  async game_handler_CoasterSign(_0x4a5470) {
    try {
      let {
        data: _0x3e8cc6,
        errmsg: _0x47bf36,
        errno: _0x193b92
      } = _0x4a5470;
      if (_0x193b92 == 0) {
        let {
            rewards: _0x63ba31,
            sign_times: _0xa01ffe
          } = _0x3e8cc6,
          _0x40ffcc = [];
        for (let _0x31b964 of _0x63ba31 || []) {
          _0x40ffcc.push(_0x31b964.name + "x" + _0x31b964.num);
        }
        this.log("游戏签到成功, 已签到" + _0xa01ffe + "天: " + (_0x40ffcc.join(", ") || "空气"));
      } else {
        this.log("游戏签到错误[" + _0x193b92 + "]: " + _0x47bf36);
      }
    } catch (_0xc431be) {
      console.log(_0xc431be);
    } finally {
      this.game_clear_wait_flag("CoasterSign");
    }
  }
  async game_handler_CoasterNew(_0x5e812c) {
    try {
      let {
        data: _0x1e0516,
        errmsg: _0x545ffa,
        errno: _0x3cafa7
      } = _0x5e812c;
      if (!(_0x3cafa7 == 0)) {
        this.log("[CoasterNew]错误[" + _0x3cafa7 + "]: " + _0x545ffa);
      }
    } catch (_0x23c64a) {
      console.log(_0x23c64a);
    } finally {
      this.game_clear_wait_flag("CoasterNew");
    }
  }
  async game_message_dispatch(_0x14cf8e, _0x1eddba = {}) {
    try {
      let _0x173cf1 = JSON.parse(_0x14cf8e),
        {
          msg_type: _0x4570b6,
          game_data: _0x574c73
        } = _0x173cf1,
        _0x294ed0 = "game_handler_" + _0x4570b6;
      this[_0x294ed0] ? await this[_0x294ed0](_0x574c73) : this.log("未定义消息处理: " + _0x4570b6);
    } catch (_0x4fd86b) {
      console.log(_0x4fd86b);
      this.log("解析消息错误: " + _0x14cf8e);
    }
  }
  async game_ws_task(_0x56efb5 = {}) {
    this.game_set_wait_flag("RiskParamInit", _0x485014);
    await this.game_RiskParamInit();
    await this.game_wait_flag("RiskParamInit");
    this.game_set_wait_flag("CoasterSignList", _0x485014);
    await this.game_send_common_msg("CoasterSignList");
    await this.game_wait_flag("CoasterSignList");
    this.game_set_wait_flag("CoasterGetUserNowCouponLists", _0x485014);
    await this.game_send_common_msg("CoasterGetUserNowCouponLists");
    await this.game_wait_flag("CoasterGetUserNowCouponLists");
    this.game_set_wait_flag("MissionList", _0x485014);
    const _0x419744 = {
      game_id: 30
    };
    await this.game_send_common_msg("MissionList", _0x419744);
    await this.game_wait_flag("MissionList");
    await this.coaster_hall();
  }
  async coaster_game_task(_0x3441c9 = {}) {
    let _0x1de929 = new URL(_0x340b7d);
    _0x1de929.searchParams.append("biz_type", "30");
    _0x1de929.searchParams.append("token", this.token);
    this.ws_client = new _0x23e760(_0x1de929.toString());
    let _0x6e0dfa = this;
    this.ws_client.on("message", async _0x29498b => {
      await _0x6e0dfa.game_message_dispatch(_0x29498b);
    });
    this.ws_client.on("error", _0x15366d => {
      _0x6e0dfa.error("游戏连接发生错误: " + _0x15366d.message);
    });
    let _0x3ddc62 = new Promise(_0x4dfcd5 => {
      this.ws_client.on("open", async () => {
        _0x6e0dfa.log("游戏连接成功");
        _0x4dfcd5();
      });
    });
    await _0x3ddc62;
    await this.game_ws_task();
    this.ws_client.close();
  }
  async coaster_hall(_0x368df6 = {}) {
    try {
      let _0x519522 = {
        fn: "coaster_hall",
        method: "post",
        url: "https://game.xiaojukeji.com/api/game/coaster/hall",
        json: {
          ...this.get_common_body(),
          platform: 1
        }
      };
      {
        let {
            result: _0x36193c,
            statusCode: _0x5f4dcc
          } = await this.request(_0x5f1048.copy(_0x519522)),
          _0x14d748 = _0x5f1048.get(_0x36193c, "errno", _0x5f4dcc);
        if (_0x14d748 == 0) {
          let {
              coin: _0x4e1cdc,
              wheel: _0x434f44,
              wheel_levels: _0x461fb8
            } = _0x36193c?.["data"],
            _0x1202dc = _0x434f44?.["wheel_level"] || 1,
            _0x52d880 = _0x461fb8?.["filter"](_0x45d9ad => _0x45d9ad.level == _0x1202dc + 1);
          _0x52d880.length ? (this.log("转盘等级[" + _0x1202dc + "], 下一级升级金币: " + _0x52d880[0].count + ", 金币余额: " + _0x4e1cdc), _0x4e1cdc >= _0x52d880[0].count && (this.game_set_wait_flag("CoasterWheelUpgrade", _0x485014), await this.game_send_common_msg("CoasterWheelUpgrade"), await this.game_wait_flag("CoasterWheelUpgrade"))) : this.log("转盘等级[" + _0x1202dc + "], 金币余额: " + _0x4e1cdc);
          this.game_set_wait_flag("CoasterRefreshPower", 60000);
          await this.game_send_common_msg("CoasterRefreshPower");
          await this.game_wait_flag("CoasterRefreshPower");
        } else {
          let _0xcf347 = _0x5f1048.get(_0x36193c, "errmsg", "");
          this.log("查询养券游戏失败[" + _0x14d748 + "]: " + _0xcf347);
        }
      }
      {
        let {
            result: _0xbcdff1,
            statusCode: _0x5b3c15
          } = await this.request(_0x5f1048.copy(_0x519522)),
          _0x1582f4 = _0x5f1048.get(_0xbcdff1, "errno", _0x5b3c15);
        if (_0x1582f4 == 0) {
          let {
              coin: _0x15a8f3,
              coupon: _0x289727,
              wheel: _0x1196e5
            } = _0xbcdff1?.["data"],
            _0x23dc47 = _0x1196e5?.["wheel_level"] || 1;
          const _0x2df732 = {
            notify: true
          };
          this.log("养券游戏: 转盘等级[" + _0x23dc47 + "], 金币 " + _0x15a8f3, _0x2df732);
          let {
            amount: _0x5522f2,
            available: _0x19f304,
            expire_date: _0x2a8b54
          } = _0x289727;
          const _0x50c847 = {
            notify: true
          };
          this.log("养券进度: 满" + (_0x19f304 / 100).toFixed(2) + "减" + (_0x5522f2 / 100).toFixed(2) + ", 有效期: " + _0x2a8b54, _0x50c847);
        } else {
          let _0x31f7f2 = _0x5f1048.get(_0xbcdff1, "errmsg", "");
          this.log("查询养券游戏失败[" + _0x1582f4 + "]: " + _0x31f7f2);
        }
      }
    } catch (_0x26ae13) {
      console.log(_0x26ae13);
    }
  }
  async coupon_batch_config(_0x587fac = {}) {
    try {
      let _0x5cd8c3 = [];
      for (let _0x5bfe20 of _0x574b44) {
        const _0x3c04d8 = {
          token: this.token,
          lat: this.lat,
          lng: this.lng,
          env: {},
          "content-type": "application/json",
          "Didi-Ticket": this.token,
          ptf: "mp",
          city_id: 2,
          platform: "mp",
          x_test_user: {}
        };
        _0x3c04d8.env.dchn = "xP6gbXo";
        _0x3c04d8.env.newTicket = this.token;
        _0x3c04d8.env.model = "iPhone 14 Pro Max<iPhone15,3>";
        _0x3c04d8.env.fromChannel = "2";
        _0x3c04d8.env.newAppid = "35009";
        _0x3c04d8.env.openId = "";
        _0x3c04d8.env.openIdType = "1";
        _0x3c04d8.env.sceneId = "1001";
        _0x3c04d8.env.isHitButton = true;
        _0x3c04d8.env.isOpenWeb = false;
        _0x3c04d8.env.timeCost = 158161;
        _0x3c04d8.env.latitude = this.lat;
        _0x3c04d8.env.longitude = this.lng;
        _0x3c04d8.env.cityId = "";
        _0x3c04d8.env.fromPage = "ut-coupon-center/views/index/index";
        _0x3c04d8.env.xAxes = "";
        _0x3c04d8.env.yAxes = "";
        _0x3c04d8.x_test_user.key = this.uid;
        const _0x3889eb = {
          dchn: _0x5bfe20.dchn,
          prod_key: _0x5bfe20.prod_key,
          runtime_args: _0x3c04d8
        };
        _0x5cd8c3.push(_0x3889eb);
      }
      let _0x3efd63 = {
          fn: "coupon_batch_config",
          method: "post",
          url: "https://api.didi.cn/webx/chapter/page/batch/config",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            args: _0x5cd8c3
          }
        },
        {
          result: _0x3062ae,
          statusCode: _0x1584d4
        } = await this.request(_0x5f1048.copy(_0x3efd63)),
        _0xe192f6 = _0x5f1048.get(_0x3062ae, "errno", _0x1584d4);
      if (_0xe192f6 == 0) {
        for (let _0x4cd7cb of _0x3062ae?.["data"]?.["conf"] || []) {
          let _0x9aa4d7 = _0x4cd7cb?.["strategy_data"]?.["data"],
            _0x38881b = _0x9aa4d7?.["seckill"] || [],
            _0x4c32d4 = _0x9aa4d7?.["daily_coupon"]?.["coupons"] || [];
          for (let _0x5e59b5 of _0x38881b) {
            if (_0x5e59b5.count_down > 0 || _0x5e59b5.sold_out) {
              continue;
            }
            for (let _0x180038 of _0x5e59b5?.["coupons"] || []) {
              if (_0x180038.remain_stock == 0) {
                continue;
              }
              _0x180038.act_coupon_type == 6 ? (await this.entry_bind(_0x180038), await this.bind_entry_coupon()) : await this.coupon_bind(_0x180038);
            }
          }
          for (let _0xcb1ce7 of _0x4c32d4) {
            if (_0xcb1ce7.remain_stock == 0) {
              continue;
            }
            _0xcb1ce7.act_coupon_type == 6 ? (await this.entry_bind(_0xcb1ce7), await this.bind_entry_coupon()) : await this.coupon_bind(_0xcb1ce7);
          }
        }
      } else {
        let _0x19dbc3 = _0x5f1048.get(_0x3062ae, "errmsg", "");
        this.log("查询领券中心失败[" + _0xe192f6 + "]: " + _0x19dbc3);
      }
    } catch (_0xf833a2) {
      console.log(_0xf833a2);
    }
  }
  async entry_bind(_0x8d58fd, _0x32ddcf = {}) {
    try {
      let {
          activity_id: _0x5b765d,
          group_id: _0x552645,
          coupon_conf_id: _0x242b8b,
          name: _0xbcdfe5
        } = _0x8d58fd,
        _0x3c848a = {
          fn: "entry_bind",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/entry/bind",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            activity_id: _0x5b765d,
            group_id: _0x552645,
            coupon_conf_id: _0x242b8b
          }
        },
        {
          result: _0x299bf9,
          statusCode: _0x30859b
        } = await this.request(_0x5f1048.copy(_0x3c848a)),
        _0x4036e6 = _0x5f1048.get(_0x299bf9, "errno", _0x30859b);
      if (_0x4036e6 == 0) {
        this.log("预约券[" + _0xbcdfe5 + "]成功");
      } else {
        let _0x266eba = _0x5f1048.get(_0x299bf9, "errmsg", "");
        this.log("预约券[" + _0xbcdfe5 + "]失败[" + _0x4036e6 + "]: " + _0x266eba);
      }
    } catch (_0x13cf4e) {
      console.log(_0x13cf4e);
    }
  }
  async bind_entry_coupon(_0x2fc20d = {}) {
    try {
      const _0x4e59c2 = {
        platform: "mp",
        city_id: 2
      };
      let _0x2bd397 = {
          fn: "bind_entry_coupon",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/event/report",
          json: {
            ...this.get_common_body(),
            type: "bind_entry_coupon",
            data: _0x4e59c2,
            city_id: 2
          }
        },
        {
          result: _0x5eac37,
          statusCode: _0x16bc54
        } = await this.request(_0x5f1048.copy(_0x2bd397)),
        _0x2395b3 = _0x5f1048.get(_0x5eac37, "errno", _0x16bc54);
      if (_0x2395b3 == 0) {
        let _0x48e1e6 = _0x5eac37?.["data"]?.["coupon"]?.["name"] || "空气";
        this.coupon_log(_0x48e1e6, "搜索领券");
      } else {
        let _0xe9ad20 = _0x5f1048.get(_0x5eac37, "errmsg", "");
        this.log("搜索领券失败[" + _0x2395b3 + "]: " + _0xe9ad20);
      }
    } catch (_0x37a82b) {
      console.log(_0x37a82b);
    }
  }
  async coupon_bind(_0x1d5d39, _0x21d343 = {}) {
    try {
      let {
          activity_id: _0x14f486,
          group_id: _0x1ef923,
          group_date: _0x29e6f0,
          coupon_conf_id: _0x2f7d03,
          name: _0x38f7d1
        } = _0x1d5d39,
        _0x59faa6 = {
          fn: "coupon_bind",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/coupon/bind",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            activity_id: _0x14f486,
            group_id: _0x1ef923,
            group_date: _0x29e6f0,
            coupon_conf_id: _0x2f7d03
          }
        },
        {
          result: _0x1e9dfd,
          statusCode: _0x4b5a26
        } = await this.request(_0x5f1048.copy(_0x59faa6)),
        _0x53b05a = _0x5f1048.get(_0x1e9dfd, "errno", _0x4b5a26);
      if (_0x53b05a == 0) {
        this.coupon_log(_0x38f7d1);
      } else {
        let _0x140248 = _0x5f1048.get(_0x1e9dfd, "errmsg", "");
        this.log("领券[" + _0x38f7d1 + "]失败[" + _0x53b05a + "]: " + _0x140248);
      }
    } catch (_0x59e79a) {
      console.log(_0x59e79a);
    }
  }
  async union_receive(_0x5635b4, _0x2cd7af = {}) {
    try {
      let {
          dchn: _0x4911cf,
          dsi: _0xaac2c8
        } = _0x5635b4,
        _0x35488f = {
          fn: "union_receive",
          method: "post",
          url: "https://union.didi.cn/api/v1.0/reward/receive",
          json: {
            xbiz: "240101",
            prod_key: "ut-dunion-wyc",
            xpsid: _0x5f1048.randomString(),
            dchn: "dprrb96",
            xoid: _0x5f1048.randomUuid(),
            xenv: "wxmp",
            xspm_from: "none.none.none.none",
            xpsid_root: _0x5f1048.randomString(),
            xpsid_from: "",
            xpsid_share: "",
            env: {
              dchn: _0x4911cf,
              newTicket: this.token,
              cityId: "2",
              userAgent: _0x26852a,
              fromChannel: "2",
              newAppid: "30012",
              openId: "",
              openIdType: "1",
              isHitButton: false,
              isOpenWeb: true,
              timeCost: 2624
            },
            req_env: "wx",
            dsi: _0xaac2c8,
            source_id: "0",
            product_type: "didi",
            lng: "",
            lat: "",
            token: this.token,
            uid: this.uid,
            phone: "",
            city_id: 2
          }
        },
        {
          result: _0xad7e04,
          statusCode: _0x743ef5
        } = await this.request(_0x5f1048.copy(_0x35488f)),
        _0x26d067 = _0x5f1048.get(_0xad7e04, "errno", _0x743ef5);
      if (_0x26d067 == 0) {
        let _0x2a92e8 = _0xad7e04?.["data"]?.["rewards"] || [];
        for (let _0x3eba62 of _0x2a92e8) {
          let {
              max_benefit_capacity: _0x206be9,
              name: _0x3e6c30
            } = _0x3eba62?.["coupon"],
            {
              value: _0x391f4d,
              unit: _0x501547
            } = _0x206be9;
          this.coupon_log("[" + _0x3e6c30 + "]" + _0x391f4d + _0x501547);
        }
      } else {
        let _0x2f499e = _0x5f1048.get(_0xad7e04, "errmsg", "");
        this.log("领券[" + _0x5635b4.name + "]失败[" + _0x26d067 + "]: " + _0x2f499e);
      }
    } catch (_0x28ccab) {
      console.log(_0x28ccab);
    }
  }
  async union_lottery(_0x4aaa7a, _0x5a3402 = {}) {
    try {
      let _0x104d60 = {
          xbiz: _0x4aaa7a.xbiz,
          prod_key: "imk-lottery",
          xpsid: _0x5f1048.randomString(),
          dchn: _0x4aaa7a.dchn,
          xoid: _0x5f1048.randomUuid(),
          xenv: "wxmp",
          xspm_from: "integrated-marketing.none.c2165.share-btn",
          xpsid_root: _0x5f1048.randomString(),
          xpsid_from: "",
          xpsid_share: "",
          xpos_from: "",
          root_xak: "integrated-marketing-1xicDGlUgRRX",
          root_xid: 0,
          root_prod_key: "integrated-marketing",
          token: this.token,
          city_id: 2,
          activity_id: _0x4aaa7a.activity_id,
          game_id: _0x4aaa7a.game_id,
          xak: _0x4aaa7a.xak,
          env: this.get_env()
        },
        _0x5c0782 = {
          fn: "union_lottery",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/lottery/do",
          searchParams: {
            wsgsig: this.gen_wsgsig(_0x104d60)
          },
          json: _0x104d60
        },
        {
          result: _0x353439,
          statusCode: _0x3c44f1
        } = await this.request(_0x5f1048.copy(_0x5c0782)),
        _0x311aac = _0x5f1048.get(_0x353439, "errno", _0x3c44f1);
      if (_0x311aac == 0) {
        let _0x9f154f = _0x353439?.["data"]?.["data"]?.["get_reward_info"]?.["prize_items"] || [];
        for (let _0x27d15a of _0x9f154f) {
          let {
              item_name: _0x1a6a37,
              extra: _0x15fe22
            } = _0x27d15a,
            {
              ui_coupon_discount: _0x390364
            } = _0x15fe22?.["send_result"]?.["ui_ext_kv"];
          _0x390364 = _0x390364.replace(/[\{\}]/g, "");
          this.coupon_log("[" + _0x1a6a37 + "]" + _0x390364, "社群抽奖");
        }
        let _0x463d7c = _0x353439?.["data"]?.["data"]?.["init_ticket_count"] || 0;
        _0x463d7c > 0 && (await this.union_lottery(_0x4aaa7a, _0x5a3402));
      } else {
        let _0x525ca7 = _0x5f1048.get(_0x353439?.["data"]?.["data"], "reason", "") || _0x5f1048.get(_0x353439, "errmsg", "");
        this.log("社群抽奖失败[" + _0x311aac + "]: " + _0x525ca7);
      }
    } catch (_0x2caeb8) {
      console.log(_0x2caeb8);
    }
  }
  async union_task_index_full(_0x4fef01 = {}) {
    try {
      let _0x166cab = {
          fn: "union_task_index_full",
          method: "get",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/task/index_full",
          searchParams: {
            ...this.get_common_body(),
            xbiz: "240101",
            prod_key: "imk-ut-task",
            dchn: "X3kl9n2",
            xenv: "wxmp",
            xspm_from: "imk-lottery.none.c2159.main-btn",
            root_xak: "integrated-marketing-1xicDGlUgRRX",
            root_prod_key: "integrated-marketing",
            xak: "imk-ut-task-dhCEvFmja0EP"
          }
        },
        {
          result: _0x5e9d28,
          statusCode: _0x5b435c
        } = await this.request(_0x5f1048.copy(_0x166cab)),
        _0x3ac261 = _0x5f1048.get(_0x5e9d28, "errno", _0x5b435c);
      if (_0x3ac261 == 0) {
        let _0x4e2b43 = _0x5e9d28?.["data"]?.["details"]?.["map"](_0x3b53cd => _0x3b53cd.task_info) || [];
        for (let _0x493413 of _0x4e2b43) {
          if (_0x493413?.["status"] == "finish") {
            continue;
          }
          await this.union_task_do(_0x493413);
        }
      } else {
        let _0x562091 = _0x5f1048.get(_0x5e9d28, "errmsg", "");
        this.log("查询社群任务失败[" + _0x3ac261 + "]: " + _0x562091);
      }
    } catch (_0x1bd246) {
      console.log(_0x1bd246);
    }
  }
  async union_task_do(_0x167558, _0x151074 = {}) {
    try {
      let _0x280023 = {
          fn: "union_task_do",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/task/do",
          searchParams: {
            ...this.get_common_body(),
            xbiz: "240101",
            prod_key: "imk-ut-task",
            dchn: "X3kl9n2",
            xenv: "wxmp",
            xspm_from: "imk-lottery.none.c2159.main-btn",
            root_xak: "integrated-marketing-1xicDGlUgRRX",
            root_prod_key: "integrated-marketing",
            xak: "imk-ut-task-dhCEvFmja0EP",
            task_activity_id: _0x167558.activity_id,
            strategy_type: _0x167558.type,
            scene_type: _0x167558.scene_type,
            task_id: _0x167558.task_id
          }
        },
        {
          result: _0x4a6d2a,
          statusCode: _0x35fa01
        } = await this.request(_0x5f1048.copy(_0x280023)),
        _0x4250f7 = _0x5f1048.get(_0x4a6d2a, "errno", _0x35fa01);
      if (_0x4250f7 == 0) {
        this.log("完成社群任务[" + _0x167558.title + "]成功");
      } else {
        let _0x47b585 = _0x5f1048.get(_0x4a6d2a, "errmsg", "");
        this.log("完成社群任务[" + _0x167558.title + "]失败[" + _0x4250f7 + "]: " + _0x47b585);
      }
    } catch (_0x25e61b) {
      console.log(_0x25e61b);
    }
  }
  async userTask(_0x9b61b = {}) {
    _0x5f1048.log("\n------------- 账号[" + this.index + "]" + (this.remark ? "[" + this.remark + "]" : "") + " -------------");
    if (!(await this.signInByOpenid())) {
      return;
    }
    await this.coupon_batch_config();
    for (let _0x2bce8c of _0x5d526f.filter(_0x11afec => _0x11afec.enable)) {
      await this.union_receive(_0x2bce8c);
    }
    await this.product_init("kaxm7er");
    await this.product_init("Z5wmbGE");
    for (let _0x5c6a4d of _0xf705a5.filter(_0x31717a => _0x31717a.enable)) {
      await this.union_lottery(_0x5c6a4d);
    }
    await this.union_task_index_full();
    await this.sign_index();
    await this.productInit();
    await this.coaster_game_task();
  }
}
function _0x5dff54() {
  if (_0x591f92.existsSync("./" + _0x362833)) {
    const _0x267353 = {
      flag: "r",
      encoding: "utf-8"
    };
    let _0x367c81 = _0x591f92.readFileSync("./" + _0x362833, _0x267353);
    _0x367c81 = _0x367c81?.["replace"](/\r/g, "")?.["split"]("\n")?.["filter"](_0x41e7ec => _0x41e7ec) || [];
    for (let _0x3a4960 of _0x367c81) {
      _0x5f1048.userList.push(new _0xd8eb75(_0x3a4960));
    }
  } else {
    const _0xfa33ee = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x591f92.writeFileSync("./" + _0x362833, "", _0xfa33ee);
    _0x5f1048.log("CK文件[" + _0x362833 + "]不存在, 默认为你新建一个, 如有需要请填入ck");
  }
  _0x5f1048.userCount = _0x5f1048.userList.length;
  if (!_0x5f1048.userCount) {
    const _0x28284c = {
      notify: true
    };
    _0x5f1048.log("未找到变量，请检查文件[" + _0x362833 + "]", _0x28284c);
    return false;
  }
  _0x5f1048.log("共找到" + _0x5f1048.userCount + "个账号");
  return true;
}
function _0x21136a() {
  let _0x2e7efa = [];
  for (let _0x4877a7 of _0x5f1048.userList) {
    let _0x2c61dc = _0x4877a7.remark || _0x4877a7.name || _0x4877a7.mobile || "",
      _0x166220 = _0x4877a7.ticket;
    _0x2e7efa.push(_0x2c61dc + "#" + _0x166220);
  }
  if (_0x2e7efa.length) {
    const _0x57d8ed = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x591f92.writeFileSync("./" + _0x362833, _0x2e7efa.join("\n"), _0x57d8ed);
    _0x5f1048.log("已更新CK文件");
  }
}
!(async () => {
  if (!(await _0x132aa5())) {
    return;
  }
  await _0x31fff6();
  if (!_0x5dff54()) {
    return;
  }
  for (let _0x1271d7 of _0x5f1048.userList) {
    await _0x1271d7.userTask();
  }
})().catch(_0x1cdcfc => _0x5f1048.log(_0x1cdcfc)).finally(() => _0x5f1048.exitNow());
async function _0x132aa5(_0x5e8fb3 = 0) {
  let _0x2e9bd9 = false;
  try {
    let _0x713bf6 = {
        fn: "auth",
        method: "get",
        url: _0x3bdac3,
        timeout: 20000
      },
      {
        statusCode: _0x143e7e,
        result: _0x2d8c73
      } = await _0x50ffdf.request(_0x713bf6);
    if (_0x143e7e != 200) {
      _0x5e8fb3++ < _0x2ae988 && (_0x2e9bd9 = await _0x132aa5(_0x5e8fb3));
      return _0x2e9bd9;
    }
    if (_0x2d8c73?.["code"] == 0) {
      _0x2d8c73 = JSON.parse(_0x2d8c73.data.file.data);
      if (_0x2d8c73?.["commonNotify"] && _0x2d8c73.commonNotify.length > 0) {
        const _0x112292 = {
          notify: true
        };
        _0x5f1048.log(_0x2d8c73.commonNotify.join("\n") + "\n", _0x112292);
      }
      _0x2d8c73?.["commonMsg"] && _0x2d8c73.commonMsg.length > 0 && _0x5f1048.log(_0x2d8c73.commonMsg.join("\n") + "\n");
      if (_0x2d8c73[_0x335699]) {
        let _0x5d3cd5 = _0x2d8c73[_0x335699];
        _0x5d3cd5.status == 0 ? _0x2a39b7 >= _0x5d3cd5.version ? (_0x2e9bd9 = true, _0x5f1048.log(_0x5d3cd5.msg[_0x5d3cd5.status]), _0x5f1048.log(_0x5d3cd5.updateMsg), _0x5f1048.log("现在运行的脚本版本是：" + _0x2a39b7 + "，最新脚本版本：" + _0x5d3cd5.latestVersion)) : _0x5f1048.log(_0x5d3cd5.versionMsg) : _0x5f1048.log(_0x5d3cd5.msg[_0x5d3cd5.status]);
      } else {
        _0x5f1048.log(_0x2d8c73.errorMsg);
      }
    } else {
      _0x5e8fb3++ < _0x2ae988 && (_0x2e9bd9 = await _0x132aa5(_0x5e8fb3));
    }
  } catch (_0x39696c) {
    _0x5f1048.log(_0x39696c);
  } finally {
    return _0x2e9bd9;
  }
}
async function _0x31fff6() {
  let _0x4447ea = false;
  try {
    let _0x47ce97 = {
        fn: "auth",
        method: "get",
        url: _0x94ffec
      },
      {
        statusCode: _0x5a0ca0,
        result: _0x3e8deb
      } = await _0x50ffdf.request(_0x47ce97);
    if (_0x5a0ca0 != 200) {
      return Promise.resolve();
    }
    if (_0x3e8deb?.["code"] == 0) {
      _0x3e8deb = JSON.parse(_0x3e8deb.data.file.data);
      let _0x3f8024 = _0x3e8deb?.["a_d"] || [];
      _0x192ee3 = _0x5f1048.randomList(_0x3f8024) || _0x192ee3;
    }
  } catch (_0x58cc13) {
    _0x5f1048.log(_0x58cc13);
  } finally {
    return Promise.resolve(_0x4447ea);
  }
}
function _0x1c8bd0(_0x3afb97) {
  return new class {
    constructor(_0x362da4) {
      this.name = _0x362da4;
      this.startTime = Date.now();
      const _0x37b139 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x37b139);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0xa1cb7e, _0x2398d3 = {}) {
      let _0x576f12 = {
        console: true
      };
      Object.assign(_0x576f12, _0x2398d3);
      if (_0x576f12.time) {
        let _0x4ff1e2 = _0x576f12.fmt || "hh:mm:ss";
        _0xa1cb7e = "[" + this.time(_0x4ff1e2) + "]" + _0xa1cb7e;
      }
      if (_0x576f12.notify) {
        this.notifyStr.push(_0xa1cb7e);
      }
      if (_0x576f12.console) {
        console.log(_0xa1cb7e);
      }
    }
    get(_0x501057, _0x1e9480, _0x4c774f = "") {
      let _0x1845a9 = _0x4c774f;
      _0x501057?.["hasOwnProperty"](_0x1e9480) && (_0x1845a9 = _0x501057[_0x1e9480]);
      return _0x1845a9;
    }
    pop(_0x272ccc, _0x313e99, _0x4575b7 = "") {
      let _0x1e4b36 = _0x4575b7;
      _0x272ccc?.["hasOwnProperty"](_0x313e99) && (_0x1e4b36 = _0x272ccc[_0x313e99], delete _0x272ccc[_0x313e99]);
      return _0x1e4b36;
    }
    copy(_0x528b9b) {
      return Object.assign({}, _0x528b9b);
    }
    read_env(_0x416fcb) {
      let _0x3e0937 = ckNames.map(_0x2f5d09 => process.env[_0x2f5d09]);
      for (let _0x4e1d2c of _0x3e0937.filter(_0x67ce0c => !!_0x67ce0c)) {
        for (let _0xc61c0a of _0x4e1d2c.split(envSplitor).filter(_0xad5378 => !!_0xad5378)) {
          this.userList.push(new _0x416fcb(_0xc61c0a));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x7bee91 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + ckNames.map(_0x165856 => "[" + _0x165856 + "]").join("或"), _0x7bee91);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x5d11d4, _0x2ec726 = null) {
      let _0x2cc60f = _0x2ec726 ? new Date(_0x2ec726) : new Date(),
        _0x5602f8 = {
          "M+": _0x2cc60f.getMonth() + 1,
          "d+": _0x2cc60f.getDate(),
          "h+": _0x2cc60f.getHours(),
          "m+": _0x2cc60f.getMinutes(),
          "s+": _0x2cc60f.getSeconds(),
          "q+": Math.floor((_0x2cc60f.getMonth() + 3) / 3),
          S: this.padStr(_0x2cc60f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x5d11d4) && (_0x5d11d4 = _0x5d11d4.replace(RegExp.$1, (_0x2cc60f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x52fa04 in _0x5602f8) new RegExp("(" + _0x52fa04 + ")").test(_0x5d11d4) && (_0x5d11d4 = _0x5d11d4.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5602f8[_0x52fa04] : ("00" + _0x5602f8[_0x52fa04]).substr(("" + _0x5602f8[_0x52fa04]).length)));
      return _0x5d11d4;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x29fa22 = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x29fa22.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x337a83, _0x209904, _0x56b4ce = {}) {
      let _0x425538 = _0x56b4ce.padding || "0",
        _0xd1a695 = _0x56b4ce.mode || "l",
        _0x151f91 = String(_0x337a83),
        _0xb2fd92 = _0x209904 > _0x151f91.length ? _0x209904 - _0x151f91.length : 0,
        _0x55f066 = "";
      for (let _0x526d03 = 0; _0x526d03 < _0xb2fd92; _0x526d03++) {
        _0x55f066 += _0x425538;
      }
      _0xd1a695 == "r" ? _0x151f91 = _0x151f91 + _0x55f066 : _0x151f91 = _0x55f066 + _0x151f91;
      return _0x151f91;
    }
    json2str(_0x5b4851, _0x5b5f1a, _0x5a1b24 = false) {
      let _0x18404e = [];
      for (let _0x2d3ba8 of Object.keys(_0x5b4851).sort()) {
        let _0x5c8550 = _0x5b4851[_0x2d3ba8];
        if (_0x5c8550 && _0x5a1b24) {
          _0x5c8550 = encodeURIComponent(_0x5c8550);
        }
        _0x18404e.push(_0x2d3ba8 + "=" + _0x5c8550);
      }
      return _0x18404e.join(_0x5b5f1a);
    }
    str2json(_0x3abfd8, _0x3866af = false) {
      let _0x584956 = {};
      for (let _0x85f22 of _0x3abfd8.split("&")) {
        if (!_0x85f22) {
          continue;
        }
        let _0x153485 = _0x85f22.indexOf("=");
        if (_0x153485 == -1) {
          continue;
        }
        let _0x53ef79 = _0x85f22.substr(0, _0x153485),
          _0x3ac2ec = _0x85f22.substr(_0x153485 + 1);
        if (_0x3866af) {
          _0x3ac2ec = decodeURIComponent(_0x3ac2ec);
        }
        _0x584956[_0x53ef79] = _0x3ac2ec;
      }
      return _0x584956;
    }
    randomPattern(_0x1a0c19, _0x40a06b = "abcdef0123456789") {
      let _0x563d78 = "";
      for (let _0x29c852 of _0x1a0c19) {
        if (_0x29c852 == "x") {
          _0x563d78 += _0x40a06b.charAt(Math.floor(Math.random() * _0x40a06b.length));
        } else {
          _0x29c852 == "X" ? _0x563d78 += _0x40a06b.charAt(Math.floor(Math.random() * _0x40a06b.length)).toUpperCase() : _0x563d78 += _0x29c852;
        }
      }
      return _0x563d78;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x3c2487, _0x2eba06 = "abcdef0123456789") {
      let _0x16ad31 = "";
      for (let _0x52fa23 = 0; _0x52fa23 < _0x3c2487; _0x52fa23++) {
        _0x16ad31 += _0x2eba06.charAt(Math.floor(Math.random() * _0x2eba06.length));
      }
      return _0x16ad31;
    }
    randomList(_0xf8f44e) {
      let _0x492e8d = Math.floor(Math.random() * _0xf8f44e.length);
      return _0xf8f44e[_0x492e8d];
    }
    wait(_0x5429ba) {
      return new Promise(_0x162198 => setTimeout(_0x162198, _0x5429ba));
    }
    async exitNow() {
      await this.showmsg();
      let _0x2acd34 = Date.now(),
        _0x4fee88 = (_0x2acd34 - this.startTime) / 1000;
      this.log("");
      const _0x11ce20 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4fee88 + "秒", _0x11ce20);
      process.exit(0);
    }
    normalize_time(_0x7a5215, _0x4c3e3e = {}) {
      let _0x3284a9 = _0x4c3e3e.len || this.default_timestamp_len;
      _0x7a5215 = _0x7a5215.toString();
      let _0x38be00 = _0x7a5215.length;
      while (_0x38be00 < _0x3284a9) {
        _0x7a5215 += "0";
      }
      _0x38be00 > _0x3284a9 && (_0x7a5215 = _0x7a5215.slice(0, 13));
      return parseInt(_0x7a5215);
    }
    async wait_until(_0x2608e9, _0x401d27 = {}) {
      let _0x5d3b2f = _0x401d27.logger || this,
        _0x82fc7b = _0x401d27.interval || this.default_wait_interval,
        _0x33517d = _0x401d27.limit || this.default_wait_limit,
        _0x312171 = _0x401d27.ahead || this.default_wait_ahead;
      if (typeof _0x2608e9 == "string" && _0x2608e9.includes(":")) {
        if (_0x2608e9.includes("-")) {
          _0x2608e9 = new Date(_0x2608e9).getTime();
        } else {
          let _0x5b1341 = this.time("yyyy-MM-dd ");
          _0x2608e9 = new Date(_0x5b1341 + _0x2608e9).getTime();
        }
      }
      let _0x43a7a6 = this.normalize_time(_0x2608e9) - _0x312171,
        _0x1f0ca9 = this.time("hh:mm:ss.S", _0x43a7a6),
        _0x528b60 = Date.now();
      _0x528b60 > _0x43a7a6 && (_0x43a7a6 += 86400000);
      let _0x3daa2c = _0x43a7a6 - _0x528b60;
      if (_0x3daa2c > _0x33517d) {
        const _0x3797a3 = {
          time: true
        };
        _0x5d3b2f.log("离目标时间[" + _0x1f0ca9 + "]大于" + _0x33517d / 1000 + "秒,不等待", _0x3797a3);
      } else {
        const _0x970450 = {
          time: true
        };
        _0x5d3b2f.log("离目标时间[" + _0x1f0ca9 + "]还有" + _0x3daa2c / 1000 + "秒,开始等待", _0x970450);
        while (_0x3daa2c > 0) {
          let _0x38b4b8 = Math.min(_0x3daa2c, _0x82fc7b);
          await this.wait(_0x38b4b8);
          _0x528b60 = Date.now();
          _0x3daa2c = _0x43a7a6 - _0x528b60;
        }
        const _0xda742a = {
          time: true
        };
        _0x5d3b2f.log("已完成等待", _0xda742a);
      }
    }
    async wait_gap_interval(_0xdb9007, _0x5f3e98) {
      let _0x494ece = Date.now() - _0xdb9007;
      _0x494ece < _0x5f3e98 && (await this.wait(_0x5f3e98 - _0x494ece));
    }
  }(_0x3afb97);
}