<template>
  <div>
    <Nav></Nav>
    <h1>shopping list</h1>
    <div class="row">
      <mdb-input label="Item" type="text" v-model="item" class="itemInput m-auto"/>
      <mdb-btn size="sm" type="button" @click="addItem" color="primary m-auto addItem">Add Item</mdb-btn>
    </div>
    <div class="row listItems">
      <div class="col-12 card mt-2" v-for="item in itemName" :key="item.id">
        <div class="item card-body">
          <label class="w-25">{{item.items}}</label>
          <mdb-btn
            size="sm"
            :id="item.id"
            type="button"
            @click="increment($event)"
            color="success ml-5 increment"
          >+</mdb-btn>
          <mdb-btn
            size="sm"
            :id="item.id"
            type="button"
            @click="decrement($event)"
            color="primary ml-5 decrement"
          >-</mdb-btn>
          <span class="ml-5">count {{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import { mdbInput, mdbBtn } from "mdbvue";
import { constants } from "crypto";
export default {
  components: {
    Nav,
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn
  },
  data: function() {
    return {
      itemName: [],
      item: "",
      count: 0
    };
  },
  methods: {
    addItem() {
      this.itemName.push({
        items: this.item,
        id: this.itemName.length + 1,
        count: 0
      });
      console.log("item ", this.itemName);
    },
    increment(event) {
      this.itemName.map(item => {
        if (item.id.toString() === event.target.id.toString()) {
          item.count = item.count + 1;
          console.log("it is if");
        } else {
          console.log("it is else");
        }
      });
      console.log("increment", this.itemName);
    },
    decrement(event) {
      this.itemName.map(item => {
        if (item.id.toString() === event.target.id.toString()) {
          if (item.count === 0) {
            item.count = 0;
          } else if (item.count !== 0) {
            item.count = item.count - 1;
          }
        } else {
          console.log("it is else");
        }
      });
    }
  }
};
</script>
<style scoped>
.listItems {
  margin: 1rem 1rem;
  width: auto;
  height: auto;
  background-color: aliceblue;
  padding: 2rem;
}
.title {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.addItem {
  border-radius: 1rem !important;
  /* margin-right: 2rem !important; */
  margin-left: 1rem !important;
}
.itemInput {
  /* margin-left: 2rem !important; */
  margin-right: 1rem !important;
}
.item {
  align-content: center;
  width: auto;
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: left;
  /* border: 2px solid black; */
}
.increment {
}
.decrement {
}
</style>
