<template>
  <div class="ui-whiteboard component">
    <canvas id="canvas"></canvas>
    <UiDrawingTool :canvasProp="canvas" />
    <UiRectangleTool :canvasProp="canvas" />
    <UiCircleTool :canvasProp="canvas" />
    <UiTextboxTool :canvasProp="canvas" />
  </div>
</template>

<script>
import { markRaw } from "@vue/reactivity";
import { fabric } from "fabric";
import UiDrawingTool from "@/components/canvasTools/UiDrawingTool";
import UiRectangleTool from "@/components/canvasTools/UiRectangleTool";
import UiCircleTool from "@/components/canvasTools/UiCircleTool";
import UiTextboxTool from "@/components/canvasTools/UiTextboxTool";

export default {
  name: "UiWhiteboard",
  components: {
    UiDrawingTool,
    UiRectangleTool,
    UiCircleTool,
    UiTextboxTool,
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
  },
};
</script>

<style scoped>
@import "../assets/scss/_whiteboard.scss";
</style>
