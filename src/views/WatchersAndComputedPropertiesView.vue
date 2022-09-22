<template>
  <div>
    <ul>
      <li>Students raw data</li>
      <li
        v-for="(student, i) in students"
        :key="i"
      >
        {{ student.name }} ({{ student.age }})
      </li>
    </ul>

    {{ fullNameYoungerStudent }}
    {{ fullNameYoungerStudentMethod() }}

    <ul>
      <li>Students ordered by age</li>
      <li
        v-for="(student, i) in studentsOrderedByAge"
        :key="i"
      >
        {{ student.name }} ({{ student.age }})
      </li>
    </ul>
  </div>
</template>

<script>
// opciones dentro de la instancia de vue
// inheritAttrs: false,
// data
// lifecycle hooks (beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed)
// methods
// filters

// computed
// watch
export default {
  name:       'WatchersAndComputedPropertiesView',
  components: {},
  props:      {},
  data:       () => ({
    // backend raw data
    students: [
      {  name: 'Pedro', surname: 'Palote', age: 21 },
      {  name: 'Maria', surname: 'Palote', age: 24 },
      {  name: 'Ana', surname: 'Palote', age: 23 },
      {  name: 'Luis', surname: 'Palote', age: 22 },
      {  name: 'Juan', surname: 'Palote', age: 20 },
      {  name: 'Jose', surname: 'Palote', age: 25 },
      {  name: 'Mike', surname: 'Ojito Saltón', age: 18 }
    ],
  }),
  computed: {
    studentsOrderedByAge() {
      console.log('ejecutando computed')
      const students = [...this.students]
      return students.sort((a, b) => a.age - b.age)
    },
    fullNameYoungerStudent() {
      const youngerStudent = this.studentsOrderedByAge[0]
      return `${youngerStudent.name} ${youngerStudent.surname}`
    },
    myComputedVar: {
      get() {
        return this.studentsOrderedByAge[0]
      },
      set(newValue) {
        // aquí podemos setear como nos plazca el valor
        // contra vuex, pasandolo al padre
        console.log(newValue)
        // this.studentsOrderedByAge[0] = newValue
      }
    }
  },
  watch: {
    /* fullNameYoungerStudent(nV, oV) {
      console.log('ha cambiado el usuario más joven', nV, oV)
    }, */
    /* fullNameYoungerStudent: {
      immediate: true,
      handler(nV, oV) {
        console.log('ha cambiado el usuario más joven', nV, oV)
      }
    } */
    // si necesitamos watchear un objeto debemos hacerlo sobre un objeto reactivo ya que si no la referencia no cambia,
    // pues es estática y siemprre apunta al mismo, tanto el nV como el oV
    studentsOrderedByAge: {
      immediate: true,
      handler(nV, oV) {
        console.log('ha cambiado students', nV, oV)
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.students.push({ name: 'Pablo', surname: 'González',  age: 37 })
    }, 3000)
    setTimeout(() => {
      this.students.push({ name: 'C Tangana', surname: 'El madrileño',  age: 17 })
    }, 5000)
  },
  methods: {
    fullNameYoungerStudentMethod() {
      const youngerStudent = this.studentsOrderedByAge[0]
      return `${youngerStudent.name} ${youngerStudent.surname}`
    }
  }
}
</script>
