(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{598:function(t,n,e){"use strict";(function(t){e(26);var r=e(648),o=e(649),l=e.n(o);n.a={props:{src:[Boolean,String],soundfont:{default:"marimba"}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t)),this.playerInit()}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),instrument:!1,soundfontLoaded:!1,midiLoaded:!1,player:!1,playerEvent:{},songPercent:0,chords:[{tick:7319,chord:"F#m"},{tick:8087,chord:"E"}],lyrics:[{tick:7353,lyric:"Cheia de manias"},{tick:8212,lyric:"Toda dengosa"}]}},computed:{isPlaying:function(){return!!this.player&&this.player.isPlaying()},songTime:function(){return!!this.player&&this.player.getSongTime()}},methods:{playerInit:function(){var t=this;this.player=new r.a.Player((function(n){t.playerEvent=n,t.songPercent=Math.max(0,100-t.player.getSongPercentRemaining()),"Note on"==n.name&&t.instrument.play(n.noteName,AudioContext.currentTime,{gain:n.velocity/100})})),this.playerLoadMidi(),this.playerLoadSoundfont()},playerLoadMidi:function(n){var e=this;if(this.props.src)return this.midiLoaded=!1,this.$axios.get(this.props.src,{responseType:"arraybuffer"}).then((function(n){var r=t.from(n.data,"base64");e.player.loadArrayBuffer(r),e.midiLoaded=!0}))},playerLoadSoundfont:function(){var t=this;return this.soundfontLoaded=!1,l.a.instrument(new AudioContext,this.props.soundfont).then((function(n){t.instrument=n,t.soundfontLoaded=!0}))},play:function(){this.isPlaying?this.pause():this.player.play()},pause:function(){this.player.pause()},stop:function(){this.player.stop(),this.songPercent=Math.max(0,100-this.player.getSongPercentRemaining())},skipToPercent:function(t){var n=this,e=this.player.isPlaying();e&&this.player.stop(),setTimeout((function(){n.player.skipToPercent(t),e&&n.player.play(),n.songPercent=Math.max(0,100-n.player.getSongPercentRemaining())}),10)}},mounted:function(){this.playerInit()}}}).call(this,e(609).Buffer)},679:function(t,n,e){"use strict";e.r(n);var r=e(598).a,o=e(12),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-6"},t._l(t.player.tracks,(function(n,r){return e("div",[t._v("\r\n                xx\r\n            ")])})),0),t._v(" "),e("div",{staticClass:"col-6 bg-dark"},[t._v("\r\n            content\r\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mt-3"},[t.isPlaying?t._e():e("div",{staticClass:"pr-1"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.play()}}},[e("i",{staticClass:"fas fa-play"})])]),t._v(" "),t.isPlaying?e("div",{staticClass:"pr-1"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.pause()}}},[e("i",{staticClass:"fas fa-pause"})])]):t._e(),t._v(" "),e("div",{staticClass:"pr-1"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.stop()}}},[e("i",{staticClass:"fas fa-stop"})])]),t._v(" "),e("div",{staticClass:"flex-grow-1 pl-3"},[e("el-slider",{on:{change:function(n){return t.skipToPercent(n)}},model:{value:t.songPercent,callback:function(n){t.songPercent=n},expression:"songPercent"}})],1)]),t._v(" "),e("pre",[t._v("playerEvent: "+t._s(t.playerEvent))])])}),[],!1,null,null,null);n.default=component.exports},721:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{midi:{src:!1,title:!1},midis:[{title:"Bach - Boureé",src:"/assets/bach-bourree.mid"},{title:"Guns n Roses - Sweet Child o Mine",src:"/assets/guns-n-roses-sweet-child-o-mine.mid"},{title:"Raça Negra - Cheia de Manias",src:"/assets/raca-negra-cheia-de-manias.mid"},{title:"Tema Simpsons",src:"/assets/simpsons.mid"},{title:"Tema South Park",src:"/assets/south-park.mid"}]}}},o=e(12),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"list-group"},t._l(t.midis,(function(n){return e("div",{staticClass:"list-group-item",class:{"list-group-item-primary":n==t.midi},on:{click:function(e){t.midi=n}}},[t._v("\r\n                    "+t._s(n.title)+"\r\n                ")])})),0)]),t._v(" "),e("div",{staticClass:"col-9 p-3"},[e("midi-playerb",{attrs:{src:t.midi.src}})],1)]),t._v(" "),e("pre",[t._v(t._s(t.$data))])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{MidiPlayerb:e(679).default})}}]);