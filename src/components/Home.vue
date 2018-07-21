<!--template>
  <div id="app">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.3 452.7" aria-labelledby="title" class="notifier-svg">
      <app-defs></app-defs>
      <title id="title">
        Phone Notifications
      </title>
      <g style="isolation:isolate">
        <g id="Layer_1" data-name="Layer 1">
          <path fill="#92278f" d="M0 54H695.3V452.67H0z"/>
          <path id="phoneshadow" fill="url(#linear-gradient)" d="M389.2 381.2L559.3 404.3 562.7 220.3 203.5 237.7 389.2 381.2z"/>
          <path id="phonebase" d="M454.5,248.4l-.5,8.9-52,60c-5.3,8.7-28.7,4.7-28.7,4.7L141.4,261.4h0l-.7-.2h-.1a4.5,4.5,0,0,1-3.2-3.4h0v-.5a0,0,0,0,1,0,0l-.6-11.3Z" transform="translate(0 58)" fill="url(#linear-gradient-2)"/>
          <path d="M445.1,240c8.5,2.3,12,7.8,7.8,12.3L398.2,311c-4.2,4.5-14.5,6.4-23,4.1l-229-60.6c-8.5-2.3-12-7.8-7.8-12.3L193,183.5c4.2-4.5,14.5-6.4,23-4.1Z" transform="translate(0 58)" fill="url(#linear-gradient-3)"/>
          <path d="M418.1,240.2c2.3.6,3.1,2.2,1.9,3.6l-54.5,58.5c-1.3,1.4-4.2,2-6.5,1.4L167,252.7c-2.3-.6-3.1-2.2-1.9-3.6l54.5-58.5c1.3-1.4,4.2-2,6.5-1.4Z" transform="translate(0 58)" fill="url(#linear-gradient-4)"/>
          <path d="M189.1,207.6c.8.2,1.1.7.7,1.1l-15.8,17a2.3,2.3,0,0,1-2,.4h0c-.8-.2-1.1-.7-.7-1.1l15.8-17a2.3,2.3,0,0,1,2-.4Z" transform="translate(0 58)" fill="#313131"/>
          <g id="phonebutton" @click="updateTemplate" v-if="!showWeather">
            <transition
              @before-enter="beforeEnterStroke"
              @enter="enterStroke"
              :css="false"
              appear>
              <path class="main-button" d="M413,272.2c5.1,1.4,7.2,4.7,4.7,7.4s-8.7,3.8-13.8,2.5-7.2-4.7-4.7-7.4S407.9,270.9,413,272.2Z" transform="translate(0 58)" fill="none"/>
            </transition>
            <path d="M413,272.2c5.1,1.4,7.2,4.7,4.7,7.4s-8.7,3.8-13.8,2.5-7.2-4.7-4.7-7.4S407.9,270.9,413,272.2Z" transform="translate(0 58)" fill="#272829"/>
            <path d="M401.4,273.5l1-.9a8.5,8.5,0,0,0-3.2,2c-2.5,2.7-.5,6,4.7,7.4a17.5,17.5,0,0,0,3.1.5C400.8,280.9,398.3,276.9,401.4,273.5Z" transform="translate(1 58)" fill="#414141" style="opacity:0.8"/>
          </g>

          <transition
              @leave="leaveDialog"
              :css="false">
          <app-dialog v-if="showWeather"></app-dialog>
          </transition>
          <transition
              @leave="leaveDroparea"
              :css="false">
            <g v-if="showWeather">
              <app-droparea v-if="template == 1"></app-droparea>
              <app-windarea v-else-if="template == 2"></app-windarea>
              <app-rainbowarea v-else-if="template == 3"></app-rainbowarea>
              <app-tornadoarea v-else></app-tornadoarea>
            </g>
          </transition>
          <g v-if="!showWeather">
            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              :css="false"
              appear>
              <text class="press" font-size="18" fill="#f7941d" font-family="TitilliumWeb-Regular, Titillium Web">
                <tspan x="375" y="310" letter-spacing="-0.01em">Press me!</tspan>
              </text>
            </transition>
          </g>
        </g>
      </g>
    </svg>
</div>
</template>
</template>
<tornadoarea.vue-->
<!--script type="text/x-template" id="tornadoarea">
  <g id="tornado">
      <ellipse id="fog" cx="286.8" cy="210.7" rx="73.5" ry="68.6" fill="url(#radial-gradient-20)"/>
      <g id="tornado-plat">
        <ellipse id="newgrad" cx="317" cy="249.2" rx="38.5" ry="86" transform="rotate(-82.8 333.58 235.12)" fill="url(#radial-gradient)"/>
        <g>
          <g>
            <path d="M322.3,227.3c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,234.1,322.3,227.3Z" transform="translate(0 4)" fill="#df5f26"/>
            <path d="M322.3,258.1c-23.5,13.5-47.7,13.5-71.1,0-11.7-6.8-17.6-13.7-17.6-20.5v10.2c0,6.9,5.9,13.8,17.6,20.5,23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5V237.6C339.9,244.5,334.1,251.3,322.3,258.1Z" transform="translate(0 4)" fill="url(#linear-gradient-20)"/>
            <path d="M322.3,217c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,223.8,322.3,217Z" transform="translate(0 4)" fill="#d75827"/>
          </g>
          <g>
            <path d="M322.3,227.3c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,234.1,322.3,227.3Z" transform="translate(0 4)" fill="#fee23b"/>
            <path d="M322.3,258.1c-23.5,13.5-47.7,13.5-71.1,0-11.7-6.8-17.6-13.7-17.6-20.5v10.2c0,6.9,5.9,13.8,17.6,20.5,23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5V237.6C339.9,244.5,334.1,251.3,322.3,258.1Z" transform="translate(0 4)" fill="url(#linear-gradient-21)"/>
            <path d="M322.3,217c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,223.8,322.3,217Z" transform="translate(0 4)" fill="#eaf3f6"/>
          </g>
        </g>
        <g class="tornado-group">
          <ellipse cx="289.5" cy="245.2" rx="9.3" ry="5.4" fill="#4783c4"/>
          <ellipse cx="292" cy="240.1" rx="11.1" ry="6.4" fill="#578bc9"/>
          <ellipse cx="291.9" cy="235.9" rx="12.8" ry="7.4" fill="#6695ce"/>
          <ellipse cx="290.1" cy="232.4" rx="14.5" ry="8.4" fill="#749fd4"/>
          <ellipse cx="287.4" cy="229.1" rx="16.2" ry="9.4" fill="#82a9d9"/>
          <ellipse cx="284.6" cy="225.6" rx="17.9" ry="10.4" fill="#91b4df"/>
          <ellipse cx="282.5" cy="221.7" rx="19.7" ry="11.4" fill="#a0c0e5"/>
          <ellipse cx="282.1" cy="216.8" rx="21.4" ry="12.3" fill="#b0cdeb"/>
          <ellipse cx="284.2" cy="210.8" rx="23.1" ry="13.3" fill="#c0daf2"/>
          <ellipse cx="289.5" cy="203" rx="24.8" ry="14.3" fill="#d0e8f8"/>
        </g>
      </g>
      <path id="lightning" d="M267.5,237s51.4,18.8,50-7.3S230.8,192,241,204.5s80,36.5,82,7-56-57-63.5-46.5,64,52.5,69.5,40.5-27-60.5-27-42,34,39,32.5,30-10.5-43-8-28l6.5,19s-.5-14.5-2-18.5" transform="translate(0 4)" fill="none" stroke="#eec919" stroke-miterlimit="10"/>
</g>
</script>
<script>
// The code is a little different in codepen, if you'd like to see the setup that's more true to real-life, it's in this repo: https://github.com/sdras/vue-weather-notifier
//I had to change a bunch of things around to use vuex in one script tag, most notably that this.$store became just store

const store = new Vuex.Store({
  state: {
    showWeather: false,
    template: 0
  },
  mutations: {
    toggle: state => state.showWeather = !state.showWeather,
    updateTemplate: (state) => {
      state.template = (state.template + 1) % 4;
      state.showWeather = !state.showWeather;
    }
  }
});

const Defs = {
  template: '#defs'
};

const Dialog = {
  template: '#dialog',
  computed: {
    template() {
      return store.state.template;
    }
  },
  methods: {
    toggle() {
      store.commit('toggle');
    }
  },
  mounted() {
    //enter weather
    const tl = new TimelineMax();

    tl.add("enter");

    tl.fromTo("#dialog", 2, {
      opacity: 0
    }, {
      opacity: 1
    }, "enter");

    tl.fromTo("#dialog", 2, {
      rotation: -4
    }, {
      rotation: 0,
      transformOrigin: "50% 100%",
      ease: Elastic.easeOut
    }, "enter");
  }
};

const Droparea = {
  template: '#droparea',
  mounted() {
    let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rain.mp3'),
      tl = new TimelineMax();

    audio.play();
    tl.add("drops");

    //drops in
    tl.staggerFromTo("#droplet-groups g path", 0.3, {
      drawSVG: "0% -10%"
    }, {
      drawSVG: "100% 110%",
      repeat: 3,
      repeatDelay: 1,
      ease: Sine.easeIn
    }, 0.5, "drops");

    tl.fromTo(".plat-piece", 0.5, {
      y: 88
    }, {
      y: 58,
      ease: Sine.easeOut
    }, "drops");

    tl.fromTo("#lt-shadow", 0.5, {
      scale: 0,
      opacity: 0
    }, {
      opacity: 1,
      scale: 1,
      ease: Sine.easeOut
    }, "drops");

    tl.staggerFromTo("#drop-area [id^='drop-a'] [id^='drop-in'] path", 0.3, {
      drawSVG: "100% 110%"
    }, {
      drawSVG: "0% -10%",
      repeat: 2,
      repeatDelay: 1,
      ease: Sine.easeIn
    }, 0.5, "drops+=1");

    tl.staggerFromTo("#drop-area [id^='drop-a'] [id^='big-drop'] path", 0.5, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Sine.easeOut
    }, -0.04, "drops+=1");

    tl.fromTo("#drop-shadow", 3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Sine.easeOut
    }, "drops+=1.5");

    tl.staggerFromTo("#droplet-groups g ellipse", 0.3, {
      scaleX: 0,
      scaleY: 1,
      opacity: 1
    }, {
      transformOrigin: "20% 50%",
      scaleX: 4,
      scaleY: 2,
      opacity: 0,
      repeat: 3,
      repeatDelay: 1,
      ease: Sine.easeIn
    }, 0.5, "drops+=0.3");

    tl.staggerFromTo("#drop-area [id^='drop-a'] [id^='drop-in'] ellipse", 0.3, {
      scaleX: 0,
      scaleY: 1,
      opacity: 1
    }, {
      transformOrigin: "20% 50%",
      scaleX: 4,
      scaleY: 2,
      repeat: 2,
      repeatDelay: 1,
      opacity: 0,
      ease: Sine.easeIn
    }, 0.5, "drops+=0.3");

    tl.staggerFromTo("#ripple ellipse", 2, {
      scale: 0,
      opacity: 1,
      transformOrigin: "50% 50%",
    }, {
      transformOrigin: "50% 50%",
      scale: 1,
      opacity: 0,
      ease: Sine.easeOut
    }, "-0.2", "drops+=0.3");

  }
};

const Windarea = {
  template: '#windarea',
  mounted() {
    let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/wind.mp3'),
      tl = new TimelineMax(),
      easeConfig = CustomEase.create("custom", "M0,0 C0,0 0.012,-0.064 0.015,-0.076 0.03,0.05 0.057,-0.052 0.075,-0.042 0.06,0.344 0.123,0.258 0.125,0.266 0.125,0.258 0.114,-0.039 0.14,-0.039 0.184,-0.039 0.165,0.205 0.175,0.29 0.211,0.303 0.26,0.108 0.315,0.341 0.316,0.329 0.324,0.275 0.325,0.272 0.325,0.277 0.338,0.385 0.34,0.395 0.354,0.512 0.413,0.263 0.42,0.251 0.478,0.108 0.445,0.432 0.46,0.532 0.474,0.559 0.516,0.392 0.5,0.608 0.472,0.802 0.633,0.486 0.65,0.471 0.651,0.491 0.657,0.602 0.66,0.65 0.678,0.659 0.67,0.8 0.73,0.685 0.764,0.789 0.778,1.144 0.845,1.029 0.846,1.026 0.858,0.989 0.86,0.984 0.87,1.002 0.926,0.822 0.96,1.151 0.964,1.136 1,1 1,1");

    audio.play();
    audio.volume = 0.2;
    TweenMax.set("#hat", {
      x: -120
    });

    tl.add("wind");

    //wind timeline
    tl.fromTo(".windbox", 1.5, {
      rotation: -10,
      x: -6,
      y: 3
    }, {
      x: -6,
      y: 3,
      rotation: 10,
      repeat: 2,
      yoyo: true,
      transformOrigin: "0% 80%",
      ease: easeConfig
    }, "wind");

    tl.to(".leaf1", 1.5, {
      attr: {
        d: "M321.6,240.6c-18.9-5.4-28.7-.7-27.6,11.7.1.9.3,2.6-.4,3.2v-.8C292,240.6,299.9,239.1,321.6,240.6Z"
      },
      repeat: 2,
      yoyo: true,
      ease: easeConfig
    }, "wind");

    tl.to(".leaf2", 1.5, {
      rotation: 8,
      transformOrigin: "0 100%",
      repeat: 2,
      yoyo: true,
      ease: easeConfig
    }, "wind");

    tl.to(".leaf3", 1.5, {
      rotation: 4,
      transformOrigin: "0 100%",
      repeat: 2,
      yoyo: true,
      ease: easeConfig
    }, "wind");

    tl.to(".leaf4", 1.5, {
      attr: {
        d: "M259.8,205.8c-10.9-.8-15.1,2.6-20.4,10.7-1.9,2.9-1.7,10.9-1.5,14.5C241.5,214.4,248.3,213.3,259.8,205.8Z"
      },
      repeat: 2,
      yoyo: true,
      ease: easeConfig
    }, "wind");

    tl.to(".leaf5", 1.5, {
      attr: {
        d: "M257.7,211.1c-7.7,1.2-16.4,1.7-18.2,11.6-.7,3.6-1.5,4.6-1.6,8.2C243.3,214.3,249.8,218,257.7,211.1Z"
      },
      repeat: 2,
      yoyo: true,
      ease: easeConfig
    }, "wind");

    tl.to("#hat", 5, {
      bezier: {
        type: "soft",
        values: [{
          x: -100,
          y: -50
        }, {
          x: 100,
          y: -100
        }, {
          x: 200,
          y: -50
        }, {
          x: 300,
          y: -80
        }, {
          x: 400,
          y: -200
        }, {
          x: 500,
          y: -100
        }, {
          x: 600,
          y: -100
        }, {
          x: 700,
          y: -50
        }, {
          x: 900,
          y: -130
        }],
        autoRotate: false
      },
      rotation: -1000,
      ease: Circ.easeInOut
    }, "wind");

    tl.to(".petal1", 3, {
      bezier: {
        type: "soft",
        values: [{
          x: 20,
          y: -70
        }, {
          x: 250,
          y: 80
        }, {
          x: 300,
          y: 80
        }, {
          x: 500,
          y: 90
        }, {
          x: 600,
          y: 100
        }, {
          x: 700,
          y: 80
        }, {
          x: 900,
          y: 130
        }],
        autoRotate: true
      },
      ease: Circ.easeInOut
    }, "wind");

    tl.to(".petal2", 4, {
      bezier: {
        type: "soft",
        values: [{
          x: 20,
          y: -70
        }, {
          x: 60,
          y: -100
        }, {
          x: 150,
          y: -50
        }, {
          x: 250,
          y: 120
        }, {
          x: 300,
          y: 80
        }, {
          x: 500,
          y: 90
        }, {
          x: 600,
          y: 100
        }, {
          x: 700,
          y: 80
        }, {
          x: 900,
          y: 130
        }],
        autoRotate: true
      },
      ease: Circ.easeOut
    }, "wind");

    tl.to(".petal3", 4, {
      bezier: {
        type: "soft",
        values: [{
          x: 40,
          y: -20
        }, {
          x: 60,
          y: -40
        }, {
          x: 150,
          y: -50
        }, {
          x: 250,
          y: -40
        }, {
          x: 300,
          y: -80
        }, {
          x: 500,
          y: -90
        }, {
          x: 600,
          y: -100
        }, {
          x: 700,
          y: -80
        }, {
          x: 900,
          y: 60
        }],
        autoRotate: false
      },
      rotation: 1000,
      ease: Circ.easeOut
    }, "wind+=3");

  }
};

const Rainbowarea = {
  template: '#rainbowarea',
  mounted () {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rainbow.mp3'),
                    tl = new TimelineMax();

      audio.play();
      audio.volume = 0.2;
            tl.add("rainbow", "+=0.5");

            //rainbow
            tl.fromTo("#beams", 2.5, {
                scale: 0,
                opacity: 0,
                x: 36,
                y: 34,
                rotation: 0
            }, {
                scale: 1,
                x: 36,
                y: 34,
                opacity: 0.2,
                rotation: "-720",
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }, "rainbow");

            tl.to("#beams", 4, {
                rotation: 360,
                repeat: 4,
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }, "rainbow+=2.5");

            tl.fromTo(".bow, #sun", 1, {
                opacity: 0,
            }, {
                opacity: 1,
                ease: Sine.easeOut
            }, "rainbow");

            tl.fromTo("#light", 3, {
                opacity: 0,
            }, {
                opacity: 0.8,
                ease: Sine.easeOut
            }, "rainbow");

            tl.fromTo("#blue", 2, {
                opacity: 0,
                x: 36,
                y: 21,
                scale: 0.5
            }, {
                opacity: 1,
                scale: 1,
                x: 36,
                y: 21,
                transformOrigin: "50% 50%",
                ease: Sine.easeOut
            }, "rainbow");

            tl.staggerFromTo("#rainbowpaths ellipse", 1.5, {
                drawSVG: false
            }, {
                drawSVG: true,
                ease: Sine.easeIn
            }, 0.1, "rainbow");

            tl.fromTo(".r-piece1", 0.5, {
                y: 88
            }, {
                y: 58,
                ease: Sine.easeOut
            }, "rainbow");

        }
};

const Tornadoarea = {
  template: '#tornadoarea',
  mounted () {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tornado.mp3'),
                    tl = new TimelineMax();

      audio.play();
            tl.add("tornado");

            //drops in
            tl.staggerFromTo(".tornado-group ellipse", 1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Sine.easeOut
            }, 0.15, "tornado");

            tl.staggerFromTo(".tornado-group ellipse", 1, {
                rotation: 0
            }, {
                rotation: 20,
                transformOrigin: "50% 50%",
                repeat: 10,
                yoyo: true,
                ease: Sine.easeInOut
            }, 0.15, "tornado-=1");

            tl.fromTo("#fog", 1, {
                opacity: 0,
                scale: 0,
                x: 75,
                y: 75
            }, {
                opacity: 1,
                scale: 1,
                x: 75,
                y: 75,
                transformOrigin: "50% 50%",
                ease: Sine.easeOut
            }, "tornado");

            tl.fromTo("#lightning", 1.2, {
                drawSVG: "0% -10%"
            }, {
                drawSVG: "100% 110%",
                repeat: 3,
                repeatDelay: 1.5,
                ease: Sine.easeInOut
            }, "tornado");

        }
};

//main app
const app = new Vue({
  el: '#app',
  computed: {
    showWeather() {
      return store.state.showWeather;
    },
    template() {
      return store.state.template;
    }
  },
  methods: {
    updateTemplate() {
      store.commit('updateTemplate');
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.set(el, {
        opacity: 0,
        scale: 0.9,
        visibility: 'visible',
        transformOrigin: '50% 50%'
      });

      tl.to(el, 0.75, {
        opacity: 1,
        scale: 1,
        ease: Circ.easeOut
      }, 1);

      tl.to(el, 0.75, {
        opacity: 0.8,
        scale: 0.97,
        repeat: 5,
        yoyo: true,
        ease: Sine.easeOut
      });

      tl.to(el, 1, {
        opacity: 0,
        scale: 0.9,
        ease: Sine.easeIn
      }, "+=0.5");

    },
    beforeEnterStroke(el) {
      el.style.strokeWidth = 0;
      el.style.stroke = 'orange';
    },
    enterStroke(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.to(el, 0.75, {
        strokeWidth: 1,
        ease: Circ.easeOut
      }, 1);

      tl.to(el, 4, {
        strokeWidth: 0,
        opacity: 0,
        ease: Sine.easeOut
      });

    },
    leaveDroparea(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.to(el, 1, {
        opacity: 0,
        ease: Sine.easeIn
      });

    },
    leaveDialog(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.add("leave");

      tl.to(el, 0.3, {
        rotation: -2,
        repeat: 2,
        yoyo: true,
        transformOrigin: "50% 100%",
        ease: Sine.easeInOut
      }, "leave");

      tl.fromTo(el, 1, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Sine.easeIn
      }, "leave");

    }
  },
  components: {
    appDefs: Defs,
    appDialog: Dialog,
    appDroparea: Droparea,
    appWindarea: Windarea,
    appRainbowarea: Rainbowarea,
    appTornadoarea: Tornadoarea
  }
});
</script>

<style>
body {
  background: #050505;
}

.notifier-svg {
  max-width: 1300px;
  margin: 0 auto;
  display: table;
}

#app {
  font-family: 'Titillium Web', sans-serif;
}

.press {
  visibility: hidden;
}

.fadeout-enter-active,
.fadeout-leave-active {
  transition: opacity 0.25s;
}

.fadeout-enter,
.fadeout-leave-to {
  opacity: 0;
}

#thx-button,
#phonebutton {
  cursor: pointer;
}

#wind {
  -webkit-transform: translate(-20px, 59px);
  transform: translate(-20px, 59px);
  opacity: 0.9;
}

#tornado {
  -webkit-transform: translate(5px, 54px);
  transform: translate(5px, 54px);
}

#rainbow {
  -webkit-transform: translate(0px, 50px);
  transform: translate(0px, 50px);
}

@media screen and (max-width: 700px) {
  .notifier-svg {
    width: 120vw;
    height: 120vh;
    margin-top: -120px;
    margin-left: -50px;
  }
}
</style>
-->
<template>

  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"

            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">GAP Maze AI Profile</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large >
        <v-avatar size="32px" tile>
          <!--img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"

          -->
          <v-list>
            <v-list-tile v-for="(item, i) in log" :key="i" >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
          </v-list>
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>


       <!--    <v-tooltip right>
            <v-btn
              slot="activator"
              :href="source"
              icon
              large
              target="_blank"
            >
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>

       -->

          <router-view/>


          <!-- Farmers List start -->



            <!-- Farmers List end -->




        </v-layout>



      </v-container>
    </v-content>




    <!-- Bottom Navigation ..... start -->

    <v-card height="200px">
          <!--  <div class="headline text-xs-center pa-5">

            Active: {{ e2 }}

             <component v-bind:is="currentTab" > </component>

            </div>   -->
          <v-bottom-nav
            :value="true"
            :active.sync="e2"
            :color="color"

            shift
            :fixed="true"
          >
          <!-- <v-btn dark v-on:click="currentTab = tab-home">   -->

          <!--  <v-btn dark @click.stop="dialog = !dialog">    -->
          <v-btn dark to="/audit">
            <span>Audit</span>
            <v-icon>ondemand_video</v-icon>
          </v-btn>

          <v-btn dark to="/farmer" >
            <span>Farmers</span>
            <v-icon>music_note</v-icon>
          </v-btn>

          <v-btn dark to="/googlemap" >
            <span>Map</span>
            <v-icon>book</v-icon>
          </v-btn>

          <v-btn dark to="/profile" >
            <span>Profile</span>
            <v-icon>image</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>


      <!-- Bottom Navigation ..... end -->




    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Farmer GAP Applicatiom Form
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Province"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="District"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>





        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  // export default {
  //   data: () => ({
  //     drawer: null
  //   }),
  //   props: {
  //     source: String
  //   }
  // }


  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      log: [
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me 2'
          }
        ],
      items: [
        { icon: 'contacts', text: 'Contacts' },
        { icon: 'history', text: 'Frequently contacted' },
        { icon: 'content_copy', text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ],

      // Farmers List start
      items1: [
                { icon: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' }
              ],
      // Farmers List end

       e1: 'recent',

      //<!-- Bottom Navigation ..... start -->
      e2: 3
      //<!-- Bottom Navigation ..... end -->
    }),
    props: {
      source: String
    },

    //<!-- Bottom Navigation ..... start -->
    computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
    //<!-- Bottom Navigation ..... end -->


  }
</script>
