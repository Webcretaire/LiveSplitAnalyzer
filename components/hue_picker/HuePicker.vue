<template>
  <div id="simplest-color-picker" ref="simplestHuePicker">
    <hue-circle-svg/>
  </div>
</template>

<script>
/**
 * Taken from Rosen
 * {@link https://github.com/radial-color-picker/rotator/blob/master/src/utils.js utils}.
 */

const TO_DEGREES = 180 / Math.PI;

export const normalizeAngle = angle => {
  const mod = angle % 360;

  return mod < 0 ? 360 + mod : mod;
};

export const getRotationFromCoords = ({ x, y }, rect) => {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return Math.atan2(y - cy, x - cx) * TO_DEGREES;
};

export const noop = () => {};

/**
 * This component has one single purpose: return the angle degrees of the touch when moving
 */
export default {
  name: "hue-picker",
  data() {
    return {
      //active avoids to track mousemove without a mousedown
      active: false,
      element: null,
      hue: 0
    };
  },
  mounted() {
    this.element = this.$refs.simplestHuePicker;
    this.addListeners();
  },
  methods: {
    addListeners() {
      //Passive options is useful to avoid blocking the browser main thread
      //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
      this.element.addEventListener("touchstart", this.handleStart, {
        passive: true
      });
      this.element.addEventListener("touchmove", this.handleMove, {
        passive: false
      });
      this.element.addEventListener("touchend", this.handleEnd, {
        passive: true
      });
      this.element.addEventListener("touchcancel", this.handleEnd, {
        passive: true
      });
      this.element.addEventListener("mousedown", this.handleStart, {
        passive: true
      });
      this.element.addEventListener("mousemove", this.handleMove, {
        passive: false
      });
      this.element.addEventListener("mouseup", this.handleEnd, {
        passive: true
      });
      this.element.addEventListener("mouseleave", this.handleEnd, {
        passive: true
      });
    },
    handleStart() {
      this.active = true;
    },
    handleMove(ev) {
      if (this.active) {
        //if we do not prevent default, on desktops, mousemove would start a drag-and-drop of our svg background
        ev.preventDefault();
        //targetTouches is decalred const since it is a read only property
        const point = event.targetTouches ? event.targetTouches[0] : event;
        this.updateAngle({
          x: point.clientX,
          y: point.clientY
        });
      }
    },
    handleEnd() {
      this.active = false;
    },
    updateAngle(newPoint) {
      let currentAngle = getRotationFromCoords(
        newPoint,
        this.element.getBoundingClientRect()
      );
      /**
       * atan2 gives values between -180 to 180 deg add 90 degrees offset so that it starts
       * from 0 deg (or red) and then normalize negative values
       */
      this.hue = normalizeAngle(Math.round(currentAngle) + 90);
      this.$emit("input", this.hue);
    }
  }
};
</script>
