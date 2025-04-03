<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
  <el-button size="large" type="primary" @click="greet">{{ desc }}</el-button>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {GreeterRequest} from '@/grpc/greeter_pb'
import {GreeterClient} from "@/grpc/greeter_grpc_web_pb"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      "desc": "发送请求"
    }
  },
  methods:
      {
        greet() {
          // alert("nihcccao")
          // return 0
          // eslint-disable-next-line no-unreachable
          const client = new GreeterClient('http://172.16.11.246:8080')
          const request = new GreeterRequest()
          request.setName("w222")

          // eslint-disable-next-line no-unused-vars
          client.sayHello(request, {}, (err, response) => {
            if (err !== null) {
              alert(err)
              return
            }
            console.log(response.getMessage())
          })
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
