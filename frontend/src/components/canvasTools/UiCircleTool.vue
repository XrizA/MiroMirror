<template>
  <div class="ui-circle component"></div>
</template>

<script>
import customEvents from "../../utils/customEvents";
import EventBus from "../../EventBus";
import { fabric } from "fabric";

export default {
  name: "UiCircleTool",
  props: {
    canvasProp: null,
  },
  data() {
    return {
      canvas: this.canvasProp,
    };
  },
  mounted() {
    EventBus.on(customEvents.canvasTools.circle, (payload) => {
      this.createCircle(payload);
    });
  },
  methods: {
    createCircle(options) {
      const circle = new fabric.Circle({
        left: 100,
        top: 100,
        radius: 75,
        stroke: options.stroke,
        fill: options.fill,
      });

      this.canvas.add(circle).setActiveObject(circle);
      this.canvas.renderAll();
    },
  },
};
</script>
