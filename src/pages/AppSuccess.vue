<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper w-100 d-flex justify-content-center align-items-center text-center">
    <div class="success">
      <img src="../assets/images/main/pittogramma.png" alt="" class="animatedImage" />
      <h2 class="mt-5 mb-3">Ordine effettuato con successo!</h2>
      <router-link to="/" class="btn btn-success">Torna alla Home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-color: #f9b91f;
  overflow: hidden;

  .success {
    animation: fadeIn 1s ease;
  }

  img {
    height: 30vh;
    animation: pulse 1s infinite alternate;
    transition: transform 0.3s ease-out;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}

.disappear {
  display: none;
}
</style>
