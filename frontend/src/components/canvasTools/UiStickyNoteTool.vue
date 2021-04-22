<template>
  <div class="ui-sticky-note-tool component"></div>
</template>

<script>
import customEvents from "../../utils/customEvents";
import EventBus from "../../EventBus";

export default {
  name: "UiSickyNoteTool",
  props: {
    canvasProp: null,
  },
  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    EventBus.on(customEvents.canvasTools.stickyNote, (payload) => {
      this.canvas = this.canvasProp;
      this.canvas.isDrawingMode = false;
      console.log(payload);
    });
  },
};
</script>
