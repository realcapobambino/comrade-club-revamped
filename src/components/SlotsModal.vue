<template>
  <!-- backdrop -->
  <div
    v-if="showModal"
    class="top-0 h-screen w-full bg-black/50 dark:bg-white/25"
  >
    <!-- modal -->
    <div class="mx-auto rounded-lg bg-white p-5 dark:bg-black md:w-1/2">
      <div>
        <div class="text-center font-bold text-red-600">Disclaimer</div>
        <div class="m-4 flex flex-col py-4">
          <span class="m-4 p-2 text-black dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis quis recusandae, quisquam quo assumenda quod tempora,
            deleniti fuga delectus aliquam inventore ad incidunt. Fugiat
            consequatur labore animi magnam unde nihil assumenda dolorem vero
            blanditiis minus et quam, architecto rem nobis debitis sunt eveniet
            non ratione explicabo iste quae, officia voluptate eos sapiente.
          </span>
          <span class="m-2 p-2 text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            est!
          </span>
          <div>
            <input type="checkbox" required v-model="ageCheck" class="" />
            <label ref="ageConsent" for="" class="text-black dark:text-white"
              >18+</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              required
              v-model="termsConditions"
              class=""
            />
            <label ref="terms" for="" class="text-black dark:text-white"
              >Consent and T/C</label
            >
          </div>
          <button class="m-2 bg-purple-400 p-2" @click="closeModal">
            Enter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    let showModal = ref(true);

    const ageCheck = ref(false);
    const termsConditions = ref(false);

    const closeModal = () => {
      if (ageCheck.value) {
        if (termsConditions.value) {
          showModal.value = false;
        } else {
        }
      } else {
        // ageConsent.classList.add("text-red-500");
      }
    };

    return { ageCheck, termsConditions, closeModal, showModal };
  },
};
</script>

<style lang="scss" scoped></style>
