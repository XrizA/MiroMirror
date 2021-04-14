<template>
  <div class="ui-drawing-tool component"></div>
</template>

<script>
import customEvents from "../../utils/customEvents";
import EventBus from "../../EventBus";

export default {
  name: "UiDrawingTool",
  props: {
    canvasProp: null,
  },
  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    EventBus.on(customEvents.canvasTools.drawing, (payload) => {
      this.canvas = this.canvasProp;
      this.canvas.isDrawingMode = payload.drawingMode;
    });
  },
};
</script>
