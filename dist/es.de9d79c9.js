// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bzwGY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0cb4081cde9d79c9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jZ4Zq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>(0, _pureJs.BarcodeDetector));
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _pureJs.setZXingModuleOverrides));
var _sideEffectsJs = require("./side-effects.js");
var _pureJs = require("./pure.js");

},{"./side-effects.js":"9T0Pe","./pure.js":"kpwD3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9T0Pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _pureJs.setZXingModuleOverrides));
var _pureJs = require("./pure.js");
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = (0, _pureJs.BarcodeDetector));

},{"./pure.js":"kpwD3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpwD3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>go);
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>vo);
var process = require("777cf5a1c5cdae66");
var global = arguments[3];
var Je = (i, f, y)=>{
    if (!f.has(i)) throw TypeError("Cannot " + y);
};
var ue = (i, f, y)=>(Je(i, f, "read from private field"), y ? y.call(i) : f.get(i)), Ke = (i, f, y)=>{
    if (f.has(i)) throw TypeError("Cannot add the same private member more than once");
    f instanceof WeakSet ? f.add(i) : f.set(i, y);
}, tr = (i, f, y, c)=>(Je(i, f, "write to private field"), c ? c.call(i, y) : f.set(i, y), y);
const er = [
    "Aztec",
    "Codabar",
    "Code128",
    "Code39",
    "Code93",
    "DataBar",
    "DataBarExpanded",
    "DataMatrix",
    "DXFilmEdge",
    "EAN-13",
    "EAN-8",
    "ITF",
    "Linear-Codes",
    "Matrix-Codes",
    "MaxiCode",
    "MicroQRCode",
    "None",
    "PDF417",
    "QRCode",
    "rMQRCode",
    "UPC-A",
    "UPC-E"
];
function Ua(i) {
    return i.join("|");
}
function La(i) {
    const f = rr(i);
    let y = 0, c = er.length - 1;
    for(; y <= c;){
        const g = Math.floor((y + c) / 2), $ = er[g], H = rr($);
        if (H === f) return $;
        H < f ? y = g + 1 : c = g - 1;
    }
    return "None";
}
function rr(i) {
    return i.toLowerCase().replace(/_-\[\]/g, "");
}
function Va(i, f) {
    return i.Binarizer[f];
}
function Ya(i, f) {
    return i.CharacterSet[f];
}
const za = [
    "Text",
    "Binary",
    "Mixed",
    "GS1",
    "ISO15434",
    "UnknownECI"
];
function Na(i) {
    return za[i.value];
}
function Ga(i, f) {
    return i.EanAddOnSymbol[f];
}
function Xa(i, f) {
    return i.TextMode[f];
}
const dt = {
    formats: [],
    tryHarder: !0,
    tryRotate: !0,
    tryInvert: !0,
    tryDownscale: !0,
    binarizer: "LocalAverage",
    isPure: !1,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    tryCode39ExtendedMode: !1,
    validateCode39CheckSum: !1,
    validateITFCheckSum: !1,
    returnCodabarStartEnd: !1,
    returnErrors: !1,
    eanAddOnSymbol: "Read",
    textMode: "Plain",
    characterSet: "Unknown"
};
function ar(i, f) {
    return {
        ...f,
        formats: Ua(f.formats),
        binarizer: Va(i, f.binarizer),
        eanAddOnSymbol: Ga(i, f.eanAddOnSymbol),
        textMode: Xa(i, f.textMode),
        characterSet: Ya(i, f.characterSet)
    };
}
function or(i) {
    return {
        ...i,
        format: La(i.format),
        eccLevel: i.eccLevel,
        contentType: Na(i.contentType)
    };
}
const qa = {
    locateFile: (i, f)=>{
        const y = i.match(/_(.+?)\.wasm$/);
        return y ? `https://fastly.jsdelivr.net/npm/zxing-wasm@1.2.11/dist/${y[1]}/${i}` : f + i;
    }
};
let ce = /* @__PURE__ */ new WeakMap();
function le(i, f) {
    var y;
    const c = ce.get(i);
    if (c != null && c.modulePromise && f === void 0) return c.modulePromise;
    const g = (y = c == null ? void 0 : c.moduleOverrides) != null ? y : qa, $ = i({
        ...g
    });
    return ce.set(i, {
        moduleOverrides: g,
        modulePromise: $
    }), $;
}
function Qa(i, f) {
    ce.set(i, {
        moduleOverrides: f
    });
}
async function Za(i, f, y = dt) {
    const c = {
        ...dt,
        ...y
    }, g = await le(i), { size: $ } = f, H = new Uint8Array(await f.arrayBuffer()), U = g._malloc($);
    g.HEAPU8.set(H, U);
    const V = g.readBarcodesFromImage(U, $, ar(g, c));
    g._free(U);
    const B = [];
    for(let L = 0; L < V.size(); ++L)B.push(or(V.get(L)));
    return B;
}
async function Ja(i, f, y = dt) {
    const c = {
        ...dt,
        ...y
    }, g = await le(i), { data: $, width: H, height: U, data: { byteLength: V } } = f, B = g._malloc(V);
    g.HEAPU8.set($, B);
    const L = g.readBarcodesFromPixmap(B, H, U, ar(g, c));
    g._free(B);
    const Y = [];
    for(let S = 0; S < L.size(); ++S)Y.push(or(L.get(S)));
    return Y;
}
({
    ...dt,
    formats: [
        ...dt.formats
    ]
});
var Ut = (()=>{
    var i = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
    return function(f = {}) {
        var y, c = f, g, $;
        c.ready = new Promise((e, t)=>{
            g = e, $ = t;
        });
        var H = Object.assign({}, c), U = "./this.program", V = typeof window == "object", B = typeof Bun < "u", L = typeof ((y = globalThis.WebAssembly) == null ? void 0 : y.instantiate) == "function", Y = typeof importScripts == "function";
        typeof process == "object" && typeof process.versions == "object" && process.versions.node;
        var S = "";
        function ht(e) {
            return c.locateFile ? c.locateFile(e, S) : S + e;
        }
        var at;
        (V || Y || B) && (Y ? S = self.location.href : typeof document < "u" && document.currentScript && (S = document.currentScript.src), i && (S = i), S.startsWith("blob:") ? S = "" : S = S.substr(0, S.replace(/[?#].*/, "").lastIndexOf("/") + 1), Y && (at = (e)=>{
            var t = new XMLHttpRequest();
            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
        }));
        var _t = c.print || console.log.bind(console), K = c.printErr || console.error.bind(console);
        Object.assign(c, H), H = null, c.arguments && c.arguments, c.thisProgram && (U = c.thisProgram), c.quit && c.quit;
        var tt;
        c.wasmBinary && (tt = c.wasmBinary);
        var Tt, de = !1, z, R, ot, ft, W, _, he, fe;
        function pe() {
            var e = Tt.buffer;
            c.HEAP8 = z = new Int8Array(e), c.HEAP16 = ot = new Int16Array(e), c.HEAPU8 = R = new Uint8Array(e), c.HEAPU16 = ft = new Uint16Array(e), c.HEAP32 = W = new Int32Array(e), c.HEAPU32 = _ = new Uint32Array(e), c.HEAPF32 = he = new Float32Array(e), c.HEAPF64 = fe = new Float64Array(e);
        }
        var me = [], ye = [], ve = [];
        function yr() {
            if (c.preRun) for(typeof c.preRun == "function" && (c.preRun = [
                c.preRun
            ]); c.preRun.length;)wr(c.preRun.shift());
            Vt(me);
        }
        function vr() {
            Vt(ye);
        }
        function gr() {
            if (c.postRun) for(typeof c.postRun == "function" && (c.postRun = [
                c.postRun
            ]); c.postRun.length;)br(c.postRun.shift());
            Vt(ve);
        }
        function wr(e) {
            me.unshift(e);
        }
        function $r(e) {
            ye.unshift(e);
        }
        function br(e) {
            ve.unshift(e);
        }
        var et = 0, pt = null;
        function Cr(e) {
            var t;
            et++, (t = c.monitorRunDependencies) === null || t === void 0 || t.call(c, et);
        }
        function _r(e) {
            var t;
            if (et--, (t = c.monitorRunDependencies) === null || t === void 0 || t.call(c, et), et == 0 && pt) {
                var r = pt;
                pt = null, r();
            }
        }
        function Lt(e) {
            var t;
            (t = c.onAbort) === null || t === void 0 || t.call(c, e), e = "Aborted(" + e + ")", K(e), de = !0, e += ". Build with -sASSERTIONS for more info.";
            var r = new WebAssembly.RuntimeError(e);
            throw $(r), r;
        }
        var Tr = "data:application/octet-stream;base64,", ge = (e)=>e.startsWith(Tr), it;
        it = "zxing_reader.wasm", ge(it) || (it = ht(it));
        function we(e) {
            if (e == it && tt) return new Uint8Array(tt);
            if (at) return at(e);
            throw "both async and sync fetching of the wasm failed";
        }
        function Pr(e) {
            return !tt && (V || Y || B || L) && typeof fetch == "function" ? fetch(e, {
                credentials: "same-origin"
            }).then((t)=>{
                if (!t.ok) throw `failed to load wasm binary file at '${e}'`;
                return t.arrayBuffer();
            }).catch(()=>we(e)) : Promise.resolve().then(()=>we(e));
        }
        function $e(e, t, r) {
            return Pr(e).then((n)=>WebAssembly.instantiate(n, t)).then(r, (n)=>{
                K(`failed to asynchronously prepare wasm: ${n}`), Lt(n);
            });
        }
        function Er(e, t, r, n) {
            return !e && typeof WebAssembly.instantiateStreaming == "function" && !ge(t) && typeof fetch == "function" ? fetch(t, {
                credentials: "same-origin"
            }).then((a)=>{
                var o = WebAssembly.instantiateStreaming(a, r);
                return o.then(n, function(s) {
                    return K(`wasm streaming compile failed: ${s}`), K("falling back to ArrayBuffer instantiation"), $e(t, r, n);
                });
            }) : $e(t, r, n);
        }
        function Ar() {
            var e = {
                a: wa
            };
            function t(n, a) {
                return A = n.exports, Tt = A.ma, pe(), De = A.qa, $r(A.na), _r(), A;
            }
            Cr();
            function r(n) {
                t(n.instance);
            }
            if (c.instantiateWasm) try {
                return c.instantiateWasm(e, t);
            } catch (n) {
                K(`Module.instantiateWasm callback failed with error: ${n}`), $(n);
            }
            return Er(tt, it, e, r).catch($), {};
        }
        var Vt = (e)=>{
            for(; e.length > 0;)e.shift()(c);
        };
        c.noExitRuntime;
        var Pt = [], Et = 0, Fr = (e)=>{
            var t = new Yt(e);
            return t.get_caught() || (t.set_caught(!0), Et--), t.set_rethrown(!1), Pt.push(t), Ye(t.excPtr), t.get_exception_ptr();
        }, q = 0, Dr = ()=>{
            T(0, 0);
            var e = Pt.pop();
            Ve(e.excPtr), q = 0;
        };
        class Yt {
            constructor(t){
                this.excPtr = t, this.ptr = t - 24;
            }
            set_type(t) {
                _[this.ptr + 4 >> 2] = t;
            }
            get_type() {
                return _[this.ptr + 4 >> 2];
            }
            set_destructor(t) {
                _[this.ptr + 8 >> 2] = t;
            }
            get_destructor() {
                return _[this.ptr + 8 >> 2];
            }
            set_caught(t) {
                t = t ? 1 : 0, z[this.ptr + 12] = t;
            }
            get_caught() {
                return z[this.ptr + 12] != 0;
            }
            set_rethrown(t) {
                t = t ? 1 : 0, z[this.ptr + 13] = t;
            }
            get_rethrown() {
                return z[this.ptr + 13] != 0;
            }
            init(t, r) {
                this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
            }
            set_adjusted_ptr(t) {
                _[this.ptr + 16 >> 2] = t;
            }
            get_adjusted_ptr() {
                return _[this.ptr + 16 >> 2];
            }
            get_exception_ptr() {
                var t = Ne(this.get_type());
                if (t) return _[this.excPtr >> 2];
                var r = this.get_adjusted_ptr();
                return r !== 0 ? r : this.excPtr;
            }
        }
        var xr = (e)=>{
            throw q || (q = e), q;
        }, zt = (e)=>{
            var t = q;
            if (!t) return Ct(0), 0;
            var r = new Yt(t);
            r.set_adjusted_ptr(t);
            var n = r.get_type();
            if (!n) return Ct(0), t;
            for(var a in e){
                var o = e[a];
                if (o === 0 || o === n) break;
                var s = r.ptr + 16;
                if (ze(o, n, s)) return Ct(o), t;
            }
            return Ct(n), t;
        }, Or = ()=>zt([]), Mr = (e)=>zt([
                e
            ]), Sr = (e, t)=>zt([
                e,
                t
            ]), jr = ()=>{
            var e = Pt.pop();
            e || Lt("no exception to throw");
            var t = e.excPtr;
            throw e.get_rethrown() || (Pt.push(e), e.set_rethrown(!0), e.set_caught(!1), Et++), q = t, q;
        }, Ir = (e, t, r)=>{
            var n = new Yt(e);
            throw n.init(t, r), q = e, Et++, q;
        }, Rr = ()=>Et, At = {}, Nt = (e)=>{
            for(; e.length;){
                var t = e.pop(), r = e.pop();
                r(t);
            }
        };
        function mt(e) {
            return this.fromWireType(_[e >> 2]);
        }
        var st = {}, rt = {}, Ft = {}, be, Dt = (e)=>{
            throw new be(e);
        }, nt = (e, t, r)=>{
            e.forEach(function(u) {
                Ft[u] = t;
            });
            function n(u) {
                var l = r(u);
                l.length !== e.length && Dt("Mismatched type converter count");
                for(var h = 0; h < e.length; ++h)G(e[h], l[h]);
            }
            var a = new Array(t.length), o = [], s = 0;
            t.forEach((u, l)=>{
                rt.hasOwnProperty(u) ? a[l] = rt[u] : (o.push(u), st.hasOwnProperty(u) || (st[u] = []), st[u].push(()=>{
                    a[l] = rt[u], ++s, s === o.length && n(a);
                }));
            }), o.length === 0 && n(a);
        }, Wr = (e)=>{
            var t = At[e];
            delete At[e];
            var r = t.rawConstructor, n = t.rawDestructor, a = t.fields, o = a.map((s)=>s.getterReturnType).concat(a.map((s)=>s.setterArgumentType));
            nt([
                e
            ], o, (s)=>{
                var u = {};
                return a.forEach((l, h)=>{
                    var p = l.fieldName, w = s[h], v = l.getter, b = l.getterContext, x = s[h + a.length], k = l.setter, P = l.setterContext;
                    u[p] = {
                        read: (j)=>w.fromWireType(v(b, j)),
                        write: (j, d)=>{
                            var m = [];
                            k(P, j, x.toWireType(m, d)), Nt(m);
                        }
                    };
                }), [
                    {
                        name: t.name,
                        fromWireType: (l)=>{
                            var h = {};
                            for(var p in u)h[p] = u[p].read(l);
                            return n(l), h;
                        },
                        toWireType: (l, h)=>{
                            for(var p in u)if (!(p in h)) throw new TypeError(`Missing field: "${p}"`);
                            var w = r();
                            for(p in u)u[p].write(w, h[p]);
                            return l !== null && l.push(n, w), w;
                        },
                        argPackAdvance: X,
                        readValueFromPointer: mt,
                        destructorFunction: n
                    }
                ];
            });
        }, kr = (e, t, r, n, a)=>{}, Hr = ()=>{
            for(var e = new Array(256), t = 0; t < 256; ++t)e[t] = String.fromCharCode(t);
            Ce = e;
        }, Ce, I = (e)=>{
            for(var t = "", r = e; R[r];)t += Ce[R[r++]];
            return t;
        }, ut, C = (e)=>{
            throw new ut(e);
        };
        function Br(e, t) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var n = t.name;
            if (e || C(`type "${n}" must have a positive integer typeid pointer`), rt.hasOwnProperty(e)) {
                if (r.ignoreDuplicateRegistrations) return;
                C(`Cannot register type '${n}' twice`);
            }
            if (rt[e] = t, delete Ft[e], st.hasOwnProperty(e)) {
                var a = st[e];
                delete st[e], a.forEach((o)=>o());
            }
        }
        function G(e, t) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            return Br(e, t, r);
        }
        var X = 8, Ur = (e, t, r, n)=>{
            t = I(t), G(e, {
                name: t,
                fromWireType: function(a) {
                    return !!a;
                },
                toWireType: function(a, o) {
                    return o ? r : n;
                },
                argPackAdvance: X,
                readValueFromPointer: function(a) {
                    return this.fromWireType(R[a]);
                },
                destructorFunction: null
            });
        }, Lr = (e)=>({
                count: e.count,
                deleteScheduled: e.deleteScheduled,
                preservePointerOnDelete: e.preservePointerOnDelete,
                ptr: e.ptr,
                ptrType: e.ptrType,
                smartPtr: e.smartPtr,
                smartPtrType: e.smartPtrType
            }), Gt = (e)=>{
            function t(r) {
                return r.$$.ptrType.registeredClass.name;
            }
            C(t(e) + " instance already deleted");
        }, Xt = !1, _e = (e)=>{}, Vr = (e)=>{
            e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
        }, Te = (e)=>{
            e.count.value -= 1;
            var t = e.count.value === 0;
            t && Vr(e);
        }, Pe = (e, t, r)=>{
            if (t === r) return e;
            if (r.baseClass === void 0) return null;
            var n = Pe(e, t, r.baseClass);
            return n === null ? null : r.downcast(n);
        }, Ee = {}, Yr = ()=>Object.keys(gt).length, zr = ()=>{
            var e = [];
            for(var t in gt)gt.hasOwnProperty(t) && e.push(gt[t]);
            return e;
        }, yt = [], qt = ()=>{
            for(; yt.length;){
                var e = yt.pop();
                e.$$.deleteScheduled = !1, e.delete();
            }
        }, vt, Nr = (e)=>{
            vt = e, yt.length && vt && vt(qt);
        }, Gr = ()=>{
            c.getInheritedInstanceCount = Yr, c.getLiveInheritedInstances = zr, c.flushPendingDeletes = qt, c.setDelayFunction = Nr;
        }, gt = {}, Xr = (e, t)=>{
            for(t === void 0 && C("ptr should not be undefined"); e.baseClass;)t = e.upcast(t), e = e.baseClass;
            return t;
        }, qr = (e, t)=>(t = Xr(e, t), gt[t]), xt = (e, t)=>{
            (!t.ptrType || !t.ptr) && Dt("makeClassHandle requires ptr and ptrType");
            var r = !!t.smartPtrType, n = !!t.smartPtr;
            return r !== n && Dt("Both smartPtrType and smartPtr must be specified"), t.count = {
                value: 1
            }, wt(Object.create(e, {
                $$: {
                    value: t,
                    writable: !0
                }
            }));
        };
        function Qr(e) {
            var t = this.getPointee(e);
            if (!t) return this.destructor(e), null;
            var r = qr(this.registeredClass, t);
            if (r !== void 0) {
                if (r.$$.count.value === 0) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
                var n = r.clone();
                return this.destructor(e), n;
            }
            function a() {
                return this.isSmartPointer ? xt(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e
                }) : xt(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: e
                });
            }
            var o = this.registeredClass.getActualType(t), s = Ee[o];
            if (!s) return a.call(this);
            var u;
            this.isConst ? u = s.constPointerType : u = s.pointerType;
            var l = Pe(t, this.registeredClass, u.registeredClass);
            return l === null ? a.call(this) : this.isSmartPointer ? xt(u.registeredClass.instancePrototype, {
                ptrType: u,
                ptr: l,
                smartPtrType: this,
                smartPtr: e
            }) : xt(u.registeredClass.instancePrototype, {
                ptrType: u,
                ptr: l
            });
        }
        var wt = (e)=>typeof FinalizationRegistry > "u" ? (wt = (t)=>t, e) : (Xt = new FinalizationRegistry((t)=>{
                Te(t.$$);
            }), wt = (t)=>{
                var r = t.$$, n = !!r.smartPtr;
                if (n) {
                    var a = {
                        $$: r
                    };
                    Xt.register(t, a, t);
                }
                return t;
            }, _e = (t)=>Xt.unregister(t), wt(e)), Zr = ()=>{
            Object.assign(Ot.prototype, {
                isAliasOf (e) {
                    if (!(this instanceof Ot) || !(e instanceof Ot)) return !1;
                    var t = this.$$.ptrType.registeredClass, r = this.$$.ptr;
                    e.$$ = e.$$;
                    for(var n = e.$$.ptrType.registeredClass, a = e.$$.ptr; t.baseClass;)r = t.upcast(r), t = t.baseClass;
                    for(; n.baseClass;)a = n.upcast(a), n = n.baseClass;
                    return t === n && r === a;
                },
                clone () {
                    if (this.$$.ptr || Gt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                    var e = wt(Object.create(Object.getPrototypeOf(this), {
                        $$: {
                            value: Lr(this.$$)
                        }
                    }));
                    return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
                },
                delete () {
                    this.$$.ptr || Gt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && C("Object already scheduled for deletion"), _e(this), Te(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
                },
                isDeleted () {
                    return !this.$$.ptr;
                },
                deleteLater () {
                    return this.$$.ptr || Gt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && C("Object already scheduled for deletion"), yt.push(this), yt.length === 1 && vt && vt(qt), this.$$.deleteScheduled = !0, this;
                }
            });
        };
        function Ot() {}
        var $t = (e, t)=>Object.defineProperty(t, "name", {
                value: e
            }), Ae = (e, t, r)=>{
            if (e[t].overloadTable === void 0) {
                var n = e[t];
                e[t] = function() {
                    for(var a = arguments.length, o = new Array(a), s = 0; s < a; s++)o[s] = arguments[s];
                    return e[t].overloadTable.hasOwnProperty(o.length) || C(`Function '${r}' called with an invalid number of arguments (${o.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[o.length].apply(this, o);
                }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
            }
        }, Qt = (e, t, r)=>{
            c.hasOwnProperty(e) ? ((r === void 0 || c[e].overloadTable !== void 0 && c[e].overloadTable[r] !== void 0) && C(`Cannot register public name '${e}' twice`), Ae(c, e, e), c.hasOwnProperty(r) && C(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), c[e].overloadTable[r] = t) : (c[e] = t, r !== void 0 && (c[e].numArguments = r));
        }, Jr = 48, Kr = 57, tn = (e)=>{
            if (e === void 0) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= Jr && t <= Kr ? `_${e}` : e;
        };
        function en(e, t, r, n, a, o, s, u) {
            this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = o, this.upcast = s, this.downcast = u, this.pureVirtualFunctions = [];
        }
        var Zt = (e, t, r)=>{
            for(; t !== r;)t.upcast || C(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
            return e;
        };
        function rn(e, t) {
            if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), 0;
            t.$$ || C(`Cannot pass "${ne(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`);
            var r = t.$$.ptrType.registeredClass, n = Zt(t.$$.ptr, r, this.registeredClass);
            return n;
        }
        function nn(e, t) {
            var r;
            if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
            (!t || !t.$$) && C(`Cannot pass "${ne(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && C(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
            var n = t.$$.ptrType.registeredClass;
            if (r = Zt(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch(t.$$.smartPtr === void 0 && C("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
                case 0:
                    t.$$.smartPtrType === this ? r = t.$$.smartPtr : C(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
                    break;
                case 1:
                    r = t.$$.smartPtr;
                    break;
                case 2:
                    if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                    else {
                        var a = t.clone();
                        r = this.rawShare(r, Z.toHandle(()=>a.delete())), e !== null && e.push(this.rawDestructor, r);
                    }
                    break;
                default:
                    C("Unsupporting sharing policy");
            }
            return r;
        }
        function an(e, t) {
            if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), 0;
            t.$$ || C(`Cannot pass "${ne(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && C(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
            var r = t.$$.ptrType.registeredClass, n = Zt(t.$$.ptr, r, this.registeredClass);
            return n;
        }
        var on = ()=>{
            Object.assign(Mt.prototype, {
                getPointee (e) {
                    return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
                },
                destructor (e) {
                    var t;
                    (t = this.rawDestructor) === null || t === void 0 || t.call(this, e);
                },
                argPackAdvance: X,
                readValueFromPointer: mt,
                fromWireType: Qr
            });
        };
        function Mt(e, t, r, n, a, o, s, u, l, h, p) {
            this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = o, this.sharingPolicy = s, this.rawGetPointee = u, this.rawConstructor = l, this.rawShare = h, this.rawDestructor = p, !a && t.baseClass === void 0 ? n ? (this.toWireType = rn, this.destructorFunction = null) : (this.toWireType = an, this.destructorFunction = null) : this.toWireType = nn;
        }
        var Fe = (e, t, r)=>{
            c.hasOwnProperty(e) || Dt("Replacing nonexistent public symbol"), c[e].overloadTable !== void 0 && r !== void 0 ? c[e].overloadTable[r] = t : (c[e] = t, c[e].argCount = r);
        }, sn = (e, t, r)=>{
            var n = c["dynCall_" + e];
            return n(t, ...r);
        }, St = [], De, E = (e)=>{
            var t = St[e];
            return t || (e >= St.length && (St.length = e + 1), St[e] = t = De.get(e)), t;
        }, un = function(e, t) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if (e.includes("j")) return sn(e, t, r);
            var n = E(t)(...r);
            return n;
        }, cn = (e, t)=>function() {
                for(var r = arguments.length, n = new Array(r), a = 0; a < r; a++)n[a] = arguments[a];
                return un(e, t, n);
            }, N = (e, t)=>{
            e = I(e);
            function r() {
                return e.includes("j") ? cn(e, t) : E(t);
            }
            var n = r();
            return typeof n != "function" && C(`unknown function pointer with signature ${e}: ${t}`), n;
        }, ln = (e, t)=>{
            var r = $t(t, function(n) {
                this.name = t, this.message = n;
                var a = new Error(n).stack;
                a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
            }, r;
        }, xe, Oe = (e)=>{
            var t = Le(e), r = I(t);
            return J(t), r;
        }, jt = (e, t)=>{
            var r = [], n = {};
            function a(o) {
                if (!n[o] && !rt[o]) {
                    if (Ft[o]) {
                        Ft[o].forEach(a);
                        return;
                    }
                    r.push(o), n[o] = !0;
                }
            }
            throw t.forEach(a), new xe(`${e}: ` + r.map(Oe).join([
                ", "
            ]));
        }, dn = (e, t, r, n, a, o, s, u, l, h, p, w, v)=>{
            p = I(p), o = N(a, o), u && (u = N(s, u)), h && (h = N(l, h)), v = N(w, v);
            var b = tn(p);
            Qt(b, function() {
                jt(`Cannot construct ${p} due to unbound types`, [
                    n
                ]);
            }), nt([
                e,
                t,
                r
            ], n ? [
                n
            ] : [], (x)=>{
                x = x[0];
                var k, P;
                n ? (k = x.registeredClass, P = k.instancePrototype) : P = Ot.prototype;
                var j = $t(p, function() {
                    if (Object.getPrototypeOf(this) !== d) throw new ut("Use 'new' to construct " + p);
                    if (m.constructor_body === void 0) throw new ut(p + " has no accessible constructor");
                    for(var Qe = arguments.length, kt = new Array(Qe), Ht = 0; Ht < Qe; Ht++)kt[Ht] = arguments[Ht];
                    var Ze = m.constructor_body[kt.length];
                    if (Ze === void 0) throw new ut(`Tried to invoke ctor of ${p} with invalid number of parameters (${kt.length}) - expected (${Object.keys(m.constructor_body).toString()}) parameters instead!`);
                    return Ze.apply(this, kt);
                }), d = Object.create(P, {
                    constructor: {
                        value: j
                    }
                });
                j.prototype = d;
                var m = new en(p, j, d, v, k, o, u, h);
                if (m.baseClass) {
                    var O, M;
                    (M = (O = m.baseClass).__derivedClasses) !== null && M !== void 0 || (O.__derivedClasses = []), m.baseClass.__derivedClasses.push(m);
                }
                var ct = new Mt(p, m, !0, !1, !1), Wt = new Mt(p + "*", m, !1, !1, !1), qe = new Mt(p + " const*", m, !1, !0, !1);
                return Ee[e] = {
                    pointerType: Wt,
                    constPointerType: qe
                }, Fe(b, j), [
                    ct,
                    Wt,
                    qe
                ];
            });
        }, Jt = (e, t)=>{
            for(var r = [], n = 0; n < e; n++)r.push(_[t + n * 4 >> 2]);
            return r;
        };
        function hn(e) {
            for(var t = 1; t < e.length; ++t)if (e[t] !== null && e[t].destructorFunction === void 0) return !0;
            return !1;
        }
        function Kt(e, t, r, n, a, o) {
            var s = t.length;
            s < 2 && C("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var u = t[1] !== null && r !== null, l = hn(t), h = t[0].name !== "void", p = s - 2, w = new Array(p), v = [], b = [], x = function() {
                arguments.length !== p && C(`function ${e} called with ${arguments.length} arguments, expected ${p}`), b.length = 0;
                var k;
                v.length = u ? 2 : 1, v[0] = a, u && (k = t[1].toWireType(b, this), v[1] = k);
                for(var P = 0; P < p; ++P)w[P] = t[P + 2].toWireType(b, P < 0 || arguments.length <= P ? void 0 : arguments[P]), v.push(w[P]);
                var j = n(...v);
                function d(m) {
                    if (l) Nt(b);
                    else for(var O = u ? 1 : 2; O < t.length; O++){
                        var M = O === 1 ? k : w[O - 2];
                        t[O].destructorFunction !== null && t[O].destructorFunction(M);
                    }
                    if (h) return t[0].fromWireType(m);
                }
                return d(j);
            };
            return $t(e, x);
        }
        var fn = (e, t, r, n, a, o)=>{
            var s = Jt(t, r);
            a = N(n, a), nt([], [
                e
            ], (u)=>{
                u = u[0];
                var l = `constructor ${u.name}`;
                if (u.registeredClass.constructor_body === void 0 && (u.registeredClass.constructor_body = []), u.registeredClass.constructor_body[t - 1] !== void 0) throw new ut(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${u.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                return u.registeredClass.constructor_body[t - 1] = ()=>{
                    jt(`Cannot construct ${u.name} due to unbound types`, s);
                }, nt([], s, (h)=>(h.splice(1, 0, null), u.registeredClass.constructor_body[t - 1] = Kt(l, h, null, a, o), [])), [];
            });
        }, Me = (e)=>{
            e = e.trim();
            const t = e.indexOf("(");
            return t !== -1 ? e.substr(0, t) : e;
        }, pn = (e, t, r, n, a, o, s, u, l)=>{
            var h = Jt(r, n);
            t = I(t), t = Me(t), o = N(a, o), nt([], [
                e
            ], (p)=>{
                p = p[0];
                var w = `${p.name}.${t}`;
                t.startsWith("@@") && (t = Symbol[t.substring(2)]), u && p.registeredClass.pureVirtualFunctions.push(t);
                function v() {
                    jt(`Cannot call ${w} due to unbound types`, h);
                }
                var b = p.registeredClass.instancePrototype, x = b[t];
                return x === void 0 || x.overloadTable === void 0 && x.className !== p.name && x.argCount === r - 2 ? (v.argCount = r - 2, v.className = p.name, b[t] = v) : (Ae(b, t, w), b[t].overloadTable[r - 2] = v), nt([], h, (k)=>{
                    var P = Kt(w, k, p, o, s);
                    return b[t].overloadTable === void 0 ? (P.argCount = r - 2, b[t] = P) : b[t].overloadTable[r - 2] = P, [];
                }), [];
            });
        }, te = [], Q = [], ee = (e)=>{
            e > 9 && --Q[e + 1] === 0 && (Q[e] = void 0, te.push(e));
        }, mn = ()=>Q.length / 2 - 5 - te.length, yn = ()=>{
            Q.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), c.count_emval_handles = mn;
        }, Z = {
            toValue: (e)=>(e || C("Cannot use deleted val. handle = " + e), Q[e]),
            toHandle: (e)=>{
                switch(e){
                    case void 0:
                        return 2;
                    case null:
                        return 4;
                    case !0:
                        return 6;
                    case !1:
                        return 8;
                    default:
                        {
                            const t = te.pop() || Q.length;
                            return Q[t] = e, Q[t + 1] = 1, t;
                        }
                }
            }
        }, vn = {
            name: "emscripten::val",
            fromWireType: (e)=>{
                var t = Z.toValue(e);
                return ee(e), t;
            },
            toWireType: (e, t)=>Z.toHandle(t),
            argPackAdvance: X,
            readValueFromPointer: mt,
            destructorFunction: null
        }, Se = (e)=>G(e, vn), gn = (e, t, r)=>{
            switch(t){
                case 1:
                    return r ? function(n) {
                        return this.fromWireType(z[n]);
                    } : function(n) {
                        return this.fromWireType(R[n]);
                    };
                case 2:
                    return r ? function(n) {
                        return this.fromWireType(ot[n >> 1]);
                    } : function(n) {
                        return this.fromWireType(ft[n >> 1]);
                    };
                case 4:
                    return r ? function(n) {
                        return this.fromWireType(W[n >> 2]);
                    } : function(n) {
                        return this.fromWireType(_[n >> 2]);
                    };
                default:
                    throw new TypeError(`invalid integer width (${t}): ${e}`);
            }
        }, wn = (e, t, r, n)=>{
            t = I(t);
            function a() {}
            a.values = {}, G(e, {
                name: t,
                constructor: a,
                fromWireType: function(o) {
                    return this.constructor.values[o];
                },
                toWireType: (o, s)=>s.value,
                argPackAdvance: X,
                readValueFromPointer: gn(t, r, n),
                destructorFunction: null
            }), Qt(t, a);
        }, re = (e, t)=>{
            var r = rt[e];
            return r === void 0 && C(`${t} has unknown type ${Oe(e)}`), r;
        }, $n = (e, t, r)=>{
            var n = re(e, "enum");
            t = I(t);
            var a = n.constructor, o = Object.create(n.constructor.prototype, {
                value: {
                    value: r
                },
                constructor: {
                    value: $t(`${n.name}_${t}`, function() {})
                }
            });
            a.values[r] = o, a[t] = o;
        }, ne = (e)=>{
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
        }, bn = (e, t)=>{
            switch(t){
                case 4:
                    return function(r) {
                        return this.fromWireType(he[r >> 2]);
                    };
                case 8:
                    return function(r) {
                        return this.fromWireType(fe[r >> 3]);
                    };
                default:
                    throw new TypeError(`invalid float width (${t}): ${e}`);
            }
        }, Cn = (e, t, r)=>{
            t = I(t), G(e, {
                name: t,
                fromWireType: (n)=>n,
                toWireType: (n, a)=>a,
                argPackAdvance: X,
                readValueFromPointer: bn(t, r),
                destructorFunction: null
            });
        }, _n = (e, t, r, n, a, o, s)=>{
            var u = Jt(t, r);
            e = I(e), e = Me(e), a = N(n, a), Qt(e, function() {
                jt(`Cannot call ${e} due to unbound types`, u);
            }, t - 1), nt([], u, (l)=>{
                var h = [
                    l[0],
                    null
                ].concat(l.slice(1));
                return Fe(e, Kt(e, h, null, a, o), t - 1), [];
            });
        }, Tn = (e, t, r)=>{
            switch(t){
                case 1:
                    return r ? (n)=>z[n] : (n)=>R[n];
                case 2:
                    return r ? (n)=>ot[n >> 1] : (n)=>ft[n >> 1];
                case 4:
                    return r ? (n)=>W[n >> 2] : (n)=>_[n >> 2];
                default:
                    throw new TypeError(`invalid integer width (${t}): ${e}`);
            }
        }, Pn = (e, t, r, n, a)=>{
            t = I(t);
            var o = (p)=>p;
            if (n === 0) {
                var s = 32 - 8 * r;
                o = (p)=>p << s >>> s;
            }
            var u = t.includes("unsigned"), l = (p, w)=>{}, h;
            u ? h = function(p, w) {
                return l(w, this.name), w >>> 0;
            } : h = function(p, w) {
                return l(w, this.name), w;
            }, G(e, {
                name: t,
                fromWireType: o,
                toWireType: h,
                argPackAdvance: X,
                readValueFromPointer: Tn(t, r, n !== 0),
                destructorFunction: null
            });
        }, En = (e, t, r)=>{
            var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array
            ], a = n[t];
            function o(s) {
                var u = _[s >> 2], l = _[s + 4 >> 2];
                return new a(z.buffer, l, u);
            }
            r = I(r), G(e, {
                name: r,
                fromWireType: o,
                argPackAdvance: X,
                readValueFromPointer: o
            }, {
                ignoreDuplicateRegistrations: !0
            });
        }, An = (e, t)=>{
            Se(e);
        }, je = (e, t, r, n)=>{
            if (!(n > 0)) return 0;
            for(var a = r, o = r + n - 1, s = 0; s < e.length; ++s){
                var u = e.charCodeAt(s);
                if (u >= 55296 && u <= 57343) {
                    var l = e.charCodeAt(++s);
                    u = 65536 + ((u & 1023) << 10) | l & 1023;
                }
                if (u <= 127) {
                    if (r >= o) break;
                    t[r++] = u;
                } else if (u <= 2047) {
                    if (r + 1 >= o) break;
                    t[r++] = 192 | u >> 6, t[r++] = 128 | u & 63;
                } else if (u <= 65535) {
                    if (r + 2 >= o) break;
                    t[r++] = 224 | u >> 12, t[r++] = 128 | u >> 6 & 63, t[r++] = 128 | u & 63;
                } else {
                    if (r + 3 >= o) break;
                    t[r++] = 240 | u >> 18, t[r++] = 128 | u >> 12 & 63, t[r++] = 128 | u >> 6 & 63, t[r++] = 128 | u & 63;
                }
            }
            return t[r] = 0, r - a;
        }, Fn = (e, t, r)=>je(e, R, t, r), Ie = (e)=>{
            for(var t = 0, r = 0; r < e.length; ++r){
                var n = e.charCodeAt(r);
                n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
            }
            return t;
        }, Re = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, We = (e, t, r)=>{
            for(var n = t + r, a = t; e[a] && !(a >= n);)++a;
            if (a - t > 16 && e.buffer && Re) return Re.decode(e.subarray(t, a));
            for(var o = ""; t < a;){
                var s = e[t++];
                if (!(s & 128)) {
                    o += String.fromCharCode(s);
                    continue;
                }
                var u = e[t++] & 63;
                if ((s & 224) == 192) {
                    o += String.fromCharCode((s & 31) << 6 | u);
                    continue;
                }
                var l = e[t++] & 63;
                if ((s & 240) == 224 ? s = (s & 15) << 12 | u << 6 | l : s = (s & 7) << 18 | u << 12 | l << 6 | e[t++] & 63, s < 65536) o += String.fromCharCode(s);
                else {
                    var h = s - 65536;
                    o += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
                }
            }
            return o;
        }, ae = (e, t)=>e ? We(R, e, t) : "", Dn = (e, t)=>{
            t = I(t);
            var r = t === "std::string";
            G(e, {
                name: t,
                fromWireType (n) {
                    var a = _[n >> 2], o = n + 4, s;
                    if (r) for(var u = o, l = 0; l <= a; ++l){
                        var h = o + l;
                        if (l == a || R[h] == 0) {
                            var p = h - u, w = ae(u, p);
                            s === void 0 ? s = w : (s += "\0", s += w), u = h + 1;
                        }
                    }
                    else {
                        for(var v = new Array(a), l = 0; l < a; ++l)v[l] = String.fromCharCode(R[o + l]);
                        s = v.join("");
                    }
                    return J(n), s;
                },
                toWireType (n, a) {
                    a instanceof ArrayBuffer && (a = new Uint8Array(a));
                    var o, s = typeof a == "string";
                    s || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || C("Cannot pass non-string to std::string"), r && s ? o = Ie(a) : o = a.length;
                    var u = se(4 + o + 1), l = u + 4;
                    if (_[u >> 2] = o, r && s) Fn(a, l, o + 1);
                    else if (s) for(var h = 0; h < o; ++h){
                        var p = a.charCodeAt(h);
                        p > 255 && (J(l), C("String has UTF-16 code units that do not fit in 8 bits")), R[l + h] = p;
                    }
                    else for(var h = 0; h < o; ++h)R[l + h] = a[h];
                    return n !== null && n.push(J, u), u;
                },
                argPackAdvance: X,
                readValueFromPointer: mt,
                destructorFunction (n) {
                    J(n);
                }
            });
        }, ke = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, xn = (e, t)=>{
            for(var r = e, n = r >> 1, a = n + t / 2; !(n >= a) && ft[n];)++n;
            if (r = n << 1, r - e > 32 && ke) return ke.decode(R.subarray(e, r));
            for(var o = "", s = 0; !(s >= t / 2); ++s){
                var u = ot[e + s * 2 >> 1];
                if (u == 0) break;
                o += String.fromCharCode(u);
            }
            return o;
        }, On = (e, t, r)=>{
            var n;
            if ((n = r) !== null && n !== void 0 || (r = 2147483647), r < 2) return 0;
            r -= 2;
            for(var a = t, o = r < e.length * 2 ? r / 2 : e.length, s = 0; s < o; ++s){
                var u = e.charCodeAt(s);
                ot[t >> 1] = u, t += 2;
            }
            return ot[t >> 1] = 0, t - a;
        }, Mn = (e)=>e.length * 2, Sn = (e, t)=>{
            for(var r = 0, n = ""; !(r >= t / 4);){
                var a = W[e + r * 4 >> 2];
                if (a == 0) break;
                if (++r, a >= 65536) {
                    var o = a - 65536;
                    n += String.fromCharCode(55296 | o >> 10, 56320 | o & 1023);
                } else n += String.fromCharCode(a);
            }
            return n;
        }, jn = (e, t, r)=>{
            var n;
            if ((n = r) !== null && n !== void 0 || (r = 2147483647), r < 4) return 0;
            for(var a = t, o = a + r - 4, s = 0; s < e.length; ++s){
                var u = e.charCodeAt(s);
                if (u >= 55296 && u <= 57343) {
                    var l = e.charCodeAt(++s);
                    u = 65536 + ((u & 1023) << 10) | l & 1023;
                }
                if (W[t >> 2] = u, t += 4, t + 4 > o) break;
            }
            return W[t >> 2] = 0, t - a;
        }, In = (e)=>{
            for(var t = 0, r = 0; r < e.length; ++r){
                var n = e.charCodeAt(r);
                n >= 55296 && n <= 57343 && ++r, t += 4;
            }
            return t;
        }, Rn = (e, t, r)=>{
            r = I(r);
            var n, a, o, s;
            t === 2 ? (n = xn, a = On, s = Mn, o = (u)=>ft[u >> 1]) : t === 4 && (n = Sn, a = jn, s = In, o = (u)=>_[u >> 2]), G(e, {
                name: r,
                fromWireType: (u)=>{
                    for(var l = _[u >> 2], h, p = u + 4, w = 0; w <= l; ++w){
                        var v = u + 4 + w * t;
                        if (w == l || o(v) == 0) {
                            var b = v - p, x = n(p, b);
                            h === void 0 ? h = x : (h += "\0", h += x), p = v + t;
                        }
                    }
                    return J(u), h;
                },
                toWireType: (u, l)=>{
                    typeof l != "string" && C(`Cannot pass non-string to C++ string type ${r}`);
                    var h = s(l), p = se(4 + h + t);
                    return _[p >> 2] = h / t, a(l, p + 4, h + t), u !== null && u.push(J, p), p;
                },
                argPackAdvance: X,
                readValueFromPointer: mt,
                destructorFunction (u) {
                    J(u);
                }
            });
        }, Wn = (e, t, r, n, a, o)=>{
            At[e] = {
                name: I(t),
                rawConstructor: N(r, n),
                rawDestructor: N(a, o),
                fields: []
            };
        }, kn = (e, t, r, n, a, o, s, u, l, h)=>{
            At[e].fields.push({
                fieldName: I(t),
                getterReturnType: r,
                getter: N(n, a),
                getterContext: o,
                setterArgumentType: s,
                setter: N(u, l),
                setterContext: h
            });
        }, Hn = (e, t)=>{
            t = I(t), G(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: ()=>{},
                toWireType: (r, n)=>{}
            });
        }, oe = [], Bn = (e, t, r, n)=>(e = oe[e], t = Z.toValue(t), e(null, t, r, n)), Un = {}, Ln = (e)=>{
            var t = Un[e];
            return t === void 0 ? I(e) : t;
        }, He = ()=>{
            if (typeof globalThis == "object") return globalThis;
            function e(t) {
                t.$$$embind_global$$$ = t;
                var r = typeof $$$embind_global$$$ == "object" && t.$$$embind_global$$$ == t;
                return r || delete t.$$$embind_global$$$, r;
            }
            if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && e(global) ? $$$embind_global$$$ = global : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
            throw Error("unable to get global object.");
        }, Vn = (e)=>e === 0 ? Z.toHandle(He()) : (e = Ln(e), Z.toHandle(He()[e])), Yn = (e)=>{
            var t = oe.length;
            return oe.push(e), t;
        }, zn = (e, t)=>{
            for(var r = new Array(e), n = 0; n < e; ++n)r[n] = re(_[t + n * 4 >> 2], "parameter " + n);
            return r;
        }, Nn = Reflect.construct, Gn = (e, t, r)=>{
            var n = [], a = e.toWireType(n, r);
            return n.length && (_[t >> 2] = Z.toHandle(n)), a;
        }, Xn = (e, t, r)=>{
            var n = zn(e, t), a = n.shift();
            e--;
            var o = new Array(e), s = (l, h, p, w)=>{
                for(var v = 0, b = 0; b < e; ++b)o[b] = n[b].readValueFromPointer(w + v), v += n[b].argPackAdvance;
                var x = r === 1 ? Nn(h, o) : h.apply(l, o);
                return Gn(a, p, x);
            }, u = `methodCaller<(${n.map((l)=>l.name).join(", ")}) => ${a.name}>`;
            return Yn($t(u, s));
        }, qn = (e)=>{
            e > 9 && (Q[e + 1] += 1);
        }, Qn = (e)=>{
            var t = Z.toValue(e);
            Nt(t), ee(e);
        }, Zn = (e, t)=>{
            e = re(e, "_emval_take_value");
            var r = e.readValueFromPointer(t);
            return Z.toHandle(r);
        }, Jn = ()=>{
            Lt("");
        }, Kn = (e, t, r)=>R.copyWithin(e, t, t + r), ta = ()=>2147483648, ea = (e)=>{
            var t = Tt.buffer, r = (e - t.byteLength + 65535) / 65536;
            try {
                return Tt.grow(r), pe(), 1;
            } catch  {}
        }, ra = (e)=>{
            var t = R.length;
            e >>>= 0;
            var r = ta();
            if (e > r) return !1;
            for(var n = (l, h)=>l + (h - l % h) % h, a = 1; a <= 4; a *= 2){
                var o = t * (1 + 0.2 / a);
                o = Math.min(o, e + 100663296);
                var s = Math.min(r, n(Math.max(e, o), 65536)), u = ea(s);
                if (u) return !0;
            }
            return !1;
        }, ie = {}, na = ()=>U || "./this.program", bt = ()=>{
            if (!bt.strings) {
                var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: e,
                    _: na()
                };
                for(var r in ie)ie[r] === void 0 ? delete t[r] : t[r] = ie[r];
                var n = [];
                for(var r in t)n.push(`${r}=${t[r]}`);
                bt.strings = n;
            }
            return bt.strings;
        }, aa = (e, t)=>{
            for(var r = 0; r < e.length; ++r)z[t++] = e.charCodeAt(r);
            z[t] = 0;
        }, oa = (e, t)=>{
            var r = 0;
            return bt().forEach((n, a)=>{
                var o = t + r;
                _[e + a * 4 >> 2] = o, aa(n, o), r += n.length + 1;
            }), 0;
        }, ia = (e, t)=>{
            var r = bt();
            _[e >> 2] = r.length;
            var n = 0;
            return r.forEach((a)=>n += a.length + 1), _[t >> 2] = n, 0;
        }, sa = (e)=>52;
        function ua(e, t, r, n, a) {
            return 70;
        }
        var ca = [
            null,
            [],
            []
        ], la = (e, t)=>{
            var r = ca[e];
            t === 0 || t === 10 ? ((e === 1 ? _t : K)(We(r, 0)), r.length = 0) : r.push(t);
        }, da = (e, t, r, n)=>{
            for(var a = 0, o = 0; o < r; o++){
                var s = _[t >> 2], u = _[t + 4 >> 2];
                t += 8;
                for(var l = 0; l < u; l++)la(e, R[s + l]);
                a += u;
            }
            return _[n >> 2] = a, 0;
        }, ha = (e)=>e, It = (e)=>e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), fa = (e, t)=>{
            for(var r = 0, n = 0; n <= t; r += e[n++]);
            return r;
        }, Be = [
            31,
            29,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ], Ue = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ], pa = (e, t)=>{
            for(var r = new Date(e.getTime()); t > 0;){
                var n = It(r.getFullYear()), a = r.getMonth(), o = (n ? Be : Ue)[a];
                if (t > o - r.getDate()) t -= o - r.getDate() + 1, r.setDate(1), a < 11 ? r.setMonth(a + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                else return r.setDate(r.getDate() + t), r;
            }
            return r;
        };
        function ma(e, t, r) {
            var n = Ie(e) + 1, a = new Array(n);
            return je(e, a, 0, a.length), a;
        }
        var ya = (e, t)=>{
            z.set(e, t);
        }, va = (e, t, r, n)=>{
            var a = _[n + 40 >> 2], o = {
                tm_sec: W[n >> 2],
                tm_min: W[n + 4 >> 2],
                tm_hour: W[n + 8 >> 2],
                tm_mday: W[n + 12 >> 2],
                tm_mon: W[n + 16 >> 2],
                tm_year: W[n + 20 >> 2],
                tm_wday: W[n + 24 >> 2],
                tm_yday: W[n + 28 >> 2],
                tm_isdst: W[n + 32 >> 2],
                tm_gmtoff: W[n + 36 >> 2],
                tm_zone: a ? ae(a) : ""
            }, s = ae(r), u = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
            for(var l in u)s = s.replace(new RegExp(l, "g"), u[l]);
            var h = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ], p = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            function w(d, m, O) {
                for(var M = typeof d == "number" ? d.toString() : d || ""; M.length < m;)M = O[0] + M;
                return M;
            }
            function v(d, m) {
                return w(d, m, "0");
            }
            function b(d, m) {
                function O(ct) {
                    return ct < 0 ? -1 : ct > 0 ? 1 : 0;
                }
                var M;
                return (M = O(d.getFullYear() - m.getFullYear())) === 0 && (M = O(d.getMonth() - m.getMonth())) === 0 && (M = O(d.getDate() - m.getDate())), M;
            }
            function x(d) {
                switch(d.getDay()){
                    case 0:
                        return new Date(d.getFullYear() - 1, 11, 29);
                    case 1:
                        return d;
                    case 2:
                        return new Date(d.getFullYear(), 0, 3);
                    case 3:
                        return new Date(d.getFullYear(), 0, 2);
                    case 4:
                        return new Date(d.getFullYear(), 0, 1);
                    case 5:
                        return new Date(d.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(d.getFullYear() - 1, 11, 30);
                }
            }
            function k(d) {
                var m = pa(new Date(d.tm_year + 1900, 0, 1), d.tm_yday), O = new Date(m.getFullYear(), 0, 4), M = new Date(m.getFullYear() + 1, 0, 4), ct = x(O), Wt = x(M);
                return b(ct, m) <= 0 ? b(Wt, m) <= 0 ? m.getFullYear() + 1 : m.getFullYear() : m.getFullYear() - 1;
            }
            var P = {
                "%a": (d)=>h[d.tm_wday].substring(0, 3),
                "%A": (d)=>h[d.tm_wday],
                "%b": (d)=>p[d.tm_mon].substring(0, 3),
                "%B": (d)=>p[d.tm_mon],
                "%C": (d)=>{
                    var m = d.tm_year + 1900;
                    return v(m / 100 | 0, 2);
                },
                "%d": (d)=>v(d.tm_mday, 2),
                "%e": (d)=>w(d.tm_mday, 2, " "),
                "%g": (d)=>k(d).toString().substring(2),
                "%G": k,
                "%H": (d)=>v(d.tm_hour, 2),
                "%I": (d)=>{
                    var m = d.tm_hour;
                    return m == 0 ? m = 12 : m > 12 && (m -= 12), v(m, 2);
                },
                "%j": (d)=>v(d.tm_mday + fa(It(d.tm_year + 1900) ? Be : Ue, d.tm_mon - 1), 3),
                "%m": (d)=>v(d.tm_mon + 1, 2),
                "%M": (d)=>v(d.tm_min, 2),
                "%n": ()=>`
`,
                "%p": (d)=>d.tm_hour >= 0 && d.tm_hour < 12 ? "AM" : "PM",
                "%S": (d)=>v(d.tm_sec, 2),
                "%t": ()=>"	",
                "%u": (d)=>d.tm_wday || 7,
                "%U": (d)=>{
                    var m = d.tm_yday + 7 - d.tm_wday;
                    return v(Math.floor(m / 7), 2);
                },
                "%V": (d)=>{
                    var m = Math.floor((d.tm_yday + 7 - (d.tm_wday + 6) % 7) / 7);
                    if ((d.tm_wday + 371 - d.tm_yday - 2) % 7 <= 2 && m++, m) {
                        if (m == 53) {
                            var O = (d.tm_wday + 371 - d.tm_yday) % 7;
                            O != 4 && (O != 3 || !It(d.tm_year)) && (m = 1);
                        }
                    } else {
                        m = 52;
                        var M = (d.tm_wday + 7 - d.tm_yday - 1) % 7;
                        (M == 4 || M == 5 && It(d.tm_year % 400 - 1)) && m++;
                    }
                    return v(m, 2);
                },
                "%w": (d)=>d.tm_wday,
                "%W": (d)=>{
                    var m = d.tm_yday + 7 - (d.tm_wday + 6) % 7;
                    return v(Math.floor(m / 7), 2);
                },
                "%y": (d)=>(d.tm_year + 1900).toString().substring(2),
                "%Y": (d)=>d.tm_year + 1900,
                "%z": (d)=>{
                    var m = d.tm_gmtoff, O = m >= 0;
                    return m = Math.abs(m) / 60, m = m / 60 * 100 + m % 60, (O ? "+" : "-") + ("0000" + m).slice(-4);
                },
                "%Z": (d)=>d.tm_zone,
                "%%": ()=>"%"
            };
            s = s.replace(/%%/g, "\0\0");
            for(var l in P)s.includes(l) && (s = s.replace(new RegExp(l, "g"), P[l](o)));
            s = s.replace(/\0\0/g, "%");
            var j = ma(s);
            return j.length > t ? 0 : (ya(j, e), j.length - 1);
        }, ga = (e, t, r, n, a)=>va(e, t, r, n);
        be = c.InternalError = class extends Error {
            constructor(e){
                super(e), this.name = "InternalError";
            }
        }, Hr(), ut = c.BindingError = class extends Error {
            constructor(e){
                super(e), this.name = "BindingError";
            }
        }, Zr(), Gr(), on(), xe = c.UnboundTypeError = ln(Error, "UnboundTypeError"), yn();
        var wa = {
            s: Fr,
            u: Dr,
            b: Or,
            g: Mr,
            q: Sr,
            K: jr,
            f: Ir,
            Y: Rr,
            e: xr,
            ha: Wr,
            U: kr,
            ba: Ur,
            fa: dn,
            ea: fn,
            w: pn,
            aa: Se,
            x: wn,
            h: $n,
            O: Cn,
            P: _n,
            t: Pn,
            o: En,
            ga: An,
            N: Dn,
            C: Rn,
            A: Wn,
            ia: kn,
            ca: Hn,
            E: Bn,
            ka: ee,
            la: Vn,
            M: Xn,
            Q: qn,
            R: Qn,
            da: Zn,
            B: Jn,
            $: Kn,
            Z: ra,
            W: oa,
            X: ia,
            _: sa,
            T: ua,
            L: da,
            F: Ia,
            D: Ta,
            G: ja,
            m: Ra,
            a: $a,
            d: Ea,
            p: _a,
            k: Sa,
            I: Oa,
            v: Da,
            H: Ma,
            z: ka,
            S: Ba,
            l: Aa,
            j: Pa,
            c: Ca,
            n: ba,
            J: xa,
            r: Wa,
            i: Fa,
            y: Ha,
            ja: ha,
            V: ga
        }, A = Ar(), J = c._free = (e)=>(J = c._free = A.oa)(e), se = c._malloc = (e)=>(se = c._malloc = A.pa)(e), Le = (e)=>(Le = A.ra)(e), T = (e, t)=>(T = A.sa)(e, t), Ct = (e)=>(Ct = A.ta)(e), F = ()=>(F = A.ua)(), D = (e)=>(D = A.va)(e), Ve = (e)=>(Ve = A.wa)(e), Ye = (e)=>(Ye = A.xa)(e), ze = (e, t, r)=>(ze = A.ya)(e, t, r), Ne = (e)=>(Ne = A.za)(e);
        c.dynCall_viijii = (e, t, r, n, a, o, s)=>(c.dynCall_viijii = A.Aa)(e, t, r, n, a, o, s), c.dynCall_jiji = (e, t, r, n, a)=>(c.dynCall_jiji = A.Ba)(e, t, r, n, a);
        var Ge = c.dynCall_jiiii = (e, t, r, n, a)=>(Ge = c.dynCall_jiiii = A.Ca)(e, t, r, n, a);
        c.dynCall_iiiiij = (e, t, r, n, a, o, s)=>(c.dynCall_iiiiij = A.Da)(e, t, r, n, a, o, s), c.dynCall_iiiiijj = (e, t, r, n, a, o, s, u, l)=>(c.dynCall_iiiiijj = A.Ea)(e, t, r, n, a, o, s, u, l), c.dynCall_iiiiiijj = (e, t, r, n, a, o, s, u, l, h)=>(c.dynCall_iiiiiijj = A.Fa)(e, t, r, n, a, o, s, u, l, h);
        function $a(e, t) {
            var r = F();
            try {
                return E(e)(t);
            } catch (n) {
                if (D(r), n !== n + 0) throw n;
                T(1, 0);
            }
        }
        function ba(e, t, r, n) {
            var a = F();
            try {
                E(e)(t, r, n);
            } catch (o) {
                if (D(a), o !== o + 0) throw o;
                T(1, 0);
            }
        }
        function Ca(e, t, r) {
            var n = F();
            try {
                E(e)(t, r);
            } catch (a) {
                if (D(n), a !== a + 0) throw a;
                T(1, 0);
            }
        }
        function _a(e, t, r, n) {
            var a = F();
            try {
                return E(e)(t, r, n);
            } catch (o) {
                if (D(a), o !== o + 0) throw o;
                T(1, 0);
            }
        }
        function Ta(e, t, r, n, a) {
            var o = F();
            try {
                return E(e)(t, r, n, a);
            } catch (s) {
                if (D(o), s !== s + 0) throw s;
                T(1, 0);
            }
        }
        function Pa(e, t) {
            var r = F();
            try {
                E(e)(t);
            } catch (n) {
                if (D(r), n !== n + 0) throw n;
                T(1, 0);
            }
        }
        function Ea(e, t, r) {
            var n = F();
            try {
                return E(e)(t, r);
            } catch (a) {
                if (D(n), a !== a + 0) throw a;
                T(1, 0);
            }
        }
        function Aa(e) {
            var t = F();
            try {
                E(e)();
            } catch (r) {
                if (D(t), r !== r + 0) throw r;
                T(1, 0);
            }
        }
        function Fa(e, t, r, n, a, o, s, u, l, h, p) {
            var w = F();
            try {
                E(e)(t, r, n, a, o, s, u, l, h, p);
            } catch (v) {
                if (D(w), v !== v + 0) throw v;
                T(1, 0);
            }
        }
        function Da(e, t, r, n, a, o, s) {
            var u = F();
            try {
                return E(e)(t, r, n, a, o, s);
            } catch (l) {
                if (D(u), l !== l + 0) throw l;
                T(1, 0);
            }
        }
        function xa(e, t, r, n, a) {
            var o = F();
            try {
                E(e)(t, r, n, a);
            } catch (s) {
                if (D(o), s !== s + 0) throw s;
                T(1, 0);
            }
        }
        function Oa(e, t, r, n, a, o) {
            var s = F();
            try {
                return E(e)(t, r, n, a, o);
            } catch (u) {
                if (D(s), u !== u + 0) throw u;
                T(1, 0);
            }
        }
        function Ma(e, t, r, n, a, o, s, u) {
            var l = F();
            try {
                return E(e)(t, r, n, a, o, s, u);
            } catch (h) {
                if (D(l), h !== h + 0) throw h;
                T(1, 0);
            }
        }
        function Sa(e, t, r, n, a) {
            var o = F();
            try {
                return E(e)(t, r, n, a);
            } catch (s) {
                if (D(o), s !== s + 0) throw s;
                T(1, 0);
            }
        }
        function ja(e, t, r, n) {
            var a = F();
            try {
                return E(e)(t, r, n);
            } catch (o) {
                if (D(a), o !== o + 0) throw o;
                T(1, 0);
            }
        }
        function Ia(e, t, r, n) {
            var a = F();
            try {
                return E(e)(t, r, n);
            } catch (o) {
                if (D(a), o !== o + 0) throw o;
                T(1, 0);
            }
        }
        function Ra(e) {
            var t = F();
            try {
                return E(e)();
            } catch (r) {
                if (D(t), r !== r + 0) throw r;
                T(1, 0);
            }
        }
        function Wa(e, t, r, n, a, o, s, u) {
            var l = F();
            try {
                E(e)(t, r, n, a, o, s, u);
            } catch (h) {
                if (D(l), h !== h + 0) throw h;
                T(1, 0);
            }
        }
        function ka(e, t, r, n, a, o, s, u, l, h, p, w) {
            var v = F();
            try {
                return E(e)(t, r, n, a, o, s, u, l, h, p, w);
            } catch (b) {
                if (D(v), b !== b + 0) throw b;
                T(1, 0);
            }
        }
        function Ha(e, t, r, n, a, o, s, u, l, h, p, w, v, b, x, k) {
            var P = F();
            try {
                E(e)(t, r, n, a, o, s, u, l, h, p, w, v, b, x, k);
            } catch (j) {
                if (D(P), j !== j + 0) throw j;
                T(1, 0);
            }
        }
        function Ba(e, t, r, n, a) {
            var o = F();
            try {
                return Ge(e, t, r, n, a);
            } catch (s) {
                if (D(o), s !== s + 0) throw s;
                T(1, 0);
            }
        }
        var Rt;
        pt = function e() {
            Rt || Xe(), Rt || (pt = e);
        };
        function Xe() {
            if (et > 0 || (yr(), et > 0)) return;
            function e() {
                Rt || (Rt = !0, c.calledRun = !0, !de && (vr(), g(c), c.onRuntimeInitialized && c.onRuntimeInitialized(), gr()));
            }
            c.setStatus ? (c.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                    c.setStatus("");
                }, 1), e();
            }, 1)) : e();
        }
        if (c.preInit) for(typeof c.preInit == "function" && (c.preInit = [
            c.preInit
        ]); c.preInit.length > 0;)c.preInit.pop()();
        return Xe(), f.ready;
    };
})();
function Ka(i) {
    return le(Ut, i);
}
function vo(i) {
    return Qa(Ut, i);
}
async function to(i, f) {
    return Za(Ut, i, f);
}
async function eo(i, f) {
    return Ja(Ut, i, f);
}
const ir = [
    [
        "aztec",
        "Aztec"
    ],
    [
        "code_128",
        "Code128"
    ],
    [
        "code_39",
        "Code39"
    ],
    [
        "code_93",
        "Code93"
    ],
    [
        "codabar",
        "Codabar"
    ],
    [
        "databar",
        "DataBar"
    ],
    [
        "databar_expanded",
        "DataBarExpanded"
    ],
    [
        "data_matrix",
        "DataMatrix"
    ],
    [
        "dx_film_edge",
        "DXFilmEdge"
    ],
    [
        "ean_13",
        "EAN-13"
    ],
    [
        "ean_8",
        "EAN-8"
    ],
    [
        "itf",
        "ITF"
    ],
    [
        "maxi_code",
        "MaxiCode"
    ],
    [
        "micro_qr_code",
        "MicroQRCode"
    ],
    [
        "pdf417",
        "PDF417"
    ],
    [
        "qr_code",
        "QRCode"
    ],
    [
        "rm_qr_code",
        "rMQRCode"
    ],
    [
        "upc_a",
        "UPC-A"
    ],
    [
        "upc_e",
        "UPC-E"
    ],
    [
        "linear_codes",
        "Linear-Codes"
    ],
    [
        "matrix_codes",
        "Matrix-Codes"
    ]
], ro = [
    ...ir,
    [
        "unknown"
    ]
].map((i)=>i[0]), Bt = new Map(ir);
function no(i) {
    for (const [f, y] of Bt)if (i === y) return f;
    return "unknown";
}
function ao(i) {
    if (sr(i)) return {
        width: i.naturalWidth,
        height: i.naturalHeight
    };
    if (ur(i)) return {
        width: i.width.baseVal.value,
        height: i.height.baseVal.value
    };
    if (cr(i)) return {
        width: i.videoWidth,
        height: i.videoHeight
    };
    if (dr(i)) return {
        width: i.width,
        height: i.height
    };
    if (fr(i)) return {
        width: i.displayWidth,
        height: i.displayHeight
    };
    if (lr(i)) return {
        width: i.width,
        height: i.height
    };
    if (hr(i)) return {
        width: i.width,
        height: i.height
    };
    throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function sr(i) {
    try {
        return i instanceof HTMLImageElement;
    } catch  {
        return !1;
    }
}
function ur(i) {
    try {
        return i instanceof SVGImageElement;
    } catch  {
        return !1;
    }
}
function cr(i) {
    try {
        return i instanceof HTMLVideoElement;
    } catch  {
        return !1;
    }
}
function lr(i) {
    try {
        return i instanceof HTMLCanvasElement;
    } catch  {
        return !1;
    }
}
function dr(i) {
    try {
        return i instanceof ImageBitmap;
    } catch  {
        return !1;
    }
}
function hr(i) {
    try {
        return i instanceof OffscreenCanvas;
    } catch  {
        return !1;
    }
}
function fr(i) {
    try {
        return i instanceof VideoFrame;
    } catch  {
        return !1;
    }
}
function pr(i) {
    try {
        return i instanceof Blob;
    } catch  {
        return !1;
    }
}
function oo(i) {
    try {
        return i instanceof ImageData;
    } catch  {
        return !1;
    }
}
function io(i, f) {
    try {
        const y = new OffscreenCanvas(i, f);
        if (y.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return y;
        throw void 0;
    } catch  {
        const y = document.createElement("canvas");
        return y.width = i, y.height = f, y;
    }
}
async function mr(i) {
    if (sr(i) && !await lo(i)) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (ur(i) && !await ho(i)) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (fr(i) && fo(i)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (cr(i) && (i.readyState === 0 || i.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (dr(i) && mo(i)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const { width: f, height: y } = ao(i);
    if (f === 0 || y === 0) return null;
    const g = io(f, y).getContext("2d");
    g.drawImage(i, 0, 0);
    try {
        return g.getImageData(0, 0, f, y);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function so(i) {
    let f;
    try {
        if (globalThis.createImageBitmap) f = await createImageBitmap(i);
        else if (globalThis.Image) {
            f = new Image();
            let c = "";
            try {
                c = URL.createObjectURL(i), f.src = c, await f.decode();
            } finally{
                URL.revokeObjectURL(c);
            }
        } else return i;
    } catch  {
        throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
    }
    return await mr(f);
}
function uo(i) {
    const { width: f, height: y } = i;
    if (f === 0 || y === 0) return null;
    const c = i.getContext("2d");
    try {
        return c.getImageData(0, 0, f, y);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function co(i) {
    if (pr(i)) return await so(i);
    if (oo(i)) {
        if (po(i)) throw new DOMException("The image data has been detached.", "InvalidStateError");
        return i;
    }
    return lr(i) || hr(i) ? uo(i) : await mr(i);
}
async function lo(i) {
    try {
        return await i.decode(), !0;
    } catch  {
        return !1;
    }
}
async function ho(i) {
    var f;
    try {
        return await ((f = i.decode) == null ? void 0 : f.call(i)), !0;
    } catch  {
        return !1;
    }
}
function fo(i) {
    return i.format === null;
}
function po(i) {
    return i.data.buffer.byteLength === 0;
}
function mo(i) {
    return i.width === 0 && i.height === 0;
}
function nr(i, f) {
    return i instanceof DOMException ? new DOMException(`${f}: ${i.message}`, i.name) : i instanceof Error ? new i.constructor(`${f}: ${i.message}`) : new Error(`${f}: ${i}`);
}
var lt;
class go extends EventTarget {
    constructor(y = {}){
        var c;
        super();
        Ke(this, lt, void 0);
        try {
            const g = (c = y == null ? void 0 : y.formats) == null ? void 0 : c.filter(($)=>$ !== "unknown");
            if ((g == null ? void 0 : g.length) === 0) throw new TypeError("Hint option provided, but is empty.");
            for (const $ of g != null ? g : [])if (!Bt.has($)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${$}' is not a valid enum value of type BarcodeFormat.`);
            tr(this, lt, g != null ? g : []), Ka().then(($)=>{
                this.dispatchEvent(new CustomEvent("load", {
                    detail: $
                }));
            }).catch(($)=>{
                this.dispatchEvent(new CustomEvent("error", {
                    detail: $
                }));
            });
        } catch (g) {
            throw nr(g, "Failed to construct 'BarcodeDetector'");
        }
    }
    static async getSupportedFormats() {
        return ro.filter((y)=>y !== "unknown");
    }
    async detect(y) {
        try {
            const c = await co(y);
            if (c === null) return [];
            let g;
            try {
                pr(c) ? g = await to(c, {
                    tryHarder: !0,
                    formats: ue(this, lt).map(($)=>Bt.get($))
                }) : g = await eo(c, {
                    tryHarder: !0,
                    formats: ue(this, lt).map(($)=>Bt.get($))
                });
            } catch ($) {
                throw console.error($), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
            }
            return g.map(($)=>{
                const { topLeft: { x: H, y: U }, topRight: { x: V, y: B }, bottomLeft: { x: L, y: Y }, bottomRight: { x: S, y: ht } } = $.position, at = Math.min(H, V, L, S), _t = Math.min(U, B, Y, ht), K = Math.max(H, V, L, S), tt = Math.max(U, B, Y, ht);
                return {
                    boundingBox: new DOMRectReadOnly(at, _t, K - at, tt - _t),
                    rawValue: $.text,
                    format: no($.format),
                    cornerPoints: [
                        {
                            x: H,
                            y: U
                        },
                        {
                            x: V,
                            y: B
                        },
                        {
                            x: S,
                            y: ht
                        },
                        {
                            x: L,
                            y: Y
                        }
                    ]
                };
            });
        } catch (c) {
            throw nr(c, "Failed to execute 'detect' on 'BarcodeDetector'");
        }
    }
}
lt = new WeakMap();

},{"777cf5a1c5cdae66":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}]},["bzwGY"], null, "parcelRequirea202")

//# sourceMappingURL=es.de9d79c9.js.map
