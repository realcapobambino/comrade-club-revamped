<template>
  <div class="h-screen bg-gray-200 dark:bg-black">
    <div>
      <SlotsModal>
        <!--  -->
      </SlotsModal>
    </div>
    <div class="p-4">
      <div class="dark-text text-center text-4xl font-extrabold">
        Slot Machine
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SlotsModal from "../components/SlotsModal.vue";

export default {
  components: {
    SlotsModal,
  },
  props: [],
  setup() {},
};
</script>

<style lang="scss" scoped></style>
