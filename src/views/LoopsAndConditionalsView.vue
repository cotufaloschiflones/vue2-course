<template>
  <div>
    <h2>Condicionales</h2>
    <h3 v-if="visible">
      Hola soy un elemento condicionado
    </h3>
    <p v-if="visible === undefined">
      No me han establecido visibilidad
    </p>
    <p v-else-if="visible">
      Soy visible
    </p>
    <p v-else>
      Soy invisible
    </p>
    <button @click="toggleVisibility">
      {{ buttonText }} elemento condicionado
    </button>

    <h2>Listas / Bucles</h2>
    <p>Array</p>
    <ul>
      <li
        v-for="(student, index) in students"
        :key="index"
      >
        {{ student.name }} ({{ student.age }})
        <ul>
          <li>Skills:</li>
          <li
            v-for="(skill, i) in student.skills"
            :key="i"
          >
            {{ skill }}
          </li>
        </ul>
      </li>
    </ul>

    <p>Object</p>
    <ul>
      <li
        v-for="(area, key) in techs"
        :key="key"
      >
        {{ key }}: {{ area.join(', ') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoopsAndConditionals',
  data: () => ({
    visible: undefined,
    techs:   {
      frontend: ['Vue', 'React', 'Angular'],
      backend:  ['Node', 'PHP', 'Java']
    },
    students: [
      {
        name:   'Juan',
        age:    20,
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name:   'Pedro',
        age:    21,
        skills: ['CSS', 'JavaScript'],
      },
      {
        name:   'Luis',
        age:    22,
        skills: ['HTML', 'CSS'],
      },
      {
        name:   'Ana',
        age:    23,
        skills: ['Sass', 'CSS', 'Typescript'],
      },
      {
        name:   'Maria',
        age:    24,
        skills: ['Node', 'CSS', 'PHP'],
      },
      {
        name:   'Jose',
        age:    25,
        skills: ['Python', 'C#', 'Unity'],
      },
    ],
  }),
  computed: {
    buttonText() {
      return this.visible ? 'Ocultar' : 'Mostrar'
    },
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
      this.logVisibility()
    },
    logVisibility() {
      console.log(`My visibilidad es ahora de ${this.visible}`)
    }
  },
}
</script>

<style scoped lang="scss">
  ul{
    list-style: none;
    li{
      ul {
        li {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>
