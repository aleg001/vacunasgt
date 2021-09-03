<template>
  <div class="d-flex flex-row justify-space-between center"
      :class="{ 'active': selected, 'no-available': !available }">
    <div class="d-flex flex-column align-start text-left"
        :style="{ 'width': $vuetify.breakpoint.mobile ? '55%' : '70%' }">
      <label>{{ item.centro }}</label>
      <h6>{{ item.grupo }}</h6>
    </div>

    <div class="d-flex flex-row justify-space-between align-center"
        :style="{ 'width': $vuetify.breakpoint.mobile ? '45%' : '30%' }">
      <div class="pipe"></div>
      <div class="text-center">
        <span>{{ item.vacuna }}</span>
        <h6>{{ item.dosis }}</h6>
      </div>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selected', 'item'],

  computed: {
    available() {
      switch (this.item.disponibilidad) {
        case 'Si': return true
        case 'No': default: return false
      }
    }
  }
}
</script>

<style scoped>
.center {
  color: #4F4A88;
  width: 100%;
  height: fit-content;
  border: 2px solid #4F4A88;
  border-radius: 10px;
  padding: 1vh 1.5vw;
  font-size: 16px;
  margin-bottom: 2.5vh;
  transition: 0.3s ease all;
}

.center:hover {
  background-color: #c3c1d8;
  cursor: pointer;
}

.active {
  background-color: #4F4A88;
  color: white;
}

.active .pipe {
  background-color: white;
}

.pipe {
  height: 100%;
  width: 2px;
  background-color: #4F4A88;
}

.no-available {
  color: gray;
  background-color: #e6dbfd;
  border: 2px solid gray;
}

.no-available .pipe {
  background-color: gray;
}
</style>
