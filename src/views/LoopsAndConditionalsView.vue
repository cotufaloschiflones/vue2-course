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

    <div style="margin: 30px 0;">
      <template v-if="loginType === 'username'">
        <label>Nombre de Usuario</label>
        <input placeholder="Ingrese su nombre de usuario">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Ingrese su email">
      </template>
      <div>
        <button @click="toggleLoginType">
          Alternar tipo de login
        </button>
      </div>
    </div>

    <!--
      Podemos utilizar la etiquta template para pintar bloques
      y no generar tags y anidamiento innecesario de elementos html
      https://es.vuejs.org/v2/guide/conditional.html#Grupos-Condicionales-con-v-if-en-lt-template-gt
    -->
    <template v-if="visible">
      <h3>
        Hola soy un elemento condicionado
      </h3>
      <p>
        Soy visible
      </p>
    </template>

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
        v-for="(area, key, index) in techs"
        :key="key"
      >
        {{ key }}({{ index }}): {{ area.join(', ') }}
      </li>
    </ul>

    <p>Es posible usar la sintaxis de for of en lugar de for in</p>
    <ul>
      <li
        v-for="(area, key) of techs"
        :key="key"
      >
        {{ key }}: {{ area.join(', ') }}
      </li>
    </ul>

    <p>Podemos también iterar rangos</p>
    <ul>
      <li
        v-for="n in 10"
        :key="n"
      >
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoopsAndConditionals',
  data: () => ({
    loginType: 'username',
    visible:   undefined,
    techs:     {
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
  mounted() {
    // añadiendo de forma manual una nueva propiedad
    this.$set(this.techs.frontend, 3, 'Polymer')
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
      this.logVisibility()
    },
    logVisibility() {
      console.log(`My visibilidad es ahora de ${this.visible}`)
    },
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    },
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
