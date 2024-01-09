
<template>
  <h1>Title: {{ dataInfo.title }}</h1>
  <h1>Name: {{ dataInfo.name }}</h1>
  <a :href="dataInfo.link">Youtube</a>
  <h2>Event Modifire</h2>
  <input type="text" @keyup.enter="handelKeyUp">
  <h1>Two way binding</h1>
  <input v-model="num" type="text"/>
  <br>
  <button @click="getDouble">Get Double</button>
  <button @click="getSquare">Get Square</button>
  <button @click="reset">Reset</button>
  <br>
  <p>Entered Number: {{ num }}</p>
  <p>Result: {{ result }}</p>

  <h1>Skills Array</h1>
  <ul>
    <li v-for="(skill, index) in skills">{{ skill }}  <button @click="removeSkill(index)"> X</button></li>
  </ul>
  <br>
  <input type="text" v-model="newSkill">
  <button @click="addSkill">Add Skill</button>

  <h1>Info Object</h1>
  <table>
    <tr v-for="(value, key, index) in about" style="border: 1px solid;">
      <th>{{ index }}</th>
      <th>{{ key }}</th>
      <tr>{{ value }}</tr>
    </tr>
  </table>

  <br>
  <hr>
  <input type="text" placeholder="Enter your mobile number" v-model="phoneNumber">
  <hr>
  <input type="text" placeholder="Enter your First name" v-model="info.firstName">
  <input type="text" placeholder="Enter your Last Name" v-model="info.lastName">
</template>
<script>
export default{
  name:'TheWelcome',
  data(){
    return {
      dataInfo:{
        name:"This is name",
        title: "This is title",
        link:'https://www.youtube.com/'
      },
      skills:[
        "Java", "JavaScript", "PHP", "Python", "C++", "c"
      ],
      about:{
        name:"Ramzan Ali",
        address:"Dhaka",
        phone:"01511111111"
      },
      num:'',
      result:'',
      newSkill:'',
      phoneNumber:'',
      info:{
        firstName:'',
        lastName:'',
      }
    }
  },
  methods:{
    handelKeyUp(event){
      this.dataInfo.name=event.target.value
    },
    getDouble(){
      this.result=this.num*2;
    },
    getSquare(){
      this.result=this.num*this.num;
    },
    reset(){
      this.num='',
      this.result=''
    },
    addSkill(){
      this.skills.push(this.newSkill);
      this.newSkill='';
    },
    removeSkill(index){
      this.skills.splice(index,1);
    }
  },
  watch:{
    phoneNumber(newValue, oldValue){
      if(isNaN(newValue)){
        this.phoneNumber=oldValue
      }
    },
    'info.firstName':function(newValue, oldValue){
      console.log(newValue, oldValue);
    },
    //for full object

    info:{
      deep:true, 
      handler:function(newValue, oldValue){
        console.log(newValue, oldValue);
      }
    }
  }
}
</script>