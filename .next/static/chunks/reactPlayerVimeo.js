/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerVimeo"],{

/***/ "./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Vimeo_exports = {};\n__export(Vimeo_exports, {\n  default: () => Vimeo\n});\nmodule.exports = __toCommonJS(Vimeo_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.vimeo.com/api/player.js\";\nconst SDK_GLOBAL = \"Vimeo\";\nconst cleanUrl = (url) => {\n  return url.replace(\"/manage/videos\", \"\");\n};\nclass Vimeo extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Prevent checking isLoading when URL changes\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"secondsLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setMuted(true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.setMuted(false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    this.duration = null;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Vimeo2) => {\n      if (!this.container)\n        return;\n      const { playerOptions, title } = this.props.config;\n      this.player = new Vimeo2.Player(this.container, {\n        url: cleanUrl(url),\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        loop: this.props.loop,\n        playsinline: this.props.playsinline,\n        controls: this.props.controls,\n        ...playerOptions\n      });\n      this.player.ready().then(() => {\n        const iframe = this.container.querySelector(\"iframe\");\n        iframe.style.width = \"100%\";\n        iframe.style.height = \"100%\";\n        if (title) {\n          iframe.title = title;\n        }\n      }).catch(this.props.onError);\n      this.player.on(\"loaded\", () => {\n        this.props.onReady();\n        this.refreshDuration();\n      });\n      this.player.on(\"play\", () => {\n        this.props.onPlay();\n        this.refreshDuration();\n      });\n      this.player.on(\"pause\", this.props.onPause);\n      this.player.on(\"seeked\", (e) => this.props.onSeek(e.seconds));\n      this.player.on(\"ended\", this.props.onEnded);\n      this.player.on(\"error\", this.props.onError);\n      this.player.on(\"timeupdate\", ({ seconds }) => {\n        this.currentTime = seconds;\n      });\n      this.player.on(\"progress\", ({ seconds }) => {\n        this.secondsLoaded = seconds;\n      });\n      this.player.on(\"bufferstart\", this.props.onBuffer);\n      this.player.on(\"bufferend\", this.props.onBufferEnd);\n      this.player.on(\"playbackratechange\", (e) => this.props.onPlaybackRateChange(e.playbackRate));\n    }, this.props.onError);\n  }\n  refreshDuration() {\n    this.player.getDuration().then((duration) => {\n      this.duration = duration;\n    });\n  }\n  play() {\n    const promise = this.callPlayer(\"play\");\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"unload\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"setCurrentTime\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  setMuted(muted) {\n    this.callPlayer(\"setMuted\", muted);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.secondsLoaded;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"hidden\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        key: this.props.url,\n        ref: this.ref,\n        style\n      }\n    );\n  }\n}\n__publicField(Vimeo, \"displayName\", \"Vimeo\");\n__publicField(Vimeo, \"canPlay\", import_patterns.canPlay.vimeo);\n__publicField(Vimeo, \"forceLoad\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1ZpbWVvLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RkFBNEY7QUFDekg7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0Esb0RBQW9ELGtCQUFrQixhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMsNENBQU87QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsMERBQVU7QUFDckMsc0JBQXNCLG1CQUFPLENBQUMsZ0VBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBLE9BQU87QUFDUCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1ZpbWVvLmpzP2EwMDkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFZpbWVvX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFZpbWVvX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gVmltZW9cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoVmltZW9fZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiO1xuY29uc3QgU0RLX0dMT0JBTCA9IFwiVmltZW9cIjtcbmNvbnN0IGNsZWFuVXJsID0gKHVybCkgPT4ge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoXCIvbWFuYWdlL3ZpZGVvc1wiLCBcIlwiKTtcbn07XG5jbGFzcyBWaW1lbyBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIC8vIFByZXZlbnQgY2hlY2tpbmcgaXNMb2FkaW5nIHdoZW4gVVJMIGNoYW5nZXNcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImR1cmF0aW9uXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjdXJyZW50VGltZVwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic2Vjb25kc0xvYWRlZFwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldE11dGVkKHRydWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNdXRlZChmYWxzZSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlZlwiLCAoY29udGFpbmVyKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICB9XG4gIGxvYWQodXJsKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IG51bGw7XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwpLnRoZW4oKFZpbWVvMikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgeyBwbGF5ZXJPcHRpb25zLCB0aXRsZSB9ID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBWaW1lbzIuUGxheWVyKHRoaXMuY29udGFpbmVyLCB7XG4gICAgICAgIHVybDogY2xlYW5VcmwodXJsKSxcbiAgICAgICAgYXV0b3BsYXk6IHRoaXMucHJvcHMucGxheWluZyxcbiAgICAgICAgbXV0ZWQ6IHRoaXMucHJvcHMubXV0ZWQsXG4gICAgICAgIGxvb3A6IHRoaXMucHJvcHMubG9vcCxcbiAgICAgICAgcGxheXNpbmxpbmU6IHRoaXMucHJvcHMucGxheXNpbmxpbmUsXG4gICAgICAgIGNvbnRyb2xzOiB0aGlzLnByb3BzLmNvbnRyb2xzLFxuICAgICAgICAuLi5wbGF5ZXJPcHRpb25zXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIGlmcmFtZS50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJsb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVhZHkoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHVyYXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJwbGF5XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBsYXkoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHVyYXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJwYXVzZVwiLCB0aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJzZWVrZWRcIiwgKGUpID0+IHRoaXMucHJvcHMub25TZWVrKGUuc2Vjb25kcykpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJlbmRlZFwiLCB0aGlzLnByb3BzLm9uRW5kZWQpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJlcnJvclwiLCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJ0aW1ldXBkYXRlXCIsICh7IHNlY29uZHMgfSkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJwcm9ncmVzc1wiLCAoeyBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZWNvbmRzTG9hZGVkID0gc2Vjb25kcztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJidWZmZXJzdGFydFwiLCB0aGlzLnByb3BzLm9uQnVmZmVyKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwiYnVmZmVyZW5kXCIsIHRoaXMucHJvcHMub25CdWZmZXJFbmQpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJwbGF5YmFja3JhdGVjaGFuZ2VcIiwgKGUpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoZS5wbGF5YmFja1JhdGUpKTtcbiAgICB9LCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICB9XG4gIHJlZnJlc2hEdXJhdGlvbigpIHtcbiAgICB0aGlzLnBsYXllci5nZXREdXJhdGlvbigpLnRoZW4oKGR1cmF0aW9uKSA9PiB7XG4gICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfSk7XG4gIH1cbiAgcGxheSgpIHtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jYWxsUGxheWVyKFwicGxheVwiKTtcbiAgICBpZiAocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZS5jYXRjaCh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgIH1cbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzdG9wKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInVubG9hZFwiKTtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Q3VycmVudFRpbWVcIiwgc2Vjb25kcyk7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRWb2x1bWVcIiwgZnJhY3Rpb24pO1xuICB9XG4gIHNldE11dGVkKG11dGVkKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0TXV0ZWRcIiwgbXV0ZWQpO1xuICB9XG4gIHNldExvb3AobG9vcCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldExvb3BcIiwgbG9vcCk7XG4gIH1cbiAgc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRQbGF5YmFja1JhdGVcIiwgcmF0ZSk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gIH1cbiAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWNvbmRzTG9hZGVkO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICBkaXNwbGF5XG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBrZXk6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzdHlsZVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoVmltZW8sIFwiZGlzcGxheU5hbWVcIiwgXCJWaW1lb1wiKTtcbl9fcHVibGljRmllbGQoVmltZW8sIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS52aW1lbyk7XG5fX3B1YmxpY0ZpZWxkKFZpbWVvLCBcImZvcmNlTG9hZFwiLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-player/lib/players/Vimeo.js\n"));

/***/ })

}]);