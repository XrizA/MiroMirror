<template>
  <div class="ui-whiteboard component">
    <canvas id="canvas"></canvas>
    <UiRectangleTool :canvasProp="canvas" />
    <UiCircleTool :canvasProp="canvas" />
  </div>
</template>

<script>
import { markRaw } from "@vue/reactivity";
import { fabric } from "fabric";
import UiRectangleTool from "@/components/canvasTools/UiRectangleTool";
import UiCircleTool from "@/components/canvasTools/UiCircleTool";

export default {
  name: "UiWhiteboard",
  components: {
    UiRectangleTool,
    UiCircleTool,
  },
  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    this.canvas = markRaw(
      new fabric.Canvas("canvas", {
        width: 1247,
        height: 687,
      })
    );
    this.canvas.isDrawingMode = true;
  },
};
</script>

<style scoped>
@import "../assets/scss/_whiteboard.scss";
</style>
